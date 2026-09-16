import { ChevronRight, Clock, HelpCircle, Layers, Scale, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Fractional Recruiting for Startups: When It Beats Agency and In-House",
    description: "What fractional recruiting is for Seed-Series B startups, when it fits GTM hiring, and how Kas week-to-week engagements run. Pricing lives on the cost guide.",
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
                    text: "Flat success fee (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) for a single clear seat through Sales Manager. Director, VP, and CRO are specialist/retained quote only. Fractional when you have multiple GTM seats or need ongoing embedded search.",
                },
            },
            {
                "@type": "Question",
                name: "When should I hire in-house instead?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "When recruiting is a permanent department with sustained multi-function volume (roughly 10+ hires per quarter). Until then, fractional usually wins for GTM sprints.",
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
                        <span className="text-grey-600">Fractional Recruiting</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Recruiting for Startups:{" "}
                        <span className="text-blue-accent">When It Beats Agency and In-House</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        What fractional recruiting is for Seed-Series B startups, when it fits GTM hiring, and how a Kas engagement runs week to week. Exact fees live on the cost guide.
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
                            Fractional recruiting is a month-to-month retainer. An external recruiting partner embeds as your TA lead without a full-time hire. For Seed-Series B GTM, Kas prices fractional sales recruiting at <strong>$5,000/mo</strong> (up to 2 Seed/Series A roles) or <strong>$8,000/mo</strong> (up to 5 scaling GTM roles) with <strong>zero success fees</strong>. Use fractional when you have specialized seats ahead and want dedicated bandwidth. Use a flat success fee for one clear SDR/AE/SM seat. Use specialist quote for Director/VP/CRO.
                        </p>
                        <p className="text-grey-300 leading-relaxed mt-4 relative z-10">
                            Full price list: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent underline underline-offset-2 hover:text-white">fractional sales recruiting cost</Link>. Product: <Link href="/recruit/fractional-sales" className="text-blue-accent underline underline-offset-2 hover:text-white">fractional sales</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            What is fractional recruiting?
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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Fractional recruiting</td>
                                            <td className="py-4 px-6 text-grey-600">Embedded part-time recruiting partner who owns pipeline, calibration, and close</td>
                                            <td className="py-4 px-6 text-grey-600">Monthly retainer</td>
                                            <td className="py-4 px-6 text-grey-600">Month-to-month (Kas: on/off flex)</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Contingency agency</td>
                                            <td className="py-4 px-6 text-grey-600">Non-exclusive firms race to submit candidates</td>
                                            <td className="py-4 px-6 text-grey-600">20-30% of first-year cash/OTE per hire</td>
                                            <td className="py-4 px-6 text-grey-600">Per placement</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Retained / project search</td>
                                            <td className="py-4 px-6 text-grey-600">Exclusive deep search for one senior seat</td>
                                            <td className="py-4 px-6 text-grey-600">Project or milestone fees</td>
                                            <td className="py-4 px-6 text-grey-600">Per search</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">In-house TA</td>
                                            <td className="py-4 px-6 text-grey-600">Full-time recruiter on payroll</td>
                                            <td className="py-4 px-6 text-grey-600">Salary + benefits + tools (~$100k-$160k+ fully loaded)</td>
                                            <td className="py-4 px-6 text-grey-600">Ongoing headcount</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Fractional is not a hiring marketplace. It is not an ATS. It is a senior operator embedded with founders and hiring managers.</p>
                        <p className="text-grey-600 leading-relaxed">Fee wars vs agencies: <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">fractional sales recruiting vs contingency</Link>. Headcount vs retainer: <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline">fractional recruiting vs in-house recruiter</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            When fractional fits Seed, Series A, and Series B
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
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Seed</td>
                                            <td className="py-4 px-6 text-grey-600">First AE, maybe SDR; founder still closes</td>
                                            <td className="py-4 px-6 text-grey-600">Strong. Tier 1 beats paying 25% on your first AE.</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Series A</td>
                                            <td className="py-4 px-6 text-grey-600">AE pod + SDR; first Sales Manager questions</td>
                                            <td className="py-4 px-6 text-grey-600">Strong. Tier 1 to Tier 2 as volume rises.</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Series B</td>
                                            <td className="py-4 px-6 text-grey-600">Multiple GTM seats; possible first VP Sales</td>
                                            <td className="py-4 px-6 text-grey-600">Strong for ongoing GTM. Pair VP with specialist/retained process.</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Later / high volume</td>
                                            <td className="py-4 px-6 text-grey-600">10+ hires/quarter across functions</td>
                                            <td className="py-4 px-6 text-grey-600">Consider in-house TA; keep specialist search for hard GTM seats.</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-navy-900">Fractional beats contingency when</h3>
                        <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-6">
                            <li>You will open 2+ specialized seats in a quarter</li>
                            <li>Roles are GTM (not commodity backfills)</li>
                            <li>You want one partner who learns your ICP, pitch, and bar, then reuses that context</li>
                            <li>You refuse OTE-percentage invoices on $150k-$350k packages</li>
                        </ul>

                        <h3 className="text-xl font-bold text-navy-900">Stay on flat success fee (or contingency) when</h3>
                        <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-6">
                            <li>Exactly one clear backfill and no follow-on seats</li>
                            <li>The JD is stable and the market is liquid</li>
                            <li>Seat is SDR/AE/Sales Manager and a flat sticker fits better than a retainer</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">Flat fees at Kas: SDR <strong>$5,000</strong>, AE <strong>$7,500</strong>, Senior AE / Sales Manager <strong>$10,000</strong>. Director / VP / CRO: quote only. Details: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline">cost guide</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Clock className="h-8 w-8 text-blue-accent" />
                            What a Kas fractional engagement looks like week to week
                        </h2>
                        <ol className="space-y-6">
                            <li className="flex gap-4">
                                <span className="shrink-0 h-10 w-10 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">1</span>
                                <div>
                                    <h3 className="text-lg font-bold text-navy-900">Week 0-1: Calibration</h3>
                                    <p className="text-grey-600 leading-relaxed">Scorecards, comp bands, ICP, must-have vs nice-to-have. For AE/SDR/Sales Manager under fractional, a free market scan lands in 48-72 hours.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="shrink-0 h-10 w-10 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">2</span>
                                <div>
                                    <h3 className="text-lg font-bold text-navy-900">Weeks 1-3: Pipeline</h3>
                                    <p className="text-grey-600 leading-relaxed">Direct outreach to passive operators. For AE/SDR/SM under fractional: target 3+ qualified candidates in 3 weeks. Director/VP/CRO uses a dedicated specialist process.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="shrink-0 h-10 w-10 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">3</span>
                                <div>
                                    <h3 className="text-lg font-bold text-navy-900">Ongoing: Loops and close</h3>
                                    <p className="text-grey-600 leading-relaxed">Interview design, debriefs, offer strategy, counter-offer defense.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="shrink-0 h-10 w-10 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">4</span>
                                <div>
                                    <h3 className="text-lg font-bold text-navy-900">Month boundary: Keep or pause</h3>
                                    <p className="text-grey-600 leading-relaxed">Month-to-month. Scale to Tier 2 when you add seats. Pause when the pod is full.</p>
                                </div>
                            </li>
                        </ol>
                        <p className="text-grey-600 leading-relaxed">You get dedicated bandwidth. You do not get resume spam from five non-exclusive desks.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            Why a sales-specialist fractional partner
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Most &quot;fractional recruiting for startups&quot; content is written for generic TA. Fine for ops. Thin for seats that move ARR.</p>
                        <ol className="space-y-4 list-decimal pl-6 text-grey-600 leading-relaxed">
                            <li><strong className="text-navy-900">Elite B2B SaaS sales / GTM recruiting.</strong> SDRs through VP Sales. Scorecards built on quota, ACV, and motion fit. Product: <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">fractional sales</Link>.</li>
                            <li><strong className="text-navy-900">Transparent GTM pricing.</strong> $5k / $8k retainers or $5k-$10k flat success fees through Sales Manager. Not 20-30% surprise math. Director/VP/CRO: quote only. List: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline">cost</Link>.</li>
                            <li><strong className="text-navy-900">Founded 2014.</strong> Chris Stinson. Alpharetta, GA. chris@thekasgroup.com.</li>
                        </ol>
                        <p className="text-grey-600 leading-relaxed">Programs menu: <Link href="/programs" className="text-blue-accent hover:underline">/programs</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional recruiting for startups
                        </h2>
                        <div className="space-y-8">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">What is fractional recruiting in plain English?</h3>
                            <p className="text-grey-600 leading-relaxed">You pay a monthly retainer for an embedded recruiting partner who runs your searches part-time as if they were your TA lead. At Kas, fractional sales/GTM retainers are $5,000 or $8,000 per month with zero success fees.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">How is fractional different from a recruiting agency?</h3>
                            <p className="text-grey-600 leading-relaxed">Agencies (especially contingency) get paid per hire, often 20-30% of comp, and may work your role non-exclusively. Fractional is exclusive bandwidth on a retainer. Incentives skew to quality of process, not submission volume. Fee math: <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">vs contingency</Link>.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">When should a Seed startup use fractional recruiting?</h3>
                            <p className="text-grey-600 leading-relaxed">When you are hiring your first AE/SDR pair, or any specialized seat where a 25% fee on OTE hurts and you want a partner who understands SaaS GTM. Tier 1 ($5,000/mo, up to 2 roles) is built for that stage.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Is there a long contract?</h3>
                            <p className="text-grey-600 leading-relaxed">No. Kas fractional is month-to-month. Turn it off when hiring pauses.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Fractional or flat success fee, which should I pick?</h3>
                            <p className="text-grey-600 leading-relaxed">Flat success fee (SDR $5,000 / AE $7,500 / Senior AE or Sales Manager $10,000) for a single clear seat through Sales Manager. Director, VP, and CRO are specialist/retained quote only. Fractional when you have multiple GTM seats or need ongoing embedded search. Price list: <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline">cost</Link>.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">When should I hire in-house instead?</h3>
                            <p className="text-grey-600 leading-relaxed">When recruiting is a permanent department with sustained multi-function volume (roughly 10+ hires per quarter). Until then, fractional usually wins for GTM sprints. Full comparison: <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline">vs in-house</Link>.</p>
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
                                <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting vs contingency</Link>
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
                        <h2 className="text-3xl font-bold">Ready to map fractional to your open seats?</h2>
                        <p className="text-grey-300 text-lg leading-relaxed max-w-2xl mx-auto">Email chris@thekasgroup.com. Send stage, open roles, and target packages. For AE/SDR/SM under fractional you get a free market scan in 48-72 hours and a clear recommend: Tier 1, Tier 2, flat success fee, or specialist/retained quote for leadership.</p>
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
