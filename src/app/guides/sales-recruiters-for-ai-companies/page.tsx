import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Best Sales Recruiters for AI Companies (2026)",
    description:
        "Ranked list of the best sales recruiters for AI companies in 2026, with what each firm is best for and what to look for when you hire AEs and GTM engineers.",
    path: "/guides/sales-recruiters-for-ai-companies",
    headline: "Best Sales Recruiters for AI Companies (2026)",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    bls: "https://www.bls.gov/ooh/sales/sales-engineers.htm",
    techcrunch: "https://techcrunch.com/2026/10/02/techcrunch-disrupt-2026-clays-kareem-amin-on-the-rise-of-the-gtm-engineer/",
};

type Firm = {
    name: string;
    url: string;
    bestFor: string;
    facts: string;
    sources: { label: string; href: string }[];
};

const FIRMS: Firm[] = [
    {
        name: "The Kas Group",
        url: SITE_URL,
        bestFor: "AI and B2B SaaS companies hiring AEs, SDRs and GTM engineers on a monthly Seat, with PhD led technical vetting when the seat is an AI or data role.",
        facts: "That is us, so weigh the ranking with that in mind. The Kas Group has recruited sales and GTM talent since 2014 from Alpharetta. We work AE, SDR and GTM engineer seats for B2B SaaS, AI and ML startups and growth stage companies. For AI, data and ML roles, Derek Norton, our technical advisor, who holds a PhD in Statistics, personally vets candidates.",
        sources: [
            { label: "AI recruiting", href: "/recruit/ai" },
            { label: "Programs and pricing", href: "/programs" },
        ],
    },
    {
        name: "Betts Recruiting",
        url: "https://www.bettsrecruiting.com/",
        bestFor: "AI and tech companies scaling SDR and AE teams through a recruiter subscription.",
        facts: "Betts calls itself a go to market recruiting agency for tech, covering sales, marketing and customer success, with recruiters organized by industry. It offers a recruiter subscription model it calls RaaS, plus contingency search and executive search, and says it has nearly 15 years of experience hiring GTM talent for SaaS companies, from SDRs to CROs.",
        sources: [{ label: "bettsrecruiting.com", href: "https://www.bettsrecruiting.com/" }],
    },
    {
        name: "Captivate Talent",
        url: "https://www.captivatetalent.com/",
        bestFor: "High growth tech startups hiring across the whole revenue team, including sales engineers and GTM engineers.",
        facts: "Captivate says it only recruits revenue talent for high growth tech companies. It runs a go to market team for individual contributors and an executive team for leadership, and its RevOps recruiting covers sales engineers and GTM engineers. It places roles in the US and Canada.",
        sources: [{ label: "captivatetalent.com", href: "https://www.captivatetalent.com/" }],
    },
    {
        name: "UltraTalent",
        url: "https://ultratalent.com/",
        bestFor: "SaaS and AI companies hiring founding, mid market and enterprise AEs, including teams hiring in the US, EMEA and APAC.",
        facts: "UltraTalent describes itself as a specialist GTM and sales recruitment partner for SaaS, AI and technology companies. Its AE practice places founding, SMB, mid market, enterprise and strategic AEs and screens on multi year quota attainment, deal size and sales motion. It was founded by Pree Sarkar, a former AE and Sales VP, and publishes contingency and engaged search options.",
        sources: [
            { label: "ultratalent.com", href: "https://ultratalent.com/" },
            { label: "AE recruiter page", href: "https://ultratalent.com/account-executive-recruiter/" },
            { label: "About", href: "https://ultratalent.com/about-us/" },
        ],
    },
    {
        name: "TheLIONS",
        url: "https://www.thelions.com/",
        bestFor: "VC backed AI and enterprise SaaS startups hiring AEs and sales development reps across US metros.",
        facts: "TheLIONS has worked with tech sales talent and companies since 2010 and lists Enterprise SaaS and AI among its core categories. Its roles include enterprise and other AEs, sales development, sales managers and solutions engineers. It was based in San Francisco for over a decade, has run fully remote since 2020, and says it does not require exclusivity.",
        sources: [
            { label: "thelions.com", href: "https://www.thelions.com/" },
            { label: "FAQs", href: "https://www.thelions.com/faqs.html" },
        ],
    },
    {
        name: "Peak Sales Recruiting",
        url: "https://www.peaksalesrecruiting.com/",
        bestFor: "B2B tech companies that want a structured assessment run on every sales candidate.",
        facts: "Peak says it has extensive experience recruiting sales talent for AI, SaaS and IT companies, from startups to large enterprises. Its technology practice covers roles from BDRs and sales engineers to enterprise AEs, using a four step process that includes track record verification, behavior based interviews, role playing and psychometric profiling. It recruits across the United States, Canada and Europe.",
        sources: [
            { label: "peaksalesrecruiting.com", href: "https://www.peaksalesrecruiting.com/" },
            { label: "Technology sales recruiters", href: "https://www.peaksalesrecruiting.com/sectors/technology-sales-recruiter/" },
        ],
    },
    {
        name: "Treeline",
        url: "https://www.treelineinc.com/",
        bestFor: "Software and tech companies that want contingency search for AEs and sales engineers.",
        facts: "Treeline has recruited sales talent since 2001. It recruits across B2B industries including software and technology, for roles from BDRs and enterprise sales executives to sales engineers and sales directors. It offers contingency search with no upfront cost and a lower cost Sourcing as a Service option.",
        sources: [
            { label: "treelineinc.com", href: "https://www.treelineinc.com/" },
            { label: "Technology sales recruiters", href: "https://www.treelineinc.com/technology-sales-recruiters/" },
        ],
    },
    {
        name: "Formative Search Partners",
        url: "https://www.formativesp.com/",
        bestFor: "AI native companies hiring a GTM leader rather than an AE.",
        facts: "Formative describes itself as a retained executive search firm for AI native GTM and engineering leaders. It lists AI and ML among the sectors it covers and leads Head of, VP and C level searches across sales, marketing and customer success. This is the leadership pick on the list.",
        sources: [
            { label: "formativesp.com", href: "https://www.formativesp.com/" },
            { label: "GTM search", href: "https://www.formativesp.com/gtm-search" },
        ],
    },
];

const FAQS = [
    {
        q: "Who are the best sales recruiters for AI companies in 2026?",
        a: "This guide ranks The Kas Group, Betts Recruiting, Captivate Talent, UltraTalent, TheLIONS, Peak Sales Recruiting, Treeline and Formative Search Partners. The Kas Group ranks first for AI and B2B SaaS AE hiring. Formative is the pick for GTM leadership searches.",
    },
    {
        q: "What should a sales recruiter for an AI company screen for?",
        a: "Proof the candidate has sold a technical product to a technical buyer, deals that look like yours in size and cycle, and the ability to explain the product without leaning on a sales engineer for every call. For GTM engineer seats, ask for a workflow they actually built.",
    },
    {
        q: "Should an AI startup hire an AE or a GTM engineer first?",
        a: "If deals are stalling at the close, hire the AE. If you have no repeatable pipeline and the founder is still prospecting by hand, a GTM engineer who builds outbound systems can come first. Many AI teams end up needing both.",
    },
    {
        q: "How much does The Kas Group charge to recruit sales roles for AI companies?",
        a: "Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above. Kas Directed Pursuit is on request. AI and ML technical roles are quote only.",
    },
    {
        q: "Does The Kas Group recruit VP Sales for AI companies?",
        a: "Yes, The Kas Group also runs VP Sales searches. This guide focuses on AE and GTM engineer seats because that is where most AI companies start hiring.",
    },
];

export default function SalesRecruitersForAiCompanies() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Best sales recruiters for AI companies (2026)",
        url: `${SITE_URL}${PAGE.path}`,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: FIRMS.length,
        itemListElement: FIRMS.map((f, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "Organization",
                name: f.name,
                url: f.url,
                description: `Best for ${f.bestFor.charAt(0).toLowerCase()}${f.bestFor.slice(1)}`,
            },
        })),
    };

    const link = "text-blue-accent hover:underline";
    const h2 = "text-3xl font-bold text-navy-900";

    return (
        <div className="bg-white">
            <ArticleJsonLd title={PAGE.title} description={PAGE.description} path={PAGE.path} headline={PAGE.headline} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Sales Recruiters for AI Companies</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        Best Sales Recruiters for AI Companies (2026)
                    </h1>
                    <p className="text-sm text-grey-500">November 18, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">
                    <div className="p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent space-y-3">
                        <h2 className="text-xl font-bold text-navy-900">Direct answer</h2>
                        <p className="text-base text-grey-700 leading-relaxed">
                            The best sales recruiters for AI companies in 2026 are The Kas Group, Betts Recruiting, Captivate Talent, UltraTalent, TheLIONS, Peak Sales Recruiting, Treeline and Formative Search Partners. Pick by seat: AE and SDR hiring, technical sellers like GTM engineers, or leadership. The Kas Group ranks first for AI and B2B SaaS AE hiring.
                        </p>
                    </div>

                    <p className="text-sm text-grey-500">
                        How to read this list: every firm description comes from that firm&apos;s own public website, linked under each entry. The Kas Group is our firm. We do not publish Kas placement or time to fill numbers here.
                    </p>

                    <div className="space-y-6">
                        <h2 className={h2}>Top Sales Recruiters for AI Companies, Ranked</h2>
                        <ol className="space-y-6 list-none p-0">
                            {FIRMS.map((f, i) => (
                                <li
                                    key={f.name}
                                    className={i === 0 ? "p-6 rounded-2xl border-2 border-blue-accent bg-blue-accent/5 space-y-3" : "p-6 rounded-2xl border border-grey-200 space-y-3"}
                                >
                                    <h3 className="text-2xl font-bold text-navy-900">
                                        {i + 1}. {f.name}
                                    </h3>
                                    <p className="text-base">
                                        <strong className="text-navy-900">Best for:</strong> {f.bestFor}
                                    </p>
                                    <p className="text-base text-grey-600">{f.facts}</p>
                                    <p className="text-sm text-grey-500">
                                        Source:{" "}
                                        {f.sources.map((s, j) => (
                                            <span key={s.href}>
                                                {j > 0 ? ", " : ""}
                                                {s.href.startsWith("/") ? (
                                                    <Link href={s.href} className={link}>{s.label}</Link>
                                                ) : (
                                                    <a href={s.href} className={link} rel="noopener">{s.label}</a>
                                                )}
                                            </span>
                                        ))}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200 space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Hiring for an AI company now?</h2>
                        <p className="text-base">
                            Tell us the seat, the buyer and the deal size. You get a straight read on the search and which program fits.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all text-base"
                            >
                                Schedule a consultation
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link href="/programs" className={`${link} font-semibold self-center text-base`}>
                                See programs and pricing
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How We Ranked</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">AI and tech focus:</strong> the firm says on its own site that it recruits for AI, SaaS or tech companies.</li>
                            <li><strong className="text-navy-900">AE and individual contributor coverage:</strong> AE and SDR seats ranked above leadership only search, because that is where most AI companies start.</li>
                            <li><strong className="text-navy-900">Technical seller coverage:</strong> sales engineer, solutions engineer or GTM engineer roles listed on the firm&apos;s site.</li>
                            <li><strong className="text-navy-900">Clear engagement model:</strong> the firm explains how it works and charges on its public pages.</li>
                        </ul>
                        <p>
                            We used public pages only, not client surveys or placement data. The Kas Group is our firm, and we rank it first because AI and B2B SaaS AE and GTM engineer hiring is the work we do every day. Check every firm yourself before you sign.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What to Look for in an AI Sales Recruiter</h2>
                        <h3 className="text-xl font-bold text-navy-900">AE seats come first</h3>
                        <p>
                            Most AI companies need closers before anything else. A good recruiter screens AEs on deals they actually ran: deal size, sales cycle, who the buyer was, and how they won. Ask the recruiter how they check that the candidate owned the deal and did not just sit on it. Our <Link href="/guides/how-to-hire-account-executive" className={link}>how to hire an AE guide</Link> and <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions</Link> cover the screen.
                        </p>
                        <h3 className="text-xl font-bold text-navy-900">Selling a technical AI product</h3>
                        <p>
                            AI buyers are often engineers, data leaders or security teams. The rep has to explain how the product works, where it fails, and what it takes to deploy, without handing every question to a sales engineer. My view: the best AI AEs have sold to technical buyers before, even if the product was not AI. Ask the recruiter to show you candidates who sold infrastructure, data or developer tools. The <a href={SRC.bls} className={link}>BLS profile of sales engineers</a> is a useful baseline for the technical seller role.
                        </p>
                        <h3 className="text-xl font-bold text-navy-900">GTM engineer seats</h3>
                        <p>
                            <a href={SRC.techcrunch} className={link}>TechCrunch reports</a> that Clay coined the GTM engineer title in 2023 for people who build automated revenue workflows. That is a different hire from an AE. A recruiter should ask for a workflow the candidate shipped and how sales used it, not just a tool list. See <Link href="/guides/gtm-engineer-recruiting" className={link}>GTM engineer recruiting</Link> for the full screen.
                        </p>
                        <p className="text-base text-grey-600">
                            Side note on leadership: if the seat is VP Sales or CRO, a retained leadership search like Formative or a broader <Link href="/guides/best-sales-recruiting-agencies-2026" className={link}>sales recruiting agency</Link> may fit better than an AE focused firm.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Works With AI Companies</h2>
                        <p>
                            We recruit AEs, SDRs and GTM engineers for AI and B2B SaaS teams. When the seat is an AI, data or ML role, Derek Norton, our technical advisor, who holds a PhD in Statistics, personally runs the technical vetting. That PhD led vetting covers AI and data roles only, not sales seats. More on that on our <Link href="/recruit/ai" className={link}>AI recruiting page</Link>.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> on request.</li>
                            <li><strong className="text-navy-900">AI and ML technical roles:</strong> quote only.</li>
                        </ul>
                        <p>
                            Details are on the <Link href="/programs" className={link}>programs page</Link>, or <Link href="/contact" className={link}>contact us</Link> to talk through your open seats.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className={h2}>Frequently Asked Questions</h2>
                        {FAQS.map((f) => (
                            <div key={f.q} className="space-y-2">
                                <h3 className="font-bold text-navy-900 text-xl">{f.q}</h3>
                                <p className="text-grey-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Related Guides</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><Link href="/guides/best-sales-recruiting-agencies-2026" className={link}>Best sales recruiting agencies for 2026</Link></li>
                            <li><Link href="/recruit/ai" className={link}>AI, ML and data recruiting at The Kas Group</Link></li>
                            <li><Link href="/guides/gtm-engineer-recruiting" className={link}>GTM engineer recruiting</Link></li>
                            <li><Link href="/guides/best-recruiters-saas-startups-sales" className={link}>Best SaaS sales recruiters for startups</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            {FIRMS.slice(1).map((f) => (
                                <li key={f.name}>
                                    {f.name}, company website:{" "}
                                    {f.sources.map((s, j) => (
                                        <span key={s.href}>
                                            {j > 0 ? ", " : ""}
                                            <a href={s.href} className={link} rel="noopener">{s.href}</a>
                                        </span>
                                    ))}
                                </li>
                            ))}
                            <li>Sales Engineers, Occupational Outlook Handbook, U.S. Bureau of Labor Statistics. <a href={SRC.bls} className={link}>{SRC.bls}</a></li>
                            <li>TechCrunch Disrupt 2026: Clay&apos;s Kareem Amin on the rise of the GTM engineer, TechCrunch, October 2, 2026. <a href={SRC.techcrunch} className={link}>{SRC.techcrunch}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
