import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "29,000 Jobs Added and Still No Great Reps",
    description: "September added 29,000 jobs and unemployment rose to 4.2%. A soft market still does not make great sales reps easy to hire. Why, and what moves them.",
    path: "/blog/jobs-report-still-no-great-reps",
    headline: "29,000 Jobs Added and Still No Great Reps",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    fox: "https://www.foxbusiness.com/economy/us-jobs-report-september-2026",
    jec: "https://www.jec.senate.gov/public/vendor/_accounts/JEC-R/employment/national/Monthly%20Employment%20Update%20(PDF).pdf",
    kpmg: "https://kpmg.com/us/en/articles/2026/september-2026-jobs-report.html",
    signalhire: "https://blog.signalhire.com/top-sales-trends-2026-understanding-sales-hiring-buyer-behavior-and-the-trends-to-watch-as-almost-every-major-market-falls/",
    herizon: "https://herizon.io/research/labor-market/2026-10",
};

const FAQS = [
    {
        q: "Does a soft jobs market make it easier to hire sales reps?",
        a: "In my view, no. A soft market makes it easier to collect resumes. It does not make it easier to find reps who produce. Many strong reps are staying where they are, so the people applying are often a poor match for the job.",
    },
    {
        q: "How many jobs did the US add in September 2026?",
        a: "The Bureau of Labor Statistics reported 29,000 jobs added in September 2026, below the 90,000 economists expected in an LSEG poll. Unemployment rose to 4.2%, and July and August were revised down by a combined 60,000.",
    },
    {
        q: "What does low hire, low fire mean for sales hiring?",
        a: "Vanguard's Adam Schickling used the phrase for September: hiring is subdued and layoffs remain low. For sales, that means fewer strong reps are being pushed onto the market. The ones you want mostly still have jobs.",
    },
    {
        q: "What gets a top sales rep to change jobs right now?",
        a: "In my view, it has to be something that fires the rep up. That means a clear roadmap for growth and an established playbook for bringing in new business. A rep who is producing will not move for a vague pitch.",
    },
    {
        q: "Are companies still hiring SDRs in 2026?",
        a: "SignalHire's own platform data shows US sales role searches down 26.7% year over year, with Sales Development and Lead Generation searches up 67.0% in the US. That is one vendor's internal search data, so treat it as directional.",
    },
];

export default function JobsReportStillNoGreatRepsPost() {
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
                        29,000 Jobs Added and Still No Great Reps
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> October 12, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, The Kas Group</span>
                    </div>
                </div>

                <div className="border-t border-grey-200 mb-10" />

                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>Short answer:</strong> A soft jobs report does not make sales hiring easy. September added only 29,000 jobs and unemployment rose to 4.2%, so founders expect a buyer&apos;s market. What gets easier is collecting resumes that do not match the job. Strong reps are mostly staying put, and moving one takes a reason that fires them up.
                    </blockquote>

                    <p className="text-sm text-grey-500 not-prose">
                        How to read this post: paragraphs under a &quot;My view&quot; label are what I see in live sales searches at The Kas Group. Everything else comes from a named source, linked in the text and listed at the end. SignalHire and Herizon publish their own platform or sample data. I label those figures as directional.
                    </p>

                    <p>
                        Every soft jobs report brings the same founder question. If the market is weak, should sales hiring be easier now? The September numbers are soft. The answer for sales is still no. Here is what the report says, what the sales data adds, and what I see in searches.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What the September Report Says</h2>

                    <p>
                        The Bureau of Labor Statistics reported on October 2 that employers added 29,000 jobs in September, per <a href={SRC.fox} className={link}>Fox Business</a>. Economists polled by LSEG expected 90,000. Unemployment rose to 4.2%. July and August were revised down by a combined 60,000.
                    </p>

                    <p>
                        The <a href={SRC.jec} className={link}>Joint Economic Committee summary of the BLS data</a> breaks it down. Private payrolls rose 46,000. Government fell 17,000. Over the past year, the information sector, which includes tech, lost 120,000 jobs. <a href={SRC.kpmg} className={link}>KPMG</a> called the September gain &quot;dismal&quot; and noted the information sector shed 10,000 jobs in the month.
                    </p>

                    <p>
                        The line that matters most for hiring came from Vanguard senior economist Adam Schickling, quoted by Fox Business: &quot;The underlying story is still a low-hire, low-fire labor market.&quot; He also said layoffs remain remarkably low.
                    </p>

                    <p>
                        Read that slowly. Low hire means companies are adding few people. Low fire means few people are being pushed out. The reps who are good at their jobs mostly still have them.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What the Sales Data Adds</h2>

                    <p>
                        The BLS does not break out sales reps by role. Two outside sources give a rough read. Both use their own data, so treat them as directional.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">SignalHire (vendor, internal search data).</strong> In a <a href={SRC.signalhire} className={link}>September 14 report</a> updated October 6, SignalHire says US searches for sales roles on its platform fell 26.7% from 2025 to 2026. Sales Development and Lead Generation was the exception in the US, up 67.0%. Globally, Sales Leadership and Commercial Strategy searches rose 107.0%.</li>
                        <li><strong className="text-navy-900">Herizon (global posting sample, written for a Finland audience).</strong> Its <a href={SRC.herizon} className={link}>October 5 report</a> covers about 60,000 global postings. Startup postings rose 90% month over month to 6,831. Sales as a skill fell from 69.9 to 55.8 mentions per 1,000 postings, and Account Executive postings fell from 2,566 to 2,293.</li>
                    </ul>

                    <p>
                        Put those next to the BLS numbers and you get a split picture. Overall hiring is slow. Startups are still opening seats. Demand is moving toward SDRs and sales leaders. None of that says great reps are easy to find.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: More Resumes, Fewer Fits</h2>

                    <p>
                        Founders do think a soft market makes sales hiring easier. The logic sounds right. More people out of work should mean more good people to choose from.
                    </p>

                    <p>
                        What actually gets easier is getting resumes that do not match the job. You also see more reps who look fine on paper and do not produce. Post an AE role in a soft month and the inbox fills up. Then you start reading, and the stack is mostly the wrong segment, the wrong motion, or a track record that does not hold up on a call.
                    </p>

                    <p>
                        Volume feels like progress. It is not the same as a shortlist. A pile of applicants still has to be sorted, and someone has to do it.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: The Reps You Want Are Staying Put</h2>

                    <p>
                        A lot of reps are staying where they are right now. That matches the low hire, low fire read. If you are hitting your number and your company is stable, a weak market gives you a reason to stay.
                    </p>

                    <p>
                        To get one of those reps to move, the job has to fire them up. Two things do the most work. First, a clear roadmap for growth: where this seat goes in a year or two, and what the rep has to do to get there. Second, an established playbook for bringing in new business. A producing rep wants to see a real motion behind the job before they leave one that works.
                    </p>

                    <p>
                        If you cannot describe both, the strong rep will hear the pitch and stay put. The people who say yes will be the ones with less to lose.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What to Do Before You Post the Role</h2>

                    <p>
                        Write down the growth path for the seat. Write down how new business comes in today, who owns outbound, and what the first 90 days look like. If the playbook only lives in your head, start with <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>.
                    </p>

                    <p>
                        Then make sure the package clears the market. <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>What to Pay Your First AE</Link> covers OTE bands by segment. If you are weighing an SDR against AI outreach tools, read <Link href="/blog/ai-sdr-who-you-still-need" className={link}>Salesforce Just Shipped an AI SDR. Here&apos;s Who You Still Need</Link>.
                    </p>

                    <p>
                        Finally, plan to go find people instead of waiting for them. The reps you want are not applying. That is the case for <Link href="/guides/fractional-recruiting-guide" className={link}>fractional recruiting</Link>, where a recruiter works inside your search and reaches out to people who are not looking. The three ways The Kas Group works, Kas Seat, Kas Milestone Search and Kas Directed Pursuit, are on the <Link href="/programs" className={link}>programs page</Link>.
                    </p>

                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Hiring reps in a slow market?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Email me the seat, your stage and how new business comes in today. You get a straight read on what it will take to move a rep who is producing.</p>
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
                        <li><a href={SRC.fox} className={link}>September jobs report: US economy added jobs at a slower pace amid uncertainty</a>, Fox Business, October 2, 2026. BLS headline of 29,000 jobs, the 90,000 LSEG estimate, 4.2% unemployment, the combined 60,000 downward revision, and the Adam Schickling quote.</li>
                        <li><a href={SRC.jec} className={link}>Employment Situation, September 2026</a>, Joint Economic Committee summary of BLS data, released October 2, 2026. Private payrolls up 46,000, government down 17,000, information sector down 120,000 over the year.</li>
                        <li><a href={SRC.kpmg} className={link}>Payroll numbers fuel consumer angst in September</a>, KPMG, October 2, 2026. Information sector down 10,000 in September.</li>
                        <li><a href={SRC.signalhire} className={link}>Top Sales Trends 2026</a>, SignalHire, September 14, 2026 (updated October 6, 2026). Vendor internal search data. US sales searches down 26.7%, US SDR searches up 67.0%, global sales leadership searches up 107.0%.</li>
                        <li><a href={SRC.herizon} className={link}>October 2026 labor market report</a>, Herizon, October 5, 2026. Global sample of about 60,000 postings, written for a Finland audience. Startup postings up 90% to 6,831, sales share down from 69.9 to 55.8 per 1,000.</li>
                    </ul>

                    <p className="text-grey-600">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>
                        {" · "}
                        <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>What to Pay Your First AE</Link>
                        {" · "}
                        <Link href="/blog/ai-sdr-who-you-still-need" className={link}>Who You Still Need With an AI SDR</Link>
                        {" · "}
                        <Link href="/guides/fractional-recruiting-guide" className={link}>What Is Fractional Recruiting?</Link>
                        {" · "}
                        <Link href="/blog/sdr-team-cut-aes-prospect" className={link}>They Cut the SDRs. Now Every AE Prospects.</Link>                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
