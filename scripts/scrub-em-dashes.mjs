#!/usr/bin/env node
/**
 * Sitewide Em-Dash Scrubber — The Kas Group
 *
 * Replaces em dashes (—) in site content with natural punctuation so text
 * reads human-written. Context-aware rules:
 *   1. Paired parentheticals ("leaders — CROs and VPs — are...") → parentheses
 *   2. " — and/but/or/not..." → ", and/but/or/not..."
 *   3. " — lowercase continuation" → ", "
 *   4. " — Capitalized label/title" → ": "
 *
 * Usage:
 *   node scripts/scrub-em-dashes.mjs --dry-run   (show all replacements)
 *   node scripts/scrub-em-dashes.mjs             (apply)
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DRY_RUN = process.argv.includes("--dry-run");

const ROOTS = ["src", "public"];
const SKIP = [/generated-guide-markdown\.ts$/, /\/\.DS_Store$/, /\.(ico|png|jpe?g|svg|webp|woff2?|ttf|eot)$/];
const TEXT_EXT = /\.(tsx?|mjs|txt|md|json)$/;

function walk(dir) {
    const out = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, entry.name);
        if (SKIP.some((r) => r.test(p))) continue;
        if (entry.isDirectory()) out.push(...walk(p));
        else if (TEXT_EXT.test(entry.name)) out.push(p);
    }
    return out;
}

const log = [];
function scrub(text, file) {
    let count = 0;

    // 1. Paired parentheticals on the same line: " — inner — "
    text = text.replace(/ — ([^—\n]{2,90}?) — /g, (_m, inner) => {
        count++;
        log.push({ file, rule: "pair->()", from: `…${_m.slice(0, 70)}…`, to: ` (${inner.trim()}) ` });
        return ` (${inner.trim()}) `;
    });

    // 2-4. Remaining spaced em dashes, decided by what follows
    text = text.replace(/ — /g, (match, offset, str) => {
        const next = str.slice(offset + 3, offset + 40);
        count++;
        let to;
        if (/^(and|but|or|nor|yet|so|not|which|where|making|giving|turning|including|with|for|then)\b/i.test(next)) {
            to = ", ";
        } else if (/^[a-z]/.test(next)) {
            to = ", ";
        } else if (/^[A-Z0-9$"'(]/.test(next)) {
            to = ": ";
        } else {
            to = ", ";
        }
        log.push({ file, rule: `spaced->'${to.trim() || "comma"}'`, from: `…${str.slice(Math.max(0, offset - 30), offset + 25).replace(/\n/g, " ")}…`, to });
        return to;
    });

    // 5. Unspaced em dashes (rare)
    text = text.replace(/(\S)—(\S)/g, (m) => {
        count++;
        log.push({ file, rule: "unspaced->hyphen", from: m, to: "-" });
        return "-";
    });

    return { text, count };
}

let total = 0;
const touched = [];
for (const root of ROOTS) {
    for (const file of walk(root)) {
        const original = readFileSync(file, "utf8");
        if (!original.includes("—")) continue;
        const { text, count } = scrub(original, file);
        total += count;
        touched.push(`${file} (${count})`);
        if (!DRY_RUN && text !== original) writeFileSync(file, text);
    }
}

console.log(`\n${DRY_RUN ? "[DRY RUN] " : ""}${total} em dash(es) in ${touched.length} file(s):\n`);
touched.forEach((t) => console.log(`  ${t}`));

if (DRY_RUN) {
    console.log(`\n--- All replacements (${log.length}) ---\n`);
    log.forEach((l, i) => {
        console.log(`${String(i + 1).padStart(3)}. [${l.rule}] ${l.file}`);
        console.log(`     from: ${l.from}`);
        if (l.to && l.to.length < 80 && l.rule !== "spaced->''") console.log(`     to:   ${l.to}`);
    });
} else {
    console.log(`\n✅ Applied. Re-run the markdown generator and rebuild before deploying.`);
}
