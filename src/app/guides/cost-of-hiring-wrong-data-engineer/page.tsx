import { AlertTriangle, BarChart3, ChevronRight, Clock, DollarSign, HelpCircle, ShieldCheck, Target, TrendingDown, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: 'The Real Cost of a Bad Technical Hire: Time and Revenue',
    description: 'What hiring the wrong data or AI engineer costs: INOP, a vendor, estimates $150,000 to $300,000. Recovery, warning signs and how to vet the replacement.',
    path: "/guides/cost-of-hiring-wrong-data-engineer",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

const SRC = {
    inop: "https://inop.ai/cost-of-a-bad-hire/",
    shrm: "https://www.shrm.org/labs/resources/when-candidates-can-fake-skills-real-time-assessment-design",
};

const FAQS = [
    {
        q: "How much does a bad technical hire cost?",
        a: "INOP, a vendor, estimates a bad software engineer hire in technology can cost $150,000 to $300,000 once you count the productivity loss, the senior engineers who compensate and the replacement cycle. In INOP's illustrative scenario, a $145,000 senior data engineer who lasts seven months costs about $265,838, or 183% of salary. SHRM puts the replacement cost of a bad hire at 50% to 200% of salary, depending on seniority.",
    },
    {
        q: "How long does it take to recover from a bad engineering hire?",
        a: "Longer than most teams plan for. Recovery has three phases: deciding the hire is not working and managing the exit, searching for a replacement, and ramping the new hire while they repair what was left behind. In INOP's illustrative scenario, the hire lasted seven months before the replacement cycle even started.",
    },
    {
        q: "Why does the first data engineer hire matter so much?",
        a: "The first hire makes the architectural decisions every later engineer inherits. A weak first hire creates a fragile foundation that later hires have to unwind, so the cost compounds across the whole team.",
    },
    {
        q: "How do you avoid hiring the wrong AI or data engineer?",
        a: "Vet capability rather than keywords: have a senior technical evaluator review real architecture decisions, use work sample problems from your actual stack, and require candidates to defend past trade offs. Expect AI assistance in interviews too. SHRM reports that Fabric found signs of AI cheating in 38.5% of nearly 20,000 interviews, and 48% for technical roles.",
    },
];

export default function CostOfHiringWrongDataEngineer() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} headline="The Real Cost of a Bad Technical Hire: What a Wrong Data Engineer Decision Costs You in Time and Revenue" about={["cost of a bad technical hire", "hiring your first data engineer", "AI engineer hiring mistakes"]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                            <li>INOP, a vendor, estimates a bad engineering hire costs <strong className="text-white">$150,000 to $300,000</strong> once productivity loss, team drag and the replacement cycle are counted. SHRM puts replacement cost at 50% to 200% of salary, depending on seniority.</li>
                            <li>Recovery means <strong className="text-white">two hiring cycles</strong> plus a new ramp period before new pipeline code ships.</li>
                            <li>Your first data or AI engineer <strong className="text-white">sets your architecture</strong>. A weak foundation is what every later hire has to unwind.</li>
                            <li>Buzzword-matching can&apos;t tell an AI architect from a hobbyist. <strong className="text-white">Capability-based vetting</strong> is the only reliable filter.</li>
                            <li>Leadership IQ tracking, cited by SHRM, finds <strong className="text-white">46% of new hires fail within 18 months</strong>. Vet harder, not faster.</li>
                        </ul>
                    </div>

                    {/* Intro */}
                    <div className="space-y-6">
                        <p className="text-xl text-grey-600 leading-relaxed">
                            Every executive who has lived through it knows the moment: months in, the &quot;senior&quot; data engineer still can&apos;t ship a reliable pipeline, your roadmap has quietly slipped, and your strongest engineers are spending their nights patching fragile work instead of building.
                        </p>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            The numbers back up the pain. <a href={SRC.inop} className="text-blue-accent hover:underline font-semibold">INOP</a>, a vendor, estimates a bad software engineer hire in technology can cost <strong>$150,000 to $300,000</strong>. <a href={SRC.shrm} className="text-blue-accent hover:underline font-semibold">SHRM</a> puts the replacement cost of a bad hire at <strong>50% to 200% of salary</strong>, depending on seniority. For sourced figures on bad sales hires, see our <Link href="/guides/cost-of-a-bad-hire" className="text-blue-accent hover:underline font-semibold">cost of a bad hire breakdown</Link>. This guide is the technical-specific deep dive: what a wrong data engineer or AI engineer decision costs in time and revenue, and how to make sure you only pay it once.
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
                                <strong>Direct answer:</strong> INOP, a vendor, estimates <strong>$150,000 to $300,000</strong> for a bad engineering hire: salary paid, hiring costs, lost productivity, the senior engineers who compensate, delayed releases and the replacement cycle.
                            </p>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Here is INOP&apos;s illustrative scenario: a senior data engineer on a $145,000 salary who lasts seven months. It is a worked example from a vendor, not survey data.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Cost Component</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">INOP Scenario</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">What It Covers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Acquisition costs</td>
                                        <td className="py-4 px-6 text-grey-600">$42,000</td>
                                        <td className="py-4 px-6 text-grey-600">Agency fee at 25%, interview panel time, recruiter and coordination time</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-grey-50/50">
                                        <td className="py-4 px-6 font-medium text-navy-900">Onboarding and training</td>
                                        <td className="py-4 px-6 text-grey-600">$6,000</td>
                                        <td className="py-4 px-6 text-grey-600">Tooling, access, mentoring and setup</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Compensation paid</td>
                                        <td className="py-4 px-6 text-grey-600">$104,600</td>
                                        <td className="py-4 px-6 text-grey-600">Seven months of salary and benefits</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-grey-50/50">
                                        <td className="py-4 px-6 font-medium text-navy-900">Lost productivity</td>
                                        <td className="py-4 px-6 text-grey-600">$56,350</td>
                                        <td className="py-4 px-6 text-grey-600">Seven months at 40% of expected contribution</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Management time</td>
                                        <td className="py-4 px-6 text-grey-600">$12,808</td>
                                        <td className="py-4 px-6 text-grey-600">Engineering manager time over seven months</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-grey-50/50">
                                        <td className="py-4 px-6 font-medium text-navy-900">Project delay</td>
                                        <td className="py-4 px-6 text-grey-600">$40,000</td>
                                        <td className="py-4 px-6 text-grey-600">A missed delivery milestone, valued as lost revenue and contract penalties</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-medium text-navy-900">Replacement cycle restart</td>
                                        <td className="py-4 px-6 text-grey-600">$42,000</td>
                                        <td className="py-4 px-6 text-grey-600">Hiring again</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-navy-900 text-white">
                                        <td className="py-4 px-6 font-bold">Total</td>
                                        <td className="py-4 px-6 font-bold text-blue-accent">$265,838</td>
                                        <td className="py-4 px-6 text-grey-300">183% of annual salary, before reputational damage</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            The line most teams miss is the project delay. A delayed data platform costs more than money. It delays every analytics, ML and AI initiative downstream of it.
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
                                <strong>Direct answer:</strong> Your first data or AI engineer makes the architectural decisions everyone else inherits. A weak hire builds fragile foundations that later engineers have to unwind, so the cost compounds instead of resetting.
                            </p>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Early technical hires don&apos;t just write code. They choose the stack, the pipeline patterns, the data model, and the standards. When that person is underqualified, you don&apos;t get a slow engineer. You get a <strong>bad architecture with your company&apos;s name on it</strong>.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            This is why the first hire is different in kind, not just degree, from your tenth. A weak fifth engineer slows one workstream. A weak first engineer degrades every workstream that comes after. And because the failure is structural, it can take months before it is undeniable, by which point you have paid the comp, lost the time, and still have to start over. For the sequencing question (engineer, analytics engineer, or data scientist first), see our <Link href="/guides/data-engineer-vs-analytics-engineer-hiring-guide" className="text-blue-accent hover:underline font-semibold">Data Engineer vs. Analytics Engineer hiring guide</Link>, and for how to run the search correctly, our <Link href="/guides/how-to-hire-senior-data-engineers-ai-startups" className="text-blue-accent hover:underline font-semibold">guide to hiring senior data engineers for AI startups</Link>.
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
                                <strong>Direct answer:</strong> Expect three phases from the first serious doubt to a fully ramped replacement: deciding and managing the exit, searching for a replacement, and the new hire rebuilding context, credibility and the damaged systems. In INOP&apos;s illustrative scenario, the bad hire lasted seven months before the replacement cycle began.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200 text-center">
                                <p className="text-3xl font-black text-navy-900 mb-2">Phase 1</p>
                                <p className="font-bold text-navy-900 text-sm mb-1">Decide &amp; Exit</p>
                                <p className="text-grey-600 text-sm leading-relaxed">Underperformance hides behind complexity: &quot;the data is messy, the legacy system is hard.&quot;</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200 text-center">
                                <p className="text-3xl font-black text-navy-900 mb-2">Phase 2</p>
                                <p className="font-bold text-navy-900 text-sm mb-1">Replacement Search</p>
                                <p className="text-grey-600 text-sm leading-relaxed">Strong AI and data candidates are hard to find, and the search starts over from zero.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200 text-center">
                                <p className="text-3xl font-black text-navy-900 mb-2">Phase 3</p>
                                <p className="font-bold text-navy-900 text-sm mb-1">Rebuild &amp; Ramp</p>
                                <p className="text-grey-600 text-sm leading-relaxed">The replacement inherits the damaged systems and the trust deficit the failed hire left with stakeholders.</p>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            For a growth stage company, that is a long stretch in which the data platform your board was promised stands still. Count the loss in quarters as well as dollars.
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
                                    desc: "Months in, they still escalate basic architecture decisions instead of owning them."
                                },
                                {
                                    title: "Unwarranted certainty",
                                    desc: "Buzzword fluency (RAG, agents, \"modern data stack\") without the ability to explain trade offs."
                                },
                                {
                                    title: "Blame drift",
                                    desc: "Every miss is the legacy system, the upstream team, or \"the data\", never a decision they made."
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
                            Any one of these is a bad week. Several at once, months in, is a bad hire, and every additional month costs you comp, roadmap and team trust at the same time.
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
                                <strong>Direct answer:</strong> Vet capability, not keywords: have a senior technical evaluator assess real architecture decisions and trade offs, use work-sample problems drawn from your actual stack, and require the candidate to defend past decisions, including failures.
                            </p>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            The uncomfortable truth is that generalist recruiting can&apos;t do this. Keyword matching can&apos;t differentiate a real AI architect from a well-read hobbyist, and an interview tells you who is <em>fluent</em>, not who is <strong>capable</strong>. That&apos;s the gap that produced the bad hire in the first place. AI makes it wider. <a href={SRC.shrm} className="text-blue-accent hover:underline font-semibold">SHRM reports</a> that Fabric, an AI interview platform, analyzed nearly 20,000 interviews from July 2025 to January 2026 and found 38.5% of candidates showed signs of cheating with AI, rising to 48% for technical roles.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            What capability-based vetting looks like:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Technical review by a qualified evaluator</strong> who can judge the work itself, not a resume scan.</p>
                            </li>
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Trade off interrogation:</strong> &quot;Why this pipeline design? What breaks at 10x scale? What would you do differently now?&quot;</p>
                            </li>
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Work samples from your stack,</strong> not generic algorithm puzzles.</p>
                            </li>
                            <li className="flex gap-4 p-5 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <ShieldCheck className="shrink-0 h-6 w-6 text-blue-accent" />
                                <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">Reference verification of delivery claims</strong>, shipped systems and owned decisions, not proximity to successful teams.</p>
                            </li>
                        </ul>
                        <p className="text-grey-600 leading-relaxed">
                            Recovering from one bad hire is painful. Repeating the process that caused it is the actual failure. For the full interview framework and technical assessment checklist, see our <Link href="/guides/senior-data-engineer-skills-assessment-vetting" className="text-blue-accent hover:underline font-semibold">senior data engineer skills assessment guide</Link>, and for the AI-specific version, <Link href="/guides/how-to-hire-ai-ml-engineers" className="text-blue-accent hover:underline font-semibold">how to hire AI and ML engineers</Link>.
                        </p>
                    </div>

                    {/* Technical vetting */}
                    <div className="bg-blue-accent/5 rounded-3xl p-10 border border-blue-accent/20 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/3">
                            <div className="h-20 w-20 rounded-2xl bg-blue-accent flex items-center justify-center text-white shadow-lg">
                                <ShieldCheck className="h-10 w-10" />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">Technical Vetting at The Kas Group</h2>
                            <p className="text-grey-600 leading-relaxed">
                                At The Kas Group, Derek Norton personally vets our AI, ML and data candidates. Derek holds a PhD in Statistics, founded the Atlanta R Users Group, was a Global Lead Data Scientist at Microsoft, and is currently CTO at Life2. Learn more on our <Link href="/methodology" className="text-blue-accent hover:underline font-semibold">methodology page</Link>.
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
                                { title: "The True Cost of a Bad Hire", href: "/guides/cost-of-a-bad-hire", desc: "Sourced figures on what a bad sales hire costs, and how to lower the risk." },
                                { title: "Hiring Senior Data Engineers for AI Startups", href: "/guides/how-to-hire-senior-data-engineers-ai-startups", desc: "The tactical roadmap for getting the first technical hire right." },
                                { title: "Senior Data Engineer Skills Assessment", href: "/guides/senior-data-engineer-skills-assessment-vetting", desc: "The full technical vetting framework and interview questions." },
                                { title: "Best Data Engineering Recruiting Agencies", href: "/guides/best-data-engineering-recruiting-agencies", desc: "Our objective analysis of the top firms for the modern data stack." },
                                { title: "Do AI Resume Screeners Work?", href: "/guides/do-ai-resume-screeners-work", desc: "What keyword and AI screening misses, and why capability checks catch it." },
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
                            {FAQS.map((f) => (
                                <div key={f.q} className="space-y-4">
                                    <h3 className="font-bold text-navy-900 text-lg">{f.q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sources */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-grey-600 text-base">
                            <li>Cost of a Bad Hire: 2026 Stats, DOL and SHRM Sources, INOP, updated October 13, 2026. Vendor estimates and an illustrative scenario. <a href={SRC.inop} className="text-blue-accent hover:underline">{SRC.inop}</a></li>
                            <li>When Candidates Can Fake Skills in Real Time, Assessment Design Has to Catch Up, SHRM Labs. Cites SHRM replacement cost research, Leadership IQ and Fabric interview data. <a href={SRC.shrm} className="text-blue-accent hover:underline">{SRC.shrm}</a></li>
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Get the Next One Right</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Email me the AI or data role you are hiring for and what went wrong last time. I will tell you how we would vet the next one.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <a
                                href="mailto:chris@thekasgroup.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Email chris@thekasgroup.com
                                <ChevronRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
