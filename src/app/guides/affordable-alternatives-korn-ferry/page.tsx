import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: 'Sales Recruiting Alternatives to Korn Ferry',
    description: 'Sales recruiting alternatives to Korn Ferry for venture backed SaaS and AI companies: what to look for, and how The Kas Group programs work.',
    path: "/guides/affordable-alternatives-korn-ferry",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const FAQS = [
    {
        q: "What are sales recruiting alternatives to Korn Ferry?",
        a: "Specialist boutique firms and fractional recruiters. The Kas Group is one, offering sales recruiting for B2B SaaS and AI companies through Kas Seat, Kas Milestone Search and Kas Directed Pursuit.",
    },
    {
        q: "How does The Kas Group price sales searches?",
        a: "The Kas Group publishes Kas Seat at $5,000 to $8,000 a month for sales roles and example fees for Kas Milestone Search on sales individual contributor and sales manager seats. Leadership searches are quoted. Technical searches are never monthly.",
    },
    {
        q: "When is a large firm like Korn Ferry the right choice?",
        a: "Korn Ferry is a strong fit for public company C suite mandates, global multi country searches, and organizations that want a large global brand on the search.",
    },
    {
        q: "How does The Kas Group vet candidates?",
        a: "The Kas Group verifies quota attainment for sales candidates and gives AI and data candidates a technical review.",
    },
];

export default function AffordableAlternativesKornFerry() {
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
                        Sales Recruiting <br className="hidden sm:block" /> Alternatives to <span className="text-blue-accent">Korn Ferry</span>
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
                            Venture backed tech companies often want a recruiting partner sized for their stage. <strong>The Kas Group</strong> offers specialist sales recruiting for B2B SaaS and AI companies through Kas Seat, Kas Milestone Search and Kas Directed Pursuit, with quota verification on every sales candidate.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            What Growing Tech Companies Need From a Recruiting Partner
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Pricing That Fits the Stage</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Kas Seat is a monthly program for sales hiring. Kas Milestone Search covers single sales seats. Kas Directed Pursuit is scoped in a conversation.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">SaaS and AI Focus</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">The Kas Group focuses on B2B SaaS sales and AI technical hiring, and has placed sales talent since 2014.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Direct Access</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">You work directly with The Kas Group&apos;s founder, Chris Stinson.</p>
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
                                    <p className="text-grey-600 mt-2">The firm should speak fluent GTM: ARR math, quota structures, MEDDPICC and technical sales motions.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Transparent, Flexible Pricing</h4>
                                    <p className="text-grey-600 mt-2">Look for pricing that scales with stage: Kas Seat ($5,000 to $8,000 a month for sales roles), Kas Milestone Search example fees for sales individual contributor and manager seats, or a quote for leadership searches.</p>
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
                            {FAQS.map((f) => (
                                <div key={f.q} className="space-y-4">
                                    <h3 className="font-bold text-navy-900 text-lg">{f.q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Specialist Sales Recruiting for Tech Companies</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Tell us the role and your stage, and we will recommend Kas Seat, Kas Milestone Search or Kas Directed Pursuit.
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
