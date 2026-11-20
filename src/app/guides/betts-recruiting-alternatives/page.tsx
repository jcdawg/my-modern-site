import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Betts Recruiting Alternatives for AE Hiring (2026)",
    description: "Betts Recruiting alternatives for B2B SaaS and tech AE hiring, compared on focus, fee model and AE coverage from each firm's own site, plus where The Kas Group fits.",
    path: "/guides/betts-recruiting-alternatives",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

type Firm = {
    name: string;
    url: string;
    bestFor: string;
    focus: string;
    model: string;
    aeLevels: string;
    facts: string;
    sources: { label: string; href: string }[];
};

const NAMED_FIRM: Firm = {
    name: "Betts Recruiting",
    url: "https://www.bettsrecruiting.com/",
    bestFor: "Tech companies hiring several GTM roles at once through a recruiter subscription.",
    focus: "Go to market recruiting (sales, marketing and customer success) for tech and tech enabled companies",
    model: "Recruiter subscription (RaaS), contingency search, executive search and a self sourcing platform",
    aeLevels: "SDRs through CROs",
    facts: "Betts describes itself as a go to market recruiting agency for tech, covering sales, marketing and customer success, with recruiters organized by industry. AI, SaaS, fintech and cybersecurity are among the industries it lists, and it works with companies from Pre seed through Series D.",
    sources: [{ label: "bettsrecruiting.com", href: "https://www.bettsrecruiting.com/" }],
};

const ALTERNATIVES: Firm[] = [
    {
        name: "The Kas Group",
        url: SITE_URL,
        bestFor: "B2B SaaS and tech teams hiring AEs and senior AEs that want a monthly Seat or a per hire Milestone fee.",
        focus: "Sales and GTM recruiting for B2B SaaS, AI and growth stage companies",
        model: "Kas Seat (monthly), Kas Milestone Search (per hire), Kas Directed Pursuit (on request)",
        aeLevels: "AEs, senior AEs and enterprise AEs, plus SDRs and sales managers",
        facts: "That is us, so weigh this list with that in mind. The Kas Group has recruited sales talent since 2014 from Alpharetta, and we screen every AE on quota in dollars and the deals they actually ran.",
        sources: [
            { label: "Sales recruiting", href: "/recruit/sales" },
            { label: "Programs and pricing", href: "/programs" },
        ],
    },
    {
        name: "Sales Talent Inc.",
        url: "https://salestalentinc.com/",
        bestFor: "Companies hiring SMB through strategic AEs, or sales talent across tech and other B2B lines.",
        focus: "Sales and marketing recruiting for software, SaaS, AI, technology, healthcare, industrial and general B2B companies",
        model: "Contingency search, plus retained search for critical hires such as sales leadership",
        aeLevels: "SMB, mid market, enterprise and strategic AEs",
        facts: "Sales Talent Inc. recruits sales and marketing roles across the US and Canada. Its technology practice works with Seed and VC funded startups through Series C and private equity owned firms.",
        sources: [
            { label: "salestalentinc.com", href: "https://salestalentinc.com/" },
            { label: "Technology sales recruiters", href: "https://salestalentinc.com/technology-sales-recruiters/" },
        ],
    },
    {
        name: "UltraTalent",
        url: "https://ultratalent.com/",
        bestFor: "SaaS, AI and tech companies hiring founding through strategic AEs, including outside the US.",
        focus: "Sales and GTM recruiting for B2B SaaS, AI and tech companies",
        model: "Contingency search and engaged search",
        aeLevels: "Founding, SMB, mid market, enterprise and strategic AEs",
        facts: "UltraTalent runs a dedicated AE practice and says it screens candidates on multi year quota attainment, deal size and sales motion. Its AE page covers hiring in the US, EMEA and APAC.",
        sources: [
            { label: "ultratalent.com", href: "https://ultratalent.com/" },
            { label: "AE recruiter page", href: "https://ultratalent.com/account-executive-recruiter/" },
        ],
    },
    {
        name: "Captivate Talent",
        url: "https://www.captivatetalent.com/",
        bestFor: "High growth tech companies hiring AEs alongside the rest of a US or Canada revenue team.",
        focus: "Revenue talent for high growth tech companies",
        model: "A go to market team for individual contributors and a separate executive team for leadership",
        aeLevels: "AEs and other revenue individual contributors",
        facts: "Captivate says it only recruits revenue talent for high growth tech companies, and only for US or Canada based roles.",
        sources: [{ label: "captivatetalent.com", href: "https://www.captivatetalent.com/" }],
    },
    {
        name: "Talentfoot",
        url: "https://www.talentfoot.com/sales-recruiting/",
        bestFor: "B2B companies hiring experienced AEs that want a personality assessment on every finalist.",
        focus: "Sales search for B2B companies, with SaaS and IT services among its industries",
        model: "Performance based fees scoped to company size and stage",
        aeLevels: "SMB, mid market and enterprise AEs",
        facts: "Talentfoot is a Chicago search firm. Finalists take the HOGAN assessment, and it does not take commission only, 1099 or junior sales roles.",
        sources: [{ label: "Talentfoot sales recruiting", href: "https://www.talentfoot.com/sales-recruiting/" }],
    },
    {
        name: "Peak Sales Recruiting",
        url: "https://www.peaksalesrecruiting.com/",
        bestFor: "B2B software and tech companies that want structured assessment on every AE candidate.",
        focus: "Sales recruiting for AI, SaaS and IT companies, from startups to large enterprises",
        model: "A four step process with track record verification, behavior based interviews, role playing and psychometric profiling",
        aeLevels: "Enterprise AEs among its technology roles",
        facts: "Peak recruits for B2B tech companies across the United States, Canada and Europe.",
        sources: [
            { label: "peaksalesrecruiting.com", href: "https://www.peaksalesrecruiting.com/" },
            { label: "Technology sales recruiters", href: "https://www.peaksalesrecruiting.com/sectors/technology-sales-recruiter/" },
        ],
    },
    {
        name: "TheLIONS",
        url: "https://www.thelions.com/",
        bestFor: "Enterprise SaaS and AI companies that do not want an exclusive recruiting agreement.",
        focus: "Tech sales talent, with Enterprise SaaS and AI among its core categories",
        model: "Its FAQ says it does not require exclusivity",
        aeLevels: "Enterprise and other AEs",
        facts: "TheLIONS has worked with tech sales talent and companies since 2010, and its roles include AEs, sales development and sales managers.",
        sources: [
            { label: "thelions.com", href: "https://www.thelions.com/" },
            { label: "FAQs", href: "https://www.thelions.com/faqs.html" },
        ],
    },
];

const FAQS = [
    {
        q: "Is Betts Recruiting a legitimate recruiting firm?",
        a: "Yes. Betts Recruiting is an operating go to market recruiting agency founded and led by CEO Carolyn Betts. Its site says it recruits sales, marketing and customer success talent for tech companies and has nearly 15 years of experience hiring GTM talent for SaaS companies.",
    },
    {
        q: "How does Betts Recruiting work?",
        a: "Betts lists four ways to work with it: a recruiter subscription it calls RaaS, which it describes as unlimited hires with full recruiter support; traditional contingency search; executive search for leadership roles; and a self sourcing recruitment platform.",
    },
    {
        q: "What is the most effective way to hire salespeople?",
        a: "Agree on the sales motion and the quota first. Then ask every finalist for attainment by year in dollars, have them walk you through two or three closed deals, and test them in a role play built on your real buyer.",
    },
    {
        q: "Should you go through a recruiting agency to hire sales reps?",
        a: "It pays off when you are hiring AEs who are not actively looking, hiring several reps at once, or have no one in house to run the search. For a single junior seat with strong inbound applicants, your own team may be enough.",
    },
    {
        q: "What does The Kas Group charge for AE and senior AE searches?",
        a: "Kas Milestone Search is $7,500 for an AE and $10,000 for a Senior AE / Sales Manager. Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above. Kas Directed Pursuit is on request.",
    },
];

export default function BettsRecruitingAlternatives() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Betts Recruiting alternatives for AE hiring",
        "url": `${SITE_URL}${PAGE.path}`,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": ALTERNATIVES.length,
        "itemListElement": ALTERNATIVES.map((f, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "Organization",
                "name": f.name,
                "url": f.url,
                "description": `Best for ${f.bestFor.charAt(0).toLowerCase()}${f.bestFor.slice(1)}`,
            },
        })),
    };

    const link = "text-blue-accent hover:underline font-semibold";
    const tableFirms = [NAMED_FIRM, ...ALTERNATIVES];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Betts Recruiting Alternatives</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Betts Recruiting <br className="hidden sm:block" /> <span className="text-blue-accent">Alternatives</span> for AE Hiring
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
                            Strong Betts Recruiting alternatives for B2B SaaS and tech AE hiring include <strong>The Kas Group</strong>, Sales Talent Inc., UltraTalent, Captivate Talent, Talentfoot, Peak Sales Recruiting and TheLIONS. Match the firm to your AE level and fee model. The Kas Group fits AE and senior AE searches, with a monthly Seat or a per hire Milestone fee.
                        </p>
                    </div>

                    <p className="text-sm text-grey-500 -mt-12">
                        Who this is for: founders, sales leaders and hiring managers comparing sales recruiting firms. Every firm description comes from that firm&apos;s own public website, checked November 20, 2026 and linked below. The Kas Group is our firm. We do not publish Kas placement or time to fill numbers here.
                    </p>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Betts Recruiting vs Alternatives, Side by Side
                        </h2>
                        <div className="overflow-x-auto rounded-2xl border border-grey-200">
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-grey-50 text-navy-900">
                                    <tr>
                                        <th className="p-4 font-bold">Firm</th>
                                        <th className="p-4 font-bold">Focus</th>
                                        <th className="p-4 font-bold">Engagement model</th>
                                        <th className="p-4 font-bold">AE levels named</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-grey-200 text-grey-600">
                                    {tableFirms.map((f) => (
                                        <tr key={f.name} className={f.name === "The Kas Group" ? "bg-blue-accent/5" : ""}>
                                            <td className="p-4 font-bold text-navy-900">{f.name}</td>
                                            <td className="p-4">{f.focus}</td>
                                            <td className="p-4">{f.model}</td>
                                            <td className="p-4">{f.aeLevels}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            Where Betts Recruiting Fits
                        </h2>
                        <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200 space-y-3">
                            <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Best for:</strong> {NAMED_FIRM.bestFor}</p>
                            <p className="text-grey-600 leading-relaxed">{NAMED_FIRM.facts} Its offerings include a recruiter subscription (RaaS), contingency search and executive search.</p>
                            <p className="text-sm text-grey-500">
                                Source:{" "}
                                {NAMED_FIRM.sources.map((s, j) => (
                                    <span key={s.href}>
                                        {j > 0 ? ", " : ""}
                                        <a href={s.href} className="text-blue-accent hover:underline" rel="noopener">{s.label}</a>
                                    </span>
                                ))}
                            </p>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Teams usually compare alternatives when they are filling one or two AE seats rather than a whole GTM team, want a per hire fee instead of a subscription, or want a firm built around one AE level. The list below covers those options.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-yellow-500" />
                            Betts Recruiting Alternatives for AE Hiring
                        </h2>
                        <ol className="space-y-6 list-none p-0">
                            {ALTERNATIVES.map((f, i) => (
                                <li
                                    key={f.name}
                                    className={i === 0 ? "p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5 space-y-3" : "p-8 rounded-2xl border border-grey-200 space-y-3"}
                                >
                                    <h3 className="text-2xl font-bold text-navy-900">{i + 1}. {f.name}</h3>
                                    <p className="text-grey-700"><strong className="text-navy-900">Best for:</strong> {f.bestFor}</p>
                                    <p className="text-grey-600 leading-relaxed">{f.facts}</p>
                                    <p className="text-sm text-grey-500">
                                        Source:{" "}
                                        {f.sources.map((s, j) => (
                                            <span key={s.href}>
                                                {j > 0 ? ", " : ""}
                                                {s.href.startsWith("/") ? (
                                                    <Link href={s.href} className="text-blue-accent hover:underline">{s.label}</Link>
                                                ) : (
                                                    <a href={s.href} className="text-blue-accent hover:underline" rel="noopener">{s.label}</a>
                                                )}
                                            </span>
                                        ))}
                                    </p>
                                </li>
                            ))}
                        </ol>
                        <p className="text-grey-600 leading-relaxed">
                            Also looking at Sales Talent Inc.? See these <Link href="/guides/sales-talent-inc-alternatives" className={link}>Sales Talent Inc. alternatives</Link>. For a ranked list built around AE seats, see the <Link href="/guides/sales-recruiters-for-account-executives" className={link}>best sales recruiters for account executives</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            Where The Kas Group Fits for AE and Senior AE Hires
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">AE and Senior AE First</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">We recruit AEs, senior AEs and enterprise AEs for B2B SaaS and tech companies, and screen every one on quota in dollars and real deals.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Pick Your Fee Model</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Kas Seat is monthly for teams hiring several sales roles. Kas Milestone Search is per hire for single SDR, AE or sales manager seats.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Direct Access</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">You work directly with The Kas Group&apos;s founder, Chris Stinson.</p>
                            </div>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-grey-700">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> SDR $5,000, AE $7,500, Senior AE / Sales Manager $10,000.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> on request.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            Level specific playbooks: <Link href="/guides/how-to-hire-account-executive" className={link}>how to hire an account executive</Link> and <Link href="/guides/how-to-hire-senior-account-executive" className={link}>how to hire a senior account executive</Link>. Side note: we also run VP Sales and CRO searches, but those are quoted separately and this page stays on AE seats.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Before You Brief Any Recruiter
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Set the offer against current <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>, decide whether the seat is mid market or enterprise, and write down the deal size the rep will carry. For enterprise seats, our <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>enterprise AE hiring guide</Link> covers what to screen for.
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
                        <h2 className="text-2xl font-bold text-navy-900">Related Guides</h2>
                        <ul className="list-disc pl-6 space-y-2 text-grey-700">
                            <li><Link href="/guides/sales-talent-inc-alternatives" className={link}>Sales Talent Inc. alternatives</Link></li>
                            <li><Link href="/guides/sales-recruiters-for-account-executives" className={link}>Best sales recruiters for account executives</Link></li>
                            <li><Link href="/guides/best-sales-recruiting-agencies-2026" className={link}>Best sales recruiting agencies for 2026</Link></li>
                            <li><Link href="/guides/affordable-alternatives-korn-ferry" className={link}>Korn Ferry alternatives</Link></li>
                        </ul>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Hiring an AE or Senior AE?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Tell us the level, the deal size and the sales motion, and we will recommend Kas Seat, Kas Milestone Search or Kas Directed Pursuit.
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
