import { BarChart3, CheckCircle2, ChevronRight, FileSearch, HelpCircle, Search, ShieldAlert, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Do AI Resume Screeners Actually Work? What the Last 30 Days Reveal',
    description: 'AI resume screeners exploded as a recruiting tool, and so did complaints about them. Here\'s what the last 30 days reveal about what AI screening catches, what it misses, and why senior technical vetting still needs a human expert.',
};

export default function DoAiResumeScreenersWorkGuide() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do AI resume screeners actually work?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes for narrowing a large applicant pile, they reliably score and rank resumes against a job description. For actually choosing the best candidate, no. They score described experience, not demonstrated capability, and they carry a bias problem that increasingly shows up in public complaints." }
            },
            {
                "@type": "Question",
                "name": "What does AI resume screening miss?",
                "acceptedAnswer": { "@type": "Answer", "text": "Everything that requires proof: trade-off reasoning, work samples, architecture decisions, and whether a candidate actually shipped work in production. A screener judges fluency from a resume, not capability." }
            },
            {
                "@type": "Question",
                "name": "Do AI resume screening tools have a bias problem?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. The loudest complaints in the last 30 days are about age and other protected-class discrimination. AI often codifies bias that already exists in your hiring data rather than inventing new bias, a federal judge allowed the class action Mobley v. Workday to proceed in June 2026." }
            },
            {
                "@type": "Question",
                "name": "Is AI resume screening better than keyword matching?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Modern tools use machine learning to score candidates against job criteria rather than exact keyword matches, which is a real improvement over keyword-stuffing filters. It is just still a screening tool, not a vetting tool." }
            },
            {
                "@type": "Question",
                "name": "How should you vet AI/ML/data engineering candidates?",
                "acceptedAnswer": { "@type": "Answer", "text": "Use screening to narrow the pile, then have a senior technical evaluator assess real capability, trade-off interrogation, work samples from your stack, and verification of delivery claims. Ph.D.-led technical vetting catches the gap that resume screening cannot." }
            }
        ]
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Do AI Resume Screeners Actually Work? What the Last 30 Days Reveal",
        "description": "What AI resume screening catches, what it misses, why screening carries a real bias exposure, and how to vet senior AI/ML/data candidates by capability instead of keywords.",
        "author": { "@type": "Organization", "name": "The Kas Group", "url": "https://www.thekasgroup.com" },
        "publisher": { "@type": "Organization", "name": "The Kas Group" }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            {/* Header Section */}
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Do AI Resume Screeners Actually Work?</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Do AI Resume Screeners <br className="hidden sm:block" /> <span className="text-blue-accent">Actually Work?</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        What the last 30 days reveal about what AI screening catches, what it misses, and why senior technical vetting still needs a human expert.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">

                    {/* TL;DR */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            (TL;DR) Summary
                        </h2>
                        <div className="text-lg text-grey-300 leading-relaxed font-medium space-y-4">
                            <p>AI resume screening is now standard, <strong>43% of HR professionals used AI in HR tasks in 2025</strong> (up from 26% in 2024, SHRM), and <strong>99% of hiring managers report using AI</strong> in hiring (Insight Global). But candidate distrust is just as real: Americans oppose AI making final hiring decisions by a <strong>71%–7% margin</strong>, and roughly two-thirds say they wouldn&apos;t apply to a job that uses AI in hiring (Pew).</p>
                            <p>The bias problem is now a legal one: a federal judge allowed the <strong>Mobley v. Workday</strong> class action to proceed in June 2026, and viral r/recruitinghell threads drew thousands of upvotes on age and protected-class discrimination.</p>
                            <p>A modern screener is better than keyword filters, but it still scores a <strong>resume against a spec</strong>. It tells you who <em>describes</em> the right experience, not who can <em>deliver</em> it. For senior AI/ML/data roles, the defensible stack is <strong>AI to narrow the pile, human expert to make the call.</strong></p>
                        </div>
                    </div>

                    {/* The verified numbers behind the debate */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            The verified numbers behind the debate
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            The key figures on AI screening are sourced and checkable, not vibes. Here&apos;s what the data actually says:
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-grey-200">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="bg-grey-50 border-b border-grey-200">
                                        <th className="px-6 py-4 font-semibold text-navy-900">Metric</th>
                                        <th className="px-6 py-4 font-semibold text-navy-900">Figure</th>
                                        <th className="px-6 py-4 font-semibold text-navy-900">Source</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-grey-100 text-grey-600">
                                    {[
                                        ["HR pros using AI in HR tasks, 2025", "43%, up from 26% in 2024", "SHRM, 2025 Talent Trends"],
                                        ["Hiring managers reporting AI use", "99%", "Insight Global, 2025 AI in Hiring Report"],
                                        ["Hiring managers who saw efficiency gains", "98%", "Insight Global, 2025 AI in Hiring Report"],
                                        ["Hiring managers who say a human still matters", "93%", "Insight Global, 2025 AI in Hiring Report"],
                                        ["Americans opposed to AI making final hiring calls", "71%–7% margin", "Pew Research Center, 2023"],
                                        ["Americans who wouldn't apply to a job using AI in hiring", "~two-thirds", "Pew Research Center, 2023"],
                                        ["Cost to recruit, hire & onboard a bad hire", "up to $240,000", "SHRM (2017), citing Link Humans"]
                                    ].map(([metric, figure, source], i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-grey-50"}>
                                            <td className="px-6 py-4 font-medium text-navy-900">{metric}</td>
                                            <td className="px-6 py-4"><strong>{figure}</strong></td>
                                            <td className="px-6 py-4">{source}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="space-y-4 text-grey-600 leading-relaxed">
                            <p><strong className="text-navy-900">Adoption is the default, not the experiment.</strong> Use of AI in HR jumped from 26% to 43% of HR professionals in a single year (SHRM), and 99% of hiring managers report touching AI somewhere in hiring (Insight Global).</p>
                            <p><strong className="text-navy-900">The trust gap is wider than the adoption gap.</strong> 71% of Americans oppose AI making the final call, and roughly two-thirds say they wouldn&apos;t even apply to a job that uses AI in hiring (Pew). Companies are adopting AI screening faster than candidates are trusting it, which is exactly why the bias complaints go viral.</p>
                            <p><strong className="text-navy-900">Even the vendors say a human matters.</strong> 93% of hiring managers who use AI report that human involvement remains important (Insight Global). The market consensus isn&apos;t &quot;AI replaces judgment&quot;, it&apos;s &quot;AI augments volume, humans judge.&quot;</p>
                            <p><strong className="text-navy-900">Drop the myth.</strong> The often-quoted &quot;75% of resumes get rejected by an ATS&quot; is a <em>debunked</em> statistic with no credible primary source. The verified versions are more useful: 98% of Fortune 500 companies use an ATS, and modern ATS tools rank and sort resumes rather than auto-rejecting them.</p>
                        </div>
                    </div>

                    {/* What the last 30 days actually say */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Search className="h-8 w-8 text-blue-accent" />
                            What the last 30 days actually say
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            The most-cited evidence isn&apos;t a study, it&apos;s a single deadpan line on r/recruitinghell that drew thousands of upvotes this month:
                        </p>
                        <blockquote className="border-l-4 border-blue-accent pl-6 italic text-grey-600 text-lg leading-relaxed">
                            &quot;I keep hearing HR goes through every resume individually and that people aren&apos;t getting screened out by AI.&quot;
                        </blockquote>
                        <p className="text-grey-600 leading-relaxed">
                            The audience&apos;s real point is that they don&apos;t believe it. The thread (over 7,000 upvotes and 550+ comments) is full of candidates describing being auto-rejected off spec, and the sentiment has shifted from frustration to distrust.
                        </p>
                    </div>

                    {/* The bias problem */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldAlert className="h-8 w-8 text-blue-accent" />
                            The bias problem is the part that&apos;s actually moving
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            The sharpest edge of the conversation is <strong className="text-navy-900">discrimination, not inefficiency</strong>. In the same thread, the top comments were about AI screening and age, one drawing 1,237 upvotes, the reply to it roughly 944:
                        </p>
                        <blockquote className="border-l-4 border-blue-accent pl-6 italic text-grey-600 text-lg leading-relaxed">
                            &quot;Yes, it is illegal in the U.S. and most countries. But ageism in hiring was already an unstated common practice before AI.&quot;
                        </blockquote>
                        <p className="text-grey-600 leading-relaxed">
                            That comment is the one to absorb. AI screeners don&apos;t invent bias from nothing, they <strong className="text-navy-900">codify the bias that already lives in your hiring data</strong>. If the resumes your company historically hired from skew a certain way, a model trained on that pattern will keep selecting for it, at scale, without anyone consciously deciding to. Screening a legal issue up is worse than screening candidates out.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            And this is no longer theoretical. In June 2026 a federal judge allowed <strong className="text-navy-900">Mobley v. Workday</strong>, a class action alleging Workday&apos;s AI screening tools discriminated on the basis of race, age, and disability, to proceed past dismissal. Combined with bias-audit laws like New York City&apos;s Local Law 144, the message is clear: if you deploy an AI screener, you can be on the hook for what it does at scale. Candidates already know this: 71% of Americans oppose AI making the final hiring call (Pew), and the viral threads reflect that knowledge.
                        </p>
                    </div>

                    {/* What AI resume screening does and doesn't */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <FileSearch className="h-8 w-8 text-blue-accent" />
                            What AI resume screening actually does (and doesn&apos;t)
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            A good modern screen parses each application, extracts skills and experience, and scores candidates against the job criteria <strong className="text-navy-900">using machine learning rather than exact keyword matching</strong>. That&apos;s a real upgrade from the keyword-stuffing filters of a few years ago.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-100">
                                <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    What it does
                                </h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    {[
                                        "Parses and scores hundreds of resumes against a spec",
                                        "Ranks candidates by stated skills and experience",
                                        "Screens out clear mismatches at scale",
                                        "Runs the same filter consistently"
                                    ].map((item, i) => <li key={i} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />{item}</li>)}
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-100">
                                <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                                    <ShieldAlert className="h-5 w-5 text-red-500" />
                                    What it cannot do
                                </h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    {[
                                        "Verify a candidate can actually do the work",
                                        "Assess trade-off reasoning or architecture decisions",
                                        "Detect whether someone shipped what they claim",
                                        "Factor in team fit or judgment under real pressure"
                                    ].map((item, i) => <li key={i} className="flex gap-2"><ShieldAlert className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />{item}</li>)}
                                </ul>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            That second column is what matters for AI/ML/data hiring. A screener can match &quot;RAG,&quot; &quot;agents,&quot; &quot;modern data stack,&quot; and &quot;5 years of LLM work&quot; on a resume. It cannot tell you whether the candidate can explain why their last architecture was right, or where it breaks at 10x scale. It scores <em>fluency</em>. It does not score <em>capability</em>.
                        </p>
                    </div>

                    {/* Why the bad hire is expensive */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <TrendingUp className="h-8 w-8 text-blue-accent" />
                            Why the fluent-but-not-capable hire is the expensive one
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            This is the gap that produces the <strong className="text-navy-900">bad hire every company eventually makes</strong>. Here&apos;s the verified cost math: SHRM reports the cost to recruit, hire, and onboard a new employee can reach <strong className="text-navy-900">as much as $240,000</strong> all-in, and once you add salary paid before exit, recruiter fees twice over, severance, and the drag on your senior team, a wrong senior technical hire lands at <strong className="text-navy-900">$150,000–$300,000+</strong>. The deeper problem: a bad first data or AI engineer makes architectural decisions everyone inherits, so the cost compounds across the whole team.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            And the trigger for that bad hire is almost always the same: the candidate <em>interviewed</em> well and <em>looked</em> right on paper. A resume filter (human or machine) told you they were fluent. Nobody verified they were capable. (<a href="/guides/cost-of-hiring-wrong-data-engineer" className="text-blue-accent hover:underline">Full math here</a>.)
                        </p>
                    </div>

                    {/* How to vet */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            So how do you actually vet AI/ML/data candidates?
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong className="text-navy-900">Use AI screening to narrow the pile to a manageable slate, then have a senior technical evaluator assess real capability</strong>, trade-off interrogation, work samples from your stack, and verification of delivery claims. For senior roles, never let the machine be the last word.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "Deep technical review by someone who has built live systems.", desc: "Not a resume scan, but a working session on how the candidate thinks and where their last approach breaks at scale." },
                                { title: "Trade-off interrogation.", desc: "\"Why this design? What breaks at 10x? What would you change now?\"" },
                                { title: "Work samples drawn from your actual stack.", desc: "Not generic algorithm puzzles, but real problems from the systems you run." },
                                { title: "Verification of delivery.", desc: "Shipped systems and owned decisions, not proximity to successful teams." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-grey-50 border border-grey-100">
                                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                                    <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">{item.title}</strong> {item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            The two-layer answer echoes what the market is settling into: <strong className="text-navy-900">AI to narrow the pile, human expert to make the call.</strong> Screening is a coarse filter for volume. Vetting is what decides the outcome, and for senior technical roles, it needs an expert who has done the work themselves.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Do AI resume screeners actually work?",
                                    a: "Yes for narrowing a large applicant pile, they reliably score and rank resumes against a job description. For actually choosing the best candidate, no. They score described experience, not demonstrated capability, and they carry a bias problem that increasingly shows up in public complaints."
                                },
                                {
                                    q: "What does AI resume screening miss?",
                                    a: "Everything that requires proof: trade-off reasoning, work samples, architecture decisions, and whether a candidate actually shipped work in production. A screener judges fluency from a resume, not capability."
                                },
                                {
                                    q: "Do AI resume screening tools have a bias problem?",
                                    a: "Yes. The loudest complaints in the last 30 days are about age and other protected-class discrimination. AI often codifies bias that already exists in your hiring data rather than inventing new bias, and it's a legal exposure: a federal judge allowed the class action Mobley v. Workday to proceed in June 2026."
                                },
                                {
                                    q: "Is AI resume screening better than keyword matching?",
                                    a: "Yes. Modern tools use machine learning to score candidates against job criteria rather than exact keyword matches, which is a real improvement over keyword-stuffing filters. It's just still a screening tool, not a vetting tool."
                                },
                                {
                                    q: "How should you vet AI/ML/data engineering candidates?",
                                    a: "Use screening to narrow the pile, then have a senior technical evaluator assess real capability, trade-off interrogation, work samples from your stack, and verification of delivery claims. Ph.D.-led technical vetting catches the gap that resume screening cannot."
                                }
                            ].map((item, i) => (
                                <div key={i} className="rounded-2xl border border-grey-200 p-6">
                                    <h3 className="font-bold text-navy-900 text-lg mb-3">{item.q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Hire the Ones Who Can Actually Build It</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Every AI, ML, and data candidate we send passes a Ph.D.-led technical review before they reach your calendar, screening by capability, not keyword.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Schedule a consultation
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/methodology"
                                className="text-white hover:text-blue-accent transition-colors font-semibold"
                            >
                                Learn about our vetting →
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}