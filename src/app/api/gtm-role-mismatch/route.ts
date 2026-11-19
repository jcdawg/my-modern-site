import { NextRequest, NextResponse } from "next/server";
import { resolveCompanyInput } from "@/lib/gtm-role-mismatch/company-input";
import { answersFromSignals, blankAnswers, scoreAnswers, type Diagnosis } from "@/lib/gtm-role-mismatch/diagnose";
import { askJev } from "@/lib/gtm-role-mismatch/engines.server";
import { fetchPublicPage, publicHttps } from "@/lib/gtm-role-mismatch/read-page.server";
import { checkMismatchRateLimit } from "@/lib/gtm-role-mismatch/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

// Privacy: the pasted job description, company text and URL are used for this
// one request only. They are never logged, stored, emailed or sent to analytics.

const MAX_CHARS = 12000;

function clientIp(req: NextRequest): string {
    return (
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown"
    );
}

function bad(error: string, status = 400) {
    return NextResponse.json({ error }, { status, headers: { "Cache-Control": "no-store" } });
}

function str(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: NextRequest) {
    const limit = checkMismatchRateLimit(clientIp(req));
    if (!limit.ok) {
        return NextResponse.json(
            { error: "Too many runs from this connection. Try again in a little while." },
            { status: 429, headers: { "Retry-After": String(limit.retryAfterSec), "Cache-Control": "no-store" } },
        );
    }

    let raw: unknown;
    try {
        raw = await req.json();
    } catch {
        return bad("Send JSON with jobDescription, companyText and an optional companyUrl.");
    }
    const body = (raw ?? {}) as Record<string, unknown>;
    const jobDescription = str(body.jobDescription);
    const resolved = resolveCompanyInput(str(body.companyText), str(body.companyUrl));
    let companyText = resolved.companyText;
    const companyUrl = resolved.companyUrl;

    if (jobDescription.length > MAX_CHARS || companyText.length > MAX_CHARS || companyUrl.length > 300) {
        return bad("That is longer than this tool reads. Trim each box to 12,000 characters.");
    }
    if (companyUrl && !(await publicHttps(companyUrl))) {
        return bad("That link is not a public https page. Paste the company text instead.");
    }
    if (jobDescription.length < 40 || (companyText.length < 40 && !/^https:\/\//i.test(companyUrl))) {
        return bad("Paste the job description, and either the company text or an https link to the site.");
    }

    let pageStatus: Diagnosis["pageStatus"] = "none";
    if (companyUrl) {
        const page = await fetchPublicPage(companyUrl);
        if (page) {
            companyText = [companyText, page].filter(Boolean).join("\n\n");
            pageStatus = "fetched";
        } else if (companyText.length < 40) {
            return ok(scoreAnswers(blankAnswers(), "signals", "failed", true));
        } else {
            pageStatus = "failed";
        }
    }
    if (companyText.trim().length < 40) {
        return ok(scoreAnswers(blankAnswers(), "signals", pageStatus, true));
    }

    const jevKey = process.env.TYPESAFE_API_KEY;
    if (jevKey) {
        const jev = await askJev(jevKey, jobDescription, companyText);
        if (jev) return ok(scoreAnswers(jev, "jev", pageStatus));
    }
    return ok(scoreAnswers(answersFromSignals(jobDescription, companyText), "signals", pageStatus));
}

function ok(diagnosis: Diagnosis) {
    return NextResponse.json(diagnosis, { headers: { "Cache-Control": "no-store" } });
}
