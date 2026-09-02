#!/usr/bin/env node
/**
 * Guide Markdown Generator for www.thekasgroup.com
 *
 * Fetches the rendered HTML of every guide page (plus a few extra content
 * pages), converts the <main> content to clean Markdown, and writes
 * src/lib/generated-guide-markdown.ts — the map served by the middleware for
 * `Accept: text/markdown` requests (AEO / agent-friendly content negotiation).
 *
 * Usage:
 *   1. Build and start the site locally:
 *        npm run build && npx next start -p 3100
 *   2. Run the generator:
 *        node scripts/generate-guide-markdown.mjs http://localhost:3100
 *   3. Rebuild so the middleware bundles the new map:
 *        npm run build
 *
 * Re-run this script whenever guide content changes.
 */

import { readdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import TurndownService from "turndown";
import gfmPkg from "turndown-plugin-gfm";
import { JSDOM } from "jsdom";

const { gfm } = gfmPkg;

const BASE_URL = process.argv[2] || "http://localhost:3100";
const SITE_URL = "https://www.thekasgroup.com";
const APP_DIR = "src/app";
const OUT_FILE = "src/lib/generated-guide-markdown.ts";

// ─── Collect paths to convert ────────────────────────────────────────────────

const guideSlugs = readdirSync(join(APP_DIR, "guides"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(APP_DIR, "guides", entry.name, "page.tsx")))
    .map((entry) => entry.name);

const paths = guideSlugs.map((slug) => `/guides/${slug}`);

// Extra content pages that deserve full markdown too
const extraPages = [
    { path: "/blog/fractional-saas-sales-recruiting", page: "src/app/blog/fractional-saas-sales-recruiting/page.tsx" },
    { path: "/candidate-mapping-brief", page: "src/app/candidate-mapping-brief/page.tsx" },
];
for (const extra of extraPages) {
    if (existsSync(extra.page)) paths.push(extra.path);
}

console.log(`\n📝 Generating markdown for ${paths.length} pages from ${BASE_URL}\n`);

// ─── Markdown conversion setup ───────────────────────────────────────────────

const turndown = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "*",
    strongDelimiter: "**",
});
turndown.use(gfm);

// Elements that never help an LLM: scripts, styles, nav/breadcrumbs, icons,
// images (optimized URLs), forms, and buttons.
const STRIP_SELECTORS = "script, style, noscript, nav, svg, img, form, button, video, iframe, template";

function htmlToMarkdown(html, pagePath) {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    const description =
        document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";

    const main = document.querySelector("main") ?? document.body;
    main.querySelectorAll(STRIP_SELECTORS).forEach((el) => el.remove());

    // Build the H1 from the <title> metadata (page H1s may contain <br> line
    // breaks that would otherwise split the heading), then drop the page H1.
    // Some page titles already include the "| The Kas Group" suffix and the
    // layout template may append it again — strip all trailing occurrences.
    const title = document.title.replace(/(\s*\|\s*The Kas Group)+\s*$/gi, "").trim();
    const h1 = main.querySelector("h1");
    if (h1) h1.remove();

    let body = turndown.turndown(main.innerHTML);

    // Collapse whitespace noise
    body = body.replace(/\u00a0/g, " ").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

    // Header block: title, description quote, and canonical source URL
    const sourceLine = `**Source**: ${SITE_URL}${pagePath}`;
    const headerBlock = [
        `# ${title}`,
        "",
        ...(description ? [`> ${description}`, ""] : []),
        sourceLine,
        "",
    ].join("\n");

    // AEO citation footer — identity + contact so AI engines can attribute
    return `${headerBlock}

${body}

---

## About The Kas Group

The Kas Group (TKS) is an elite sales and AI technical recruiting firm founded in 2014, placing B2B SaaS sales leaders (VP of Sales, CRO, AEs) and Ph.D.-vetted AI/ML engineers for high-growth technology companies.

- **Website**: ${SITE_URL}
- **Email**: chris@thekasgroup.com
- **All Guides**: ${SITE_URL}/guides
- **Brand Facts**: ${SITE_URL}/brand-facts
`;
}

// ─── Fetch, convert, and collect ─────────────────────────────────────────────

const map = {};
let ok = 0;
let failed = 0;

for (const pagePath of paths) {
    try {
        const res = await fetch(`${BASE_URL}${pagePath}`, {
            headers: { Accept: "text/html" },
        });
        if (!res.ok) {
            console.error(`❌ ${pagePath}: HTTP ${res.status}`);
            failed++;
            continue;
        }
        const html = await res.text();
        const markdown = htmlToMarkdown(html, pagePath);
        if (!markdown || markdown.length < 500) {
            console.error(`❌ ${pagePath}: converted markdown too short (${markdown?.length ?? 0} chars)`);
            failed++;
            continue;
        }
        map[pagePath] = markdown;
        ok++;
        console.log(`✅ ${pagePath} (${(markdown.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
        console.error(`❌ ${pagePath}: ${err.message}`);
        failed++;
    }
}

if (ok === 0) {
    console.error("\nNo pages converted. Is the server running? (npm run build && npx next start -p 3100)");
    process.exit(1);
}

// ─── Write the generated TypeScript module ────────────────────────────────────

const now = new Date().toISOString().split("T")[0];
const entries = Object.entries(map)
    .map(([key, value]) => `    ${JSON.stringify(key)}: ${JSON.stringify(value)},`)
    .join("\n");

const fileContents = `/**
 * AUTO-GENERATED by scripts/generate-guide-markdown.mjs on ${now} — do not edit by hand.
 * Served by src/middleware.ts for Accept: text/markdown requests (AEO).
 * Regenerate with: node scripts/generate-guide-markdown.mjs http://localhost:3100
 */

export const GENERATED_MARKDOWN_MAP: Record<string, string> = {
${entries}
};
`;

writeFileSync(OUT_FILE, fileContents);

console.log(`\n${"─".repeat(55)}`);
console.log(`📊 Wrote ${ok}/${paths.length} pages to ${OUT_FILE}`);
if (failed > 0) {
    console.log(`⚠️  ${failed} page(s) failed`);
    process.exit(1);
}
console.log(`${"─".repeat(55)}\n`);

