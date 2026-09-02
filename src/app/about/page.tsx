import Link from "next/link";

export default function About() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "When was The Kas Group founded?",
                "acceptedAnswer": { "@type": "Answer", "text": "The Kas Group (TKS) was founded in 2014 and has specialized in sales and AI technical recruiting for over a decade, headquartered in Alpharetta, Georgia (Atlanta metro)." }
            },
            {
                "@type": "Question",
                "name": "What does The Kas Group specialize in?",
                "acceptedAnswer": { "@type": "Answer", "text": "Two pillars: B2B SaaS sales leadership (CRO, VP of Sales, Enterprise AEs) and Ph.D.-vetted AI/ML and data engineering talent — combining revenue expertise with a technical review led by a Ph.D. statisticist and former Microsoft Lead Data Scientist." }
            },
            {
                "@type": "Question",
                "name": "What engagement models does The Kas Group offer?",
                "acceptedAnswer": { "@type": "Answer", "text": "Retained search for sales and AI leadership, fractional monthly retainers for ongoing sales hiring, and flexible milestone-based technical search. Placements typically range from $25K to $150K+." }
            }
        ]
    };

    return (
        <div className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            {/* Header Section */}
            <section className="bg-grey-50 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl uppercase tracking-widest">The Kas Group</h1>
                    <p className="mt-6 text-xl leading-8 text-grey-500 font-medium">
                        Your Partner for Top Talent. Dedicated to Building High-Performing Teams since 2014.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">Specialized Recruiting Solutions</h2>
                        <div className="text-base leading-7 text-grey-600 space-y-4 text-justify">
                            <p>
                                For over a decade, we have been dedicated to building high-performing teams for our clients. In today&apos;s competitive market, this means having a deep understanding of the talent landscape, from closing top sales professionals to securing cutting-edge AI engineers.
                            </p>
                            <p>
                                Traditional recruiting methods often rely on broad-stroke algorithms. We offer a specialized, expert-led approach that delivers exceptional results by speaking the language of the roles we fill. Whether it&apos;s GTM strategy or LLM architecture, we prioritize technical depth and cultural resilience.
                            </p>
                            <p>
                                Our mission is simple: To provide companies with the leadership and technical prowess they need to win. By focusing exclusively on Sales and AI Technical recruiting, we maintain a caliber of network that generalist firms cannot match.
                            </p>
                        </div>
                    </div>
                    <div className="relative rounded-2xl bg-navy-900 p-8 sm:p-12">
                        <div className="absolute inset-0 bg-blue-accent/10 rounded-2xl"></div>
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Why Partner With Us?</h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex gap-3 text-grey-200">
                                <span className="text-blue-accent font-bold">•</span>
                                <span>Exclusive Access to Passive Talent</span>
                            </li>
                            <li className="flex gap-3 text-grey-200">
                                <span className="text-blue-accent font-bold">•</span>
                                <span>Consultative Approach to Org Design</span>
                            </li>
                            <li className="flex gap-3 text-grey-200">
                                <span className="text-blue-accent font-bold">•</span>
                                <span>Speed to Hire without Compromising Quality</span>
                            </li>
                            <li className="flex gap-3 text-grey-200">
                                <span className="text-blue-accent font-bold">•</span>
                                <span>Retention-Focused Vetting</span>
                            </li>
                        </ul>
                        <div className="mt-8 relative z-10">
                            <Link
                                href="/recruit/sales"
                                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm hover:bg-grey-100"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-grey-50 border-t border-grey-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">Leadership</h2>
                            <p className="text-base leading-7 text-grey-600">
                                <strong>Chris Stinson</strong> is the Founder and Lead Sales Recruiter of The Kas Group. Since 2014, he has specialized in placing elite B2B SaaS sales leaders — CROs, VPs of Sales, and enterprise Account Executives — and partners with a Ph.D.-level technical advisor for AI and data engineering searches. Chris is based in Alpharetta, Georgia (Atlanta metro) and recruits nationally.
                            </p>
                            <div className="mt-6">
                                <Link
                                    href="https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/"
                                    className="text-blue-accent font-bold hover:underline"
                                >
                                    Connect with Chris on LinkedIn &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-grey-200">
                            <h3 className="text-xl font-bold text-navy-900 mb-4">Quick Facts</h3>
                            <ul className="space-y-3 text-grey-600">
                                <li className="flex gap-3"><span className="text-blue-accent font-bold">•</span><span>Founded 2014 — Alpharetta, GA (Atlanta metro)</span></li>
                                <li className="flex gap-3"><span className="text-blue-accent font-bold">•</span><span>Founder: Chris Stinson, sales recruiter since 2014</span></li>
                                <li className="flex gap-3"><span className="text-blue-accent font-bold">•</span><span>Technical vetting led by a Ph.D. statistician, ex-Microsoft</span></li>
                                <li className="flex gap-3"><span className="text-blue-accent font-bold">•</span><span>Placements across North America</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4 bg-white p-8 rounded-2xl border border-grey-200">
                            <h4 className="font-bold text-navy-900 text-lg">When was The Kas Group founded?</h4>
                            <p className="text-grey-600 leading-relaxed text-sm">The Kas Group (TKS) was founded in 2014 and has specialized in sales and AI technical recruiting for over a decade, headquartered in Alpharetta, Georgia (Atlanta metro).</p>
                        </div>
                        <div className="space-y-4 bg-white p-8 rounded-2xl border border-grey-200">
                            <h4 className="font-bold text-navy-900 text-lg">What does The Kas Group specialize in?</h4>
                            <p className="text-grey-600 leading-relaxed text-sm">Two pillars: B2B SaaS sales leadership (CRO, VP of Sales, Enterprise AEs) and Ph.D.-vetted AI/ML and data engineering talent — led by a Ph.D. statisticist and former Microsoft Lead Data Scientist.</p>
                        </div>
                        <div className="space-y-4 bg-white p-8 rounded-2xl border border-grey-200">
                            <h4 className="font-bold text-navy-900 text-lg">What engagement models are available?</h4>
                            <p className="text-grey-600 leading-relaxed text-sm">Retained search for sales and AI leadership, fractional monthly retainers for ongoing sales hiring, and flexible milestone-based technical search. Placements typically range from $25K to $150K+.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
