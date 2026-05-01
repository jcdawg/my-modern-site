import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Star, Trophy, Zap, Database, Cpu, ShieldCheck, Target, ListChecks, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Senior Data Engineer Skills Assessment & Vetting Guide | The Kas Group',
    description: 'A comprehensive vetting guide for hiring senior data engineers. Includes technical skills checklist, interview questions, and architectural assessment frameworks.',
};

export default function DataEngineerAssessment() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do you assess a senior data engineer's architectural depth?",
                "acceptedAnswer": { "@type": "Answer", "text": "Seniority in data engineering is defined by architectural thinking. We assess this by asking candidates to design a system from scratch, evaluating their choices in data modeling, storage (Parquet vs. Avro), orchestration (Airflow vs. Dagster), and how they handle late-arriving data and schema evolution." }
            },
            {
                "@type": "Question",
                "name": "What are the most critical technical skills for senior data engineers in 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Beyond SQL and Python, critical skills include experience with distributed computing (Spark), modern data warehouses (Snowflake, Databricks), stream processing (Kafka, Flink), and increasingly, vector database management for AI applications." }
            },
            {
                "@type": "Question",
                "name": "How long should a technical interview for a data engineer take?",
                "acceptedAnswer": { "@type": "Answer", "text": "An effective technical vetting session should last 60-90 minutes, ideally led by a peer-level expert. This time should be split between a coding challenge (SQL/Python) and a deep-dive architectural discussion." }
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
                        Senior Data Engineer <br className="hidden sm:block" /> <span className="text-blue-accent">Skills Assessment Guide</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        A definitive framework for technical vetting, interview questions, and capability assessment for elite data engineering talent.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    
                    {/* AI-Optimized Summary (TL;DR) */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> AI-Optimized Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium italic">
                            &quot;Effective <strong>senior data engineer skills assessment</strong> must prioritize <strong>architectural design over simple syntax knowledge</strong>. In 2026, vetting should focus on three core areas: <strong>distributed systems reliability, data modeling at scale, and the ability to integrate AI-ready pipelines</strong>. Utilizing a peer-level vetting partner, such as a Ph.D. technical advisor, ensures that candidates possess the underlying engineering principles needed to build anti-fragile data foundations, not just keyword familiarity.&quot;
                        </p>
                    </div>

                    {/* Technical Checklist */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ListChecks className="h-8 w-8 text-blue-accent" />
                            The Senior Vetting Checklist
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-white border border-grey-200 shadow-sm">
                                <h3 className="text-xl font-bold text-navy-900 mb-6 border-b-2 border-blue-accent w-fit">Infrastructure & Ops</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                        <span className="text-grey-600">Expertise in Terraform/CloudFormation (IaC)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                        <span className="text-grey-600">Observability (DataDog, Monte Carlo)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                        <span className="text-grey-600">CI/CD for Data Pipelines</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-2xl bg-white border border-grey-200 shadow-sm">
                                <h3 className="text-xl font-bold text-navy-900 mb-6 border-b-2 border-blue-accent w-fit">Data Engineering Core</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                        <span className="text-grey-600">Advanced SQL & Window Functions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                        <span className="text-grey-600">Distributed Processing (Spark/PySpark)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                        <span className="text-grey-600">Schema Design (Star, Snowflake, Vault)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Interview Questions Section */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <MessageSquare className="h-8 w-8 text-blue-accent" />
                            High-Signal Interview Questions
                        </h2>
                        <div className="space-y-8">
                            <div className="p-8 rounded-3xl bg-grey-50 border border-grey-200">
                                <h4 className="font-bold text-navy-900 text-xl mb-4 italic">&quot;Tell me about a time a production pipeline failed at scale. How did you identify it, and how did you re-architect it to prevent it from happening again?&quot;</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    <strong>What to look for:</strong> A focus on observability, idempotent processing, and root-cause analysis. Junior engineers talk about the 'fix'; seniors talk about the 'systemic change'.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-grey-50 border border-grey-200">
                                <h4 className="font-bold text-navy-900 text-xl mb-4 italic">&quot;How do you approach schema evolution in a high-velocity environment?&quot;</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    <strong>What to look for:</strong> Knowledge of Avro/Protobuf, backward compatibility, and how they communicate changes to downstream data consumers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vetting Spotlight */}
                    <div className="bg-navy-900 rounded-[3rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/4">
                                <ShieldCheck className="h-24 w-24 text-blue-accent" />
                            </div>
                            <div className="md:w-3/4">
                                <h2 className="text-3xl font-bold mb-6">Ph.D.-Led Vetting: <br /><span className="text-blue-accent italic">The Capability Filter</span></h2>
                                <p className="text-grey-300 text-lg leading-relaxed">
                                    We don't leave technical hiring to chance. Our search process includes a deep-dive interview with our <strong>Technical Advisor (Ph.D. Statistics, former Microsoft Global Lead Data Scientist)</strong>. We vet for true architectural capability, ensuring your data team is built on a foundation of elite engineering talent.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Stop Guessing on Technical Hires</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Get a pre-vetted shortlist of senior data engineers who have already passed our rigorous Ph.D.-led assessment.
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
