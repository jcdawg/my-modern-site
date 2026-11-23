import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Hiring Tools",
    description: "Free calculators and scorecards for sales hiring",
    path: "/tools",
});

const tools = [
    {
        title: "Sales Territory Optimization Calculator",
        description:
            "Measure the true financial cost of an underperforming sales rep on PIP, empty-chair downtime, and ramp. Plan confidential replacements with The Kas Group.",
        href: "/pip-calculator",
        cta: "Open the calculator",
        image: "/images/tools/territory.jpg",
        imageAlt: "Sales Territory Optimization Calculator. A $100,000 monthly quota at 40% attainment, with $470,000 in total revenue leak: $120,000 during a PIP, $200,000 from an empty chair, and $150,000 during ramp.",
    },
    {
        title: "Cost of a Bad Sales Hire Calculator",
        description:
            "Add up the cost of a bad sales hire with your own numbers: ramp time, lost revenue, manager hours and any other costs. Free calculator from The Kas Group.",
        href: "/bad-hire-calculator",
        cta: "Open the calculator",
        image: "/images/tools/bad-hire.jpg",
        imageAlt: "Cost of a Bad Sales Hire Calculator for an account executive. Seat cost $12,500 a month, six months in the seat, 28% attainment. Total cost of this hire: $176,460.",
    },
    {
        title: "Sales Ramp Time Calculator",
        description:
            "Estimate weeks to first deal and full productivity for a new sales hire. See the revenue leak during ramp. Free tool from The Kas Group.",
        href: "/ramp-time-calculator",
        cta: "Open the calculator",
        image: "/images/tools/ramp.jpg",
        imageAlt: "Sales Ramp Time Calculator for an experienced rep new to the product. $100,000 monthly quota and 3 weeks of onboarding. 13 weeks to first deal, 21 weeks to full productivity, $165,334 of ramp leak.",
    },
    {
        title: "Hiring Scorecard Builder",
        description:
            "Build a free hiring scorecard from a job description: outcomes, competencies rated 1 to 5, interview questions and reference checks. From The Kas Group.",
        href: "/hiring-scorecard",
        cta: "Open the scorecard",
        image: "/images/tools/scorecard.jpg",
        imageAlt: "Example hiring scorecard for a mid-market B2B SaaS account executive, with 90-day outcomes, a hunting competency, what a 5 and a 3 look like, red flags, and interview questions.",
    },
    {
        title: "GTM Role Mismatch Diagnostic",
        description:
            "Paste a sales job description next to your company text. Twelve separate questions score your GTM stage and the seat. Free diagnostic from The Kas Group.",
        href: "/gtm-role-mismatch",
        cta: "Run the diagnostic",
        image: "/images/tools/gtm.jpg",
        imageAlt: "GTM Role Mismatch Diagnostic comparing a VP of Sales job description with a 14-month-old seed company whose founder still closes the deals.",
    },
];

export default function HiringToolsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="bg-navy-950 py-24 px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Hiring <span className="text-blue-accent">Tools</span>
                    </h1>
                    <p className="text-xl text-grey-200 leading-relaxed max-w-2xl mx-auto">
                        Free calculators and scorecards for sales hiring
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {tools.map((tool) => (
                            <div
                                key={tool.href}
                                className="flex flex-col overflow-hidden rounded-2xl border border-grey-100 hover:border-blue-accent/20 hover:bg-grey-50 transition-all shadow-sm"
                            >
                                <img
                                    src={tool.image}
                                    alt={tool.imageAlt}
                                    className="aspect-[16/10] w-full object-cover"
                                />
                                <div className="flex flex-1 flex-col p-8">
                                    <h2 className="text-xl font-bold text-navy-900 mb-3">{tool.title}</h2>
                                    <p className="text-sm text-grey-500 leading-relaxed flex-1 mb-6">{tool.description}</p>
                                    <Link
                                        href={tool.href}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white font-medium rounded-full hover:bg-blue-accent transition-colors self-start"
                                    >
                                        {tool.cta}
                                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-[3rem] bg-navy-900 text-white flex items-center justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-accent/10 rounded-full blur-3xl" />
                        <Link
                            href="/contact#contact-form"
                            className="relative z-10 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                        >
                            Schedule a consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
