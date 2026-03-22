import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zero Onboarding: The New Standard | The Kas Group",
    description: "In a downturn, companies can't afford a 6-month ramp up. How to find talent that delivers ROI in week one.",
};

export default function ZeroOnboarding() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-blue-accent transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>
                </div>
                <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-navy-700 mb-4">Market Trends</span>
                <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl leading-tight mb-6">Zero Onboarding: The New Standard</h1>
                <p className="text-grey-500 text-sm mb-10">Dec 01, 2023 &middot; Kas Group Team</p>
                <div className="border-t border-grey-200 mb-10" />
                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">
                    <p>There was a period not long ago where a 60 or 90 day ramp was just considered normal. You bring someone on, they shadow a few calls, build relationships, get comfortable with the tools, and eventually start contributing. Leadership was patient with it. Budget existed for it.</p>
                    <p>That period has mostly passed. Companies are under more pressure to show ROI on every hire, and the tolerance for long ramp times has shrunk considerably. When we talk to clients now, the expectation is increasingly that a new hire should be able to contribute in a meaningful way within the first few weeks, not months.</p>
                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What &quot;Zero Onboarding&quot; Actually Requires</h2>
                    <p>To hire someone who can perform quickly, you have to screen differently. A candidate who needs six months to get up to speed isn&apos;t necessarily less talented than someone who can hit the ground running. But they may have been in environments that were very different from yours, and the adjustment period reflects that gap more than their raw ability.</p>
                    <p>What tends to predict fast productivity is familiarity with your specific selling environment. Same deal size, same buyer type, same general market if possible. When someone has solved almost exactly your problem before at another company, they spend the first 30 days executing instead of learning.</p>
                    <p>The other piece is vetting. A big part of why hires underperform in the early months is that the skills they demonstrated in interviews don&apos;t show up consistently on the job. Better screening on the front end catches that mismatch before it becomes expensive. Whether that&apos;s a deeper technical interview, a work sample, or a structured conversation about real past performance, the goal is to reduce surprise after the offer is signed.</p>
                    <p>Zero onboarding as a standard is ambitious. But it&apos;s the right direction to aim for, and the companies that get closest to it are going to have a real advantage in how efficiently they can scale.</p>
                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Ready to hire people who perform from day one?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Our vetting process is built around finding candidates who can contribute fast, not just interview well.</p>
                        <Link href="mailto:chris@thekasgroup.com" className="inline-block rounded-md bg-blue-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors">Schedule a consultation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
