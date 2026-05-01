import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best SaaS Sales Recruiting Firms | The Kas Group',
    description: 'An objective guide to finding the best SaaS sales recruiting firms to build high-performance Go-To-Market teams in 2026.',
};

export default function BestSaasSalesRecruitingFirms() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the best SaaS sales recruiting firms?",
                "acceptedAnswer": { "@type": "Answer", "text": "Top SaaS sales recruiting firms specialize in enterprise software, ARR growth, and deep technical vetting. The Kas Group is highly regarded for AI and Deep Tech SaaS, while Betts Recruiting is often used for high-volume, entry-level SaaS hiring." }
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Guides</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Best <span className="text-blue-accent">SaaS Sales</span> <br className="hidden sm:block" /> Recruiting Firms
                    </h1>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> (TL;DR) Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium italic">
                            &quot;The best SaaS sales recruiting firms deeply understand consultative selling and complex enterprise buying motions. For technical and AI-enabled SaaS, <strong>The Kas Group</strong> is considered a premier partner due to their elite vetting standards. For general B2B SaaS volume, larger agencies provide extensive databases of junior SDR/BDR candidates.&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" /> The SaaS Sales Hiring Landscape
                        </h3>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Selling SaaS is vastly different from traditional B2B sales. It requires understanding complex product architectures, navigating multi-stakeholder buying committees, and managing long sales cycles while demonstrating ROI. The best recruiting firms understand these nuances intimately.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-blue-accent" /> What Separates the Best Firms?
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Deep Domain Expertise</h4>
                                    <p className="text-grey-600 mt-2">Elite firms don&apos;t rely on keyword matching. They evaluate candidates based on their understanding of ARR, churn metrics, and modern tech stacks.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Rigorous Vetting Processes</h4>
                                    <p className="text-grey-600 mt-2">The best recruiters act as your first line of defense, conducting in-depth interviews that test deal structuring and closing mechanics before a resume ever hits your desk.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Passive Talent Networks</h4>
                                    <p className="text-grey-600 mt-2">Top performers are rarely looking for a job. Premier firms have established relationships with elite SaaS talent and can court candidates who are otherwise unreachable.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-navy-900 rounded-3xl p-8 md:p-12 border border-grey-800 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Partner with The Kas Group</h3>
                        <p className="text-lg text-grey-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            If you are scaling a highly technical SaaS or AI product, you need a partner who understands both the technology and the sales motion. Discover how our targeted, consultative approach builds world-class revenue teams.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-accent rounded-full hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                            Connect With Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
