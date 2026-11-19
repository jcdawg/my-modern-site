#!/usr/bin/env node
/**
 * Unit checks for the GTM Role Mismatch engine (ported from the original diagnose.test.ts).
 * Usage: node scripts/test-gtm-role-mismatch.mjs   (Node 22.6+ with type stripping)
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
    SAMPLE_ALIGNED,
    SAMPLE_MISMATCH,
    answersFromSignals,
    blankAnswers,
    evidenceFor,
    quoteFrom,
    scoreAnswers,
} from "../src/lib/gtm-role-mismatch/diagnose.ts";
import { isPublicAddress, publicHttps } from "../src/lib/gtm-role-mismatch/read-page.server.ts";

test("a cartoon VP posting at a seed company scores as a mismatch", () => {
    const result = scoreAnswers(answersFromSignals(SAMPLE_MISMATCH.jobDescription, SAMPLE_MISMATCH.companyText), "signals", "none");
    assert.equal(result.verdict, "Mismatch");
    assert.ok(result.mismatch >= 75, `expected a high computed mismatch, got ${result.mismatch}`);
    assert.equal(result.stageLabel, "Founder-led, first sales hire");
    assert.equal(result.personaLabel, "VP or CRO");
    assert.ok(result.gaps.some((gap) => /team/i.test(gap.title)));
});

test("a founding AE posting at the same company scores as aligned", () => {
    const result = scoreAnswers(answersFromSignals(SAMPLE_ALIGNED.jobDescription, SAMPLE_ALIGNED.companyText), "signals", "none");
    assert.equal(result.verdict, "Aligned");
    assert.ok(result.mismatch < 30, `expected a low computed mismatch, got ${result.mismatch}`);
});

test("thin answers are not dressed up as a precise mismatch", () => {
    const result = scoreAnswers(blankAnswers(), "signals", "none");
    assert.equal(result.verdict, "Not enough to call");
    assert.ok(result.mismatch > 40 && result.mismatch < 60);
});

test("evidence has to be copied from the source text", () => {
    const source = "Our founder is still closing most deals.";
    assert.equal(quoteFrom("still closing most deals", source, ""), "still closing most deals");
    assert.equal(quoteFrom("the founder closes everything himself", source, ""), "");
});

test("auto-attached evidence is verbatim and from the right side", () => {
    const { jobDescription, companyText } = SAMPLE_MISMATCH;
    const founder = evidenceFor("founder_still_sells", jobDescription, companyText);
    assert.ok(founder && companyText.includes(founder), `company quote not verbatim: ${founder}`);
    const team = evidenceFor("jd_expects_team", jobDescription, companyText);
    assert.ok(team && jobDescription.includes(team), `jd quote not verbatim: ${team}`);
    const result = scoreAnswers(answersFromSignals(jobDescription, companyText), "signals", "none");
    for (const check of result.checks) {
        if (check.evidence) assert.ok(`${jobDescription}\n${companyText}`.includes(check.evidence));
    }
    assert.ok(result.checks.filter((c) => c.evidence).length >= 6);
});

test("private, loopback and link-local addresses are refused", async () => {
    for (const ip of ["127.0.0.1", "10.0.0.1", "172.16.4.4", "192.168.1.1", "169.254.169.254", "100.64.0.1", "0.0.0.0", "::1", "::", "fe80::1", "fd00::1", "::ffff:127.0.0.1", "::ffff:7f00:1", "::ffff:a9fe:a9fe"]) {
        assert.equal(isPublicAddress(ip), false, ip);
    }
    assert.equal(isPublicAddress("8.8.8.8"), true);
    for (const url of ["http://127.0.0.1", "http://localhost", "http://169.254.169.254", "https://127.0.0.1", "https://localhost", "https://169.254.169.254/latest/meta-data", "https://[::1]/", "https://user:pw@example.com", "https://example.com:8443/", "ftp://example.com"]) {
        assert.equal(await publicHttps(url), null, url);
    }
});
