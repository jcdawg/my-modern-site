/** Fire GA4 + Vercel Analytics only after a confirmed successful scorecard generate. Never send JD text. */
export function fireScorecardGenerate(params: {
    role_title: string;
    seniority: string;
    industry: string;
    product_type: string;
}) {
    if (typeof window === "undefined") return;

    const eventParams: Record<string, string> = {
        form_name: "hiring_scorecard",
        role_title: params.role_title.slice(0, 120),
        seniority: params.seniority.slice(0, 60),
        industry: params.industry.slice(0, 60),
        product_type: params.product_type.slice(0, 60),
    };

    if (typeof window.gtag === "function") {
        window.gtag("event", "scorecard_generate", eventParams);
    }

    void import("@vercel/analytics")
        .then(({ track }) => {
            track("scorecard_generate", eventParams);
        })
        .catch(() => {
            // no-op if the package is unavailable
        });
}
