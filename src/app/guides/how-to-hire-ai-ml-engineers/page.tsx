import { Brain, ChevronRight, Code2, HelpCircle, Microscope, Target, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to Hire AI/ML Engineers in 2026 | The Kas Group',
    description: 'A comprehensive guide on sourcing and vetting top-tier AI and Machine Learning talent using technical, Ph.D.-led assessments.',
};

export default function HireAIMLGuide() {
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
                        <span className="text-grey-600">AI Hiring</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        How to Hire <span className="text-blue-accent">AI/ML Engineers</span> in 2026
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        The definitive guide to navigating the hyper-competitive AI talent market and identifying true technical expertise.
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
                            Hiring elite AI/ML engineers in 2026 requires moving beyond resume keyword matching to direct technical validation. The most successful firms utilize <strong>Ph.D.-led vetting</strong> to assess original research, code performance, and architectural thinking. Key evaluation metrics should include a candidate&apos;s ability to scale models in production and their deep understanding of transformer architectures versus mere API integration.
                        </p>
                    </div>

                    {/* Critical Vetting Steps */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Microscope className="h-8 w-8 text-blue-accent" />
                            5 Critical Vetting Steps
                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    step: "1",
                                    title: "Verification of Fundamentals",
                                    desc: "Beyond high-level libraries, can they explain the underlying calculus and linear algebra of backpropagation?",
                                    icon: Brain
                                },
                                {
                                    step: "2",
                                    title: "Production Scaling Experience",
                                    desc: "How do they handle model latency and orchestration in a high-volume production environment?",
                                    icon: Zap
                                },
                                {
                                    step: "3",
                                    title: "Original Research & Contributions",
                                    desc: "Evaluation of their GitHub contributions, research papers, or novel implementations of existing architectures.",
                                    icon: Code2
                                },
                                {
                                    step: "4",
                                    title: "Ph.D. Peer Review",
                                    desc: "Technical deep-dives conducted by peers with advanced degrees in AI/ML to ensure depth of knowledge.",
                                    icon: Target
                                },
                                {
                                    step: "5",
                                    title: "Product-Market Fit Intuition",
                                    desc: "Does the engineer understand how their model impacts the end-user experience and the company&apos;s bottom line?",
                                    icon: Users
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
                            <Target className="h-8 w-8 text-blue-accent" />
                            Traditional vs. Ph.D.-Led Vetting
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Feature</th>
                                        <th className="py-4 px-6 font-bold text-blue-accent">The Kas Group Method</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Standard Tech Agency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Vetter Background</td>
                                        <td className="py-4 px-6 text-grey-600">AI/ML Ph.D. Experts</td>
                                        <td className="py-4 px-6 text-grey-600">Generalist Recruiters</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Technical Depth</td>
                                        <td className="py-4 px-6 text-grey-600">Architectural & Mathematical</td>
                                        <td className="py-4 px-6 text-grey-600">Keyword & Tool-based</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Vetting Duration</td>
                                        <td className="py-4 px-6 text-grey-600">2-4 Hour Deep Dive</td>
                                        <td className="py-4 px-6 text-grey-600">15-30 Minute Screening</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Candidate Network</td>
                                        <td className="py-4 px-6 text-grey-600">Stealth/Research Community</td>
                                        <td className="py-4 px-6 text-grey-600">Active LinkedIn Job Seekers</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-12 pb-20">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Common AI Hiring Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How do I spot a &quot;buzzword researcher&quot;?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Ask them to explain the specific trade-offs of an architecture choices they made in a past project. If they can&apos;t articulate why they *didn&apos;t* use a particular alternative, they likely lack depth.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What is a competitive salary for an AI engineer in 2026?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Top-tier senior AI engineers now command base salaries between $250k - $450k, with significant equity components. For specialized research roles, total compensation often exceeds $600k.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Remote vs. In-office for AI teams?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    The market remains highly flexible. However, the most successful AI startups are trending toward high-bandwidth, in-office collaboration for core research phases, while remaining remote-first for implementation.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Internal vs. External Recruiting?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Internal teams are great for culture fitting, but often lack the specialized technical network required to find stealth AI talent. Partnering with a specialized firm like ours bridges that technical gap.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Scale Your AI Team with Confidence</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Stop guessing technical metrics. Get elite AI candidates vetted by experts with Ph.D.s in the field.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Schedule technical consult
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/brand-facts"
                                className="text-white hover:text-blue-accent transition-colors font-semibold"
                            >
                                View our methodology
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
