import type { HiringToolId } from "@/lib/hiring-tools";

/** Fire GA4 + Vercel Analytics after a successful results email. Tool name only, no email or summary. */
export function fireResultsEmailed(tool: HiringToolId) {
    if (typeof window === "undefined") return;

    const eventParams: Record<string, string> = { tool };

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
