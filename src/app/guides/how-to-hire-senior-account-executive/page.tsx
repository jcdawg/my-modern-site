import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "How to Hire a Senior Account Executive (2026 Guide)",
    description:
        "What a senior AE is, what to pay, how to interview one and how long the search takes. A founder's guide for 20 to 200 person B2B tech teams.",
    path: "/guides/how-to-hire-senior-account-executive",
    headline: "How to Hire a Senior Account Executive",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    repvueAe: "https://www.repvue.com/salaries/account-executive",
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
    bridge: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    blossom: "https://www.blossomstreetventures.com/post/the-best-annual-saas-ae-data-weve-seen",
    salesfuel: "https://salesfuel.com/177000-new-salesfuel-research-shows-a-bad-sales-hire-costs-sales-managers-more-than-a-luxury-car/",
    gong: "https://www.gong.io/blog/data-shows-top-reps-dont-just-sell-they-orchestrate-with-ai",
    sackett: "https://doi.org/10.1037/apl0000994",
    compyl: "https://jobs.ashbyhq.com/compyl/5aa4c145-c120-459f-a64c-2b5ce2c212f5",
    coworker: "https://jobs.ashbyhq.com/coworker/5ddd4b0b-089a-4a72-87be-b2887bad96b0",
};

const FAQS = [
    {
        q: "What is the difference between a senior AE and an AE?",
        a: "In my view, it is usually years of experience, but not always. It depends on the company and how many reps it has. A senior AE tends to work bigger accounts, larger deals and longer sales cycles. Where the line sits also depends on the leadership and the headcount of the sales team.",
    },
    {
        q: "What is the difference between a senior AE and an enterprise AE?",
        a: "A senior AE usually sits between mid-market and enterprise. RepVue's 2026 self-reported data puts the mid-market AE median at $180K OTE and the enterprise AE median at $275K OTE. Enterprise AEs work the largest accounts with big buying groups. Our enterprise AE guide covers that step in detail.",
    },
    {
        q: "How much does a senior account executive make?",
        a: "Expect an OTE between the RepVue mid-market median of $180K and the enterprise median of $275K. RepVue's median for all AEs is $200K OTE on a $105K base. Two live Senior AE postings in October 2026 showed a 50/50 split, one at $240K to $300K OTE and one with a $125K to $140K base.",
    },
    {
        q: "How many years of experience should a senior AE have?",
        a: "The Bridge Group's 2026 survey found AEs average 3.7 years of experience at hire, up from 2.7 in 2022. That covers all AEs, so senior hires usually bring more. Two live Senior AE postings in October 2026 asked for 5+ years and for 5 to 7 years.",
    },
    {
        q: "What should I ask in a senior AE interview?",
        a: "Start with a full walkthrough of a deal they closed. Ask for the lead source, who they worked with internally and on the buyer side, and the hiccups along the way. If a deal with many stakeholders sounds pretty straightforward, dig deeper. Our AE interview questions guide has the full question bank.",
    },
    {
        q: "How long does it take to hire a senior account executive?",
        a: "In my experience, one to three months. Four months is too long. The search stretches with calendar matching, a long interview process and low urgency. Employed candidates give at least two weeks notice, and some reps will not leave while they have pending deals.",
    },
    {
        q: "How long does a senior AE take to ramp?",
        a: "The Bridge Group's 2026 survey of 158 B2B companies puts average AE ramp at 6.2 months, the longest in the study's history. There is always ramp. In my view, a solid playbook shortens it, and a rep who has to build pipeline from scratch takes longer to produce.",
    },
    {
        q: "Should a startup hire a senior AE first?",
        a: "Only if the playbook is ready. Founders often want someone experienced who hits the ground running. Without a solid playbook, inbound or outbound motion, that person spends the early months prospecting. A senior AE fits best once there is a repeatable way to find and close deals.",
    },
];

export default function HowToHireSeniorAccountExecutive() {
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
        { segment: "Senior AE (usually between)", base: "$95K to $140K", ote: "$180K to $275K", quota: "Not reported" },
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
                        <span className="text-grey-600">Hire a Senior AE</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        How to Hire a Senior Account Executive
                    </h1>
                    <p className="text-sm text-grey-500">October 21, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                        <strong>Short answer:</strong> To hire a senior account executive, first decide whether you need a hunter or an account cultivator. Then budget an OTE between mid-market and enterprise levels (RepVue medians of $180K and $275K). Screen with a full deal walkthrough and a role play with the hiring manager. Expect about 6 months of ramp (Bridge Group, 6.2 months).
                    </blockquote>

                    <p className="text-sm text-grey-500">
                        How to read this guide: sections labeled &quot;My view&quot; come from my own work placing sales people at The Kas Group. Everything else comes from a named outside source, linked in the text and listed at the end. Vendor figures are labeled as such.
                    </p>

                    <p>
                        This guide is for founders and sales leaders at B2B tech and SaaS companies with 20 to 200 people. It covers what makes an AE senior, when you need one, what to pay, how long the search takes and what to get right in the first 90 days. For the full interview loop, use the <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions guide</Link>. For the step above senior, use the <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>enterprise AE guide</Link>.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: What Makes an AE &quot;Senior&quot;</h2>
                        <p>
                            Usually it is years of experience. Not always. It depends on the company and how many reps it has. At a company with three reps, the senior AE may simply be the one with the most deals behind them. At a company with forty, senior is often a defined level with its own quota.
                        </p>
                        <p>
                            What I look at is the work. How big are the deals? How long is the sales cycle? How large are the accounts? A senior AE tends to work bigger accounts, larger deals and longer cycles than a mid-level AE. Where the line sits also depends on the leadership and the headcount of the team they join.
                        </p>
                        <p>
                            Experience at hire is rising across the board. <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2026 survey</a> of 158 B2B companies found AEs average 3.7 years of experience at hire, up from 2.7 in 2022. That figure covers all AEs, so a senior hire usually brings more.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: When a Founder Actually Needs a Senior AE</h2>
                        <p>
                            When founders ask for a senior AE, they usually mean someone experienced who hits the ground running. That only works if the ground is there.
                        </p>
                        <p>
                            Without a solid playbook, inbound or outbound motion, a senior AE spends the early months prospecting. They are building pipeline from scratch, so they cannot hit the ground running. That is true whether this is your first sales hire or the fourth rep on a team. There is always ramp. A playbook shortens it.
                        </p>
                        <p>
                            If you are still the one closing deals, read <Link href="/blog/founder-led-sales-first-hire" className={link}>why your first sales hire needs a playbook</Link> before you open the role.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Hunter or Account Cultivator: Decide First</h2>
                        <p>
                            A hunter who brings in new business and an account cultivator who grows existing customers are two different specializations. If you hand the senior AE a book of business, you may want a cultivator. If they will build new business with only a few accounts to work, you need a hunter. Settle this before you write the job description. The <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>enterprise AE guide</Link> goes deeper on this choice.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What to Pay a Senior AE</h2>
                        <p>
                            Use outside data for pay. <a href={SRC.repvue} className={link}>RepVue&apos;s 2026 data</a>, self-reported by reps, shows how pay moves by segment. A senior AE usually sits between mid-market and enterprise.
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
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">All AEs.</strong> <a href={SRC.repvueAe} className={link}>RepVue&apos;s account executive salary data</a>, from 35,676 verified submissions as of October 2026, shows a median base of $105,000 and a median OTE of $200,000.</li>
                            <li><strong className="text-navy-900">Quota.</strong> The Bridge Group found a median AE quota of $960K, which is 4.6x the $200K median OTE. Bridge also has 48% of AEs at quota.</li>
                            <li><strong className="text-navy-900">Live postings.</strong> Two Senior AE postings, live in October 2026, are single examples, not medians. <a href={SRC.compyl} className={link}>Compyl</a> lists $240,000 to $300,000 OTE on a 50/50 split, asks for 5+ years, and expects the AE to source and close $800K to $1.2M+ in ARR a year. <a href={SRC.coworker} className={link}>Coworker.ai</a> lists a 50/50 split on a $125K to $140K base, asks for 5 to 7 years, and prefers Series A to C experience.</li>
                        </ul>
                        <p>
                            Put together, most senior AE offers land between the mid-market median of $180K and the enterprise median of $275K. Some startup postings run above that. For how to structure the plan, read <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>what to pay your first AE</Link>. For every level from SDR to enterprise AE, see <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How to Interview a Senior AE</h2>
                        <p>
                            The <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions guide</Link> has the full question bank, stage by stage. For a senior hire, these are the parts I lean on most.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Walk me through a deal you closed.</strong> Ask for the lead source. Ask who they worked with internally and on the buyer side. Ask about the hiccups along the way. If a deal with many stakeholders comes back as &quot;pretty straightforward&quot;, dig deeper. <a href={SRC.gong} className={link}>Gong</a>, a sales software vendor, found won strategic deals averaged 17 buyer contacts. A senior AE should be able to name the people.</li>
                            <li><strong className="text-navy-900">Look past the logos.</strong> A famous logo on a resume does not prove they built the pipeline. Ask how the deal started.</li>
                            <li><strong className="text-navy-900">Run a role play.</strong> Founders should run it together with the hiring manager, built around your product. The interview guide covers how to set it up.</li>
                            <li><strong className="text-navy-900">Keep it structured.</strong> Ask every candidate the same core questions. <a href={SRC.sackett} className={link}>Sackett and colleagues (2022)</a> found structured interviews predict job performance better, at .42 against .19 for unstructured ones.</li>
                        </ul>
                        <p>
                            Then confirm what you heard with references. The interview guide covers that step.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: How Long It Takes to Hire, and to Ramp</h2>
                        <p>
                            A senior AE search should take one to three months. Four is too long.
                        </p>
                        <p>
                            Several things stretch it. Matching calendars across the team. A long interview process. Low urgency on the hiring side. Employed candidates give at least two weeks notice. And good reps with pending deals will not walk away from them, so their start date waits for the deal.
                        </p>
                        <p>
                            Then comes ramp. The Bridge Group puts average AE ramp at 6.2 months, the longest in the study&apos;s history. <a href={SRC.salesfuel} className={link}>SalesFuel</a>, a vendor survey of 316 US sales managers across all sales roles, reports about 3 months to hire and 5.5 more months to reach peer productivity. A <a href={SRC.blossom} className={link}>Blossom Street Ventures summary</a> of the Bridge survey puts average AE tenure at 3.2 years. With a ramp that long and a tenure that short, the first year carries a lot of weight.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: Where Senior AE Hires Go Wrong in the First 90 Days</h2>
                        <p>
                            The early problems are typical of any sales role. Goals that do not line up. A brand new territory, or one nobody has worked in a long time, where the AE starts from scratch.
                        </p>
                        <p>
                            The main one is misalignment with the role they expected. That is why The Kas Group spends time with each client to learn the good, the bad and the ugly. When the client allows it, we interview some of their employees so we can set accurate expectations with candidates. The last thing we want is to give someone wrong information, have them leave their current role, and watch them walk into a nightmare after 90 days.
                        </p>
                        <p>
                            Set first year expectations before the offer. The <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>enterprise AE guide</Link> covers how. A miss is expensive. SalesFuel puts the average cost of a bad B2B sales hire at $177,171. More on that in <Link href="/guides/cost-of-a-bad-hire" className={link}>the cost of a bad hire</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Works</h2>
                        <p>
                            The Kas Group works three ways. Kas Milestone Search for a senior AE is $10,000 per search, quoted per role. Kas Seat is up to $10,000 a month when the seat covers senior AE and above. Kas Directed Pursuit starts with a conversation about what the company wants. Details are on the <Link href="/programs" className={link}>programs page</Link>, and our <Link href="/recruit/sales" className={link}>sales recruiting page</Link> covers the roles we place.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Hiring a senior AE?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email me your deal size, sales cycle and whether a playbook is in place. I will tell you what profile to look for.
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
                        <p className="text-sm text-grey-500">All are outside sources. None is Kas placement data. Vendor figures are labeled as such.</p>
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            <li>Account Executive Salary, RepVue, as of October 2026. Self-reported data, 35,676 verified submissions. <a href={SRC.repvueAe} className={link}>{SRC.repvueAe}</a></li>
                            <li>Sales Salary Guide: What Sales Reps are Earning in 2026, RepVue, January 2026. Self-reported data. <a href={SRC.repvue} className={link}>{SRC.repvue}</a></li>
                            <li>AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. <a href={SRC.bridge} className={link}>{SRC.bridge}</a></li>
                            <li>The Best Annual SaaS AE Data We&apos;ve Seen, Blossom Street Ventures. A secondary summary of the Bridge Group AE survey. <a href={SRC.blossom} className={link}>{SRC.blossom}</a></li>
                            <li>SalesFuel research on the cost of a bad sales hire, June 2026. Vendor survey of 316 US sales managers. <a href={SRC.salesfuel} className={link}>{SRC.salesfuel}</a></li>
                            <li>Data shows top reps don&apos;t just sell, they orchestrate (with AI), Gong Labs, April 28, 2025. Vendor data on 1.8 million deals. <a href={SRC.gong} className={link}>{SRC.gong}</a></li>
                            <li>Sackett, Zhang, Berry and Lievens, Journal of Applied Psychology, 2022. Peer reviewed. <a href={SRC.sackett} className={link}>{SRC.sackett}</a></li>
                            <li>Senior Account Executive posting, Compyl, live October 2026. Single employer example. <a href={SRC.compyl} className={link}>{SRC.compyl}</a></li>
                            <li>Senior Account Executive posting, Coworker.ai, live October 2026. Single employer example. <a href={SRC.coworker} className={link}>{SRC.coworker}</a></li>
                        </ul>
                    </div>

                    <p className="text-grey-600 text-base">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/account-executive-interview-questions" className={link}>Account Executive Interview Questions</Link>
                        {" · "}
                        <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>How to Hire an Enterprise Account Executive</Link>
                        {" · "}
                        <Link href="/guides/cost-of-a-bad-hire" className={link}>The Cost of a Bad Hire</Link>
                        {" · "}
                        <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>What to Pay Your First AE</Link>
                        {" · "}
                        <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </section>
        </div>
    );
}
