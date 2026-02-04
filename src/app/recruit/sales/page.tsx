import Link from "next/link";
import { Check } from "lucide-react";

export default function SalesRecruiting() {
    const roles = [
        "Chief Revenue Officer (CRO)",
        "VP of Sales",
        "Enterprise Account Executives",
        "Sales Engineering Leaders",
        "SDR/BDR Managers",
        "Customer Success VPs",
    ];

    return (
        <div className="bg-white">
            <div className="relative bg-navy-900 py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/20 to-navy-950/90 mix-blend-multiply" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sales Recruiting</h1>
                    <p className="mt-6 text-lg leading-8 text-grey-200 border-l-2 border-blue-accent pl-4 inline-block mx-auto max-w-2xl">
                        A Decades-Long Legacy of Building High-Performing Sales Organizations.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">The Revenue Builders</h2>
                        <p className="mt-4 text-grey-600 leading-relaxed">
                            With over 10 years of specialized experience in sales recruiting, we understand exactly what it takes to build a thriving sales organization. We speak the language of sales—from GTM strategy to quota attainment—and know how to identify the drive, skills, and experience necessary to exceed revenue goals.
                        </p>
                        <p className="mt-4 text-grey-600 leading-relaxed italic">
                            Whether you need to build a new sales team from the ground up or add a single high-impact producer, we have the industry expertise to help you succeed.
                        </p>

                        <div className="mt-10">
                            <Link
                                href="mailto:contact@thekasgroup.com"
                                className="rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 transition-colors"
                            >
                                Start Building Your Team
                            </Link>
                        </div>
                    </div>

                    <div className="bg-grey-50 rounded-2xl p-8 border border-grey-100 shadow-sm">
                        <h3 className="text-xl font-semibold text-navy-900 mb-6 underline decoration-blue-accent decoration-2 underline-offset-8">Roles We Place</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {roles.map((role) => (
                                <li key={role} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-accent/10">
                                        <Check className="h-4 w-4 text-blue-accent" />
                                    </div>
                                    <span className="text-sm font-medium text-navy-700">{role}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Approach Section */}
            <section className="py-24 bg-white border-t border-grey-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Our Approach to Sales Recruiting</h2>
                        <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
                            Built on a foundation of deep industry knowledge and a proven ability to connect with top-tier sales professionals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Understanding Your Needs</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                We take the time to deeply understand your sales model, company culture, and specific role requirements to find candidates who are built for your environment.
                            </p>
                        </div>
                        {/* Pillar 2 */}
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Targeted Sourcing</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                We go far beyond job boards. We leverage our network to find high-performing passive candidates who aren&apos;t actively looking but are open to the right strategic move.
                            </p>
                        </div>
                        {/* Pillar 3 */}
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Experienced Vetting</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                We use our own extensive sales background to conduct thorough interviews, evaluating actual performance, motivation, and the psychological drive needed to close deals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
