import Link from "next/link";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fractional Sales Recruiting | The Kas Group",
    description: "Accelerate your pipeline with elite fractional sale recruiting services. We specialize in fractional cybersecurity sales recruiting and fractional SaaS sales recruiting.",
};

export default function FractionalSalesRecruiting() {
    const roles = [
        "Fractional Chief Revenue Officer (CRO)",
        "Fractional VP of Sales",
        "Interim Sales Leaders",
        "Part-Time Account Executives",
        "Fractional Sales Engineers",
        "Startup Sales Advisors",
    ];

    return (
        <div className="bg-white">
            <div className="relative bg-navy-900 py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/20 to-navy-950/90 mix-blend-multiply" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Fractional Sales Recruiting</h1>
                    <p className="mt-6 text-lg leading-8 text-grey-200 border-l-2 border-blue-accent pl-4 inline-block mx-auto max-w-2xl">
                        High-impact sales leadership and execution, scaled perfectly to your early-stage or growth-stage company&apos;s needs.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Why Fractional Sale Recruiting?</h2>
                        <p className="mt-4 text-grey-600 leading-relaxed">
                            Startups and scaling businesses often face a critical dilemma: they need elite sales strategy and execution, but aren&apos;t yet ready to shoulder the financial burden of a full-time, $250k+ executive or a large internal team. That&apos;s where we step in.
                        </p>
                        <p className="mt-4 text-grey-600 leading-relaxed italic">
                            Through our specialized fractional sale recruiting services, we place seasoned sales leaders and individual contributors who can guide your go-to-market strategy, build playbooks, and close pivotal deals on a part-time or interim basis.
                        </p>

                        <div className="mt-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 transition-colors"
                            >
                                Schedule a consultation
                            </Link>
                        </div>
                    </div>

                    <div className="bg-grey-50 rounded-2xl p-8 border border-grey-100 shadow-sm">
                        <h3 className="text-xl font-semibold text-navy-900 mb-6 underline decoration-blue-accent decoration-2 underline-offset-8">Fractional Roles We Place</h3>
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

            {/* Specialized Sectors Section */}
            <section className="py-24 bg-navy-900 text-white border-y border-navy-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-accent font-bold uppercase tracking-wider text-sm mb-4">Our Specialties</h2>
                        <p className="text-3xl md:text-4xl font-bold">Deep Industry Expertise</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-navy-950 border border-navy-800">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                Fractional SaaS Sales Recruiting
                            </h3>
                            <p className="text-grey-300 leading-relaxed">
                                SaaS go-to-market motions require leaders who understand recurring revenue models, churn management, and PLG (Product-Led Growth) transitions. We place fractional SaaS sales experts who build foundational sales engines that scale.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-navy-950 border border-navy-800">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                Fractional Cybersecurity Sales Recruiting
                            </h3>
                            <p className="text-grey-300 leading-relaxed">
                                Selling security products involves complex buying committees, long technical cycles, and a deep understanding of compliance and risk. Our fractional cybersecurity sales recruiting practice connects you with leaders who speak the language of CISOs seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-white border-t border-grey-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">The Impact of Fractional Leadership</h2>
                        <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
                            Bring enterprise-level oversight to your startup without the enterprise price tag.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Strategic Execution</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                Our fractional leaders step in on day one to refine compensation plans, establish CRM hygiene, map out sales territories, and craft repeatable closing methodologies.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Cost Efficiency</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                Preserve your runway. Gain the strategic insight of a VP or CRO for 10-20 hours a week, saving hundreds of thousands in base salary, benefits, and equity bleed.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Ready-Made Networks</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                The fractional talent we place already possesses deep networks within your target market, bringing warm introductions and immediate pipeline generation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
