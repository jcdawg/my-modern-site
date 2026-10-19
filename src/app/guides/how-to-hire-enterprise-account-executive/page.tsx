import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "How to Hire an Enterprise Account Executive",
    description:
        "Hire any AE with enterprise experience: hunter or book of business, how to check they built the deal, plus sourced pay, quota, ramp and search time.",
    path: "/guides/how-to-hire-enterprise-account-executive",
    headline: "How to Hire an Enterprise Account Executive",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
    bridge: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    blossom: "https://www.blossomstreetventures.com/post/the-best-annual-saas-ae-data-weve-seen",
    sloane: "https://www.sloane-staffing.com/insights/2026-gtm-hiring-benchmarks/",
    nobel: "https://nobelrecruitment.com/blogs/what-is-a-realistic-time-to-hire-benchmark-for-ae-roles/",
    salesfolks: "https://salesfolks.com/post/sales-hiring-timeline",
    closedwon: "https://www.closedwontalent.com/post/2026-sales-and-gtm-comp-benchmarks-for-saas-startups",
    scalerr: "https://scalerr.com/founding-ae-compensation",
    gartner: "https://www.gartner.com/en/newsroom/press-releases/2025-05-07-gartner-sales-survey-finds-74-percent-of-b2b-buyer-teams-demonstrate-unhealthy-conflict-during-the-decision-process",
    gong: "https://www.gong.io/blog/data-shows-top-reps-dont-just-sell-they-orchestrate-with-ai",
    saastr: "https://www.saastr.com/dear-saastr-what-are-the-most-common-mistakes-first-time-founders-make-building-enterprise-sales-teams/",
};

const FAQS = [
    {
        q: "What does an enterprise account executive do?",
        a: "An enterprise account executive wins customers through a long sale with a buying group that can range from five to 16 people, according to Gartner. Some own a book of business and grow existing customers. Others are hunters who build new business with only a few accounts to start. Decide which job you are hiring for before you search.",
    },
    {
        q: "What is the difference between a hunter and an account cultivator?",
        a: "In my view, they are two very different specializations. A hunter brings in new business. An account cultivator grows existing customers. If you hand the AE a book of business, you may want a cultivator. If they will build new business with only a few accounts to work, you need a hunter.",
    },
    {
        q: "How much does an enterprise account executive cost?",
        a: "RepVue's 2026 self-reported data shows a median of $275K on target earnings and $140K base for enterprise AEs, across all company sizes. Recruiter estimates run higher at startups: ClosedWon Talent puts an enterprise AE at $240K to $320K OTE, and Scalerr puts Series A enterprise at $260K to $350K. Recruiter estimates are not survey data.",
    },
    {
        q: "How long does it take to hire an enterprise account executive?",
        a: "No independent dataset exists. Salesfolks, a sales recruiter, reports 45 to 70 days on average for enterprise AEs across 3,500+ hiring cycles. Nobel Recruitment, a Europe-based recruiter, says 6 to 10 weeks for AE roles. Both are vendor figures. Plan about 6 to 10 weeks to an accepted offer, plus notice.",
    },
    {
        q: "How long does an enterprise AE take to ramp?",
        a: "The Bridge Group's 2026 survey of 158 B2B companies puts average AE ramp at 6.2 months, the longest in its history. Sloane Staffing, a recruiter, puts enterprise AEs at 7 to 9 months to baseline quota. No independent dataset isolates enterprise AEs, so judge them later than you would a mid-market AE.",
    },
    {
        q: "What share of enterprise AEs hit quota?",
        a: "RepVue's data has 38% of enterprise AEs at quota. The Bridge Group's 2026 survey has 48% of all AEs at quota, down from 51% in 2024. RepVue puts it this way: \"OTE sets the aspiration. Attainment tells you how often that aspiration is realized.\"",
    },
    {
        q: "How do you check an AE built the deal and did not inherit it?",
        a: "Ask: \"Tell me about a deal you closed where you started it and finished it. What steps did you take, what challenges did you run into, and since it was probably a cold lead, what did you do to build the relationship with the customer?\" Logos on a resume do not prove they brought the deal in. They may have been existing customers the AE expanded.",
    },
];

export default function HowToHireEnterpriseAccountExecutive() {
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
    const h2 = "text-3xl font-bold text-navy-900";

    const segments = [
        { segment: "SMB AE", base: "$70K", ote: "$135K", quota: "42%" },
        { segment: "Mid-market AE", base: "$95K", ote: "$180K", quota: "40%" },
        { segment: "Enterprise AE", base: "$140K", ote: "$275K", quota: "38%" },
    ];

    return (
        <div className="bg-white">
            <ArticleJsonLd title={PAGE.title} description={PAGE.description} path={PAGE.path} headline={PAGE.headline} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Hire an Enterprise AE</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        How to Hire an Enterprise Account Executive
                    </h1>
                    <p className="text-sm text-grey-500">October 16, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                        <strong>Short answer:</strong> Decide first whether the AE inherits a book of business or builds new accounts. Those are two different jobs. Then make them prove they started and closed their last big deal. Logos on a resume do not. Recruiter benchmarks put enterprise ramp at 7 to 9 months, so judge them later than you think.
                    </blockquote>

                    <p className="text-sm text-grey-500">
                        How to read this guide: sections labeled &quot;My view&quot; come from my own work placing sales people at The Kas Group. Everything else comes from a named outside source, linked in the text and listed at the end. I label vendor and recruiter figures as such. No independent dataset isolates enterprise AE ramp or time to hire.
                    </p>

                    <p>
                        Most guides treat this as an enterprise-only role. I look at a wider group. Plenty of strong candidates have enterprise experience from a mid-market or strategic seat. The same tests apply to all of them. This guide covers the question I ask first, what the data says about pay, quota and ramp, and how I check that a candidate built the deal.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: Book of Business or New Accounts?</h2>
                        <p>
                            Before any enterprise AE search, I ask one thing. Are you handing the AE a book of business? Or will they build new business with only a few accounts to work?
                        </p>
                        <p>
                            A hunter who brings in new business and an account cultivator who grows existing customers are two very different specializations. Find out which one the company needs before you start the search. If you skip this step, you can interview a great seller for the wrong job.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Any AE With Enterprise Experience, Not Only Enterprise Titles</h2>
                        <p>
                            Title is a weak signal. The deal is the signal. <a href={SRC.gartner} className={link}>Gartner surveyed 632 B2B buyers</a> and found buying groups range from five to 16 people across as many as four functions. An AE who has worked a deal like that has enterprise experience, whatever the title said.
                        </p>
                        <p>
                            <a href={SRC.gong} className={link}>Gong</a>, a sales software vendor, analyzed 1.8 million new business deals closed in 2024. Large strategic deals that were won averaged 17 buyer contacts, and multi-threading raised win rates by an average of 130% on deals over $50K. That is outside data from a vendor.
                        </p>
                        <p>
                            <a href={SRC.repvue} className={link}>RepVue&apos;s 2026 data</a>, self-reported by reps, shows what moving up a segment looks like. OTE roughly doubles and fewer reps hit quota at each step.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse text-base">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-3 px-5 font-bold text-navy-900">Segment (RepVue)</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">Median base</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">Median OTE</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">At quota</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {segments.map((s) => (
                                        <tr key={s.segment} className="border-b border-grey-100 last:border-0">
                                            <td className="py-3 px-5 font-bold text-navy-900">{s.segment}</td>
                                            <td className="py-3 px-5 text-grey-600">{s.base}</td>
                                            <td className="py-3 px-5 text-grey-600">{s.ote}</td>
                                            <td className="py-3 px-5 text-grey-600">{s.quota}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What the Numbers Say</h2>
                        <p>This is outside data. Each item names its source and what kind of source it is.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Pay, survey data.</strong> RepVue shows a median of $275K OTE for enterprise AEs, as above. <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2026 survey</a> of 158 B2B companies found a median AE OTE of $200K across all AEs and a median quota of $960K, which is 4.6x OTE.</li>
                            <li><strong className="text-navy-900">Pay, recruiter estimates.</strong> <a href={SRC.closedwon} className={link}>ClosedWon Talent</a> puts an enterprise AE at $240K to $320K OTE. <a href={SRC.scalerr} className={link}>Scalerr</a> puts a Series A enterprise AE at $260K to $350K. These are recruiter estimates with no published sample size. They are not survey data.</li>
                            <li><strong className="text-navy-900">Quota.</strong> RepVue has 38% of enterprise AEs at quota. Bridge has 48% of all AEs at quota, down from 51% in 2024. RepVue says it well: &quot;OTE sets the aspiration. Attainment tells you how often that aspiration is realized.&quot;</li>
                            <li><strong className="text-navy-900">Ramp.</strong> Bridge reports 6.2 months average ramp to full productivity, the longest in the study&apos;s history. It ties that to deal complexity and bigger buying committees. <a href={SRC.sloane} className={link}>Sloane Staffing</a>, a recruiter, puts enterprise AEs at 7 to 9 months to baseline quota and mid-market AEs at 4.5 to 5. Scalerr, also a recruiter, writes 9 to 12 months for enterprise.</li>
                            <li><strong className="text-navy-900">Tenure.</strong> A <a href={SRC.blossom} className={link}>Blossom Street Ventures summary</a> of the Bridge Group AE survey reports average AE tenure of 3.2 years and median annual turnover of 21%.</li>
                        </ul>
                        <p>
                            Read the pay and ramp together. A new enterprise AE needs months before the number shows up. That is why the check on the deal matters more than the title.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: Set First Year Expectations Before You Hire</h2>
                        <p>
                            Realistic first year expectations depend on three things. How big is the company? How many people have held that seat before? What did they earn?
                        </p>
                        <p>
                            Anyone you hire as a hunter needs real ramp time. That is most true when they come in cold with no existing customers, or only a few. For numbers, I use the sourced ones above. The Bridge Group reports 6.2 months of average ramp across all AEs. Sloane Staffing, a recruiter, puts enterprise AEs at 7 to 9 months. Write the ramp into the plan before the offer, and agree on what you will judge in the early months.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How Long the Search Takes</h2>
                        <p>
                            No one publishes audited data on this. What exists comes from recruiters. <a href={SRC.salesfolks} className={link}>Salesfolks</a> reports 45 to 70 days on average for enterprise AEs, from 3,500+ hiring cycles, with 90+ days at the slow end. <a href={SRC.nobel} className={link}>Nobel Recruitment</a>, a Europe-based recruiter, says 6 to 10 weeks for AE roles and advises starting 10 to 12 weeks before you need the person selling. Sloane reports that 42% of candidates drop out over scheduling delays.
                        </p>
                        <p>
                            These are vendor figures. I plan on 6 to 10 weeks to an accepted offer, then notice, then the ramp above. Start earlier than feels necessary.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: How to Check They Built the Deal</h2>
                        <p>
                            Ask for the whole story of one deal. This is the question I use:
                        </p>
                        <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                            &quot;Tell me about a deal you closed where you started it and finished it. What steps did you take, what challenges did you run into, and since it was probably a cold lead, what did you do to build the relationship with the customer?&quot;
                        </blockquote>
                        <p>
                            The question asks for the start and the finish. Listen for the steps, the obstacles and how they earned the customer&apos;s trust from a cold start. Then check the answer against the outside data. If the deal was large, they should be able to name many people who were involved. Gartner&apos;s five to 16 and Gong&apos;s 17 contacts tell you what that looks like. Ask for quota in dollars and attainment by year too. Only 48% of AEs hit quota in the Bridge survey, so a single percentage means little without the number behind it.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: Where Founders Go Wrong</h2>
                        <p>
                            The mistake I see most is hiring from their own industry with impressive logos. A logo on a resume does not prove the candidate brought the deal in or worked it. They may have been existing customers the AE expanded.
                        </p>
                        <p>
                            That is fine if you want a farmer and not a hunter. It is a problem if you need new business. Jason Lemkin of <a href={SRC.saastr} className={link}>SaaStr</a> lists overvaluing big company experience among the common mistakes first-time founders make. He says those reps are used to brand recognition and warm leads, and he suggests looking for reps who have succeeded at startups a stage or two ahead of yours. That is one operator&apos;s opinion, and it fits what I see.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What AI Changed</h2>
                        <p>
                            More AEs now prospect for themselves. The Blossom summary of the Bridge data says the larger the ACV, the more AEs self-source, and that 74% of AEs are supported by an SDR team, over 80% at ACV of $100K and up. Bridge also found 57% of reps at quota in the companies most engaged with AI, against 39% in the least engaged. Bridge calls that observational, and the groups showed no significant differences on three controls. Read it as a hint, not proof.
                        </p>
                        <p>
                            If your SDR team is shrinking, read <Link href="/blog/sdr-team-cut-aes-prospect" className={link}>They Cut the SDRs. Now Every AE Prospects</Link>. For the rep versus tooling question, read <Link href="/blog/sdr-or-gtm-engineer-pipeline-hire" className={link}>SDR or GTM Engineer?</Link>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My Experience</h2>
                        <p>
                            I have placed several enterprise account executives. In one search I helped a company build the majority of its American sales team while it was based in Europe. I have also placed hunters at smaller companies to bring on new accounts.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Works</h2>
                        <p>
                            The Kas Group works three ways. Kas Seat is $5,000 a month if the company is hiring only one role. Kas Milestone Search for a senior AE is $10,000 per search. It is quoted per role, and $10,000 is the senior AE figure. Kas Directed Pursuit starts with a conversation to learn what the company wants, so there is no price to list. Details are on the <Link href="/programs" className={link}>programs page</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Where to Go From Here</h2>
                        <p>
                            Start with <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>what to pay your first AE</Link> and <Link href="/blog/founder-led-sales-first-hire" className={link}>why your first sales hire needs a playbook</Link>. For the ramp side of any AE hire, see <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>how to hire SDRs and AEs who ramp fast</Link>. If a wrong hire worries you, read <Link href="/guides/cost-of-a-bad-hire" className={link}>the cost of a bad hire</Link>. Good AEs are rarely job hunting, which is why <Link href="/guides/active-vs-passive-candidates" className={link}>passive candidates</Link> matter.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Hiring an enterprise AE?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email me whether the AE gets a book of business or builds new accounts, plus your deal size and sales cycle. I will tell you what profile to look for.
                        </p>
                        <a
                            href="mailto:chris@thekasgroup.com"
                            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                        >
                            Email chris@thekasgroup.com
                            <ChevronRight className="h-5 w-5" />
                        </a>
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
                        <h2 className={h2}>Sources</h2>
                        <p className="text-sm text-grey-500">All are outside sources. None is Kas placement data. Vendor and recruiter figures are labeled as such.</p>
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            <li>Sales Salary Guide: What Sales Reps are Earning in 2026, RepVue, January 2, 2026, with a mid-year update. Self-reported data. <a href={SRC.repvue} className={link}>{SRC.repvue}</a></li>
                            <li>AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. <a href={SRC.bridge} className={link}>{SRC.bridge}</a></li>
                            <li>The Best Annual SaaS AE Data We&apos;ve Seen, Blossom Street Ventures. A secondary summary of the Bridge Group AE survey. It labels the survey 2025, and its ramp and quota attainment figures match the 2026 report. <a href={SRC.blossom} className={link}>{SRC.blossom}</a></li>
                            <li>2026 GTM Hiring Benchmarks, Sloane Staffing, August 3, 2026. Recruiter (vendor) figures. <a href={SRC.sloane} className={link}>{SRC.sloane}</a></li>
                            <li>What is a realistic time-to-hire benchmark for AE roles?, Nobel Recruitment. Recruiter (vendor) figures, Europe-based. <a href={SRC.nobel} className={link}>{SRC.nobel}</a></li>
                            <li>How Long Does It Take to Hire a Salesperson? 2026 Sales Hiring Timeline, Salesfolks. Recruiter (vendor) figures. <a href={SRC.salesfolks} className={link}>{SRC.salesfolks}</a></li>
                            <li>2026 Sales and GTM Comp Benchmarks for SaaS Startups, ClosedWon Talent, April 17, 2026. Recruiter estimates. <a href={SRC.closedwon} className={link}>{SRC.closedwon}</a></li>
                            <li>Founding Account Executive Salary, Scalerr, August 2026. Recruiter estimates. <a href={SRC.scalerr} className={link}>{SRC.scalerr}</a></li>
                            <li>Gartner Sales Survey Finds 74% of B2B Buyer Teams Demonstrate Unhealthy Conflict, Gartner, May 7, 2025. Survey of 632 B2B buyers. <a href={SRC.gartner} className={link}>{SRC.gartner}</a></li>
                            <li>Data shows top reps don&apos;t just sell, they orchestrate (with AI), Gong Labs, April 28, 2025. Vendor data on 1.8 million deals. <a href={SRC.gong} className={link}>{SRC.gong}</a></li>
                            <li>Dear SaaStr: What Are The Most Common Mistakes First-Time Founders Make Building Enterprise Sales Teams?, Jason Lemkin, SaaStr. Opinion. <a href={SRC.saastr} className={link}>{SRC.saastr}</a></li>
                        </ul>
                    </div>

                    <p className="text-grey-600 text-base">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/account-executive-interview-questions" className={link}>Account Executive Interview Questions</Link>
                        {" · "}
                        <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>Hire SDRs and AEs with Zero Ramp-Up Time</Link>
                        {" · "}
                        <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>What to Pay Your First AE</Link>
                        {" · "}
                        <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>
                        {" · "}
                        <Link href="/blog/sdr-team-cut-aes-prospect" className={link}>They Cut the SDRs. Now Every AE Prospects.</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </section>
        </div>
    );
}
