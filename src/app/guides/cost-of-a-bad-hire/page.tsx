import { AlertTriangle, BarChart3, ChevronRight, DollarSign, HelpCircle, ShieldCheck, TrendingDown, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: 'The True Cost of a Bad Hire in 2026',
    description: 'What a bad hire costs, using sourced figures: a vendor survey puts a bad B2B sales hire at $177,171. Where the damage shows up and how to lower the risk.',
    path: "/guides/cost-of-a-bad-hire",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const SRC = {
    salesfuel: "https://salesfuel.com/177000-new-salesfuel-research-shows-a-bad-sales-hire-costs-sales-managers-more-than-a-luxury-car/",
    radioink: "https://radioink.com/2026/06/04/that-bad-sales-hire-probably-costs-more-than-you-think/",
    bridge: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
};

const FAQS = [
    {
        q: "How much does a bad hire cost a company?",
        a: "For sales roles, SalesFuel, a vendor that sells hiring assessments, puts the average cost of a bad B2B sales hire at $177,171. That figure comes from an opt-in survey of 316 US sales managers, published June 3, 2026. We have not found a current, sourced figure for all roles that we trust, so we do not quote one.",
    },
    {
        q: "How long does it take to recover from a bad sales hire?",
        a: "The same SalesFuel research found it takes about 3 months to hire a sales rep before their first sales call, and about 5.5 more months before they reach full productivity. A bad hire means paying that time twice.",
    },
    {
        q: "How do you prevent a bad hire?",
        a: "Use a structured process: ask every candidate the same job related questions and score the answers the same way. For sales roles, have the candidate walk you through a deal they closed from start to finish, and check what they tell you. Domain knowledge matters for technical roles too, so the people interviewing should know the work.",
    },
    {
        q: "What is the hidden cost of a bad sales hire?",
        a: "Beyond hiring and pay, a bad sales hire can burn qualified leads, weaken customer relationships, throw off the forecast and lower team morale. SalesFuel also found struggling hires sit near 28% of quota before managers act, so the damage builds for months before anyone steps in.",
    },
];

export default function CostOfBadHireGuide() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
    };

    const link = "text-blue-accent hover:underline";

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Header Section */}
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Cost of a Bad Hire</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        The True Cost of a <br className="hidden sm:block" /> <span className="text-blue-accent">Bad Hire</span> in 2026
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        What a failed hire costs, using sourced figures, and how to lower the risk.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">

                    {/* TL;DR */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            (TL;DR) Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            A bad B2B sales hire costs <strong>$177,171</strong> on average, according to SalesFuel, a vendor that sells hiring assessments. The figure comes from an opt-in survey of 316 US sales managers, published June 3, 2026. The same research found about 3 months to hire a rep and about 5.5 more months to full productivity. The best defense is a structured interview process that checks the candidate&apos;s real track record. For the technical side (what a wrong data engineer or AI engineer decision costs in time and revenue) see <Link href="/guides/cost-of-hiring-wrong-data-engineer" className="text-blue-accent hover:underline font-semibold">The Real Cost of a Bad Technical Hire</Link>.
                        </p>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            The Real Numbers
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="p-8 rounded-2xl bg-red-50 border border-red-200 text-center">
                                <p className="text-4xl font-black text-red-600 mb-2">$177,171</p>
                                <p className="text-red-700 font-medium text-sm">Average cost of a bad B2B sales hire</p>
                                <p className="text-red-500 text-xs mt-2">SalesFuel, vendor survey</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-red-50 border border-red-200 text-center">
                                <p className="text-4xl font-black text-red-600 mb-2">3 + 5.5 months</p>
                                <p className="text-red-700 font-medium text-sm">About 3 months to hire, plus about 5.5 to full productivity</p>
                                <p className="text-red-500 text-xs mt-2">SalesFuel, vendor survey</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-navy-900 border border-navy-800 text-center">
                                <p className="text-4xl font-black text-blue-accent mb-2">28%</p>
                                <p className="text-white font-medium text-sm">Of quota, where struggling hires sit before managers act</p>
                                <p className="text-grey-400 text-xs mt-2">SalesFuel, vendor survey</p>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            SalesFuel&apos;s figures come from an opt-in online survey of 316 US sales managers, as <a href={SRC.radioink} className={link}>Radio Ink reported</a>. They cover all sales roles, not only software. SalesFuel sells hiring assessments, so treat these as vendor figures.
                        </p>
                    </div>

                    {/* Why sales hires are hard to judge */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Why Sales Hires Are Hard to Judge Early
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2026 survey</a> of 158 B2B companies found 48% of account executives at quota, and an average ramp of 6.2 months, the longest in the study&apos;s history. A new rep&apos;s early numbers say little on their own. A bad hire can look like a slow ramp for months.
                        </p>
                    </div>

                    {/* Impact Areas */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <TrendingDown className="h-8 w-8 text-red-500" />
                            Where the Damage Happens
                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    title: "Revenue Pipeline",
                                    desc: "A bad sales hire does more than fail to close. They can burn through qualified leads that took months to generate, and those prospects may not come back for a different rep.",
                                    icon: TrendingDown
                                },
                                {
                                    title: "Team Morale and Retention",
                                    desc: "High performers notice underperformers quickly. If leadership does not act, your best people start questioning the company's hiring standards.",
                                    icon: AlertTriangle
                                },
                                {
                                    title: "Management Time",
                                    desc: "Managers spend their time coaching and documenting a struggling hire instead of leading the team. SalesFuel found struggling hires sit near 28% of quota before managers act.",
                                    icon: AlertTriangle
                                },
                                {
                                    title: "Restart Penalty",
                                    desc: "When the hire fails, you go back to the start: another search, then another ramp. SalesFuel puts that at about 3 months to hire and about 5.5 more months to full productivity.",
                                    icon: AlertTriangle
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-grey-100 bg-grey-50/30 hover:shadow-md transition-shadow">
                                    <div className="shrink-0 h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                                        <p className="text-grey-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Prevention */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-blue-accent" />
                            How to Lower the Risk
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Ask every candidate the same job related questions and score the answers the same way. For sales roles, have the candidate walk you through a deal they closed from start to finish, and ask what went wrong along the way. The full question bank is in <Link href="/guides/account-executive-interview-questions" className={link}>Account Executive Interview Questions: How to Spot a Real Closer</Link>.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            The Kas Group works three ways: Kas Seat, Kas Milestone Search and Kas Directed Pursuit. Details are on the <Link href="/programs" className={link}>programs page</Link>. For how search models compare, see <Link href="/guides/retained-vs-contingency-recruiting" className={link}>Retained vs. Contingency</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Bad Hire Prevention FAQ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {FAQS.map((f) => (
                                <div key={f.q} className="space-y-4">
                                    <h3 className="font-bold text-navy-900 text-lg">{f.q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sources */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-grey-600 text-base">
                            <li>New SalesFuel research shows a bad sales hire costs sales managers more than a luxury car, SalesFuel, June 3, 2026. Vendor survey. <a href={SRC.salesfuel} className={link}>{SRC.salesfuel}</a></li>
                            <li>That Bad Sales Hire Probably Costs More Than You Think, Radio Ink, June 4, 2026. Reports the SalesFuel survey method. <a href={SRC.radioink} className={link}>{SRC.radioink}</a></li>
                            <li>AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. <a href={SRC.bridge} className={link}>{SRC.bridge}</a></li>
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Stop Paying for Bad Hires</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email me the role you are hiring for and what went wrong last time. I will tell you what I would check.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <a
                                href="mailto:chris@thekasgroup.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Email chris@thekasgroup.com
                                <ChevronRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
