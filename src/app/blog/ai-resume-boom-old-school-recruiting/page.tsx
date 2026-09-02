import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, User, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Resumes Broke Recruiting: Why Employers Are Going Back to Old-School Sales Sourcing",
    description: "AI-generated resumes and auto-apply bots have driven job application volume up 45%+ — and made keyword-stuffed resumes worthless as a hiring signal. How B2B employers hire outside sales reps with direct sourcing, verified quota attainment, and deal teardowns instead of resume screening.",
};

export default function AiResumeBoomPost() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much has AI increased job application volume?",
                "acceptedAnswer": { "@type": "Answer", "text": "Major job platforms report application volume up 45% or more since AI resume tools went mainstream, with some employers seeing three to five times their pre-ChatGPT volume. AI-generated resumes, one-click apply, and auto-apply bot subscriptions all push the number higher." }
            },
            {
                "@type": "Question",
                "name": "Can AI resume screening tools still find good candidates?",
                "acceptedAnswer": { "@type": "Answer", "text": "They can triage obvious mismatches, but they cannot verify performance. When candidates use AI to beat the same algorithms screening them, everyone converges on keyword matching instead of ability. Structured interviews, reference-checked quota attainment, and deal teardowns remain the only reliable signals." }
            },
            {
                "@type": "Question",
                "name": "How do you hire outside sales reps when resumes are unreliable?",
                "acceptedAnswer": { "@type": "Answer", "text": "Direct sourcing of passive candidates instead of sorting inbound applications, verified quota attainment checked against W-2s or president's club records, deal teardowns with the managers who watched the deals close, and openness to non-traditional backgrounds — teachers, athletes, military, restaurant managers — where grit predicts field sales success better than any job title." }
            }
        ]
    };

    return (
        <div className="bg-white py-16 sm:py-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="mx-auto max-w-3xl px-6 lg:px-8">

                {/* Back link */}
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-blue-accent transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Insights
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-10">
                    <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-navy-700 mb-4">Recruiting Strategy</span>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl leading-tight mb-6">
                        400 Applications and Not One of Them Means Anything
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> September 2, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, The Kas Group</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-grey-200 mb-10" />

                {/* Body */}
                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">

                    <p>
                        You post a mid-level B2B sales job on Monday. Wednesday morning you have four hundred applications sitting there. Every resume is polished. Every one of them crushed quota. Every one of them is &quot;proficient in MEDDPICC, Challenger, and consultative selling.&quot;
                    </p>

                    <p>
                        None of them tell you a thing.
                    </p>

                    <p>
                        That is inbound now. AI made a custom resume free — AI-generated resumes tailored to every posting, written in seconds. One-click apply made sending it free too. Some people are paying a monthly bot to blanket the whole market for them. Application volume on the big boards is up 45% or more, and some companies are seeing three to five times what they got before ChatGPT showed up.
                    </p>

                    <p>
                        More great salespeople did not suddenly hit the market. Applying got too easy.
                    </p>

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>TL;DR:</strong> AI-generated resumes and auto-apply bots have driven application volume up 45%+ and broken the resume as a hiring signal. The employers still winning at outside sales hiring went back to old-school recruiting: direct sourcing of passive candidates, verified quota attainment checked against W-2s, and deal teardowns — not keyword filters.
                    </blockquote>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">The Fire Hose Problem: Application Volume Is Up 45% and Climbing</h2>

                    <p>
                        Recruiters already give a resume about seven seconds. At 400 of them, even that math falls apart. So you bolt on keyword filters and an AI resume screener. Then candidates — and the bots — stuff those keywords. Now everybody is writing for the machine, and the pile just gets taller.
                    </p>

                    <p>
                        The people you actually want already have a job. They are hitting their number. They look at that wall and they do not apply. Your inbound is filling up with people who are good at applying.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">The Resume Is Toast: Why Keyword-Stuffed Resumes Prove Nothing</h2>

                    <p>
                        AI is writing the resume and AI is screening the resume, so both sides are playing the same game. Mirror the job description. Sprinkle in the magic words. Drop in a metric nobody can check from a PDF.
                    </p>

                    <p>
                        In 2026, a &quot;quota-crushing AE&quot; resume looks like a photocopier. 120% plus. Built pipeline from zero. MEDDPICC, Challenger, consultative selling. When everybody is above average, above average is a joke.
                    </p>

                    <p>
                        Sales hiring was already a weak use of a resume. Quota, deal size, territory growth. Easy to puff. Almost impossible to prove on paper. A keyword-matched resume now tells you one thing: this person knows how to use ChatGPT. It does not tell you if they can run a discovery call. Or hold the line on price. Or live in a nine-month enterprise cycle without disappearing.
                    </p>

                    <p>
                        More AI screening will not save you. That is just pouring gas on it. Stop treating the application pile as your talent pool.
                    </p>

                    <p>
                        Go get the people who are not applying.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">If You Need an Outside Rep: Sourcing Sales Talent That Is Not Applying</h2>

                    <p>
                        This bites hardest in outside sales. Territory reps. Enterprise AEs. People who carry a number and live in a market. Titles are a mess. Account Executive at one shop is knocking on doors for $40K deals. At the next one it is a closer running $500K cycles. The title is noise.
                    </p>

                    <p>
                        What still works is not fancy.
                    </p>

                    <p>
                        <strong>Direct sourcing.</strong> The best field reps are employed and quietly winning. You call. You email. You hit LinkedIn. You text. You map the companies with a similar motion and you work the names — that is what direct sourcing of passive candidates actually looks like. It is not glamorous. Bots cannot fake that on either side.
                    </p>

                    <p>
                        <strong>Ask for numbers that can survive a fight.</strong> Quota against a W-2 or president&apos;s club. Average deal size. Cycle length. Ramp. Then call the manager who watched the deals close. If the story falls apart in a deal teardown, they were never a candidate. Pretty resume or not.
                    </p>

                    <p>
                        <strong>Do not worship the pedigree.</strong> Some of the best outside sellers I have seen were teachers, college athletes, military, restaurant managers, door-to-door people. Keyword filters eat those resumes for lunch. What you are actually hiring for is grit, and being okay with hearing no. You get that from a real conversation and a track record. Not a PDF.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What to Do Monday</h2>

                    <p>
                        Inbound is a side channel now. It is not the strategy. Source the people who are not looking. Check the numbers with humans who were in the room. Interview like you mean it. And take a look at the backgrounds your filter would have thrown out.
                    </p>

                    <p>
                        It is more work than scrolling 400 clones. It is also the only version of this job that still finds people who can sell.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Frequently Asked Questions</h2>

                    <div className="space-y-6 pt-2">
                        <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                            <h3 className="font-bold text-navy-900 mb-2">How much has AI increased job application volume?</h3>
                            <p className="text-grey-600">Major job platforms report application volume up 45% or more since AI resume tools went mainstream, with some employers seeing three to five times their pre-ChatGPT volume. AI-generated resumes, one-click apply, and auto-apply bot subscriptions all push the number higher.</p>
                        </div>
                        <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                            <h3 className="font-bold text-navy-900 mb-2">Can AI resume screening tools still find good candidates?</h3>
                            <p className="text-grey-600">They can triage obvious mismatches, but they cannot verify performance. When candidates use AI to beat the same algorithms screening them, everyone converges on keyword matching instead of ability. Structured interviews, reference-checked quota attainment, and deal teardowns remain the only reliable signals.</p>
                        </div>
                        <div className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                            <h3 className="font-bold text-navy-900 mb-2">How do you hire outside sales reps when resumes are unreliable?</h3>
                            <p className="text-grey-600">Direct sourcing of passive candidates instead of sorting inbound applications, verified quota attainment checked against W-2s or president&apos;s club records, deal teardowns with the managers who watched the deals close, and openness to non-traditional backgrounds — teachers, athletes, military, restaurant managers — where grit predicts field sales success better than any job title.</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Staring at a pile like that?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">That is the work we do. We go get them — and we check the quota before a resume ever hits your desk.</p>
                        <Link
                            href="mailto:chris@thekasgroup.com"
                            className="inline-block rounded-md bg-blue-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors"
                        >
                            Schedule a consultation
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
