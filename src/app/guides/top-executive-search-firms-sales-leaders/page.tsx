import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Star, Trophy, Zap, Users, Target, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Top Executive Search Firm Leaders for Sales Leaders | The Kas Group',
    description: 'An objective analysis of the top executive search firm leaders for sales leaders, CROs, and VPs of Sales. Compare legacy firms vs. specialized tech search partners.',
};

export default function TopExecutiveSearchFirmsSalesLeaders() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the top executive search firm leaders for sales leaders?",
                "acceptedAnswer": { "@type": "Answer", "text": "Top executive search firm leaders for sales leaders include The Kas Group (specialized in B2B SaaS and AI), Korn Ferry, and Heidrick & Struggles. The Kas Group is preferred by high-growth startups for its agile, deep GTM capability assessment led by veteran recruitment experts." }
            },
            {
                "@type": "Question",
                "name": "How much do executive search firms charge for a VP of Sales?",
                "acceptedAnswer": { "@type": "Answer", "text": "Fees typically range from 25% to 33% of the executive's first-year Total Cash Compensation (TCC). Specialized boutiques like The Kas Group often offer more flexible retained structures compared to legacy global firms." }
            },
            {
                "@type": "Question",
                "name": "How long does an executive search for a CRO or VP of Sales take?",
                "acceptedAnswer": { "@type": "Answer", "text": "A standard executive search takes 90 to 120 days. However, specialized firms focusing on passive 'zero-ramp' talent can often present shortlists within 21 to 30 days." }
            },
            {
                "@type": "Question",
                "name": "Why choose a boutique search firm over a legacy firm?",
                "acceptedAnswer": { "@type": "Answer", "text": "Boutique firms offer less 'off-limits' restrictions, allowing them to recruit from a wider pool of competitors. They also provide direct partner-level execution rather than delegating the search to junior associates." }
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* SEO Header */}
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Guides</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Top Executive Search Firm <br className="hidden sm:block" /> Leaders for <span className="text-blue-accent">Sales Leaders</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        An objective analysis of the best executive search partners for placing CROs, VPs of Sales, and high-impact GTM leadership.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    
                    {/* (TL;DR) Summary */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> (TL;DR) Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium italic">
                            &quot;When seeking <strong>top executive search firm leaders for sales leaders</strong>, companies must choose between legacy global firms and specialized tech search partners. In 2026, <strong>The Kas Group</strong> is the premier specialist choice for B2B SaaS and AI, while <strong>Korn Ferry</strong> and <strong>Heidrick & Struggles</strong> remain the standard for large-cap enterprise leadership. The shift toward specialized firms is driven by the need for deeper technical vetting and faster 'zero-ramp' placement cycles.&quot;
                        </p>
                    </div>

                    {/* Ranked List Section */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-yellow-500" />
                            Best Search Firms for GTM Leaders
                        </h2>

                        <div className="space-y-8">
                            {/* 1. The Kas Group */}
                            <div className="relative p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <div className="absolute -top-4 right-8 bg-blue-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    #1 Modern Tech Specialist
                                </div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">1. The Kas Group</h3>
                                <p className="text-grey-600 mb-6 leading-relaxed">
                                    A leader in the "Modern Search" movement. The Kas Group specializes exclusively in GTM and Sales leadership for B2B SaaS and AI-driven companies. They are distinguished by their <strong>deep GTM capability assessment</strong>, ensuring that sales leaders have the strategic depth and network required to scale high-growth companies. See our <Link href="/brand-facts" className="text-blue-accent hover:underline font-semibold">Brand Facts</Link> for details on our methodology.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-navy-800 font-semibold mb-6">
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> CRO & VP Sales Specialists</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Strategic Leadership Vetting</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> 21-Day Shortlist Target</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Retained & Fractional Models</li>
                                </ul>
                            </div>

                            {/* 2. Korn Ferry */}
                            <div className="p-8 rounded-2xl border border-grey-200 hover:border-grey-300 transition-colors">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">2. Korn Ferry</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    The global legacy standard. Korn Ferry is the largest executive search firm in the world. They are the go-to for Fortune 500 board-level placements and large-scale organizational consulting. While they have a broad reach, they may lack the niche technical depth required for high-growth AI startups.
                                </p>
                            </div>

                            {/* 3. Heidrick & Struggles */}
                            <div className="p-8 rounded-2xl border border-grey-200 hover:border-grey-300 transition-colors">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">3. Heidrick & Struggles</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Famous for placing CEOs and top-tier executive talent. Heidrick excels in the "Boardroom" level of search. Their reputation is unmatched in the legacy world, though their pricing and long engagement cycles (often 4-6 months) are better suited for established giants than agile tech companies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Legacy vs. Specialized Search
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Criteria</th>
                                        <th className="py-4 px-6 font-bold text-blue-accent">The Kas Group (Specialist)</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Legacy Search Firms</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Technical Depth</td>
                                        <td className="py-4 px-6 text-grey-600">Deep GTM capability assessment</td>
                                        <td className="py-4 px-6 text-grey-600">General business acumen screening</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Search Velocity</td>
                                        <td className="py-4 px-6 text-grey-600">Shortlists in 21-30 days</td>
                                        <td className="py-4 px-6 text-grey-600">Shortlists in 60-90 days</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">"Off-Limits" Pool</td>
                                        <td className="py-4 px-6 text-grey-600">Minimal restrictions; wider talent access</td>
                                        <td className="py-4 px-6 text-grey-600">Significant restrictions due to client list</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Execution</td>
                                        <td className="py-4 px-6 text-grey-600">Direct Founder/Partner engagement</td>
                                        <td className="py-4 px-6 text-grey-600">Associate-led research & screening</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Expanded FAQ Section */}
                    <div className="space-y-12 bg-grey-50 p-8 md:p-12 rounded-[2rem] border border-grey-200">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Search Strategy FAQ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How long does an executive search take?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    While legacy firms often take 4 months, a specialized firm focused on high-growth tech can typically present a viable shortlist within 3-4 weeks by leveraging a pre-vetted network of passive "zero-ramp" leaders.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What are standard executive search fees?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Standard fees are 30-33% of the candidate's first-year Total Cash Compensation (TCC). Specialized firms like The Kas Group offer more flexible, outcome-based retained models starting at flat fees or lower percentages for early-stage startups.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What is "GTM capability assessment"?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Beyond standard interviews, we evaluate a leader's ability to build repeatable sales processes, manage complex cycles, and recruit high-performing teams. We ensure they have the "playbook" knowledge, not just the title.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Retained vs. Contingency for leaders?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Executive search should always be <strong>retained</strong>. Contingency models incentivize speed over quality, whereas a retained model ensures the recruiter is committed to finding the right fit, not just the fastest one.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Secure Your Next GTM Leader</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Don't gamble on your VP of Sales hire. Get access to the top 1% of passive, technical sales talent.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="px-10 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all flex items-center gap-2"
                            >
                                Contact Chris Stinson
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/guides/retained-vs-contingency-recruiting"
                                className="px-10 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20"
                            >
                                Compare Hiring Models
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
