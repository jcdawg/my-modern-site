#!/usr/bin/env node
/**
 * Agent Readiness Verification Script for thekasgroup.com
 * Tests all 5 criteria from the Is Agentic / Ora audit.
 *
 * Usage:
 *   node scripts/verify-agent-readiness.mjs [base-url]
 *   node scripts/verify-agent-readiness.mjs http://localhost:3001
 *
 * Requires the dev server to be running.
 */

const BASE_URL = process.argv[2] || "http://localhost:3001";
const RESULTS = [];
let passed = 0;
let failed = 0;

function log(emoji, label, detail = "") {
    const line = `${emoji} ${label}${detail ? ": " + detail : ""}`;
    console.log(line);
    return line;
}

async function check(label, fn) {
    try {
        const result = await fn();
        if (result.pass) {
            passed++;
            RESULTS.push({ label, pass: true, detail: result.detail });
            log("✅", label, result.detail);
        } else {
            failed++;
            RESULTS.push({ label, pass: false, detail: result.detail });
            log("❌", label, result.detail);
        }
    } catch (err) {
        failed++;
        RESULTS.push({ label, pass: false, detail: `ERROR: ${err.message}` });
        log("❌", label, `ERROR: ${err.message}`);
    }
}

async function fetchWithOptions(path, options = {}) {
    const url = `${BASE_URL}${path}`;
    const res = await fetch(url, { redirect: "manual", ...options });
    return res;
}

console.log(`\n🔍 The Kas Group — Agent Readiness Verification`);
console.log(`   Base URL: ${BASE_URL}\n`);

// ─── Test 1: Agent-friendly 404s ────────────────────────────────────────────
await check("404 HTML: nonexistent path returns 404 status (not 200)", async () => {
    const res = await fetchWithOptions("/this-path-definitely-does-not-exist-abc123");
    return {
        pass: res.status === 404,
        detail: `HTTP ${res.status}`,
    };
});

await check("404 Markdown: markdown Accept returns 404 + markdown body for nonexistent path", async () => {
    const res = await fetchWithOptions("/this-path-definitely-does-not-exist-abc123", {
        headers: { Accept: "text/markdown" },
    });
    const ct = res.headers.get("content-type") || "";
    const body = await res.text();
    const hasRecoveryLinks = body.includes("llms.txt") && body.includes("/guides");
    return {
        pass: res.status === 404 && ct.includes("text/markdown") && hasRecoveryLinks,
        detail: `HTTP ${res.status}, Content-Type: ${ct}, recovery links: ${hasRecoveryLinks}`,
    };
});

// ─── Test 2: Markdown Content Negotiation ────────────────────────────────────
await check("Markdown negotiation: / returns text/markdown when Accept: text/markdown", async () => {
    const res = await fetchWithOptions("/", {
        headers: { Accept: "text/markdown" },
    });
    const ct = res.headers.get("content-type") || "";
    return {
        pass: res.status === 200 && ct.includes("text/markdown"),
        detail: `HTTP ${res.status}, Content-Type: ${ct}`,
    };
});

await check("Markdown negotiation: /brand-facts returns markdown", async () => {
    const res = await fetchWithOptions("/brand-facts", {
        headers: { Accept: "text/markdown" },
    });
    const ct = res.headers.get("content-type") || "";
    return {
        pass: res.status === 200 && ct.includes("text/markdown"),
        detail: `HTTP ${res.status}, Content-Type: ${ct}`,
    };
});

await check("Markdown negotiation: /recruit/sales returns markdown", async () => {
    const res = await fetchWithOptions("/recruit/sales", {
        headers: { Accept: "text/markdown" },
    });
    const ct = res.headers.get("content-type") || "";
    return {
        pass: res.status === 200 && ct.includes("text/markdown"),
        detail: `HTTP ${res.status}, Content-Type: ${ct}`,
    };
});

await check("Vary header: HTML response includes Vary: Accept on /", async () => {
    const res = await fetchWithOptions("/", {
        headers: { Accept: "text/html" },
    });
    const vary = res.headers.get("vary") || "";
    return {
        pass: vary.toLowerCase().includes("accept"),
        detail: `Vary: ${vary}`,
    };
});

await check("Vary header: Markdown response includes Vary: Accept", async () => {
    const res = await fetchWithOptions("/", {
        headers: { Accept: "text/markdown" },
    });
    const vary = res.headers.get("vary") || "";
    return {
        pass: vary.toLowerCase().includes("accept"),
        detail: `Vary: ${vary}`,
    };
});

// ─── Test 3: Brand Discoverability Metadata ───────────────────────────────────
await check("Brand metadata: homepage title includes 'The Kas Group'", async () => {
    const res = await fetchWithOptions("/");
    const body = await res.text();
    const hasTitle = body.includes("The Kas Group");
    return {
        pass: hasTitle,
        detail: hasTitle ? "Found 'The Kas Group' in HTML" : "NOT FOUND in HTML",
    };
});

await check("Brand metadata: homepage contains canonical URL meta", async () => {
    const res = await fetchWithOptions("/");
    const body = await res.text();
    const hasCanonical = body.includes("thekasgroup.com");
    return {
        pass: hasCanonical,
        detail: hasCanonical ? "Canonical URL present" : "Canonical URL missing",
    };
});

await check("robots.txt: accessible and references sitemap", async () => {
    const res = await fetchWithOptions("/robots.txt");
    const body = await res.text();
    const hasSitemap = body.includes("sitemap.xml");
    return {
        pass: res.status === 200 && hasSitemap,
        detail: `HTTP ${res.status}, sitemap referenced: ${hasSitemap}`,
    };
});

// ─── Test 4: JSON-LD Structured Data ─────────────────────────────────────────
await check("JSON-LD: homepage contains application/ld+json script tag", async () => {
    const res = await fetchWithOptions("/");
    const body = await res.text();
    const hasJsonLd = body.includes('type="application/ld+json"') || body.includes("application/ld+json");
    return {
        pass: hasJsonLd,
        detail: hasJsonLd ? "JSON-LD script found" : "No JSON-LD found",
    };
});

await check("JSON-LD: schema includes Organization with The Kas Group", async () => {
    const res = await fetchWithOptions("/");
    const body = await res.text();
    const hasOrg = body.includes("Organization") && body.includes("The Kas Group");
    return {
        pass: hasOrg,
        detail: hasOrg ? "Organization schema with name found" : "Missing Organization/name",
    };
});

await check("JSON-LD: schema includes EmploymentAgency type", async () => {
    const res = await fetchWithOptions("/");
    const body = await res.text();
    const hasEA = body.includes("EmploymentAgency");
    return {
        pass: hasEA,
        detail: hasEA ? "EmploymentAgency type present" : "EmploymentAgency type missing",
    };
});

// ─── Test 5: Agent Instructions & When-To-Use ────────────────────────────────
await check("llms.txt: file exists and returns 200", async () => {
    const res = await fetchWithOptions("/llms.txt");
    return {
        pass: res.status === 200,
        detail: `HTTP ${res.status}`,
    };
});

await check("llms.txt: contains 'when to use' decision guidance", async () => {
    const res = await fetchWithOptions("/llms.txt");
    const body = await res.text();
    const hasWhenToUse = body.toLowerCase().includes("when to use") || body.toLowerCase().includes("use the kas group");
    return {
        pass: hasWhenToUse,
        detail: hasWhenToUse ? "'When to use' guidance found" : "No 'when to use' section",
    };
});

await check("llms-full.txt: file exists and returns 200", async () => {
    const res = await fetchWithOptions("/llms-full.txt");
    return {
        pass: res.status === 200,
        detail: `HTTP ${res.status}`,
    };
});

await check(".well-known/agent-instructions: file exists and returns 200", async () => {
    const res = await fetchWithOptions("/.well-known/agent-instructions");
    return {
        pass: res.status === 200,
        detail: `HTTP ${res.status}`,
    };
});

await check("sitemap.xml: accessible", async () => {
    const res = await fetchWithOptions("/sitemap.xml");
    return {
        pass: res.status === 200,
        detail: `HTTP ${res.status}`,
    };
});

// ─── Summary ──────────────────────────────────────────────────────────────────
const total = passed + failed;
console.log(`\n${"─".repeat(55)}`);
console.log(`📊 Results: ${passed}/${total} checks passed`);
if (failed > 0) {
    console.log(`\n⚠️  Failed checks:`);
    RESULTS.filter((r) => !r.pass).forEach((r) => {
        console.log(`   • ${r.label}: ${r.detail}`);
    });
}
console.log(`${"─".repeat(55)}\n`);

process.exit(failed > 0 ? 1 : 0);
