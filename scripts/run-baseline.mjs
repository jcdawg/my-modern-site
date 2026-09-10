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

const DOMAIN = "thekasgroup.com";

// Bing serves its result-link format with heavy obfuscation that changes over
// time (historically u=a1<base64>, now bing.com/ck/a?!&p=<hash>). Instead of
// decoding redirect links (fragile), we detect the target domain in the visible
// cite text / href / block content, which is stable and format-agnostic.
async function bingRank(query) {
    try {
        const res = await fetch(`https://www.bing.com/search?q=${encodeURIComponent(query)}&count=20`, {
            headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
        });
        const html = await res.text();
        const blocks = html.split('<li class="b_algo"');

        // Heuristic: a real Bing SERP has at least one organic block. Bing bot-
        // blocking / consent / anomaly pages report b_no here and zero blocks.
        const looksLikeSERP = blocks.length > 1 && !/<li class="b_no"/.test(html);

        for (let i = 0; i < blocks.length - 1; i++) {
            const block = blocks[i + 1];
            const href = block.match(/<a[^>]*href="([^"]+)"/)?.[1] ?? "";
            const cite = block.match(/<cite[^>]*>(.*?)<\/cite>/s)?.[1] ?? "";
            const text = block.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
            const hit = href.includes(DOMAIN) || cite.includes(DOMAIN) || text.includes(DOMAIN);
            if (hit) {
                return { engine: "Bing", rank: i + 1, results: blocks.length - 1 };
            }
        }

        if (!looksLikeSERP) {
            return {
                engine: "Bing",
                rank: null,
                results: 0,
                note: "Bing returned a non-SERP page (bot barrier / no organic results) - recheck manually",
            };
        }

        return { engine: "Bing", rank: null, results: blocks.length - 1 };
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
        // A zero-link response usually means DDG bot-blocked/captcha'd us, not
        // that we truly rank nowhere. Flag it so it isn't read as "absent".
        let note;
        if (hrefs.length === 0) {
            note = "DDG returned no organic links (bot barrier likely) - recheck manually";
        }
        const idx = hrefs.findIndex(h => decodeURIComponent(h).includes(DOMAIN));
        return { engine: "DDG", rank: idx === -1 ? null : idx + 1, results: hrefs.length, ...(note ? { note } : {}) };
    } catch (e) {
        return { engine: "DDG", error: e.message };
    }
}

const results = [];
for (const { id, q, brand } of QUERIES) {
    const [b, d] = await Promise.all([bingRank(q), ddgRank(q)]);
    const status = (r) => r.error ? `ERR` : r.rank ? `#${r.rank}` : r.note ? `blocked` : "absent";
    const flag = (r) => r.note ? ` ⚠️ ${r.note}` : r.error ? ` ⚠️ ${r.error}` : "";
    console.log(`Q${String(id).padStart(2, " ")} [Bing ${status(b)} | DDG ${status(d)}] ${q}` + (flag(b) || flag(d)));
    results.push({ id, q, brand, bing: b, ddg: d });
}

// Summary
function bingNote(r) { return /blocked|non-SERP/.test(r.bing?.note || ""); }
function ddgNote(r) { return /bot barrier/.test(r.ddg?.note || ""); }
// Only count queries we could actually measure (not bot-blocked) in the "seen" ratio
const measurable = results.filter(r => !bingNote(r) && !ddgNote(r) && !r.bing.error && !r.ddg.error);
const cited = results.filter(r => r.bing.rank || r.ddg.rank);
const brandCited = results.filter(r => r.brand && (r.bing.rank || r.ddg.rank));
console.log(`\n=== BASELINE SUMMARY (${new Date().toISOString().split("T")[0]}) ===`);
console.log(`QUERIES: ${QUERIES.length} total, ${measurable.length} actually measurable, ${results.length - measurable.length} bot-blocked (⚠️ — not real absences)`);
if (measurable.length > 0) {
    console.log(`Measurable queries where thekasgroup.com appears: ${cited.filter(r => measurable.includes(r)).length}/${measurable.length}`);
} else {
    console.log(`No queries were measurable — all engines blocked this run. Treat results as inconclusive.`);
}
console.log(`Brand queries where it appears: ${brandCited.length}/${results.filter(r => r.brand).length}`);
cited.forEach(r => console.log(`  Q${r.id}: Bing ${r.bing.rank ? "#" + r.bing.rank : "absent"} / DDG ${r.ddg.rank ? "#" + r.ddg.rank : "absent"} — ${r.q}`));
if (measurable.length < QUERIES.length) {
    console.log(`\n⚠️  ${results.length - measurable.length} query(-ies) were NOT measurable because an engine blocked the request.`);
    console.log(`   Those "blocked" entries are not evidence of absence. Recheck them in a real browser.`);
}

const outFile = process.argv[2];
if (outFile) {
    const { writeFileSync } = await import("node:fs");
    writeFileSync(outFile, JSON.stringify({ date: new Date().toISOString(), results }, null, 2));
    console.log(`\nSaved raw results to ${outFile}`);
}
