import { ChevronRight, Clock, DollarSign, HelpCircle, Layers, Scale, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "What Is Fractional Recruiting? How It Works",
    description: "Fractional recruiting is a monthly retainer for an embedded recruiting partner. How it differs from contingency and retained, who it fits, and cost.",
    path: "/guides/fractional-recruiting-guide",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const link = "text-blue-accent hover:underline";

const SRC = {
    shrm: "https://www.shrm.org/topics-tools/news/talent-acquisition/how-to-work-effectively-executive-search-firm",
    blsHr: "https://www.bls.gov/ooh/business-and-financial/human-resources-specialists.htm",
    blsEcec: "https://www.bls.gov/news.release/ecec.nr0.htm",
};

const DEFINITION =
    "Fractional recruiting is a monthly retainer for a part time recruiting partner who works inside your hiring process. The partner writes the scorecard with you, sources candidates, screens them, runs the interview loop and helps close offers. You pay by the month for dedicated time, not a percentage of each new hire's salary.";

// One array drives both the visible FAQ and the FAQPage schema, so the text matches word for word.
const FAQS = [
    {
        q: "What is fractional recruiting?",
        a: DEFINITION,
    },
    {
        q: "How much does fractional recruiting cost?",
        a: "At The Kas Group, Kas Seat is $5,000/mo for up to two open sales roles and $8,000/mo for three to five, up to $10,000/mo for senior AE and above, with zero success fees. Kas Milestone Search example fees are $5,000 for SDR/BDR, $7,500 for AE and $10,000 for Senior AE or Sales Manager. Kas Directed Pursuit is priced on request. AI, ML and data searches are quote only, on a success fee only basis.",
    },
    {
        q: "How to choose a fractional recruiter",
        a: "Pick a partner who specializes in your roles, publishes pricing, works month to month and leaves you owning every candidate name; the full checklist is in our guide on how to choose a fractional recruiter.",
    },
    {
        q: "How is fractional recruiting different from contingency recruiting?",
        a: "A contingency recruiter is paid only when you hire. SHRM puts the usual fee at 20% to 25% of the role's first year cash compensation. Fractional recruiting is a monthly retainer for dedicated time, so the partner is paid to run your whole process across your open seats.",
    },
    {
        q: "How is fractional recruiting different from retained search?",
        a: "Retained search is a fee for one search, usually a senior seat, paid whether or not the role is filled. SHRM cites a typical fee of about 33% of salary, bonus and signing bonus. Fractional recruiting covers ongoing hiring across several seats for a monthly fee.",
    },
    {
        q: "Who is fractional recruiting a good fit for?",
        a: "Seed to Series B companies with sales seats to fill in the next quarter and no full time recruiter. It also fits teams that hire in bursts and want to pause between them.",
    },
    {
        q: "Is there a long contract?",
        a: "No. Kas Seat is month to month. Add capacity when you open seats. Pause it when the team is full.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const MODELS = [
    { model: "Fractional recruiting", what: "Part time recruiting partner embedded with your team. Owns pipeline, interviews and close.", pay: "Monthly retainer", term: "Month to month" },
    { model: "Contingency recruiting", what: "Recruiter is paid when a candidate they introduce is hired.", pay: "Usually 20% to 25% of first year cash compensation (SHRM)", term: "Per hire" },
    { model: "Retained search", what: "Exclusive search for one seat, usually senior.", pay: "About 33% of salary, bonus and signing bonus (SHRM)", term: "Per search" },
    { model: "In-house recruiter", what: "Full time recruiter on payroll.", pay: "Salary plus benefits (see BLS figures below)", term: "Ongoing headcount" },
];

const STAGES = [
    { stage: "Seed", pattern: "First AE, maybe an SDR. Founder still closes.", fit: "Strong. Kas Seat covers the first sales seats on one monthly plan." },
    { stage: "Series A", pattern: "AE team plus SDRs. First Sales Manager question.", fit: "Strong. Kas Seat covers several seats at once." },
    { stage: "Series B", pattern: "Many GTM seats. Maybe a first VP Sales.", fit: "Strong for ongoing seats. Run the VP as a specialist search." },
    { stage: "Later, high volume", pattern: "Steady hiring across many functions.", fit: "Consider an in-house team. Keep a specialist for hard sales seats." },
];

const STEPS = [
    { title: "Week 1: Calibration", body: "Scorecard, comp bands, ICP, must-haves. For SDR through Sales Manager seats only, a free market scan lands in 48 to 72 hours." },
    { title: "Weeks 1 to 3: Pipeline", body: "Direct outreach to people who are not job hunting. Target for SDR through Sales Manager seats: 3 or more qualified candidates in 3 weeks." },
    { title: "Ongoing: Interviews and close", body: "Interview design, debriefs, offer strategy and counteroffer defense." },
    { title: "Each month: Keep or pause", body: "Month to month. Add capacity when you open seats. Pause when the team is full." },
];

export default function FractionalRecruitingGuide() {
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
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">What Is Fractional Recruiting?</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        What Is Fractional Recruiting?{" "}
                        <span className="text-blue-accent">How a Kas Engagement Runs</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">{DEFINITION}</p>
                    <p className="mt-6 text-sm text-grey-500">
                        <strong className="text-navy-900">Updated Oct 2026, Chris Stinson.</strong> Chris is Managing Partner of The Kas Group and has recruited sales and GTM talent since 2014.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            The short answer
                        </h2>
                        {/* TODO(Chris): add ONE first party Kas proof stat here (for example average time to first shortlist or hires made on Kas Seat). Chris will supply the number. Do not invent it. Nothing renders until it is filled in. */}
                        <ul className="space-y-3 text-lg text-grey-300 leading-relaxed relative z-10 list-disc pl-6">
                            <li>Fractional recruiting means you rent a senior recruiter&apos;s time by the month.</li>
                            <li>They work inside your process, with your hiring managers, on your seats.</li>
                            <li>No percentage of salary. No per-hire invoice on Kas Seat.</li>
                            <li>Best for sales seats you need filled this quarter with no full time recruiter.</li>
                            <li>Kas Seat is <strong>$5,000/mo for up to two open sales roles and $8,000/mo for three to five, up to $10,000/mo for senior AE and above</strong>, with <strong>zero success fees</strong>.</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            What is fractional recruiting?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">{DEFINITION}</p>
                        <p className="text-grey-600 leading-relaxed">A fractional recruiter acts as your recruiting lead for part of the week. They write the scorecard with you. They source. They screen. They run the interview loop and help close the offer.</p>
                        <p className="text-grey-600 leading-relaxed">You get a person who learns your ICP, your pitch and your bar, then uses that on every seat.</p>
                        <p className="text-grey-600 leading-relaxed">You own every candidate name. The work stays in your process and your tools.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            Fractional recruiting vs contingency and retained
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Model</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">What it is</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">You pay</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Commitment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MODELS.map((m) => (
                                        <tr key={m.model} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{m.model}</td>
                                            <td className="py-4 px-6 text-grey-600">{m.what}</td>
                                            <td className="py-4 px-6 text-grey-600">{m.pay}</td>
                                            <td className="py-4 px-6 text-grey-600">{m.term}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <ul className="space-y-3 text-grey-600 leading-relaxed list-disc pl-6">
                            <li><strong className="text-navy-900">Contingency</strong> pays per hire. <a href={SRC.shrm} className={link}>SHRM</a> puts the usual fee at 20% to 25% of the role&apos;s first year cash compensation, paid only if the role is filled.</li>
                            <li><strong className="text-navy-900">Retained</strong> pays for one search, whether or not it is filled. SHRM cites a typical fee of about 33% of salary, bonus and signing bonus. It suits a single senior seat.</li>
                            <li><strong className="text-navy-900">Fractional</strong> pays for time. One partner works all your open seats on one monthly plan.</li>
                            <li><strong className="text-navy-900">In-house</strong> pays salary plus benefits. The <a href={SRC.blsHr} className={link}>BLS</a> puts the median annual wage for human resources specialists, the group that includes recruiters, at $75,940 in May 2025, with the top 10% above $128,720. <a href={SRC.blsEcec} className={link}>Benefits made up 31.5%</a> of employer costs for full time private industry workers in June 2026.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">Fee math by seat: <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>fractional sales recruiting vs contingency</Link>. Headcount math: <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className={link}>fractional recruiting vs in-house recruiter</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            Who fractional recruiting fits
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Stage</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Hiring pattern</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Fractional fit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {STAGES.map((s) => (
                                        <tr key={s.stage} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900">{s.stage}</td>
                                            <td className="py-4 px-6 text-grey-600">{s.pattern}</td>
                                            <td className="py-4 px-6 text-grey-600">{s.fit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-xl font-bold text-navy-900">Good fit</h3>
                        <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-6">
                            <li>You will open sales seats this quarter.</li>
                            <li>The seats are sales and GTM, not easy backfills.</li>
                            <li>You want one partner who learns your ICP and your bar.</li>
                        </ul>
                        <h3 className="text-xl font-bold text-navy-900">Not a fit</h3>
                        <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-6">
                            <li>One clear seat and nothing behind it. Use Kas Milestone Search.</li>
                            <li>A VP or CRO search. Use a specialist search.</li>
                            <li>Steady hiring across many functions. Build an in-house team.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">Hiring your first 1 to 5 reps? Read <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link>.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            How much does fractional recruiting cost?
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Pricing at The Kas Group:</p>
                        <ul className="space-y-3 text-grey-600 leading-relaxed list-disc pl-6">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000/mo for up to two open sales roles, $8,000/mo for three to five. Up to $10,000/mo for senior AE and above. Zero success fees. Hire as many people as the search produces that month.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> one seat. Example fees: SDR/BDR $5,000, AE $7,500, Senior AE or Sales Manager $10,000. Three payments tied to milestones, not a monthly retainer.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> list driven outbound search. You mark who we hunt. Pricing on request.</li>
                            <li><strong className="text-navy-900">AI, ML and data roles:</strong> quote only, success fee only. Never monthly.</li>
                            <li><strong className="text-navy-900">Leadership, VP and CRO:</strong> specialist quote only.</li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">Full breakdown: <Link href="/guides/fractional-sales-recruiting-cost" className={link}>fractional sales recruiting cost</Link>. All three products: <Link href="/programs" className={link}>Programs</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Clock className="h-8 w-8 text-blue-accent" />
                            How a Kas fractional recruiting engagement runs
                        </h2>
                        <ol className="space-y-6">
                            {STEPS.map((s, i) => (
                                <li key={s.title} className="flex gap-4">
                                    <span className="shrink-0 h-10 w-10 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">{i + 1}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                                        <p className="text-grey-600 leading-relaxed">{s.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="text-grey-600 leading-relaxed">You get dedicated time from one partner. How the embedded month works for sales teams: <Link href="/recruit/fractional-sales" className={link}>Kas Seat for sales</Link>.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            How to choose a fractional recruiter
                        </h2>
                        <p className="text-grey-600 leading-relaxed">Pick a partner who recruits the roles you are hiring, publishes pricing, works month to month and leaves you owning every candidate name. The full checklist and the questions to ask on the first call are in <Link href="/guides/how-to-choose-a-fractional-recruiter" className={link}>how to choose a fractional recruiter</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Fractional recruiting FAQ
                        </h2>
                        <div className="space-y-8">
                            {FAQS.map((f) => (
                                <div key={f.q} className="space-y-3">
                                    <h3 className="text-xl font-bold text-navy-900">{f.q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base text-grey-600">
                            <li>How to Work Effectively with an Executive Search Firm, SHRM, July 2016. Contingency and retained fee ranges. <a href={SRC.shrm} className={link}>{SRC.shrm}</a></li>
                            <li>Human Resources Specialists, Occupational Outlook Handbook, U.S. Bureau of Labor Statistics. May 2025 wage data. <a href={SRC.blsHr} className={link}>{SRC.blsHr}</a></li>
                            <li>Employer Costs for Employee Compensation, June 2026, U.S. Bureau of Labor Statistics, released September 9, 2026. <a href={SRC.blsEcec} className={link}>{SRC.blsEcec}</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Related guides</h2>
                        <ul className="space-y-2 text-grey-600">
                            <li><Link href="/guides/fractional-sales-recruiting-cost" className={`${link} font-semibold`}>Fractional sales recruiting cost</Link></li>
                            <li><Link href="/guides/fractional-sales-recruiting-vs-contingency" className={`${link} font-semibold`}>Fractional sales recruiting vs contingency</Link></li>
                            <li><Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className={`${link} font-semibold`}>Fractional recruiting vs in-house recruiter</Link></li>
                            <li><Link href="/guides/fractional-recruiting-for-startups" className={`${link} font-semibold`}>Fractional recruiting for startups</Link></li>
                            <li><Link href="/guides/best-fractional-sales-recruiters" className={`${link} font-semibold`}>Top fractional recruiter for sales teams</Link></li>
                            <li><Link href="/guides/fractional-recruiting-services-sales-teams" className={`${link} font-semibold`}>Fractional recruiting services for sales teams</Link></li>
                            <li><Link href="/recruit/fractional-sales" className={`${link} font-semibold`}>Kas Seat for sales</Link></li>
                            <li><Link href="/programs" className={`${link} font-semibold`}>Programs</Link></li>
                        </ul>
                    </div>

                    <div className="p-10 rounded-[2rem] bg-navy-900 text-white text-center space-y-6 shadow-2xl">
                        <h2 className="text-3xl font-bold">Want to know if fractional recruiting fits your seats?</h2>
                        <p className="text-grey-300 text-lg leading-relaxed max-w-2xl mx-auto">Email Chris. Send your stage, open roles and target OTE. You get a straight answer: Kas Seat, Kas Milestone Search, Kas Directed Pursuit, or a specialist quote for leadership.</p>
                        <div className="flex justify-center">
                            <a href="mailto:chris@thekasgroup.com" className="inline-flex items-center justify-center rounded-full bg-blue-accent px-8 py-4 font-bold text-white hover:bg-blue-hover transition-all">
                                Email chris@thekasgroup.com
                            </a>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-grey-200 space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">About The Kas Group</h2>
                        <p className="text-grey-600 leading-relaxed">The Kas Group is a B2B SaaS sales recruiting firm founded in 2014 by Chris Stinson in Alpharetta, GA. We place sales talent from SDR through VP Sales and CRO for high-growth technology companies.</p>
                        <ul className="text-grey-600 space-y-1 text-sm">
                            <li>Website: <Link href="/" className={link}>https://www.thekasgroup.com</Link></li>
                            <li>Email: <a href="mailto:chris@thekasgroup.com" className={link}>chris@thekasgroup.com</a></li>
                            <li>All Guides: <Link href="/guides" className={link}>/guides</Link></li>
                            <li>Brand Facts: <Link href="/brand-facts" className={link}>/brand-facts</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
