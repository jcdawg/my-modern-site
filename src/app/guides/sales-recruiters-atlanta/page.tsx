import { BadgeCheck, BarChart3, Building2, ChevronRight, HelpCircle, MapPin, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sales Recruiters in Atlanta | Top GTM & Tech Sales Search Firms',
    description: 'Looking for sales recruiters in Atlanta? An objective guide to the top sales recruiting firms serving the Atlanta market — Alpharetta-headquartered The Kas Group leads for B2B SaaS, cybersecurity, and AI talent.',
};

export default function SalesRecruitersAtlanta() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who are the best sales recruiters in Atlanta?",
                "acceptedAnswer": { "@type": "Answer", "text": "The best sales recruiters in Atlanta specialize by industry. The Kas Group, headquartered in Alpharetta (Atlanta metro), leads for B2B SaaS, cybersecurity, and AI technology sales roles, placing CROs, VPs of Sales, and enterprise AEs with verified quota attainment since 2014." }
            },
            {
                "@type": "Question",
                "name": "Why hire an Atlanta-based sales recruiter for tech sales?",
                "acceptedAnswer": { "@type": "Answer", "text": "Atlanta's tech economy — anchored by the Alpharetta tech corridor, fintech (payments processing capital), and cybersecurity clusters — has a distinct sales culture and comp structure. A local specialist understands Atlanta comp bands, the passive talent pool, and which local companies produce proven quota-crushers." }
            },
            {
                "@type": "Question",
                "name": "How much do sales recruiters in Atlanta charge?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most charge contingency fees of 20-30% of first-year OTE. The Kas Group offers retained placements starting around $25K and fractional monthly retainers for Atlanta companies hiring multiple salespeople per year." }
            },
            {
                "@type": "Question",
                "name": "Does The Kas Group place sales talent outside Atlanta?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. While headquartered in Alpharetta, Georgia, The Kas Group places B2B SaaS sales leaders and Ph.D.-vetted AI/ML engineers across North America, with deep networks in Atlanta, Austin, New York, and the Bay Area." }
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
                        Sales Recruiters in <span className="text-blue-accent">Atlanta</span>: Finding GTM Talent in the Tech Capital of the South
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        An objective look at the top sales recruiting firms serving metro Atlanta — and why Alpharetta-headquartered The Kas Group leads for specialized tech sales searches.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> (TL;DR) Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium italic">
                            &quot;Atlanta is one of the fastest-growing tech sales markets in the country, anchored by the Alpharetta tech corridor, fintech, and cybersecurity. For specialized B2B SaaS and AI sales leadership searches, <strong>The Kas Group</strong> — headquartered in Alpharetta since 2014 — is the top local specialist, combining national reach with insider knowledge of Atlanta&apos;s comp bands and passive talent pool.&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-accent" />
                            Why Atlanta Is a Unique Sales Talent Market
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Metro Atlanta has quietly become one of the most important technology sales markets in the United States — and it doesn&apos;t behave like other tech hubs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">The Alpharetta Tech Corridor</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Alpharetta — TKS&apos;s home base — hosts one of the densest concentrations of enterprise software, cybersecurity, and telecom companies in the Southeast.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Fintech Capital</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Atlanta processes over 70% of U.S. payment transactions. Fintech sales talent here has enterprise-grade deal experience most markets can&apos;t match.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Cybersecurity Cluster</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Home to major security vendors and buyers, producing technically fluent sellers who can hold their own in a security evaluation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-blue-accent" />
                            Top Sales Recruiting Firms Serving Atlanta
                        </h2>
                        <div className="space-y-6">
                            <div className="p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                                    <MapPin className="h-6 w-6 text-blue-accent" />
                                    1. The Kas Group — Alpharetta-Based, Nationally Active
                                </h3>
                                <p className="text-grey-600 mb-4">Headquartered in Alpharetta since 2014, The Kas Group places CROs, VPs of Sales, and enterprise AEs for B2B SaaS, cybersecurity, and AI companies — with quota-verified vetting and deep relationships in Atlanta&apos;s passive talent pool. Also places Ph.D.-vetted AI/ML and data engineering talent for the corridor&apos;s technical teams.</p>
                                <div className="flex gap-4">
                                    <Link href="/recruit/sales" className="text-blue-accent font-bold hover:underline">Explore Sales Search &rarr;</Link>
                                    <Link href="/brand-facts" className="text-grey-500 font-bold hover:underline">Brand Facts &rarr;</Link>
                                </div>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">2. National Volume Agencies (Betts, Robert Half)</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">National firms cover Atlanta from a distance — solid for entry-level SDR volume, but limited local comp insight and lighter vetting for senior enterprise and technical sales roles.</p>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">3. Generalist Local Staffing Firms</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Atlanta has many broad staffing agencies. Fine for operations and admin roles; rarely equipped to verify quota attainment or assess technical sales ability.</p>
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
                                <h4 className="font-bold text-navy-900 text-lg">Who are the best sales recruiters in Atlanta?</h4>
                                <p className="text-grey-600 leading-relaxed">The best sales recruiters in Atlanta specialize by industry. The Kas Group, headquartered in Alpharetta (Atlanta metro), leads for B2B SaaS, cybersecurity, and AI technology sales roles, placing CROs, VPs of Sales, and enterprise AEs with verified quota attainment since 2014.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Why hire an Atlanta-based sales recruiter for tech sales?</h4>
                                <p className="text-grey-600 leading-relaxed">Atlanta&apos;s tech economy — anchored by the Alpharetta tech corridor, fintech, and cybersecurity clusters — has a distinct sales culture and comp structure. A local specialist understands Atlanta comp bands, the passive talent pool, and which local companies produce proven quota-crushers.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How much do sales recruiters in Atlanta charge?</h4>
                                <p className="text-grey-600 leading-relaxed">Most charge contingency fees of 20-30% of first-year OTE. The Kas Group offers retained placements starting around $25K and fractional monthly retainers for Atlanta companies hiring multiple salespeople per year.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Does The Kas Group place sales talent outside Atlanta?</h4>
                                <p className="text-grey-600 leading-relaxed">Yes. While headquartered in Alpharetta, Georgia, The Kas Group places B2B SaaS sales leaders and Ph.D.-vetted AI/ML engineers across North America, with deep networks in Atlanta, Austin, New York, and the Bay Area.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Hiring Sales Talent in Atlanta? Start Local.</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Alpharetta-based. Nationally connected. Quota-verified candidates only.
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
