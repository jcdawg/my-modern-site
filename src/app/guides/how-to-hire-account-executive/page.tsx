import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "How to Hire an Account Executive (Mid-Level Guide)",
    description:
        "How to hire a mid-level account executive: motion match, pay from public sources, interview scorecard, time to hire and ramp. Cross-links to senior and enterprise AE guides.",
    path: "/guides/how-to-hire-account-executive",
    headline: "How to Hire an Account Executive: Mid-Level AE Hiring Guide",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
    bridge: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    shrm: "https://www.shrm.org/executive-network/insights/people-strategy/state-of-recruiting-2025-insights-to-maximize-recruitment",
};

const FAQS = [
    {
        q: "How do you hire an account executive?",
        a: "Lock the motion (hunt vs grow accounts), set OTE from public pay data, run a structured deal walkthrough and role play, and score every candidate the same way. Use the AE interview questions guide and the hiring scorecard. For senior or enterprise seats, use those dedicated guides instead.",
    },
    {
        q: "How long does it typically take to hire an account executive?",
        a: "SHRM's State of Recruiting 2025 puts median time to fill at roughly a month and a half, from job requisition to offer acceptance, across all roles, not sales specifically. Real AE searches vary with calendar matching, interview length and how urgent the seat is.",
    },
    {
        q: "What should a mid-level AE get paid?",
        a: "RepVue's 2026 self-reported data puts mid-market AEs at a $180K median OTE on a $95K base, and all AEs at $200K OTE on a $100K base. The Bridge Group's 2026 survey of 158 B2B companies also found a median AE OTE of $200K. See AE OTE by level for the full ladder.",
    },
    {
        q: "How long does an account executive take to ramp?",
        a: "The Bridge Group's 2026 survey of 158 B2B companies puts average AE ramp at 6.2 months. A clear playbook shortens it. A rep who has to invent the motion takes longer.",
    },
    {
        q: "When should I hire a mid-level AE instead of a senior or enterprise AE?",
        a: "Hire mid-level when the deal size and cycle sit in mid-market, not the largest enterprise accounts. If the seat needs bigger buying groups and longer cycles, use the senior AE or enterprise AE guide.",
    },
    {
        q: "What interview questions work for a mid-level AE?",
        a: "The same core set as other AE seats: pipeline sourcing, hunt vs farm, quota in dollars, a full deal walkthrough with hiccups, and a role play on your product. Details are in the AE interview questions guide.",
    },
];

export default function HowToHireAccountExecutive() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    const link = "text-blue-accent hover:underline";
    const h2 = "text-3xl font-bold text-navy-900";

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
                        <span className="text-grey-600">Hire an Account Executive</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        How to Hire an Account Executive: Mid-Level AE Hiring Guide
                    </h1>
                    <p className="text-sm text-grey-500">November 9, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">
                    <div className="p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent space-y-3">
                        <h2 className="text-xl font-bold text-navy-900">Direct answer</h2>
                        <p className="text-base text-grey-700 leading-relaxed">
                            To hire a mid-level account executive, decide hunt vs farm first, then set pay from public data (<a href={SRC.repvue} className={link}>RepVue</a> mid-market median $180K OTE; all AE median $200K). Run a structured deal walkthrough and role play, and score every candidate the same way with the <Link href="/hiring-scorecard" className={link}>hiring scorecard</Link>. <a href={SRC.shrm} className={link}>SHRM</a> puts median time to fill at roughly a month and a half across all roles. <a href={SRC.bridge} className={link}>The Bridge Group</a> puts average AE ramp at 6.2 months.
                        </p>
                    </div>

                    <p className="text-sm text-grey-500">
                        How to read this guide: sections labeled &quot;My view&quot; come from live sales searches at The Kas Group. Comp, time to fill and ramp figures come from named outside sources. This page is for mid-level AE seats. For senior seats see <Link href="/guides/how-to-hire-senior-account-executive" className={link}>how to hire a senior account executive</Link>. For enterprise seats see <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>how to hire an enterprise account executive</Link>.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>Who This Guide Is For</h2>
                        <p>
                            Mid-level AE hiring: mid-market deal sizes, a proven motion, and a seat that is not yet senior or enterprise. If your first sales hire is still founder led, start with <Link href="/blog/founder-led-sales-first-hire" className={link}>your first sales hire needs a playbook</Link> before you post the role.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Step 1: Lock the Motion</h2>
                        <p>
                            My view: decide whether the AE will win new customers or grow existing ones before the first interview. Those are different jobs. A hunter who only knows inbound will struggle on a cold outbound seat, and the reverse is also true.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Step 2: Set Pay From Public Sources</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><a href={SRC.repvue} className={link}>RepVue 2026</a>: mid-market AE median $180K OTE on a $95K base; all AE median $200K OTE on a $100K base.</li>
                            <li><a href={SRC.bridge} className={link}>Bridge Group 2026</a> survey of 158 B2B companies: median AE OTE $200K; median quota $960K.</li>
                        </ul>
                        <p>
                            Full ladder from SDR to enterprise AE: <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Step 3: Interview With a Scorecard</h2>
                        <p>
                            Use the same ten questions for every candidate. Phone screen for pipeline sourcing, hunt vs farm, and quota in dollars. Deal walkthrough for lead source, team help and hiccups. Role play on your product. The full bank is in <Link href="/guides/account-executive-interview-questions" className={link}>account executive interview questions</Link>. Generate a role specific scorecard with what a 5 looks like on the <Link href="/hiring-scorecard" className={link}>hiring scorecard</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Time to Hire and Ramp</h2>
                        <p>
                            <a href={SRC.shrm} className={link}>SHRM&apos;s State of Recruiting 2025</a> puts median time to fill at roughly a month and a half, from job requisition to offer acceptance, for both executive and nonexecutive roles. That is an all roles figure, not sales specific, and it stops at the accepted offer.
                        </p>
                        <p>
                            After the offer, plan for ramp. <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2026 AE survey</a> puts average AE ramp at 6.2 months, the longest in that study&apos;s history. More on timing in <Link href="/guides/how-long-does-it-take-to-hire-an-account-executive" className={link}>how long it takes to hire an account executive</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Runs Mid-Level AE Searches</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000 a month for up to two open sales roles and $8,000 a month for three to five.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> AE $7,500.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> on request.</li>
                        </ul>
                        <p>
                            Details are on the <Link href="/programs" className={link}>programs page</Link>.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Hiring a mid-level AE?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email me the motion, ACV band and OTE you can pay. I will tell you whether mid-level, senior or enterprise is the right seat.
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
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            <li>The State of Recruiting 2025, SHRM. Median time to fill roughly a month and a half, all roles. <a href={SRC.shrm} className={link}>{SRC.shrm}</a></li>
                            <li>AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. Average AE ramp 6.2 months; median AE OTE $200K. <a href={SRC.bridge} className={link}>{SRC.bridge}</a></li>
                            <li>Sales Salary Guide: What Sales Reps are Earning in 2026, RepVue. Self-reported. Mid-market AE median $180K OTE; all AE median $200K OTE. <a href={SRC.repvue} className={link}>{SRC.repvue}</a></li>
                        </ul>
                    </div>

                    <p className="text-grey-600 text-base">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/how-to-hire-senior-account-executive" className={link}>How to Hire a Senior Account Executive</Link>
                        {" · "}
                        <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>How to Hire an Enterprise Account Executive</Link>
                        {" · "}
                        <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by Level</Link>
                        {" · "}
                        <Link href="/guides/account-executive-interview-questions" className={link}>AE Interview Questions</Link>
                        {" · "}
                        <Link href="/hiring-scorecard" className={link}>Hiring Scorecard</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
