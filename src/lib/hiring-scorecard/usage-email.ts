import { formatLeadSource, type FirstTouch } from "@/lib/lead-source";

export type ScorecardUsageNotice = {
    roleTitle: string;
    seniority: string;
    industry: string;
    productType: string;
    scorecardId: string;
    leadSource: FirstTouch;
};

function formatEasternTime(date: Date): string {
    const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        dateStyle: "long",
        timeStyle: "short",
    }).format(date);
    return `${formatted} ET`;
}

function oneLine(value: string, fallback: string, max = 120): string {
    const trimmed = value.replace(/[\r\n]+/g, " ").trim();
    if (!trimmed) return fallback;
    return trimmed.slice(0, max);
}

export function buildScorecardUsageEmail(notice: ScorecardUsageNotice, at = new Date()) {
    const roleTitle = oneLine(notice.roleTitle, "Unknown role");
    const subject = `Scorecard built: ${roleTitle}`.slice(0, 140);
    const seniority = oneLine(notice.seniority, "Not provided", 60);
    const industry = oneLine(notice.industry, "Unknown", 60);
    const productType = oneLine(notice.productType, "Unknown", 60);
    const text = [
        "A hiring scorecard was built on thekasgroup.com.",
        "",
        `Time: ${formatEasternTime(at)}`,
        `Role title: ${roleTitle}`,
        `Seniority: ${seniority}`,
        `Industry: ${industry}`,
        `Product type: ${productType}`,
        `Scorecard ID: ${oneLine(notice.scorecardId, "Unknown", 80)}`,
        "",
        "Lead source:",
        formatLeadSource(notice.leadSource),
    ].join("\n");
    return { subject, text };
}

/** Fire-and-forget: never throws. Skips outside production so previews do not email Chris. */
export async function notifyScorecardBuilt(notice: ScorecardUsageNotice): Promise<void> {
    if (process.env.VERCEL_ENV !== "production") return;

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.SCORECARD_FROM_EMAIL;
    if (!resendKey || !from) {
        console.error("scorecard_usage_email_missing_config");
        return;
    }

    const { subject, text } = buildScorecardUsageEmail(notice);

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
                subject,
                text,
            }),
        });
        if (!res.ok) {
            console.error("scorecard_usage_email_failed", res.status);
        }
    } catch {
        console.error("scorecard_usage_email_error");
    }
}
