import { BarChart3, Building2, CheckCircle2, ChevronRight, DollarSign, HelpCircle, BadgeCheck, Scale, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Fractional Recruiting vs In-House Recruiter: Cost and Decision Guide",
    description: "Fractional recruiting vs hiring an in-house recruiter. Fully loaded TA salary math vs Kas GTM retainers, plus when each model wins for Seed-B sales hiring.",
    path: "/guides/fractional-recruiting-vs-in-house-recruiter",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

export default function FractionalRecruitingVsInHouseRecruiter() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Is fractional recruiting cheaper than hiring an in-house recruiter?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Usually yes for Seed-B GTM sprints. Kas Seat is $5,000/mo and Kas Seat is $8,000/mo with zero success fees. A mid fully loaded in-house seat often lands around $100k-$160k per year (~$8k-$13k+/mo). Fractional also pauses. Payroll does not.",
                },
            },
            {
                "@type": "Question",
                name: "What is the fully loaded cost of an in-house recruiter?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Salary plus benefits load plus LinkedIn Recruiter plus ATS/tools. Many first-recruiter seats land near $100k-$160k fully loaded annually.",
                },
            },
            {
                "@type": "Question",
                name: "When should a startup hire its first in-house recruiter?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "When you have sustained, multi-function volume (roughly 10+ hires per quarter) and need permanent internal ownership. For a GTM hiring wave only, fractional is usually cleaner.",
                },
            },
            {
                "@type": "Question",
                name: "Can I use fractional now and hire in-house later?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. That is the hybrid path. Fractional for the current GTM sprint. In-house when volume becomes permanent. Keep a GTM specialist for AE/SM/leadership seats.",
                },
            },
            {
                "@type": "Question",
                name: "Does Kas fractional include success fees?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Kas Seat at $5,000/mo ($5,000/mo, up to 2 Seed/A roles) and Kas Seat at $8,000/mo ($8,000/mo, up to 5 GTM roles) have zero success fees. Milestone Search example fees (SDR $5k, AE $7.5k, Sr AE/SM $10k) are a separate per-hire option. Director/VP/CRO is quote only.",
                },
            },
            {
                "@type": "Question",
                name: "How fast does Kas fractional move on AE and SDR seats?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For AE / SDR / Sales Manager under fractional: free market scan in 48-72 hours, and a target of 3+ qualified candidates in 3 weeks. Leadership (Director/VP/CRO) is quoted separately.",
                },
            },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Fractional vs In-House</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Recruiting vs In-House Recruiter:{" "}
                        <span className="text-blue-accent">Cost and Decision Guide</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Fully loaded TA salary math versus Kas GTM retainers. When each model wins for Seed through Series B sales hiring.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            TL;DR
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium relative z-10">
                            An in-house recruiter is a full-time employee on payroll. Fractional recruiting is an embedded external TA partner on a month-to-month retainer. For Seed through Series B GTM hiring, Kas fractional is <strong>$5,000/mo</strong> (up to 2 Seed/A roles) or <strong>$8,000/mo</strong> (up to 5 GTM roles) with <strong>zero success fees</strong>. A solid in-house TA seat often runs <strong>$100k-$160k+</strong> fully loaded once you add salary, benefits, LinkedIn Recruiter, and tools. Fractional wins when hiring is bursty and sales-specialist quality matters. In-house wins when you need sustained, cross-function volume (roughly 10+ hires per quarter) and full internal ownership.
                        </p>
                        <p className="text-grey-300 leading-relaxed mt-4 relative z-10">
                            List prices: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent underline underline-offset-2 hover:text-white">fractional sales recruiting cost</Link>. Product: <Link href="/recruit/fractional-sales" className="text-blue-accent underline underline-offset-2 hover:text-white">fractional sales</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Headcount vs retainer (one table)
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Dimension</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Fractional recruiting</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">In-house TA recruiter</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Relationship</td>
                                            <td className="py-4 px-6 text-grey-600">External partner, embedded bandwidth</td>
                                            <td className="py-4 px-6 text-grey-600">Full-time employee</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">How you pay</td>
                                            <td className="py-4 px-6 text-grey-600">Monthly retainer</td>
                                            <td className="py-4 px-6 text-grey-600">Salary + benefits + tools</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Flex</td>
                                            <td className="py-4 px-6 text-grey-600">Turn on/off month to month</td>
                                            <td className="py-4 px-6 text-grey-600">Headcount (harder to pause)</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Typical depth</td>
                                            <td className="py-4 px-6 text-grey-600">Specialist (Kas: sales/GTM)</td>
                                            <td className="py-4 px-6 text-grey-600">Generalist unless you hire two</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Best fit</td>
                                            <td className="py-4 px-6 text-grey-600">Bursty Seed-B GTM hiring</td>
                                            <td className="py-4 px-6 text-grey-600">Sustained, multi-function volume</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">This page owns the head-to-head. Agency fee math: <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">vs contingency</Link>. What fractional is: <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">guide</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            Fully loaded in-house TA cost
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Use ranges, not a single myth number. A credible first recruiter package for a startup often lands here:</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Cost line</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Low</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Mid</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">High</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Base salary</td>
                                            <td className="py-4 px-6 text-grey-600">$85,000</td>
                                            <td className="py-4 px-6 text-grey-600">$110,000</td>
                                            <td className="py-4 px-6 text-grey-600">$130,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Benefits / taxes / payroll load (~25-35%)</td>
                                            <td className="py-4 px-6 text-grey-600">$21,000</td>
                                            <td className="py-4 px-6 text-grey-600">$33,000</td>
                                            <td className="py-4 px-6 text-grey-600">$45,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">LinkedIn Recruiter + job boards</td>
                                            <td className="py-4 px-6 text-grey-600">$8,000</td>
                                            <td className="py-4 px-6 text-grey-600">$12,000</td>
                                            <td className="py-4 px-6 text-grey-600">$15,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">ATS / scheduling / misc tools</td>
                                            <td className="py-4 px-6 text-grey-600">$2,000</td>
                                            <td className="py-4 px-6 text-grey-600">$4,000</td>
                                            <td className="py-4 px-6 text-grey-600">$6,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Fully loaded annual</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">~$116,000</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">~$159,000</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">~$196,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Approx. monthly</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">~$9,700</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">~$13,250</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">~$16,300</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">So a mid-range in-house seat is about <strong>$100k-$160k</strong> fully loaded for many Seed-B teams. Add 60-90 days of ramp before the seat is fully productive on your motion.</p>

                        <h3 className="text-xl font-bold text-navy-900">Kas fractional retainers (quick reference)</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Tier</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Monthly fee</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Capacity</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Success fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $5,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">$5,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600">Up to 2 Seed / Series A roles</td>
                                            <td className="py-4 px-6 text-grey-600">Zero</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $8,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">$8,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600">Up to 5 GTM roles</td>
                                            <td className="py-4 px-6 text-grey-600">Zero</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Kas Milestone Search (example fees): SDR $5,000 / AE $7,500 / Senior AE / Sales Manager $10,000. Director / VP / CRO: quote only. Full list: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline">cost</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Side-by-side annual math
                        </h2>
                        <h3 className="text-xl font-bold text-navy-900">Scenario A: 6 months of GTM hiring, then a pause</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Path</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Math</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">You pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">In-house (mid fully loaded)</td>
                                            <td className="py-4 px-6 text-grey-600">$13,250 x 12 (you still carry the seat after the pause)</td>
                                            <td className="py-4 px-6 text-grey-600">~$159,000 / year</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $5,000/mo x 6 months</td>
                                            <td className="py-4 px-6 text-grey-600">$5,000 x 6</td>
                                            <td className="py-4 px-6 text-grey-600">$30,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $8,000/mo x 6 months</td>
                                            <td className="py-4 px-6 text-grey-600">$8,000 x 6</td>
                                            <td className="py-4 px-6 text-grey-600">$48,000</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Fractional is built for the pause. In-house keeps burning after the pod is full.</p>

                        <h3 className="text-xl font-bold text-navy-900">Scenario B: Steady GTM hiring for 12 months (2-5 seats in flight)</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Path</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Math</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">You pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">In-house (mid)</td>
                                            <td className="py-4 px-6 text-grey-600">Fully loaded year</td>
                                            <td className="py-4 px-6 text-grey-600">~$159,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $5,000/mo x 12</td>
                                            <td className="py-4 px-6 text-grey-600">$5,000 x 12 (up to 2 Seed/A roles)</td>
                                            <td className="py-4 px-6 text-grey-600">$60,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $8,000/mo x 12</td>
                                            <td className="py-4 px-6 text-grey-600">$8,000 x 12 (up to 5 GTM roles)</td>
                                            <td className="py-4 px-6 text-grey-600">$96,000</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Even at full-year Kas Seat at $8,000/mo, Kas fractional is usually well below a mid fully loaded in-house seat. The tradeoff is ownership and cross-function coverage, not just cash.</p>

                        <h3 className="text-xl font-bold text-navy-900">Scenario C: High volume across functions</h3>
                        <p className="text-grey-600 leading-relaxed">If you need 10+ hires per quarter across eng, GTM, and ops, one fractional GTM retainer will not replace a full TA function. That is when in-house (or in-house plus specialist) wins.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <CheckCircle2 className="h-8 w-8 text-blue-accent" />
                            When fractional wins
                        </h2>
                        <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-6">
                            <li>You are Seed, Series A, or early Series B and hiring is real but not a permanent department yet</li>
                            <li>Hiring is bursty (raise, then fill a pod, then pause)</li>
                            <li>You need a sales-specialist bar (quota history, ACV, cycle length, outbound vs inbound)</li>
                            <li>You want predictable monthly spend you can turn off</li>
                            <li>Cash matters and you refuse carrying a $100k-$160k seat through a quiet quarter</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">On Kas AE / SDR / Sales Manager searches under fractional: free market scan in 48-72 hours and a search target of 3+ qualified candidates in 3 weeks (or we keep hunting). Those speed claims apply to AE/SDR/SM under fractional, <strong>not</strong> to Director/VP/CRO leadership searches.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-accent" />
                            When hiring an in-house recruiter wins
                        </h2>
                        <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-6">
                            <li>You have sustained high volume across functions, not just GTM sprints</li>
                            <li>You are consistently at roughly 10+ hires per quarter</li>
                            <li>You need full internal ownership of ATS, employer brand, recruiting ops, and cross-team coordination</li>
                            <li>Recruiting is a permanent department with a clear manager and roadmap</li>
                            <li>Under-utilization risk is low because the req list never really empties</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">An in-house generalist is rarely the best solo answer for elite AE or VP Sales calibration. Many teams that hire internal TA still keep a GTM specialist for the seats that move ARR.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            Hybrid path: fractional now, in-house later
                        </h2>
                        <p className="text-grey-600 leading-relaxed">You do not have to pick forever on day one.</p>
                        <ol className="space-y-4 list-decimal pl-6 text-grey-600 leading-relaxed">
                            <li><strong className="text-navy-900">Now (Seed-A / early B):</strong> Run <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">fractional sales recruiting</Link> to fill AE/SDR/SM seats with specialist bandwidth.</li>
                            <li><strong className="text-navy-900">Later (sustained volume):</strong> Hire your first in-house recruiter when cross-function volume justifies a full seat.</li>
                            <li><strong className="text-navy-900">Keep the specialist:</strong> Leave hard GTM seats with a partner who already knows your ICP, pitch, and bar.</li>
                        </ol>
                        <p className="text-grey-600 leading-relaxed">Fractional covers the learning curve. In-house takes over always-on ops. Specialist search stays where a wrong hire is a six-figure mistake.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            Decision checklist
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Question</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">If yes, lean</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Are we Seed through early Series B with 1-5 GTM seats ahead?</td>
                                            <td className="py-4 px-6 text-grey-600">Fractional</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Is hiring bursty (sprint, then quiet)?</td>
                                            <td className="py-4 px-6 text-grey-600">Fractional</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Do we need a sales-specialist bar more than a generalist TA?</td>
                                            <td className="py-4 px-6 text-grey-600">Fractional</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Can we pause spend when the pod is full?</td>
                                            <td className="py-4 px-6 text-grey-600">Fractional</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Are we at ~10+ hires/quarter across multiple functions?</td>
                                            <td className="py-4 px-6 text-grey-600">In-house</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Do we need full internal ATS / brand / ops ownership?</td>
                                            <td className="py-4 px-6 text-grey-600">In-house</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Is recruiting a permanent department, not a sprint?</td>
                                            <td className="py-4 px-6 text-grey-600">In-house</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Do we want both volume coverage and elite GTM depth?</td>
                                            <td className="py-4 px-6 text-grey-600">Hybrid (in-house + specialist)</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Quick rule: If recruiting is still a sprint, buy fractional. If recruiting is a department, hire in-house. If GTM quality still matters after you hire internal TA, keep the specialist.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional recruiting vs in-house recruiter
                        </h2>
                        <div className="space-y-8">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Is fractional recruiting cheaper than hiring an in-house recruiter?</h3>
                            <p className="text-grey-600 leading-relaxed">Usually yes for Seed-B GTM sprints. Kas Seat is $5,000/mo and Kas Seat is $8,000/mo with zero success fees. A mid fully loaded in-house seat often lands around $100k-$160k per year (~$8k-$13k+/mo). Fractional also pauses. Payroll does not.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">What is the fully loaded cost of an in-house recruiter?</h3>
                            <p className="text-grey-600 leading-relaxed">Salary plus benefits load plus LinkedIn Recruiter plus ATS/tools. Many first-recruiter seats land near $100k-$160k fully loaded annually.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">When should a startup hire its first in-house recruiter?</h3>
                            <p className="text-grey-600 leading-relaxed">When you have sustained, multi-function volume (roughly 10+ hires per quarter) and need permanent internal ownership. For a GTM hiring wave only, fractional is usually cleaner.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Can I use fractional now and hire in-house later?</h3>
                            <p className="text-grey-600 leading-relaxed">Yes. That is the hybrid path. Fractional for the current GTM sprint. In-house when volume becomes permanent. Keep a GTM specialist for AE/SM/leadership seats.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Does Kas fractional include success fees?</h3>
                            <p className="text-grey-600 leading-relaxed">No. Kas Seat at $5,000/mo ($5,000/mo, up to 2 Seed/A roles) and Kas Seat at $8,000/mo ($8,000/mo, up to 5 GTM roles) have zero success fees. Milestone Search example fees (SDR $5k, AE $7.5k, Sr AE/SM $10k) are a separate per-hire option. Director/VP/CRO is quote only.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">How fast does Kas fractional move on AE and SDR seats?</h3>
                            <p className="text-grey-600 leading-relaxed">For AE / SDR / Sales Manager under fractional: free market scan in 48-72 hours, and a target of 3+ qualified candidates in 3 weeks. Leadership (Director/VP/CRO) is quoted separately.</p>
                        </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Related guides</h2>
                        <ul className="space-y-2 text-grey-600">
                            <li>
                                <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting cost</Link>
                            </li>
                            <li>
                                <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline font-semibold">Fractional recruiting guide</Link>
                            </li>
                            <li>
                                <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting vs contingency</Link>
                            </li>
                            <li>
                                <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting</Link>
                            </li>
                            <li>
                                <Link href="/programs" className="text-blue-accent hover:underline font-semibold">Programs</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="p-10 rounded-[2rem] bg-navy-900 text-white text-center space-y-6 shadow-2xl">
                        <h2 className="text-3xl font-bold">Ready to pick fractional, in-house, or hybrid?</h2>
                        <p className="text-grey-300 text-lg leading-relaxed max-w-2xl mx-auto">Email chris@thekasgroup.com with stage, open GTM roles, and target packages. You get a clear recommend: Kas Seat at $5,000/mo, Kas Seat at $8,000/mo, Milestone Search example fee, or wait-and-hire-in-house.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-accent px-8 py-4 font-bold text-white hover:bg-blue-hover transition-all">
                                Email chris@thekasgroup.com
                            </Link>
                            <Link href="/recruit/fractional-sales" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all">
                                Explore fractional sales
                            </Link>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-grey-200 space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">About The Kas Group</h2>
                        <p className="text-grey-600 leading-relaxed">The Kas Group (TKS) is an elite B2B SaaS sales recruiting firm founded in 2014. We place sales talent from SDR through VP Sales and CRO for high-growth technology companies.</p>
                        <ul className="text-grey-600 space-y-1 text-sm">
                            <li>Website: <Link href="/" className="text-blue-accent hover:underline">https://www.thekasgroup.com</Link></li>
                            <li>Email: <a href="mailto:chris@thekasgroup.com" className="text-blue-accent hover:underline">chris@thekasgroup.com</a></li>
                            <li>All Guides: <Link href="/guides" className="text-blue-accent hover:underline">/guides</Link></li>
                            <li>Brand Facts: <Link href="/brand-facts" className="text-blue-accent hover:underline">/brand-facts</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
