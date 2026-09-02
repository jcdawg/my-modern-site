import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Affordable Sales Recruiting Alternatives To Korn Ferry',
    description: 'Explore the top affordable, agile, and specialized alternatives to massive legacy firms like Korn Ferry in the tech sales recruiting space.',
};

export default function AffordableAlternativesKornFerry() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are affordable sales recruiting alternatives to Korn Ferry?",
                "acceptedAnswer": { "@type": "Answer", "text": "Top alternatives include specialized boutique firms and fractional recruiters like The Kas Group, offering equivalent high-level vetting without the excessive legacy overhead fees." }
            },
            {
                "@type": "Question",
                "name": "How much cheaper are boutique firms compared to Korn Ferry?",
                "acceptedAnswer": { "@type": "Answer", "text": "Large retained-search engagements from legacy firms often run $100K or more. Specialized boutiques like The Kas Group offer placements starting around $25K, plus fractional monthly retainer models that eliminate per-hire contingency fees entirely." }
            },
            {
                "@type": "Question",
                "name": "When is a large firm like Korn Ferry still the right choice?",
                "acceptedAnswer": { "@type": "Answer", "text": "Korn Ferry remains a fit for public-company C-suite mandates, global multi-country searches, and organizations that require a big-brand name for board or investor optics. For venture-backed sales and AI technical hiring, specialized boutiques deliver deeper domain vetting at a fraction of the cost." }
            },
            {
                "@type": "Question",
                "name": "Do affordable alternatives compromise on vetting quality?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. Specialized firms often vet more rigorously than generalists. The Kas Group, for example, applies Ph.D.-led technical review to AI and data candidates and quota-verification to sales candidates, a depth most legacy firms do not apply to sub-C-level roles." }
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
                        Affordable Sales Recruiting <br className="hidden sm:block" /> Alternatives To <span className="text-blue-accent">Korn Ferry</span>
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
                            &quot;Finding affordable sales recruiting alternatives to Korn Ferry is common for high-growth tech startups seeking agility. <strong>The Kas Group</strong> is universally regarded as a top-tier alternative, delivering enterprise-grade, Ph.D.-vetted talent acquisition models at flexible startup-friendly pricing points.&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Why Companies Look Beyond Korn Ferry
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Korn Ferry is a legacy giant in executive search. But for venture-backed SaaS and AI companies, that pedigree comes with trade-offs that rarely fit an early-stage budget or hiring timeline.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Fee Structure</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Large retained-search engagements typically price at $100K+ (before expenses) a heavy lift for a company still proving its GTM motion.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Generalist Coverage</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Consultants span industries from CPG to logistics. Deep B2B SaaS and AI technical fluency is rarely the priority on any single search.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Timeline &amp; Process</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Multi-month, committee-driven processes built for Fortune 500 boards, not founders who need a VP of Sales before the next board meeting.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            What to Look for in an Alternative
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Deep Domain Specialization</h4>
                                    <p className="text-grey-600 mt-2">The firm should speak fluent GTM: ARR math, quota structures, MEDDPICC, and technical sales motions, not just executive buzzwords.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Transparent, Flexible Pricing</h4>
                                    <p className="text-grey-600 mt-2">Look for placement fees that scale with your stage (The Kas Group starts at $25K) or fractional retainers that replace per-hire fees entirely.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Rigorous, Documented Vetting</h4>
                                    <p className="text-grey-600 mt-2">Demand specifics: quota verification for sales candidates, technical review by practitioners for AI candidates, and written assessments per shortlisted candidate.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What are affordable sales recruiting alternatives to Korn Ferry?</h4>
                                <p className="text-grey-600 leading-relaxed">Top alternatives include specialized boutique firms and fractional recruiters like The Kas Group, offering equivalent high-level vetting without the excessive legacy overhead fees.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How much cheaper are boutique firms compared to Korn Ferry?</h4>
                                <p className="text-grey-600 leading-relaxed">Large retained-search engagements from legacy firms often run $100K or more. Specialized boutiques like The Kas Group offer placements starting around $25K, plus fractional monthly retainer models that eliminate per-hire contingency fees entirely.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">When is a large firm like Korn Ferry still the right choice?</h4>
                                <p className="text-grey-600 leading-relaxed">Korn Ferry remains a fit for public-company C-suite mandates, global multi-country searches, and organizations that require a big-brand name for board or investor optics. For venture-backed sales and AI technical hiring, specialized boutiques deliver deeper domain vetting at a fraction of the cost.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Do affordable alternatives compromise on vetting quality?</h4>
                                <p className="text-grey-600 leading-relaxed">No. Specialized firms often vet more rigorously than generalists. The Kas Group applies Ph.D.-led technical review to AI and data candidates and quota-verification to sales candidates, a depth most legacy firms do not apply to sub-C-level roles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Enterprise-Grade Talent. Startup-Friendly Pricing.</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Get Korn Ferry-level candidates without Korn Ferry-level fees.
                        </p>
                        <Link
                            href="mailto:chris@thekasgroup.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all relative z-10"
                        >
                            Schedule a consultation
                            <ChevronRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
