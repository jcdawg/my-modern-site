import { NextRequest, NextResponse } from "next/server";
import {
    CHRIS_NOTIFY_EMAIL,
    buildNotifyEmail,
    buildReviewLeadEmail,
    buildVisitorEmail,
    validateToolResultsEmail,
} from "@/lib/tool-results-email";
import { checkRateLimit } from "@/lib/tool-results-email-rate-limit";
import type { FirstTouch } from "@/lib/lead-source";
import type { HiringToolId } from "@/lib/hiring-tools";

function clientIp(req: NextRequest): string {
    return (
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown"
    );
}

async function sendResend(args: {
    from: string;
    to: string[];
    subject: string;
    text: string;
    apiKey: string;
    replyTo?: string;
}): Promise<{ ok: true } | { ok: false; status: number }> {
    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${args.apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: args.from,
            to: args.to,
            subject: args.subject,
            text: args.text,
            ...(args.replyTo ? { reply_to: args.replyTo } : {}),
        }),
    });
    if (!res.ok) {
        return { ok: false, status: res.status };
    }
    return { ok: true };
}

/** Production-only notify to Chris. Review leads include the generated summary and first-touch source. */
async function notifyChris(args: {
    tool: HiringToolId;
    visitorEmail: string;
    summary: string;
    reviewRequested: boolean;
    leadSource: FirstTouch;
    from: string;
    apiKey: string;
}) {
    if (process.env.VERCEL_ENV !== "production") return;

    const message = args.reviewRequested
        ? buildReviewLeadEmail(args.tool, args.visitorEmail, args.summary, args.leadSource)
        : buildNotifyEmail(args.tool, args.visitorEmail);

    try {
        const result = await sendResend({
            from: args.from,
            to: [CHRIS_NOTIFY_EMAIL],
            subject: message.subject,
            text: message.text,
            apiKey: args.apiKey,
            replyTo: args.reviewRequested ? args.visitorEmail : undefined,
        });
        if (!result.ok) {
            console.error("tool_results_email_notify_failed", result.status);
        }
    } catch {
        console.error("tool_results_email_notify_error");
    }
}

export async function POST(req: NextRequest) {
    const ipLimit = checkRateLimit(`email:${clientIp(req)}`);
    if (!ipLimit.ok) {
        return NextResponse.json(
            { error: `Too many requests. Try again in about ${ipLimit.retryAfterSec} seconds.` },
            { status: 429 },
        );
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const input = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
    const parsed = validateToolResultsEmail({
        email: input.email,
        company: input.company,
        tool: input.tool,
        summary: input.summary,
        reviewRequested: input.reviewRequested,
        leadSource: input.leadSource,
    });

    if (!parsed.ok) {
        return NextResponse.json({ error: parsed.error }, { status: parsed.status });
    }
    if (parsed.honeypot) {
        return NextResponse.json({ ok: true, sent: false });
    }

    const emailLimit = checkRateLimit(`email-addr:${parsed.value.email}`);
    if (!emailLimit.ok) {
        return NextResponse.json(
            { error: `Too many requests. Try again in about ${emailLimit.retryAfterSec} seconds.` },
            { status: 429 },
        );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.SCORECARD_FROM_EMAIL;
    if (!resendKey || !from) {
        console.error("tool_results_email_missing_config");
        return NextResponse.json({
            ok: true,
            sent: false,
            message: "Could not send just now. Copy the result summary instead.",
        });
    }

    const { email, tool, summary, reviewRequested, leadSource } = parsed.value;
    const visitor = buildVisitorEmail(tool, summary);

    try {
        const result = await sendResend({
            from,
            to: [email],
            subject: visitor.subject,
            text: visitor.text,
            apiKey: resendKey,
        });
        if (!result.ok) {
            console.error("tool_results_email_send_failed", result.status);
            return NextResponse.json({
                ok: true,
                sent: false,
                message: "Could not send just now. Copy the result summary instead.",
            });
        }
        void notifyChris({
            tool,
            visitorEmail: email,
            summary,
            reviewRequested,
            leadSource,
            from,
            apiKey: resendKey,
        });
        return NextResponse.json({ ok: true, sent: true, message: "Sent. Check your inbox." });
    } catch {
        console.error("tool_results_email_send_error");
        return NextResponse.json({
            ok: true,
            sent: false,
            message: "Could not send just now. Copy the result summary instead.",
        });
    }
}
