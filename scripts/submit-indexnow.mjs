#!/usr/bin/env node
/**
 * IndexNow URL Submission — The Kas Group
 *
 * Pings the IndexNow API (used by Bing, Yandex, Seznam, and Naver) to request
 * an immediate re-crawl of all site URLs. Bing uses these signals directly,
 * which accelerates how quickly ChatGPT/Copilot-visible rankings update.
 *
 * Prerequisites:
 *   - The key file public/<key>.txt must be deployed and reachable at
 *     https://www.thekasgroup.com/<key>.txt
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs [--dry-run]
 */

import { readdirSync, readFileSync } from "node:fs";

const HOST = "www.thekasgroup.com";
const DRY_RUN = process.argv.includes("--dry-run");

// Auto-discover the IndexNow key file in public/
const keyFile = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
    console.error("No IndexNow key file found in public/ (expected <32-hex>.txt)");
    process.exit(1);
}
const key = readFileSync(`public/${keyFile}`, "utf8").trim();
const keyLocation = `https://${HOST}/${keyFile}`;

// Pages that exist but are not (yet) in the sitemap
const EXTRA_PATHS = ["/blog", "/site-map"];

async function main() {
    // Pull the full URL list from the live production sitemap
    const res = await fetch(`https://${HOST}/sitemap.xml`);
    if (!res.ok) {
        console.error(`Could not fetch sitemap.xml: HTTP ${res.status}`);
        process.exit(1);
    }
    const xml = await res.text();
    const sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

    const extraUrls = EXTRA_PATHS.map((p) => `https://${HOST}${p}`);
    const urlList = [...new Set([...sitemapUrls, ...extraUrls])];

    console.log(`Submitting ${urlList.length} URLs to IndexNow (key: ${key.slice(0, 8)}…)\n`);

    if (DRY_RUN) {
        urlList.forEach((u) => console.log(`  [dry-run] ${u}`));
        return;
    }

    const payload = {
        host: HOST,
        key,
        keyLocation,
        urlList,
    };

    const apiRes = await fetch("https://api.indexnow.org/IndexNow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
    });

    // IndexNow returns 200/202 on success, 400 on bad key, 422 on invalid URLs
    const body = await apiRes.text();
    console.log(`HTTP ${apiRes.status} ${apiRes.statusText}${body ? ` — ${body}` : ""}`);

    if (apiRes.status === 200 || apiRes.status === 202) {
        console.log("\n✅ Submission accepted. Engines will re-crawl submitted URLs soon (typically within days).");
    } else if (apiRes.status === 400) {
        console.error("\n❌ Bad request — is the key file deployed at " + keyLocation + "?");
        process.exit(1);
    } else {
        console.error("\n❌ Submission rejected.");
        process.exit(1);
    }
}

main();
