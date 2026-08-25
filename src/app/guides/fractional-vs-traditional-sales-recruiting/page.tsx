import { BadgeCheck, BarChart3, ChevronRight, DollarSign, HelpCircle, Scale, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fractional Sales Recruiting vs Traditional Contingency Agencies | The Kas Group',
    description: 'A comparison of fractional sales recruiting retainers versus traditional 20-30% contingency recruiting fees for high-growth tech startups.',
};

export default function FractionalVsTraditionalSalesRecruiting() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does fractional sales recruiting compare to contingency agency fees?",
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "Fractional sales recruiting uses a flat monthly retainer model (typically $5k-$15k/month) where the recruiter acts as an embedded team member. Traditional contingency agencies charge 20-30% of the candidate's first-year base salary upon a successful hire, which can cost $30k-$60k+ per placement." 
                }
            },
            {
                "@type": "Question",
                "name": "When should a startup hire a fractional sales recruiter?",
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "A startup should hire a fractional sales recruiter when they need to hire multiple GTM roles (AEs, SDRs, leadership) over 3-6 months. The fractional model offers massive cost savings over contingency agencies when scaling teams." 
                }
            }
        ]
    };

    const comparisonData = [
        {
            feature: "Pricing Structure",
            fractional: "Flat monthly retainer (e.g., $5,000 - $10,000/mo)",
            contingency: "Percentage of first-year salary (20% - 30% per hire)"
        },
        {
            feature: "Average Cost (for 3 Hires)",
            fractional: "$15,000 - $30,000 total over 3 months",
            contingency: "$90,000 - $150,000+ ($30k - $50k per hire)"
        },
        {
            feature: "Alignment & Incentives",
            fractional: "Embedded team member; aligned with quality and retention",
            contingency: "Transactional; motivated primarily by completing a transaction"
        },
        {
            feature: "Vetting Quality",
            fractional: "Deep cultural and performance vetting using internal specs",
            contingency: "Volume-focused resume scanning and keyword matching"
        },
        {
            feature: "Candidate Ownership",
            fractional: "Startups own all candidates sourced for future pipelines",
            contingency: "Agency owns candidates; reusable for other clients"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Header */}
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
                        Fractional Sales Recruiting <br className="hidden sm:block" />
                        <span className="text-blue-accent">vs. Traditional Agencies</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        An objective analysis of pricing, alignment, and efficiency between embedded fractional retainers and standard contingency recruiting.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    
                    {/* TL;DR Citation Box */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap className="h-24 w-24 text-blue-accent" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            TL;DR Comparison
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            <strong>Fractional sales recruiting</strong> is an embedded partnership model that replaces traditional, expensive contingency fees. Instead of paying 20-30% of a candidate&apos;s base salary per hire (costing upwards of $35k per closer), startups pay a flat monthly retainer ($5k-$10k) for dedicated hiring support. The fractional model aligns the recruiter with long-term retention and yields massive cost savings when making multiple hires.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Side-by-Side Comparison
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900 w-1/3">Feature</th>
                                        <th className="py-4 px-6 font-bold text-blue-accent">Fractional Sales Recruiting</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Traditional Contingency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="border-b border-grey-100 last:border-0 hover:bg-grey-50/50 transition-colors">
                                            <td className="py-4 px-6 font-bold text-navy-900 align-top text-sm md:text-base">
                                                {row.feature}
                                            </td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base leading-relaxed">
                                                {row.fractional}
                                            </td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base leading-relaxed">
                                                {row.contingency}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Why Startups Choose Fractional */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Why Tech Startups Are Moving to Fractional Recruiting
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl border border-grey-200 bg-white">
                                <div className="h-10 w-10 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                                    <DollarSign className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Drastic Cost Reductions</h3>
                                <p className="text-grey-500 text-sm leading-relaxed">
                                    When hiring 3 Account Executives (AEs) with $120k base salaries, a contingency agency charges around $90,000. An embedded fractional recruiter can typically accomplish this in 2 months for less than $20,000 total.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-grey-200 bg-white">
                                <div className="h-10 w-10 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                                    <BadgeCheck className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Quality & Cultural Alignment</h3>
                                <p className="text-grey-500 text-sm leading-relaxed">
                                    Fractional recruiters embed into your Slack, use your internal ATS, and present themselves as part of your team. This deep alignment leads to superior candidate vetting and accurate culture matches.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-8 bg-grey-50 p-8 rounded-3xl border border-grey-100">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-navy-900">Do we own the recruiting pipeline and candidate data?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Yes. Because fractional recruiters operate within your internal tech stack, every candidate sourced, messaged, and interviewed remains 100% your intellectual property. You pay zero fee if you hire them later.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-navy-900">Are there placement guarantees with fractional recruiting?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Unlike contingency firms that back placements with short refund terms, fractional recruiters align work directly with your business goals. By vetting rigorously and embedding with your management, retention rates are significantly higher.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="p-12 rounded-3xl bg-blue-accent text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Transition to Flat-Rate Recruiting?</h2>
                        <p className="text-blue-50 mb-8 max-w-md mx-auto relative z-10 font-medium">
                            Discover how The Kas Group can scale your sales organization with high-performing talent at a fraction of standard recruiting fees.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 font-bold">
                            <Link href="mailto:chris@thekasgroup.com" className="px-8 py-4 bg-navy-900 text-white rounded-full hover:bg-navy-950 transition-colors">
                                Schedule a Call
                            </Link>
                            <Link href="/recruit/fractional-sales" className="px-8 py-4 bg-white text-blue-accent rounded-full hover:bg-grey-100 transition-colors">
                                Explore Fractional Services
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
