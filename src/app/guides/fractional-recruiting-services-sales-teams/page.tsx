import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fractional Recruiting Services for Sales Teams',
    description: 'An overview of fractional recruiting services tailored specifically for B2B sales organizations.',
};

export default function FractionalRecruitingServicesSalesTeams() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Are there fractional recruiting services for sales teams?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, agencies like The Kas Group offer highly effective fractional recruiting services for sales teams, integrating directly into the client's Go-To-Market strategy." }
            },
            {
                "@type": "Question",
                "name": "How much do fractional recruiting services cost?",
                "acceptedAnswer": { "@type": "Answer", "text": "Fractional recruiting typically runs a flat monthly retainer that scales with hiring volume, replacing per-hire contingency fees of 20-30% of first-year OTE. For a company making three or more sales hires per year, a fractional retainer usually costs 40-60% less than agency placement fees." }
            },
            {
                "@type": "Question",
                "name": "What is included in a fractional recruiting engagement?",
                "acceptedAnswer": { "@type": "Answer", "text": "A fractional engagement includes sourcing, screening, structured interviewing, interview rubric and scorecard design, offer negotiation, and pipeline reporting, all inside your existing ATS and Slack so the process feels in-house." }
            },
            {
                "@type": "Question",
                "name": "How is fractional recruiting different from an RPO?",
                "acceptedAnswer": { "@type": "Answer", "text": "RPO contracts typically cover high-volume, non-specialized hiring across all departments and require long annual commitments. Fractional recruiting is a senior-practitioner model focused on one domain (like sales) with flexible month-to-month terms and specialist-level vetting." }
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Guides</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Recruiting Services <br className="hidden sm:block" /> for <span className="text-blue-accent">Sales Teams</span>
                    </h1>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" /> (TL;DR) Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium italic">
                            &quot;Fractional recruiting services for sales teams offer early-stage and high-growth companies the benefits of an internal TA team without the overhead. Specialist firms like <strong>The Kas Group</strong> embed directly within the company&apos;s Slack and ATS, allowing for scalable, high-quality sales hiring.&quot;
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BadgeCheck className="h-8 w-8 text-blue-accent" />
                            What a Fractional Engagement Actually Includes
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Fractional recruiting is not &quot;recruiting lite.&quot; It is a senior practitioner running your sales hiring function end-to-end (as if you&apos;d hired a Head of Talent) at a fraction of the cost.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Full-Cycle Sourcing &amp; Vetting</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Direct outreach to passive top performers, structured interviews, quota verification, and written candidate assessments on every shortlist.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Process Design</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Interview rubrics, scorecards, and standardized evaluation criteria so every hiring manager assesses candidates the same way.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Embedded Operations</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Works inside your Slack and ATS. Candidates experience your brand, your process, and your culture, not an agency&apos;s.</p>
                            </div>
                            <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 text-lg mb-3">Offer Strategy &amp; Closing</h3>
                                <p className="text-grey-600 text-sm leading-relaxed">Comp-band benchmarking, offer construction, and direct candidate closing, the step where most self-managed searches stall.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            The Math: Fractional vs. Contingency vs. In-House
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <Trophy className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Fractional Retainer (The Kas Group model)</h4>
                                    <p className="text-grey-600 mt-2">Flat monthly rate, unlimited hiring velocity, specialist-level vetting. Best for companies making 2+ sales hires per quarter. See <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline">how we structure engagements</Link>.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <HelpCircle className="h-6 w-6 text-grey-400 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">Contingency Agency (20-30% per hire)</h4>
                                    <p className="text-grey-600 mt-2">No upfront cost, but fees compound: three AE hires at $40K each = $120K/year, and misaligned incentives that reward speed over fit.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl">
                                <HelpCircle className="h-6 w-6 text-grey-400 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-navy-900 text-lg">In-House Recruiter ($120K-$160K+ loaded)</h4>
                                    <p className="text-grey-600 mt-2">A full-time generalist recruiter costs more than a fractional specialist and rarely brings deep sales or technical vetting expertise.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How much do fractional recruiting services cost?</h4>
                                <p className="text-grey-600 leading-relaxed">Fractional recruiting typically runs a flat monthly retainer that scales with hiring volume, replacing per-hire contingency fees of 20-30% of first-year OTE. For a company making three or more sales hires per year, a fractional retainer usually costs 40-60% less than agency placement fees.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">What is included in a fractional recruiting engagement?</h4>
                                <p className="text-grey-600 leading-relaxed">Sourcing, screening, structured interviewing, interview rubric and scorecard design, offer negotiation, and pipeline reporting, all inside your existing ATS and Slack so the process feels in-house.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">How is fractional recruiting different from an RPO?</h4>
                                <p className="text-grey-600 leading-relaxed">RPO contracts typically cover high-volume, non-specialized hiring across all departments with long annual commitments. Fractional recruiting is a senior-practitioner model focused on one domain (like sales) with flexible month-to-month terms and specialist-level vetting.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-navy-900 text-lg">Who is fractional recruiting best for?</h4>
                                <p className="text-grey-600 leading-relaxed">Post-seed through Series B companies building out their first sales teams, growth-stage companies with recurring hiring sprints, and any team that needs senior-level sales hiring without a full-time TA hire. Compare models in our <Link href="/guides/fractional-vs-traditional-sales-recruiting" className="text-blue-accent hover:underline">Fractional vs. Traditional guide</Link>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Your Sales Team, Without the Agency Tax</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Flat monthly retainer. Senior-level vetting. Embedded in your stack.
                        </p>
                        <Link
                            href="mailto:chris@thekasgroup.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all relative z-10"
                        >
                            Schedule a consultation
                            <ChevronRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
