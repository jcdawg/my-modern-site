/**
 * GTM Role Mismatch diagnostic engine.
 * Two Choices (company stage, JD persona) and ten Nouls. The mismatch number is
 * computed here from those answers; no model writes it. Pure module: no I/O,
 * no logging, nothing about the pasted text leaves this file.
 */
export type Engine = "jev" | "signals";
export type Verdict = "Aligned" | "Watch" | "Mismatch" | "Not enough to call";
export type Stage = "founder_led" | "first_repeatable" | "scaled" | "unclear";
export type Persona = "founding_seller" | "player_coach" | "sales_manager" | "vp_cro" | "unclear";
export type PageStatus = "none" | "fetched" | "failed";

export const STAGES = ["founder_led", "first_repeatable", "scaled", "unclear"] as const;
export const PERSONAS = ["founding_seller", "player_coach", "sales_manager", "vp_cro", "unclear"] as const;

const STAGE_LEVEL: Record<Stage, number> = {
    founder_led: 0,
    first_repeatable: 1,
    scaled: 3,
    unclear: -1,
};

const PERSONA_LEVEL: Record<Persona, number> = {
    founding_seller: 0,
    player_coach: 1,
    sales_manager: 2,
    vp_cro: 3,
    unclear: -1,
};

export const STAGE_CRITERIA: Record<Stage, string> = {
    founder_led:
        "A founder is still selling, this is the first sales hire, or there is no sales team and no written motion. Seed or an equivalent early stage.",
    first_repeatable:
        "A few sellers or a rough motion exist, but the company is still founder-heavy and does not yet have a sales organization.",
    scaled:
        "A sales team, a playbook, enablement, or a later-stage motion already exists. The company is past the first-hire problem.",
    unclear: "The company text does not say who sells today, what stage they are in, or whether a motion exists.",
};

export const PERSONA_CRITERIA: Record<Persona, string> = {
    founding_seller:
        "A hands-on closer. First sales hire. No team to manage. The job is to sell and help invent the motion.",
    player_coach:
        "Sells their own deals and starts to coach. A small or nonexistent team. Still in the deals in year one.",
    sales_manager: "Runs people and process more than a personal number. A manager, not the first closer.",
    vp_cro:
        "VP of Sales, CRO, or head of sales. Builds an organization, owns the forecast, enablement, and board reporting.",
    unclear: "The title and the duties do not settle on one level.",
};

export const NOULS = [
    {
        key: "founder_still_sells",
        side: "company",
        label: "Founder still sells",
        instructions: "The COMPANY text says a founder is still selling or closing deals.",
    },
    {
        key: "no_sales_team",
        side: "company",
        label: "No sales team yet",
        instructions: "The COMPANY text says there is no sales team, or that this would be the first sales hire.",
    },
    {
        key: "no_process",
        side: "company",
        label: "No process yet",
        instructions: "The COMPANY text says there is no playbook, sales process, or enablement function.",
    },
    {
        key: "modest_deal",
        side: "company",
        label: "Modest deal size",
        instructions:
            "The COMPANY text describes a modest contract value or a short sales cycle, not a long enterprise motion. If deal size and cycle are not stated, this is uncertain.",
    },
    {
        key: "jd_is_org_leader",
        side: "jd",
        label: "JD is a VP or CRO seat",
        instructions: "The JOB DESCRIPTION is for a VP of Sales, CRO, or an equivalent leader of a sales organization.",
    },
    {
        key: "jd_expects_team",
        side: "jd",
        label: "JD expects a team",
        instructions: "The JOB DESCRIPTION expects the hire to build, hire, or manage a sales team.",
    },
    {
        key: "jd_expects_systems",
        side: "jd",
        label: "JD expects systems",
        instructions: "The JOB DESCRIPTION expects the hire to install enablement, a forecasting system, or board reporting.",
    },
    {
        key: "jd_is_hands_on",
        side: "jd",
        label: "JD is hands-on",
        instructions: "The JOB DESCRIPTION says the hire will personally source and close deals.",
    },
    {
        key: "jd_year_one_is_org",
        side: "jd",
        label: "Year one is an org job",
        instructions:
            "The JOB DESCRIPTION makes the first year about building a team and a system, rather than carrying a personal sales number.",
    },
    {
        key: "jd_wants_long_tenure",
        side: "jd",
        label: "JD wants a long resume",
        instructions: "The JOB DESCRIPTION requires many years of sales leadership or experience running a large team.",
    },
] as const;

export type NoulKey = (typeof NOULS)[number]["key"];

const LEADER_NOULS: NoulKey[] = [
    "jd_is_org_leader",
    "jd_expects_team",
    "jd_expects_systems",
    "jd_year_one_is_org",
    "jd_wants_long_tenure",
];

export const SCAN_LABELS = ["Company stage", "Seat the JD is hiring", ...NOULS.map((item) => item.label)];

export type ChoiceAnswer = {
    choice: string;
    confidence: number;
    probabilities: Record<string, number>;
};

export type NoulAnswer = {
    noul: number;
    evidence: string;
};

export type Answers = {
    company_stage: ChoiceAnswer;
    jd_persona: ChoiceAnswer;
    nouls: Record<NoulKey, NoulAnswer>;
};

export type Check = {
    key: string;
    label: string;
    side: "company" | "jd" | "seat";
    probability: number;
    call: "Yes" | "No" | "Unclear";
    finding: string;
    evidence: string;
};

export type Diagnosis = {
    mismatch: number;
    confidence: number;
    verdict: Verdict;
    summary: string;
    stage: Stage;
    persona: Persona;
    stageLabel: string;
    stageDetail: string;
    stageConfidence: number;
    personaLabel: string;
    personaDetail: string;
    personaConfidence: number;
    gaps: { title: string; detail: string }[];
    roleShouldBe: string;
    firstYear: string[];
    recommendation: string;
    checks: Check[];
    engine: Engine;
    pageStatus: PageStatus;
};

export const SAMPLE_MISMATCH = {
    jobDescription: `VP of Sales

We are looking for an experienced VP of Sales to build and scale our sales organization. The ideal candidate has 10+ years of experience, has built and led teams of 15 to 25 people, and has deep experience with enterprise sales cycles. You will implement sales process, enablement, and forecasting, hire and coach a full AE and SDR team, own the go-to-market strategy, and report pipeline and revenue to the board.`,
    companyText: `We are a seed-stage B2B SaaS company helping mid-market teams automate internal workflows. Founded 14 months ago. Our founder is still closing most deals. Average contract value is about $18k and cycles are short. We are hiring our first sales person to help figure out the motion and close deals alongside the founder. There is no sales process, no enablement, and no team to manage yet.`,
};

export const SAMPLE_ALIGNED = {
    jobDescription: `Founding Account Executive

This is our first sales hire. You will source, run, and close your own deals next to the founder. There is no playbook yet. You are comfortable with ambiguity, you write down what works, and you help turn founder-led sales into a motion someone else can run later. Mid-market buyers, roughly $15k to $25k ACV. Hands-on for the first year. Not a management seat.`,
    companyText: `Seed-stage B2B SaaS, about 14 months old. The founder still closes most deals. ACV sits around $18k. We need a founding AE who will sell and help build the motion. No enablement team and no formal process yet.`,
};

const STAGE_COPY: Record<Stage, { label: string; detail: string }> = {
    founder_led: {
        label: "Founder-led, first sales hire",
        detail: "The company text reads as a founder still selling, with no team and no written motion to hand someone.",
    },
    first_repeatable: {
        label: "Early motion, not an org yet",
        detail: "Something is selling, but this is not a company that already has a sales organization to inherit.",
    },
    scaled: {
        label: "Motion already running",
        detail: "The company text describes a team, a playbook, or a later-stage motion that already exists.",
    },
    unclear: {
        label: "Stage is not pinned",
        detail: "The company text does not say who sells today, the deal size, or whether a process exists.",
    },
};

const PERSONA_COPY: Record<Persona, { label: string; detail: string }> = {
    founding_seller: {
        label: "Founding AE",
        detail: "The description will sort for someone who closes their own deals and helps invent the motion.",
    },
    player_coach: {
        label: "Player-coach",
        detail: "The description asks for someone still in the deals, with a light coaching job on the side.",
    },
    sales_manager: {
        label: "Sales manager",
        detail: "The description is a management seat. It will sort for someone who runs people more than a personal number.",
    },
    vp_cro: {
        label: "VP or CRO",
        detail: "The description is written for an org leader: team, enablement, forecast, and a board narrative.",
    },
    unclear: {
        label: "Seat is mixed",
        detail: "The description does not settle. A seller and a leader can both read themselves into it.",
    },
};

export function jevQuestions() {
    return {
        company_stage: {
            type: "choice" as const,
            instructions:
                "What GTM stage does the COMPANY text describe? Ignore the job description. If the company text does not say, choose unclear.",
            criteria: STAGE_CRITERIA,
        },
        jd_persona: {
            type: "choice" as const,
            instructions:
                "Who will this JOB DESCRIPTION attract? Ignore the company text. If the title and duties do not settle on one level, choose unclear.",
            criteria: PERSONA_CRITERIA,
        },
        ...Object.fromEntries(
            NOULS.map((item) => [item.key, { type: "noul" as const, instructions: item.instructions }]),
        ),
    };
}

export function answersFromSignals(jobDescription: string, companyText: string): Answers {
    const jd = jobDescription.toLowerCase();
    const co = companyText.toLowerCase();
    const hit = (text: string, phrases: string[]) => phrases.some((phrase) => text.includes(phrase));

    const early = hit(co, ["seed", "pre-seed", "preseed", "first hire", "first sales", "founding", "14 month"]);
    const founderSells = hit(co, [
        "founder is still",
        "founder still",
        "still closing",
        "still closes",
        "founder-led",
        "founder closes",
        "founders close",
        "founder sells",
        "founders sell",
        "founder does all",
        "founder handles",
        "ceo closes",
        "ceo sells",
    ]);
    const noTeam = hit(co, ["no team", "no sales team", "no sellers", "no salespeople", "no reps", "first sales", "first hire", "first sales person", "founding ae"]);
    const noProcess =
        hit(co, ["no sales process", "no process", "no enablement", "no playbook", "no formal process", "no documented"]) ||
        /sales process: (none|no\b|nothing|n\/a|ad hoc|not yet)/.test(co);
    const modest = /\$\s?1[0-9]\s?k|\$\s?2[0-5]\s?k|18k|15k|20k|25k|short/.test(co) || dollarsInK(co).some((k) => k <= 50);
    const fewSellers = /\b(2|3|4|two|three|four|a few|a couple of|couple of) (aes|account executives|sellers|reps|salespeople)\b/.test(co);
    const scaled =
        hit(co, ["series b", "series c", "enablement team", "sales ops", "playbook is", "ae team", "sales team of", "sales managers"]) ||
        (!noProcess && hit(co, ["documented playbook", "documented sales process", "repeatable playbook"]));

    const vp = hit(jd, ["vp of sales", "vp, sales", "chief revenue", "cro", "head of sales"]);
    const team = hit(jd, ["team of", "hire and coach", "build and scale", "sdr team", "led teams"]);
    const systems = hit(jd, ["enablement", "forecasting", "board", "go-to-market strategy"]);
    const hands = hit(jd, ["close your own", "own deals", "alongside the founder", "next to the founder", "hands-on", "hands on", "source, run, and close"]);
    const orgYear = team && !hit(jd, ["not a management", "personal number"]);
    const tenure = hit(jd, ["10+ years", "15+ years", "10 years", "15 to 25"]);
    const founding = hit(jd, ["founding ae", "founding account", "first sales hire", "not a management"]);

    const stage: Stage = early || founderSells || noTeam
        ? "founder_led"
        : fewSellers && !scaled
            ? "first_repeatable"
            : scaled
                ? "scaled"
                : "unclear";
    const persona: Persona = founding && !vp ? "founding_seller" : vp ? "vp_cro" : hands ? "player_coach" : "unclear";

    const nouls: Answers["nouls"] = {
        founder_still_sells: bit(founderSells, 0.9, 0.12),
        no_sales_team: bit(noTeam, 0.88, 0.2),
        no_process: bit(noProcess, 0.9, 0.22),
        modest_deal: bit(modest, 0.86, 0.45),
        jd_is_org_leader: bit(vp, 0.93, 0.08),
        jd_expects_team: bit(team, 0.9, 0.12),
        jd_expects_systems: bit(systems, 0.88, 0.16),
        jd_is_hands_on: bit(hands, 0.9, 0.14),
        jd_year_one_is_org: bit(orgYear, 0.84, 0.18),
        jd_wants_long_tenure: bit(tenure, 0.9, 0.14),
    };

    return withEvidence(
        {
            company_stage: choice(stage, STAGES, stage === "unclear" ? 0.34 : 0.86),
            jd_persona: choice(persona, PERSONAS, persona === "unclear" ? 0.34 : 0.88),
            nouls,
        },
        jobDescription,
        companyText,
    );
}

/** Dollar amounts written as $NNk (or $N.Nm) in the text, in thousands. */
function dollarsInK(text: string): number[] {
    const out: number[] = [];
    for (const m of text.matchAll(/\$\s?(\d+(?:\.\d+)?)\s?(k|m)\b/g)) {
        const n = Number(m[1]);
        if (Number.isFinite(n)) out.push(m[2] === "m" ? n * 1000 : n);
    }
    return out;
}

export function scoreAnswers(
    answers: Answers,
    engine: Engine,
    pageStatus: PageStatus,
    urlFailed = false,
): Diagnosis {
    const stage = asStage(answers.company_stage.choice);
    const persona = asPersona(answers.jd_persona.choice);
    const stageConfidence = clamp01(answers.company_stage.confidence);
    const personaConfidence = clamp01(answers.jd_persona.confidence);
    const known = stage !== "unclear" && persona !== "unclear" && stageConfidence >= 0.45 && personaConfidence >= 0.45;

    const gap = known ? Math.abs(STAGE_LEVEL[stage] - PERSONA_LEVEL[persona]) / 3 : 0.5;
    const leader = mean(LEADER_NOULS.map((key) => answers.nouls[key].noul));
    const hands = answers.nouls.jd_is_hands_on.noul;
    const evidence =
        stage === "founder_led" || stage === "first_repeatable"
            ? leader * 0.8 + (1 - hands) * 0.2
            : stage === "scaled"
                ? (1 - leader) * 0.5 + hands * 0.5
                : 0.5;
    const raw = known ? 0.65 * gap + 0.35 * evidence : 0.5;

    const sharp = mean(NOULS.map((item) => Math.abs(answers.nouls[item.key].noul - 0.5) * 2));
    const stageWeight = stage === "unclear" ? Math.min(stageConfidence, 0.3) : stageConfidence;
    const personaWeight = persona === "unclear" ? Math.min(personaConfidence, 0.3) : personaConfidence;
    const confidence = clamp01(0.4 * stageWeight + 0.4 * personaWeight + 0.2 * sharp);
    const shown = confidence >= 0.6 ? raw : 0.5 + (raw - 0.5) * (confidence / 0.6);
    const mismatch = Math.round(clamp01(shown) * 100);

    const verdict: Verdict = !known || confidence < 0.55 ? "Not enough to call" : verdictFor(mismatch);
    const early = stage === "founder_led" || stage === "first_repeatable";
    const gaps = buildGaps(answers, stage, early, known);
    const role = roleFor(stage);
    const summary = urlFailed && companyIsThin(answers)
        ? "That URL did not return page text we could read. Paste the homepage or the pitch instead."
        : summaryFor(verdict, stage, persona, mismatch);

    return {
        mismatch,
        confidence: Math.round(confidence * 100),
        verdict,
        summary,
        stage,
        persona,
        stageLabel: STAGE_COPY[stage].label,
        stageDetail: STAGE_COPY[stage].detail,
        stageConfidence: Math.round(stageConfidence * 100),
        personaLabel: PERSONA_COPY[persona].label,
        personaDetail: PERSONA_COPY[persona].detail,
        personaConfidence: Math.round(personaConfidence * 100),
        gaps,
        roleShouldBe: role.seat,
        firstYear: role.year,
        recommendation: recommend(verdict, stage),
        checks: NOULS.map((item) => {
            const probability = clamp01(answers.nouls[item.key].noul);
            const call = probability >= 0.62 ? "Yes" : probability <= 0.38 ? "No" : "Unclear";
            return {
                key: item.key,
                label: item.label,
                side: item.side,
                probability,
                call,
                finding: `${call}, ${Math.round(probability * 100)}%.`,
                evidence: answers.nouls[item.key].evidence,
            };
        }),
        engine,
        pageStatus,
    };
}

export function diagnoseFromSignals(jobDescription: string, companyText: string): Diagnosis {
    return scoreAnswers(answersFromSignals(jobDescription, companyText), "signals", "none");
}

export function blankAnswers(): Answers {
    return {
        company_stage: choice("unclear", STAGES, 0.2),
        jd_persona: choice("unclear", PERSONAS, 0.2),
        nouls: Object.fromEntries(NOULS.map((item) => [item.key, { noul: 0.5, evidence: "" }])) as Answers["nouls"],
    };
}

export function quoteFrom(text: string, jobDescription: string, companyText: string) {
    const quote = text.replace(/\s+/g, " ").trim();
    if (quote.length < 12 || quote.length > 180) return "";
    const hay = `${jobDescription}\n${companyText}`.toLowerCase().replace(/\s+/g, " ");
    return hay.includes(quote.toLowerCase()) ? quote : "";
}

function companyIsThin(answers: Answers) {
    return asStage(answers.company_stage.choice) === "unclear";
}

function summaryFor(verdict: Verdict, stage: Stage, persona: Persona, mismatch: number) {
    if (verdict === "Not enough to call") {
        return "The two texts do not pin the stage and the seat tightly enough to call a mismatch.";
    }
    const stageName = STAGE_COPY[stage].label.toLowerCase();
    const personaName = PERSONA_COPY[persona].label;
    if (verdict === "Aligned") {
        return `The company reads as ${stageName}. The job description reads as a ${personaName}. Same level. Computed mismatch is ${mismatch}%.`;
    }
    return `The company reads as ${stageName}. The job description reads as a ${personaName}. Those answers do not describe the same seat.`;
}

function recommend(verdict: Verdict, stage: Stage) {
    if (verdict === "Not enough to call") {
        return "Add who sells today, the contract value, the cycle, and whether a playbook exists. Then run it again before you post.";
    }
    if (verdict === "Mismatch" && (stage === "founder_led" || stage === "first_repeatable")) {
        return "Rewrite the seat before you post it. A later-stage leader will take the conversation and then stall when there is no team to manage.";
    }
    if (verdict === "Mismatch") {
        return "The description is a level off the motion you already have. Title the seat to the next 12 months, then build the scorecard.";
    }
    if (verdict === "Watch") {
        return "The level is close, but not settled. Cut any sentence that hires a team or a system the company does not have.";
    }
    return "The seat and the stage are the same kind of hire. Build the scorecard against this description, not against a bigger title.";
}

function roleFor(stage: Stage) {
    if (stage === "scaled") {
        return {
            seat: "A sales leader who inherits a motion that already closes, then hires behind that playbook.",
            year: [
                "Install a forecast the founder can trust.",
                "Hire only after the motion repeats without the new leader in every deal.",
                "Coach a small team against one scorecard.",
            ],
        };
    }
    if (stage === "unclear") {
        return {
            seat: "Do not post yet. Write the next 12 months in concrete terms, then title the seat to that page.",
            year: [
                "Name who sells today.",
                "Name the contract value and the cycle.",
                "Say whether a playbook exists, in one sentence.",
            ],
        };
    }
    return {
        seat: "Founding AE. Close your own deals next to the founder, write down what works, and do not manage a team in year one.",
        year: [
            "Own a personal number and source a real share of pipeline.",
            "Close without an SDR team or an enablement function.",
            "Leave a written motion: who buys, the stages, and the talk track that won.",
        ],
    };
}

function buildGaps(answers: Answers, stage: Stage, early: boolean, known: boolean) {
    if (!known) {
        return [
            {
                title: "Stage or seat is too vague",
                detail: "One of the two classifications did not clear. A percentage on top of that would be a costume.",
            },
        ];
    }
    const gaps: { title: string; detail: string }[] = [];
    const yes = (key: NoulKey) => answers.nouls[key].noul >= 0.62;
    if (early && yes("jd_expects_team")) {
        gaps.push({
            title: "The JD hires a manager before there is a team",
            detail: "The company side does not describe a team to inherit. The job description still asks this person to build or run one.",
        });
    }
    if (early && yes("jd_expects_systems")) {
        gaps.push({
            title: "Process is assumed, not present",
            detail: "Enablement, forecasting, or a board report is in the job. That is a system this stage does not have.",
        });
    }
    if (early && yes("jd_is_org_leader") && answers.nouls.jd_is_hands_on.noul < 0.45) {
        gaps.push({
            title: "Year one is a selling job, and the JD is not",
            detail: "An org-leader description with no personal number will attract someone waiting for a team.",
        });
    }
    if (stage === "scaled" && yes("jd_is_hands_on") && answers.nouls.jd_is_org_leader.noul < 0.4) {
        gaps.push({
            title: "The JD under-scopes a motion that already runs",
            detail: "A founding-seller description will attract a builder and miss the operator this stage needs.",
        });
    }
    if (!gaps.length) {
        gaps.push({
            title: "No single check contradicts the level",
            detail: "The seat and the stage landed in the same neighborhood. Still interview against the first year, not the title.",
        });
    }
    return gaps.slice(0, 3);
}

function verdictFor(mismatch: number): Verdict {
    if (mismatch >= 65) return "Mismatch";
    if (mismatch >= 40) return "Watch";
    return "Aligned";
}

function bit(on: boolean, yes: number, no: number): NoulAnswer {
    return { noul: on ? yes : no, evidence: "" };
}

function choice(picked: string, options: readonly string[], confidence: number): ChoiceAnswer {
    const rest = (1 - confidence) / Math.max(1, options.length - 1);
    return {
        choice: picked,
        confidence,
        probabilities: Object.fromEntries(options.map((option) => [option, option === picked ? confidence : rest])),
    };
}

function asStage(value: string): Stage {
    return STAGES.includes(value as Stage) ? (value as Stage) : "unclear";
}

function asPersona(value: string): Persona {
    return PERSONAS.includes(value as Persona) ? (value as Persona) : "unclear";
}

function mean(values: number[]) {
    if (!values.length) return 0.5;
    return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function clamp01(value: number) {
    if (!Number.isFinite(value)) return 0;
    return Math.min(1, Math.max(0, value));
}

export function coerceAnswers(raw: unknown, jobDescription: string, companyText: string): Answers | null {
    if (!raw || typeof raw !== "object") return null;
    const body = raw as Record<string, unknown>;
    const stage = readChoice(body.company_stage, STAGES);
    const persona = readChoice(body.jd_persona, PERSONAS);
    if (!stage || !persona) return null;
    const nouls = {} as Answers["nouls"];
    const bag = (body.nouls ?? body) as Record<string, unknown>;
    for (const item of NOULS) {
        const value = bag[item.key];
        const noul = readNoul(value);
        if (noul == null) return null;
        const evidence = typeof value === "object" && value && "evidence" in value ? String((value as { evidence?: unknown }).evidence ?? "") : "";
        nouls[item.key] = { noul, evidence: quoteFrom(evidence, jobDescription, companyText) };
    }
    return { company_stage: stage, jd_persona: persona, nouls };
}

function readChoice(value: unknown, options: readonly string[]): ChoiceAnswer | null {
    if (!value || typeof value !== "object") return null;
    const row = value as { choice?: unknown; confidence?: unknown; probabilities?: unknown };
    const picked = typeof row.choice === "string" && options.includes(row.choice) ? row.choice : "";
    if (!picked) return null;
    const probabilities: Record<string, number> = {};
    if (row.probabilities && typeof row.probabilities === "object") {
        for (const option of options) {
            const n = (row.probabilities as Record<string, unknown>)[option];
            if (typeof n === "number" && Number.isFinite(n)) probabilities[option] = clamp01(n);
        }
    }
    const confidence = typeof row.confidence === "number" ? clamp01(row.confidence) : probabilities[picked] ?? 0.5;
    if (!Object.keys(probabilities).length) {
        return choice(picked, options, confidence);
    }
    return { choice: picked, confidence, probabilities };
}

function readNoul(value: unknown) {
    if (typeof value === "number") return clamp01(value);
    if (!value || typeof value !== "object") return null;
    const noul = (value as { noul?: unknown }).noul;
    return typeof noul === "number" && Number.isFinite(noul) ? clamp01(noul) : null;
}

/**
 * Cues that point at the sentence supporting each Noul. Used when the engine
 * (the question engine, or the keyword stand-in) returns a probability without an excerpt.
 * Whatever is returned is cut from the pasted text and re-checked by quoteFrom,
 * so it is always verbatim.
 */
const EVIDENCE_CUES: Record<NoulKey, RegExp[]> = {
    founder_still_sells: [/founder (is )?still|still clos|founder-led|founders? (closes?|sells?|does all|handles)|ceo (closes|sells)/i, /alongside the founder|next to the founder/i],
    no_sales_team: [/no (sales )?team|no (sellers|salespeople|reps)|first sales|first hire|founding ae|no one (else )?sells/i],
    no_process: [/no (sales )?process|no enablement|no playbook|no formal process|no documented|sales process: (none|no\b|nothing|ad hoc|not yet)/i],
    modest_deal: [/\bacv\b|contract value|deal size|typical deal size|cycles? (are|is) short|short (sales )?cycle/i],
    jd_is_org_leader: [/\bvp\b|vice president|chief revenue|\bcro\b|head of sales/i],
    jd_expects_team: [/hire and coach|sdr team|teams? of \d|led teams|manage (a|the) team/i, /build (a|the) team|build and scale/i],
    jd_expects_systems: [/enablement|forecast|board/i],
    jd_is_hands_on: [/close your own|own deals|source, run, and close|hands-on|hands on/i, /alongside the founder|next to the founder/i],
    jd_year_one_is_org: [/build and scale|build (a|the|out) (sales )?(team|organization|org)/i, /hire and coach/i],
    jd_wants_long_tenure: [/\d+\+? ?years|years of (sales )?leadership/i],
};

function sentences(text: string) {
    return text
        .split(/\n+/)
        .flatMap((line) => line.match(/[^.!?]+[.!?]*/g) ?? [])
        .map((part) => part.replace(/\s+/g, " ").trim())
        .filter(Boolean);
}

export function evidenceFor(key: NoulKey, jobDescription: string, companyText: string) {
    const item = NOULS.find((row) => row.key === key);
    if (!item) return "";
    const source = item.side === "jd" ? jobDescription : companyText;
    const list = sentences(source);
    for (const cue of EVIDENCE_CUES[key]) {
        for (const sentence of list) {
            const quote = excerptAround(sentence, cue, jobDescription, companyText);
            if (quote) return quote;
        }
    }
    return "";
}

function excerptAround(sentence: string, cue: RegExp, jobDescription: string, companyText: string) {
    const match = cue.exec(sentence);
    if (!match) return "";
    let excerpt = sentence;
    if (excerpt.length > 180) {
        const start = Math.max(0, match.index - 60);
        excerpt = excerpt.slice(start, start + 180);
        if (start > 0) excerpt = excerpt.replace(/^\S*\s/, "");
        excerpt = excerpt.replace(/\s\S*$/, "");
    }
    return quoteFrom(excerpt, jobDescription, companyText);
}

/** Attach a verbatim excerpt to every Noul the engine called Yes but left without one. */
export function withEvidence(answers: Answers, jobDescription: string, companyText: string): Answers {
    const nouls = { ...answers.nouls };
    for (const item of NOULS) {
        const row = nouls[item.key];
        if (row.evidence || row.noul < 0.62) continue;
        nouls[item.key] = { ...row, evidence: evidenceFor(item.key, jobDescription, companyText) };
    }
    return { ...answers, nouls };
}
