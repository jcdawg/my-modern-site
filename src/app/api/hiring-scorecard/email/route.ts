import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/hiring-scorecard/rate-limit";
import { sanitizeScorecardText } from "@/lib/hiring-scorecard/sanitize";
import type { Scorecard } from "@/lib/hiring-scorecard/types";

function clientIp(req: NextRequest): string {
    return (
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown"
    );
}

function scorecardPlainText(s: Scorecard): string {
    const lines: string[] = [
        "Hiring Scorecard Builder, by The Kas Group",
        `Scorecard ID: ${s.scorecardId}`,
        `Role: ${s.roleTitle}`,
        "",
        "1. Mission",
        s.mission,
        "",
        "2. Outcomes",
        "90 days:",
        ...s.outcomes.days90.map((x) => `  - ${x}`),
        "6 months:",
        ...s.outcomes.months6.map((x) => `  - ${x}`),
        "12 months:",
        ...s.outcomes.months12.map((x) => `  - ${x}`),
        "",
        "3. Competencies (rate 1 to 5)",
    ];
    s.competencies.forEach((c, i) => {
        lines.push(`${i + 1}. ${c.name}`);
        lines.push(`   What a 5 looks like: ${c.whatFiveLooksLike}`);
        lines.push(`   Red flags: ${c.redFlags}`);
        lines.push("   Interview questions:");
        c.interviewQuestions.forEach((q) => lines.push(`     - ${q}`));
        lines.push("   Reference-check questions:");
        c.referenceQuestions.forEach((q) => lines.push(`     - ${q}`));
    });
    lines.push("", "4. Must-haves");
    s.mustHaves.forEach((x) => lines.push(`  - ${x}`));
    lines.push("", "5. Nice-to-haves");
    s.niceToHaves.forEach((x) => lines.push(`  - ${x}`));
    lines.push("", "Built with The Kas Group");
    return sanitizeScorecardText(lines.join("\n"));
}

export async function POST(req: NextRequest) {
    const limited = checkRateLimit(`email:${clientIp(req)}`);
    if (!limited.ok) {
        return NextResponse.json(
            { error: `Too many requests. Try again in about ${limited.retryAfterSec} seconds.` },
            { status: 429 }
        );
    }

    let body: {
        email?: string;
        company?: string; // honeypot
        scorecard?: Scorecard;
    };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot: bots fill hidden company field
    if (body.company) {
        return NextResponse.json({ ok: true, sent: false, message: "Thanks. Chris will follow up if a fit." });
    }

    const email = (body.email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (!body.scorecard?.scorecardId || !body.scorecard.roleTitle) {
        return NextResponse.json({ error: "Missing scorecard." }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.SCORECARD_FROM_EMAIL;
    if (!resendKey || !from) {
        console.error("scorecard_email_missing_config");
        return NextResponse.json({
            ok: true,
            sent: false,
            message: "Thanks. Your email was noted, but delivery is not configured yet. Use Copy or Download PDF to keep your scorecard.",
        });
    }

    const text = [
        `Visitor email: ${email}`,
        `Scorecard ID: ${body.scorecard.scorecardId}`,
        `Role title: ${body.scorecard.roleTitle}`,
        "",
        scorecardPlainText(body.scorecard),
    ].join("\n");

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${resendKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: ["chris@thekasgroup.com"],
                reply_to: email,
                subject: `Hiring scorecard lead: ${sanitizeScorecardText(body.scorecard.roleTitle)}`,
                text,
            }),
        });
        if (!res.ok) {
            const err = await res.text().catch(() => "");
            console.error("scorecard_email_send_failed", res.status, err.slice(0, 200));
            return NextResponse.json({
                ok: true,
                sent: false,
                message: "Thanks. We could not send the note just now. Use Copy or Download PDF to keep your scorecard.",
            });
        }
        return NextResponse.json({
            ok: true,
            sent: true,
            message: "Thanks. Chris will follow up if it looks like a fit.",
        });
    } catch {
        console.error("scorecard_email_send_error");
        return NextResponse.json({
            ok: true,
            sent: false,
            message: "Thanks. We could not send the note just now. Use Copy or Download PDF to keep your scorecard.",
        });
    }
}
