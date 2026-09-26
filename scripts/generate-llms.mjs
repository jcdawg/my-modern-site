#!/usr/bin/env node
/**
 * llms.txt / llms-full.txt generator for www.thekasgroup.com
 *
 * Source of truth:
 *   - Page list: the built XML sitemap (src/app/sitemap.ts)
 *   - Titles and summaries: each page's <title> and meta description
 *   - Fixed copy: scripts/llms/*.md templates (identity, when-to-use,
 *     Programs & Pricing). Edit those, not public/llms*.txt.
 *
 * Output: public/llms.txt and public/llms-full.txt, with every sitemap URL
 * listed as `- [Title](url): summary`.
 *
 * Usage:
 *   npm run build && npm run llms
 * Reads prerendered HTML from .next/server/app, so no server is needed.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://www.thekasgroup.com";
const BUILD_DIR = ".next/server/app";
const TEMPLATE_DIR = "scripts/llms";

// Guides that belong in the AI & Data section. Everything else under
// /guides/ is listed as a sales guide.
const DATA_AI_GUIDES = new Set([
    "/guides/best-data-engineering-recruiting-agencies",
    "/guides/how-to-hire-senior-data-engineers-ai-startups",
    "/guides/top-data-engineering-headhunters-2026",
    "/guides/senior-data-engineer-skills-assessment-vetting",
    "/guides/data-engineer-vs-analytics-engineer-hiring-guide",
    "/guides/cost-of-hiring-wrong-data-engineer",
    "/guides/how-to-hire-ai-ml-engineers",
    "/guides/phd-vetted-ai-recruiting-methodology",
    "/guides/active-vs-passive-candidates",
    "/guides/do-ai-resume-screeners-work",
]);
const OPTIONAL = new Set(["/privacy-policy", "/terms-of-service"]);

function decode(s) {
    return s
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
}

function readSitemapPaths() {
    const xml = readFileSync(join(BUILD_DIR, "sitemap.xml.body"), "utf8");
    return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => {
        const path = m[1].replace(SITE_URL, "");
        return path === "" ? "/" : path;
    });
}

function pageInfo(path) {
    const file = join(BUILD_DIR, path === "/" ? "index.html" : `${path.slice(1)}.html`);
    if (!existsSync(file)) throw new Error(`No prerendered HTML for ${path} (${file}). Run npm run build first.`);
    const html = readFileSync(file, "utf8");
    let title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? path).replace(/ \| The Kas Group$/, "");
    if (path === "/") title = "Home";
    const description = decode(html.match(/<meta name="description" content="(.*?)"/s)?.[1] ?? "");
    return { path, title, description };
}

function groupFor(path) {
    if (path === "/programs" || path.startsWith("/recruit/")) return "services";
    if (path.startsWith("/guides/")) return DATA_AI_GUIDES.has(path) ? "guides-data" : "guides-sales";
    if (path === "/blog" || path.startsWith("/blog/")) return "blog";
    if (OPTIONAL.has(path)) return "optional";
    return "company"; // /, /about, /brand-facts, /methodology, /contact, /guides, tools
}

function line({ path, title, description }) {
    const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
    return `- [${title}](${url}): ${description}`;
}

const paths = readSitemapPaths();
const groups = {};
for (const path of paths) {
    const info = pageInfo(path);
    (groups[groupFor(path)] ??= []).push(info);
}
// Programs first in services; keep sitemap order otherwise.
groups.services?.sort((a, b) => (a.path === "/programs" ? -1 : b.path === "/programs" ? 1 : 0));

const updated = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
const programsPricing = readFileSync(join(TEMPLATE_DIR, "programs-pricing.md"), "utf8").trim();

function render(templateName, outFile) {
    let out = readFileSync(join(TEMPLATE_DIR, templateName), "utf8")
        .replaceAll("{{UPDATED}}", updated)
        .replaceAll("{{PROGRAMS_PRICING}}", programsPricing)
        .replace(/\{\{INDEX:([a-z-]+)\}\}/g, (_, g) => (groups[g] ?? []).map(line).join("\n") || "- (none)");
    if (/\{\{[^}]+\}\}/.test(out)) throw new Error(`Unfilled placeholder in ${templateName}`);
    const missing = paths.filter((p) => !out.includes(`](${p === "/" ? SITE_URL : SITE_URL + p})`));
    if (missing.length) throw new Error(`${outFile} is missing sitemap URLs: ${missing.join(", ")}`);
    if (out.includes("\u2014")) throw new Error(`${outFile} contains an em dash`);
    writeFileSync(outFile, out);
    console.log(`Wrote ${outFile} (${paths.length} sitemap URLs covered)`);
}

render("llms.template.md", "public/llms.txt");
render("llms-full.template.md", "public/llms-full.txt");
