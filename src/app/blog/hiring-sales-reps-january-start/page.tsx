import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Hiring Sales Reps for a January Start",
    description: "Want a sales rep starting in January? Start the search now. Thanksgiving and Christmas slow hiring, and a search can take weeks or months. Here is the backward math.",
    path: "/blog/hiring-sales-reps-january-start",
    headline: "Hiring Sales Reps for a January Start: Why the Search Begins Now",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    indeed: "https://hiringlab.indeed.com/2024/02/12/post-holiday-hangover-job-searches-rise-slightly/",
    shrm: "https://www.shrm.org/executive-network/insights/people-strategy/state-of-recruiting-2025-insights-to-maximize-recruitment",
};

const FAQS = [
    {
        q: "When should I start a search for a January sales hire?",
        a: "Now. A search can take weeks or months, a candidate who has a job usually owes notice, and Thanksgiving and Christmas slow everything down. Starting now gives you room to interview before the holidays and make an offer before the year ends.",
    },
    {
        q: "How long does it take to hire an account executive?",
        a: "In my view, there is no fixed number. Each role is different. It can take multiple weeks or multiple months, depending on how motivated you are to hire, how your process runs and whether your interviewers agree on what they want. SHRM puts median time to fill at roughly a month and a half, across all roles.",
    },
    {
        q: "Do the holidays slow down sales hiring?",
        a: "Usually, yes. Thanksgiving week and the Christmas weeks are slower because people are with family and not in work mode. Indeed Hiring Lab found job searches fell 34% between December 1 and Christmas Day in its 2023 data. Some candidates do have more time to interview, but calendars are hard to line up.",
    },
    {
        q: "Is it a problem if a new sales rep starts in February?",
        a: "Not really. If they start in February, they start in February, and that is fine. A January start does give you and the rep a cleaner read on quota for the year. Do not rush the wrong hire just to hit a date.",
    },
];

const TIMELINE = [
    { when: "This week", stage: "Lock the role scope and comp range. Agree as a team on what you are looking for. Pick a small interview panel. Start the search." },
    { when: "Before Thanksgiving (Thursday, November 26)", stage: "Block interview time on every interviewer's calendar. Get first conversations done." },
    { when: "Between Thanksgiving and Christmas (Friday, December 25)", stage: "Final interviews and the offer. Expect calendars to be tougher in these weeks." },
    { when: "After the offer is accepted", stage: "The candidate gives notice to their current employer." },
    { when: "January", stage: "Start date." },
];

export default function HiringSalesRepsJanuaryStartPost() {
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
            <ArticleJsonLd
                title={PAGE.title}
                description={PAGE.description}
                path={PAGE.path}
                headline={PAGE.headline}
                author={{ jobTitle: "Managing Partner, The Kas Group", description: "12 years in recruiting." }}
            />
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
                        Hiring Sales Reps for a January Start: Why the Search Begins Now
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> October 26, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, Managing Partner, The Kas Group</span>
                    </div>
                    <p className="mt-3 text-sm text-grey-500">Last reviewed: October 26, 2026. I refresh this post each October.</p>
                </div>
                <div className="border-t border-grey-200 mb-10" />
                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">
                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>Short answer:</strong> If you want a sales rep starting in January, start the search now. A search can take weeks or it can take months, depending on the role and how your process runs. A candidate who has a job usually owes notice. And Thanksgiving and Christmas slow everything down.
                    </blockquote>
                    <p>
                        Do the math backward. Thanksgiving is Thursday, November 26. Christmas is Friday, December 25. Take out those weeks, and the time you really have to interview, decide and make an offer before January gets short fast. If you are a CRO or VP of Sales at a 20 to 200 person B2B tech company with an AE seat in next year&apos;s plan, this is your reminder. Yes, in October. Sorry.
                    </p>
                    {/* TODO(Chris): optional short story from a Q4 search, in your words. No client names. */}

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">How long does it take to hire an account executive?</h2>
                    <p>
                        There is no fixed number. Each role is different. It can take multiple months, and it can take multiple weeks. I would love to give you a magic number. I do not have one.
                    </p>
                    <p>
                        It depends on three things: how motivated the company is to hire, how its process works, and whether the interviewers are aligned on what they are looking for. A quick turnaround is possible. Around the holidays, it is more than likely slower.
                    </p>
                    <p>
                        For a benchmark, <a href={SRC.shrm} className={link}>SHRM&apos;s State of Recruiting 2025</a> puts median time to fill, from requisition to offer acceptance, at roughly a month and a half. That covers all roles, not sales specifically, and it stops at the accepted offer. For what changes when the seat is enterprise, see <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>how to hire an enterprise account executive</Link>.
                    </p>
                    {/* TODO(Chris): typical weeks per step (sourcing, interviews, offer), if you want to share them. Do not publish estimates without your numbers. */}

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What do the holidays do to a search?</h2>
                    <p>
                        They slow it down. Thanksgiving week and the Christmas weeks typically drag, because people are not in working mode. They are not thinking about work. They are with their loved ones, which is where they should be.
                    </p>
                    <p>
                        The data backs that up. <a href={SRC.indeed} className={link}>Indeed Hiring Lab</a> found job searches fell 34% between December 1 and Christmas Day, in its look at the 2023 holiday season.
                    </p>
                    <p>
                        There is a flip side. Some candidates have downtime or slow weeks at work, so they can actually take more interviews. That helps. The catch is getting everyone&apos;s calendars to sync up in those weeks. That part is often hard, whether your team sits in Texas, the Southeast or anywhere else.
                    </p>
                    <p>
                        I have had Q4 searches slip into February. It is just kind of part of the practice. The usual causes: too many interviews, people not in alignment, and calendars that will not line up.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">When should you start for a January start?</h2>
                    <p>
                        Now. Here is the sequence, worked backward from the holidays. It is an example of the order things happen in, not a promise of timing.
                    </p>
                    <div className="overflow-x-auto border border-grey-200 rounded-2xl not-prose">
                        <table className="w-full text-left border-collapse text-base">
                            <thead className="bg-grey-50">
                                <tr className="border-b border-grey-200">
                                    <th className="py-3 px-5 font-bold text-navy-900">When (example)</th>
                                    <th className="py-3 px-5 font-bold text-navy-900">Stage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TIMELINE.map((t) => (
                                    <tr key={t.when} className="border-b border-grey-100 last:border-0">
                                        <td className="py-3 px-5 font-bold text-navy-900">{t.when}</td>
                                        <td className="py-3 px-5 text-grey-600">{t.stage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Every role is different, so your dates will move. The order mostly does not.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What should you do this week?</h2>
                    <p>
                        Run the process. It can be a challenge, but it can be done. But somebody needs to run it.
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong className="text-navy-900">Name one owner.</strong> One person runs the search and keeps it moving.</li>
                        <li><strong className="text-navy-900">Return emails and calls.</strong> Make sure people on your side actually get back to candidates.</li>
                        <li><strong className="text-navy-900">Block interview time before Thanksgiving.</strong> Find the time now, while calendars are still open.</li>
                        <li><strong className="text-navy-900">Align your interviewers.</strong> Agree on what you are looking for before the first call. Lock the role scope and the comp range while you are at it. The <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions guide</Link> and <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link> can help.</li>
                        <li><strong className="text-navy-900">Limit the number of interviews.</strong> Every extra round is another set of calendars to sync in December.</li>
                    </ol>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What if you are late?</h2>
                    <p>
                        Then they start in February. There is not a whole lot you can do about it, and that is fine.
                    </p>
                    <p>
                        A January start on a regular calendar does give you a much better idea of quota and that type of thing. That is the reason to try. It is not a reason to rush the wrong person into the seat. Misalignment with the role is what goes wrong early, as I cover in <Link href="/guides/how-to-hire-senior-account-executive" className={link}>how to hire a senior account executive</Link>. If this is one of your first sales hires, <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link> covers how to run it. And if you think a soft market makes this easy, read <Link href="/blog/jobs-report-still-no-great-reps" className={link}>29,000 Jobs Added and Still No Great Reps</Link>.
                    </p>

                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Planning a January start?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">See how The Kas Group runs sales searches on the <Link href="/programs" className="text-white underline">programs page</Link>. Or email me the seat and when you want them starting.</p>
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
                        <li><a href={SRC.indeed} className={link}>Post-Holiday Hangover: Job Searches Rise Slightly, but Postings Languish Compared to Pre-Holiday Levels</a>, Indeed Hiring Lab, February 12, 2024. Job searches fell 34% between December 1 and Christmas Day.</li>
                        <li><a href={SRC.shrm} className={link}>The State of Recruiting 2025</a>, SHRM, October 20, 2025. Median time to fill is roughly a month and a half, all roles, not sales specific.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
