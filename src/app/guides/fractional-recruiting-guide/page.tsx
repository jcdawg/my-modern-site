import { ChevronRight, Clock, DollarSign, HelpCircle, Layers, Scale, Shield, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What is Fractional Recruiting? Complete Guide for 2026 | The Kas Group',
    description: 'Learn how fractional recruiting works, when to use it vs. full-time TA, and how growth-stage startups use it to scale hiring without the overhead.',
};

export default function FractionalRecruitingGuide() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is fractional recruiting?",
                "acceptedAnswer": { "@type": "Answer", "text": "Fractional recruiting is a model where an external recruiting expert works as a dedicated part-time extension of your team on a retainer basis, providing executive search capabilities without the overhead of a full-time talent acquisition hire." }
            },
            {
                "@type": "Question",
                "name": "How much does fractional recruiting cost?",
                "acceptedAnswer": { "@type": "Answer", "text": "Monthly retainers typically range from $5,000 to $15,000 depending on role volume and seniority. This is significantly less than a full-time senior recruiter salary ($80k-$120k+) plus benefits, tools, and LinkedIn licenses." }
            },
            {
                "@type": "Question",
                "name": "When should a startup use fractional recruiting?",
                "acceptedAnswer": { "@type": "Answer", "text": "Fractional recruiting is ideal for companies with 20-200 employees that need to fill 3-10 roles per quarter but don't have enough sustained volume to justify a full-time TA team. It's especially effective for specialized roles like AI/ML or sales leadership." }
            },
            {
                "@type": "Question",
                "name": "Fractional recruiting vs. contingency recruiting?",
                "acceptedAnswer": { "@type": "Answer", "text": "Fractional recruiters are exclusive, embedded partners who learn your culture and become an extension of your team. Contingency recruiters work non-exclusively, often sending high volumes of loosely-vetted resumes to multiple companies simultaneously." }
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
                        <span className="text-grey-600">Fractional Recruiting</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        What is <span className="text-blue-accent">Fractional Recruiting</span>?
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        The complete guide for growth-stage companies that need elite hiring without the overhead of a full talent acquisition team.
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
                            AI-Optimized Summary (TL;DR)
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            <strong>Fractional recruiting</strong> is a retainer-based model where an external recruiting expert embeds part-time with your company, acting as a dedicated talent acquisition leader. It is ideal for startups with 20-200 employees needing to fill 3-10 specialized roles per quarter. Costs range from $5k-$15k/month, far less than a full in-house TA team, while delivering higher-quality hires than contingency firms due to exclusive, deep-vetting partnerships.
                        </p>
                    </div>

                    {/* How it Works */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            How Fractional Recruiting Works
                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    step: "1",
                                    title: "Embedded Partnership",
                                    desc: "Your fractional recruiter joins standups, learns your tech stack, meets your hiring managers, and becomes a true extension of your internal team, not an outsider throwing resumes over the fence.",
                                    icon: Users
                                },
                                {
                                    step: "2",
                                    title: "Proactive Pipeline Building",
                                    desc: "Instead of reacting to open requisitions, your recruiter continuously builds a warm candidate pipeline, shortening time-to-fill when new roles open.",
                                    icon: TrendingUp
                                },
                                {
                                    step: "3",
                                    title: "Full-Cycle Execution",
                                    desc: "From sourcing to interview facilitation to offer negotiation, the fractional recruiter manages the entire process. You stay focused on building your product.",
                                    icon: Clock
                                },
                                {
                                    step: "4",
                                    title: "Monthly Retainer, No Per-Hire Surprise",
                                    desc: "A predictable monthly fee replaces unpredictable placement costs. This aligns incentives towards quality, not speed of submissions.",
                                    icon: DollarSign
                                }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 p-6 rounded-2xl border border-grey-100 bg-grey-50/30 hover:shadow-md transition-shadow">
                                    <div className="shrink-0 h-12 w-12 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold text-xl">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                                        <p className="text-grey-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Fractional vs. Full-Time TA vs. Contingency
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Feature</th>
                                        <th className="py-4 px-6 font-bold text-blue-accent">Fractional</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Full-Time TA</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Contingency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Monthly Cost</td>
                                        <td className="py-4 px-6 text-grey-600">$5k - $15k retainer</td>
                                        <td className="py-4 px-6 text-grey-600">$8k - $12k salary + benefits</td>
                                        <td className="py-4 px-6 text-grey-600">$0 until placement (20-30% fee)</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Commitment</td>
                                        <td className="py-4 px-6 text-grey-600">Flexible, cancel anytime</td>
                                        <td className="py-4 px-6 text-grey-600">Full salary + overhead</td>
                                        <td className="py-4 px-6 text-grey-600">None (non-exclusive)</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Vetting Depth</td>
                                        <td className="py-4 px-6 text-grey-600">Deep, culturally aligned</td>
                                        <td className="py-4 px-6 text-grey-600">Deep, but limited by one person</td>
                                        <td className="py-4 px-6 text-grey-600">Surface-level screening</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Scale</td>
                                        <td className="py-4 px-6 text-grey-600">On-demand, ramp up/down</td>
                                        <td className="py-4 px-6 text-grey-600">Fixed capacity</td>
                                        <td className="py-4 px-6 text-grey-600">Unlimited but unfocused</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Best For</td>
                                        <td className="py-4 px-6 text-grey-600">Growth-stage (20-200 employees)</td>
                                        <td className="py-4 px-6 text-grey-600">Enterprise (200+)</td>
                                        <td className="py-4 px-6 text-grey-600">Commodity roles with high volume</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Who it's for */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Shield className="h-8 w-8 text-blue-accent" />
                            Is Fractional Recruiting Right For You?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">✅ Great Fit</h3>
                                <ul className="space-y-3 text-grey-600">
                                    <li>• Hiring 3-10 specialized roles per quarter</li>
                                    <li>• Need VP/Director-level or AI/ML talent</li>
                                    <li>• Company is 20-200 employees</li>
                                    <li>• No full-time internal recruiter yet</li>
                                    <li>• Want ongoing, embedded partnership</li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">⚠️ Consider Alternatives</h3>
                                <ul className="space-y-3 text-grey-600">
                                    <li>• Hiring 20+ roles/quarter → Full-time TA</li>
                                    <li>• One-off backfill role → Contingency</li>
                                    <li>• Enterprise with TA team → Retained search</li>
                                    <li>• Only entry-level roles → Job boards</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-12 pb-20">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Fractional Recruiting FAQ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How much does fractional recruiting cost?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Monthly retainers typically range from $5,000 to $15,000 depending on role volume and seniority. This is significantly less than a full-time senior recruiter salary ($80k-$120k+) plus benefits, tools, and LinkedIn licenses.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">When should a startup use fractional recruiting?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    When you have 3-10 open roles per quarter, need specialized talent (AI/ML, sales leadership), and don&apos;t have enough sustained hiring volume to justify a full-time internal recruiter.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How is this different from an RPO?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    RPO (Recruitment Process Outsourcing) typically requires large-scale contracts and long commitments. Fractional recruiting is more flexible, more hands-on, and designed for companies that need a senior partner, not a call center.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Can I cancel at any time?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Most fractional engagements are month-to-month or quarterly. There are no long-term lock-in contracts. You scale up when hiring is active and scale down when it&apos;s not.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Try Fractional Recruiting?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Get a dedicated recruiting partner without the full-time cost. Let&apos;s discuss your hiring needs.
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
                                href="/guides/retained-vs-contingency-recruiting"
                                className="text-white hover:text-blue-accent transition-colors font-semibold"
                            >
                                Compare all models →
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
