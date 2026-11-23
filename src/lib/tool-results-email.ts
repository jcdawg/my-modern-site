import { HIRING_TOOLS, isHiringToolId, type HiringToolId } from "@/lib/hiring-tools";
import { formatLeadSource, parseLeadSourceInput, type FirstTouch } from "@/lib/lead-source";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_SUMMARY_CHARS = 20_000;
export const CHRIS_NOTIFY_EMAIL = "chris@thekasgroup.com";

export function normalizeEmail(value: string): string {
    return value.trim().toLowerCase();
}

export function isValidEmail(value: string): boolean {
    return EMAIL_REGEX.test(value);
}

export function parseReviewRequested(value: unknown): boolean {
    return value === true || value === "true";
}

export type ToolResultsEmailInput = {
    email?: unknown;
    company?: unknown; // honeypot
    tool?: unknown;
    summary?: unknown;
    reviewRequested?: unknown;
    leadSource?: unknown;
};

export type ValidToolResultsEmail = {
    email: string;
    tool: HiringToolId;
    summary: string;
    reviewRequested: boolean;
    leadSource: FirstTouch;
};

export function validateToolResultsEmail(
    input: ToolResultsEmailInput,
):
    | { ok: true; honeypot: true }
    | { ok: true; honeypot: false; value: ValidToolResultsEmail }
    | { ok: false; error: string; status: number } {
    if (typeof input.company === "string" && input.company.trim()) {
        return { ok: true, honeypot: true };
    }

    const email = typeof input.email === "string" ? normalizeEmail(input.email) : "";
    if (!isValidEmail(email)) {
        return { ok: false, error: "Enter a valid email address.", status: 400 };
    }
    if (!isHiringToolId(input.tool)) {
        return { ok: false, error: "Unknown tool.", status: 400 };
    }
    if (typeof input.summary !== "string") {
        return { ok: false, error: "Missing result summary.", status: 400 };
    }
    const summary = input.summary.trim();
    if (!summary) {
        return { ok: false, error: "Missing result summary.", status: 400 };
    }
    if (summary.length > MAX_SUMMARY_CHARS) {
        return { ok: false, error: "Result summary is too long.", status: 400 };
    }

    return {
        ok: true,
        honeypot: false,
        value: {
            email,
            tool: input.tool,
            summary,
            reviewRequested: parseReviewRequested(input.reviewRequested),
            leadSource: parseLeadSourceInput(input.leadSource),
        },
    };
}

export function buildVisitorEmail(tool: HiringToolId, summary: string) {
    const title = HIRING_TOOLS[tool].title;
    return {
        subject: `Your ${title} results`,
        text: ["Here is a copy of your results from The Kas Group.", "", summary].join("\n"),
    };
}

/** Production notify when the visitor did not request a review: tool name + email only. */
export function buildNotifyEmail(tool: HiringToolId, visitorEmail: string) {
    const title = HIRING_TOOLS[tool].title;
    return {
        subject: `Results emailed: ${title}`,
        text: [
            "A visitor emailed themselves a copy of their tool results.",
            "",
            `Tool: ${title}`,
            `Visitor email: ${visitorEmail}`,
        ].join("\n"),
    };
}

/** Production lead when the visitor asked Chris to review and follow up. Generated summary only. */
export function buildReviewLeadEmail(
    tool: HiringToolId,
    visitorEmail: string,
    summary: string,
    leadSource: FirstTouch,
) {
    const title = HIRING_TOOLS[tool].title;
    return {
        subject: `Review requested: ${title}`,
        text: [
            "A visitor asked Chris to review their results and follow up.",
            "",
            `Tool: ${title}`,
            `Visitor email: ${visitorEmail}`,
            "",
            "Lead source:",
            formatLeadSource(leadSource),
            "",
            "Result summary:",
            summary,
        ].join("\n"),
    };
}
