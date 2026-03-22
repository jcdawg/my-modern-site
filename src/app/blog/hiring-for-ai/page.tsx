import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hiring for AI: Beyond the Buzzwords | The Kas Group",
    description: "How to distinguish between true ML expertise and resume padding. Key interview questions for Data Scientists.",
};

export default function HiringForAI() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-blue-accent transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>
                </div>
                <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-navy-700 mb-4">AI Recruiting</span>
                <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl leading-tight mb-6">Hiring for AI: Beyond the Buzzwords</h1>
                <p className="text-grey-500 text-sm mb-10">Nov 05, 2023 &middot; Kas Group Team</p>
                <div className="border-t border-grey-200 mb-10" />
                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">
                    <p>The pipeline of candidates with &quot;machine learning&quot; or &quot;AI&quot; somewhere on their resume has grown enormously over the past two years. That&apos;s not surprising. The demand is high, the salaries are strong, and a lot of people have picked up a few skills and updated their profiles accordingly. The problem is that for hiring managers, this noise makes it genuinely harder to find the people who can actually do the work.</p>
                    <p>We&apos;ve seen this play out in searches across industries. A candidate looks great on paper. Strong background, credible employers, all the right keywords. But when a real technical expert sits down and asks them to walk through how they&apos;d approach a problem, the gaps start showing up pretty quickly.</p>
                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What Good AI Technical Screening Actually Looks Like</h2>
                    <p>The most reliable signal in our experience is not certifications or even job titles. It&apos;s how a candidate talks about their work. Can they explain the tradeoff they made in model selection on a real project? Can they describe a situation where their model performed poorly in production and what they did about it? Those conversations reveal a lot.</p>
                    <p>That&apos;s why we built our AI candidate vetting process around an actual technical interview conducted by someone who has done this work, not just evaluated it. Our partner Derek holds a PhD in Statistics and spent five years as a Global Lead Data Scientist at Microsoft. When he talks to a candidate, he can tell pretty quickly whether the expertise is real.</p>
                    <p>For teams trying to do this on their own, the best advice we can give is to put candidates in a situation where they have to reason out loud. Not whiteboard coding under pressure, but a real conversation about a real problem. Ask them what they would do, why they would do it, and what could go wrong. The answers will tell you more than the resume ever will.</p>
                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Need help evaluating AI candidates?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Our Ph.D.-led technical vetting process gives you confidence that the people you&apos;re hiring can actually do the job.</p>
                        <Link href="mailto:chris@thekasgroup.com" className="inline-block rounded-md bg-blue-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors">Schedule a consultation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
