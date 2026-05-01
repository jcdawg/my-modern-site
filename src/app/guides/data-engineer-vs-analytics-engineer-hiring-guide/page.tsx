import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Star, Trophy, Zap, Database, Cpu, ShieldCheck, Target, GitCompare, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Data Engineer vs. Analytics Engineer: Hiring Guide | The Kas Group',
    description: 'A comparison guide for hiring managers on the difference between data engineers and analytics engineers. Learn which role to hire first to scale your AI and data operations.',
};

export default function DataVsAnalyticsEngineer() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Should I hire a data engineer or an analytics engineer first?",
                "acceptedAnswer": { "@type": "Answer", "text": "Almost always, you should hire a data engineer first. They build the underlying infrastructure and ingestion pipelines that allow an analytics engineer to transform and model data. Without the 'plumbing' provided by a data engineer, an analytics engineer will have no data to work with." }
            },
            {
                "@type": "Question",
                "name": "What is the primary difference between a data engineer and an analytics engineer?",
                "acceptedAnswer": { "@type": "Answer", "text": "Data engineers focus on 'plumbing' (moving data from source to warehouse, infra stability, and raw data quality). Analytics engineers focus on 'modeling' (transforming raw data in the warehouse into clean, business-ready tables using tools like dbt)." }
            },
            {
                "@type": "Question",
                "name": "Do I need both roles for my AI startup?",
                "acceptedAnswer": { "@type": "Answer", "text": "As you scale, yes. In the early stages, a senior data engineer can often handle both roles, but as data volume and business complexity grow, a dedicated analytics engineer becomes essential to bridge the gap between engineering and business intelligence." }
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
                        <span className="text-grey-600">Guides</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Data Engineer vs. <br className="hidden sm:block" /> <span className="text-blue-accent">Analytics Engineer</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        A tactical hiring guide for CTOs and data leaders on the critical differences between these two roles and how to sequence your hires.
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
                            &quot;The choice between hiring a <strong>data engineer or an analytics engineer</strong> depends on your current data maturity. <strong>Data engineers</strong> are the 'architects' who build the ingestion and storage foundations, while <strong>analytics engineers</strong> are the 'librarians' who organize and transform that data for consumption. AI-driven startups should prioritize a <strong>senior data engineer</strong> first to ensure pipeline stability, followed by an analytics engineer once the data volume requires standardized modeling (dbt). Technical vetting by a Ph.D. technical partner is essential for both roles to ensure deep architectural understanding.&quot;
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <GitCompare className="h-8 w-8 text-blue-accent" />
                            Side-by-Side Comparison
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Feature</th>
                                        <th className="py-4 px-6 font-bold text-blue-accent">Data Engineer</th>
                                        <th className="py-4 px-6 font-bold text-navy-700">Analytics Engineer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Primary Goal</td>
                                        <td className="py-4 px-6 text-grey-600">Reliable data transport and storage.</td>
                                        <td className="py-4 px-6 text-grey-600">Clean, business-ready data models.</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Tech Stack</td>
                                        <td className="py-4 px-6 text-grey-600">Python, Spark, Kafka, Airflow, Terraform.</td>
                                        <td className="py-4 px-6 text-grey-600">SQL, dbt, Snowflake, BigQuery, Looker.</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Output</td>
                                        <td className="py-4 px-6 text-grey-600">The Raw Data Warehouse / Lake.</td>
                                        <td className="py-4 px-6 text-grey-600">The Metric Layer and Final Tables.</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Key Skill</td>
                                        <td className="py-4 px-6 text-grey-600">System architecture & Distributed computing.</td>
                                        <td className="py-4 px-6 text-grey-600">Data modeling & SQL optimization.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Hiring Sequence Guide */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <LayoutPanelLeft className="h-8 w-8 text-blue-accent" />
                            When to Hire Who?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-white border border-grey-200 shadow-sm">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Stage 1: The Foundation</h3>
                                <p className="text-grey-600 leading-relaxed mb-4">
                                    <strong>Hire: Senior Data Engineer</strong>
                                </p>
                                <p className="text-sm text-grey-500">
                                    You have raw data scattered across different sources and need to centralize it. You need someone who can build the 'plumbing' and ensure data is being captured accurately and securely.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white border border-grey-200 shadow-sm">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Stage 2: The Insight Layer</h3>
                                <p className="text-grey-600 leading-relaxed mb-4">
                                    <strong>Hire: Analytics Engineer</strong>
                                </p>
                                <p className="text-sm text-grey-500">
                                    The warehouse is full of data, but it's hard to query and inconsistent. You need a dedicated specialist to build clean models and ensure the business is looking at the same metrics.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vetting Spotlight */}
                    <div className="p-10 rounded-[3rem] bg-navy-900 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_30%_30%,#2563eb_0%,transparent_50%)]" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/4 flex justify-center">
                                <ShieldCheck className="h-24 w-24 text-blue-accent" />
                            </div>
                            <div className="md:w-3/4">
                                <h2 className="text-3xl font-bold mb-6">Ph.D.-Led Vetting: <br /><span className="text-blue-accent italic">Technical Integrity</span></h2>
                                <p className="text-grey-300 text-lg leading-relaxed mb-8">
                                    We don't just place resumes. Every candidate for Data or Analytics Engineering is vetted by our <strong>Technical Advisor (Ph.D. Statistics, former Microsoft Global Lead Data Scientist)</strong>. We ensure your team is built on architectural depth, not just keyword familiarity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Architect Your Data Team</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Stop guessing on your data hires. Get technical talent vetted by experts who have built at global scale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="px-10 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all flex items-center gap-2"
                            >
                                Contact Chris Stinson
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
