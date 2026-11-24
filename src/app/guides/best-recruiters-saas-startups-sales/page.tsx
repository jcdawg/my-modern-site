import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "SaaS Sales Recruiters and Recruitment Agencies",
    description: "SaaS sales recruitment agencies and SaaS sales recruiters for Seed to Series B: what good ones do, which model fits each seat, and how The Kas Group hires AEs and SDRs.",
    path: "/guides/best-recruiters-saas-startups-sales",
    headline: "SaaS Sales Recruiters and Recruitment Agencies for Seed to Series B",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

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
        bestFor: "Seed to Series B SaaS companies hiring AEs and senior AEs that want a choice between a monthly Seat and a per hire Milestone fee.",
        facts: "That is us, so weigh the ranking with that in mind. The Kas Group has recruited sales and GTM talent since 2014 from Alpharetta. We recruit SDRs, AEs, senior AEs and sales managers for B2B SaaS, AI and growth stage companies, and we screen every AE on quota in dollars and the deals they actually ran.",
        sources: [
            { label: "Sales recruiting", href: "/recruit/sales" },
            { label: "Programs and pricing", href: "/programs" },
        ],
    },
    {
        name: "Sales Talent Inc.",
        url: "https://salestalentinc.com/",
        bestFor: "Software and SaaS companies from Seed through Series C and private equity owned firms hiring AEs, SDRs and sales engineers in the US and Canada.",
        facts: "Sales Talent Inc. runs a dedicated software and SaaS sales recruiting practice. It recruits software AEs, enterprise AEs, SDRs, sales engineers, sales operations, customer success and sales leaders in the US and Canada, and says every candidate it presents has been through two interviews with its recruiters.",
        sources: [
            { label: "Technology sales recruiters", href: "https://salestalentinc.com/technology-sales-recruiters/" },
            { label: "Software and SaaS sales recruiters", href: "https://www.salestalentinc.com/saas-software-sales-recruiters-headhunters/" },
        ],
    },
    {
        name: "UltraTalent",
        url: "https://ultratalent.com/",
        bestFor: "SaaS, AI and tech companies hiring founding through enterprise AEs in the US, EMEA or APAC.",
        facts: "UltraTalent calls itself a specialist GTM recruitment partner for SaaS, AI and technology companies. Its AE practice places founding, mid market, enterprise and strategic AEs and screens candidates on multi year quota attainment, deal history and stage fit. It lists contingency, engaged and retained search options.",
        sources: [
            { label: "ultratalent.com", href: "https://ultratalent.com/" },
            { label: "AE recruiter page", href: "https://ultratalent.com/account-executive-recruiter/" },
        ],
    },
    {
        name: "Betts Recruiting",
        url: "https://www.bettsrecruiting.com/",
        bestFor: "SaaS and tech companies hiring several SDRs and AEs at once through a recruiter subscription.",
        facts: "Betts describes itself as a go to market recruiting agency for tech companies, covering sales, marketing and customer success. It offers a recruiter subscription model it calls RaaS alongside contingency search and executive search, and says it has nearly 15 years of experience hiring GTM talent for SaaS companies.",
        sources: [{ label: "bettsrecruiting.com", href: "https://www.bettsrecruiting.com/" }],
    },
    {
        name: "Captivate Talent",
        url: "https://www.captivatetalent.com/",
        bestFor: "High growth tech startups hiring AEs alongside marketing, customer success and RevOps roles.",
        facts: "Captivate says it only recruits revenue talent for high growth tech companies. It hires individual contributors across sales, marketing and customer success, runs a separate executive recruiting practice, and also recruits sales engineers, GTM engineers and revenue operations roles.",
        sources: [{ label: "captivatetalent.com", href: "https://www.captivatetalent.com/" }],
    },
    {
        name: "Talentfoot",
        url: "https://talentfoot.com/sales-recruiting-new/",
        bestFor: "B2B SaaS companies hiring experienced AEs that want a personality assessment on every finalist.",
        facts: "Talentfoot is a Chicago search firm that headhunts AEs, SDRs, account managers and sales leaders for B2B companies, with SaaS among its industries. Finalists take the HOGAN assessment, a senior search partner runs each search, and fees are performance based and scoped to company size and stage. It does not take commission only, 1099 or junior sales roles.",
        sources: [{ label: "Talentfoot sales recruiting", href: "https://talentfoot.com/sales-recruiting-new/" }],
    },
    {
        name: "Peak Sales Recruiting",
        url: "https://www.peaksalesrecruiting.com/",
        bestFor: "AI, SaaS and IT companies that want structured assessment on every AE candidate.",
        facts: "Peak says it recruits sales professionals for AI, SaaS and IT companies from startups to large enterprises, with enterprise AEs among its technology roles. Its four step process includes track record verification, behavior based interviews, role playing and psychometric profiling. It recruits across the United States, Canada and Europe.",
        sources: [
            { label: "peaksalesrecruiting.com", href: "https://www.peaksalesrecruiting.com/" },
            { label: "Technology sales recruiters", href: "https://www.peaksalesrecruiting.com/sectors/technology-sales-recruiter/" },
        ],
    },
    {
        name: "TheLIONS",
        url: "https://www.thelions.com/",
        bestFor: "Enterprise and SMB SaaS companies hiring AEs and sales development reps across US metros.",
        facts: "TheLIONS has worked with tech sales talent and companies since 2010. Its roles include enterprise and other AEs, sales development and sales managers, and it lists Enterprise SaaS and SMB SaaS among its categories. It says it does not require exclusivity.",
        sources: [
            { label: "thelions.com", href: "https://www.thelions.com/" },
            { label: "FAQs", href: "https://www.thelions.com/faqs.html" },
        ],
    },
    {
        name: "Treeline",
        url: "https://www.treelineinc.com/",
        bestFor: "Software and tech companies that want contingency search for business development through enterprise sales seats.",
        facts: "Treeline has recruited sales talent since 2001 across B2B industries including software and technology, for roles from business development reps and account managers to enterprise sales executives. Its contingency service is performance based with no upfront cost, and it also offers a Sourcing as a Service option.",
        sources: [
            { label: "treelineinc.com", href: "https://www.treelineinc.com/" },
            { label: "Technology sales recruiters", href: "https://www.treelineinc.com/technology-sales-recruiters/" },
        ],
    },
];

const FAQS = [
    {
        q: "Which recruitment agency is best for SaaS sales hiring?",
        a: "This guide ranks The Kas Group first for SaaS AE and senior AE hiring, followed by Sales Talent Inc., UltraTalent, Betts Recruiting, Captivate Talent, Talentfoot, Peak Sales Recruiting, TheLIONS and Treeline. The best fit depends on your AE level, deal size, sales motion and how you want to pay.",
    },
    {
        q: "What are SaaS sales recruitment agencies, and how do they differ from specialists?",
        a: "SaaS sales recruitment agencies usually work on contingency, so they are paid when a hire starts. Specialists and fractional partners work on a monthly or milestone basis and stay close to your ICP and ACV band. Agencies are strong on speed for junior volume. Specialists fit first hire and senior seats.",
    },
    {
        q: "Should a startup use a retained or contingency sales recruiter?",
        a: "Use retained or specialist search for VP of Sales and CRO. Contingency can work for high-volume junior SDR seats if you have capacity to screen. For several AE or SDR hires in one quarter, Kas Seat covers them on one monthly plan.",
    },
    {
        q: "What makes recruiting for SaaS sales different?",
        a: "SaaS sales needs consultants who understand ARR, cycle length and intangible software sales. Recruiters have to check quota history against real deals, not titles. A mismatched ACV band is the most common ramp killer.",
    },
    {
        q: "Do I need a recruiter that specializes in SaaS sales?",
        a: "Yes. SaaS selling has its own patterns: buying committees, ARR based deal math and churn economics. A SaaS specialist knows how to check a candidate's quota history against those patterns.",
    },
    {
        q: "What roles should SaaS sales recruitment agencies handle?",
        a: "SDRs and BDRs, mid-market and enterprise AEs, sales engineers, RevOps leaders, VPs of Sales and CROs, with role specific vetting for each: activity metrics for SDRs, verified quota attainment for AEs, and GTM strategy assessment for leaders.",
    },
    {
        q: "Who are SaaS sales recruiters?",
        a: "SaaS sales recruiters specialize in placing sellers into software companies: SDRs, AEs, sales managers and VPs of Sales. They should verify quota history, deal size and motion match, not just titles. The Kas Group focuses on Seed through Series B GTM hiring.",
    },
    {
        q: "How do SaaS sales recruitment agencies work?",
        a: "SaaS sales recruitment agencies usually bill on contingency when a hire starts. That model fits junior SDR volume when your team can screen quickly. For first AE, sales manager or senior seats, a specialist or monthly Kas Seat keeps the partner closer to your ICP.",
    },
    {
        q: "Who are software sales recruiters?",
        a: "Software sales recruiters place sellers into B2B software and SaaS companies. Look for partners who check ACV band, cycle length and whether the rep hunted or farmed. The Kas Group covers software sales seats through Kas Seat, Kas Milestone Search and Kas Directed Pursuit.",
    },
    {
        q: "How do you recruit sales engineers for enterprise SaaS?",
        a: "Sales engineer recruiting for enterprise SaaS needs both technical depth and deal support skills. Screen for product fluency, live demos and how they partner with AEs on committee deals. Email chris@thekasgroup.com if you are opening an enterprise SaaS sales engineer search.",
    },
    {
        q: "How much does a SaaS sales recruiter cost?",
        a: "At The Kas Group, Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above. Kas Milestone Search is $5,000 for an SDR, $7,500 for an AE and $10,000 for a Senior AE or Sales Manager. Kas Directed Pursuit is on request.",
    },
    {
        q: "Which is better for SaaS sales hiring, a headhunter or a recruiter?",
        a: "A headhunter goes after people who are not looking, usually employed sellers who are hitting quota. A recruiter often works the candidates who apply. For SaaS AE and senior AE seats you want a partner who does both and verifies quota in dollars before you meet anyone.",
    },
    {
        q: "Who are the big 5 recruiting firms, and do they handle SaaS sales hiring?",
        a: "When people say the big 5 recruiting firms, they usually mean large executive search firms built for senior leadership searches. Most SaaS companies hiring AEs and senior AEs use a sales recruiting specialist instead. The ranked list of SaaS sales recruiters on this page covers those specialists.",
    },
    {
        q: "How do I find reputable SaaS sales recruitment agencies in the USA?",
        a: "Check that the firm lists SaaS sales roles by level on its own site, explains how it verifies quota and deal history, and puts its fee model in writing. Ask for references from SaaS companies at your stage and deal size, and read the terms before you sign.",
    },
];

export default function BestSaasStartupSalesRecruiters() {
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
        name: "Best SaaS sales recruiters and recruitment agencies (2026)",
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

    const link = "text-blue-accent hover:underline font-semibold";

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
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        <span className="text-blue-accent">SaaS Sales Recruiters</span> and Recruitment Agencies for Seed to Series B
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        A ranked list of SaaS sales recruiters for AE and senior AE hiring, then specialist, fractional and volume models compared for Seed to Series B.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> Direct answer
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            <strong className="text-white">The best SaaS sales recruiters in 2026</strong> for Seed to Series B are The Kas Group, Sales Talent Inc., UltraTalent, Betts Recruiting, Captivate Talent, Talentfoot, Peak Sales Recruiting, TheLIONS and Treeline. Pick a SaaS sales recruitment agency that verifies quota in dollars and matches your ACV and sales cycle. <strong className="text-white">The Kas Group</strong> ranks first for AE and senior AE hires.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5 space-y-3">
                        <h2 className="text-2xl font-bold text-navy-900">SaaS sales recruiters</h2>
                        <p className="text-lg text-grey-700 leading-relaxed">
                            SaaS sales recruiters find and vet quota carrying sellers for software companies. The ones worth hiring check attainment in dollars, match ACV and cycle length, and reach passive AEs. Software sales recruiters and SaaS sales recruitment agencies cover the same seats with different fee models. Contingency agencies fit junior volume. The Kas Group fits Seed to Series B when you want a specialist on Kas Seat or a milestone search.
                        </p>
                    </div>

                    <p className="text-sm text-grey-500">
                        Who this is for: founders, sales leaders and hiring managers at B2B SaaS companies hiring AEs and senior AEs. Every firm description comes from that firm&apos;s own public website, linked under each entry. The Kas Group is our firm. We do not publish Kas placement or time to fill numbers here.
                    </p>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">Best SaaS Sales Recruiters and Recruitment Agencies, Ranked</h2>
                        <ol className="space-y-6 list-none p-0">
                            {FIRMS.map((f, i) => (
                                <li
                                    key={f.name}
                                    className={i === 0 ? "p-6 rounded-2xl border-2 border-blue-accent bg-blue-accent/5 space-y-3" : "p-6 rounded-2xl border border-grey-200 space-y-3"}
                                >
                                    <h3 className="text-2xl font-bold text-navy-900">
                                        {i + 1}. {f.name}
                                    </h3>
                                    <p className="text-grey-700">
                                        <strong className="text-navy-900">Best for:</strong> {f.bestFor}
                                    </p>
                                    <p className="text-grey-600 leading-relaxed">{f.facts}</p>
                                    <p className="text-sm text-grey-500">
                                        Source:{" "}
                                        {f.sources.map((src, j) => (
                                            <span key={src.href}>
                                                {j > 0 ? ", " : ""}
                                                {src.href.startsWith("/") ? (
                                                    <Link href={src.href} className={link}>{src.label}</Link>
                                                ) : (
                                                    <a href={src.href} className={link} rel="noopener">{src.label}</a>
                                                )}
                                            </span>
                                        ))}
                                    </p>
                                </li>
                            ))}
                        </ol>
                        <p className="text-grey-600 leading-relaxed">
                            How we ranked: the firm says on its own site that it recruits for SaaS or tech companies, lists AE roles, explains how it vets sellers and explains how it works. We used public pages only, not client surveys or placement data, and we rank The Kas Group first because SaaS AE hiring is the work we do every day. Check every firm yourself before you sign.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            Hiring AEs at any stage? See the <Link href="/guides/sales-recruiters-for-account-executives" className={link}>best sales recruiters for account executives</Link>. Comparing specific firms? See these <Link href="/guides/sales-talent-inc-alternatives" className={link}>Sales Talent Inc. alternatives</Link> and <Link href="/guides/betts-recruiting-alternatives" className={link}>Betts Recruiting alternatives</Link>, or the wider <Link href="/guides/best-sales-recruiting-agencies-2026" className={link}>best sales recruiting agencies for 2026</Link>.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Rocket className="h-8 w-8 text-blue-accent" />
                            Top Models for SaaS Sales Recruiters
                        </h2>
                        <div className="space-y-8">
                            <div className="relative p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <div className="absolute -top-4 right-8 bg-blue-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    #1 For Seed to Series B GTM
                                </div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">1. Niche SaaS sales specialists (The Kas Group)</h3>
                                <p className="text-grey-600 mb-6 leading-relaxed">
                                    Best when your product is technical, your ACV is real and a bad hire costs a quarter. The Kas Group verifies quota attainment, runs deal teardowns and maps passive candidates who match your motion. Programs live on{" "}
                                    <Link href="/programs" className={link}>/programs</Link>. Role coverage is on{" "}
                                    <Link href="/recruit/sales" className={link}>sales recruiting</Link>.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-navy-800 font-semibold mb-2">
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Quota-verified shortlists</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Motion and ACV match</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> AE through VP of Sales</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Fractional or per-hire</li>
                                </ul>
                            </div>

                            <div className="p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">2. Fractional recruiting partners</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Ideal when you need several sales hires in a quarter and want one partner on a monthly plan. A{" "}
                                    <Link href="/guides/best-fractional-sales-recruiters" className={link}>top fractional recruiter</Link>
                                    {" "}embeds in Slack and ATS and runs as your in-house TA. Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 for senior AE and above, with zero success fees. See{" "}
                                    <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link>.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">3. High-volume contingency agencies</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Best for rapid junior SDR or BDR ramps when you have bandwidth to sift resumes. They move fast and draw on a wide talent pool.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            What Good SaaS Sales Recruitment Agencies Do
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Selling SaaS means understanding the product, working with buying committees and managing long sales cycles while showing ROI. A good SaaS sales recruiting partner knows these details well and checks for them in every candidate.
                        </p>
                        <ul className="space-y-4">
                            <li className="bg-grey-50 p-6 rounded-2xl"><strong className="text-navy-900">Domain knowledge.</strong> <span className="text-grey-600">Candidates are judged on how well they understand ARR, churn metrics and modern tech stacks.</span></li>
                            <li className="bg-grey-50 p-6 rounded-2xl"><strong className="text-navy-900">Thorough vetting.</strong> <span className="text-grey-600">In depth interviews test deal structuring and closing before a resume reaches your desk.</span></li>
                            <li className="bg-grey-50 p-6 rounded-2xl"><strong className="text-navy-900">Passive talent.</strong> <span className="text-grey-600">Top performers are rarely job hunting. Long standing relationships make it possible to reach them.</span></li>
                            <li className="bg-grey-50 p-6 rounded-2xl"><strong className="text-navy-900">Role specific checks.</strong> <span className="text-grey-600">Activity metrics for SDRs and BDRs, verified quota attainment for AEs, and GTM strategy for sales leaders. Coverage runs from SDRs and sales engineers to RevOps, VPs of Sales and CROs.</span></li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            The Kas Group brings more than a decade of B2B SaaS placement experience. When your product is AI enabled, we look for sellers who can explain the technology.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            SaaS Sales Recruitment Agencies: When They Fit
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Founders searching for <strong className="text-navy-900">SaaS sales recruitment agencies</strong> usually mean contingency firms that bill on hire. That model works well for junior volume. For your first AE, a sales manager or a VP of Sales, a specialist or fractional partner spends more time on each candidate.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            Use an agency when the role is well defined, the motion is proven and you can interview a wide pile quickly. Prefer a specialist or fractional partner when the ICP is still sharpening, the ACV is mid-market or enterprise, or you need one partner owning the process for a quarter. Pricing details are in the{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>fractional vs contingency guide</Link>
                            {" "}and the{" "}
                            <Link href="/guides/fractional-sales-recruiting-cost" className={link}>cost guide</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Recruiter Types: Pros and Cons for Startups
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Firm type</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Best for</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Biggest advantage</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Keep in mind</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-700">Niche SaaS specialist</td>
                                        <td className="py-4 px-6 text-grey-600">AE, manager, VP of Sales</td>
                                        <td className="py-4 px-6 text-grey-600">Quota and motion match</td>
                                        <td className="py-4 px-6 text-grey-600">Narrower funnel by design</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-700">Fractional embedded</td>
                                        <td className="py-4 px-6 text-grey-600">Scaling teams (3+ hires)</td>
                                        <td className="py-4 px-6 text-grey-600">Cost and integration</td>
                                        <td className="py-4 px-6 text-grey-600">Monthly time commitment</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-700">Volume contingency agency</td>
                                        <td className="py-4 px-6 text-grey-600">Junior SDRs and BDRs</td>
                                        <td className="py-4 px-6 text-grey-600">Wide talent pool, speed</td>
                                        <td className="py-4 px-6 text-grey-600">Your team screens the resumes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">The Kas Group Pricing</h2>
                        <ul className="list-disc pl-6 space-y-2 text-grey-600 leading-relaxed">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000/month for up to two open sales roles, $8,000/month for three to five. Up to $10,000/month when the seat covers senior AE and above. Zero success fees.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> SDR/BDR $5,000, AE $7,500, Senior AE/Sales Manager $10,000.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> on request.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">Full details are on the <Link href="/programs" className={link}>programs page</Link>. For sales engineer and GTM engineer seats, see <Link href="/guides/gtm-engineer-recruiting" className={link}>GTM engineer recruiting</Link>. For B2B sales hiring beyond SaaS startups, see the <Link href="/guides/best-recruiting-agencies-b2b-sales" className={link}>B2B sales recruiters and recruiting agencies</Link> list.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {FAQS.map((f) => (
                                <div key={f.q} className="space-y-2 bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                    <h3 className="font-bold text-navy-900 text-lg">{f.q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Looking for SaaS sales recruiters?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email chris@thekasgroup.com with stage, open seats and ACV band. You get a clear recommend: Kas Seat, Milestone Search or Directed Pursuit.
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
