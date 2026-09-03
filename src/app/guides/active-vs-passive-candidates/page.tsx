import { BarChart3, ChevronRight, HelpCircle, Search, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Active vs. Passive Candidates: What\'s the Real Difference and Who Should You Hire?',
    description: 'Active and passive candidates are not the same pool. Here\'s what separates them, which one produces better hires, and how to reach people who aren\'t looking.',
};

export default function ActiveVsPassiveCandidatesGuide() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a passive candidate?",
                "acceptedAnswer": { "@type": "Answer", "text": "Someone who is employed, not job hunting, and would only move for a clearly better opportunity. LinkedIn research estimates roughly 70% of the workforce is passive." }
            },
            {
                "@type": "Question",
                "name": "Are passive candidates better than active candidates?",
                "acceptedAnswer": { "@type": "Answer", "text": "For senior, technical, and revenue-critical roles, usually yes: proven performers are almost always employed and rarely respond to postings. For entry-level and high-volume roles, active is the better pool." }
            },
            {
                "@type": "Question",
                "name": "How long does passive candidate recruiting take?",
                "acceptedAnswer": { "@type": "Answer", "text": "Typically 60 to 120 days from first contact to start date. Internal efforts often stall because the timeline outlasts the team's attention." }
            },
            {
                "@type": "Question",
                "name": "How do you attract passive candidates?",
                "acceptedAnswer": { "@type": "Answer", "text": "Lead with a warm introduction, describe the specific problem the role solves, be transparent about compensation early, and give the candidate time and repeated contact to decide." }
            }
        ]
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Active vs. Passive Candidates: What's the Real Difference and Who Should You Hire?",
        "description": "What separates active and passive candidates, which pool produces better hires, and how to reach people who aren't looking.",
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
                        <span className="text-grey-600">Active vs. Passive Candidates</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Active vs. Passive Candidates: <br className="hidden sm:block" /> <span className="text-blue-accent">What&apos;s the Real Difference?</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Which pool produces better hires for senior roles, and how to reach the people who aren&apos;t looking.
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
                            <p>An <strong>active candidate</strong> is looking for work now; a <strong>passive candidate</strong> is employed, not searching, and only moves for a clearly better offer. LinkedIn&apos;s talent research puts roughly <strong>70% of the workforce</strong> in the passive camp, and it runs higher in senior roles.</p>
                            <p>Passive candidates aren&apos;t automatically better, but for senior and revenue-critical roles the passive pool has a higher hit rate because top performers are almost always employed. You reach them through <strong>warm introductions and specific, personal outreach</strong>; job postings never touch them. A passive search runs <strong>60-120 days</strong> from first contact to start date; a retained firm with existing relationships compresses it.</p>
                        </div>
                    </div>

                    {/* Definition */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            What is a passive candidate?
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong>A passive candidate is someone who is employed, not searching for a job, and would only consider a move if the new role were meaningfully better than their current one.</strong> An active candidate is looking now and will apply to posted openings.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            The definition sounds simple. The consequences aren&apos;t. An active candidate has already decided &quot;I need a new job,&quot; so a posting reaches them. A passive candidate has made no such decision; you&apos;re not competing with other recruiters for their attention, you&apos;re competing with their current job, their team, and their inertia.
                        </p>
                    </div>

                    {/* Which makes a better hire */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Which makes a better hire?
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong>Neither pool wins by default.</strong> For senior engineers, AI and data specialists, and sales leadership, passive candidates produce better outcomes because proven performers rarely sit unemployed. For entry-level and high-volume roles, active is the faster, cheaper pool.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-grey-100 shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-navy-900 text-white">
                                    <tr>
                                        <th className="py-4 px-6 font-semibold">Factor</th>
                                        <th className="py-4 px-6 font-semibold">Active candidates</th>
                                        <th className="py-4 px-6 font-semibold">Passive candidates</th>
                                    </tr>
                                </thead>
                                <tbody className="text-grey-600">
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-bold text-navy-900">How they enter your funnel</td>
                                        <td className="py-4 px-6">Apply to postings</td>
                                        <td className="py-4 px-6">Reached directly</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-grey-50">
                                        <td className="py-4 px-6 font-bold text-navy-900">Availability</td>
                                        <td className="py-4 px-6">Immediate</td>
                                        <td className="py-4 px-6">60-120 day runway</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-bold text-navy-900">Competition for them</td>
                                        <td className="py-4 px-6">Other applicants</td>
                                        <td className="py-4 px-6">Other offers</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-grey-50">
                                        <td className="py-4 px-6 font-bold text-navy-900">Interview sharpness</td>
                                        <td className="py-4 px-6">Practiced, sometimes over-practiced</td>
                                        <td className="py-4 px-6">Rusty; real work shows through</td>
                                    </tr>
                                    <tr className="border-t border-grey-100">
                                        <td className="py-4 px-6 font-bold text-navy-900">Salary posture</td>
                                        <td className="py-4 px-6">Anchored to market listings</td>
                                        <td className="py-4 px-6">Anchored to current comp, plus a reason to move</td>
                                    </tr>
                                    <tr className="border-t border-grey-100 bg-blue-accent/5">
                                        <td className="py-4 px-6 font-bold text-blue-accent">Hit rate for senior roles</td>
                                        <td className="py-4 px-6">Lower; best candidates rarely in the pool</td>
                                        <td className="py-4 px-6 text-green-600 font-semibold">Higher; pool skews to proven performers</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            One caveat: plenty of good people are active for honest reasons, a layoff, a funding crunch, a boss who relocated. But interview fluency correlates with interview frequency; the people interviewing every month are rarely the ones competitors are fighting to keep. Roughly 46% of new hires fail within 18 months, and a bad technical hire runs $150k-$300k all-in, as we broke down in <Link href="/guides/cost-of-a-bad-hire" className="text-blue-accent hover:underline font-semibold">The Real Cost of a Bad Technical Hire</Link>. Vetting quality matters more than funnel volume. A smaller pool of people who have to be persuaded beats a pile of people who applied to forty jobs this week.
                        </p>
                    </div>

                    {/* Why top performers don't apply */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Search className="h-8 w-8 text-blue-accent" />
                            Why don&apos;t top performers apply to your postings?
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong>Because they don&apos;t need to.</strong> Senior engineers and proven sales leaders are employed, courted continuously, and skeptical of black-hole application systems, so no amount of posting reaches them; only direct, credible contact does.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            LinkedIn&apos;s talent research has put the passive share around 70% for years, and it gets heavier as you move up.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            We see the pattern from the inside. A senior data engineer we placed last year had over 200 unread LinkedIn messages, most of them identical pitch blasts. The message that landed named the specific pipeline problem, mentioned a mutual connection, and explained why him in particular. That&apos;s the bar. A job description never gets a chance to clear it.
                        </p>
                    </div>

                    {/* How to reach passive candidates */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            How do you reach passive candidates?
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong>Through warm introductions, outreach that names their actual work, an honest compensation range early, and patience;</strong> it&apos;s a conversation over weeks, not an application form.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "Warm introduction first.", desc: "A former colleague, an investor, or a board member will out-open any cold InMail. If nobody in your network reaches them, that's a signal about your market access." },
                                { title: "Name the problem you're hiring them to solve.", desc: "\"We need someone to rebuild our ingestion layer for 10x volume\" reads as work worth doing. \"Exciting opportunity at a growing startup\" reads as spam." },
                                { title: "Put the money on the table early.", desc: "Passive candidates are employed. If your range doesn't clear their current comp plus a real reason to move, the conversation ends politely and permanently." },
                                { title: "Respect the runway.", desc: "Nobody senior resigns on the first call. Expect 60-120 days from first contact to start date." },
                                { title: "Sell the gap they don't have today.", desc: "Bigger mandate, equity worth something, a team worth joining, a city they already wanted." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-grey-50 border border-grey-100">
                                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                                    <p className="text-grey-600 leading-relaxed"><strong className="text-navy-900">{item.title}</strong> {item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Notice what&apos;s missing: an applicant tracking system, a careers page refresh, a stronger employer brand. Those help with active candidates. Passive candidates never see them.
                        </p>
                    </div>

                    {/* Why in-house attempts fail */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Why do most in-house attempts at passive recruiting fail?
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong>In-house teams run passive outreach on active-recruiting mechanics:</strong> templated messages, volume metrics, and timelines built around notice periods instead of decision psychology.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            A passive candidate says no twice before saying maybe. In-house recruiters, measured on weekly pipeline output, move on after the second no, which is the right behavior for their metric and the wrong behavior for the outcome. The hiring manager gets pulled back into roadmap work, the thread goes cold, and six months later the role is still open. Passive recruiting is a patience business, and most teams can&apos;t spare the cycles to play it well. That&apos;s not a knock on your recruiters; it&apos;s an honest statement about what their job measures.
                        </p>
                    </div>

                    {/* When to bring in a firm */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            When should you bring in a firm to reach passive candidates?
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong>When the role is senior or revenue-critical, when you have no warm path into the passive pool, or when a 90-120 day internal search costs more in missed revenue than the fee.</strong>
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            That&apos;s the math companies run too late. An open VP of Sales seat costs missed quota every quarter it sits empty; an open staff engineer seat costs architecture decisions made by default. <Link href="/guides/best-data-engineering-recruiting-agencies" className="text-blue-accent hover:underline font-semibold">A firm that already knows the passive market</Link> keeps warm relationships with people who aren&apos;t looking and can put a specific opportunity in front of them this week.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            Vetting still decides the outcome. Every AI and data engineering candidate at The Kas Group, passive or active, passes a Ph.D.-led technical review before reaching your calendar, so you choose between verified options instead of resumes. <Link href="/methodology" className="text-blue-accent hover:underline font-semibold">See our methodology</Link>, or <Link href="mailto:chris@thekasgroup.com" className="text-blue-accent hover:underline font-semibold">schedule a consultation</Link> to talk through a role you&apos;ve been struggling to fill.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-12 pb-20">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Passive Candidate Recruiting FAQ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What is a passive candidate?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Someone who is employed, not job hunting, and would only move for a clearly better opportunity.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Are passive candidates better than active candidates?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    For senior, technical, and revenue-critical roles, usually yes: proven performers are almost always employed and rarely respond to postings. For entry-level and high-volume roles, active is the better pool.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How long does passive candidate recruiting take?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Typically 60 to 120 days from first contact to start date. Internal efforts often stall because the timeline outlasts the team&apos;s attention.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How do you attract passive candidates?</h4>
                                <p className="text-grey-600 leading-relaxed">
                                    Lead with a warm introduction, describe the specific problem the role solves, be transparent about compensation early, and give the candidate time and repeated contact to decide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Hire the Ones Who Aren&apos;t Looking</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Ph.D.-vetted AI and data engineering candidates, passive or active, before they ever reach your calendar.
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
