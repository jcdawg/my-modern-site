import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Rise of the Full-Stack Sales Leader | The Kas Group",
    description: "Why modern sales VPs need to understand data, revenue operations, and product strategy to survive today.",
};

export default function FullStackSalesLeader() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-blue-accent transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>
                </div>
                <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-navy-700 mb-4">Sales Leadership</span>
                <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl leading-tight mb-6">The Rise of the &apos;Full-Stack&apos; Sales Leader</h1>
                <p className="text-grey-500 text-sm mb-10">Oct 12, 2023 &middot; Kas Group Team</p>
                <div className="border-t border-grey-200 mb-10" />
                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">
                    <p>A few years ago, you could get away with a VP of Sales who was purely a relationship person. Someone who could walk into a room, build rapport fast, and close. Those skills still matter, but the job description has quietly gotten a lot bigger.</p>
                    <p>The modern sales leader is expected to be fluent in data. Not just reading a dashboard, but understanding what the numbers are actually telling you about pipeline health, conversion rates, and where deals are stalling. Revenue operations has become a core part of the job, and leaders who can&apos;t engage with it meaningfully are starting to get left behind.</p>
                    <p>Product strategy is another area that&apos;s crept into the VP of Sales role. The best sales leaders today are sitting in on product roadmap conversations, bringing back insights from the field, and helping the company understand what the market is actually asking for. They&apos;re not just executing a go-to-market plan handed down from above. They&apos;re helping shape it.</p>
                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What This Means for Hiring</h2>
                    <p>When we run a VP of Sales search, this shift has real implications for the kinds of candidates we&apos;re evaluating. A resume full of quota attainment is table stakes. What we&apos;re digging into now is whether someone has built reporting structures, whether they&apos;ve contributed to product feedback loops, and whether they understand what a healthy sales org actually looks like beyond just the revenue line.</p>
                    <p>The companies that get this right are hiring leaders who can grow with the business. The ones who get it wrong end up cycling through sales leadership every 18 months because the person they hired was built for a different stage or a different kind of organization.</p>
                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Building your sales leadership team?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">We specialize in finding sales leaders who can do more than just close. Let&apos;s talk about what you need.</p>
                        <Link href="mailto:chris@thekasgroup.com" className="inline-block rounded-md bg-blue-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors">Schedule a consultation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
