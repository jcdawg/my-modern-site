import { BadgeCheck, ChevronRight, HelpCircle, Layers, ListChecks, ShieldCheck, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Top Fractional Recruiter for Sales Teams (2026)",
    description: "Who is the top fractional recruiter for sales hiring in 2026? Fractional vs retained, contingency and in-house, six options compared, and how Kas Seat works.",
    path: "/guides/best-fractional-sales-recruiters",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const UPDATED = { iso: "2026-11-25", label: "Nov 25, 2026" };

const SRC = {
    shrm: "https://www.shrm.org/topics-tools/news/talent-acquisition/how-to-work-effectively-executive-search-firm",
    blsHr: "https://www.bls.gov/ooh/business-and-financial/human-resources-specialists.htm",
    blsEcec: "https://www.bls.gov/news.release/ecec.nr0.htm",
};

const SHORT_ANSWER =
    "The top fractional recruiter for sales hiring embeds in your team, verifies quota history and runs your SDR, AE and sales manager searches on a monthly plan. The Kas Group runs embedded, fractional sales recruiting on a monthly plan as Kas Seat. It fits best when you have two or more sales seats to fill in a quarter.";

const KAS_SEAT_PRICE =
    "$5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above";

const LEGIT =
    "Check for a real website, named recruiters you can look up and a business you can verify. Before work starts, get the scope, the fee model and the notice terms in writing, and ask how they vetted a recent candidate. A legitimate firm never charges candidates, and you own every candidate name it finds.";

const RED_FLAGS =
    "Watch for vague scope, no written terms, pressure to sign a long contract before a calibration call, and resumes sent with no written read on each candidate. Also watch for no clear answer on who owns the candidate data. For sales seats, a recruiter who cannot explain how they check quota history is a red flag.";

const FAQS = [
    {
        q: "Who is the top fractional recruiter for sales teams?",
        a: "The right fractional recruiter for a sales team is an embedded partner who owns sourcing, vetting and closing on a monthly plan and knows your sales motion. The Kas Group runs that model as Kas Seat for SDR through Sales Manager seats. Details are on the programs page.",
    },
    {
        q: "What does a fractional sales recruiter do?",
        a: "A fractional sales recruiter handles your sales hiring from start to finish on a monthly plan: sourcing, vetting, interviewing and closing. Good ones work in your Slack, ATS and email, and present as part of your team to candidates.",
    },
    {
        q: "How much does a fractional sales recruiter cost?",
        a: `It depends on the model. Fractional recruiters charge a monthly retainer or an hourly rate. At The Kas Group, Kas Seat is ${KAS_SEAT_PRICE}. For a single seat, Kas Milestone Search is $5,000 for an SDR, $7,500 for an AE and $10,000 for a senior AE or sales manager.`,
    },
    {
        q: "How is fractional recruiting different from retained, contingency and in-house recruiting?",
        a: "Fractional recruiting pays for a recruiter's time by the month across all your open seats. Contingency pays per hire, usually 20% to 25% of first year cash compensation according to SHRM. Retained search pays about 33% of salary, bonus and signing bonus for one search. In-house means a full time recruiter's salary plus benefits.",
    },
    {
        q: "When does fractional sales recruiting make sense?",
        a: "It fits well when you are hiring two or more salespeople in a quarter, or when you want one consistent hiring process with scorecards and pipeline reporting. If you have a single seat to fill, one focused search may fit better.",
    },
    {
        q: "How do you know if a fractional recruiting firm is legit?",
        a: LEGIT,
    },
    {
        q: "What are red flags when hiring a fractional recruiter?",
        a: RED_FLAGS,
    },
    {
        q: "How do you choose a fractional sales recruiter?",
        a: "Ask to see how they vetted a recent candidate, confirm they will work in your tools, and get the scope and notice terms in writing. Our guide on how to choose a fractional recruiter has the full checklist and the questions to ask.",
    },
];

const MODELS = [
    {
        model: "Fractional recruiting",
        how: "A part time recruiter embedded in your process works all your open seats.",
        pay: "Monthly retainer or hourly rate. Kas Seat starts at $5,000 a month.",
        best: "Two or more sales hires in a quarter.",
    },
    {
        model: "Retained search",
        how: "An exclusive search for one seat, usually senior.",
        pay: "About 33% of salary, bonus and signing bonus, paid whether or not the seat is filled (SHRM).",
        best: "One senior seat.",
    },
    {
        model: "Contingency recruiting",
        how: "The recruiter is paid when a candidate they introduce is hired.",
        pay: "Usually 20% to 25% of first year cash compensation (SHRM).",
        best: "One well defined role with no follow on hires.",
    },
    {
        model: "In-house recruiter",
        how: "A full time recruiter on your payroll.",
        pay: "Salary plus benefits. BLS median for HR specialists, the group that includes recruiters: $75,940 (May 2025).",
        best: "Steady hiring across many functions.",
    },
];

// Facts for other firms come from each firm's own live site (checked Nov 25, 2026).
// Listed by model, not ranked against each other.
const FIRMS = [
    {
        name: "The Kas Group",
        url: "https://www.thekasgroup.com/recruit/fractional-sales",
        model: "Embedded monthly plan",
        bestFor: "Embedded, fractional sales recruiting on a monthly plan for SDR, AE, senior AE and sales manager seats.",
        fact: `The Kas Group is a sales recruiting firm in Alpharetta, Georgia, founded in 2014. Kas Seat is ${KAS_SEAT_PRICE}.`,
    },
    {
        name: "Betts Recruiting",
        url: "https://bettsrecruiting.com/recruitment-as-a-service/",
        model: "Annual recruiting subscription",
        bestFor: "GTM teams that want one subscription across sales, marketing and customer success hires.",
        fact: "Betts offers Recruitment as a Service (RaaS), a subscription recruiting model with dedicated recruiter support that covers multiple hires under one annual subscription. It also runs contingency search for sales, marketing and customer success roles.",
    },
    {
        name: "ISG Partners",
        url: "https://www.isgpartners.com/",
        model: "Embedded monthly recruiter",
        bestFor: "Companies that want a dedicated recruiter embedded in the team for go to market seats.",
        fact: "ISG Partners describes itself as an embedded recruitment firm that provides a dedicated recruiter on a month to month basis. Its go to market coverage includes sales development reps and sales leadership.",
    },
    {
        name: "Fractional Recruiting Co.",
        url: "https://www.fractionalrecruitingco.com/",
        model: "Hourly",
        bestFor: "Startups that want to buy recruiting hours, including GTM seats.",
        fact: "Fractional Recruiting Co. adds experienced recruiters to a company on an hourly basis, with no placement fees and no minimum commitments. Its GTM coverage includes sales, AE, SDR and account manager roles.",
    },
    {
        name: "Dover",
        url: "https://www.dover.com/recruiters",
        model: "Recruiter marketplace",
        bestFor: "Startups that want to browse and pick an independent fractional recruiter.",
        fact: "Dover runs a marketplace of independent fractional recruiters with high growth startup experience. Companies can choose hourly, retainer or pay per hire pricing.",
    },
    {
        name: "Go Fractional",
        url: "https://www.gofractional.com/hire/recruiter",
        model: "Matched fractional recruiter",
        bestFor: "Teams that want to be matched with a fractional recruiter on a monthly retainer.",
        fact: "Go Fractional matches companies with prescreened fractional recruiters on a month to month agreement, priced as a monthly retainer with no recruiting fees. Its recruiter page focuses on engineering and leadership roles.",
    },
];

export default function BestFractionalSalesRecruiters() {
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
        name: "Fractional Recruiting Options for Sales Teams (2026)",
        itemListOrder: "https://schema.org/ItemListUnordered",
        numberOfItems: FIRMS.length,
        itemListElement: FIRMS.map((f, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: f.name,
            url: f.url,
            description: f.bestFor,
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
                        Top <span className="text-blue-accent">Fractional Recruiter</span> for Sales Teams (2026)
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        What a fractional sales recruiter does, how it compares with retained, contingency and in-house hiring, six options side by side, and how The Kas Group runs embedded sales recruiting for Seed to Series B.
                    </p>
                    <p className="mt-6 text-sm text-grey-500">
                        <strong className="text-navy-900">Updated <time dateTime={UPDATED.iso}>{UPDATED.label}</time>, Chris Stinson.</strong> Chris is Managing Director of The Kas Group and has recruited sales and GTM talent since 2014.
                    </p>
                    <p className="mt-4 text-base text-grey-600 max-w-2xl leading-relaxed">
                        Fractional recruiting is a part time recruiting partner who joins your team on a monthly basis and runs your hiring from inside your own process. You get an experienced recruiter focused on your open seats, writing the scorecard with you, sourcing and screening candidates and helping close offers. <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline font-semibold">How fractional recruiting works</Link>.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> Short answer
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">{SHORT_ANSWER}</p>
                        <p className="mt-4 text-base text-grey-300 leading-relaxed">
                            <strong className="text-white">Kas Seat pricing:</strong> {KAS_SEAT_PRICE}.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            Fractional vs Retained, Contingency and In-House Recruiting
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Model</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">How it works</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">How you pay</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Best for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MODELS.map((m) => (
                                        <tr key={m.model} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{m.model}</td>
                                            <td className="py-4 px-6 text-grey-600">{m.how}</td>
                                            <td className="py-4 px-6 text-grey-600">{m.pay}</td>
                                            <td className="py-4 px-6 text-grey-600">{m.best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Sources: contingency and retained fee ranges from <a href={SRC.shrm} className={link}>SHRM</a>. In-house wage from the <a href={SRC.blsHr} className={link}>BLS Occupational Outlook Handbook</a>, where the top 10% of HR specialists earn above $128,720. <a href={SRC.blsEcec} className={link}>Benefits made up 31.5%</a> of employer costs for full time private industry workers in June 2026 (BLS). Fee math by seat is in{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>fractional sales recruiting vs contingency</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ListChecks className="h-8 w-8 text-blue-accent" />
                            Fractional Recruiting Options for Sales Teams in 2026
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Six ways to bring in a fractional recruiter, listed by model rather than ranked. Facts for each firm come from its own website. Match the model to the seats you are hiring.
                        </p>
                        <ol className="space-y-6">
                            {FIRMS.map((f, i) => (
                                <li key={f.name} className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                    <h3 className="font-bold text-navy-900 text-lg">
                                        {i + 1}. <a href={f.url} className={link}>{f.name}</a>
                                        <span className="ml-2 text-sm font-medium text-grey-500">{f.model}</span>
                                    </h3>
                                    <p className="text-grey-600 mt-2"><strong className="text-navy-900">Best for:</strong> {f.bestFor}</p>
                                    <p className="text-grey-600 mt-2">{f.fact}</p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            How The Kas Group Runs Fractional Sales Recruiting
                        </h2>
                        <div className="p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                            <p className="text-grey-600 mb-4 leading-relaxed">
                                Embedded fractional sales recruiting for Seed through Series B, covering SDR through Sales Manager seats. Kas Seat gives you monthly hiring capacity with shortlists checked against quota, and the option to pause when hiring stops. Full programs are on the{" "}
                                <Link href="/programs" className={link}>programs page</Link>. For how the common models work, see the{" "}
                                <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>guide to fractional, contingency and retained search</Link>.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/recruit/fractional-sales" className="text-blue-accent font-bold hover:underline">Kas Seat (fractional sales) &rarr;</Link>
                                <Link href="/guides/fractional-sales-recruiting-cost" className="text-grey-500 font-bold hover:underline">Fractional sales recruiting cost &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            What a Fractional Recruiting Partner Does
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Sales specific vetting</h3>
                                    <p className="text-grey-600 mt-2">Checks quota history, walks through real deals and gives you a written read on each candidate before you meet them.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Embedded in your team</h3>
                                    <p className="text-grey-600 mt-2">Works in your Slack, your ATS and your email, and presents as part of your team to candidates.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Clear scope and terms</h3>
                                    <p className="text-grey-600 mt-2">Agrees on the seats, the monthly scope and the notice terms in writing before the work starts.</p>
                                </div>
                            </li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            Picking a partner? The full checklist and the questions to ask are in{" "}
                            <Link href="/guides/how-to-choose-a-fractional-recruiter" className={link}>how to choose a fractional recruiter</Link>. New to the model? Start with{" "}
                            <Link href="/guides/fractional-recruiting-guide" className={link}>what is fractional recruiting</Link>.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            Seed to Series B founders making their first one to five sales hires should also read{" "}
                            <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link>
                            {" "}and{" "}
                            <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>. For the wider picture, see{" "}
                            <Link href="/guides/best-recruiters-saas-startups-sales" className={link}>SaaS sales recruitment agencies and recruiters</Link>.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-blue-accent" />
                            How Do You Know If a Fractional Recruiting Firm Is Legit?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">{LEGIT}</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-blue-accent" />
                            What Are Red Flags When Hiring a Fractional Recruiter?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">{RED_FLAGS}</p>
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
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Need a top fractional recruiter for sales?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email chris@thekasgroup.com with your open GTM seats and stage. You get a straight answer on Kas Seat, Milestone Search or wait.
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
