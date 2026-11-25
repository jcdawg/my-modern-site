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
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
    bridgeAe: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    bridgeSdr: "https://www.bridgegroupinc.com/research/2025-sdr-models-metrics-report-the-bridge-group",
    compyl: "https://jobs.ashbyhq.com/compyl/5aa4c145-c120-459f-a64c-2b5ce2c212f5",
};

type Firm = {
    name: string;
    url: string;
    bestFor: string;
    seat: string;
    model: string;
    facts: string;
    sources: { label: string; href: string }[];
};

const FIRMS: Firm[] = [
    {
        name: "The Kas Group",
        url: SITE_URL,
        bestFor: "AI and B2B SaaS companies hiring AEs, SDRs and GTM engineers on a monthly Seat, with PhD led technical vetting when the seat is an AI or data role.",
        seat: "AE and senior AE seats at AI and B2B SaaS companies; also SDR and sales manager seats",
        model: "Kas Seat monthly program or Kas Milestone Search. AI, ML and data technical roles are success fee or retained only.",
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
        seat: "SDR and AE teams at AI and tech companies",
        model: "Recruiter subscription (RaaS), contingency search and executive search",
        facts: "Betts calls itself a go to market recruiting agency for tech, covering sales, marketing and customer success, with recruiters organized by industry. It offers a recruiter subscription model it calls RaaS, plus contingency search and executive search, and says it has nearly 15 years of experience hiring GTM talent for SaaS companies, from SDRs to CROs.",
        sources: [{ label: "bettsrecruiting.com", href: "https://www.bettsrecruiting.com/" }],
    },
    {
        name: "Captivate Talent",
        url: "https://www.captivatetalent.com/",
        bestFor: "High growth tech startups hiring across the whole revenue team, including sales engineers and GTM engineers.",
        seat: "Revenue team hires at high growth tech startups, including sales engineers and GTM engineers",
        model: "Contingency, container and embedded options",
        facts: "Captivate says it only recruits revenue talent for high growth tech companies. It runs a go to market team for individual contributors and an executive team for leadership, and its RevOps recruiting covers sales engineers and GTM engineers. It places roles in the US and Canada.",
        sources: [
            { label: "captivatetalent.com", href: "https://www.captivatetalent.com/" },
            { label: "FAQ", href: "https://www.captivatetalent.com/faq" },
        ],
    },
    {
        name: "UltraTalent",
        url: "https://ultratalent.com/",
        bestFor: "SaaS and AI companies hiring founding, mid market and enterprise AEs, including teams hiring in the US, EMEA and APAC.",
        seat: "Founding, SMB, mid market, enterprise and strategic AEs at SaaS and AI companies",
        model: "Contingency and engaged search",
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
        seat: "AEs and sales development reps at VC backed AI and enterprise SaaS startups",
        model: "Success fees, with an optional retainer; no exclusivity required",
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
        seat: "BDRs, sales engineers and enterprise AEs at AI, SaaS and IT companies",
        model: "Sales executive search and sales team RPO, with a four step assessment",
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
        seat: "BDRs, AEs and sales engineers at software and tech companies",
        model: "Contingency search with no upfront cost, or Sourcing as a Service",
        facts: "Treeline has recruited sales talent since 2001. It recruits across B2B industries including software and technology, for roles from BDRs and enterprise sales executives to sales engineers and sales directors. It offers contingency search with no upfront cost and a lower cost Sourcing as a Service option.",
        sources: [
            { label: "treelineinc.com", href: "https://www.treelineinc.com/" },
            { label: "Technology sales recruiters", href: "https://www.treelineinc.com/technology-sales-recruiters/" },
        ],
    },
    {
        name: "s1",
        url: "https://www.stage1gtm.com/",
        bestFor: "AI and SaaS startups hiring founding AEs, sales engineers and GTM engineers.",
        seat: "Founding AEs, AEs, sales engineers and GTM engineers at AI and SaaS startups",
        model: "Contingency search (a percentage of first year OTE) or retained search",
        facts: "s1 describes itself as a GTM only recruiting firm for AI and SaaS startups. Its AI startup practice recruits founding AEs, account executives, sales engineers, GTM engineers, customer success managers and sales leaders in the US, Canada and the UK. It says every search is run by former GTM operators, and it offers contingency and retained searches.",
        sources: [
            { label: "stage1gtm.com", href: "https://www.stage1gtm.com/" },
            { label: "AI startup sales recruiting", href: "https://www.stage1gtm.com/ai-startup-sales-recruiting" },
            { label: "FAQ", href: "https://www.stage1gtm.com/faq" },
        ],
    },
    {
        name: "Formative Search Partners",
        url: "https://www.formativesp.com/",
        bestFor: "AI native companies hiring a GTM leader rather than an AE.",
        seat: "Head of, VP and C level GTM leaders at AI native companies",
        model: "Retained executive search",
        facts: "Formative describes itself as a retained executive search firm for AI native GTM and engineering leaders. It lists AI and ML among the sectors it covers and leads Head of, VP and C level searches across sales, marketing and customer success. This is the leadership pick on the list.",
        sources: [
            { label: "formativesp.com", href: "https://www.formativesp.com/" },
            { label: "GTM search", href: "https://www.formativesp.com/gtm-search" },
        ],
    },
];

const OTE = [
    { seat: "SDR", base: "$60K", ote: "$85K", src: "RepVue 2026", href: SRC.repvue },
    { seat: "Mid market AE", base: "$95K", ote: "$180K", src: "RepVue 2026", href: SRC.repvue },
    { seat: "All AEs (reference)", base: "$100K", ote: "$200K", src: "RepVue 2026", href: SRC.repvue },
    { seat: "Senior AE", base: "$120K to $150K", ote: "$240K to $300K", src: "Compyl posting, October 2026", href: SRC.compyl },
    { seat: "Enterprise AE", base: "$140K", ote: "$275K", src: "RepVue 2026", href: SRC.repvue },
];

const FAQS = [
    {
        q: "Who are the best sales recruiters for AI companies in 2026?",
        a: "This guide ranks The Kas Group, Betts Recruiting, Captivate Talent, UltraTalent, TheLIONS, Peak Sales Recruiting, Treeline, s1 and Formative Search Partners. The Kas Group ranks first for AI and B2B SaaS AE hiring. Formative is the pick for GTM leadership searches.",
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
        a: "Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above. Kas Milestone Search is $5,000 for an SDR, $7,500 for an AE and $10,000 for a senior AE or sales manager. Kas Directed Pursuit is on request. AI, ML and data technical roles are success fee or retained only, quoted per search.",
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
        name: PAGE.headline,
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
                description: `Best for: ${f.bestFor}`,
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
                    <p className="text-sm text-grey-500">Updated Nov 25, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">
                    <div className="p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent space-y-3">
                        <h2 className="text-xl font-bold text-navy-900">Direct answer</h2>
                        <p className="text-base text-grey-700 leading-relaxed">
                            The best sales recruiters for AI companies in 2026 are The Kas Group, Betts Recruiting, Captivate Talent, UltraTalent, TheLIONS, Peak Sales Recruiting, Treeline, s1 and Formative Search Partners. Pick by seat: AE and SDR hiring, technical sellers like GTM engineers, or leadership. The Kas Group ranks first for AI and B2B SaaS AE hiring.
                        </p>
                    </div>

                    <p className="text-sm text-grey-500">
                        How to read this list: every firm description comes from that firm&apos;s own public website, linked under each entry. The Kas Group is our firm. We do not publish Kas placement or time to fill numbers here.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>Sales Recruiters for AI Companies Compared</h2>
                        <p>
                            The short version: The Kas Group fits AE and senior AE seats at AI companies on the Kas Seat or Kas Milestone Search programs, while AI, ML and data technical roles are success fee or retained only. Every other row comes from that firm&apos;s own public site, linked in the ranked list below.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-base border border-grey-200">
                                <thead className="bg-grey-50 text-navy-900">
                                    <tr>
                                        <th className="p-3 border-b border-grey-200">Firm</th>
                                        <th className="p-3 border-b border-grey-200">Seat it fits</th>
                                        <th className="p-3 border-b border-grey-200">Engagement model</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {FIRMS.map((f) => (
                                        <tr key={f.name} className="align-top">
                                            <td className="p-3 border-b border-grey-200 font-semibold text-navy-900">{f.name}</td>
                                            <td className="p-3 border-b border-grey-200">{f.seat}</td>
                                            <td className="p-3 border-b border-grey-200">{f.model}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-base text-grey-600">
                            Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above. Kas Milestone Search is $7,500 for an AE and $10,000 for a senior AE or sales manager. See the <Link href="/programs" className={link}>programs page</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What AI Sales Seats Pay: OTE Reference</h2>
                        <p>
                            Comp is the first thing a good recruiter will pressure test. These are B2B sales figures from named public sources, not AI only data and not Kas placement data. The full breakdown is in our <Link href="/guides/account-executive-ote-by-level" className={link}>account executive OTE by level guide</Link>.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-base border border-grey-200">
                                <thead className="bg-grey-50 text-navy-900">
                                    <tr>
                                        <th className="p-3 border-b border-grey-200">Seat</th>
                                        <th className="p-3 border-b border-grey-200">Base</th>
                                        <th className="p-3 border-b border-grey-200">OTE</th>
                                        <th className="p-3 border-b border-grey-200">Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {OTE.map((r) => (
                                        <tr key={r.seat} className="align-top">
                                            <td className="p-3 border-b border-grey-200 font-semibold text-navy-900">{r.seat}</td>
                                            <td className="p-3 border-b border-grey-200">{r.base}</td>
                                            <td className="p-3 border-b border-grey-200">{r.ote}</td>
                                            <td className="p-3 border-b border-grey-200">
                                                <a href={r.href} className={link} rel="noopener">{r.src}</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-base text-grey-600">
                            RepVue figures are self reported medians from its 2026 sales salary guide, July 2026 update. <a href={SRC.bridgeAe} className={link}>The Bridge Group&apos;s 2026 AE survey</a> of 158 B2B companies also found a median AE OTE of $200K, and <a href={SRC.bridgeSdr} className={link}>its 2025 SDR survey</a> of 351 B2B companies found a median SDR OTE of $80K. No survey we found reports a separate senior AE median, so that row is a single dated posting.
                        </p>
                    </div>

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
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> $5,000 for an SDR, $7,500 for an AE and $10,000 for a senior AE or sales manager. Milestone covers SDR, AE and sales manager seats only.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> on request.</li>
                            <li><strong className="text-navy-900">AI, ML and data technical roles:</strong> success fee or retained only, quoted per search.</li>
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
                            <li>Sales Salary Guide: What Sales Reps are Earning in 2026, RepVue, July 2026 update. Self reported data. <a href={SRC.repvue} className={link}>{SRC.repvue}</a></li>
                            <li>AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. <a href={SRC.bridgeAe} className={link}>{SRC.bridgeAe}</a></li>
                            <li>SDR Models &amp; Metrics Report, The Bridge Group, 2025. Survey of 351 B2B companies. <a href={SRC.bridgeSdr} className={link}>{SRC.bridgeSdr}</a></li>
                            <li>Senior Account Executive posting, Compyl, live October 2026. Single employer example. <a href={SRC.compyl} className={link}>{SRC.compyl}</a></li>
                            <li>Sales Engineers, Occupational Outlook Handbook, U.S. Bureau of Labor Statistics. <a href={SRC.bls} className={link}>{SRC.bls}</a></li>
                            <li>TechCrunch Disrupt 2026: Clay&apos;s Kareem Amin on the rise of the GTM engineer, TechCrunch, October 2, 2026. <a href={SRC.techcrunch} className={link}>{SRC.techcrunch}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
