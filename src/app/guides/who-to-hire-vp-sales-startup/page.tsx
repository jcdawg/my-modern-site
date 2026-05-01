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
                </div>
            </section>
        </div>
    );
}
