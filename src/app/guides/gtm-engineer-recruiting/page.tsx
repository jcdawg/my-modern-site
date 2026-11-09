import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "GTM Engineer Recruiting and Sales Engineer Hiring",
    description:
        "How to recruit a GTM engineer vs a sales engineer: what to screen for, public-source pay ranges, and how The Kas Group runs these searches.",
    path: "/guides/gtm-engineer-recruiting",
    headline: "GTM Engineer Recruiting: How to Hire GTM Engineers and Sales Engineers",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    bls: "https://www.bls.gov/ooh/sales/sales-engineers.htm",
    revnu: "https://revnu.partners/blog/gtm-engineer-hiring",
    techcrunch: "https://techcrunch.com/2026/10/02/techcrunch-disrupt-2026-clays-kareem-amin-on-the-rise-of-the-gtm-engineer/",
    gtmCouncil: "https://gtmcouncil.substack.com/p/analysis-of-1394-gtm-engineer-roles",
};

const FAQS = [
    {
        q: "What is a GTM engineer?",
        a: "TechCrunch reports that Clay coined the title in 2023. Clay describes GTM engineers as people who build automated revenue workflows instead of doing each go-to-market task by hand. That is outside data, not a Kas placement definition.",
    },
    {
        q: "What is the difference between a GTM engineer and a sales engineer?",
        a: "A sales engineer sells technical products and supports AEs on demos, discovery and deal design. BLS covers that occupation. A GTM engineer usually builds outbound and revenue systems with tools like Clay, CRM and code. Some postings blur the titles, so read the job for customer facing vs internal builder work.",
    },
    {
        q: "How much do sales engineers make?",
        a: "The U.S. Bureau of Labor Statistics reports a median annual wage of $124,900 for sales engineers in May 2025. Software publishers sat higher at a $153,410 median in that same release.",
    },
    {
        q: "How much do GTM engineers make?",
        a: "Revnu Partners analyzed disclosed pay ranges in June 2026 and found a $159,500 median midpoint across 70 postings. That is one analyst sample of advertised ranges, not a survey of actual offers, and it mixes base and total pay styles.",
    },
    {
        q: "Who are the top recruiters for sales engineer jobs in enterprise SaaS?",
        a: "Look for a firm that can screen both technical depth and deal support skills, and that already works enterprise SaaS AE seats. The Kas Group recruits sales engineers and GTM engineers for B2B SaaS and complex tech teams. Pricing is on the programs page.",
    },
    {
        q: "How does The Kas Group recruit GTM engineers?",
        a: "We lock the archetype first, then screen for shipping proof on builder seats or deal support on classic sales engineer seats. These searches run on Kas Seat or Kas Directed Pursuit, not Milestone Search, because Milestone is priced for SDR, AE, and sales manager seats.",
    },
];

export default function GtmEngineerRecruiting() {
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
                        <span className="text-grey-600">GTM Engineer Recruiting</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        GTM Engineer Recruiting: How to Hire GTM Engineers and Sales Engineers
                    </h1>
                    <p className="text-sm text-grey-500">November 9, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">
                    <div className="p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent space-y-3">
                        <h2 className="text-xl font-bold text-navy-900">Direct answer</h2>
                        <p className="text-base text-grey-700 leading-relaxed">
                            A GTM engineer builds automated go to market systems. A sales engineer sells technical products and supports AEs on deals. Screen them differently. For pay, use named public sources only: <a href={SRC.bls} className={link}>BLS</a> puts sales engineers at a $124,900 median wage in May 2025, and <a href={SRC.revnu} className={link}>Revnu Partners</a> found a $159,500 median midpoint across 70 disclosed GTM engineer ranges in June 2026. The Kas Group recruits both roles for B2B SaaS and complex tech teams.
                        </p>
                    </div>

                    <p className="text-sm text-grey-500">
                        How to read this guide: sections labeled &quot;My view&quot; are observations from live searches at The Kas Group. Comp and role counts come from named outside sources, linked in the text and listed at the end. We do not publish Kas placement or time to fill numbers here.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: Why This Hire Is Hot</h2>
                        <p>
                            There is a big push right now, and a lot of open roles, for go to market engineers. Founders who used to ask only about SDRs now ask about GTM engineers in the same breath. That is my observation from conversations, not a Kas dataset.
                        </p>
                        <p>
                            Outside counts line up with the noise. <a href={SRC.techcrunch} className={link}>TechCrunch</a> reports Clay coined the title in 2023 and says about 100 GTM engineering listings appear each month (Clay&apos;s own count). A <a href={SRC.gtmCouncil} className={link}>GTM Council guest post</a> drew on 1,394 listings, 781 open at the time. <a href={SRC.revnu} className={link}>Revnu Partners</a> found about 211 unique employers hiring in late May 2026. Each source counts differently.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>GTM Engineer vs Sales Engineer</h2>
                        <p>
                            Do not treat the titles as the same job.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Sales engineer:</strong> BLS describes sales engineers as people who sell business products or services that need technical expertise. They present, tailor solutions, support renewals and work with the sales team. Classic enterprise SaaS SE work sits here.</li>
                            <li><strong className="text-navy-900">GTM engineer:</strong> Outside sources describe the role as building automated revenue workflows, often with Clay, CRM, Python or SQL, and an LLM. Some postings are internal builders. Others are customer facing and closer to a solutions engineer rebrand.</li>
                        </ul>
                        <p>
                            Revnu&apos;s June 2026 read of postings split the title into three archetypes: internal builder, customer facing, and RevOps analyst with an engineering title. If your JD mixes all three, the search will drag. Pick one.
                        </p>
                        <p>
                            If you are still deciding between an SDR and a GTM engineer for one pipeline seat, start with <Link href="/blog/sdr-or-gtm-engineer-pipeline-hire" className={link}>SDR or GTM engineer</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What to Screen For</h2>
                        <p>My view on a practical screen:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">For a GTM engineer (builder):</strong> proof they shipped a workflow, not only configured a tool. Ask for one system they built, what broke, and how sales used it.</li>
                            <li><strong className="text-navy-900">For a sales engineer:</strong> product fluency, a live demo, and how they partnered with an AE on a committee deal. Ask where the technical risk sat and how they handled it.</li>
                            <li><strong className="text-navy-900">For either:</strong> match the archetype in the JD to the portfolio. A Clay native builder is not automatically a customer facing SE, and the reverse is also true.</li>
                        </ul>
                        <p>
                            For AE interview structure you can reuse on the sales facing parts, see <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions</Link> and the <Link href="/hiring-scorecard" className={link}>hiring scorecard</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Comp Ranges From Named Public Sources</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Sales engineers:</strong> <a href={SRC.bls} className={link}>BLS Occupational Outlook Handbook</a>, May 2025 median annual wage $124,900. Software publishers median $153,410 in the same release. Lowest tenth under $73,870; highest tenth over $195,270.</li>
                            <li><strong className="text-navy-900">GTM engineers:</strong> <a href={SRC.revnu} className={link}>Revnu Partners</a>, June 2, 2026, $159,500 median midpoint across 70 disclosed ranges from a pull of about 211 employers. Advertised ranges, not closed offers.</li>
                        </ul>
                        <p>
                            These are different measures. BLS is a wage survey for a defined occupation. Revnu is an analyst sample of job postings. Read them as direction, not a single market number.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Recruits Them</h2>
                        <p>
                            We start by locking the archetype: internal builder, customer facing GTM engineer, or classic sales engineer. Then we screen for shipping proof or deal support skills, depending on the seat.
                        </p>
                        <p>
                            For builder and GTM engineer seats, candidates show work: workflows they shipped, tools they actually run, and how those tools tied to pipeline. For classic sales engineer seats, we look at deal support: discovery, demos, and how they partnered with an AE to close.
                        </p>
                        <p>
                            These searches run on Kas Seat or Kas Directed Pursuit, not Milestone Search, because Milestone is priced for SDR, AE, and sales manager seats.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 a month for senior AE and above.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> on request.</li>
                        </ul>
                        <p>
                            Details are on the <Link href="/programs" className={link}>programs page</Link>. Related reading: <Link href="/guides/best-recruiters-saas-startups-sales" className={link}>SaaS sales recruiters</Link> and <Link href="/guides/best-recruiting-agencies-b2b-sales" className={link}>B2B sales recruiters</Link>.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Hiring a GTM engineer or sales engineer?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email me the archetype you need, the tool stack and whether the seat is customer facing. You get a straight read on the search.
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
                            <li>Sales Engineers, Occupational Outlook Handbook, U.S. Bureau of Labor Statistics. May 2025 median wage $124,900. <a href={SRC.bls} className={link}>{SRC.bls}</a></li>
                            <li>GTM Engineer hiring in 2026: 211 jobs analyzed, Revnu Partners, June 2, 2026. About 211 employers; $159,500 median midpoint across 70 disclosed ranges. <a href={SRC.revnu} className={link}>{SRC.revnu}</a></li>
                            <li>TechCrunch Disrupt 2026: Clay&apos;s Kareem Amin on the rise of the GTM engineer, TechCrunch, October 2, 2026. <a href={SRC.techcrunch} className={link}>{SRC.techcrunch}</a></li>
                            <li>Analysis of 1,394 GTM Engineer Roles, GTM Council (guest post by Mada Seghete, Upside), July 11, 2026. <a href={SRC.gtmCouncil} className={link}>{SRC.gtmCouncil}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
