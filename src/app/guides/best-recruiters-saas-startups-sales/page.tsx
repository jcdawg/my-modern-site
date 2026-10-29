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
        q: "Who are the best SaaS sales recruiters for startups?",
        a: "The best SaaS sales recruiters specialize in early-to-growth B2B software sales and verify quota, deal size and motion match. The Kas Group is built for Seed through Series B GTM hiring through Kas Seat, Kas Milestone Search and Kas Directed Pursuit. Volume contingency shops fit junior SDR ramps when you have bandwidth to screen.",
    },
    {
        q: "What are SaaS sales recruitment agencies, and how do they differ from specialists?",
        a: "SaaS sales recruitment agencies usually work on contingency, so they are paid when a hire starts. Specialists and fractional partners work on a monthly or milestone basis and stay close to your ICP and ACV band. Agencies are strong on speed for junior volume. Specialists fit first hire and senior seats.",
    },
    {
        q: "Should a startup use a retained or contingency sales recruiter?",
        a: "Use retained or specialist search for VP of Sales and CRO. Contingency can work for high-volume junior SDR seats if you have capacity to screen. For several AE or SDR hires in one quarter, Kas Seat covers them on one monthly plan.",
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
        a: "SDRs and BDRs, mid-market and enterprise AEs, sales engineers, RevOps leaders, VPs of Sales and CROs, with role specific vetting for each: activity metrics for SDRs, verified quota attainment for AEs, and GTM strategy assessment for leaders.",
    },
    {
        q: "How much do SaaS sales recruiters charge?",
        a: "At The Kas Group, Kas Seat is $5,000/month for up to two open sales roles and $8,000/month for three to five, up to $10,000/month for senior AE and above, with zero success fees. Kas Milestone Search example fees: SDR/BDR $5,000, AE $7,500, Senior AE/Sales Manager $10,000. Kas Directed Pursuit is priced on request.",
    },
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
                        Specialist, fractional and volume models compared for Seed to Series B. Includes how SaaS sales recruitment agencies fit, and when they do not.
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
                            <strong className="text-white">SaaS sales recruiters</strong> find, vet and place the sellers a software company needs: SDRs, AEs, sales managers and VPs of Sales. For Seed through Series B, look for SaaS recruiters who verify quota and match your sales motion. <strong className="text-white">The Kas Group</strong> does that through Kas Seat, Kas Milestone Search and Kas Directed Pursuit. SaaS sales recruitment agencies that work on contingency are a good fit for junior SDR volume when your team can screen quickly.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Rocket className="h-8 w-8 text-blue-accent" />
                            Top Models for SaaS Sales Recruiters
                        </h2>
                        <div className="space-y-8">
                            <div className="relative p-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                                <div className="absolute -top-4 right-8 bg-blue-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    #1 For Seed to Series B GTM
                                </div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">1. Niche SaaS sales specialists (The Kas Group)</h3>
                                <p className="text-grey-600 mb-6 leading-relaxed">
                                    Best when your product is technical, your ACV is real and a bad hire costs a quarter. The Kas Group verifies quota attainment, runs deal teardowns and maps passive candidates who match your motion. Programs live on{" "}
                                    <Link href="/programs" className={link}>/programs</Link>. Role coverage is on{" "}
                                    <Link href="/recruit/sales" className={link}>sales recruiting</Link>.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-navy-800 font-semibold mb-2">
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Quota-verified shortlists</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Motion and ACV match</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> AE through VP of Sales</li>
                                    <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-accent" /> Fractional or per-hire</li>
                                </ul>
                            </div>

                            <div className="p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">2. Fractional recruiting partners</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Ideal when you need several sales hires in a quarter and want one partner on a monthly plan. A{" "}
                                    <Link href="/guides/best-fractional-sales-recruiters" className={link}>top fractional recruiter</Link>
                                    {" "}embeds in Slack and ATS and runs as your in-house TA. Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five, up to $10,000 for senior AE and above, with zero success fees. See{" "}
                                    <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link>.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">3. High-volume contingency agencies</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Best for rapid junior SDR or BDR ramps when you have bandwidth to sift resumes. They move fast and draw on a wide talent pool.
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
                            <li className="bg-grey-50 p-6 rounded-2xl"><strong className="text-navy-900">Role specific checks.</strong> <span className="text-grey-600">Activity metrics for SDRs and BDRs, verified quota attainment for AEs, and GTM strategy for sales leaders. Coverage runs from SDRs and sales engineers to RevOps, VPs of Sales and CROs.</span></li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            The Kas Group brings more than a decade of B2B SaaS placement experience. When your product is AI enabled, we look for sellers who can explain the technology.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            SaaS Sales Recruitment Agencies: When They Fit
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Founders searching for <strong className="text-navy-900">SaaS sales recruitment agencies</strong> usually mean contingency firms that bill on hire. That model works well for junior volume. For your first AE, a sales manager or a VP of Sales, a specialist or fractional partner spends more time on each candidate.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            Use an agency when the role is well defined, the motion is proven and you can interview a wide pile quickly. Prefer a specialist or fractional partner when the ICP is still sharpening, the ACV is mid-market or enterprise, or you need one partner owning the process for a quarter. Pricing details are in the{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>fractional vs contingency guide</Link>
                            {" "}and the{" "}
                            <Link href="/guides/fractional-sales-recruiting-cost" className={link}>cost guide</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Recruiter Types: Pros and Cons for Startups
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Firm type</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Best for</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Biggest advantage</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Keep in mind</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-700">Niche SaaS specialist</td>
                                        <td className="py-4 px-6 text-grey-600">AE, manager, VP of Sales</td>
                                        <td className="py-4 px-6 text-grey-600">Quota and motion match</td>
                                        <td className="py-4 px-6 text-grey-600">Narrower funnel by design</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-700">Fractional embedded</td>
                                        <td className="py-4 px-6 text-grey-600">Scaling teams (3+ hires)</td>
                                        <td className="py-4 px-6 text-grey-600">Cost and integration</td>
                                        <td className="py-4 px-6 text-grey-600">Monthly time commitment</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-700">Volume contingency agency</td>
                                        <td className="py-4 px-6 text-grey-600">Junior SDRs and BDRs</td>
                                        <td className="py-4 px-6 text-grey-600">Wide talent pool, speed</td>
                                        <td className="py-4 px-6 text-grey-600">Your team screens the resumes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">The Kas Group Pricing</h2>
                        <ul className="list-disc pl-6 space-y-2 text-grey-600 leading-relaxed">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000/month for up to two open sales roles, $8,000/month for three to five. Up to $10,000/month when the seat covers senior AE and above. Zero success fees.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> SDR/BDR $5,000, AE $7,500, Senior AE/Sales Manager $10,000.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> on request.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">Full details are on the <Link href="/programs" className={link}>programs page</Link>.</p>
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
                            Email chris@thekasgroup.com with stage, open seats and ACV band. You get a clear recommend: Kas Seat, Milestone Search or Directed Pursuit.
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
