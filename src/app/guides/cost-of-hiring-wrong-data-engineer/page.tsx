import { AlertTriangle, BarChart3, ChevronRight, Clock, DollarSign, HelpCircle, ShieldCheck, Target, TrendingDown, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Real Cost of a Bad Technical Hire: Time and Revenue',
    description: 'What hiring the wrong data engineer or AI engineer really costs: $150k-$300k+ and 6-12 months of roadmap. Cost breakdown, recovery timeline, warning signs, and how to vet the replacement.',
    keywords: [
        'cost of hiring the wrong data engineer',
        'cost of a bad technical hire',
        'bad technical hire cost',
        'hiring your first AI engineer',
        'first data engineer hire',
        'how long to recover from a bad engineering hire',
        'signs you hired the wrong data engineer',
        'how to vet AI engineering candidates',
    ],
    alternates: {
        canonical: 'https://thekasgroup.com/guides/cost-of-hiring-wrong-data-engineer',
    },
    openGraph: {
        type: 'article',
        title: 'The Real Cost of a Bad Technical Hire: Time and Revenue',
        description: 'What hiring the wrong data engineer or AI engineer really costs: $150k-$300k+ and 6-12 months of roadmap. Includes cost breakdown, recovery timeline, and vetting framework.',
        url: 'https://thekasgroup.com/guides/cost-of-hiring-wrong-data-engineer',
    },
};

export default function CostOfHiringWrongDataEngineer() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does a bad technical hire cost?",
                "acceptedAnswer": { "@type": "Answer", "text": "Between $150,000 and $300,000+ for a mid-to-senior data or AI engineer, including salary paid before exit, recruiter fees, severance, replacement search, and senior-team productivity drag. SHRM estimates the loss at up to 30% of the role's first-year earnings." }
            },
            {
                "@type": "Question",
                "name": "How long does it take to recover from a bad engineering hire?",
                "acceptedAnswer": { "@type": "Answer", "text": "Six to twelve months from the first serious doubt to a fully productive replacement: decision and exit (1-3 months), replacement search (2-4 months), and new-hire ramp and system repair (3-6 months)." }
            },
            {
                "@type": "Question",
                "name": "Why does the first data engineer hire matter so much?",
                "acceptedAnswer": { "@type": "Answer", "text": "The first hire makes the architectural decisions every later engineer inherits. A weak first hire creates a fragile foundation that takes subsequent hires up to a year to unwind, so the cost compounds across the whole team." }
            },
            {
                "@type": "Question",
                "name": "How do you avoid hiring the wrong AI or data engineer?",
                "acceptedAnswer": { "@type": "Answer", "text": "Vet capability rather than keywords: have a senior technical evaluator review real architecture decisions, use work-sample problems from your actual stack, and require candidates to defend past trade-offs. Ph.D.-led technical vetting catches the gap that resume screening can't." }
            }
        ]
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Real Cost of a Bad Technical Hire: What a Wrong Data Engineer Decision Costs You in Time and Revenue",
        "description": "What hiring the wrong data engineer or AI engineer really costs: $150k-$300k+ and 6-12 months of roadmap. Cost breakdown, recovery timeline, warning signs, and how to vet the replacement.",
        "author": {
            "@type": "Organization",
            "name": "The Kas Group",
            "url": "https://thekasgroup.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "The Kas Group",
            "url": "https://thekasgroup.com"
        },
        "mainEntityOfPage": "https://thekasgroup.com/guides/cost-of-hiring-wrong-data-engineer",
        "about": ["cost of a bad technical hire", "hiring your first data engineer", "AI engineer hiring mistakes"]
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
                        <span className="text-grey-600">Cost of Hiring the Wrong Data Engineer</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        The Real Cost of a <span className="text-blue-accent">Bad Technical Hire</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        What a wrong data engineer or AI engineer decision costs you in time, revenue, and roadmap, and how to avoid paying it twice.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">

                    {/* (TL;DR) Summary */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> (TL;DR) Summary
                        </h2>
                        <ul className="text-lg text-grey-300 leading-relaxed font-medium space-y-3">
                            <li>A bad technical hire costs <strong className="text-white">$150k to $300k+</strong> all-in: salary paid, recruiter fees, severance, and team drag, up to 30% of first-year earnings per SHRM.</li>
                            <li>Recovery takes <strong className="text-white">6 to 12 months</strong>: two hiring cycles plus a new ramp period before a single line of new pipeline code ships.</li>
                            <li>Your first data or AI engineer <strong className="text-white">sets your architecture</strong>. A weak foundation costs the next three hires a year to unwind.</li>
                            <li>Buzzword-matching can&apos;t tell an AI architect from a hobbyist. <strong className="text-white">Capability-based vetting</strong> is the only reliable filter.</li>
                            <li><strong className="text-white">46% of new hires fail within 18 months.</strong> The fix isn&apos;t hiring faster, it&apos;s vetting harder.</li>
                        </ul>
                    </div>

                    {/* Intro */}
                    <div className="space-y-6">
                        <p className="text-xl text-grey-600 leading-relaxed">
                            Every executive who has lived through it knows the moment: six months in, the &quot;senior&quot; data engineer still can&apos;t ship a reliable pipeline, your roadmap has quietly slipped two quarters, and your strongest engineers are spending their nights patching fragile work instead of building.
                        </p>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            The numbers back up the pain. Industry analyses put the total cost of a bad technical hire at <strong>$150,000 to $300,000</strong>, and SHRM research estimates the loss at up to <strong>30% of the role&apos;s first-year earnings</strong>, before you count the damage below the line. For the general bad-hire math across sales and technical roles, see our <Link href="/guides/cost-of-a-bad-hire" className="text-blue-accent hover:underline font-semibold">cost of a bad hire breakdown</Link>. This guide is the technical-specific deep dive: what a wrong data engineer or AI engineer decision costs in time and revenue, and how to make sure you only pay it once.
                        </p>
                    </div>

                    {/* Section: How much does it cost */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            How Much Does a Bad Technical Hire Actually Cost?
                        </h2>
                        <div className="bg-blue-accent/5 border-l-4 border-blue-accent p-6 rounded-r-2xl">
                            <p className="text-grey-700 leading-relaxed">
                                <strong>Direct answer:</strong> A bad data or AI engineer hire costs <strong>$150k-$300k all-in</strong>: roughly 6 months of salary and benefits, recruiter fees, severance, and the replacement search, plus 30% or more in indirect costs from senior-team productivity drag and delayed releases.
                            </p>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Here is the breakdown for a mid-to-senior U.S. data or AI engineer (fully loaded base ~$180k):
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Cost Component</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Typical Range</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Salary + benefits paid before exit</td>
                                        <td className="py-4 px-6 text-grey-600">$90k - $110k</td>
                                        <td className="py-4 px-6 text-grey-600">~6 months of underperformance</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-grey-50/50">
                                        <td className="py-4 px-6 font-medium text-navy-900">Recruiter fees (original + replacement)</td>
                                        <td className="py-4 px-6 text-grey-600">$30k - $60k</td>
                                        <td className="py-4 px-6 text-grey-600">20-30% of first-year comp, often twice</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Severance + offboarding</td>
                                        <td className="py-4 px-6 text-grey-600">$15k - $40k</td>
                                        <td className="py-4 px-6 text-grey-600">Depends on stage and terms</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-grey-50/50">
                                        <td className="py-4 px-6 font-medium text-navy-900">Senior team productivity drag</td>
                                        <td className="py-4 px-6 text-grey-600">$50k - $100k+</td>
                                        <td className="py-4 px-6 text-grey-600">Your best engineers compensate instead of build</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Replacement search time</td>
                                        <td className="py-4 px-6 text-grey-600">2-4 months</td>
                                        <td className="py-4 px-6 text-grey-600">Market for vetted AI/data talent is tight</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-navy-900 text-white">
                                        <td className="py-4 px-6 font-bold">Total direct + indirect</td>
                                        <td className="py-4 px-6 font-bold text-blue-accent">$150k - $300k+</td>
                                        <td className="py-4 px-6 text-grey-300">Excludes revenue delayed by slipped roadmap</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            The line most teams miss is the last one. A delayed data platform doesn&apos;t just cost money, it delays every analytics, ML, and AI initiative downstream of it.
                        </p>
                    </div>

                    {/* Section: Why the first hire */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Target className="h-8 w-8 text-blue-accent" />
                            Why Is Your First Technical Hire the Most Expensive One to Get Wrong?
                        </h2>
                        <div className="bg-blue-accent/5 border-l-4 border-blue-accent p-6 rounded-r-2xl">
                            <p className="text-grey-700 leading-relaxed">
                                <strong>Direct answer:</strong> Your first data or AI engineer makes the architectural decisions everyone else inherits. A weak hire builds fragile foundations that the next three engineers spend up to a year unwinding, so the cost compounds instead of resetting.
                            </p>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Early technical hires don&apos;t just write code. They choose the stack, the pipeline patterns, the data model, and the standards. When that person is underqualified, you don&apos;t get a slow engineer. You get a <strong>bad architecture with your company&apos;s name on it</strong>.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            This is why the first hire is different in kind, not just degree, from your tenth. A weak fifth engineer slows one workstream. A weak first engineer degrades every workstream that comes after. And because the failure is structural, it usually takes two quarters before it is undeniable, by which point you have paid the comp, lost the time, and still have to start over. For the sequencing question (engineer, analytics engineer, or data scientist first), see our <Link href="/guides/data-engineer-vs-analytics-engineer-hiring-guide" className="text-blue-accent hover:underline font-semibold">Data Engineer vs. Analytics Engineer hiring guide</Link>, and for how to run the search correctly, our <Link href="/guides/how-to-hire-senior-data-engineers-ai-startups" className="text-blue-accent hover:underline font-semibold">guide to hiring senior data engineers for AI startups</Link>.
                        </p>
                    </div>

                    {/* Section: Recovery timeline */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Clock className="h-8 w-8 text-blue-accent" />
                            How Long Does It Take to Recover From a Bad Engineering Hire?
                        </h2>
                        <div className="bg-blue-accent/5 border-l-4 border-blue-accent p-6 rounded-r-2xl">
                            <p className="text-grey-700 leading-relaxed">
                                <strong>Direct answer:</strong> Expect <strong>6-12 months</strong> from the first serious doubt to a fully ramped replacement: 1-3 months to decide and exit, 2-4 months to search, and 3-6 months for the new hire to rebuild context, credibility, and the damaged systems.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200 text-center">
                                <p className="text-3xl font-black text-navy-900 mb-2">1-3 mo</p>
                                <p className="font-bold text-navy-900 text-sm mb-1">Decide &amp; Exit</p>
                                <p className="text-grey-600 text-sm leading-relaxed">Underperformance hides behind complexity: &quot;the data is messy, the legacy system is hard.&quot;</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200 text-center">
                                <p className="text-3xl font-black text-navy-900 mb-2">2-4 mo</p>
                                <p className="font-bold text-navy-900 text-sm mb-1">Replacement Search</p>
                                <p className="text-grey-600 text-sm leading-relaxed">The market for genuinely vetted AI/data talent is tight, and the best candidates are off the market in ~14 days.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200 text-center">
                                <p className="text-3xl font-black text-navy-900 mb-2">3-6 mo</p>
                                <p className="font-bold text-navy-900 text-sm mb-1">Rebuild &amp; Ramp</p>
                                <p className="text-grey-600 text-sm leading-relaxed">The replacement inherits the damaged systems and the trust deficit the failed hire left with stakeholders.</p>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            For a growth-stage company, that is a year in which the data platform your board was promised effectively stands still. That is the real unit of loss: not dollars, but quarters.
                        </p>
                    </div>

                    {/* Section: Warning signs */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <AlertTriangle className="h-8 w-8 text-red-500" />
                            What Are the Signs You Hired the Wrong Data Engineer?
                        </h2>
                        <div className="bg-blue-accent/5 border-l-4 border-blue-accent p-6 rounded-r-2xl">
                            <p className="text-grey-700 leading-relaxed">
                                <strong>Direct answer:</strong> The reliable signals are shipping velocity (demos improve, production doesn&apos;t), dependency (they can&apos;t make architecture calls alone), and blame drift (every failure is attributed to legacy systems or upstream teams).
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    title: "Great demos, dead pipelines",
                                    desc: "Dashboards look fine in reviews; production jobs fail nightly and get babysat manually."
                                },
                                {
                                    title: "Permanent dependency",
                                    desc: "Six months in, they still escalate basic architecture decisions instead of owning them."
                                },
                                {
                                    title: "Unwarranted certainty",
                                    desc: "Buzzword fluency (RAG, agents, \"modern data stack\") without the ability to explain trade-offs."
                                },
                                {
                                    title: "Blame drift",
                                    desc: "Every miss is the legacy system, the upstream team, or \"the data\" — never a decision they made."
                                },
                                {
                                    title: "Quiet exits around them",
                                    desc: "Strong senior engineers start avoiding their projects."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-grey-100 bg-grey-50/30 hover:shadow-md transition-shadow">
                                    <div className="shrink-0 h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                                        <AlertTriangle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                                        <p className="text-grey-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Any one of these is a bad week. Three or more, six months in, is a bad hire, and every additional month costs you comp, roadmap, and team trust simultaneously.
                        </p>
                    </div>

                    {/* Section: How to vet the replacement */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-blue-accent" />
                            How Do You Vet a Replacement So It Doesn&apos;t Happen Twice?
                        </h2>
                        <div className="bg-blue-accent/5 border-l-4 border-blue-accent p-6 rounded-r-2xl">
                            <p className="text-grey-700 leading-relaxed">
                                <strong>Direct answer:</strong> Vet capability, not keywords: have a senior technical evaluator assess real architecture decisions and trade-offs, use work-sample problems drawn from your actual stack, and require the candidate to defend past decisions, including failures.
                            </p>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            The uncomfortable truth is that generalist recruiting can&apos;t do this. Keyword matching can&apos;t differentiate a real AI architect from a well-read hobbyist, and an interview tells you who is <em>fluent</em>, not who is <strong>capable</strong>. That&apos;s the gap that produced the bad hire in the first place.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            What capability-based vetting looks like:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Ph.D.-level technical review</strong> of every candidate by someone who has built production systems, not a resume scan.</p>
                            </li>
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Trade-off interrogation:</strong> &quot;Why this pipeline design? What breaks at 10x scale? What would you do differently now?&quot;</p>
                            </li>
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Work samples from your stack,</strong> not generic algorithm puzzles.</p>
                            </li>
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Reference verification of delivery claims</strong> — shipped systems and owned decisions, not proximity to successful teams.</p>
                            </li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            Recovering from one bad hire is painful. Repeating the process that caused it is the actual failure. For the full interview framework and technical assessment checklist, see our <Link href="/guides/senior-data-engineer-skills-assessment-vetting" className="text-blue-accent hover:underline font-semibold">senior data engineer skills assessment guide</Link>, and for the AI-specific version, <Link href="/guides/how-to-hire-ai-ml-engineers" className="text-blue-accent hover:underline font-semibold">how to hire AI and ML engineers</Link>.
                        </p>
                    </div>

                    {/* Ph.D. Vetting Differentiator */}
                    <div className="bg-blue-accent/5 rounded-3xl p-10 border border-blue-accent/20 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/3">
                            <div className="h-20 w-20 rounded-2xl bg-blue-accent flex items-center justify-center text-white shadow-lg">
                                <ShieldCheck className="h-10 w-10" />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">Elite Technical Vetting</h2>
                            <p className="text-grey-600 leading-relaxed">
                                At The Kas Group, we don&apos;t just screen by keyword. Our <strong>Technical Advisor (Ph.D. Statistics, former Microsoft Global Lead Data Scientist)</strong> personally vets every AI and data engineering candidate before they reach your calendar. Learn more on our <Link href="/methodology" className="text-blue-accent hover:underline font-semibold">methodology page</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Related Guides */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Related Guides
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "The True Cost of a Bad Hire", href: "/guides/cost-of-a-bad-hire", desc: "The general cost math across sales and technical roles, with prevention strategies." },
                                { title: "Hiring Senior Data Engineers for AI Startups", href: "/guides/how-to-hire-senior-data-engineers-ai-startups", desc: "The tactical roadmap for getting the first technical hire right." },
                                { title: "Senior Data Engineer Skills Assessment", href: "/guides/senior-data-engineer-skills-assessment-vetting", desc: "The full technical vetting framework and interview questions." },
                                { title: "Best Data Engineering Recruiting Agencies", href: "/guides/best-data-engineering-recruiting-agencies", desc: "Our objective analysis of the top firms for the modern data stack." },
                            ].map((guide) => (
                                <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl border border-grey-100 hover:border-blue-accent/20 hover:bg-grey-50 transition-all shadow-sm">
                                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-blue-accent transition-colors">{guide.title}</h3>
                                    <p className="text-sm text-grey-500 leading-relaxed">{guide.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-12 bg-grey-50 p-8 md:p-12 rounded-[2rem] border border-grey-200">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Bad Technical Hire FAQ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How much does a bad technical hire cost?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Between $150,000 and $300,000+ for a mid-to-senior data or AI engineer, including salary paid before exit, recruiter fees, severance, replacement search, and senior-team productivity drag. SHRM estimates the loss at up to 30% of the role&apos;s first-year earnings.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How long does it take to recover from a bad engineering hire?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Six to twelve months from the first serious doubt to a fully productive replacement: decision and exit (1-3 months), replacement search (2-4 months), and new-hire ramp and system repair (3-6 months).
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Why does the first data engineer hire matter so much?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    The first hire makes the architectural decisions every later engineer inherits. A weak first hire creates a fragile foundation that takes subsequent hires up to a year to unwind, so the cost compounds across the whole team.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How do you avoid hiring the wrong AI or data engineer?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Vet capability rather than keywords: have a senior technical evaluator review real architecture decisions, use work-sample problems from your actual stack, and require candidates to defend past trade-offs. Ph.D.-led technical vetting catches the gap that resume screening can&apos;t.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Get the Next One Right</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            A bad technical hire costs you $150k-$300k and up to a year you won&apos;t get back. Get access to AI and data engineering talent vetted by a Ph.D.-level technical review before they ever reach your calendar.
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
                                See our vetting methodology →
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
