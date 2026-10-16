import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "SDR or GTM Engineer? Your Next Pipeline Hire",
    description: "Seed founder with one pipeline seat? The questions I ask before recommending an SDR or a GTM engineer, plus outside data on GTM engineer hiring and pay.",
    path: "/blog/sdr-or-gtm-engineer-pipeline-hire",
    headline: "SDR or GTM Engineer? What Your Next Pipeline Hire Should Actually Be.",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    techcrunch: "https://techcrunch.com/2026/10/02/techcrunch-disrupt-2026-clays-kareem-amin-on-the-rise-of-the-gtm-engineer/",
    gtmCouncil: "https://gtmcouncil.substack.com/p/analysis-of-1394-gtm-engineer-roles",
    revnu: "https://revnu.partners/blog/gtm-engineer-hiring",
    bridge: "https://www.bridgegroupinc.com/research/2025-sdr-models-metrics-report-the-bridge-group",
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
};

const FAQS = [
    {
        q: "Should a seed startup hire an SDR or a GTM engineer first?",
        a: "In my view, it depends on whether you have a playbook. A GTM engineer fits when a playbook and an ideal customer profile already exist and the job is scaling outbound with tooling. Before that, a person on the phone is how a seed team learns what works. Start with your outbound goals three months, six months and a year out.",
    },
    {
        q: "What does a GTM engineer do?",
        a: "TechCrunch reports that Clay coined the title in 2023. Clay describes GTM engineers as people who build automated revenue workflows instead of doing each go-to-market task by hand. That is outside data, not experience from The Kas Group.",
    },
    {
        q: "How does GTM engineer pay compare with SDR pay?",
        a: "Revnu Partners found a $159.5K median midpoint across 70 disclosed GTM engineer pay ranges in June 2026. The Bridge Group's 2025 survey of 351 B2B companies found a median SDR OTE of $80K, and RepVue's 2026 self-reported data shows $85K. The figures are measured differently, so read them as direction, not an exact gap.",
    },
    {
        q: "How many GTM engineer jobs are there?",
        a: "Counts vary by source. Clay says about 100 GTM engineering listings appear each month. A July GTM Council guest post counted 1,394 listings in its database, 781 of them open at the time. Revnu Partners found about 211 employers hiring in late May. These are outside counts, and each source counts differently.",
    },
    {
        q: "What do you ask a seed founder before recommending a pipeline hire?",
        a: "Do you have a playbook yet? Do you have any outbound going now? Where did your current customers come from: cold calls and email, or friendlies and referrals? I ask these first, and there is no single answer.",
    },
];

export default function SdrOrGtmEngineerPost() {
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
                        SDR or GTM Engineer? What Your Next Pipeline Hire Should Actually Be.
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> October 16, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, The Kas Group</span>
                    </div>
                </div>

                <div className="border-t border-grey-200 mb-10" />

                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>Short answer:</strong> Look at your outbound goals three months, six months and a year out. A GTM engineer fits when a playbook and an ideal customer profile already exist and the job is scaling outbound with tooling. Before you have a playbook, a person on the phone is how a seed team learns what works.
                    </blockquote>

                    <p className="text-sm text-grey-500 not-prose">
                        How to read this post: I am still learning about GTM engineers. Everything I say about them comes from the outside sources linked in the text and listed at the end. It does not come from placements at The Kas Group. The questions and the way I weigh them are my own framework for a hiring decision.
                    </p>

                    <p>
                        Founders have started asking me about GTM engineers instead of SDRs. I understand why. The title is everywhere right now. Here is how I answer, what the outside data says, and the questions I ask a seed founder before I recommend anything.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: Start With Your Outbound Goals</h2>

                    <p>
                        When a founder asks me this, I tell them to look at their outbound goals. Where do you want outbound to be in three months? In six months? In a year? Write those down. That usually answers the question.
                    </p>

                    <p>
                        The reason is simple. The two hires do different jobs. One finds out what works. The other makes what works bigger. Your goals tell you which job you need done first.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What the Outside Data Says About GTM Engineers</h2>

                    <p>
                        This section is outside data. None of it is Kas placement data.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">What the role is.</strong> <a href={SRC.techcrunch} className={link}>TechCrunch</a> reports that Clay coined the title in 2023. Clay describes GTM engineers as people who build automated revenue workflows instead of doing each task by hand. Clay says about 100 GTM engineering listings appear each month. That is Clay&apos;s own count, and Clay sells the tool many of these roles use. The TechCrunch piece is a preview of a Disrupt session, not a study.</li>
                        <li><strong className="text-navy-900">What the jobs are.</strong> A <a href={SRC.gtmCouncil} className={link}>GTM Council guest post</a> from Mada Seghete of Upside, dated July 11, 2026, drew on a database of 1,394 GTM engineer listings, 781 of them open at the time. Outbound work was 34.3% of open roles. The post argues the problem is inconsistent titles, not a shortage of people. Upside is a GTM data company, so treat the numbers as one vendor&apos;s count.</li>
                        <li><strong className="text-navy-900">What the pay is.</strong> <a href={SRC.revnu} className={link}>Revnu Partners</a> analyzed about 211 employers hiring for the role. Across 70 disclosed pay ranges, the median midpoint was $159.5K. Revnu pulled postings from LinkedIn and public job boards. It is one analyst&apos;s sample, not a survey, and it used base pay where a posting listed base plus commission or OTE.</li>
                    </ul>

                    <p>
                        Revnu also wrote that &quot;The Founding GTM Engineer at a 4-person company today is what the first SDR was in 2018.&quot; That tells you how some seed startups see the role. It does not tell you it is the right first hire for yours.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">The Pay Contrast</h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">GTM engineer:</strong> $159.5K median midpoint of advertised ranges (outside data, <a href={SRC.revnu} className={link}>Revnu Partners</a>, 70 postings, June 2026).</li>
                        <li><strong className="text-navy-900">SDR:</strong> median OTE of $80K in <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2025 survey</a> of 351 B2B companies, and $85K in <a href={SRC.repvue} className={link}>RepVue&apos;s 2026 data</a>, which is self-reported by reps (outside data).</li>
                    </ul>

                    <p>
                        The advertised GTM engineer midpoint is roughly twice the SDR median OTE. Read that as direction. Revnu used base pay in some postings, the SDR figures are on-target earnings, and the samples are different. But for a seed team with one seat, the cost gap is hard to ignore.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: When Each One Fits</h2>

                    <p>
                        This section is my reasoning from the sources above. It is not drawn from Kas placement experience.
                    </p>

                    <p>
                        A GTM engineer fits when a playbook and an ideal customer profile already exist. You know who you sell to. You know what message gets replies. The job is to scale that outbound with tooling. The sources describe the role as building automated systems, and a system needs a process to automate.
                    </p>

                    <p>
                        Before a playbook exists, automation scales a motion you have not proven. You send more of a message nobody has tested to a list nobody has checked. A person on the phone is how a seed team learns what works. They hear the objections. They find out who picks up. They bring that back to you, and that becomes the playbook.
                    </p>

                    <p>
                        The GTM Council post makes a fair point from the other side. It says the better question is which of your own people becomes the builder first. If you already have someone who builds, that changes the math. If you do not, you may be hiring a builder before you have anything to build.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My Questions for a Seed Founder With One Pipeline Seat</h2>

                    <p>
                        If a founder has budget for one pipeline hire, I do not give an answer right away. I ask first. Here are the questions.
                    </p>

                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Do you have a playbook yet?</li>
                        <li>Do you have any outbound going now?</li>
                        <li>Where did your current customers come from: cold calls and email, or friendlies and referrals?</li>
                    </ol>

                    <p>
                        There is no single answer. If your customers came from referrals and nothing is going out today, there is nothing for a tool to scale yet. If cold outbound already works and you can say why, scaling it starts to make sense. I would rather hear the answers than guess.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Where to Go From Here</h2>

                    <p>
                        If the answer is a rep, start with <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>how to hire SDRs and AEs who ramp fast</Link>. For what AI handles and what a rep still owns, read <Link href="/blog/ai-sdr-who-you-still-need" className={link}>Salesforce Just Shipped an AI SDR. Here&apos;s Who You Still Need</Link>. If you are still the one closing every deal, read <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>. If you are weighing AEs who prospect for themselves, read <Link href="/blog/sdr-team-cut-aes-prospect" className={link}>They Cut the SDRs. Now Every AE Prospects</Link>.
                    </p>

                    <p>
                        The Kas Group does sales hiring. The three ways we work, Kas Seat, Kas Milestone Search and Kas Directed Pursuit, are on the <Link href="/programs" className={link}>programs page</Link>.
                    </p>

                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">One pipeline seat to fill?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Email me your outbound goals for the next three months, six months and a year. I will ask my questions and tell you what I would do.</p>
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

                    <p className="text-sm text-grey-500 not-prose">All of these are outside sources. None is Kas placement data.</p>

                    <ul className="list-disc pl-6 space-y-2 text-base">
                        <li>TechCrunch Disrupt 2026: Clay&apos;s Kareem Amin on the rise of the GTM engineer, TechCrunch, October 2, 2026. Event preview. Clay coined the role in 2023; Clay&apos;s own count of about 100 GTM engineering listings a month. <a href={SRC.techcrunch} className={link}>{SRC.techcrunch}</a></li>
                        <li>Analysis of 1,394 GTM Engineer Roles, GTM Council (guest post by Mada Seghete, Upside), July 11, 2026. 1,394 listings in the database, 781 open; outbound work at 34.3% of open roles. <a href={SRC.gtmCouncil} className={link}>{SRC.gtmCouncil}</a></li>
                        <li>GTM Engineer hiring in 2026: 211 jobs analyzed, Revnu Partners, June 2, 2026. About 211 employers hiring; $159.5K median midpoint across 70 disclosed ranges. <a href={SRC.revnu} className={link}>{SRC.revnu}</a></li>
                        <li>SDR Models, Motions &amp; Metrics: 2025 Research Report, The Bridge Group, February 6, 2025. Survey of 351 B2B companies. Median SDR OTE $80K. <a href={SRC.bridge} className={link}>{SRC.bridge}</a></li>
                        <li>Sales Salary Guide: What Sales Reps are Earning in 2026, RepVue, January 2, 2026, with a mid-year update. Self-reported data. Median SDR OTE $85K. <a href={SRC.repvue} className={link}>{SRC.repvue}</a></li>
                    </ul>

                    <p className="text-grey-600">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>Hire SDRs and AEs with Zero Ramp-Up Time</Link>
                        {" · "}
                        <Link href="/blog/ai-sdr-who-you-still-need" className={link}>Who You Still Need With an AI SDR</Link>
                        {" · "}
                        <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>
                        {" · "}
                        <Link href="/blog/sdr-team-cut-aes-prospect" className={link}>They Cut the SDRs. Now Every AE Prospects.</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
