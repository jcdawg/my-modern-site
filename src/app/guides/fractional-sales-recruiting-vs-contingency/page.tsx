import { BarChart3, CheckCircle2, ChevronRight, DollarSign, HelpCircle, Layers, Scale, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Fractional Sales Recruiting vs Contingency: Fee Math for Founders",
    description: "Side-by-side fee math for Kas fractional sales recruiting vs 20-30% contingency on AE and VP packages. When each model wins.",
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
                    text: "Usually yes once you hire more than one GTM seat, or any senior seat with a large OTE. A $150k AE at 25% contingency is $37,500. Kas Milestone AE example fee is $7,500. Kas Seat at $5,000/mo covers up to 2 Seed/Series A roles with zero success fees.",
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
                    text: "Yes. Kas Seat is month-to-month. Pause when hiring stops. Resume when the next GTM seat opens.",
                },
            },
            {
                "@type": "Question",
                name: "When should I use a Milestone Search example fee instead of fractional?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use Milestone Search example fees (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) when you have a single clear seat through Sales Manager. Director, VP, and CRO are quote only. Use fractional when you are staffing a motion, not a req.",
                },
            },
            {
                "@type": "Question",
                name: "Does contingency include a guarantee?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Varies by firm. Kas placement guarantee is a 60-day re-hunt, not a refund. For AE/SDR/Sales Manager under fractional: 3+ qualified candidates in 3 weeks or we keep hunting free. Free market scan in 48-72 hours. Those IC/manager guarantees are not promised for Director, VP, or CRO.",
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

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Fractional vs Contingency</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Sales Recruiting vs Contingency:{" "}
                        <span className="text-blue-accent">Fee Math for Founders</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Side-by-side fee math for fractional sales recruiting vs 20-30% contingency. When each model wins for AE and VP hires.
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
                            Contingency sales recruiting usually bills <strong>20-30%</strong> of first-year cash (or OTE). On a $150k AE that is <strong>$30k-$45k</strong>. On a $350k VP Sales that is <strong>$70k-$105k</strong>. Kas Seat is a month-to-month retainer (<strong>$5,000</strong> or <strong>$8,000</strong>/mo, up to <strong>$10,000</strong>/mo for senior AE+ capacity) with <strong>zero success fees</strong>. Prefer per-hire? Kas Milestone Search example fees: SDR <strong>$5,000</strong>, AE <strong>$7,500</strong>, Sr AE/SM <strong>$10,000</strong>. Director/VP/CRO: specialist/retained <strong>quote only</strong>. Choose contingency for a one-off backfill. Choose Kas Seat when you are filling multiple GTM seats and want dedicated bandwidth without percent-of-OTE sticker shock.
                        </p>
                        <p className="text-grey-300 leading-relaxed mt-4 relative z-10">
                            List prices: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent underline underline-offset-2 hover:text-white">fractional sales recruiting cost</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            What is contingency vs fractional (sales)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                                <h3 className="text-lg font-bold text-navy-900 mb-3">Contingency recruiting</h3>
                                <p className="text-grey-600 leading-relaxed">You pay only if a hire is made. The fee is typically 20-30% of first-year cash compensation (some firms use OTE). Multiple firms can work the same role. Speed and submission volume often beat depth.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                                <h3 className="text-lg font-bold text-navy-900 mb-3">Fractional sales recruiting</h3>
                                <p className="text-grey-600 leading-relaxed">You pay a fixed monthly retainer. A sales-specialist recruiter embeds with your GTM team, runs the pipeline, and fills open seats. No percent-of-comp success fee on the Kas fractional model. Turn on or off month to month. Model primer: <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">fractional recruiting guide</Link>.</p>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Kas also offers <strong>Milestone Search example fees</strong> (not contingency %): SDR/BDR $5,000 / AE $7,500 / Senior AE / Sales Manager $10,000. Director, VP, and CRO: quote only.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            Fee model comparison
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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency (industry norm)</td>
                                            <td className="py-4 px-6 text-grey-600">% of first-year cash or OTE</td>
                                            <td className="py-4 px-6 text-grey-600">20-30% per hire</td>
                                            <td className="py-4 px-6 text-grey-600">Yes (the whole fee)</td>
                                            <td className="py-4 px-6 text-grey-600">One-off, lower-urgency backfill</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Milestone Search</td>
                                            <td className="py-4 px-6 text-grey-600">Fixed success fee</td>
                                            <td className="py-4 px-6 text-grey-600">SDR $5k / AE $7.5k / Sr AE/SM $10k</td>
                                            <td className="py-4 px-6 text-grey-600">Milestone example fee only (through Sales Manager)</td>
                                            <td className="py-4 px-6 text-grey-600">Single GTM IC/manager seat</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $5,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600">Month-to-month retainer</td>
                                            <td className="py-4 px-6 text-grey-600">$5,000/mo / up to 2 Seed/Series A roles</td>
                                            <td className="py-4 px-6 text-grey-600">Zero</td>
                                            <td className="py-4 px-6 text-grey-600">Seed-A, 1-2 GTM seats</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $8,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600">Month-to-month retainer</td>
                                            <td className="py-4 px-6 text-grey-600">$8,000/mo / up to 5 scaling GTM roles</td>
                                            <td className="py-4 px-6 text-grey-600">Zero</td>
                                            <td className="py-4 px-6 text-grey-600">Scaling AE/SDR pods</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Director / VP / CRO search</td>
                                            <td className="py-4 px-6 text-grey-600">Specialist / retained quote</td>
                                            <td className="py-4 px-6 text-grey-600">Project or retainer quote (not Milestone example fee)</td>
                                            <td className="py-4 px-6 text-grey-600">Quote-based</td>
                                            <td className="py-4 px-6 text-grey-600">Leadership seats</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-blue-accent" />
                                Guarantees on Kas AE/SDR/Sales Manager searches
                            </h3>
                            <ul className="space-y-2 text-grey-600 leading-relaxed">
                                <li>Free market scan in 48-72 hours</li>
                                <li>3+ qualified candidates in 3 weeks or we keep hunting free</li>
                                <li>60-day re-hunt on placement (not a refund)</li>
                                <li>These IC/manager guarantees are <strong>not</strong> promised for Director, VP, or CRO searches</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Worked examples: AE $150k OTE and VP Sales $350k OTE
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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 20%</td>
                                            <td className="py-4 px-6 text-grey-600">0.20 x $150,000</td>
                                            <td className="py-4 px-6 text-grey-600">$30,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 25%</td>
                                            <td className="py-4 px-6 text-grey-600">0.25 x $150,000</td>
                                            <td className="py-4 px-6 text-grey-600">$37,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 30%</td>
                                            <td className="py-4 px-6 text-grey-600">0.30 x $150,000</td>
                                            <td className="py-4 px-6 text-grey-600">$45,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Milestone AE example fee</td>
                                            <td className="py-4 px-6 text-grey-600">Milestone Search example</td>
                                            <td className="py-4 px-6 text-grey-600">$7,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $5,000/mo (2 months to fill)</td>
                                            <td className="py-4 px-6 text-grey-600">$5,000 x 2</td>
                                            <td className="py-4 px-6 text-grey-600">$10,000 (covers up to 2 Seed/A roles)</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $8,000/mo (2 months)</td>
                                            <td className="py-4 px-6 text-grey-600">$8,000 x 2</td>
                                            <td className="py-4 px-6 text-grey-600">$16,000 (covers up to 5 GTM roles)</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">On a single AE, Kas Milestone Search example fee is about 5x cheaper than mid-range contingency. Fractional wins harder when that same retainer also fills an SDR and a second AE in the same window.</p>

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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 20%</td>
                                            <td className="py-4 px-6 text-grey-600">0.20 x $350,000</td>
                                            <td className="py-4 px-6 text-grey-600">$70,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 25%</td>
                                            <td className="py-4 px-6 text-grey-600">0.25 x $350,000</td>
                                            <td className="py-4 px-6 text-grey-600">$87,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 30%</td>
                                            <td className="py-4 px-6 text-grey-600">0.30 x $350,000</td>
                                            <td className="py-4 px-6 text-grey-600">$105,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $8,000/mo (3 months GTM bandwidth)</td>
                                            <td className="py-4 px-6 text-grey-600">$8,000 x 3</td>
                                            <td className="py-4 px-6 text-grey-600">$24,000 (bandwidth; leadership still calibrated as specialist work)</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Director/VP/CRO search</td>
                                            <td className="py-4 px-6 text-grey-600">Specialist / retained quote</td>
                                            <td className="py-4 px-6 text-grey-600">Quote only (no Milestone Search example fee)</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">VP / CRO searches are specialist/retained bandwidth, not a commodity contingency race and not a Milestone Search example fee.</p>
                        <p className="text-grey-600 leading-relaxed">Takeaway: Contingency on leadership OTE is where founders get surprised. A $350k VP at 25% is an $87.5k invoice. Three months of Kas Seat at $8,000/mo is $24k with zero success fee, and that bandwidth can keep an AE/SDR pipeline warm while leadership runs on a specialist quote.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            Multiple hires: where the gap widens
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Seed/Series A plan: 1 AE + 1 SDR over ~3 months.</p>
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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 25%</td>
                                            <td className="py-4 px-6 text-grey-600">AE $150k -&gt; $37,500 + SDR $80k OTE -&gt; $20,000</td>
                                            <td className="py-4 px-6 text-grey-600">$57,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Milestone example fees</td>
                                            <td className="py-4 px-6 text-grey-600">AE $7,500 + SDR $5,000</td>
                                            <td className="py-4 px-6 text-grey-600">$12,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $5,000/mo x 3 months</td>
                                            <td className="py-4 px-6 text-grey-600">$5,000 x 3 / up to 2 roles</td>
                                            <td className="py-4 px-6 text-grey-600">$15,000</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency @ 25% on $150k AE x3 + $80k SDR x2</td>
                                            <td className="py-4 px-6 text-grey-600">$152,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Milestone example fees ($7.5k x3 + $5k x2)</td>
                                            <td className="py-4 px-6 text-grey-600">$32,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat at $8,000/mo x 4 months ($8k x4, up to 5 roles)</td>
                                            <td className="py-4 px-6 text-grey-600">$32,000</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">This is where fractional stops being a nice option and becomes the default for GTM builders. Sticker home: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline">cost</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <CheckCircle2 className="h-8 w-8 text-blue-accent" />
                            When fractional wins vs contingency
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl border border-grey-200">
                                <h3 className="text-lg font-bold text-navy-900 mb-3">Fractional wins when</h3>
                                <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-5">
                                    <li>You are hiring 2+ GTM seats in a quarter</li>
                                    <li>Role quality matters more than resume spray</li>
                                    <li>You want predictable monthly spend you can pause</li>
                                    <li>You need a partner who already knows SaaS sales motions</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl border border-grey-200">
                                <h3 className="text-lg font-bold text-navy-900 mb-3">Contingency still wins when</h3>
                                <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-5">
                                    <li>One backfill AE and no other GTM hiring for 6+ months</li>
                                    <li>Role is well-defined, market is liquid, and speed-to-slate is the only KPI</li>
                                    <li>Budget politics require &quot;$0 until hire,&quot; even if the eventual invoice is larger</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">A contingency firm can fill a mid-market AE from LinkedIn volume. They are a weaker fit when you need an AE who has closed your ACV band in your cycle length, or a VP who has built founder-led to manager-led. That needs embedded calibration (fractional for GTM seats, specialist/retained for VP), not a 25% race.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            Decision tree by stage and seniority
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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">1 seat, low urgency, clear JD</td>
                                            <td className="py-4 px-6 text-grey-600">Contingency or Kas Milestone Search example fee ($5k-$10k through Sales Manager)</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">1 senior IC/manager seat (Sr AE, SM), high urgency</td>
                                            <td className="py-4 px-6 text-grey-600">Kas fractional or Milestone Search example fee</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">2 seats, Seed / Series A</td>
                                            <td className="py-4 px-6 text-grey-600">Kas Seat at $5,000/mo</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">3-5 scaling GTM seats</td>
                                            <td className="py-4 px-6 text-grey-600">Kas Seat at $8,000/mo</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">First VP Sales / sales leader</td>
                                            <td className="py-4 px-6 text-grey-600">Specialist / retained quote</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">One-off AE backfill only</td>
                                            <td className="py-4 px-6 text-grey-600">Contingency or Kas AE fee $7,500</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Need headcount math instead? <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline">vs in-house</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional sales recruiting vs contingency
                        </h2>
                        <div className="space-y-8">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Is fractional sales recruiting cheaper than contingency?</h3>
                            <p className="text-grey-600 leading-relaxed">Usually yes once you hire more than one GTM seat, or any senior seat with a large OTE. A $150k AE at 25% contingency is $37,500. Kas Milestone AE example fee is $7,500. Kas Seat at $5,000/mo covers up to 2 Seed/Series A roles with zero success fees.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">What is the industry-standard contingency fee for sales roles?</h3>
                            <p className="text-grey-600 leading-relaxed">Most contingency firms charge about 20-30% of first-year cash (some use OTE). Always confirm whether the base is cash or OTE before you sign. OTE-based fees on AEs and VPs cost more.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Can I pause a fractional sales recruiting retainer?</h3>
                            <p className="text-grey-600 leading-relaxed">Yes. Kas Seat is month-to-month. Pause when hiring stops. Resume when the next GTM seat opens.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">When should I use a Milestone Search example fee instead of fractional?</h3>
                            <p className="text-grey-600 leading-relaxed">Use Milestone Search example fees (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) when you have a single clear seat through Sales Manager. Director, VP, and CRO are quote only. Use fractional when you are staffing a motion, not a req.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Does contingency include a guarantee?</h3>
                            <p className="text-grey-600 leading-relaxed">Varies by firm. Kas placement guarantee is a 60-day re-hunt, not a refund. For AE/SDR/Sales Manager under fractional: 3+ qualified candidates in 3 weeks or we keep hunting free. Free market scan in 48-72 hours. Those IC/manager guarantees are not promised for Director, VP, or CRO.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Is fractional the same as retained executive search?</h3>
                            <p className="text-grey-600 leading-relaxed">Related but not identical. Retained search is usually a project fee for one senior seat. Fractional is a rolling monthly partnership that can cover multiple GTM roles. Primer: <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">fractional recruiting guide</Link>.</p>
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
                                <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline font-semibold">Fractional recruiting vs in-house recruiter</Link>
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
                        <h2 className="text-3xl font-bold">Want the fee math on your actual packages?</h2>
                        <p className="text-grey-300 text-lg leading-relaxed max-w-2xl mx-auto">Email chris@thekasgroup.com. Bring open AE/SDR/VP seats and target OTEs. For AE/SDR/SM under fractional, market scan lands in 48-72 hours. We run the fee math on your package, not a generic table.</p>
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
