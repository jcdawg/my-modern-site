export type RoleFamily = "sales" | "ai_data" | "other";

export type Competency = {
    name: string;
    whatFiveLooksLike: string;
    redFlags: string;
    interviewQuestions: string[];
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
    mustHaves: string[];
    niceToHaves: string[];
    roleFamily: RoleFamily;
    builtAt: string;
};

export type ScorecardPayload = Omit<Scorecard, "scorecardId" | "builtAt">;
