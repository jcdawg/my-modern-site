#!/usr/bin/env node
/**
 * Unit checks for the GTM Role Mismatch engine (ported from the original diagnose.test.ts).
 * Usage: node scripts/test-gtm-role-mismatch.mjs   (Node 22.6+ with type stripping)
 */
import assert from "node:assert/strict";
import test from "node:test";
import { resolveCompanyInput, salesContextLines, withSalesContext } from "../src/lib/gtm-role-mismatch/company-input.ts";
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

test("an https URL pasted in company text is moved to companyUrl", () => {
    const result = resolveCompanyInput("https://omnilex.law/", "");
    assert.equal(result.companyUrl, "https://omnilex.law/");
    assert.equal(result.companyText, "");
});

test("a bare domain pasted in company text becomes an https URL", () => {
    const result = resolveCompanyInput("omnilex.law", "");
    assert.equal(result.companyUrl, "https://omnilex.law");
    assert.equal(result.companyText, "");
});

test("an https URL on its own line is extracted and remaining notes are kept", () => {
    const result = resolveCompanyInput("https://omnilex.law/\nFounder still closes deals", "");
    assert.equal(result.companyUrl, "https://omnilex.law/");
    assert.equal(result.companyText, "Founder still closes deals");
});

test("a loopback URL pasted in company text is still refused by publicHttps", async () => {
    const result = resolveCompanyInput("http://127.0.0.1", "");
    assert.equal(result.companyUrl, "http://127.0.0.1");
    assert.equal(result.companyText, "");
    assert.equal(await publicHttps(result.companyUrl), null);
});

test("normal prose without a URL stays in companyText", () => {
    const prose = "We're a seed-stage company. The founder still closes most deals.";
    const result = resolveCompanyInput(prose, "");
    assert.equal(result.companyText, prose);
    assert.equal(result.companyUrl, "");
});

test("a bare domain or http link in companyUrl is upgraded to https", () => {
    assert.equal(resolveCompanyInput("", "omnilex.law").companyUrl, "https://omnilex.law");
    assert.equal(resolveCompanyInput("Pitch notes", "www.omnilex.law/about").companyUrl, "https://www.omnilex.law/about");
    assert.equal(resolveCompanyInput("", "http://omnilex.law").companyUrl, "https://omnilex.law");
    assert.equal(resolveCompanyInput("Pitch notes", "http://omnilex.law").companyText, "Pitch notes");
});

const THIN_COMPANY = "Acme builds workflow software for legal teams. We help firms move faster with AI-assisted review.";
const FILLED_CONTEXT = {
    whoSellsToday: "Founder closes all deals, no sales team yet",
    dealSize: "$18k ACV",
    salesProcess: "No formal process or enablement yet",
};

test("blank optional sales context leaves the company text and score identical", () => {
    for (const blank of [{}, { whoSellsToday: "", dealSize: "  ", salesProcess: "" }, undefined, null]) {
        assert.equal(withSalesContext(THIN_COMPANY, blank), THIN_COMPANY);
        assert.equal(salesContextLines(blank), "");
    }
    for (const sample of [SAMPLE_MISMATCH, SAMPLE_ALIGNED, { jobDescription: SAMPLE_MISMATCH.jobDescription, companyText: THIN_COMPANY }]) {
        const before = scoreAnswers(answersFromSignals(sample.jobDescription, sample.companyText), "signals", "none");
        const after = scoreAnswers(
            answersFromSignals(sample.jobDescription, withSalesContext(sample.companyText, { whoSellsToday: "", dealSize: "", salesProcess: "" })),
            "signals",
            "none",
        );
        assert.deepEqual(after, before);
    }
});

test("sales context lines are natural language, trimmed and capped", () => {
    const lines = salesContextLines({ whoSellsToday: "  Founder closes all deals.  ", dealSize: "$18k ACV", salesProcess: "x".repeat(500) });
    const rows = lines.split("\n");
    assert.equal(rows[0], "Who sells today: Founder closes all deals.");
    assert.equal(rows[1], "Typical deal size: $18k ACV.");
    assert.ok(rows[2].startsWith("Sales process: x") && rows[2].length <= "Sales process: ".length + 201);
    assert.equal(salesContextLines({ dealSize: "$40k" }), "Typical deal size: $40k.");
});

test("filled sales context pins the stage and moves mismatch and GTM stage fit", () => {
    const jd = SAMPLE_MISMATCH.jobDescription;
    const thin = scoreAnswers(answersFromSignals(jd, THIN_COMPANY), "signals", "none");
    assert.equal(thin.verdict, "Not enough to call");
    assert.equal(thin.stageLabel, "Stage is not pinned");

    const combined = withSalesContext(THIN_COMPANY, FILLED_CONTEXT);
    const answers = answersFromSignals(jd, combined);
    assert.equal(answers.company_stage.choice, "founder_led");
    assert.ok(answers.nouls.founder_still_sells.noul >= 0.8);
    assert.ok(answers.nouls.no_sales_team.noul >= 0.8);
    assert.ok(answers.nouls.no_process.noul >= 0.8);
    assert.ok(answers.nouls.modest_deal.noul >= 0.8);
    const filled = scoreAnswers(answers, "signals", "none");
    assert.equal(filled.verdict, "Mismatch");
    assert.ok(filled.mismatch >= 75, `expected a high mismatch, got ${filled.mismatch}`);
    assert.ok(100 - filled.mismatch <= 25, "GTM stage fit should drop");
    assert.ok(filled.mismatch - thin.mismatch >= 25, `mismatch should shift: ${thin.mismatch} -> ${filled.mismatch}`);
    for (const check of filled.checks) {
        if (check.evidence) assert.ok(`${jd}\n${combined}`.includes(check.evidence), `quote not verbatim: ${check.evidence}`);
    }

    const aligned = scoreAnswers(answersFromSignals(SAMPLE_ALIGNED.jobDescription, combined), "signals", "none");
    assert.equal(aligned.verdict, "Aligned");
    assert.ok(100 - aligned.mismatch >= 70, `founding AE should fit, got fit ${100 - aligned.mismatch}`);
});

test("other sales context phrasings shift the deterministic read", () => {
    const a = answersFromSignals(SAMPLE_MISMATCH.jobDescription, withSalesContext(THIN_COMPANY, { whoSellsToday: "Founder closes all deals", dealSize: "$15k ACV", salesProcess: "No sales process yet" }));
    assert.equal(a.company_stage.choice, "founder_led");
    assert.ok(a.nouls.founder_still_sells.noul > 0.8 && a.nouls.modest_deal.noul > 0.8 && a.nouls.no_process.noul > 0.8);
    const b = answersFromSignals(SAMPLE_MISMATCH.jobDescription, withSalesContext(THIN_COMPANY, { whoSellsToday: "2 AEs" }));
    assert.equal(b.company_stage.choice, "first_repeatable");
    const c = answersFromSignals(SAMPLE_MISMATCH.jobDescription, withSalesContext(THIN_COMPANY, { dealSize: "$150k enterprise", salesProcess: "Documented playbook" }));
    assert.equal(c.company_stage.choice, "scaled");
    assert.ok(c.nouls.modest_deal.noul < 0.5);
});

test("a URL plus optional context counts toward the 40-character minimum", () => {
    const resolved = resolveCompanyInput("Seed", "");
    assert.ok(resolved.companyText.length < 40);
    assert.ok(withSalesContext(resolved.companyText, { whoSellsToday: "Founder closes all deals" }).length >= 40);
});
