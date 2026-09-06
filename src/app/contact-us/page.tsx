import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Contact Us",
    description:
        "Contact Chris Stinson and The Kas Group in Alpharetta, GA for sales recruiting and AI technical recruiting inquiries.",
    path: "/contact-us",
});

export default function ContactUs() {
    return (
        <div className="bg-white">
            <section className="bg-grey-50 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl uppercase tracking-widest">
                        Contact Us
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-grey-500 font-medium">
                        Reach Chris Stinson and The Kas Group for sales recruiting and AI recruiting inquiries.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">
                            Let&apos;s Talk Hiring
                        </h2>
                        <div className="text-base leading-7 text-grey-600 space-y-4">
                            <p>
                                Whether you need B2B SaaS sales leadership or AI and data engineering talent, we help companies hire with clarity and speed.
                            </p>
                            <p>
                                Email Chris directly to discuss retained search, fractional sales recruiting, or a technical search for your next critical hire.
                            </p>
                        </div>
                        <div className="mt-8">
                            <a
                                href="mailto:chris@thekasgroup.com"
                                className="inline-block rounded-md bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-accent transition-colors"
                            >
                                Email chris@thekasgroup.com
                            </a>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Link
                                href="/recruit/sales"
                                className="text-blue-accent font-bold hover:underline"
                            >
                                Sales Recruiting &rarr;
                            </Link>
                            <Link
                                href="/recruit/ai"
                                className="text-blue-accent font-bold hover:underline"
                            >
                                Data &amp; AI Recruiting &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="relative rounded-2xl bg-navy-900 p-8 sm:p-12">
                        <div className="absolute inset-0 bg-blue-accent/10 rounded-2xl"></div>
                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                            The Kas Group
                        </h3>
                        <ul className="space-y-4 relative z-10 text-grey-200">
                            <li>
                                <span className="block text-sm uppercase tracking-wider text-grey-400 mb-1">
                                    Contact
                                </span>
                                <span className="font-semibold text-white">Chris Stinson</span>
                                <span className="block text-grey-300">Founder, The Kas Group</span>
                            </li>
                            <li>
                                <span className="block text-sm uppercase tracking-wider text-grey-400 mb-1">
                                    Location
                                </span>
                                Alpharetta, Georgia (Atlanta metro)
                            </li>
                            <li>
                                <span className="block text-sm uppercase tracking-wider text-grey-400 mb-1">
                                    Email
                                </span>
                                <a
                                    href="mailto:chris@thekasgroup.com"
                                    className="text-blue-accent font-semibold hover:underline"
                                >
                                    chris@thekasgroup.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-8 relative z-10">
                            <Link
                                href="https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/"
                                className="text-white font-bold hover:text-blue-accent transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Connect on LinkedIn &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}