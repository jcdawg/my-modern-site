import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "They Cut the SDRs. Now Every AE Prospects.",
    description: "Companies are cutting SDR teams and handing prospecting to AEs with bigger quotas. Who thrives, who burns out, and how to test an AE before you hire.",
    path: "/blog/sdr-team-cut-aes-prospect",
    headline: "They Cut the SDRs. Now Every AE Prospects.",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    reddit: "https://www.reddit.com/r/salesdevelopment/comments/1m4vfrf/has_anyone_elses_company_gutted_all_of_their_sdrs/",
    saastr: "https://www.saastr.com/the-great-sdr-downsizing-36-of-b2b-companies-cut-sales-development-teams-in-2025/",
    bridge: "https://www.bridgegroupinc.com/research/2025-sdr-models-metrics-report-the-bridge-group",
    iconiq: "https://www.iconiq.com/growth/reports/gtm-org-structure-ai-2026",
};

const FAQS = [
    {
        q: "What happens to AEs when a company cuts its SDR team?",
        a: "The AEs take over prospecting, usually with less selling time and often with a higher number. In my view, AEs who already built their own pipeline do very well. AEs who relied on the company and the SDRs for meetings struggle, and many quit, burn out or move on.",
    },
    {
        q: "How many companies have cut SDR headcount?",
        a: "Emergence Capital's April 2025 survey of 560+ venture-backed B2B software companies, reported by SaaStr, found 36% decreased SDR and BDR headcount over the prior 12 months, the highest share of any sales role. SaaStr also reported that 44% kept their SDR teams the same size.",
    },
    {
        q: "What makes an AE good at prospecting for themselves?",
        a: "In my view, time management. They block time to reach new potential customers. They do not chase deals with a low chance of closing. They are selfish with their time, so the prospecting blocks stay protected and the funnel does not go dry.",
    },
    {
        q: "How do you test whether an AE candidate can prospect?",
        a: "Bring them into the office. Sit them with someone, let them listen to calls and the script, then have them make calls. Booking a meeting is nice, but that is not the test. Watch whether they stay composed, handle tough calls, and move to the next call without dwelling on the last one.",
    },
    {
        q: "Are leaner sales teams actually more productive?",
        a: "ICONIQ's 2026 GTM report, based on 150+ B2B software GTM leaders, says the most AI-forward, high-performing companies run GTM teams 20 to 30% leaner than peers. High AI adopters generate about 2x net new ARR per GTM FTE, $640K vs $370K.",
    },
];

export default function SdrTeamCutAesProspectPost() {
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
        <div className="bg-white py-16 sm:py-24">
            <ArticleJsonLd title={PAGE.title} description={PAGE.description} path={PAGE.path} headline={PAGE.headline} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="mx-auto max-w-3xl px-6 lg:px-8">

                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-blue-accent transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Insights
                    </Link>
                </div>

                <div className="mb-10">
                    <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-navy-700 mb-4">Sales Leadership</span>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl leading-tight mb-6">
                        They Cut the SDRs. Now Every AE Prospects.
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> October 13, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, The Kas Group</span>
                    </div>
                </div>

                <div className="border-t border-grey-200 mb-10" />

                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>Short answer:</strong> When a company cuts its SDR team, the AEs inherit prospecting on top of a bigger number. AEs who always built their own pipeline do very well. AEs who waited for meetings to show up struggle, burn out or leave. With fewer seats to fill, hiring the AE who can prospect matters more.
                    </blockquote>

                    <p className="text-sm text-grey-500 not-prose">
                        How to read this post: paragraphs under a &quot;My view&quot; label are what I see in live sales searches at The Kas Group. Everything else comes from a named source, linked in the text and listed at the end. The Reddit post is anonymous, so I treat it as one rep&apos;s account, not data.
                    </p>

                    <p>
                        A lot of companies made the same move over the last year. They cut the SDR team, bought some AI tools, and told the AEs to prospect for themselves. The quota did not go down. Here is what the data says, what reps are saying, and what it means for who you hire next.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What One Rep Described</h2>

                    <p>
                        An anonymous post on <a href={SRC.reddit} className={link}>r/salesdevelopment</a> put it plainly. The poster wrote that &quot;our company wiped out the entire sdr team in one day.&quot; The company then brought in software and AI tools for prospecting. The post goes on: &quot;smb, AE, and enterprise are all expected to prospect for themselves now and hit higher quota while having less time.&quot;
                    </p>

                    <p>
                        Other replies in the same thread describe similar cuts. One commenter wrote that a small SaaS company &quot;gutted the SDR&apos;s and the AM&apos;s. Made all the AE&apos;s pick up those responsibilities. Didn&apos;t go well as you can imagine.&quot; These are anonymous posts. They are not a survey. They do match what the numbers below show.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What the Numbers Say</h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">SDR teams took the biggest cut.</strong> <a href={SRC.saastr} className={link}>SaaStr reported</a> on Emergence Capital&apos;s April 2025 survey of 560+ venture-backed B2B software companies. 36% decreased SDR and BDR headcount over the prior 12 months, the highest share of any sales role. SaaStr also noted that 44% kept their SDR teams the same size.</li>
                        <li><strong className="text-navy-900">Fewer SDRs are hitting their number.</strong> <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2025 SDR report</a>, a survey of 351 B2B companies, found 60% of SDRs at quota. That is the lowest in the study&apos;s history.</li>
                        <li><strong className="text-navy-900">Leaner teams are expected to produce more per head.</strong> <a href={SRC.iconiq} className={link}>ICONIQ&apos;s 2026 GTM report</a>, drawn from 150+ B2B software GTM leaders, says the most AI-forward, high-performing companies run GTM teams 20 to 30% leaner than peers. High AI adopters generate about 2x net new ARR per GTM FTE, $640K vs $370K.</li>
                    </ul>

                    <p>
                        ICONIQ also says sales and post-sales teams are still expected to grow roughly 10 to 20% in 2026. So sales hiring has not stopped. Companies are hiring fewer people per dollar of revenue, and they expect each one to carry more.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: Cutting the SDRs Weeds Out the Chaff</h2>

                    <p>
                        When the SDRs go, you find out fast who can sell on their own. AEs who already did their own prospecting will do extremely well. They never relied only on the company and the SDRs to fill their calendar. Losing the SDR team barely changes their week.
                    </p>

                    <p>
                        The AEs who did rely on that pipeline will struggle. Some will quit. Some will burn out. Some will move on to a company that still has SDRs. That is hard on the people involved. It also tells the company exactly who it has.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: Self-Prospecting AEs Guard Their Time</h2>

                    <p>
                        The AEs who can prospect for themselves are very good at time management. That is the common thread.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>They block time to reach new potential customers, and they keep those blocks.</li>
                        <li>They do not chase deals with a low chance of closing.</li>
                        <li>They are selfish with their time. Internal meetings and long shot deals do not eat the prospecting hours.</li>
                    </ul>

                    <p>
                        Because the blocks stay protected, their funnel never goes dry. They do not have a great quarter and then an empty one. That is the profile you need when nobody else is booking meetings for the rep.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: Fewer Hires Means the Right Hire Matters More</h2>

                    <p>
                        When a team had ten AEs and a room full of SDRs, one weak hire could hide. The SDRs fed everyone, and the strong reps carried the number. Take the SDRs away and cut the team down to a few AEs, and there is nowhere to hide. Every seat has to build its own pipeline and close it.
                    </p>

                    <p>
                        That changes what you screen for. A great closer who has always been handed meetings is a risky hire for a team with no SDRs. You need the AE who builds pipeline on their own. Find that out before the offer.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: How to Test It</h2>

                    <p>
                        You can test this before you hire. Here is how I would do it.
                    </p>

                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Bring them into the office.</li>
                        <li>Sit them with someone on your team.</li>
                        <li>Let them listen to live calls and read the script.</li>
                        <li>Then have them make calls themselves.</li>
                    </ol>

                    <p>
                        Setting an appointment is great. That is not what you are grading. Watch whether they stay composed. Watch how they handle a tough call. Most of all, watch what happens after a bad one. The right AE gets off a bad call and rolls into the next one without dwelling on the last outcome.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Where to Go From Here</h2>

                    <p>
                        If you are thinking about AI tools in place of SDRs, read <Link href="/blog/ai-sdr-who-you-still-need" className={link}>Salesforce Just Shipped an AI SDR. Here&apos;s Who You Still Need</Link>. If you expect a soft market to make this hire easy, read <Link href="/blog/jobs-report-still-no-great-reps" className={link}>29,000 Jobs Added and Still No Great Reps</Link>. If you are still the one closing every deal, start with <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>.
                    </p>

                    <p>
                        The AEs who prospect well are usually busy and not applying. Finding them means going out and calling them. That is the work behind <Link href="/guides/fractional-recruiting-guide" className={link}>fractional recruiting</Link>. The three ways The Kas Group works, Kas Seat, Kas Milestone Search and Kas Directed Pursuit, are on the <Link href="/programs" className={link}>programs page</Link>.
                    </p>

                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Hiring AEs without an SDR team?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Email me the seat, the quota and how pipeline gets built today. You get a straight read on the AE profile that can carry it.</p>
                        <a
                            href="mailto:chris@thekasgroup.com"
                            className="inline-block rounded-md bg-blue-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors"
                        >
                            Email chris@thekasgroup.com
                        </a>
                    </div>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Frequently Asked Questions</h2>

                    <div className="space-y-6 pt-2 not-prose">
                        {FAQS.map((f) => (
                            <div key={f.q} className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 mb-2">{f.q}</h3>
                                <p className="text-grey-600">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Sources</h2>

                    <ul className="list-disc pl-6 space-y-2 text-base">
                        <li><a href={SRC.reddit} className={link}>Has anyone else&apos;s company gutted all of their SDR&apos;s?</a>, r/salesdevelopment, 2025. Anonymous Reddit post and replies. One rep&apos;s account, not data.</li>
                        <li><a href={SRC.saastr} className={link}>The Great SDR Downsizing: 36% of B2B Companies Cut Sales Development Teams in 2025</a>, SaaStr, June 23, 2025. Reports Emergence Capital&apos;s April 2025 &quot;Beyond Benchmarks&quot; survey of 560+ venture-backed B2B software companies. 36% decreased SDR and BDR headcount; 44% kept the same size.</li>
                        <li><a href={SRC.bridge} className={link}>SDR Models, Motions &amp; Metrics: 2025 Research Report</a>, The Bridge Group, February 6, 2025. Survey of 351 B2B companies. 60% of SDRs at quota, the lowest on record.</li>
                        <li><a href={SRC.iconiq} className={link}>Leaner, Smarter, Flatter: Inside the Modern GTM Organization</a>, ICONIQ, 2026. 150+ B2B software GTM leaders. AI-forward high performers 20 to 30% leaner; about 2x net new ARR per GTM FTE ($640K vs $370K); sales and post-sales headcount expected to grow roughly 10 to 20%.</li>
                    </ul>

                    <p className="text-grey-600">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/blog/jobs-report-still-no-great-reps" className={link}>29,000 Jobs Added and Still No Great Reps</Link>
                        {" · "}
                        <Link href="/blog/ai-sdr-who-you-still-need" className={link}>Who You Still Need With an AI SDR</Link>
                        {" · "}
                        <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>
                        {" · "}
                        <Link href="/guides/fractional-recruiting-guide" className={link}>What Is Fractional Recruiting?</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
