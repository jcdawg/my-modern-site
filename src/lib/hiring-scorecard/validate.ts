import type { Competency, RoleFamily, ScorecardPayload } from "./types";
import { sanitizeDeep } from "./sanitize";

function asString(v: unknown, field: string): string {
    if (typeof v !== "string" || !v.trim()) throw new Error(`Missing ${field}`);
    return v.trim();
}

function asStringArray(v: unknown, field: string, min = 1, max = 8): string[] {
    if (typeof v === "string" && v.trim()) return [v.trim()];
    if (!Array.isArray(v) || v.length < min) throw new Error(`Invalid ${field}`);
    const out = v.map((x, i) => asString(x, `${field}[${i}]`));
    return out.slice(0, max);
}

function asOptionalString(v: unknown): string | undefined {
    if (typeof v !== "string" || !v.trim()) return undefined;
    return v.trim();
}

function asCompetency(v: unknown, i: number): Competency {
    if (!v || typeof v !== "object") throw new Error(`Invalid competencies[${i}]`);
    const c = v as Record<string, unknown>;
    const questionsRaw = c.questions ?? c.interviewQuestions;
    const fiveRaw = c.fiveLooksLike ?? c.whatFiveLooksLike;
    const questions = asStringArray(questionsRaw, `competencies[${i}].questions`, 1, 2);
    const fiveLooksLike = asStringArray(fiveRaw, `competencies[${i}].fiveLooksLike`, 1, 2);
    const threeLooksLike = asOptionalString(c.threeLooksLike);
    return {
        name: asString(c.name, `competencies[${i}].name`),
        questions,
        fiveLooksLike,
        ...(threeLooksLike ? { threeLooksLike } : {}),
        redFlags: asString(c.redFlags, `competencies[${i}].redFlags`),
        referenceQuestions: asStringArray(
            c.referenceQuestions ?? ["Would you hire this person again for this competency?"],
            `competencies[${i}].referenceQuestions`,
            1,
            3
        ),
    };
}

export function validateScorecardPayload(raw: unknown): ScorecardPayload {
    if (!raw || typeof raw !== "object") throw new Error("Scorecard JSON was empty");
    const o = raw as Record<string, unknown>;
    const family = asString(o.roleFamily, "roleFamily");
    if (family !== "sales" && family !== "ai_data" && family !== "other") {
        throw new Error("Invalid roleFamily");
    }
    if (!Array.isArray(o.competencies) || o.competencies.length < 3 || o.competencies.length > 8) {
        throw new Error("Need 3 to 8 competencies");
    }
    const outcomes = o.outcomes as Record<string, unknown> | undefined;
    if (!outcomes || typeof outcomes !== "object") throw new Error("Missing outcomes");

    let additional = o.additionalInterviewQuestions;
    if (!Array.isArray(additional) || additional.length < 3) {
        // Tolerate omission with sensible cross-cutting defaults rather than failing the run.
        additional = [
            "Why this role, and why now?",
            "How do you like to get feedback in the first 90 days?",
            "What schedule or logistics constraints should we know about?",
        ];
    }

    const payload: ScorecardPayload = {
        roleTitle: asString(o.roleTitle, "roleTitle"),
        mission: asString(o.mission, "mission"),
        outcomes: {
            days90: asStringArray(outcomes.days90, "outcomes.days90"),
            months6: asStringArray(outcomes.months6, "outcomes.months6"),
            months12: asStringArray(outcomes.months12, "outcomes.months12"),
        },
        competencies: o.competencies.map(asCompetency),
        additionalInterviewQuestions: asStringArray(additional, "additionalInterviewQuestions", 3, 4),
        mustHaves: asStringArray(o.mustHaves, "mustHaves"),
        niceToHaves: asStringArray(o.niceToHaves, "niceToHaves", 0),
        roleFamily: family as RoleFamily,
    };
    return sanitizeDeep(payload);
}
