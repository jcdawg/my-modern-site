import { Building2, CheckCircle2, ChevronRight, DollarSign, HelpCircle, Layers, Scale, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Fractional Sales Recruiting Cost: Kas Pricing for Startups",
    description: "Kas Seat sales recruiting cost: $5,000–$8,000/mo (up to $10,000/mo for senior AE+ capacity), zero success fees. Milestone Search examples: SDR $5k, AE $7.5k, Sr AE/SM $10k. Compare to contingency and in-house.",
    path: "/guides/fractional-sales-recruiting-cost",
});

export default function FractionalSalesRecruitingCost() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How much does fractional sales recruiting cost at Kas?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kas Seat is normally $5,000/mo (up to 2 Seed/Series A roles) or $8,000/mo (up to 5 scaling GTM roles). When the seat covers senior AE+ capacity, pricing can run up to $5,000–$10,000/mo. Seat has zero success fees. Tech roles are never monthly.",
                },
            },
            {
                "@type": "Question",
                name: "What are Kas Milestone Search example fees?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "SDR/BDR $5,000. AE $7,500. Senior AE / Sales Manager $10,000. Director / VP / CRO: quote only.",
                },
            },
            {
                "@type": "Question",
                name: "Is there a success fee on the fractional retainer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Kas Seat at $5,000/mo and $8,000/mo carry zero success fees.",
                },
            },
            {
                "@type": "Question",
                name: "How does Kas pricing compare to in-house?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A mid fully loaded in-house recruiter often runs about $100k-$160k per year. Kas Seat ($5k–$8k) is $5k/$8k per month and can pause. Full headcount decision guide: vs in-house.",
                },
            },
            {
                "@type": "Question",
                name: "How does Kas pricing compare to contingency?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Contingency is often 20-30% of first-year cash or OTE. A $150k AE at 25% is $37,500. Kas Milestone AE example fee is $7,500. Deep fee math: vs contingency.",
                },
            },
            {
                "@type": "Question",
                name: "Do the 48-72 hour and 3-in-3-weeks guarantees apply to leadership?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Free market scan in 48-72 hours and 3+ qualified candidates in 3 weeks apply to AE / SDR / Sales Manager under fractional. Director / VP / CRO is specialist or retained quote.",
                },
            },
            {
                "@type": "Question",
                name: "Can I pause the retainer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Kas fractional is month-to-month.",
                },
            },
            {
                "@type": "Question",
                name: "Where do I see the full program menu?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "See /programs and fractional sales recruiting.",
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
                        <span className="text-grey-600">Fractional Sales Recruiting Cost</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Sales Recruiting Cost:{" "}
                        <span className="text-blue-accent">What You Pay at Kas</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Exact Kas fractional and Milestone Search example pricing for Seed through Series B GTM hiring. Light contrast to contingency and in-house. Deep model pages live elsewhere.
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
                            Kas Seat (sales fractional only) is normally <strong>$5,000–$8,000/mo</strong>: <strong>$5,000/mo</strong> for up to 2 Seed/Series A roles, or <strong>$8,000/mo</strong> for up to 5 scaling GTM roles. When the seat covers senior AE+ capacity, pricing can run up to <strong>$5,000–$10,000/mo</strong>. Seat carries <strong>zero success fees</strong>. Prefer per-hire? Kas Milestone Search example fees (not % of OTE): SDR/BDR <strong>$5,000</strong>, AE <strong>$7,500</strong>, Senior AE / Sales Manager <strong>$10,000</strong>. Director / VP / CRO is <strong>quote only</strong>. Kas Directed Pursuit is list-driven outbound with no published price. Month-to-month on Seat. Contingency remains an option if you want it, not the default.
                        </p>
                        <p className="text-grey-300 leading-relaxed mt-4 relative z-10">
                            For what fractional is and when it fits, read the <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent underline underline-offset-2 hover:text-white">fractional recruiting guide</Link>. For agency fee wars, see <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent underline underline-offset-2 hover:text-white">vs contingency</Link>. For headcount math, see <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent underline underline-offset-2 hover:text-white">vs in-house</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            Kas list prices (sales / GTM)
                        </h2>
                        <p className="text-grey-600 leading-relaxed">This page owns the price list. Other guides link here instead of restating every band.</p>

                        <h3 className="text-xl font-bold text-navy-900">Fractional retainers</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Seat band</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Monthly fee</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Capacity</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Success fees</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Best for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">$5,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600">Up to 2 Seed / Series A roles</td>
                                            <td className="py-4 px-6 text-grey-600">Zero</td>
                                            <td className="py-4 px-6 text-grey-600">First AE/SDR seats, founder-led motion</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat</td>
                                            <td className="py-4 px-6 text-grey-600 font-semibold">$8,000/mo</td>
                                            <td className="py-4 px-6 text-grey-600">Up to 5 scaling GTM roles</td>
                                            <td className="py-4 px-6 text-grey-600">Zero</td>
                                            <td className="py-4 px-6 text-grey-600">AE pods, SDR team, first Sales Manager seats</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">No long lock-in. Scale Seat capacity from $5k to $8k when seat count rises. Pause when hiring stops.</p>

                        <h3 className="text-xl font-bold text-navy-900">Kas Milestone Search (example fees)</h3>
                        <p className="text-grey-600 leading-relaxed">Use when you have one clear seat through Sales Manager and do not need ongoing embedded bandwidth.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Role</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Milestone Search example fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">SDR / BDR</td>
                                            <td className="py-4 px-6 text-grey-600">$5,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">AE</td>
                                            <td className="py-4 px-6 text-grey-600">$7,500</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Senior AE / Sales Manager</td>
                                            <td className="py-4 px-6 text-grey-600">$10,000</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Director / VP / CRO</td>
                                            <td className="py-4 px-6 text-grey-600">Specialist / retained quote only (no Milestone example fee)</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Milestone example fees are not contingency percentages. You are not paying 20-30% of OTE.</p>

                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-blue-accent" />
                                What AE / SDR / Sales Manager searches include under fractional
                            </h3>
                            <ul className="space-y-2 text-grey-600 leading-relaxed">
                                <li>Free market scan in <strong>48-72 hours</strong></li>
                                <li>Search target: <strong>3+ qualified candidates in 3 weeks</strong>, or we keep hunting free</li>
                                <li>Placement guarantee: <strong>60-day re-hunt</strong> (not a refund)</li>
                            </ul>
                            <p className="text-grey-600 mt-3 leading-relaxed">Those speed claims apply to <strong>AE / SDR / SM under fractional only</strong>. Director, VP, and CRO searches use a specialist or retained process and quote. Leadership timelines are not the IC/manager guarantee above.</p>
                            <p className="text-grey-600 mt-3 text-sm">Product page: <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">fractional sales recruiting</Link>. Full menu: <Link href="/programs" className="text-blue-accent hover:underline">/programs</Link>.</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-accent" />
                            Cost vs in-house recruiter (quick table)
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Fully loaded first-recruiter seats for startups often land around <strong>$100k-$160k</strong> per year once you add salary, benefits load, LinkedIn Recruiter, and tools. That is roughly <strong>$8k-$13k+/mo</strong>, and you keep paying after the pod is full.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Path</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Rough monthly outlay</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Flex</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat</td>
                                            <td className="py-4 px-6 text-grey-600">$5,000</td>
                                            <td className="py-4 px-6 text-grey-600">Pause month-to-month</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Kas Seat</td>
                                            <td className="py-4 px-6 text-grey-600">$8,000</td>
                                            <td className="py-4 px-6 text-grey-600">Pause month-to-month</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Mid in-house TA (fully loaded)</td>
                                            <td className="py-4 px-6 text-grey-600">~$8,000-$13,000+</td>
                                            <td className="py-4 px-6 text-grey-600">Headcount; hard to pause</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Example: six months of Kas Seat at $5,000/mo = <strong>$30,000</strong>. Mid in-house for a full year is often still near <strong>$100k-$160k</strong> even if hiring paused mid-year.</p>
                        <p className="text-grey-600 leading-relaxed">This page stops at the sticker. Decision tree, hybrid path, and full salary build: <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline">fractional recruiting vs in-house recruiter</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Cost vs contingency agency (quick table)
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Industry contingency is usually <strong>20-30%</strong> of first-year cash (or OTE). On GTM packages that math gets loud fast.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Hire</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Package (example)</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Contingency @ 25%</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Kas path</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">AE</td>
                                            <td className="py-4 px-6 text-grey-600">$150k OTE</td>
                                            <td className="py-4 px-6 text-grey-600">$37,500</td>
                                            <td className="py-4 px-6 text-grey-600">$7,500 Milestone example, or covered inside fractional</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">VP Sales</td>
                                            <td className="py-4 px-6 text-grey-600">$350k OTE</td>
                                            <td className="py-4 px-6 text-grey-600">$87,500</td>
                                            <td className="py-4 px-6 text-grey-600">Specialist / retained quote only</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">AE + SDR over ~3 months</td>
                                            <td className="py-4 px-6 text-grey-600">$150k + $80k OTE</td>
                                            <td className="py-4 px-6 text-grey-600">~$57,500</td>
                                            <td className="py-4 px-6 text-grey-600">Kas Seat at $5,000/mo x 3 mo = $15,000</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Worked OTE examples and when contingency still wins: <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">fractional sales recruiting vs contingency</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            How to choose: retainer, Milestone example fee, or quote
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Situation</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Pick</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">1-2 Seed / Series A GTM seats</td>
                                            <td className="py-4 px-6 text-grey-600">Kas Seat at $5,000/mo</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Up to 5 scaling GTM seats</td>
                                            <td className="py-4 px-6 text-grey-600">Kas Seat at $8,000/mo</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">One clear SDR / AE / Sr AE / SM seat</td>
                                            <td className="py-4 px-6 text-grey-600">Milestone Search example ($5k / $7.5k / $10k)</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Director / VP / CRO</td>
                                            <td className="py-4 px-6 text-grey-600">Specialist / retained quote only</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">One backfill, no follow-on GTM plan</td>
                                            <td className="py-4 px-6 text-grey-600">Contingency or Kas Milestone Search (see vs contingency)</td>
                                        </tr>
                                        <tr className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">Sustained 10+ hires/quarter across functions</td>
                                            <td className="py-4 px-6 text-grey-600">In-house TA, keep GTM specialist as needed (see vs in-house)</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Still unsure what fractional <em>is</em>? Start with the <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">fractional recruiting guide</Link>.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <CheckCircle2 className="h-8 w-8 text-blue-accent" />
                            What you are buying (and not buying)
                        </h2>
                        <p className="text-grey-600 leading-relaxed"><strong>Buying:</strong> embedded sales/GTM recruiting bandwidth. Scorecards built on quota, ACV, and motion fit. Pipeline, calibration, interview design, close support. Predictable monthly spend or a Milestone example per-hire fee through Sales Manager.</p>
                        <p className="text-grey-600 leading-relaxed"><strong>Not buying:</strong> a hiring marketplace. An ATS seat. A percent-of-OTE contingency race. A generalist desk bouncing between ops and marketing reqs.</p>
                        <p className="text-grey-600 leading-relaxed">Kas is a sales recruiting firm founded in 2014 (Alpharetta, GA). Contact: <a href="mailto:chris@thekasgroup.com" className="text-blue-accent hover:underline">chris@thekasgroup.com</a>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ
                        </h2>
                        <div className="space-y-8">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">How much does fractional sales recruiting cost at Kas?</h3>
                            <p className="text-grey-600 leading-relaxed">Kas Seat is normally <strong>$5,000/mo</strong> (up to 2 Seed/Series A roles) or <strong>$8,000/mo</strong> (up to 5 scaling GTM roles). When the seat covers senior AE+ capacity, pricing can run up to <strong>$5,000–$10,000/mo</strong>. Seat has <strong>zero success fees</strong>. Tech roles are never monthly.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">What are Kas Milestone Search example fees?</h3>
                            <p className="text-grey-600 leading-relaxed">SDR/BDR <strong>$5,000</strong>. AE <strong>$7,500</strong>. Senior AE / Sales Manager <strong>$10,000</strong>. Director / VP / CRO: quote only.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Is there a success fee on the fractional retainer?</h3>
                            <p className="text-grey-600 leading-relaxed">No. Kas Seat at $5,000/mo and $8,000/mo carry zero success fees.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">How does Kas pricing compare to in-house?</h3>
                            <p className="text-grey-600 leading-relaxed">A mid fully loaded in-house recruiter often runs about <strong>$100k-$160k</strong> per year. Kas Seat is <strong>$5k–$8k</strong> per month (up to $10k for senior AE+ capacity) and can pause. Full headcount decision guide: <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline">vs in-house</Link>.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">How does Kas pricing compare to contingency?</h3>
                            <p className="text-grey-600 leading-relaxed">Contingency is often <strong>20-30%</strong> of first-year cash or OTE. A $150k AE at 25% is <strong>$37,500</strong>. Kas Milestone AE example fee is <strong>$7,500</strong>. Deep fee math: <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">vs contingency</Link>.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Do the 48-72 hour and 3-in-3-weeks guarantees apply to leadership?</h3>
                            <p className="text-grey-600 leading-relaxed">No. Free market scan in 48-72 hours and 3+ qualified candidates in 3 weeks apply to <strong>AE / SDR / Sales Manager under fractional</strong>. Director / VP / CRO is specialist or retained quote.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Can I pause the retainer?</h3>
                            <p className="text-grey-600 leading-relaxed">Yes. Kas fractional is month-to-month.</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-navy-900">Where do I see the full program menu?</h3>
                            <p className="text-grey-600 leading-relaxed"><Link href="/programs" className="text-blue-accent hover:underline">/programs</Link> and <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">fractional sales recruiting</Link>.</p>
                        </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Related guides</h2>
                        <ul className="space-y-2 text-grey-600">
                            <li>
                                <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline font-semibold">Fractional recruiting guide</Link> - what it is and when startups use it
                            </li>
                            <li>
                                <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting vs contingency</Link> - fee model vs agencies
                            </li>
                            <li>
                                <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline font-semibold">Fractional recruiting vs in-house recruiter</Link> - headcount vs retainer
                            </li>
                            <li>
                                <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting</Link> - product page
                            </li>
                            <li>
                                <Link href="/programs" className="text-blue-accent hover:underline font-semibold">Programs</Link> - full menu
                            </li>
                        </ul>
                    </div>

                    <div className="p-10 rounded-[2rem] bg-navy-900 text-white text-center space-y-6 shadow-2xl">
                        <h2 className="text-3xl font-bold">Ready to price your open seats?</h2>
                        <p className="text-grey-300 text-lg leading-relaxed max-w-2xl mx-auto">Email chris@thekasgroup.com with stage, open GTM roles, and target packages. You get a clear recommend: Kas Seat ($5k–$8k/mo, up to $10k for senior AE+), Kas Milestone Search, Kas Directed Pursuit, or quote for leadership. For AE/SDR/SM under fractional, market scan lands in 48-72 hours.</p>
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
