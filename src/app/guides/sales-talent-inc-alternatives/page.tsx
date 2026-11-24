import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Sales Talent Inc. Alternatives for AE Hiring (2026)",
    description: "Sales Talent Inc. alternatives for B2B SaaS and tech AE hiring, compared side by side from each firm's own site, and where The Kas Group fits for AE and senior AE seats.",
    path: "/guides/sales-talent-inc-alternatives",
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
    name: "Sales Talent Inc.",
    url: "https://salestalentinc.com/",
    bestFor: "Companies hiring sales talent across tech and other B2B lines such as healthcare or industrial.",
    focus: "Sales and marketing recruiting for software, SaaS, AI, technology, healthcare, industrial and general B2B companies",
    model: "Contingency search, plus retained search for critical hires such as sales leadership",
    aeLevels: "SMB, mid market, enterprise and strategic AEs",
    facts: "Sales Talent Inc. recruits sales reps, sales engineers, customer success, sales operations, marketing and sales leaders across the US and Canada. Its technology practice works with Seed and VC funded startups through Series C and private equity owned firms.",
    sources: [
        { label: "salestalentinc.com", href: "https://salestalentinc.com/" },
        { label: "Technology sales recruiters", href: "https://salestalentinc.com/technology-sales-recruiters/" },
        { label: "About Sales Talent", href: "https://salestalentinc.com/about-us/" },
    ],
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
        name: "Betts Recruiting",
        url: "https://www.bettsrecruiting.com/",
        bestFor: "Tech companies hiring several GTM roles at once through a recruiter subscription.",
        focus: "Go to market recruiting (sales, marketing and customer success) for tech and tech enabled companies",
        model: "Recruiter subscription (RaaS), contingency search, executive search and a self sourcing platform",
        aeLevels: "SDRs through CROs",
        facts: "Betts organizes its recruiters by industry, with AI, SaaS, fintech and cybersecurity among them, and works with companies from Pre seed through Series D.",
        sources: [{ label: "bettsrecruiting.com", href: "https://www.bettsrecruiting.com/" }],
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
        name: "Treeline",
        url: "https://www.treelineinc.com/",
        bestFor: "Software and tech companies that want contingency search for AE and enterprise sales seats.",
        focus: "Sales recruiting across B2B industries, including software and technology",
        model: "Contingency search with no upfront cost, plus a Sourcing as a Service option",
        aeLevels: "BDRs and account managers through enterprise sales executives",
        facts: "Treeline has recruited sales talent since 2001.",
        sources: [
            { label: "treelineinc.com", href: "https://www.treelineinc.com/" },
            { label: "Technology sales recruiters", href: "https://www.treelineinc.com/technology-sales-recruiters/" },
        ],
    },
];

const FAQS = [
    {
        q: "Is Sales Talent Inc. a legitimate sales recruiting firm?",
        a: "Yes. Sales Talent Inc. is an operating sales and marketing recruiting firm led by its Seattle based founder and president, Chris Carlson. Its site says it places sales, customer success, marketing and sales leadership roles for software, AI, technology, healthcare, industrial and general B2B companies across the US and Canada.",
    },
    {
        q: "What is the best recruiting agency for sales roles?",
        a: "It depends on the role, the level and how you want to pay. For B2B SaaS and tech AE hiring, this guide lists The Kas Group first, followed by UltraTalent, Betts Recruiting, Captivate Talent, Talentfoot, Peak Sales Recruiting and Treeline. Compare them on AE coverage, vetting and fee model.",
    },
    {
        q: "What is the best way to hire sales reps?",
        a: "Write down the motion, deal size and quota before you source. Then verify attainment in dollars, walk through real deals, and run a role play that matches your sales cycle. Use a recruiter when you need reach into reps who are not looking.",
    },
    {
        q: "Is it worth using a recruitment agency to hire AEs?",
        a: "Usually, when the seat is senior, the pool is passive, or your team has no time to source. If you already get a steady flow of qualified applicants and have an internal recruiter, you may not need one.",
    },
    {
        q: "How much does The Kas Group charge to recruit an AE?",
        a: "Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above. Kas Milestone Search is $7,500 for an AE and $10,000 for a Senior AE / Sales Manager. Kas Directed Pursuit is on request.",
    },
];

export default function SalesTalentIncAlternatives() {
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
        "name": "Sales Talent Inc. alternatives for AE hiring",
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
                        <span className="text-grey-600">Sales Talent Inc. Alternatives</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Sales Talent Inc. <br className="hidden sm:block" /> <span className="text-blue-accent">Alternatives</span> for AE Hiring
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
                            The best Sales Talent Inc. alternatives for B2B SaaS and tech AE hiring are <strong>The Kas Group</strong>, UltraTalent, Betts Recruiting, Captivate Talent, Talentfoot, Peak Sales Recruiting and Treeline. Choose by AE level, deal size and fee model. The Kas Group fits teams hiring AEs and senior AEs that want a monthly Seat or a per hire Milestone fee.
                        </p>
                    </div>

                    <p className="text-sm text-grey-500 -mt-12">
                        Who this is for: founders, sales leaders and hiring managers comparing sales recruiting firms. Every firm description comes from that firm&apos;s own public website, checked November 20, 2026 and linked below. The Kas Group is our firm. We do not publish Kas placement or time to fill numbers here.
                    </p>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Sales Talent Inc. vs Alternatives, Side by Side
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
                            Where Sales Talent Inc. Fits
                        </h2>
                        <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200 space-y-3">
                            <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Best for:</strong> {NAMED_FIRM.bestFor}</p>
                            <p className="text-grey-600 leading-relaxed">{NAMED_FIRM.facts} It also offers retained search for critical hires such as sales leadership roles.</p>
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
                            Teams usually look at alternatives when they want a firm that only does tech, a different fee model, or deeper focus on one AE level. The list below covers those options.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-yellow-500" />
                            Sales Talent Inc. Alternatives for AE Hiring
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
                            Weighing Betts or Quota Crushers too? See these <Link href="/guides/betts-recruiting-alternatives" className={link}>Betts Recruiting alternatives</Link> and <Link href="/guides/quota-crushers-alternatives" className={link}>Quota Crushers alternatives</Link>. For a ranked list built around AE seats, see the <Link href="/guides/sales-recruiters-for-account-executives" className={link}>best sales recruiters for account executives</Link>. Hiring for a SaaS startup? See the <Link href="/guides/best-recruiters-saas-startups-sales" className={link}>SaaS sales recruiters</Link> list. For a wider B2B shortlist, see the <Link href="/guides/best-recruiting-agencies-b2b-sales" className={link}>B2B sales recruiters and recruiting agencies</Link>.
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
                            How Do Most Sales Reps Get Paid?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Most quota carrying reps earn a base salary plus commission, and the two together make up on target earnings, or OTE. Set the offer before you brief any recruiter. Our <Link href="/guides/account-executive-ote-by-level" className={link}>account executive OTE by level</Link> guide pulls the ranges from named public sources.
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
                            <li><Link href="/guides/betts-recruiting-alternatives" className={link}>Betts Recruiting alternatives</Link></li>
                            <li><Link href="/guides/quota-crushers-alternatives" className={link}>Quota Crushers alternatives</Link></li>
                            <li><Link href="/guides/sales-recruiters-for-account-executives" className={link}>Best sales recruiters for account executives</Link></li>
                            <li><Link href="/guides/best-recruiters-saas-startups-sales" className={link}>SaaS sales recruiters and recruitment agencies</Link></li>
                            <li><Link href="/guides/best-sales-recruiting-agencies-2026" className={link}>Best sales recruiting agencies for 2026</Link></li>
                            <li><Link href="/guides/affordable-alternatives-korn-ferry" className={link}>Korn Ferry alternatives</Link></li>
                            <li><Link href="/guides/best-recruiting-agencies-b2b-sales" className={link}>B2B sales recruiters and recruiting agencies</Link></li>
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
