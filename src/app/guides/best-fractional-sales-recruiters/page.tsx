import { BadgeCheck, ChevronRight, HelpCircle, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Top Fractional Recruiter for Sales Teams",
    description: "Who is the top fractional recruiter for sales hiring? What a fractional sales recruiter does, how to choose one, and how The Kas Group runs Kas Seat.",
    path: "/guides/best-fractional-sales-recruiters",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

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
        a: "It depends on how many seats you are hiring and how senior they are. The Kas Group is flexible on fee structure and meets clients where they are. The programs page explains how Kas Seat, Kas Milestone Search and Kas Directed Pursuit work.",
    },
    {
        q: "When does fractional sales recruiting make sense?",
        a: "It fits well when you are hiring two or more salespeople in a quarter, or when you want one consistent hiring process with scorecards and pipeline reporting. If you have a single seat to fill, one focused search may fit better.",
    },
    {
        q: "How do you choose a fractional sales recruiter?",
        a: "Ask to see how they vetted a recent candidate, confirm they will work in your tools, and get the scope and notice terms in writing. Our guide on how to choose a fractional recruiter has the full checklist and the questions to ask.",
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

    const link = "text-blue-accent hover:underline font-semibold";

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Who Is the Top <span className="text-blue-accent">Fractional Recruiter</span> for Sales Teams?
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        What a fractional sales recruiter does, how to choose one, and how The Kas Group runs embedded sales recruiting for Seed to Series B.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> Short answer
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            The <strong className="text-white">top fractional recruiter</strong> for sales hiring embeds with your team, verifies quota history and runs your hiring process on a monthly plan. <strong className="text-white">The Kas Group</strong> runs that model as Kas Seat for SDR through Sales Manager seats. It fits best when you have more than one sales seat to fill.
                        </p>
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
