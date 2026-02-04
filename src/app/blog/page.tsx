import Link from "next/link";
import { Calendar, User } from "lucide-react";

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "The Rise of the &apos;Full-Stack&apos; Sales Leader",
            excerpt: "Why modern sales VPs need to understand data, revenue operations, and product strategy to survive in 2024.",
            date: "Oct 12, 2023",
            author: "Kas Group Team",
            category: "Sales Leadership",
            slug: "full-stack-sales-leader",
        },
        {
            id: 2,
            title: "Hiring for AI: Beyond the Buzzwords",
            excerpt: "How to distinguish between true ML expertise and resume padding. Key interview questions for Data Scientists.",
            date: "Nov 05, 2023",
            author: "Kas Group Team",
            category: "AI Recruiting",
            slug: "hiring-for-ai",
        },
        {
            id: 3,
            title: "Zero Onboarding: The New Standard",
            excerpt: "In a downturn, companies can&apos;t afford a 6-month ramp up. How to find talent that delivers ROI in week one.",
            date: "Dec 01, 2023",
            author: "Kas Group Team",
            category: "Market Trends",
            slug: "zero-onboarding",
        },
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Insights & Trends</h2>
                    <p className="mt-2 text-lg leading-8 text-grey-600">
                        Expert analysis on the state of Talent, Sales, and Artificial Intelligence.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between bg-white p-6 rounded-2xl border border-grey-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.date} className="text-grey-500">
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                </time>
                                <span className="relative z-10 rounded-full bg-grey-50 px-3 py-1.5 font-medium text-grey-600 hover:bg-grey-100">
                                    {post.category}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-navy-900 group-hover:text-blue-accent transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-grey-600">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4 border-t border-grey-100 w-full pt-4">
                                <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center">
                                    <User className="h-5 w-5 text-navy-700" />
                                </div>
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-navy-900">
                                        <span className="absolute inset-0" />
                                        {post.author}
                                    </p>
                                    <p className="text-grey-500">Editor</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
