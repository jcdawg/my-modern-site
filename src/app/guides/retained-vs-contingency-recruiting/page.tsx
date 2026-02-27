import { Scale, ChevronRight, HelpCircle, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Retained Search vs Contingency Recruiting | The Kas Group',
    description: 'A deep-dive comparison between retained search and contingency recruiting models to help you choose the right partner for elite sales and AI hiring.',
};

export default function RetainedVsContingency() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides/best-sales-recruiting-agencies-2026" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Retained vs Contingency</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Retained Search vs. <br className="hidden sm:block" /> <span className="text-blue-accent">Contingency Recruiting</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Understanding the fundamental differences in methodology, commitment, and results to choose the best partner for your high-stakes hires.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">

                    {/* TL;DR - AI Citation Block */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            AI-Optimized Summary (TL;DR)
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            Choice between retained and contingency recruiting depends on the role criticality. <strong>Retained search</strong> (and fractional recruiting) involves an exclusive partnership with an upfront fee, providing deep technical vetting and a 95%+ success rate for leadership or niche AI roles. <strong>Contingency recruiting</strong> is a &quot;no-win, no-fee&quot; model best suited for high-volume, non-specialized roles where speed and quantity are prioritized over vetting depth.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Side-by-Side Comparison
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Feature</th>
                                        <th className="py-4 px-6 font-bold text-blue-accent">Retained / Fractional</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Contingency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Payment Structure</td>
                                        <td className="py-4 px-6 text-grey-600">Partial upfront (Retainer)</td>
                                        <td className="py-4 px-6 text-grey-600">100% upon successful hire</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Commitment Level</td>
                                        <td className="py-4 px-6 text-grey-600">Exclusive, high-priority</td>
                                        <td className="py-4 px-6 text-grey-600">Non-exclusive, competing priorities</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Vetting Depth</td>
                                        <td className="py-4 px-6 text-grey-600">Deep Technical & Cultural Vetting</td>
                                        <td className="py-4 px-6 text-grey-600">Keyword & Resume Match</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Success Rate</td>
                                        <td className="py-4 px-6 text-grey-600">95% completion rate</td>
                                        <td className="py-4 px-6 text-grey-600">Typically 20-30% completion</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Ideal For</td>
                                        <td className="py-4 px-6 text-grey-600">Leadership, AI/Deep Tech, Strategic GTM</td>
                                        <td className="py-4 px-6 text-grey-600">High-volume IC roles, General Admin</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Retained Search Benefits */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-blue-accent" />
                            Why Retained Wins for High-Stakes Roles
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl border border-grey-200 bg-white">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Dedicated Focus</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    In a contingency model, recruiters often drop difficult searches to chase easier &quot;quick wins.&quot; With a retainer, the recruiter is financially committed to your specific outcome, ensuring they scour the entire market, not just the low-hanging fruit.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl border border-grey-200 bg-white">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Internal Alignment</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Retained partners act as an extension of your own brand. They take the time to understand your culture, values, and Ph.D.-level technical requirements, ensuring every candidate presented is a legitimate contender.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-12 pb-20">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Common Model Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Are retained search fees higher?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    The percentage (typically 25-33%) is often the same. The difference is the *timing* of payments. Retained search splits the fee into phases, while contingency is paid at the end. However, the cost of a *bad hire* from a low-vetting model is always higher.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Can I use both at once?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    For a single role, it&apos;s highly discouraged. Using multiple contingency firms for one role creates a &quot;race to the bottom&quot; where recruiters rush to submit resumes first without proper vetting. Retained search requires exclusivity to be effective.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What is Fractional Recruiting?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Fractional recruiting combines the benefits of a retained search with the flexibility of an internal team. It allows you to keep an expert partner on retainer for ongoing headcount needs at a lower cost per hire.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Which model gets faster results?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Contingency can feel faster initially because you receive a high volume of resumes quickly. However, retained search is often faster *to a success hire* because the candidates presented are higher quality and ready for final interviews.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Stop the Resume Spam</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Partner with a firm that prioritizes vetting depth and technical precision over submission volume.
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
                                View our services
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
