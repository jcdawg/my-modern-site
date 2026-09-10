import { BadgeCheck, BarChart3, Building2, CheckCircle2, ChevronRight, DollarSign, HelpCircle, Scale, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Fractional Recruiting vs In-House Recruiter: Cost and Decision Guide",
    description:
        "Cost and decision guide for fractional recruiting vs hiring an in-house recruiter. Fully loaded TA salary math vs Kas GTM retainers, plus when each model wins for Seed-B sales hiring.",
    path: "/guides/fractional-recruiting-vs-in-house-recruiter",
});

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
                    text: "Usually yes for Seed-B GTM sprints. Kas Tier 1 is $5,000/mo and Tier 2 is $8,000/mo with zero success fees. A mid fully loaded in-house seat often lands around $100k-$160k per year (~$8k-$13k+/mo). Fractional also pauses. Payroll does not.",
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
                    text: "No. Tier 1 ($5,000/mo, up to 2 Seed/A roles) and Tier 2 ($8,000/mo, up to 5 GTM roles) have zero success fees. Flat success fees (SDR $5k, AE $7.5k, Sr AE/SM $10k) are a separate per-hire option. Director/VP/CRO is quote only.",
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

    const dimensionRows = [
        { dim: "Relationship", fractional: "External partner, embedded bandwidth", inhouse: "Full-time employee" },
        { dim: "How you pay", fractional: "Monthly retainer", inhouse: "Salary + benefits + tools" },
        { dim: "Flex", fractional: "Turn on/off month to month", inhouse: "Headcount (harder to pause)" },
        { dim: "Typical depth", fractional: "Specialist (Kas: sales/GTM)", inhouse: "Generalist unless you hire two" },
        { dim: "Best fit", fractional: "Bursty Seed-B GTM hiring", inhouse: "Sustained, multi-function volume" },
    ];

    const costRows = [
        { line: "Base salary", low: "$85,000", mid: "$110,000", high: "$130,000", bold: false },
        { line: "Benefits / taxes / payroll load (~25-35%)", low: "$21,000", mid: "$33,000", high: "$45,000", bold: false },
        { line: "LinkedIn Recruiter + job boards", low: "$8,000", mid: "$12,000", high: "$15,000", bold: false },
        { line: "ATS / scheduling / misc tools", low: "$2,000", mid: "$4,000", high: "$6,000", bold: false },
        { line: "Fully loaded annual", low: "~$116,000", mid: "~$159,000", high: "~$196,000", bold: true },
        { line: "Approx. monthly", low: "~$9,700", mid: "~$13,250", high: "~$16,300", bold: true },
    ];

    const tierRows = [
        { tier: "Tier 1", fee: "$5,000/mo", capacity: "Up to 2 Seed / Series A roles", success: "Zero" },
        { tier: "Tier 2", fee: "$8,000/mo", capacity: "Up to 5 GTM roles", success: "Zero" },
    ];

    const scenarioARows = [
        { path: "In-house (mid fully loaded)", math: "$13,250 x 12 (you still carry the seat after the pause)", pay: "~$159,000 / year" },
        { path: "Kas Tier 1 x 6 months", math: "$5,000 x 6", pay: "$30,000" },
        { path: "Kas Tier 2 x 6 months", math: "$8,000 x 6", pay: "$48,000" },
    ];

    const scenarioBRows = [
        { path: "In-house (mid)", math: "Fully loaded year", pay: "~$159,000" },
        { path: "Kas Tier 1 x 12", math: "$5,000 x 12 (up to 2 Seed/A roles)", pay: "$60,000" },
        { path: "Kas Tier 2 x 12", math: "$8,000 x 12 (up to 5 GTM roles)", pay: "$96,000" },
    ];

    const checklistRows = [
        { q: "Are we Seed through early Series B with 1-5 GTM seats ahead?", lean: "Fractional" },
        { q: "Is hiring bursty (sprint, then quiet)?", lean: "Fractional" },
        { q: "Do we need a sales-specialist bar more than a generalist TA?", lean: "Fractional" },
        { q: "Can we pause spend when the pod is full?", lean: "Fractional" },
        { q: "Are we at ~10+ hires/quarter across multiple functions?", lean: "In-house" },
        { q: "Do we need full internal ATS / brand / ops ownership?", lean: "In-house" },
        { q: "Is recruiting a permanent department, not a sprint?", lean: "In-house" },
        { q: "Do we want both volume coverage and elite GTM depth?", lean: "Hybrid (in-house + specialist)" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">
                            Home
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">
                            Guides
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Fractional vs In-House</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Recruiting vs In-House Recruiter:{" "}
                        <span className="text-blue-accent">Cost and Decision Guide</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Fully loaded TA salary math versus Kas GTM retainers, plus when each model wins for Seed through Series B sales hiring.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            (TL;DR) Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium relative z-10">
                            An in-house recruiter is a full-time employee on payroll. Fractional recruiting is an embedded external TA partner on a month-to-month retainer. For Seed through Series B GTM hiring, The Kas Group fractional bands are{" "}
                            <strong className="text-white">$5,000/mo</strong> (up to 2 Seed/A roles) or{" "}
                            <strong className="text-white">$8,000/mo</strong> (up to 5 GTM roles) with{" "}
                            <strong className="text-white">zero success fees</strong>. A solid in-house TA seat often runs{" "}
                            <strong className="text-white">$100k-$160k+</strong> fully loaded once you add salary, benefits, LinkedIn Recruiter, and tools. Fractional wins when hiring is bursty and sales-specialist quality matters. In-house wins when you need sustained, cross-function volume (roughly 10+ hires per quarter) and full internal ownership. Many teams run fractional now, then hire in-house later and keep a specialist for GTM.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            What is fractional recruiting vs a full-time in-house TA recruiter?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl border border-grey-200 bg-white">
                                <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                                    <Users className="h-5 w-5 text-blue-accent" />
                                    Fractional recruiting
                                </h3>
                                <p className="text-grey-600 leading-relaxed">
                                    You pay a fixed monthly retainer. A recruiting partner embeds with founders and hiring managers, owns pipeline and close, and pauses when the seats are filled. At Kas, fractional is sales/GTM focused and month-to-month. Full model:{" "}
                                    <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">
                                        fractional recruiting guide
                                    </Link>
                                    . Product page:{" "}
                                    <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">
                                        fractional sales recruiting
                                    </Link>
                                    .
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-grey-200 bg-white">
                                <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                                    <Building2 className="h-5 w-5 text-blue-accent" />
                                    Full-time in-house TA
                                </h3>
                                <p className="text-grey-600 leading-relaxed">
                                    You hire a recruiter onto payroll. They own your ATS, employer brand, and ongoing reqs across functions. You get full internal ownership. You also carry salary, benefits, tools, and under-utilization risk when hiring slows.
                                </p>
                            </div>
                        </div>
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
                                    {dimensionRows.map((row) => (
                                        <tr key={row.dim} className="border-b border-grey-100 last:border-0 hover:bg-grey-50/50">
                                            <td className="py-4 px-6 font-bold text-navy-900 align-top text-sm md:text-base">{row.dim}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.fractional}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.inhouse}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            This page owns the head-to-head cost and decision tree. For fee math against contingency agencies, see{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">
                                fractional sales recruiting vs contingency
                            </Link>{" "}
                            and{" "}
                            <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">
                                retained vs contingency recruiting
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            How much does an in-house recruiter cost vs Kas fractional retainers?
                        </h2>

                        <h3 className="text-xl font-bold text-navy-900">Fully loaded in-house TA cost (worked annual math)</h3>
                        <p className="text-grey-600 leading-relaxed">
                            Use ranges, not a single myth number. A credible first recruiter package for a startup often lands here:
                        </p>
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
                                    {costRows.map((row) => (
                                        <tr key={row.line} className="border-b border-grey-100 last:border-0">
                                            <td className={`py-4 px-6 text-navy-900 ${row.bold ? "font-bold" : "font-semibold"}`}>{row.line}</td>
                                            <td className={`py-4 px-6 text-grey-600 ${row.bold ? "font-bold" : ""}`}>{row.low}</td>
                                            <td className={`py-4 px-6 text-grey-600 ${row.bold ? "font-bold" : ""}`}>{row.mid}</td>
                                            <td className={`py-4 px-6 text-grey-600 ${row.bold ? "font-bold" : ""}`}>{row.high}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            So a mid-range in-house seat is about <strong>$100k-$160k</strong> fully loaded for many Seed-B teams. Add 60-90 days of ramp before the seat is fully productive on your motion.
                        </p>

                        <h3 className="text-xl font-bold text-navy-900">Kas fractional retainers (sales / GTM)</h3>
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
                                    {tierRows.map((row) => (
                                        <tr key={row.tier} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.tier}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.fee}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.capacity}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.success}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Flat success-fee alternative (if you prefer per-hire instead of retainer): SDR $5,000 · AE $7,500 · Senior AE / Sales Manager $10,000. Director / VP / CRO searches are specialist or retained quote only.
                        </p>

                        <h3 className="text-xl font-bold text-navy-900">Side-by-side annual math (worked examples)</h3>
                        <h4 className="text-lg font-bold text-navy-900">Scenario A: 6 months of GTM hiring, then a pause</h4>
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
                                    {scenarioARows.map((row) => (
                                        <tr key={row.path} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.path}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.math}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.pay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Fractional is built for the pause. In-house keeps burning after the pod is full.</p>

                        <h4 className="text-lg font-bold text-navy-900">Scenario B: Steady GTM hiring for 12 months (2-5 seats in flight)</h4>
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
                                    {scenarioBRows.map((row) => (
                                        <tr key={row.path} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.path}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.math}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.pay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Even at full-year Tier 2, Kas fractional is usually well below a mid fully loaded in-house seat. The tradeoff is ownership and cross-function coverage, not just cash.
                        </p>

                        <h4 className="text-lg font-bold text-navy-900">Scenario C: High volume across functions</h4>
                        <p className="text-grey-600 leading-relaxed">
                            If you need <strong>10+ hires per quarter</strong> across eng, GTM, and ops, one fractional GTM retainer will not replace a full TA function. That is when in-house (or in-house plus specialist) wins.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <CheckCircle2 className="h-8 w-8 text-blue-accent" />
                            When does fractional recruiting win?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Fractional wins for sales/GTM when:</p>
                        <ul className="space-y-3 text-grey-600 leading-relaxed list-disc list-inside">
                            <li>
                                You are <strong className="text-navy-900">Seed, Series A, or early Series B</strong> and hiring is real but not a permanent department yet.
                            </li>
                            <li>
                                Hiring is <strong className="text-navy-900">bursty</strong> (raise, then fill a pod, then pause).
                            </li>
                            <li>
                                You need a <strong className="text-navy-900">sales-specialist bar</strong> (quota history, ACV, cycle length, outbound vs inbound), not a generalist who also runs ops and marketing reqs.
                            </li>
                            <li>You want predictable monthly spend you can turn off.</li>
                            <li>Cash matters and you refuse carrying a $100k-$160k seat through a quiet quarter.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            On Kas AE / SDR / Sales Manager searches under fractional, you also get a free market scan in <strong>48-72 hours</strong> and a search target of <strong>3+ qualified candidates in 3 weeks</strong> (or we keep hunting). Those speed claims apply to AE/SDR/SM under fractional, not to Director/VP/CRO leadership searches.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-accent" />
                            When does hiring an in-house recruiter win?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">In-house wins when:</p>
                        <ul className="space-y-3 text-grey-600 leading-relaxed list-disc list-inside">
                            <li>
                                You have <strong className="text-navy-900">sustained high volume</strong> across functions, not just GTM sprints.
                            </li>
                            <li>
                                You are consistently at roughly <strong className="text-navy-900">10+ hires per quarter</strong>.
                            </li>
                            <li>
                                You need full <strong className="text-navy-900">internal ownership</strong> of ATS, employer brand, recruiting ops, and cross-team coordination.
                            </li>
                            <li>Recruiting is a permanent department with a clear manager and roadmap.</li>
                            <li>Under-utilization risk is low because the req list never really empties.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            An in-house generalist is rarely the best solo answer for elite AE or VP Sales calibration. Many teams that hire internal TA still keep a GTM specialist for the seats that move ARR.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            Hybrid path: fractional now, in-house later
                        </h2>
                        <p className="text-grey-600 leading-relaxed">You do not have to pick forever on day one.</p>
                        <ol className="space-y-4 text-grey-600 leading-relaxed list-decimal list-inside">
                            <li>
                                <strong className="text-navy-900">Now (Seed-A / early B):</strong> Run{" "}
                                <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">
                                    fractional sales recruiting
                                </Link>{" "}
                                to fill AE/SDR/SM seats with specialist bandwidth.
                            </li>
                            <li>
                                <strong className="text-navy-900">Later (sustained volume):</strong> Hire your first in-house recruiter when cross-function volume justifies a full seat.
                            </li>
                            <li>
                                <strong className="text-navy-900">Keep the specialist:</strong> Leave hard GTM seats with a partner who already knows your ICP, pitch, and bar.
                            </li>
                        </ol>
                        <p className="text-grey-600 leading-relaxed">
                            Fractional covers the learning curve. In-house takes over always-on ops. Specialist search stays where a wrong hire is a six-figure mistake.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Decision checklist founders can screenshot
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Use this as a yes/no scorecard.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Question</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">If yes, lean</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {checklistRows.map((row) => (
                                        <tr key={row.q} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.q}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.lean}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            <strong>Quick rule:</strong> If recruiting is still a sprint, buy fractional. If recruiting is a department, hire in-house. If GTM quality still matters after you hire internal TA, keep the specialist.
                        </p>
                    </div>

                    <div className="space-y-8 bg-grey-50 p-8 rounded-3xl border border-grey-100">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional recruiting vs in-house recruiter
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Is fractional recruiting cheaper than hiring an in-house recruiter?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Usually yes for Seed-B GTM sprints. Kas Tier 1 is $5,000/mo and Tier 2 is $8,000/mo with zero success fees. A mid fully loaded in-house seat often lands around $100k-$160k per year (~$8k-$13k+/mo). Fractional also pauses. Payroll does not.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">What is the fully loaded cost of an in-house recruiter?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Salary plus benefits load plus LinkedIn Recruiter plus ATS/tools. Many first-recruiter seats land near <strong>$100k-$160k</strong> fully loaded annually.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">When should a startup hire its first in-house recruiter?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    When you have sustained, multi-function volume (roughly 10+ hires per quarter) and need permanent internal ownership. For a GTM hiring wave only, fractional is usually cleaner.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Can I use fractional now and hire in-house later?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Yes. That is the hybrid path. Fractional for the current GTM sprint. In-house when volume becomes permanent. Keep a GTM specialist for AE/SM/leadership seats.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Does Kas fractional include success fees?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    No. Tier 1 ($5,000/mo, up to 2 Seed/A roles) and Tier 2 ($8,000/mo, up to 5 GTM roles) have <strong>zero success fees</strong>. Flat success fees (SDR $5k, AE $7.5k, Sr AE/SM $10k) are a separate per-hire option. Director/VP/CRO is quote only.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">How fast does Kas fractional move on AE and SDR seats?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    For AE / SDR / Sales Manager under fractional: free market scan in 48-72 hours, and a target of 3+ qualified candidates in 3 weeks. Leadership (Director/VP/CRO) is quoted separately.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to pick fractional, in-house, or hybrid?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email chris@thekasgroup.com with stage, open GTM roles, and target packages. You get a clear recommend: Tier 1, Tier 2, flat success fee, or wait-and-hire-in-house.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Email chris@thekasgroup.com
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link href="/guides/fractional-recruiting-guide" className="text-white hover:text-blue-accent transition-colors font-semibold">
                                Read fractional recruiting guide
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
