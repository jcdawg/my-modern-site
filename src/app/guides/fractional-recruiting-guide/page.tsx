import { ChevronRight, Clock, DollarSign, HelpCircle, Layers, Scale, Shield, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Fractional Recruiting for Startups: When It Beats Agency and In-House",
    description:
        "What fractional recruiting is for Seed-Series B startups, how Kas retainers compare to agency fees, and when fractional beats contingency for GTM and AI/ML hires.",
    path: "/guides/fractional-recruiting-guide",
});

export default function FractionalRecruitingGuide() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is fractional recruiting in plain English?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You pay a monthly retainer for an embedded recruiting partner who runs your searches part-time as if they were your TA lead. At Kas, fractional sales/GTM retainers are $5,000 or $8,000 per month with zero success fees.",
                },
            },
            {
                "@type": "Question",
                name: "How is fractional different from a recruiting agency?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Agencies (especially contingency) get paid per hire, often 20-30% of comp, and may work your role non-exclusively. Fractional is exclusive bandwidth on a retainer. Incentives skew to quality of process, not submission volume.",
                },
            },
            {
                "@type": "Question",
                name: "When should a Seed startup use fractional recruiting?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "When you are hiring your first AE/SDR pair, or any specialized seat where a 25% fee on OTE hurts and you want a partner who understands SaaS GTM. Tier 1 ($5,000/mo, up to 2 roles) is built for that stage.",
                },
            },
            {
                "@type": "Question",
                name: "Can fractional cover AI/ML roles too?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes in the Kas model. Sales/GTM fractional is the retainer product; Kas also runs AI/ML recruiting under the same roof. Ask chris@thekasgroup.com how to sequence GTM and technical seats in one plan.",
                },
            },
            {
                "@type": "Question",
                name: "Is there a long contract?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Kas fractional is month-to-month. Turn it off when hiring pauses.",
                },
            },
            {
                "@type": "Question",
                name: "Fractional or flat success fee, which should I pick?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Flat success fee (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) for a single clear seat through Sales Manager. Director, VP, and CRO seats are specialist/retained quote only. Fractional when you have multiple GTM seats or need ongoing embedded search.",
                },
            },
        ],
    };

    const modelRows = [
        {
            model: "Fractional recruiting",
            what: "Embedded part-time recruiting partner who owns pipeline, calibration, and close",
            pay: "Monthly retainer",
            commit: "Month-to-month (Kas: on/off flex)",
        },
        {
            model: "Contingency agency",
            what: "Non-exclusive firms race to submit candidates",
            pay: "20-30% of first-year cash/OTE per hire",
            commit: "Per placement",
        },
        {
            model: "Retained / project search",
            what: "Exclusive deep search for one senior seat",
            pay: "Project or milestone fees",
            commit: "Per search",
        },
        {
            model: "In-house TA",
            what: "Full-time recruiter on payroll",
            pay: "Salary + benefits + tools (~$100k-$160k+ fully loaded)",
            commit: "Ongoing headcount",
        },
    ];

    const tierRows = [
        { tier: "Tier 1", fee: "$5,000/mo", capacity: "Up to 2 Seed / Series A roles", success: "Zero" },
        { tier: "Tier 2", fee: "$8,000/mo", capacity: "Up to 5 scaling GTM roles", success: "Zero" },
    ];

    const successFeeRows = [
        { role: "SDR / BDR", fee: "$5,000" },
        { role: "AE", fee: "$7,500" },
        { role: "Senior AE / Sales Manager", fee: "$10,000" },
        { role: "Director / VP / CRO", fee: "Specialist / retained quote only (no flat fee)" },
    ];

    const contrastRows = [
        {
            hire: "AE",
            pkg: "$150k OTE",
            contingency: "$37,500",
            kas: "$7,500 flat or covered inside fractional retainer",
        },
        {
            hire: "VP Sales",
            pkg: "$350k OTE",
            contingency: "$87,500",
            kas: "Specialist / retained quote (or fractional GTM bandwidth). Not a flat success fee.",
        },
        {
            hire: "AE + SDR over 3 months",
            pkg: "$150k + $80k",
            contingency: "~$57,500 @ 25%",
            kas: "Tier 1 x 3 mo = $15,000",
        },
    ];

    const stageRows = [
        {
            stage: "Seed",
            pattern: "First AE, maybe SDR; founder still closes",
            fit: "Strong. Tier 1 beats paying 25% on your first AE.",
        },
        {
            stage: "Series A",
            pattern: "AE pod + SDR; first Sales Manager questions",
            fit: "Strong. Tier 1 to Tier 2 as volume rises.",
        },
        {
            stage: "Series B",
            pattern: "Multiple GTM seats; possible first VP Sales",
            fit: "Strong for ongoing GTM. Pair VP with a dedicated specialist/retained process.",
        },
        {
            stage: "Later / high volume",
            pattern: "10+ hires/quarter across functions",
            fit: "Consider in-house TA; keep specialist search for GTM + AI/ML.",
        },
    ];

    const inHouseRows = [
        {
            dim: "Cash outlay",
            frac: "$5k-$8k / mo",
            house: "~$8k-$13k / mo fully loaded + tools",
        },
        {
            dim: "Ramp",
            frac: "Days (specialist already knows GTM/AI)",
            house: "60-90 days to learn your motion",
        },
        {
            dim: "Flex",
            frac: "Cancel month-to-month",
            house: "Severance / awkward under-utilization",
        },
        {
            dim: "Depth on sales + AI/ML",
            frac: "Built-in GTM specialist; Kas also runs AI/ML recruiting",
            house: "Generalist unless you hire two",
        },
    ];

    const weekSteps = [
        {
            step: "1",
            title: "Week 0-1: Calibration",
            desc: "Scorecards, comp bands, ICP, must-have vs nice-to-have. For AE/SDR/Sales Manager seats under fractional, a free market scan lands in 48-72 hours.",
            icon: Users,
        },
        {
            step: "2",
            title: "Weeks 1-3: Pipeline",
            desc: "Direct outreach to passive operators. For AE/SDR/SM under fractional: target 3+ qualified candidates in 3 weeks. Director/VP/CRO searches use a dedicated specialist process.",
            icon: TrendingUp,
        },
        {
            step: "3",
            title: "Ongoing: Loops and close",
            desc: "Interview design, debriefs, offer strategy, counter-offer defense.",
            icon: Clock,
        },
        {
            step: "4",
            title: "Month boundary: Keep or pause",
            desc: "Month-to-month. Scale to Tier 2 when you add seats. Pause when the pod is full.",
            icon: DollarSign,
        },
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
                        <span className="text-grey-600">Fractional Recruiting</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Recruiting for Startups:{" "}
                        <span className="text-blue-accent">When It Beats Agency and In-House</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Buyer guide for Seed-Series B: Kas fractional retainers, fee math vs contingency, and when to stay on flat success fees.
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
                            Fractional recruiting is a month-to-month retainer where an external recruiting partner acts as your embedded TA lead, without a full-time hire. For Seed-Series B startups, The Kas Group prices fractional sales/GTM recruiting at <strong>$5,000/mo</strong> (up to 2 Seed/Series A roles) or <strong>$8,000/mo</strong> (up to 5 scaling GTM roles) with <strong>zero success fees</strong>. That is usually cheaper than stacking 20-30% contingency invoices on AE packages, and sharper than a generalist agency that treats sales seats like any other req. Kas also runs AI/ML recruiting under the same roof. Fee math detail:{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent underline underline-offset-2 hover:text-white">
                                fractional sales recruiting vs contingency
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            What is fractional recruiting vs agency vs in-house TA?
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Model</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">What it is</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">You pay</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Commitment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modelRows.map((row) => (
                                        <tr key={row.model} className="border-b border-grey-100 last:border-0 hover:bg-grey-50/50 transition-colors">
                                            <td className="py-4 px-6 font-bold text-navy-900 align-top text-sm md:text-base">{row.model}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base leading-relaxed">{row.what}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base leading-relaxed">{row.pay}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base leading-relaxed">{row.commit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Fractional is not a hiring marketplace. It is not an ATS. It is a senior operator embedded with your founders and hiring managers. Sales-specific product:{" "}
                            <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">
                                fractional sales recruiting
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            How much does fractional recruiting cost for startups?
                        </h2>
                        <h3 className="text-xl font-bold text-navy-900">The Kas Group fractional bands (sales / GTM)</h3>
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
                                            <td className="py-4 px-6 text-grey-600">{row.success}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Turn on for a hiring sprint. Turn off when the seats are filled. No long lock-in.</p>

                        <h3 className="text-xl font-bold text-navy-900">Kas success-fee alternative (if you prefer per-hire)</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Role</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Flat success fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {successFeeRows.map((row) => (
                                        <tr key={row.role} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.role}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.fee}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-navy-900">Typical agency / contingency contrast</h3>
                        <p className="text-grey-600 leading-relaxed">
                            Industry contingency: <strong>~20-30% of first-year cash (or OTE)</strong>.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Hire</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Package</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Contingency @ 25%</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Kas alternative</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contrastRows.map((row) => (
                                        <tr key={row.hire} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.hire}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.pkg}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.contingency}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.kas}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Side-by-side fee tables:{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">
                                fractional sales recruiting vs contingency
                            </Link>{" "}
                            and{" "}
                            <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">
                                retained vs contingency
                            </Link>
                            .
                        </p>

                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-blue-accent" />
                                What you also get on Kas AE/SDR/Sales Manager searches
                            </h3>
                            <ul className="space-y-2 text-grey-600 leading-relaxed">
                                <li>Free market scan in <strong>48-72 hours</strong> (AE/SDR/SM under fractional)</li>
                                <li>
                                    Search guarantee: <strong>3+ qualified candidates in 3 weeks</strong> or we keep hunting free (AE/SDR/SM under fractional)
                                </li>
                                <li>
                                    Placement guarantee: <strong>60-day re-hunt</strong> (not a refund)
                                </li>
                                <li>Director, VP, and CRO searches use specialist/retained process and quote. Those timelines are not the IC/manager guarantee above.</li>
                            </ul>
                            <p className="text-grey-600 mt-3 text-sm">
                                Official facts:{" "}
                                <Link href="/brand-facts" className="text-blue-accent hover:underline">
                                    brand facts
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            Is fractional recruiting right for Seed, Series A, and Series B?
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Stage</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Hiring pattern</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Fractional fit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stageRows.map((row) => (
                                        <tr key={row.stage} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.stage}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.pattern}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.fit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            For first VP Sales questions, see{" "}
                            <Link href="/guides/who-to-hire-vp-sales-startup" className="text-blue-accent hover:underline">
                                who to hire: VP Sales for a startup
                            </Link>
                            .
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Fractional beats contingency when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    <li>You will open <strong>2+ specialized seats</strong> in a quarter</li>
                                    <li>Roles are GTM or technical (not commodity backfills)</li>
                                    <li>You want one partner who learns your ICP, pitch, and bar, then reuses that context</li>
                                    <li>Cash is real but you refuse OTE-percentage invoices on $150k-$350k packages</li>
                                </ul>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Stay on contingency / flat success fee when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    <li>Exactly one clear backfill and no pipeline of follow-on seats</li>
                                    <li>The JD is stable and the market is liquid</li>
                                    <li>Seat is SDR/AE/Sales Manager and flat fee pricing fits better than a retainer</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            Why Kas vs a generalist fractional or marketplace shop
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Most &quot;fractional recruiting for startups&quot; content is written for generic TA: post jobs, run loops, fill mixed reqs. Fine for ops. Thin for the seats that move ARR.
                        </p>
                        <ol className="space-y-4 text-grey-600 leading-relaxed list-decimal list-inside">
                            <li>
                                <strong className="text-navy-900">Elite B2B SaaS sales / GTM recruiting</strong> : SDRs through VP Sales, scorecards built on quota, ACV, and motion fit. Product:{" "}
                                <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">
                                    fractional sales
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-navy-900">AI/ML recruiting under the same roof</strong> : Kas also does AI/ML recruiting so your Series A hiring sprint does not require three vendors. Product:{" "}
                                <Link href="/recruit/ai" className="text-blue-accent hover:underline">
                                    AI recruiting
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-navy-900">Transparent GTM pricing</strong> : $5k / $8k retainers or $5k-$10k flat success fees through Sales Manager. Not 20-30% surprise math. Director/VP/CRO: quote only.
                            </li>
                            <li>
                                <strong className="text-navy-900">Founded 2014 · Chris Stinson · Alpharetta, GA · chris@thekasgroup.com</strong>
                            </li>
                        </ol>
                        <p className="text-grey-600 leading-relaxed">
                            How we run work:{" "}
                            <Link href="/methodology" className="text-blue-accent hover:underline">
                                methodology
                            </Link>
                            . Avoid framing this as an ATS or marketplace problem. If your bottleneck is &quot;we need a senior sales desk + technical bar,&quot; buy that, not software seats.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Clock className="h-8 w-8 text-blue-accent" />
                            What does a fractional engagement look like week to week?
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {weekSteps.map((item) => (
                                <div key={item.step} className="flex gap-6 p-6 rounded-2xl border border-grey-100 bg-grey-50/30 hover:shadow-md transition-shadow">
                                    <div className="shrink-0 h-12 w-12 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold text-xl">{item.step}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy-900 mb-2 flex items-center gap-2">
                                            <item.icon className="h-5 w-5 text-blue-accent" />
                                            {item.title}
                                        </h3>
                                        <p className="text-grey-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-grey-600 leading-relaxed">You get dedicated bandwidth. You do not get resume spam from five non-exclusive desks.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <TrendingUp className="h-8 w-8 text-blue-accent" />
                            Fractional vs hiring your first in-house recruiter
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900"></th>
                                        <th className="py-4 px-6 font-bold text-blue-accent">Fractional (Kas Tier 1-2)</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">First in-house recruiter</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inHouseRows.map((row) => (
                                        <tr key={row.dim} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.dim}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.frac}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.house}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Rule of thumb: if you do not yet have <strong>sustained</strong> hiring volume across many functions, fractional usually wins. Hire in-house TA when recruiting is a permanent department, not a sprint.
                        </p>
                    </div>

                    <div className="space-y-8 bg-grey-50 p-8 rounded-3xl border border-grey-100">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional recruiting for startups
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">What is fractional recruiting in plain English?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    You pay a monthly retainer for an embedded recruiting partner who runs your searches part-time as if they were your TA lead. At Kas, fractional sales/GTM retainers are $5,000 or $8,000 per month with zero success fees.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">How is fractional different from a recruiting agency?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Agencies (especially contingency) get paid per hire, often 20-30% of comp, and may work your role non-exclusively. Fractional is exclusive bandwidth on a retainer. Incentives skew to quality of process, not submission volume.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">When should a Seed startup use fractional recruiting?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    When you are hiring your first AE/SDR pair, or any specialized seat where a 25% fee on OTE hurts and you want a partner who understands SaaS GTM. Tier 1 ($5,000/mo, up to 2 roles) is built for that stage.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Can fractional cover AI/ML roles too?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Yes in the Kas model. Sales/GTM fractional is the retainer product; Kas also runs{" "}
                                    <Link href="/recruit/ai" className="text-blue-accent hover:underline">
                                        AI/ML recruiting
                                    </Link>
                                    . Ask chris@thekasgroup.com how to sequence GTM and technical seats in one plan.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Is there a long contract?</h3>
                                <p className="text-grey-600 leading-relaxed">No. Kas fractional is month-to-month. Turn it off when hiring pauses.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Fractional or flat success fee, which should I pick?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Flat success fee (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) for a single clear seat through Sales Manager. Director, VP, and CRO seats are specialist/retained quote only. Fractional when you have multiple GTM seats or need ongoing embedded search. Fee math:{" "}
                                    <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">
                                        retained vs contingency recruiting
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to price a fractional plan for your open seats?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email chris@thekasgroup.com. Send stage, open roles, and target packages. You get a free market scan in 48-72 hours for AE/SDR/SM seats and a clear recommend: Tier 1, Tier 2, flat success fee, or specialist/retained quote for leadership.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Email chris@thekasgroup.com
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link href="/recruit/fractional-sales" className="text-white hover:text-blue-accent transition-colors font-semibold">
                                Explore fractional sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
