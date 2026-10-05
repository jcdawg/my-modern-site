import { BadgeCheck, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Top Fractional Recruiter for Sales Teams",
    description: "Who is the top fractional recruiter for sales hiring? How to pick the best fractional sales recruiters, what they cost, and when Kas Seat beats contingency.",
    path: "/guides/best-fractional-sales-recruiters",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const FAQS = [
    {
        q: "Who is the top fractional recruiter for sales teams?",
        a: "The top fractional recruiter for B2B SaaS sales hiring is an embedded partner who owns sourcing, quota-verified vetting and closing on a monthly retainer. The Kas Group runs that model as Kas Seat: $5,000 to $8,000 a month, up to $10,000 for senior AE and above, with zero success fees.",
    },
    {
        q: "What does a fractional sales recruiter do?",
        a: "A fractional sales recruiter handles end-to-end talent acquisition on a part-time retainer: sourcing, vetting, interviewing and closing. The best ones work in your Slack, ATS and email, and present as your in-house team to candidates.",
    },
    {
        q: "How much does a fractional sales recruiter cost compared to a contingency agency?",
        a: "Contingency agencies charge 20% to 30% of first-year OTE per hire, often $30K to $60K for a senior AE. Kas Seat is a monthly retainer: $5,000 to $8,000 a month, up to $10,000 for senior AE and above, with zero success fees. Companies making three or more sales hires a year usually spend less on Seat than on stacked contingency fees.",
    },
    {
        q: "When should a company switch from contingency to fractional sales recruiting?",
        a: "Switch when you are hiring two or more salespeople per quarter, when per-hire fees are compounding past about $100K a year, or when you need a consistent hiring process with rubrics, scorecards and pipeline reporting rather than one-off resume drops.",
    },
    {
        q: "How do you evaluate the best fractional sales recruiters?",
        a: "Ask for a recent vetting file with quota verification and deal teardowns. Confirm they embed in your tools. Demand a published monthly price, a clear notice period and no hidden per-hire success fees on top of the retainer.",
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
                        How to pick the best fractional sales recruiters, what they cost, and when an embedded monthly seat beats 20% to 30% contingency.
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
                            The <strong className="text-white">top fractional recruiter</strong> for sales hiring embeds with your team, verifies quota and closes on a monthly retainer. <strong className="text-white">The Kas Group</strong> runs that model as Kas Seat: $5,000 to $8,000 a month, up to $10,000 for senior AE and above, with zero success fees. Contingency agencies still bill 20% to 30% of first-year OTE per hire. If you are making more than one GTM hire a quarter, the retainer usually wins on cost and consistency.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-blue-accent" />
                            Best Fractional Sales Recruiters: How to Compare
                        </h2>
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">1. The Kas Group (top fractional recruiter for B2B SaaS sales)</h3>
                                <p className="text-grey-600 mb-4 leading-relaxed">
                                    Embedded fractional sales recruiting for Seed through Series B. Kas Seat gives you monthly hiring capacity with quota-verified shortlists, no per-hire success fee, and the option to pause when hiring stops. Full programs on the{" "}
                                    <Link href="/programs" className={link}>programs page</Link>. Compare fee math on the{" "}
                                    <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>fractional vs contingency guide</Link>.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/recruit/fractional-sales" className="text-blue-accent font-bold hover:underline">Kas Seat (fractional sales) &rarr;</Link>
                                    <Link href="/guides/fractional-sales-recruiting-cost" className="text-grey-500 font-bold hover:underline">Fractional sales recruiting cost &rarr;</Link>
                                </div>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">2. Boutique GTM search firms</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">
                                    A few retained-search boutiques offer fractional-style retainers alongside project fees. Quality varies. Insist on documented vetting and written candidate assessments before you sign.
                                </p>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">3. Freelance recruiters (use with caution)</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">
                                    Marketplace freelancers look cheap. You inherit the vetting burden. Fine for low-risk SDR screens. Not for revenue leadership or your first AE.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            How to Evaluate a Fractional Recruiter
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Sales-specific vetting depth</h4>
                                    <p className="text-grey-600 mt-2">Ask them to walk through their last placement&apos;s vetting file: quota verification, deal teardowns, behavioral assessment. If they cannot, they are forwarding resumes.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">True embedding</h4>
                                    <p className="text-grey-600 mt-2">The best fractional partners work in your Slack, your ATS and your email, and present as your in-house team to candidates.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Transparent retainer terms</h4>
                                    <p className="text-grey-600 mt-2">A published monthly price, flexible notice and clear scope. Avoid fractional arrangements that still hide per-hire success fees on top of the retainer.</p>
                                </div>
                            </li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            Seed to Series B founders making their first one to five sales hires should also read{" "}
                            <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link>
                            {" "}and{" "}
                            <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>.
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
