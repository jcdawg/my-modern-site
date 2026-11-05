import type { Competency, RoleFamily, ScorecardPayload } from "./types";
import { sanitizeDeep } from "./sanitize";

function asString(v: unknown, field: string): string {
    if (typeof v !== "string" || !v.trim()) throw new Error(`Missing ${field}`);
    return v.trim();
}

function asStringArray(v: unknown, field: string, min = 1): string[] {
    if (!Array.isArray(v) || v.length < min) throw new Error(`Invalid ${field}`);
    return v.map((x, i) => asString(x, `${field}[${i}]`));
}

function asCompetency(v: unknown, i: number): Competency {
    if (!v || typeof v !== "object") throw new Error(`Invalid competencies[${i}]`);
    const c = v as Record<string, unknown>;
    return {
        name: asString(c.name, `competencies[${i}].name`),
        whatFiveLooksLike: asString(c.whatFiveLooksLike, `competencies[${i}].whatFiveLooksLike`),
        redFlags: asString(c.redFlags, `competencies[${i}].redFlags`),
        interviewQuestions: asStringArray(c.interviewQuestions, `competencies[${i}].interviewQuestions`),
        referenceQuestions: asStringArray(c.referenceQuestions, `competencies[${i}].referenceQuestions`),
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

    const payload: ScorecardPayload = {
        roleTitle: asString(o.roleTitle, "roleTitle"),
        mission: asString(o.mission, "mission"),
        outcomes: {
            days90: asStringArray(outcomes.days90, "outcomes.days90"),
            months6: asStringArray(outcomes.months6, "outcomes.months6"),
            months12: asStringArray(outcomes.months12, "outcomes.months12"),
        },
        competencies: o.competencies.map(asCompetency),
        mustHaves: asStringArray(o.mustHaves, "mustHaves"),
        niceToHaves: asStringArray(o.niceToHaves, "niceToHaves", 0),
        roleFamily: family as RoleFamily,
    };
    return sanitizeDeep(payload);
}
