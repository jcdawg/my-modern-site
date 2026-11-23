import type { HiringToolId } from "@/lib/hiring-tools";

/** Fire GA4 + Vercel Analytics after a successful results email. Tool name and review flag only, no PII. */
export function fireResultsEmailed(tool: HiringToolId, reviewRequested: boolean) {
    if (typeof window === "undefined") return;

    const eventParams: Record<string, string> = {
        tool,
        review_requested: reviewRequested ? "true" : "false",
    };

    if (typeof window.gtag === "function") {
        window.gtag("event", "results_emailed", eventParams);
    }

    void import("@vercel/analytics")
        .then(({ track }) => {
            track("results_emailed", eventParams);
        })
        .catch(() => {
            // no-op if the package is unavailable
        });
}

/** Fire generate_lead after a successful send when the visitor asked Chris to review. No email or summary. */
export function fireReviewRequestedLead(tool: HiringToolId) {
    if (typeof window === "undefined") return;

    const params: Record<string, string> = {
        form_name: tool,
        page_location: window.location.href,
    };

    if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", params);
    }

    void import("@vercel/analytics")
        .then(({ track }) => {
            track("generate_lead", params);
        })
        .catch(() => {
            // no-op if the package is unavailable
        });
}
