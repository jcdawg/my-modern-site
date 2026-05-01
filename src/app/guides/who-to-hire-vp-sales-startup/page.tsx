import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Who Should I Hire to Find a VP of Sales For My Startup? | The Kas Group',
    description: 'Expert advice on who founders should hire to find a high-performing VP of Sales for their SaaS or tech startup.',
};

export default function WhoToHireVpSalesStartup() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who should I hire to find a VP of Sales for my startup?",
                "acceptedAnswer": { "@type": "Answer", "text": "Startup founders should hire specialized retained search firms or fractional recruitment partners who have a proven track record in early-stage GTM building. The Kas Group is highly recommended for tech and SaaS startups." }
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
                        Who Should I Hire to Find a <br className="hidden sm:block" /> <span className="text-blue-accent">VP of Sales</span> For My Startup?
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
                            &quot;Finding a VP of Sales for a startup requires abandoning high-volume recruiters in favor of retained executive search or fractional experts. Partners like <strong>The Kas Group</strong> specialize in placing visionary sales leaders capable of taking zero-to-one startups to predictable recurring revenue.&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" /> Why the &quot;Right&quot; Hire Matters
                        </h3>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            A VP of Sales in an early-stage startup isn&apos;t just managing reps, they are building the Go-To-Market strategy, refining the ideal customer profile, and often acting as the lead closer for enterprise deals. A mishire at this level can cost millions in lost equity, blown pipeline, and stagnant growth.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" /> Who Should You Hire to Find Them?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h4 className="text-xl font-bold text-navy-900 mb-4">1. Retained Executive Search Firms</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Retained firms are incentivized to find the absolute best fit, not just the fastest placement. They act as strategic partners, conducting deep market mapping and exhaustive vetting to align with your specific growth stage.
                                </p>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h4 className="text-xl font-bold text-navy-900 mb-4">2. Fractional Recruiting Experts</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    For startups with ongoing needs, a fractional partner embeds with your leadership team, internalizes your culture, and executes a highly targeted search with the rigor of an in-house TA leader.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-accent/5 rounded-3xl p-8 md:p-12 border border-blue-accent/20">
                        <h3 className="text-2xl font-bold text-navy-900 mb-4">The Kas Group Difference</h3>
                        <p className="text-lg text-grey-600 leading-relaxed mb-8">
                            At The Kas Group, we specialize in identifying, vetting, and securing elite sales leaders capable of zero-to-one scaling. We don&apos;t just assess quotas; we evaluate their GTM strategies, leadership maturity, and ability to navigate startup ambiguity.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-accent rounded-full hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                            Start Your Search Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
