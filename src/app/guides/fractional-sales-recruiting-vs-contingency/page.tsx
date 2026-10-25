import { ChevronRight, HelpCircle, Layers, Scale, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Fractional vs Contingency vs Retained Recruiting",
    description: "Fractional vs contingency vs retained recruiting for sales hiring: how you pay, best fit, speed, involvement and role level, with sourced fees and Kas pricing.",
    path: "/guides/fractional-sales-recruiting-vs-contingency",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const link = "text-blue-accent hover:underline";

const SRC = {
    shrm: "https://www.shrm.org/topics-tools/news/talent-acquisition/how-to-work-effectively-executive-search-firm",
};

// One array drives both the visible FAQ and the FAQPage schema, so the text matches word for word.
const FAQS = [
    {
        q: "What is the difference between fractional vs contingency recruiting?",
        a: "Contingency recruiting is paid only when a hire is made. SHRM puts the usual fee at 20% to 25% of the role's first year cash compensation. Fractional recruiting is a monthly retainer for a partner who works inside your process across your open seats. At The Kas Group, Kas Seat is $5k/mo for up to two open sales roles and $8k/mo for three to five.",
    },
    {
        q: "What is the difference between retained vs contingency recruiting?",
        a: "Retained search is an exclusive search, usually for an executive seat, paid whether or not the role is filled. SHRM cites a typical fee of about 33% of salary, bonus and signing bonus. Contingency recruiting is paid only on a hire, usually 20% to 25% of first year cash compensation, and is often used for roles up to senior manager.",
    },
    {
        q: "Which recruiting model fits my situation?",
        a: "Several sales seats this quarter fit a fractional retainer such as Kas Seat. One clear sales seat through Sales Manager fits a per role search such as Kas Milestone Search. A leadership seat above manager fits an exclusive search, which The Kas Group runs as Kas Directed Pursuit, priced on request.",
    },
    {
        q: "How much does The Kas Group charge?",
        a: "Kas Seat is $5k/mo for up to two open sales roles and $8k/mo for three to five, up to $10k/mo for senior AE and above, with zero success fees. Kas Milestone Search example fees are $5,000 for SDR/BDR, $7,500 for AE and $10,000 for Senior AE or Sales Manager. Kas Directed Pursuit is priced on request. AI, ML and data searches are quote only.",
    },
    {
        q: "Can I pause a fractional sales recruiting retainer?",
        a: "Yes. Kas Seat is month to month. Pause when hiring stops. Resume when the next sales seat opens.",
    },
    {
        q: "What does The Kas Group commit to on sales searches?",
        a: "For SDR through Sales Manager seats only: a free market scan in 48 to 72 hours, and 3 or more qualified candidates in 3 weeks or we keep hunting at no charge. Placements carry a 60 day re hunt, not a refund.",
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
    {
        model: "Fractional",
        pay: "Monthly retainer for dedicated time",
        fit: "Several open seats in a quarter, or hiring in bursts",
        speed: "At The Kas Group, a free market scan in 48 to 72 hours for SDR through Sales Manager",
        involvement: "Partner works inside your tools and joins your debriefs",
        level: "SDR through Sales Manager, across several seats",
    },
    {
        model: "Contingency",
        pay: "Paid only on a hire, usually 20% to 25% of first year cash compensation (SHRM)",
        fit: "One well defined role you want filled",
        speed: "Starts right away; several recruiters can work the role in parallel (SHRM)",
        involvement: "You review candidates as they are introduced",
        level: "Roles up to senior manager (SHRM)",
    },
    {
        model: "Retained",
        pay: "About 33% of salary, bonus and signing bonus, paid whether or not the role is filled (SHRM)",
        fit: "One high impact leadership seat",
        speed: "Exclusive, focused search for one person",
        involvement: "Close partnership with one firm on one search",
        level: "Executive and leadership seats (SHRM)",
    },
];

export default function FractionalVsContingencyVsRetained() {
    const th = "py-4 px-6 font-bold text-navy-900";
    const td = "py-4 px-6 text-grey-600";
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
                        <span className="text-grey-600">Fractional vs Contingency vs Retained</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional vs Contingency vs Retained Recruiting:{" "}
                        <span className="text-blue-accent">Which Model Fits</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Each recruiting model fits a different hiring situation. This guide compares how you pay, best fit, speed, involvement and role level, then shows where The Kas Group fits for sales hiring.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            The short answer
                        </h2>
                        <ul className="space-y-3 text-lg text-grey-300 leading-relaxed list-disc pl-6">
                            <li><strong className="text-white">Several sales seats this quarter:</strong> a fractional retainer. At The Kas Group that is Kas Seat.</li>
                            <li><strong className="text-white">One clear seat:</strong> contingency, or a per role search such as Kas Milestone Search through Sales Manager.</li>
                            <li><strong className="text-white">One leadership seat:</strong> retained search. At The Kas Group, roles above manager run as Kas Directed Pursuit, priced on request.</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Fractional vs contingency vs retained: comparison table
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className={th}>Model</th>
                                        <th className={th}>How you pay</th>
                                        <th className={th}>Best fit</th>
                                        <th className={th}>Speed</th>
                                        <th className={th}>Involvement</th>
                                        <th className={th}>Role level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MODELS.map((m) => (
                                        <tr key={m.model} className="border-b border-grey-100 last:border-0 align-top">
                                            <td className="py-4 px-6 font-bold text-navy-900">{m.model}</td>
                                            <td className={td}>{m.pay}</td>
                                            <td className={td}>{m.fit}</td>
                                            <td className={td}>{m.speed}</td>
                                            <td className={td}>{m.involvement}</td>
                                            <td className={td}>{m.level}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-grey-500">Fee ranges and role levels for contingency and retained search come from <a href={SRC.shrm} className={link}>SHRM</a>. Always confirm in the contract what the fee is calculated on.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">Fractional vs contingency recruiting</h2>
                        <p className="text-grey-600 leading-relaxed">Contingency recruiting is paid only when a hire is made. <a href={SRC.shrm} className={link}>SHRM</a> puts the usual fee at 20% to 25% of the role&apos;s first year cash compensation: salary, bonus and signing bonus. It works well for one well defined role.</p>
                        <p className="text-grey-600 leading-relaxed">Fractional recruiting is a monthly retainer. A recruiting partner works inside your process on all your open seats, from scorecard to offer. It works well when you have several sales seats to fill. Model primer: <Link href="/guides/fractional-recruiting-guide" className={link}>what is fractional recruiting</Link>.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">Retained vs contingency recruiting</h2>
                        <p className="text-grey-600 leading-relaxed">SHRM describes retained search as usually exclusive and focused on executive seats, with the firm paid whether or not it finds the hire, at a typical fee of about 33% of salary, bonus and signing bonus. Contingency recruiting covers a wide range of roles up to senior manager and is paid only on a hire.</p>
                        <p className="text-grey-600 leading-relaxed">Retained search fits a seat where one leadership hire shapes the company. Contingency fits a defined role where you want candidates introduced as they are found.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-blue-accent" />
                            Where The Kas Group fits
                        </h2>
                        <ul className="space-y-3 text-grey-600 leading-relaxed list-disc pl-6">
                            <li><strong className="text-navy-900">Kas Seat (fractional):</strong> $5k/mo for up to two open sales roles, $8k/mo for three to five. Up to $10k/mo for senior AE and above. Zero success fees. Month to month.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search (one seat):</strong> example fees SDR/BDR $5,000, AE $7,500, Senior AE or Sales Manager $10,000. Three payments tied to milestones.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit (above manager):</strong> Director, VP and CRO searches. Pricing on request.</li>
                            <li><strong className="text-navy-900">AI, ML and data roles:</strong> quote only. Never monthly.</li>
                        </ul>
                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-blue-accent" />
                                Commitments on SDR through Sales Manager searches
                            </h3>
                            <ul className="space-y-2 text-grey-600 leading-relaxed list-disc pl-6">
                                <li>Free market scan in 48 to 72 hours</li>
                                <li>3 or more qualified candidates in 3 weeks, or we keep hunting at no charge</li>
                                <li>60 day re hunt on placement, not a refund</li>
                            </ul>
                        </div>
                        <p className="text-grey-600 leading-relaxed">Full price list: <Link href="/guides/fractional-sales-recruiting-cost" className={link}>fractional sales recruiting cost</Link> and <Link href="/programs" className={link}>Programs</Link>.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900">Worked examples</h2>
                        <p className="text-grey-600 leading-relaxed">These use example packages and the SHRM contingency range of 20% to 25% of first year cash compensation. The math is ours.</p>
                        <h3 className="text-xl font-bold text-navy-900">Example A: one AE, $150,000 first year cash</h3>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className={th}>Model</th>
                                        <th className={th}>Math</th>
                                        <th className={th}>You pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100"><td className="py-4 px-6 font-bold text-navy-900">Contingency at 20%</td><td className={td}>0.20 x $150,000</td><td className={td}>$30,000</td></tr>
                                    <tr className="border-b border-grey-100"><td className="py-4 px-6 font-bold text-navy-900">Contingency at 25%</td><td className={td}>0.25 x $150,000</td><td className={td}>$37,500</td></tr>
                                    <tr className="border-b border-grey-100"><td className="py-4 px-6 font-bold text-navy-900">Kas Milestone Search, AE</td><td className={td}>Example fee</td><td className={td}>$7,500</td></tr>
                                    <tr><td className="py-4 px-6 font-bold text-navy-900">Kas Seat, one open role, 2 months</td><td className={td}>$5,000 x 2</td><td className={td}>$10,000</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-xl font-bold text-navy-900">Example B: five sales seats over 4 months</h3>
                        <p className="text-grey-600 leading-relaxed">Three AEs at $150,000 and two SDRs at $80,000 first year cash.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className={th}>Model</th>
                                        <th className={th}>Math</th>
                                        <th className={th}>You pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-grey-100"><td className="py-4 px-6 font-bold text-navy-900">Contingency at 20%</td><td className={td}>0.20 x $610,000</td><td className={td}>$122,000</td></tr>
                                    <tr className="border-b border-grey-100"><td className="py-4 px-6 font-bold text-navy-900">Contingency at 25%</td><td className={td}>0.25 x $610,000</td><td className={td}>$152,500</td></tr>
                                    <tr className="border-b border-grey-100"><td className="py-4 px-6 font-bold text-navy-900">Kas Milestone Search</td><td className={td}>$7,500 x 3 + $5,000 x 2</td><td className={td}>$32,500</td></tr>
                                    <tr><td className="py-4 px-6 font-bold text-navy-900">Kas Seat, five open roles</td><td className={td}>$8,000 x 4</td><td className={td}>$32,000</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-xl font-bold text-navy-900">Example C: VP of Sales</h3>
                        <p className="text-grey-600 leading-relaxed">SHRM puts retained search at about 33% of salary, bonus and signing bonus. At The Kas Group, VP and other roles above manager run as Kas Directed Pursuit. We scope the search in a conversation and quote it, so there is no list price.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional vs contingency vs retained recruiting
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
                            <li>How to Work Effectively with an Executive Search Firm, SHRM, July 2016. Contingency and retained fee ranges and how each model works. <a href={SRC.shrm} className={link}>{SRC.shrm}</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Related guides</h2>
                        <ul className="space-y-2 text-grey-600">
                            <li><Link href="/guides/fractional-sales-recruiting-cost" className={`${link} font-semibold`}>Fractional sales recruiting cost</Link></li>
                            <li><Link href="/guides/fractional-recruiting-guide" className={`${link} font-semibold`}>What is fractional recruiting</Link></li>
                            <li><Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className={`${link} font-semibold`}>Fractional recruiting vs in-house recruiter</Link></li>
                            <li><Link href="/guides/fractional-recruiting-for-startups" className={`${link} font-semibold`}>Fractional recruiting for startups</Link></li>
                            <li><Link href="/recruit/fractional-sales" className={`${link} font-semibold`}>Fractional sales recruiting</Link></li>
                            <li><Link href="/programs" className={`${link} font-semibold`}>Programs</Link></li>
                        </ul>
                    </div>

                    <div className="p-10 rounded-[2rem] bg-navy-900 text-white text-center space-y-6 shadow-2xl">
                        <h2 className="text-3xl font-bold">Not sure which model fits?</h2>
                        <p className="text-grey-300 text-lg leading-relaxed max-w-2xl mx-auto">Email Chris with your open seats and target pay. You get a straight answer: Kas Seat, Kas Milestone Search or Kas Directed Pursuit.</p>
                        <div className="flex justify-center">
                            <a href="mailto:chris@thekasgroup.com" className="inline-flex items-center justify-center rounded-full bg-blue-accent px-8 py-4 font-bold text-white hover:bg-blue-hover transition-all">
                                Email chris@thekasgroup.com
                            </a>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-grey-200 space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">About The Kas Group</h2>
                        <p className="text-grey-600 leading-relaxed">The Kas Group is a B2B SaaS sales recruiting firm founded in 2014. We place sales talent from SDR through VP Sales and CRO for high growth technology companies.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
