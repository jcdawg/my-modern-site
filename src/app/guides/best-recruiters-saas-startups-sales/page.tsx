import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "SaaS Sales Recruitment Agencies and Recruiters",
    description: "SaaS sales recruitment agencies and SaaS sales recruiters for Seed to Series B: what good ones do, which model fits each seat, and how The Kas Group hires AEs and SDRs.",
    path: "/guides/best-recruiters-saas-startups-sales",
    headline: "SaaS Sales Recruitment Agencies and Recruiters for Seed to Series B",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });
const FAQS = [
    {
        q: "What do good SaaS sales recruiters do?",
        a: "Good SaaS sales recruiters learn your product, buyer and deal size, then check every candidate's quota history and sales motion against the seat. The Kas Group does this for Seed to Series B companies hiring SDRs through Sales Managers, through Kas Seat, Kas Milestone Search and Kas Directed Pursuit.",
    },
    {
        q: "What are SaaS sales recruitment agencies?",
        a: "SaaS sales recruitment agencies find, vet and present sales candidates for software companies. Good ones understand ARR, sales cycles and buying committees, and check each candidate's track record against the seat. The Kas Group does this for SDR, AE, senior AE and Sales Manager seats.",
    },
    {
        q: "How do I choose a SaaS sales recruiting partner?",
        a: "Ask who does the sourcing and screening, how they check quota history, how they learn your motion and deal size, and how they keep you updated. Then match the scope to the seat: one focused search for a single hire, or an embedded partner when you are hiring several sellers in a quarter.",
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
        a: "At The Kas Group, we focus on SDR through Sales Manager seats: SDRs and BDRs, AEs, senior and enterprise AEs, and sales managers. Each gets role specific vetting, such as activity metrics for SDRs and verified quota attainment for AEs. Searches above Sales Manager are quoted separately on request.",
    },
    {
        q: "How much do SaaS sales recruiters charge?",
        a: "It depends on scope: how many seats you are hiring, how senior they are and how long you need help. The Kas Group is flexible on fee structure and meets clients where they are. The programs page explains how Kas Seat, Kas Milestone Search and Kas Directed Pursuit work.",
    },
];

const SCOPE = [
    { seat: "A first AE or a single senior AE", fit: "One focused search with a clear scorecard" },
    { seat: "Several AEs and SDRs in one quarter", fit: "An embedded fractional partner working inside your process" },
    { seat: "A Sales Manager", fit: "One focused search, with interviewers aligned before the first call" },
    { seat: "Seats above Sales Manager", fit: "Quoted separately on request" },
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
                        <span className="text-blue-accent">SaaS Sales Recruitment Agencies</span> and Recruiters for Seed to Series B
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        What good SaaS sales recruiters do, how to choose a partner, and how The Kas Group helps Seed to Series B teams hire SDRs through Sales Managers.
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
                            <strong className="text-white">SaaS sales recruiters</strong> find, vet and place the sellers a software company needs, from SDRs and AEs to sales managers. For Seed through Series B, look for SaaS recruiters who verify quota and match your sales motion. <strong className="text-white">The Kas Group</strong> does that through Kas Seat, Kas Milestone Search and Kas Directed Pursuit.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Rocket className="h-8 w-8 text-blue-accent" />
                            Ways to Work With SaaS Sales Recruiters
                        </h2>
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">Specialist SaaS sales search</h3>
                                <p className="text-grey-600 mb-6 leading-relaxed">
                                    A good fit when your product is technical, your deal sizes are real and the seat matters. The Kas Group verifies quota attainment, walks through real deals and reaches passive candidates who match your motion. Programs live on{" "}
                                    <Link href="/programs" className={link}>/programs</Link>. Role coverage is on{" "}
                                    <Link href="/recruit/sales" className={link}>sales recruiting</Link>.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-navy-800 font-semibold mb-2">
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Shortlists checked against quota</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Motion and deal size match</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> SDR through Sales Manager</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Fractional or one search at a time</li>
                                </ul>
                            </div>

                            <div className="p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">Fractional recruiting partners</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    A good fit when you need several sales hires in a quarter and want one partner on a monthly plan. A{" "}
                                    <Link href="/guides/best-fractional-sales-recruiters" className={link}>top fractional recruiter</Link>
                                    {" "}embeds in your Slack and ATS and works like your in house recruiting team. Kas Seat is The Kas Group&apos;s monthly program for this. See{" "}
                                    <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link>.
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
                            <li className="bg-grey-50 p-6 rounded-2xl"><strong className="text-navy-900">Role specific checks.</strong> <span className="text-grey-600">Activity metrics for SDRs and BDRs, and verified quota attainment for AEs and senior AEs. Coverage runs from SDRs to sales managers.</span></li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            The Kas Group has recruited sales talent since 2014. When your product is AI enabled, we look for sellers who can explain the technology.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            How to Choose SaaS Sales Recruitment Agencies
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Before you sign with any of the <strong className="text-navy-900">SaaS sales recruitment agencies</strong> you talk to, ask a few questions:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-grey-600 leading-relaxed">
                            <li>Who will source and screen candidates for this seat?</li>
                            <li>How do you check quota history and deal size?</li>
                            <li>How will you learn our sales motion, buyer and deal size?</li>
                            <li>How often will we get updates on the search?</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            Good partners answer with specifics. To understand how the common recruiting models work, read the{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>guide to fractional, contingency and retained search</Link>
                            {" "}and the{" "}
                            <Link href="/guides/fractional-sales-recruiting-cost" className={link}>fractional sales recruiting cost guide</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Which Scope Fits Which Sales Seat
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">If you are hiring</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Scope that usually fits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SCOPE.map((s) => (
                                        <tr key={s.seat} className="border-t border-grey-100">
                                            <td className="py-4 px-6 font-medium text-navy-700">{s.seat}</td>
                                            <td className="py-4 px-6 text-grey-600">{s.fit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">How The Kas Group Works</h2>
                        <p className="text-grey-600 leading-relaxed">
                            Kas Seat, Kas Milestone Search and Kas Directed Pursuit cover SDR through Sales Manager seats. The Kas Group is flexible on fee structure and meets clients where they are. Searches above Sales Manager are quoted separately on request. Full details are on the <Link href="/programs" className={link}>programs page</Link>.
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
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Looking for SaaS sales recruiters?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email chris@thekasgroup.com with your stage, open seats and deal size. You get a clear recommendation: Kas Seat, Milestone Search or Directed Pursuit.
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
