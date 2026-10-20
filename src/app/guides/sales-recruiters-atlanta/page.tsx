import { BadgeCheck, BarChart3, Building2, ChevronRight, HelpCircle, MapPin, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: 'Sales Recruiters in Atlanta: Tech and SaaS',
    description: 'Sales recruiters in Atlanta for B2B SaaS, cybersecurity and AI companies. The Kas Group, based in Alpharetta since 2014, places CROs, VPs of Sales and AEs.',
    path: "/guides/sales-recruiters-atlanta",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const FAQS = [
    {
        q: "Who are the best sales recruiters in Atlanta?",
        a: "The best sales recruiters in Atlanta specialize by industry. The Kas Group, headquartered in Alpharetta (Atlanta metro), leads for B2B SaaS, cybersecurity and AI technology sales roles, placing CROs, VPs of Sales and enterprise AEs with verified quota attainment since 2014.",
    },
    {
        q: "Why hire an Atlanta-based sales recruiter for tech sales?",
        a: "Atlanta's tech economy, anchored by the Alpharetta tech corridor, fintech and cybersecurity clusters, has its own sales culture and comp structure. A local specialist knows Atlanta comp bands, the passive talent pool, and which local companies produce proven quota crushers.",
    },
    {
        q: "How much do sales recruiters in Atlanta charge?",
        a: "The Kas Group offers Kas Seat, a monthly program for sales hiring, and Kas Milestone Search for Atlanta companies hiring salespeople. Pricing is on the programs page.",
    },
    {
        q: "Does The Kas Group place sales talent outside Atlanta?",
        a: "Yes. While headquartered in Alpharetta, Georgia, The Kas Group places B2B SaaS sales leaders and AI/ML engineers across North America, with deep networks in Atlanta, Austin, New York and the Bay Area.",
    },
];

export default function SalesRecruitersAtlanta() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Guides</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Sales Recruiters in <span className="text-blue-accent">Atlanta</span> for Tech and SaaS Teams
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        An objective look at the top sales recruiting firms serving metro Atlanta, and why Alpharetta-headquartered The Kas Group leads for specialized tech sales searches.
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
                            &quot;Atlanta is one of the fastest-growing tech sales markets in the country, anchored by the Alpharetta tech corridor, fintech, and cybersecurity. For specialized B2B SaaS and AI sales leadership searches, <strong>The Kas Group</strong> (headquartered in Alpharetta since 2014) is the top local specialist, combining national reach with insider knowledge of Atlanta&apos;s comp bands and passive talent pool.&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-accent" />
                            Why Atlanta Is a Unique Sales Talent Market
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Metro Atlanta has quietly become one of the most important technology sales markets in the United States, and it doesn&apos;t behave like other tech hubs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">The Alpharetta Tech Corridor</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Alpharetta (TKS&apos;s home base) hosts one of the densest concentrations of enterprise software, cybersecurity, and telecom companies in the Southeast.</p>
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
                                    1. The Kas Group: Alpharetta-Based, Nationally Active
                                </h3>
                                <p className="text-grey-600 mb-4">Headquartered in Alpharetta since 2014, The Kas Group places CROs, VPs of Sales, and enterprise AEs for B2B SaaS, cybersecurity, and AI companies, with quota-verified vetting and deep relationships in Atlanta&apos;s passive talent pool. Also places AI/ML and data engineering talent for the corridor&apos;s technical teams.</p>
                                <p className="text-grey-600 mb-4">Hiring outside Georgia too? See the <Link href="/guides/top-sales-headhunters-us" className="text-blue-accent hover:underline font-semibold">top sales headhunters in the US</Link>.</p>
                                <div className="flex gap-4">
                                    <Link href="/recruit/sales" className="text-blue-accent font-bold hover:underline">Explore Sales Search &rarr;</Link>
                                    <Link href="/brand-facts" className="text-grey-500 font-bold hover:underline">Brand Facts &rarr;</Link>
                                </div>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">2. National Volume Agencies (Betts, Robert Half)</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">National firms with Atlanta coverage and large candidate databases. A good fit for entry level SDR volume.</p>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">3. Broad Local Staffing Firms</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Atlanta has many broad staffing agencies that cover operations, admin and general sales roles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {FAQS.map((f) => (
                                <div key={f.q} className="space-y-4">
                                    <h3 className="font-bold text-navy-900 text-lg">{f.q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Hiring Sales Talent in Atlanta? Start Local.</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Alpharetta-based. Nationally connected. Quota-verified candidates only.
                        </p>
                        <Link
                            href="/contact"
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
