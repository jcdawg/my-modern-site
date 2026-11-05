export type RoleFamily = "sales" | "ai_data" | "other";

export type Competency = {
    name: string;
    /** 1 to 2 interview questions that directly test this competency. */
    questions: string[];
    /** 1 to 2 concrete behavioral lines for a rating of 5. */
    fiveLooksLike: string[];
    /** Optional acceptable bar (rating of 3). */
    threeLooksLike?: string;
    redFlags: string;
    referenceQuestions: string[];
};

export type Scorecard = {
    scorecardId: string;
    roleTitle: string;
    mission: string;
    outcomes: {
        days90: string[];
        months6: string[];
        months12: string[];
    };
    competencies: Competency[];
    /** 3 to 4 cross-cutting questions (motivation, culture, logistics). */
    additionalInterviewQuestions: string[];
    mustHaves: string[];
    niceToHaves: string[];
    roleFamily: RoleFamily;
    builtAt: string;
};

export type ScorecardPayload = Omit<Scorecard, "scorecardId" | "builtAt">;
