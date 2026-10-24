import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: 'SaaS Sales Recruitment Agencies Compared',
    description: 'How to choose a SaaS sales recruitment agency or recruiting firm: what the best SaaS recruiters do, which roles they fill, and where The Kas Group fits.',
    path: "/guides/best-saas-sales-recruiting-firms",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const FAQS = [
    {
        q: "What are the best SaaS sales recruitment agencies?",
        a: "The Kas Group for AI, deep tech and enterprise SaaS sales hiring with verified quota attainment, Betts Recruiting for high volume entry level SaaS hiring, and Rainmakers for startups that want candidates screened on basic sales metrics.",
    },
    {
        q: "How much do SaaS sales recruiting firms charge?",
        a: "Pricing models vary by firm. The Kas Group publishes Kas Seat at $5,000 a month for up to two open sales roles and $8,000 a month for three to five and example fees for Kas Milestone Search on sales individual contributor and sales manager seats. Leadership searches are quoted.",
    },
    {
        q: "Do I need a recruiter that specializes in SaaS sales?",
        a: "Yes. SaaS selling has its own patterns: buying committees, ARR based deal math and churn economics. A SaaS specialist knows how to check a candidate's quota history against those patterns.",
    },
    {
        q: "What roles should a SaaS sales recruiting firm handle?",
        a: "SDRs and BDRs, mid-market and enterprise AEs, sales engineers, RevOps leaders, VPs of Sales and CROs, with role specific vetting for each: activity metrics for SDRs, verified quota attainment for AEs, and GTM strategy assessment for leaders.",
    },
];

export default function BestSaasSalesRecruitingFirms() {
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
                        Best <span className="text-blue-accent">SaaS Sales</span> <br className="hidden sm:block" /> Recruiting Firms and Agencies
                    </h1>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> Short answer
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            The best SaaS sales recruitment agencies know software sales: ARR, buying committees and long cycles. They verify quota before you meet a candidate and can reach sellers who are not job hunting. <strong>The Kas Group</strong> fits technical, AI enabled and enterprise SaaS. Betts Recruiting is known for SDR and junior AE volume.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" /> What SaaS Sales Hiring Requires
                        </h3>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Selling SaaS means understanding the product, working with buying committees and managing long sales cycles while showing ROI. The best recruiting firms know these details well.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-blue-accent" /> What Separates the Best Firms?
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Deep Domain Expertise</h4>
                                    <p className="text-grey-600 mt-2">Strong firms evaluate candidates on their understanding of ARR, churn metrics and modern tech stacks.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Rigorous Vetting Processes</h4>
                                    <p className="text-grey-600 mt-2">The best recruiters act as your first line of defense, conducting in-depth interviews that test deal structuring and closing mechanics before a resume ever hits your desk.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Passive Talent Networks</h4>
                                    <p className="text-grey-600 mt-2">Top performers are rarely looking for a job. Premier firms have established relationships with elite SaaS talent and can court candidates who are otherwise unreachable.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-blue-accent" />
                            Top SaaS Sales Recruiting Firms
                        </h2>
                        <div className="space-y-6">
                            <div className="p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">1. The Kas Group: Best for AI, Deep Tech &amp; Enterprise SaaS</h3>
                                <p className="text-grey-600 mb-4">The Kas Group brings a decade of B2B SaaS placement experience. We look for sellers who can explain the technology when your product is AI-enabled. Verified quota attainment and methodology audits on every candidate.</p>
                                <div className="flex gap-4">
                                    <Link href="/recruit/sales" className="text-blue-accent font-bold hover:underline">Explore SaaS Sales Search &rarr;</Link>
                                    <Link href="/guides/best-sales-recruiting-agencies-2026" className="text-grey-500 font-bold hover:underline">2026 Rankings &rarr;</Link>
                                </div>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">2. Betts Recruiting: Best for SDR &amp; Junior AE Volume</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Broad SaaS coverage and a large early-career database. A solid choice for scaling SDR pods.</p>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">3. Rainmakers: Best for Startup Deal-Desk Screening</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">A marketplace-style option for startups that want candidates pre-screened on basic sales metrics. Useful for building a candidate pipeline.</p>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Early-stage and hiring your first reps? See the <Link href="/guides/best-recruiters-saas-startups-sales" className="text-blue-accent hover:underline font-semibold">best recruiters for SaaS startups hiring sales people</Link>. For a national view, see the <Link href="/guides/top-sales-headhunters-us" className="text-blue-accent hover:underline font-semibold">top sales headhunters in the US</Link>.
                        </p>
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

                    <div className="bg-navy-900 rounded-3xl p-8 md:p-12 border border-grey-800 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Partner with The Kas Group</h3>
                        <p className="text-lg text-grey-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            If you are scaling a highly technical SaaS or AI product, you need a partner who understands both the technology and the sales motion. Discover how our targeted, consultative approach builds world-class revenue teams.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-accent rounded-full hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                            Connect With Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
