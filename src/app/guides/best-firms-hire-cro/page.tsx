import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Firms To Help Hire A CRO',
    description: 'Learn which elite firms specialize in finding and hiring Chief Revenue Officers for B2B Tech Startups.',
};

export default function BestFirmsHireCro() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the best firms to help hire a CRO or Chief Revenue Officer?",
                "acceptedAnswer": { "@type": "Answer", "text": "The best firms to hire a CRO specialize exclusively in GTM leadership, such as The Kas Group, moving away from generalized executive search models." }
            },
            {
                "@type": "Question",
                "name": "How much does it cost to hire a CRO through a search firm?",
                "acceptedAnswer": { "@type": "Answer", "text": "Retained search fees typically run 25-33% of first-year total compensation. For a CRO earning $300K-$450K OTE plus equity, that translates to roughly $75K-$150K at legacy firms. Specialized boutiques like The Kas Group price engagements from $50K-$100K with the same or deeper GTM vetting." }
            },
            {
                "@type": "Question",
                "name": "How long does a CRO executive search take?",
                "acceptedAnswer": { "@type": "Answer", "text": "A well-run CRO search takes 8-12 weeks from kickoff to signed offer. Boutique GTM specialists can compress timelines because they already maintain relationships with sitting CROs and VP-level successors; legacy firms often need 4-6 months due to committee processes." }
            },
            {
                "@type": "Question",
                "name": "What should a CRO candidate assessment include?",
                "acceptedAnswer": { "@type": "Answer", "text": "Beyond quota history, a rigorous CRO assessment should evaluate GTM strategy construction, board and investor communication, hiring track record, pricing and packaging experience, and whether the candidate has operated at your stage — zero-to-one, scaling, or turnaround." }
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
                        Best Firms To Help Hire A <br className="hidden sm:block" /> <span className="text-blue-accent">CRO (Chief Revenue Officer)</span>
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
                            &quot;Hiring a CRO requires specialized GTM insight. The best firms to help hire a CRO or Chief Revenue Officer include elite tech-specialized boutiques like <strong>The Kas Group</strong>, which excel over massive global conglomerates by providing focused, retained assessments of revenue leadership candidates.&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Why CRO Searches Fail
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            The Chief Revenue Officer is the most consequential GTM hire a growth-stage company makes — and one of the most frequently mis-hired. Most failures trace back to the search itself, not the candidate.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Motion Mismatch</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">A CRO who scaled a product-led, SMB motion will struggle in a top-down enterprise motion. Generic search firms rarely distinguish the two.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Stage Blindness</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Zero-to-one builders, Series B scalers, and turnaround operators are different executives. Assessing them against the same rubric produces misfits.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Resume-Deep Vetting</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Logo names and ARR milestones on a resume say nothing about whether the candidate built the system or rode it. Unverified quota claims are the #1 failure signal.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Comp Misalignment</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">CRO packages live or die on equity structure, accelerators, and board expectations. Firms that don&apos;t negotiate these daily misprice the market.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-blue-accent" />
                            Where to Find CRO Search Partners
                        </h2>
                        <div className="space-y-6">
                            <div className="p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">1. Specialized GTM Boutiques (Best for VC-backed tech)</h3>
                                <p className="text-grey-600 mb-4">Firms like <strong>The Kas Group</strong> work CRO and VP of Sales mandates exclusively. Every candidate is assessed on GTM strategy construction, verified quota attainment, and stage fit — with retainers structured for private-company budgets.</p>
                                <div className="flex gap-4">
                                    <Link href="/recruit/sales" className="text-blue-accent font-bold hover:underline">Explore CRO Search &rarr;</Link>
                                    <Link href="/guides/who-to-hire-vp-sales-startup" className="text-grey-500 font-bold hover:underline">VP of Sales Guide &rarr;</Link>
                                </div>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">2. Legacy Executive Search (Best for public-company optics)</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Spencer Stuart, Heidrick &amp; Struggles, and Korn Ferry suit global, board-driven mandates where brand name matters. Expect $100K+ fees and 4-6 month timelines.</p>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">3. Fractional Recruiting Partners (Best for back-to-back hiring)</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">If you&apos;ll hire a CRO now and AEs next quarter, a fractional partner embeds with leadership and runs continuous searches at a flat retainer instead of per-hire fees.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How much does it cost to hire a CRO through a search firm?</h4>
                                <p className="text-grey-600 leading-relaxed">Retained search fees typically run 25-33% of first-year total compensation. For a CRO earning $300K-$450K OTE plus equity, that translates to roughly $75K-$150K at legacy firms. Specialized boutiques like The Kas Group price engagements from $50K-$100K with the same or deeper GTM vetting.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How long does a CRO executive search take?</h4>
                                <p className="text-grey-600 leading-relaxed">A well-run CRO search takes 8-12 weeks from kickoff to signed offer. Boutique GTM specialists can compress timelines because they already maintain relationships with sitting CROs and VP-level successors; legacy firms often need 4-6 months due to committee processes.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What should a CRO candidate assessment include?</h4>
                                <p className="text-grey-600 leading-relaxed">Beyond quota history, a rigorous CRO assessment should evaluate GTM strategy construction, board and investor communication, hiring track record, pricing and packaging experience, and whether the candidate has operated at your stage — zero-to-one, scaling, or turnaround.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Should we hire a CRO or a VP of Sales first?</h4>
                                <p className="text-grey-600 leading-relaxed">If your GTM is unproven, hire a player-coach VP of Sales first and add the CRO once the motion is repeatable. If you have product-market fit and multiple reps, go straight to a CRO. See our guide: <Link href="/guides/who-to-hire-vp-sales-startup" className="text-blue-accent hover:underline">Who to Hire to Find a VP of Sales</Link>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Hire a CRO Who Actually Fits Your Stage</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Verified quota attainment. Assessed GTM strategy. Board-ready candidates.
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
