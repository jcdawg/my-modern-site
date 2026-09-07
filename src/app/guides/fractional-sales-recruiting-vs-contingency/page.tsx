import { BadgeCheck, BarChart3, ChevronRight, DollarSign, HelpCircle, Scale, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Fractional Sales Recruiting vs Contingency: Fee Math for Founders",
    description:
        "Side-by-side fee math for fractional sales recruiting vs 20-30% contingency. Kas retainers, success fees, and when each model wins for AE and VP hires.",
    path: "/guides/fractional-sales-recruiting-vs-contingency",
});

export default function FractionalSalesRecruitingVsContingency() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Is fractional sales recruiting cheaper than contingency?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Usually yes once you hire more than one GTM seat, or any senior seat with a large OTE. A $150k AE at 25% contingency is $37,500. Kas AE success fee is $7,500. Kas Tier 1 fractional is $5,000/mo for up to 2 Seed/Series A roles with zero success fees.",
                },
            },
            {
                "@type": "Question",
                name: "What is the industry-standard contingency fee for sales roles?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most contingency firms charge about 20-30% of first-year cash (some use OTE). Always confirm whether the base is cash or OTE before you sign. OTE-based fees on AEs and VPs cost more.",
                },
            },
            {
                "@type": "Question",
                name: "Can I pause a fractional sales recruiting retainer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes on The Kas Group model. Fractional is month-to-month. Turn it on for a hiring sprint. Turn it off when the pod is full.",
                },
            },
            {
                "@type": "Question",
                name: "When should I use a flat success fee instead of fractional?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use flat success fees (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) when you have a single clear seat through Sales Manager and do not need ongoing embedded bandwidth. Director, VP, and CRO seats are specialist/retained quote only. Use fractional when you are staffing a motion, not a req.",
                },
            },
            {
                "@type": "Question",
                name: "Does contingency include a guarantee?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Varies by firm. The Kas Group placement guarantee is a 60-day re-hunt, not a refund. For AE/SDR/Sales Manager hiring under fractional: 3+ qualified candidates in 3 weeks or we keep hunting free, plus a free market scan in 48-72 hours. Those IC/manager guarantees are not promised for Director, VP, or CRO searches.",
                },
            },
            {
                "@type": "Question",
                name: "Is fractional the same as retained executive search?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Related but not identical. Retained search is usually a project fee for one senior seat. Fractional is a rolling monthly partnership that can cover multiple GTM roles.",
                },
            },
        ],
    };

    const modelRows = [
        {
            model: "Contingency (industry norm)",
            how: "% of first-year cash or OTE",
            cost: "20-30% per hire",
            success: "Yes (the whole fee)",
            best: "One-off, lower-urgency backfill",
        },
        {
            model: "Kas success-fee search",
            how: "Flat per placement",
            cost: "SDR $5k · AE $7.5k · Sr AE/SM $10k",
            success: "Flat fee only (through Sales Manager)",
            best: "Single GTM IC/manager seat, predictable sticker",
        },
        {
            model: "Kas Fractional Tier 1",
            how: "Month-to-month retainer",
            cost: "$5,000/mo · up to 2 Seed/Series A roles",
            success: "Zero success fees",
            best: "Seed-A, 1-2 GTM seats",
        },
        {
            model: "Kas Fractional Tier 2",
            how: "Month-to-month retainer",
            cost: "$8,000/mo · up to 5 scaling GTM roles",
            success: "Zero success fees",
            best: "Scaling AE/SDR pods",
        },
        {
            model: "Director / VP / CRO search",
            how: "Specialist / retained quote",
            cost: "Project or retainer quote (not flat fee)",
            success: "Quote-based",
            best: "Leadership seats with high cost of mishire",
        },
    ];

    const aeRows = [
        { model: "Contingency @ 20%", math: "0.20 x $150,000", pay: "$30,000" },
        { model: "Contingency @ 25%", math: "0.25 x $150,000", pay: "$37,500" },
        { model: "Contingency @ 30%", math: "0.30 x $150,000", pay: "$45,000" },
        { model: "Kas AE success fee", math: "Flat", pay: "$7,500" },
        { model: "Kas Fractional Tier 1 (2 months to fill)", math: "$5,000 x 2", pay: "$10,000 (covers up to 2 Seed/A roles)" },
        { model: "Kas Fractional Tier 2 (2 months)", math: "$8,000 x 2", pay: "$16,000 (covers up to 5 GTM roles)" },
    ];

    const vpRows = [
        { model: "Contingency @ 20%", math: "0.20 x $350,000", pay: "$70,000" },
        { model: "Contingency @ 25%", math: "0.25 x $350,000", pay: "$87,500" },
        { model: "Contingency @ 30%", math: "0.30 x $350,000", pay: "$105,000" },
        { model: "Kas Fractional Tier 2 (3 months GTM bandwidth)", math: "$8,000 x 3", pay: "$24,000 (bandwidth; leadership still calibrated as specialist work)" },
        { model: "Kas Director/VP/CRO search", math: "Specialist / retained quote", pay: "Quote only (no flat success fee)" },
    ];

    const multiSeedRows = [
        { path: "Contingency @ 25%", math: "AE $150k -> $37,500 + SDR $80k OTE -> $20,000", total: "$57,500" },
        { path: "Kas success fees", math: "AE $7,500 + SDR $5,000", total: "$12,500" },
        { path: "Kas Fractional Tier 1 x 3 months", math: "$5,000 x 3 · up to 2 roles", total: "$15,000" },
    ];

    const multiScaleRows = [
        { path: "Contingency @ 25% on $150k AE x3 + $80k SDR x2", total: "$152,500" },
        { path: "Kas success fees ($7.5k x3 + $5k x2)", total: "$32,500" },
        { path: "Kas Fractional Tier 2 x 4 months ($8k x4, up to 5 roles)", total: "$32,000" },
    ];

    const decisionRows = [
        { signal: "1 seat, low urgency, clear JD", prefer: "Contingency or Kas flat success fee ($5k-$10k through Sales Manager)" },
        { signal: "1 senior IC/manager seat (Sr AE, SM), high urgency", prefer: "Kas fractional or flat success fee" },
        { signal: "2 seats, Seed / Series A", prefer: "Fractional Tier 1 ($5,000/mo)" },
        { signal: "3-5 scaling GTM seats", prefer: "Fractional Tier 2 ($8,000/mo)" },
        { signal: "First VP Sales / sales leader", prefer: "Specialist / retained quote (not commodity contingency, not flat fee)" },
        { signal: "One-off AE backfill only", prefer: "Contingency or Kas AE fee $7,500" },
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
                        <span className="text-grey-600">Fractional vs Contingency</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Sales Recruiting vs Contingency:{" "}
                        <span className="text-blue-accent">Fee Math for Founders</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Side-by-side Kas retainers and flat success fees versus 20-30% contingency on AE and VP packages.
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
                            Contingency sales recruiting usually bills 20-30% of first-year cash (or OTE). On a $150k AE that is $30k-$45k. On a $350k VP Sales that is $70k-$105k.{" "}
                            <Link href="/recruit/fractional-sales" className="text-blue-accent underline underline-offset-2 hover:text-white">
                                Fractional sales recruiting
                            </Link>{" "}
                            at The Kas Group is a month-to-month retainer ($5,000 or $8,000) with zero success fees, or flat success fees of $5,000-$10,000 per seat through Sales Manager if you prefer per-hire pricing. Director, VP, and CRO seats are specialist/retained quote only. Choose contingency for a one-off backfill. Choose fractional when you are filling multiple GTM seats and want dedicated bandwidth without percent-of-OTE sticker shock.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            What is fractional sales recruiting vs contingency recruiting?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl border border-grey-200 bg-white">
                                <h3 className="text-xl font-bold text-navy-900 mb-3">Contingency recruiting</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    You pay only if a hire is made. The fee is typically 20-30% of first-year cash compensation (some firms use OTE). Multiple firms can work the same role. Speed and submission volume often beat depth.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-grey-200 bg-white">
                                <h3 className="text-xl font-bold text-navy-900 mb-3">Fractional sales recruiting</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    You pay a fixed monthly retainer. A sales-specialist recruiter embeds with your GTM team, runs the pipeline, and fills open seats. No percent-of-comp success fee on The Kas Group fractional model. You can turn the engagement on or off month to month. Full model detail:{" "}
                                    <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">
                                        fractional recruiting guide
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            <strong>Kas success-fee alternative (not contingency %):</strong> If you want per-placement pricing without the 20-30% tax, The Kas Group also offers flat success fees: SDR/BDR $5,000 · AE $7,500 · Senior AE / Sales Manager $10,000. Director, VP, and CRO: specialist/retained quote only.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            For the broader retained-vs-contingency frame (non-sales-only), see{" "}
                            <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">
                                retained vs contingency recruiting
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            Fee table: Kas fractional / success fees vs 20-30% contingency
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Model</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">How you pay</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Typical cost</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Success fee?</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Best for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modelRows.map((row) => (
                                        <tr key={row.model} className="border-b border-grey-100 last:border-0 hover:bg-grey-50/50">
                                            <td className="py-4 px-6 font-bold text-navy-900 align-top text-sm md:text-base">{row.model}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.how}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.cost}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.success}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-blue-accent" />
                                Guarantees on Kas AE/SDR/Sales Manager searches
                            </h3>
                            <ul className="space-y-2 text-grey-600 leading-relaxed">
                                <li>Free market scan in 48-72 hours</li>
                                <li>3+ qualified candidates in 3 weeks or we keep hunting free</li>
                                <li>60-day re-hunt on placement (not a refund)</li>
                                <li>These IC/manager guarantees are not promised for Director, VP, or CRO searches.</li>
                            </ul>
                            <p className="text-grey-600 mt-3 text-sm">
                                Facts:{" "}
                                <Link href="/brand-facts" className="text-blue-accent hover:underline">
                                    brand facts
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Worked examples: AE at $150k OTE and VP Sales at $350k OTE
                        </h2>

                        <h3 className="text-xl font-bold text-navy-900">Example A: Account Executive, $150,000 OTE</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Fee model</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Math</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">You pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aeRows.map((row) => (
                                        <tr key={row.model} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.model}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.math}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.pay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            On a single AE, Kas flat success fee is about 5x cheaper than mid-range contingency. Fractional wins harder when that same retainer also fills an SDR and a second AE in the same window.
                        </p>

                        <h3 className="text-xl font-bold text-navy-900">Example B: VP of Sales, $350,000 OTE</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Fee model</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Math</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">You pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vpRows.map((row) => (
                                        <tr key={row.model} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.model}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.math}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.pay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            VP / CRO searches are typically specialist/retained bandwidth, not a commodity contingency race and not a flat success fee. If you are deciding whether you even need a VP yet, read{" "}
                            <Link href="/guides/who-to-hire-vp-sales-startup" className="text-blue-accent hover:underline">
                                who to hire: VP Sales for a startup
                            </Link>
                            .
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            <strong>Takeaway:</strong> Contingency on leadership OTE is where founders get surprised. A $350k VP at 25% is an $87.5k invoice. Three months of Kas Tier 2 fractional is $24k with zero success fee, and that bandwidth can also keep an AE/SDR pipeline warm while leadership search runs on a specialist quote.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            How much does fractional sales recruiting cost vs contingency for multiple hires?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Assume a Seed/Series A plan: 1 AE + 1 SDR over ~3 months.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Path</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Cost math</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {multiSeedRows.map((row) => (
                                        <tr key={row.path} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.path}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.math}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Same seats. Contingency at industry mid-point is roughly <strong>3.5-4.5x</strong> the Kas options. That gap is the whole comparison.
                        </p>
                        <p className="text-grey-600 leading-relaxed">Scaling plan (Series A-B): 3 AEs + 2 SDRs over 4 months.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Path</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Approximate total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {multiScaleRows.map((row) => (
                                        <tr key={row.path} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.path}</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">{row.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">This is where fractional sales recruiting stops being a &quot;nice option&quot; and becomes the default for GTM builders.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            When does fractional sales recruiting win vs contingency?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Fractional wins when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    <li>You are hiring <strong>2+ GTM seats</strong> in a quarter (AE pod, SDR team, first Sales Manager).</li>
                                    <li>Role quality matters more than resume spray (enterprise AE, first VP Sales, founder-led motion rebuild).</li>
                                    <li>You want <strong>predictable monthly spend</strong> and the right to pause after a funding lull.</li>
                                    <li>You need a partner who already knows SaaS sales motions, not a generalist desk bouncing between ops and marketing reqs.</li>
                                    <li>
                                        You also have (or will have) AI/ML seats and want one firm that can run{" "}
                                        <Link href="/recruit/ai" className="text-blue-accent hover:underline">
                                            AI/ML recruiting
                                        </Link>{" "}
                                        alongside GTM.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Contingency still wins when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    <li>One backfill AE and no other GTM hiring for 6+ months.</li>
                                    <li>Role is well-defined, market is liquid, and speed-to-slate is the only KPI.</li>
                                    <li>Budget politics require &quot;$0 until hire,&quot; even if the eventual invoice is larger.</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Sales-specific example: a contingency firm can fill a mid-market AE from LinkedIn volume. They are a weaker fit when you need an AE who has closed your ACV band in your sales cycle length, or a VP who has built a motion from founder-led to manager-led. That search needs embedded calibration (fractional bandwidth for GTM seats, specialist/retained process for VP), not a 25% race.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Decision tree: which fee model by stage, urgency, and seniority
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Signal</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Prefer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {decisionRows.map((row) => (
                                        <tr key={row.signal} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{row.signal}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.prefer}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Methodology:{" "}
                            <Link href="/methodology" className="text-blue-accent hover:underline">
                                thekasgroup.com/methodology
                            </Link>
                            . VP guide:{" "}
                            <Link href="/guides/who-to-hire-vp-sales-startup" className="text-blue-accent hover:underline">
                                who to hire VP Sales
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            How do Kas fees compare to People People Group / Dover / Arena / ISG-style tables?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Generic TA cost tables (People People Group, Dover, Arena, ISG-style comparisons) usually pit marketplace/RPO/contingency against each other for <strong>all roles</strong>. Useful for ops hiring. Incomplete for <strong>sales</strong>.
                        </p>
                        <ol className="space-y-3 text-grey-600 leading-relaxed list-decimal list-inside">
                            <li>
                                <strong className="text-navy-900">OTE-based contingency on AEs and VPs</strong> inflates invoices vs flat GTM fees.
                            </li>
                            <li>
                                <strong className="text-navy-900">Sales scorecards</strong> (quota history, ACV, cycle length, outbound vs inbound) are not interchangeable with software-engineer screens.
                            </li>
                            <li>
                                <strong className="text-navy-900">Fractional sales recruiting</strong> is not the same product as a hiring marketplace or ATS seat.
                            </li>
                            <li>A firm that only does volume contingency will optimize for submit speed, not GTM motion fit.</li>
                        </ol>
                        <p className="text-grey-600 leading-relaxed">
                            The Kas Group frame (founded 2014, Alpharetta GA, Chris Stinson): elite B2B SaaS sales/GTM recruiting plus AI/ML recruiting under one roof. Fractional retainers are sales-focused, month-to-month, zero success fees. Flat success fees stay in the $5k-$10k band through Sales Manager instead of 20-30% of OTE. Leadership seats are quote-based.
                        </p>
                    </div>

                    <div className="space-y-8 bg-grey-50 p-8 rounded-3xl border border-grey-100">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional sales recruiting vs contingency
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Is fractional sales recruiting cheaper than contingency?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Usually yes once you hire more than one GTM seat, or any senior seat with a large OTE. A $150k AE at 25% contingency is $37,500. Kas AE success fee is $7,500. Kas Tier 1 fractional is $5,000/mo for up to 2 Seed/Series A roles with zero success fees.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">What is the industry-standard contingency fee for sales roles?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Most contingency firms charge about <strong>20-30% of first-year cash</strong> (some use OTE). Always confirm whether the base is cash or OTE before you sign. OTE-based fees on AEs and VPs cost more.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Can I pause a fractional sales recruiting retainer?</h3>
                                <p className="text-grey-600 leading-relaxed">Yes on The Kas Group model. Fractional is month-to-month. Turn it on for a hiring sprint. Turn it off when the pod is full.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">When should I use a flat success fee instead of fractional?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Use flat success fees (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) when you have a single clear seat through Sales Manager and do not need ongoing embedded bandwidth. Director, VP, and CRO seats are specialist/retained quote only. Use fractional when you are staffing a motion, not a req.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Does contingency include a guarantee?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Varies by firm. The Kas Group placement guarantee is a <strong>60-day re-hunt</strong>, not a refund. For AE/SDR/Sales Manager hiring under fractional: <strong>3+ qualified candidates in 3 weeks</strong> or we keep hunting free. Free market scan in 48-72 hours. Those IC/manager guarantees are not promised for Director, VP, or CRO searches.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Is fractional the same as retained executive search?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Related but not identical. Retained search is usually a project fee for one senior seat. Fractional is a rolling monthly partnership that can cover multiple GTM roles. Compare models in depth:{" "}
                                    <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">
                                        retained vs contingency
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">
                                        fractional sales recruiting
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Want the fee math on your actual packages?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email chris@thekasgroup.com for a free 48-72 hour market scan on AE/SDR/SM seats. Bring your open AE/SDR/VP seats and target OTEs. We will run the fee math on your package, not a generic table.
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
