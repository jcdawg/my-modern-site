/** Shared catalog for the five hiring tools. Titles and descriptions match the /tools cards. */

export const HIRING_TOOL_IDS = [
    "pip-calculator",
    "bad-hire-calculator",
    "ramp-time-calculator",
    "hiring-scorecard",
    "gtm-role-mismatch",
] as const;

export type HiringToolId = (typeof HIRING_TOOL_IDS)[number];

export type HiringTool = {
    id: HiringToolId;
    title: string;
    description: string;
    href: `/${HiringToolId}`;
    cta: string;
};

export const HIRING_TOOLS: Record<HiringToolId, HiringTool> = {
    "pip-calculator": {
        id: "pip-calculator",
        title: "Sales Territory Optimization Calculator",
        description:
            "Measure the true financial cost of an underperforming sales rep on PIP, empty-chair downtime, and ramp. Plan confidential replacements with The Kas Group.",
        href: "/pip-calculator",
        cta: "Open the calculator",
    },
    "bad-hire-calculator": {
        id: "bad-hire-calculator",
        title: "Cost of a Bad Sales Hire Calculator",
        description:
            "Add up the cost of a bad sales hire with your own numbers: ramp time, lost revenue, manager hours and any other costs. Free calculator from The Kas Group.",
        href: "/bad-hire-calculator",
        cta: "Open the calculator",
    },
    "ramp-time-calculator": {
        id: "ramp-time-calculator",
        title: "Sales Ramp Time Calculator",
        description:
            "Estimate weeks to first deal and full productivity for a new sales hire. See the revenue leak during ramp. Free tool from The Kas Group.",
        href: "/ramp-time-calculator",
        cta: "Open the calculator",
    },
    "hiring-scorecard": {
        id: "hiring-scorecard",
        title: "Hiring Scorecard Builder",
        description:
            "Build a free hiring scorecard from a job description: outcomes, competencies rated 1 to 5, interview questions and reference checks. From The Kas Group.",
        href: "/hiring-scorecard",
        cta: "Open the scorecard",
    },
    "gtm-role-mismatch": {
        id: "gtm-role-mismatch",
        title: "GTM Role Mismatch Diagnostic",
        description:
            "Paste a sales job description next to your company text. Twelve separate questions score your GTM stage and the seat. Free diagnostic from The Kas Group.",
        href: "/gtm-role-mismatch",
        cta: "Run the diagnostic",
    },
};

export function isHiringToolId(value: unknown): value is HiringToolId {
    return typeof value === "string" && (HIRING_TOOL_IDS as readonly string[]).includes(value);
}
