import Link from "next/link";
import { Shield, FileText, Zap, Network, ArrowRightCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fractional Sales Recruiting | The Kas Group",
    description: "Hire Top-Tier Enterprise AEs & Sales Managers for 60% Less Than an Agency. Flat-rate pricing, zero onboarding friction.",
};

const roles = [
    "Senior Enterprise Account Executives",
    "Senior Regional Account Executives",
    "Sales Managers / Team Leads",
    "SDR/BDR Managers",
    "Technical Sales Engineers",
    "Customer Success Managers (Mid-Level)",
    "Channel Partners / Alliance Managers",
];

const valueProps = [
    {
        name: "Methodology-First Vetting",
        description: "We filter for grit and skill, not just titles. Our process goes deep into candidate psychology and track record.",
        icon: Shield,
    },
    {
        name: "Process Design",
        description: "We don't just pass resumes. We create your interview rubrics, scorecards, and standardized evaluation criteria.",
        icon: FileText,
    },
    {
        name: "Speed & Execution",
        description: "We cut through internal friction to close roles 2x faster, allowing your leadership to focus on strategy, not sourcing.",
        icon: Zap,
    },
    {
        name: "Deep Integration",
        description: "We become an extension of your HR and Sales Ops teams, seamlessly blending into your workflow.",
        icon: Network,
    },
];

export default function FractionalSalesRecruiting() {
    return (
        <div className="bg-white">
            {/* A. Hero Section */}
            <div className="relative bg-navy-900 py-24 sm:py-32 lg:pb-40">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-accent opacity-20 blur-[100px]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center pt-10">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-4xl mx-auto leading-tight">
                        Hire Top-Tier Enterprise AEs & Sales Managers for <span className="text-blue-accent">60% Less Than an Agency.</span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-grey-200 font-medium max-w-2xl mx-auto">
                        Deep integration, no onboarding friction, and flat-rate pricing.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="mailto:chris@thekasgroup.com"
                            className="rounded-md bg-blue-accent px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-all hover:scale-105 duration-200"
                        >
                            Book a Discovery Call
                        </Link>
                    </div>
                </div>
            </div>

            {/* Trusted By Banner */}
            <div className="bg-white py-10 border-b border-grey-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-grey-500 uppercase tracking-widest mb-6">Trusted by Industry Leaders</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale">
                        {/* Placeholder typographic logos */}
                        <div className="flex items-center justify-center h-8 text-xl font-bold font-sans text-grey-900">ACME Corp</div>
                        <div className="flex items-center justify-center h-8 text-xl font-extrabold tracking-tighter text-grey-900">Globex</div>
                        <div className="flex items-center justify-center h-8 text-xl font-mono text-grey-900">TechFlow</div>
                        <div className="flex items-center justify-center h-8 text-xl italic font-serif text-grey-900">Vanguard</div>
                        <div className="flex items-center justify-center h-8 text-xl font-black uppercase text-grey-900">Synergy</div>
                    </div>
                </div>
            </div>

            {/* B. The Problem Section ("The Agency Tax") */}
            <div className="py-24 sm:py-32 bg-grey-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Stop Paying <span className="text-blue-accent">Agency Taxes</span> on Critical GTM Roles.</h2>
                    </div>

                    <div className="mx-auto max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Traditional Agency Card */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 border border-grey-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-navy-900 mb-8 pb-4 border-b border-grey-100">Traditional Agency</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-semibold text-grey-500 uppercase tracking-wider mb-1">Fees</p>
                                    <p className="text-lg font-medium text-navy-900">20–30% of base salary ($25k–$35k+ per hire)</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-grey-500 uppercase tracking-wider mb-1">Incentives</p>
                                    <p className="text-lg font-medium text-navy-900">Motivated by higher candidate salaries</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-grey-500 uppercase tracking-wider mb-1">Integration</p>
                                    <p className="text-lg font-medium text-navy-900">External, transactional, and disconnected</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-grey-500 uppercase tracking-wider mb-1">Speed</p>
                                    <p className="text-lg font-medium text-navy-900">Standard candidate pool routing</p>
                                </div>
                            </div>
                        </div>

                        {/* The Kas Group Card */}
                        <div className="bg-navy-900 rounded-2xl p-8 md:p-10 border border-navy-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-accent opacity-10 rounded-full blur-[40px] -mr-10 -mt-10" />
                            <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-navy-700">The Kas Group</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-semibold text-blue-accent uppercase tracking-wider mb-1">Fees</p>
                                    <p className="text-lg font-medium text-white">Flat Rate / Hourly <span className="text-green-400 font-bold ml-2">(40–60% Savings)</span></p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-blue-accent uppercase tracking-wider mb-1">Incentives</p>
                                    <p className="text-lg font-medium text-white">Purely focused on Quality of Hire</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-blue-accent uppercase tracking-wider mb-1">Integration</p>
                                    <p className="text-lg font-medium text-white">Deep Integration / Zero Onboarding</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-blue-accent uppercase tracking-wider mb-1">Speed</p>
                                    <p className="text-lg font-medium text-white text-blue-50">2x Faster Time-to-Hire</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-blue-50 border border-blue-accent/20 rounded-xl p-8 text-center max-w-4xl mx-auto shadow-sm">
                        <p className="text-xl md:text-2xl font-medium text-navy-900 italic">
                            &quot;Traditional agencies fill a seat. We professionalize your hiring machine.&quot;
                        </p>
                    </div>
                </div>
            </div>

            {/* C. The Solution Section */}
            <div className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-blue-accent uppercase tracking-wide">The Solution</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                            Your External Sales Sourcing & Vetting Team.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-grey-600">
                            Experience the <strong>Zero Onboarding</strong> advantage. We don&apos;t just throw resumes over the fence. We embed into your workflow, build the exact interview scorecards you need, and handle the heavy lifting so your leadership can focus on strategy and closing revenue.
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl lg:max-w-none mt-16">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-4">
                            {valueProps.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-navy-900">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-navy-50 border border-navy-100">
                                            <feature.icon className="h-5 w-5 text-blue-accent" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-grey-600 font-medium">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* D. Specializations Section */}
            <div className="py-20 bg-navy-900 border-y border-navy-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">Fractional Roles We Place</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {roles.map((role) => (
                            <div key={role} className="bg-navy-950 border border-navy-700/50 rounded-xl p-6 text-center shadow-lg hover:border-blue-accent/50 transition-colors">
                                <p className="text-md font-semibold text-grey-100 leading-snug">{role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* E. Results / Trust Section */}
            <div className="py-24 sm:py-32 bg-grey-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Results That Matter.</h2>
                    </div>

                    <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-grey-100 relative">
                            <div className="text-5xl font-extrabold text-blue-accent mb-4">12 Days</div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Average Time-to-Fill</h3>
                            <p className="text-grey-600">Cut standard hiring timelines in half while maintaining uncompromising talent standards.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-grey-100 relative">
                            <div className="text-5xl font-extrabold text-blue-accent mb-4">$500k+</div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Pipeline Generated in 60 Days</h3>
                            <p className="text-grey-600">Our placements don&apos;t just ramp; they deliver measurable ROI within the first quarter.</p>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <p className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                            How It Works
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-grey-200 -z-10"></div>
                        
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-white border border-grey-200 shadow-sm flex items-center justify-center text-2xl font-bold text-navy-900 mb-6 relative">
                                1
                                <div className="absolute inset-0 border-4 border-white rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Define Needs</h3>
                            <p className="text-grey-600">We map out your ICP, timeline, and exact requirements.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-blue-accent text-white shadow-lg flex items-center justify-center text-2xl font-bold mb-6 relative">
                                2
                                <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">We Source & Vet</h3>
                            <p className="text-grey-600">We run our internal methodology, scoring candidates precisely.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-navy-900 text-white shadow-lg flex items-center justify-center text-2xl font-bold mb-6 relative">
                                3
                                <div className="absolute inset-0 border-4 border-navy-800 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">You Hire (Fast)</h3>
                            <p className="text-grey-600">You interview only the top 1% and make your selection with confidence.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* F. CTA Section */}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center text-navy-900">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-6">
                        Ready to Clear Your GTM Backlog?
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-grey-600 mb-10 leading-relaxed font-medium">
                        Let&apos;s discuss your current &quot;tough to fill&quot; roles and find a model that fits your budget.
                    </p>
                    <Link
                        href="mailto:chris@thekasgroup.com"
                        className="rounded-md bg-blue-accent px-10 py-5 text-lg font-bold text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-105 duration-200 inline-flex items-center gap-2"
                    >
                        Schedule Your Strategy Call <ArrowRightCircle className="w-5 h-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
