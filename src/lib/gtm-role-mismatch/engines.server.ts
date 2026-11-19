import { NOULS, coerceAnswers, jevQuestions, withEvidence, type Answers } from "./diagnose";

/**
 * Jev answers the twelve questions and returns answers only; the
 * mismatch number is computed in diagnose.ts. Errors are swallowed on purpose
 * (no logging), so pasted text never ends up in server logs.
 */

export async function askJev(apiKey: string, jobDescription: string, companyText: string): Promise<Answers | null> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
        const res = await fetch("https://api.typesafe.ai/v1/systemone", {
            method: "POST",
            signal: controller.signal,
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "jev-latest",
                state: stateText(jobDescription, companyText),
                questions: jevQuestions(),
            }),
        });
        if (!res.ok) return null;
        const body = (await res.json()) as { answers?: Record<string, unknown> };
        return fromJev(body.answers, jobDescription, companyText);
    } catch {
        return null;
    } finally {
        clearTimeout(timer);
    }
}

function fromJev(answers: Record<string, unknown> | undefined, jobDescription: string, companyText: string) {
    if (!answers) return null;
    const nouls: Record<string, { noul: number; evidence: string }> = {};
    for (const item of NOULS) {
        const row = answers[item.key] as { noul?: unknown } | undefined;
        if (!row || typeof row.noul !== "number") return null;
        nouls[item.key] = { noul: row.noul, evidence: "" };
    }
    const coerced = coerceAnswers(
        {
            company_stage: answers.company_stage,
            jd_persona: answers.jd_persona,
            nouls,
        },
        jobDescription,
        companyText,
    );
    // Jev returns probabilities only, so quotes are cut from the pasted text and verified verbatim.
    return coerced ? withEvidence(coerced, jobDescription, companyText) : null;
}

function stateText(jobDescription: string, companyText: string) {
    return `JOB DESCRIPTION:\n${jobDescription.slice(0, 7000)}\n\nCOMPANY TEXT:\n${companyText.slice(0, 7000)}`;
}
