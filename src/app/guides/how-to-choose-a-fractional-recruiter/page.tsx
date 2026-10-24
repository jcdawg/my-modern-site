import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "How to Choose a Fractional Recruiter: Checklist",
    description:
        "How to choose a fractional recruiter: a practical checklist, the questions to ask on the first call, what good answers sound like, and how to run the first 30 days.",
    path: "/guides/how-to-choose-a-fractional-recruiter",
    headline: "How to Choose a Fractional Recruiter: A Practical Checklist",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const FAQS = [
    {
        q: "How do you choose a fractional recruiter?",
        a: "Start with the roles. Pick a partner who recruits those roles every week. Then ask who does the sourcing and screening, how fast you see a first look at the market, how pricing and terms work, and who owns the candidate names. Good answers are specific and come with examples.",
    },
    {
        q: "What questions should I ask a fractional recruiter?",
        a: "Ask which roles they filled most recently, who on their side will source and screen, how they check a sales candidate's quota history, how soon you see a first market scan, how many hours or seats your monthly fee covers, how you pause or stop, and whether you keep every candidate name.",
    },
    {
        q: "What should a fractional recruiter cost?",
        a: "It depends on the model. At The Kas Group, Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 for senior AE and above. Kas Milestone Search is $5,000 for an SDR or BDR, $7,500 for an AE and $10,000 for a senior AE or sales manager. Kas Directed Pursuit is priced on request.",
    },
    {
        q: "How long should I give a fractional recruiter before judging the fit?",
        a: "Agree on the first milestones before you start. A clear scorecard and a first look at the market should come early. At The Kas Group, the market scan lands in 48 to 72 hours for SDR through Sales Manager roles. After that, judge on shortlist quality and how fast interviews move.",
    },
];

const CHECKLIST = [
    { item: "Role focus", look: "They recruit the roles you are hiring, and they can name recent searches like yours." },
    { item: "Who does the work", look: "You know the person who sources, screens and joins your debriefs." },
    { item: "Speed to a first look", look: "They commit to a date for a first market scan or shortlist." },
    { item: "How they screen", look: "For sales roles, they check quota history and deal detail, not just titles." },
    { item: "Pricing and terms", look: "Pricing is written down, with clear terms for pausing or stopping." },
    { item: "Ownership", look: "You own every candidate name, and the work stays in your process and tools." },
    { item: "Reporting", look: "You get a regular update on pipeline, interviews and what the market is telling you." },
];

const QUESTIONS = [
    { q: "Which roles like ours have you filled recently?", good: "Names the roles, the level and what made each search hard." },
    { q: "Who will source, screen and join our debriefs?", good: "Names one accountable person and explains how the work is split." },
    { q: "How soon will we see a first look at the market?", good: "Gives a date and says what the first look will include." },
    { q: "How do you check a sales candidate's track record?", good: "Walks through quota history, deal size and who owned the deal." },
    { q: "What does the monthly fee cover?", good: "Says how many seats or roles are included and what changes the price." },
    { q: "How do we pause or stop?", good: "Explains the notice and what happens to the pipeline." },
    { q: "Who owns the candidates and the data?", good: "You do, in your own tools." },
];

export default function HowToChooseAFractionalRecruiter() {
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
    const th = "py-3 px-5 font-bold text-navy-900";
    const td = "py-3 px-5 text-grey-600";

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
                        <span className="text-grey-600">How to Choose a Fractional Recruiter</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        How to Choose a Fractional Recruiter: A Practical Checklist
                    </h1>
                    <p className="text-sm text-grey-500">October 24, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                        <strong>Short answer:</strong> Choose a fractional recruiter who fills the roles you are hiring every week. Ask who does the sourcing and screening, when you see a first look at the market, what the monthly fee covers, how you pause, and who owns the candidates. Good partners answer each one with specifics.
                    </blockquote>

                    <p>
                        New to the model? Start with <Link href="/guides/fractional-recruiting-guide" className={link}>what fractional recruiting is and how it works</Link>. This page is for the next step: picking the partner.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>How to Choose a Fractional Recruiter: The Checklist</h2>
                        <p>Score each item before your first call and again after it.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse text-base">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className={th}>Checklist item</th>
                                        <th className={th}>What to look for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CHECKLIST.map((c) => (
                                        <tr key={c.item} className="border-b border-grey-100 last:border-0">
                                            <td className={`${td} font-bold text-navy-900`}>{c.item}</td>
                                            <td className={td}>{c.look}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Questions to Ask a Fractional Recruiter</h2>
                        <p>Ask these on the first call. Listen for specifics.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse text-base">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className={th}>Question</th>
                                        <th className={th}>What a good answer sounds like</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {QUESTIONS.map((x) => (
                                        <tr key={x.q} className="border-b border-grey-100 last:border-0">
                                            <td className={`${td} font-bold text-navy-900`}>{x.q}</td>
                                            <td className={td}>{x.good}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Before You Sign: Get These Ready</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A short scorecard for each role: the must haves, the deal size and the motion.</li>
                            <li>A pay band you can share with candidates.</li>
                            <li>Interviewers and time slots for the first two weeks.</li>
                            <li>One owner on your side who can make a call on candidates fast.</li>
                        </ul>
                        <p>A partner can move only as fast as your interview loop.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>The First 30 Days</h2>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong className="text-navy-900">Week 1:</strong> agree on the scorecard, comp band and first milestone.</li>
                            <li><strong className="text-navy-900">Week 1 to 2:</strong> review the first look at the market. Adjust the profile if the market says so.</li>
                            <li><strong className="text-navy-900">Weeks 2 to 4:</strong> first interviews and debriefs. Judge the fit on shortlist quality and pace.</li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Answers These Questions</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000 a month for up to two open sales roles, $8,000 a month for three to five, up to $10,000 for senior AE and above. Month to month.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> $5,000 for an SDR or BDR, $7,500 for an AE, $10,000 for a senior AE or sales manager.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> pricing on request.</li>
                            <li><strong className="text-navy-900">First look:</strong> a market scan in 48 to 72 hours for SDR through Sales Manager roles.</li>
                            <li><strong className="text-navy-900">Ownership:</strong> you own every candidate name, and the work stays in your process and tools.</li>
                        </ul>
                        <p>Details are on the <Link href="/programs" className={link}>programs page</Link>.</p>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Choosing a partner now?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email me the roles you are hiring. I will answer every question on this page for your search.
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

                    <p className="text-grey-600 text-base">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/fractional-recruiting-guide" className={link}>What Is Fractional Recruiting?</Link>
                        {" · "}
                        <Link href="/guides/fractional-recruiting-for-startups" className={link}>Fractional Recruiting for Startups</Link>
                        {" · "}
                        <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>Fractional vs Contingency vs Retained</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </section>
        </div>
    );
}
