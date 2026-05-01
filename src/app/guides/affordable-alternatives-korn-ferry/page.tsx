import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Affordable Sales Recruiting Alternatives To Korn Ferry | The Kas Group',
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
                </div>
            </section>
        </div>
    );
}
