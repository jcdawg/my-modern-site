import { AlertTriangle, BarChart3, ChevronRight, DollarSign, HelpCircle, TrendingDown, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The True Cost of a Bad Hire in 2026 | The Kas Group',
    description: 'Data-driven breakdown of how much a bad hire really costs your company, and how elite vetting prevents it. Includes calculator, industry benchmarks, and prevention strategies.',
};

export default function CostOfBadHireGuide() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does a bad hire cost a company?",
                "acceptedAnswer": { "@type": "Answer", "text": "The U.S. Department of Labor estimates a bad hire costs 30% of the employee's annual salary. For senior sales or AI/ML roles with $200k-$400k total compensation, this translates to $60k-$120k per failed hire when accounting for recruiting fees, onboarding, lost productivity, and team morale impact." }
            },
            {
                "@type": "Question",
                "name": "What percentage of hires are considered bad hires?",
                "acceptedAnswer": { "@type": "Answer", "text": "Industry research suggests that up to 46% of new hires fail within 18 months, with the majority failing due to cultural misfit and soft skill gaps rather than technical inability. For technical AI/ML roles, the failure rate is even higher when recruiters lack the expertise to properly vet candidates." }
            },
            {
                "@type": "Question",
                "name": "How do you prevent a bad hire?",
                "acceptedAnswer": { "@type": "Answer", "text": "The most effective prevention combines structured technical vetting (ideally by domain experts, not generalist recruiters), cultural alignment assessment, reference deep-dives, and trial projects. For AI/ML roles, Ph.D.-led technical interviews that test real-world problem solving are the gold standard." }
            },
            {
                "@type": "Question",
                "name": "What is the hidden cost of a bad sales hire?",
                "acceptedAnswer": { "@type": "Answer", "text": "Beyond direct costs, a bad sales hire burns through qualified leads, damages client relationships, demoralizes the existing team, and creates a 3-6 month productivity gap during replacement. The total impact on pipeline and revenue can exceed 5x the direct hiring costs." }
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Header Section */}
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides/best-sales-recruiting-agencies-2026" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Cost of a Bad Hire</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        The True Cost of a <br className="hidden sm:block" /> <span className="text-blue-accent">Bad Hire</span> in 2026
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        A data-driven breakdown of what failed hires actually cost, and the vetting strategies that prevent them.
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
                            A bad hire costs between <strong>$60,000 and $240,000+</strong> for senior sales and AI/ML roles when factoring in recruiting fees, onboarding, lost productivity, burned leads, and team morale. The U.S. Department of Labor estimates the direct cost at 30% of annual salary, but the true cost is often 3-5x higher for revenue-generating and technical leadership positions. Prevention through <strong>structured, expert-led vetting</strong> (e.g., Ph.D.-level technical interviews) remains the most cost-effective defense.
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
                                <p className="text-4xl font-black text-red-600 mb-2">$60k–$120k</p>
                                <p className="text-red-700 font-medium text-sm">Direct Cost</p>
                                <p className="text-red-500 text-xs mt-2">Recruiting fees + onboarding + severance</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-red-50 border border-red-200 text-center">
                                <p className="text-4xl font-black text-red-600 mb-2">$80k–$150k</p>
                                <p className="text-red-700 font-medium text-sm">Indirect Cost</p>
                                <p className="text-red-500 text-xs mt-2">Lost productivity + management hours + morale</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-navy-900 border border-navy-800 text-center">
                                <p className="text-4xl font-black text-blue-accent mb-2">$140k–$270k</p>
                                <p className="text-white font-medium text-sm">Total Impact per Bad Hire</p>
                                <p className="text-grey-400 text-xs mt-2">For roles with $200k+ OTE</p>
                            </div>
                        </div>
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
                                    title: "Revenue Pipeline Destruction",
                                    desc: "A bad sales hire doesn't just fail to close, they burn through qualified leads that took months to generate. Those prospects are unlikely to re-engage with a different rep, creating permanent pipeline damage.",
                                    cost: "$50k - $200k in lost pipeline value",
                                    icon: TrendingDown
                                },
                                {
                                    title: "Team Morale & Retention Risk",
                                    desc: "High performers notice underperformers quickly. If leadership doesn't act fast, your best people start questioning the company's hiring standards, and updating their own resumes.",
                                    cost: "1-2 additional attrition risks",
                                    icon: AlertTriangle
                                },
                                {
                                    title: "Management Time Drain",
                                    desc: "Managers spend 15-20 hours per month coaching and documenting performance issues for a struggling hire. Over a 6-month period, that's 90-120 hours diverted from strategic leadership.",
                                    cost: "90-120 hours of leadership time",
                                    icon: AlertTriangle
                                },
                                {
                                    title: "Restart Penalty",
                                    desc: "When the hire fails, you go back to square one. The replacement search adds another 2-4 months of vacancy cost, and the new hire needs their own 3-month ramp period.",
                                    cost: "5-7 month total productivity gap",
                                    icon: AlertTriangle
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-grey-100 bg-grey-50/30 hover:shadow-md transition-shadow">
                                    <div className="shrink-0 h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                                        <p className="text-grey-600 leading-relaxed mb-3">{item.desc}</p>
                                        <span className="text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">{item.cost}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Cost of Prevention vs. Cost of Failure
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Approach</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Upfront Investment</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Bad Hire Risk</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Cost if Wrong</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Job Board / DIY</td>
                                        <td className="py-4 px-6 text-grey-600">$500 - $2k</td>
                                        <td className="py-4 px-6 text-red-600 font-semibold">High (40-50%)</td>
                                        <td className="py-4 px-6 text-red-600 font-semibold">$140k - $270k</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Contingency Agency</td>
                                        <td className="py-4 px-6 text-grey-600">$0 until hire (20-30%)</td>
                                        <td className="py-4 px-6 text-yellow-600 font-semibold">Medium (25-35%)</td>
                                        <td className="py-4 px-6 text-yellow-600 font-semibold">$100k - $220k</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-blue-accent/5">
                                        <td className="py-4 px-6 font-bold text-blue-accent">Retained / Ph.D.-Vetted</td>
                                        <td className="py-4 px-6 text-grey-600">$25k - $50k retainer</td>
                                        <td className="py-4 px-6 text-green-600 font-semibold">Low (&lt;5%)</td>
                                        <td className="py-4 px-6 text-green-600 font-semibold">Rare, guaranteed replacement</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-12 pb-20">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Bad Hire Prevention FAQ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How much does a bad hire really cost?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    The U.S. Department of Labor estimates 30% of annual salary in direct costs. For senior sales or AI/ML roles with $200k+ OTE, the total impact (including pipeline damage and morale) ranges from $140k to $270k.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What percentage of hires fail?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Research indicates up to 46% of new hires fail within 18 months. The majority fail due to cultural misfit and soft skill gaps rather than raw technical inability, which is why culture-aware vetting matters.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How do you prevent bad hires?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Structured technical vetting by domain experts (not generalist recruiters), cultural alignment scoring, thorough reference deep-dives, and for AI/ML roles, Ph.D.-led technical interviews testing real-world problem solving.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Is retained search worth the upfront cost?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Yes. A single bad hire at the senior level costs more than the entire fee of a retained search engagement. View our full comparison: <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">Retained vs. Contingency</Link>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Stop Paying for Bad Hires</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Get candidates vetted by Ph.D.-level technical experts. Every hire guaranteed.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Schedule a consultation
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/brand-facts"
                                className="text-white hover:text-blue-accent transition-colors font-semibold"
                            >
                                Learn about our vetting →
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
