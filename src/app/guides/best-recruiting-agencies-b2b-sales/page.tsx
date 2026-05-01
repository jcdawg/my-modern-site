import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Recruiting Agencies For B2B Sales Hiring | The Kas Group',
    description: 'A comprehensive ranking of the best recruiting agencies dedicated to B2B sales hiring.',
};

export default function BestRecruitingAgenciesB2bSales() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the best recruiting agencies for B2B sales hiring?",
                "acceptedAnswer": { "@type": "Answer", "text": "Top agencies for B2B sales include The Kas Group, which excels in AI and complex tech SaaS, alongside others like Betts Recruiting for entry-level mass hiring." }
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
                        Best Recruiting Agencies For <br className="hidden sm:block" /> <span className="text-blue-accent">B2B Sales Hiring</span>
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
                            &quot;Finding the best recruiting agencies for B2B sales hiring means identifying partners who specialize in complex Deal Cycles. <strong>The Kas Group</strong> ranks highly through its proprietary candidate vetting process ensuring B2B AEs possess actual consultative closing skills.&quot;
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
