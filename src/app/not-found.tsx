import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404: Page Not Found | The Kas Group",
    description: "The page you're looking for doesn't exist. Find our sales and AI recruiting services, guides, and resources.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="flex-grow flex items-center justify-center px-6 py-32">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-blue-accent font-bold uppercase tracking-wider text-sm mb-4">404 — Not Found</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">
                        This page doesn&apos;t exist.
                    </h1>
                    <p className="text-lg text-grey-500 mb-12">
                        The path you requested couldn&apos;t be found. Here&apos;s where you can go next:
                    </p>

                    {/* Recovery links for agents and humans */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h2 className="font-bold text-navy-900 mb-3">🤖 For AI Agents</h2>
                            <ul className="space-y-2 text-sm text-grey-600">
                                <li>
                                    <Link href="/llms.txt" className="text-blue-accent hover:underline font-medium">
                                        /llms.txt
                                    </Link>{" "}
                                    — Agent instructions &amp; when-to-use
                                </li>
                                <li>
                                    <Link href="/llms-full.txt" className="text-blue-accent hover:underline font-medium">
                                        /llms-full.txt
                                    </Link>{" "}
                                    — Full documentation
                                </li>
                                <li>
                                    <Link href="/.well-known/agent-instructions" className="text-blue-accent hover:underline font-medium">
                                        /.well-known/agent-instructions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sitemap.xml" className="text-blue-accent hover:underline font-medium">
                                        /sitemap.xml
                                    </Link>{" "}
                                    — XML sitemap
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h2 className="font-bold text-navy-900 mb-3">📋 Key Pages</h2>
                            <ul className="space-y-2 text-sm text-grey-600">
                                <li>
                                    <Link href="/" className="text-blue-accent hover:underline font-medium">
                                        Home
                                    </Link>{" "}
                                    — thekasgroup.com
                                </li>
                                <li>
                                    <Link href="/brand-facts" className="text-blue-accent hover:underline font-medium">
                                        Brand Facts
                                    </Link>{" "}
                                    — Official company info
                                </li>
                                <li>
                                    <Link href="/guides" className="text-blue-accent hover:underline font-medium">
                                        Guides Hub
                                    </Link>{" "}
                                    — All hiring guides
                                </li>
                                <li>
                                    <Link href="/site-map" className="text-blue-accent hover:underline font-medium">
                                        HTML Sitemap
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h2 className="font-bold text-navy-900 mb-3">🎯 Services</h2>
                            <ul className="space-y-2 text-sm text-grey-600">
                                <li>
                                    <Link href="/recruit/sales" className="text-blue-accent hover:underline font-medium">
                                        Sales Recruiting
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline font-medium">
                                        Fractional Sales
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/recruit/ai" className="text-blue-accent hover:underline font-medium">
                                        AI &amp; Data Recruiting
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/methodology" className="text-blue-accent hover:underline font-medium">
                                        Methodology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl border border-grey-200 bg-grey-50">
                            <h2 className="font-bold text-navy-900 mb-3">📬 Contact</h2>
                            <ul className="space-y-2 text-sm text-grey-600">
                                <li>
                                    <Link href="mailto:chris@thekasgroup.com" className="text-blue-accent hover:underline font-medium">
                                        chris@thekasgroup.com
                                    </Link>
                                </li>
                                <li className="text-grey-500">Alpharetta, GA, USA</li>
                                <li>
                                    <Link href="/about" className="text-blue-accent hover:underline font-medium">
                                        About The Kas Group
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-base font-bold text-white hover:bg-blue-accent transition-all"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </div>
    );
}
