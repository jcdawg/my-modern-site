import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "AE OTE by Level: SDR to Enterprise AE Pay (2026)",
    description:
        "Account executive OTE and base pay by level, from SDR to enterprise AE, using RepVue and Bridge Group data plus dated job postings. Sourced and linked.",
    path: "/guides/account-executive-ote-by-level",
    headline: "Account Executive OTE by Level: SDR to Enterprise AE Pay in 2026",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
    bridgeAe: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    bridgeSdr: "https://www.bridgegroupinc.com/research/2025-sdr-models-metrics-report-the-bridge-group",
    compyl: "https://jobs.ashbyhq.com/compyl/5aa4c145-c120-459f-a64c-2b5ce2c212f5",
    coworker: "https://jobs.ashbyhq.com/coworker/5ddd4b0b-089a-4a72-87be-b2887bad96b0",
};

const FAQS = [
    {
        q: "What is the OTE for an account executive by level?",
        a: "RepVue's 2026 self-reported medians put SMB AEs at $135K OTE, mid-market AEs at $180K and enterprise AEs at $275K. SDRs sit at $85K. Senior AE has no separate RepVue median, and two dated postings from October 2026 showed $240K to $300K OTE and a $125K to $140K base.",
    },
    {
        q: "What is the median OTE for all account executives?",
        a: "RepVue's 2026 data puts the median at $200K OTE on a $100K base across all AE segments. The Bridge Group's 2026 survey of 158 B2B companies also found a median AE OTE of $200K.",
    },
    {
        q: "What is the OTE for an SDR in 2026?",
        a: "RepVue's 2026 self-reported median is $85K OTE on a $60K base. The Bridge Group's 2025 survey of 351 B2B companies found a median SDR OTE of $80K.",
    },
    {
        q: "What is a typical base to variable split for an AE?",
        a: "RepVue reports that base lands between 50% and 53% of OTE across closing AE roles. SDRs keep about 71% of OTE as base. Both October 2026 senior AE postings cited here use a 50/50 split.",
    },
    {
        q: "How much does an enterprise AE make?",
        a: "RepVue's 2026 self-reported median for an enterprise AE is $275K OTE on a $140K base, across all company sizes. Strategic AEs, who often carry the largest named accounts, sit at a $300K median OTE.",
    },
];

const ROWS = [
    { level: "SDR", base: "$60K", ote: "$85K", src: "RepVue 2026. Bridge Group 2025 median OTE is $80K." },
    { level: "SMB AE", base: "$70K", ote: "$135K", src: "RepVue 2026" },
    { level: "Mid-market AE", base: "$95K", ote: "$180K", src: "RepVue 2026" },
    { level: "All AEs (reference)", base: "$100K", ote: "$200K", src: "RepVue 2026. Bridge Group 2026 median OTE is also $200K." },
    { level: "Senior AE", base: "$120K to $150K", ote: "$240K to $300K", src: "Compyl posting, October 2026. Single example, not a median." },
    { level: "Senior AE", base: "$125K to $140K", ote: "Not listed", src: "Coworker.ai posting, October 2026. Single example, not a median." },
    { level: "Enterprise AE", base: "$140K", ote: "$275K", src: "RepVue 2026" },
    { level: "Strategic AE", base: "$150K", ote: "$300K", src: "RepVue 2026" },
];

export default function AccountExecutiveOteByLevel() {
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
                        <span className="text-grey-600">AE OTE by Level</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        Account Executive OTE by Level: SDR to Enterprise AE Pay in 2026
                    </h1>
                    <p className="text-sm text-grey-500">October 24, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                        <strong>Short answer:</strong> RepVue&apos;s 2026 self-reported medians put SDR OTE at $85K, SMB AE at $135K, mid-market AE at $180K and enterprise AE at $275K. The median across all AEs is $200K, and the Bridge Group&apos;s 2026 survey lands on the same number. Senior AE has no separate median. Dated postings from October 2026 run $240K to $300K OTE.
                    </blockquote>

                    <p className="text-sm text-grey-500">
                        All figures on this page come from named outside sources, linked in the text and listed at the end. None of it is Kas placement data. RepVue figures are self-reported by reps. Postings are single examples, not medians.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>AE OTE and Base Pay by Level</h2>
                        <p>
                            Medians are from <a href={SRC.repvue} className={link}>RepVue&apos;s 2026 sales salary guide</a>, July 2026 update, unless the row says otherwise.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse text-base">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-3 px-5 font-bold text-navy-900">Level</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">Base</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">OTE</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ROWS.map((r) => (
                                        <tr key={r.level + r.src} className="border-b border-grey-100 last:border-0">
                                            <td className="py-3 px-5 font-bold text-navy-900">{r.level}</td>
                                            <td className="py-3 px-5 text-grey-600">{r.base}</td>
                                            <td className="py-3 px-5 text-grey-600">{r.ote}</td>
                                            <td className="py-3 px-5 text-grey-600">{r.src}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>SDR OTE</h2>
                        <p>
                            RepVue&apos;s median SDR earns $85K OTE on a $60K base. <a href={SRC.bridgeSdr} className={link}>The Bridge Group&apos;s 2025 SDR survey</a> of 351 B2B companies found a median OTE of $80K. RepVue notes that SDRs keep about 71% of OTE as base.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>SMB and Mid-Market AE OTE</h2>
                        <p>
                            RepVue puts SMB AEs at $135K OTE on a $70K base and mid-market AEs at $180K on a $95K base. Across closing AE roles, RepVue reports base at 50% to 53% of OTE. For a first AE at a startup, read <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>what to pay your first AE</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Senior AE OTE</h2>
                        <p>
                            No survey we found reports a separate senior AE median. Two dated postings show where offers land. <a href={SRC.compyl} className={link}>Compyl</a>, live in October 2026, lists $240K to $300K OTE on a $120K to $150K base with a 50/50 split. <a href={SRC.coworker} className={link}>Coworker.ai</a>, live in October 2026, lists a $125K to $140K base with a 50/50 split. For how to hire one, read <Link href="/guides/how-to-hire-senior-account-executive" className={link}>how to hire a senior account executive</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Enterprise AE OTE</h2>
                        <p>
                            RepVue&apos;s median enterprise AE earns $275K OTE on a $140K base, across all company sizes. Strategic AEs sit at $300K on a $150K base. <a href={SRC.bridgeAe} className={link}>The Bridge Group&apos;s 2026 AE survey</a> of 158 B2B companies found a median AE quota of $960K across all AEs. For hunters versus account growers at this level, read <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>how to hire an enterprise account executive</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Works</h2>
                        <p>
                            Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five. Kas Milestone Search is $5,000 for an SDR or BDR, $7,500 for an AE and $10,000 for a senior AE or sales manager. Details are on the <Link href="/programs" className={link}>programs page</Link>. Choosing a partner for the search? See our guide to <Link href="/guides/best-recruiters-saas-startups-sales" className={link}>SaaS sales recruiters</Link>.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Setting AE pay?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email me the role, the segment and your deal size. I will tell you what I am seeing.
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
                            <li>Sales Salary Guide: What Sales Reps are Earning in 2026, RepVue, January 2, 2026, July 2026 update. Self-reported data. <a href={SRC.repvue} className={link}>{SRC.repvue}</a></li>
                            <li>AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. <a href={SRC.bridgeAe} className={link}>{SRC.bridgeAe}</a></li>
                            <li>SDR Models &amp; Metrics Report, The Bridge Group, 2025. Survey of 351 B2B companies. <a href={SRC.bridgeSdr} className={link}>{SRC.bridgeSdr}</a></li>
                            <li>Senior Account Executive posting, Compyl, live October 2026. Single employer example. <a href={SRC.compyl} className={link}>{SRC.compyl}</a></li>
                            <li>Senior Account Executive posting, Coworker.ai, live October 2026. Single employer example. <a href={SRC.coworker} className={link}>{SRC.coworker}</a></li>
                        </ul>
                    </div>

                    <p className="text-grey-600 text-base">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/how-to-hire-senior-account-executive" className={link}>How to Hire a Senior Account Executive</Link>
                        {" · "}
                        <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>How to Hire an Enterprise Account Executive</Link>
                        {" · "}
                        <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>What to Pay Your First AE</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </section>
        </div>
    );
}
