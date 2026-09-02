#!/usr/bin/env node
/**
 * AI-Citation Baseline Runner — The Kas Group
 * Checks whether thekasgroup.com appears in Bing & DuckDuckGo results
 * for the 12-prompt AEO battery. Bing powers ChatGPT search + Copilot,
 * so Bing rankings are the best available proxy for AI answer engines.
 *
 * Usage: node scripts/run-baseline.mjs [output-file]
 */

const QUERIES = [
    // Brand-direct
    { id: 1, q: "Who is The Kas Group recruiting", brand: true },
    { id: 2, q: "thekasgroup.com", brand: true },
    { id: 3, q: "Chris Stinson sales recruiter The Kas Group", brand: true },
    // High-intent
    { id: 4, q: "best sales recruiting agencies for B2B SaaS 2026" },
    { id: 5, q: "best SaaS sales recruiting firms" },
    { id: 6, q: "top sales headhunters in the United States" },
    { id: 7, q: "affordable alternatives to Korn Ferry sales recruiting" },
    { id: 8, q: "who should I hire to find a VP of Sales for my startup" },
    // AI/data niche
    { id: 9, q: "recruiting firms Ph.D.-vetted machine learning engineer hiring" },
    { id: 10, q: "cost of hiring the wrong data engineer" },
    { id: 11, q: "retained vs contingency recruiting for AI startups" },
    // Comparison
    { id: 12, q: "The Kas Group vs Korn Ferry vs Betts Recruiting", brand: true },
    // Local SEO
    { id: 13, q: "sales recruiters Atlanta", brand: false },
];

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

async function bingRank(query) {
    try {
        const res = await fetch(`https://www.bing.com/search?q=${encodeURIComponent(query)}&count=20`, {
            headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
        });
        const html = await res.text();
        // Bing wraps result URLs in base64-encoded redirect links (u=a1<base64>).
        const blocks = html.split('<li class="b_algo"');
        const urls = [];
        for (const block of blocks.slice(1)) {
            const m = block.match(/<a[^>]*href="([^"]+)"/);
            if (!m) continue;
            let url = m[1];
            const um = url.match(/u=a1([A-Za-z0-9+/=]+)/);
            if (um) {
                try {
                    url = Buffer.from(um[1], "base64").toString("utf8");
                } catch {}
            }
            urls.push(url);
        }
        const idx = urls.findIndex((u) => u.includes("thekasgroup.com"));
        return { engine: "Bing", rank: idx === -1 ? null : idx + 1, results: urls.length };
    } catch (e) {
        return { engine: "Bing", error: e.message };
    }
}

async function ddgRank(query) {
    try {
        const res = await fetch(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
            headers: { "User-Agent": UA },
        });
        const html = await res.text();
        const hrefs = [...html.matchAll(/<a[^>]*class="result__a"[^>]*href="([^"]+)"/g)].map(m => m[1]);
        const idx = hrefs.findIndex(h => decodeURIComponent(h).includes("thekasgroup.com"));
        return { engine: "DDG", rank: idx === -1 ? null : idx + 1, results: hrefs.length };
    } catch (e) {
        return { engine: "DDG", error: e.message };
    }
}

const results = [];
for (const { id, q, brand } of QUERIES) {
    const [b, d] = await Promise.all([bingRank(q), ddgRank(q)]);
    const status = (r) => r.error ? `ERR` : r.rank ? `#${r.rank}` : "absent";
    console.log(`Q${String(id).padStart(2, " ")} [Bing ${status(b)} | DDG ${status(d)}] ${q}`);
    results.push({ id, q, brand, bing: b, ddg: d });
}

// Summary
const cited = results.filter(r => r.bing.rank || r.ddg.rank);
const brandCited = results.filter(r => r.brand && (r.bing.rank || r.ddg.rank));
console.log(`\n=== BASELINE SUMMARY (${new Date().toISOString().split("T")[0]}) ===`);
console.log(`Queries where thekasgroup.com appears: ${cited.length}/${QUERIES.length}`);
console.log(`Brand queries where it appears: ${brandCited.length}/${results.filter(r => r.brand).length}`);
cited.forEach(r => console.log(`  Q${r.id}: Bing ${r.bing.rank ? "#" + r.bing.rank : "absent"} / DDG ${r.ddg.rank ? "#" + r.ddg.rank : "absent"} — ${r.q}`));

const outFile = process.argv[2];
if (outFile) {
    const { writeFileSync } = await import("node:fs");
    writeFileSync(outFile, JSON.stringify({ date: new Date().toISOString(), results }, null, 2));
    console.log(`\nSaved raw results to ${outFile}`);
}
