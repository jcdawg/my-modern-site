import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Cost of a Bad Sales Hire Calculator",
    description:
        "Add up the cost of a bad sales hire with your own numbers: ramp time, lost revenue, manager hours and any other costs. Free calculator from The Kas Group.",
    path: "/bad-hire-calculator",
});

export default function BadHireCalculatorLayout({ children }: { children: React.ReactNode }) {
    return children;
}
