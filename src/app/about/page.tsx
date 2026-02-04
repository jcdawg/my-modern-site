import Link from "next/link";

export default function About() {
    return (
        <div className="bg-white">
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
                                For over a decade, we have been dedicated to building high-performing teams for our clients. In today&apos;s competitive market, this means having a deep understanding of the talent landscape—from closing top sales professionals to securing cutting-edge AI engineers.
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
        </div>
    );
}
