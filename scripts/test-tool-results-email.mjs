#!/usr/bin/env node
/**
 * Unit tests for tool-results-email validation and notify copy.
 * Run: node --experimental-strip-types scripts/test-tool-results-email.mjs
 */
import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const srcRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "src");
registerHooks({
    resolve(specifier, context, nextResolve) {
        if (specifier.startsWith("@/")) {
            let target = join(srcRoot, specifier.slice(2));
            if (!target.endsWith(".ts") && !target.endsWith(".tsx") && !target.endsWith(".js")) {
                target += ".ts";
            }
            return nextResolve(pathToFileURL(target).href, context);
        }
        return nextResolve(specifier, context);
    },
});

const {
    buildNotifyEmail,
    buildVisitorEmail,
    isValidEmail,
    validateToolResultsEmail,
} = await import("../src/lib/tool-results-email.ts");

let passed = 0;
function check(label, fn) {
    fn();
    passed += 1;
    console.log("ok", label);
}

check("accepts a valid email", () => {
    assert.equal(isValidEmail("chris@thekasgroup.com"), true);
});
check("rejects invalid email", () => {
    assert.equal(isValidEmail("not-an-email"), false);
    assert.equal(isValidEmail(""), false);
});
check("honeypot is accepted without sending", () => {
    const result = validateToolResultsEmail({
        email: "bot@example.com",
        company: "Acme",
        tool: "bad-hire-calculator",
        summary: "Total: $1",
    });
    assert.equal(result.ok, true);
    assert.equal(result.honeypot, true);
});
check("requires a known tool and a summary", () => {
    const badTool = validateToolResultsEmail({ email: "a@b.co", tool: "unknown", summary: "x" });
    assert.equal(badTool.ok, false);
    const missing = validateToolResultsEmail({ email: "a@b.co", tool: "hiring-scorecard", summary: "  " });
    assert.equal(missing.ok, false);
});
check("normalizes email and keeps the summary", () => {
    const result = validateToolResultsEmail({
        email: "  Chris@TheKasGroup.com ",
        tool: "gtm-role-mismatch",
        summary: "GTM Role Mismatch: High mismatch",
    });
    assert.equal(result.ok, true);
    assert.equal(result.honeypot, false);
    assert.equal(result.value.email, "chris@thekasgroup.com");
    assert.equal(result.value.summary, "GTM Role Mismatch: High mismatch");
});
check("visitor email uses the tool title and does not invent body copy beyond the prefix", () => {
    const email = buildVisitorEmail("ramp-time-calculator", "Estimated ramp leak: $10");
    assert.equal(email.subject, "Your Sales Ramp Time Calculator results");
    assert.match(email.text, /Here is a copy of your results from The Kas Group/);
    assert.match(email.text, /Estimated ramp leak: \$10/);
});
check("notify email includes only tool name and visitor email", () => {
    const email = buildNotifyEmail("hiring-scorecard", "visitor@example.com");
    assert.equal(email.subject, "Results emailed: Hiring Scorecard Builder");
    assert.match(email.text, /Tool: Hiring Scorecard Builder/);
    assert.match(email.text, /Visitor email: visitor@example.com/);
    assert.doesNotMatch(email.text, /Mission|job description|https?:\/\//i);
});

console.log(`\n${passed} checks passed`);
