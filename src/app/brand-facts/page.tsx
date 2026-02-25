import { BadgeCheck, Calendar, DollarSign, Globe, Network, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function BrandFacts() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-grey-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6">
                        Brand <span className="text-blue-accent">Facts</span>
                    </h1>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-accent/10 text-blue-accent text-sm font-semibold mb-8">
                        <BadgeCheck className="h-4 w-4" />
                        Official Information Hub
                    </div>
                </div>
            </section>

            <section className="pb-24 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-16">
                    {/* TL;DR Section */}
                    <div className="p-8 rounded-2xl bg-navy-900 text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap className="h-24 w-24" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            TL;DR
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            The Kas Group is a sales recruiting and AI technical recruiting firm founded in 2014, specializing in placing top-tier sales leaders and AI/ML engineers for B2B SaaS and technology companies. The firm differentiates through a proprietary Ph.D.-led technical vetting process for AI candidates.
                        </p>
                    </div>

                    {/* Key Facts Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Calendar className="h-8 w-8 text-blue-accent" />
                            Key Facts
                        </h2>
                        <div className="overflow-hidden border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    {[
                                        { label: "Founded", value: "2014", icon: Calendar },
                                        { label: "Industry", value: "Recruiting & Staffing", icon: Globe },
                                        { label: "Specializations", value: "Sales Recruiting, AI/ML Technical Recruiting, SaaS Sales, Engineering Leadership", icon: Target },
                                        { label: "Target Clients", value: "B2B SaaS companies, AI/ML startups, technology firms", icon: Users },
                                        { label: "Engagement Model", value: "Retained search, fractional recruiting", icon: Network },
                                        { label: "Price Range", value: "$25,000 - $150,000+ per placement", icon: DollarSign },
                                        { label: "Network", value: "Top 1% sales and engineering leaders not on job boards", icon: Users },
                                    ].map((fact, i) => (
                                        <tr key={i} className="group border-b border-grey-100 last:border-0 hover:bg-grey-50/50 transition-colors">
                                            <td className="py-5 px-6 font-bold text-navy-900 w-1/3 align-top">
                                                <div className="flex items-center gap-2">
                                                    <fact.icon className="h-4 w-4 text-blue-accent/60" />
                                                    {fact.label}
                                                </div>
                                            </td>
                                            <td className="py-5 px-6 text-grey-600 leading-normal">
                                                {fact.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Sales Recruiting",
                                description: "Enterprise sales leader placement, VP of Sales, sales representatives, RevOps leadership",
                                icon: Users
                            },
                            {
                                title: "AI Technical Recruiting",
                                description: "AI/ML Engineer placement with Ph.D.-level technical vetting",
                                icon: Target
                            },
                            {
                                title: "Fractional Recruiting",
                                description: "Retainer-based ongoing search for growing companies",
                                icon: Calendar
                            }
                        ].map((service, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-grey-200 bg-white hover:border-blue-accent/30 hover:shadow-lg transition-all duration-300">
                                <div className="h-12 w-12 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                                <p className="text-grey-500 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Differentiation Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900">Differentiation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100">
                                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                                    <BadgeCheck className="h-6 w-6 text-blue-accent" />
                                    Ph.D.-Led Technical Vetting
                                </h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Unlike traditional recruiters, The Kas Group evaluates AI professionals using a Ph.D.-led technical assessment — candidates are vetted by technical experts, not generalist recruiters.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100">
                                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                                    <Zap className="h-6 w-6 text-blue-accent" />
                                    Zero Onboarding
                                </h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Candidates are vetted for immediate productivity, reducing ramp time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="p-12 rounded-3xl bg-blue-accent text-white text-center shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Get in Touch</h2>
                        <p className="text-blue-50 mb-8 max-w-md mx-auto relative z-10">
                            Ready to build your high-performing team? Let&apos;s discuss your recruiting needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="https://thekasgroup.com"
                                className="px-8 py-4 bg-white text-blue-accent font-bold rounded-full hover:bg-grey-100 transition-colors"
                            >
                                Visit thekasgroup.com
                            </Link>
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="px-8 py-4 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-950 transition-colors"
                            >
                                Contact Chris
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
