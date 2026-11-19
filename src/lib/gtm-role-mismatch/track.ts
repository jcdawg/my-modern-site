import type { Diagnosis } from "./diagnose";

/**
 * Fire GA4 + Vercel Analytics after a diagnostic run. Only coarse labels and the
 * computed score are sent. Never the pasted job description, company text, URL or quotes.
 */
export function fireGtmMismatchRun(result: Pick<Diagnosis, "mismatch" | "verdict" | "engine" | "stage" | "persona">) {
    if (typeof window === "undefined") return;

    const eventParams: Record<string, string> = {
        form_name: "gtm_role_mismatch",
        company_stage: result.stage,
        jd_persona: result.persona,
        mismatch_score: String(Math.round(result.mismatch)),
        verdict: result.verdict.slice(0, 40),
        engine: result.engine,
    };

    if (typeof window.gtag === "function") {
        window.gtag("event", "gtm_mismatch_run", eventParams);
    }

    void import("@vercel/analytics")
        .then(({ track }) => {
            track("gtm_mismatch_run", eventParams);
        })
        .catch(() => {
            // no-op if the package is unavailable
        });
}
