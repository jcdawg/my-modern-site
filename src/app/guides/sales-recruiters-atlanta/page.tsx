import { Building2, ChevronRight, HelpCircle, MapPin, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: 'Sales Recruiters Atlanta: Tech and SaaS Sales Hiring',
    description: 'Sales recruiters in Atlanta for B2B SaaS, fintech, cybersecurity and AI companies. The Kas Group is based in Alpharetta and has placed sales talent since 2014.',
    path: "/guides/sales-recruiters-atlanta",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const SRC = {
    comptia: "https://www.comptia.org/en-us/resources/research/state-of-the-tech-workforce-2026/",
    census: "https://www.census.gov/newsroom/press-releases/2026/2025-popest-metro-micro-counties.html",
    alpharetta: "https://connectedalpharetta.com/technology/",
};

const FAQS = [
    {
        q: "What do sales recruiters in Atlanta do?",
        a: "Sales recruiters in Atlanta find, screen and present sales candidates for local and remote roles, from SDRs to sales leaders. The Kas Group, based in Alpharetta since 2014, focuses on B2B SaaS, fintech, cybersecurity and AI companies.",
    },
    {
        q: "Why hire an Atlanta based sales recruiter for tech sales?",
        a: "Metro Atlanta is a large tech market. CompTIA counts 220,549 tech workers in the Atlanta metro in 2025, tenth among US metros. Alpharetta alone has about 700 tech firms, including fintech anchors like Fiserv, Equifax and ADP. A local recruiter knows that talent pool firsthand.",
    },
    {
        q: "How much do sales recruiters in Atlanta charge?",
        a: "The Kas Group prices sales hiring three ways. Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five. Kas Milestone Search is $5,000 for an SDR or BDR, $7,500 for an AE and $10,000 for a senior AE or sales manager. Kas Directed Pursuit is priced on request.",
    },
    {
        q: "Does The Kas Group place sales talent outside Atlanta?",
        a: "Yes. The Kas Group is headquartered in Alpharetta, Georgia, and places sales talent and AI/ML engineers across North America.",
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

    const link = "text-blue-accent hover:underline";

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Sales Recruiters in <span className="text-blue-accent">Atlanta</span> for Tech and SaaS Teams
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        How sales hiring works in metro Atlanta, and how The Kas Group helps from its home base in Alpharetta.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> Short Answer
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            Sales recruiters in Atlanta help tech companies hire SDRs, AEs and sales leaders from one of the largest tech workforces in the US. The Kas Group has been based in Alpharetta since 2014. Kas Seat is $5,000 a month for up to two open sales roles. Kas Milestone Search starts at $5,000 for an SDR or BDR.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-accent" />
                            The Atlanta Tech Sales Talent Market
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Atlanta is a big and growing market for tech sales hiring. Three facts frame it.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">A Top 10 Tech Metro</h3>
                                <p className="text-grey-600 text-sm leading-relaxed"><a href={SRC.comptia} className={link}>CompTIA&apos;s State of the Tech Workforce 2026</a> counts 220,549 tech workers in metro Atlanta in 2025, tenth among US metros. It projects about 2,600 more in 2026.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">A Growing Metro</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">The <a href={SRC.census} className={link}>US Census Bureau</a> estimates metro Atlanta at 6,482,182 people in July 2025. It added 61,953 people in a year, third most of any US metro.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">The Alpharetta Tech Base</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">The <a href={SRC.alpharetta} className={link}>City of Alpharetta</a> reports about 700 tech firms, with fintech anchors like Fiserv, Equifax, Bakkt, LexisNexis and ADP, plus cybersecurity and software companies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <MapPin className="h-8 w-8 text-blue-accent" />
                            Sales Recruiters in Atlanta: How The Kas Group Works
                        </h2>
                        {/* TODO(Chris): add a Kas proof number for Atlanta here, e.g. Atlanta placements or average time to fill. Do not publish until Chris supplies the real figure. */}
                        <p className="text-lg text-grey-600 leading-relaxed">
                            The Kas Group has been headquartered in Alpharetta since 2014. We place SDRs, AEs and sales leaders for B2B SaaS, fintech, cybersecurity and AI companies, and AI/ML engineers for technical teams.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-lg text-grey-600">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000 a month for up to two open sales roles, $8,000 a month for three to five.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> $5,000 for an SDR or BDR, $7,500 for an AE, $10,000 for a senior AE or sales manager.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> pricing on request.</li>
                        </ul>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Details are on the <Link href="/programs" className={link}>programs page</Link>. For pay and hiring guidance, see <Link href="/guides/how-to-hire-senior-account-executive" className={link}>how to hire a senior account executive</Link>.
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

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base text-grey-600">
                            <li>State of the Tech Workforce 2026, CompTIA. Metro net tech employment, 2025 estimate and 2026 projection. <a href={SRC.comptia} className={link}>{SRC.comptia}</a></li>
                            <li>Vintage 2025 population estimates for metro areas, US Census Bureau, March 2026. <a href={SRC.census} className={link}>{SRC.census}</a></li>
                            <li>Technology, Connected Alpharetta, City of Alpharetta Economic Development. <a href={SRC.alpharetta} className={link}>{SRC.alpharetta}</a></li>
                        </ul>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Hiring Sales Talent in Atlanta?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email me the role and where the team sits. I will tell you what the Atlanta market looks like for it.
                        </p>
                        <a
                            href="mailto:chris@thekasgroup.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all relative z-10"
                        >
                            Email chris@thekasgroup.com
                            <ChevronRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
