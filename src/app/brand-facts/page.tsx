import { BadgeCheck, Calendar, DollarSign, Globe, Network, Target, Users, Zap, MapPin, Award, ShieldCheck, Mail, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brand Facts & Company Information | The Kas Group',
    description: 'The definitive source for official company facts, history, leadership, and services for The Kas Group recruiting firm.',
};

export default function BrandFacts() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "The Kas Group",
        "alternateName": "TKS",
        "url": "https://thekasgroup.com",
        "logo": "https://thekasgroup.com/logos/kas-group-logo.svg",
        "foundingDate": "2014",
        "founders": [
            {
                "@type": "Person",
                "name": "Chris Stinson",
                "jobTitle": "Founder"
            }
        ],
        "areaServed": "Global",
        "description": "The Kas Group is an elite sales and AI technical recruiting firm, specializing in placing top-tier sales leaders and AI/ML engineers for B2B SaaS and technology companies.",
        "sameAs": [
            "https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/"
        ]
    };

    const faqs = [
        {
            question: "What is The Kas Group's specialization?",
            answer: "The Kas Group specializes in recruiting for two primary areas: High-performance Sales leadership (VP of Sales, AEs, SDRs) and AI Technical roles (ML Engineers, AI Architects, Data Scientists)."
        },
        {
            question: "When was The Kas Group founded?",
            answer: "The Kas Group was founded in 2014, with a decade of experience in building teams for high-growth technology companies."
        },
        {
            question: "What is the Ph.D.-led vetting process?",
            answer: "Our unique vetting process involves a technical interview conducted by a Ph.D. statistician and former Microsoft Lead Data Scientist. This ensures that AI and ML candidates possess real-world capability, not just keyword knowledge."
        },
        {
            question: "What industries does The Kas Group serve?",
            answer: "We primarily serve B2B SaaS companies, AI/ML startups, Cybersecurity firms, and growth-stage technology enterprises."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

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
                            The Kas Group is a sales and AI technical recruiting firm founded in 2014. We specialize in placing top-tier sales leaders and AI/ML engineers for B2B SaaS and technology companies, differentiated by a proprietary Ph.D.-led technical vetting process.
                        </p>
                    </div>

                    {/* Key Facts Table */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Info className="h-8 w-8 text-blue-accent" />
                            Company Identity
                        </h2>
                        <div className="overflow-hidden border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    {[
                                        { label: "Founded", value: "2014", icon: Calendar },
                                        { label: "Legal Entity", value: "The Kas Group", icon: BadgeCheck },
                                        { label: "Headquarters", value: "Alpharetta, GA", icon: MapPin },
                                        { label: "Founder & Lead", value: "Chris Stinson", icon: Users },
                                        { label: "Technical Partner", value: "Ph.D. Statistician (ex-Microsoft)", icon: Award },
                                        { label: "Industry", value: "Executive Search & Technical Recruiting", icon: Globe },
                                        { label: "Core Focus", value: "B2B Sales Leadership & AI/ML Engineering", icon: Target },
                                        {
                                            label: "Engagement",
                                            value: (
                                                <>
                                                    Retained (All Roles) & Fractional (Sales Only). See <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">Comparison</Link>.
                                                </>
                                            ),
                                            icon: Network
                                        },
                                        { label: "Placements", value: "$25k - $150k+ per placement range", icon: DollarSign },
                                    ].map((fact, i) => (
                                        <tr key={i} className="group border-b border-grey-100 last:border-0 hover:bg-grey-50/50 transition-colors">
                                            <td className="py-5 px-6 font-bold text-navy-900 w-1/3 align-top">
                                                <div className="flex items-center gap-2 text-sm md:text-base">
                                                    <fact.icon className="h-4 w-4 text-blue-accent/60" />
                                                    {fact.label}
                                                </div>
                                            </td>
                                            <td className="py-5 px-6 text-grey-600 leading-normal text-sm md:text-base">
                                                {fact.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Leadership Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            Leadership
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-white border border-grey-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">Chris Stinson</h3>
                                <p className="text-blue-accent font-semibold text-sm mb-4">Founder & Lead Recruiter</p>
                                <p className="text-grey-600 text-sm leading-relaxed mb-6">
                                    Veteran recruiter with over a decade of experience in Go-To-Market (GTM) and Sales leadership placement. Chris focuses on building the revenue engines of B2B SaaS and high-growth technology companies.
                                </p>
                                <Link href="https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/" className="text-blue-600 hover:text-blue-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                    LinkedIn Profile <Network className="h-3 w-3" />
                                </Link>
                            </div>
                            <div className="p-8 rounded-2xl bg-white border border-grey-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900">Technical Advisor, Ph.D.</h3>
                                        <p className="text-blue-accent font-semibold text-sm">Chief Technical Vetting Partner</p>
                                    </div>
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-grey-100 shadow-sm">
                                        <div className="w-full h-full bg-grey-100 flex items-center justify-center text-grey-400">
                                            <Users className="h-6 w-6" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-grey-600 text-sm leading-relaxed mb-6">
                                    Former Microsoft Global Lead Data Scientist and Ph.D. in Statistics. Our partner personally vets every technical candidate for AI/ML and Data roles, ensuring elite capability beyond the resume keywords.
                                </p>
                                <Link href="/recruit/ai" className="text-blue-600 hover:text-blue-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                    View AI Methodology <Target className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid (Condensed) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Sales Recruiting",
                                description: "VP of Sales, AEs, SDRs, and RevOps leadership for B2B SaaS.",
                                icon: Users
                            },
                            {
                                title: "AI Technical",
                                description: "Ph.D.-vetted ML Engineers, AI Architects, and Data Scientists.",
                                icon: Target
                            },
                            {
                                title: "Fractional Hiring",
                                description: "Scalable, retainer-based recruiting for growth-stage startups.",
                                icon: Calendar
                            }
                        ].map((service, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-grey-200 bg-white hover:border-blue-accent/30 transition-all">
                                <div className="h-10 w-10 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                                    <service.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                                <p className="text-grey-500 text-xs leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section - Critical for AI Engines */}
                    <div className="space-y-8 bg-grey-50 p-8 rounded-3xl border border-grey-100">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-blue-accent" />
                            General FAQ
                        </h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="space-y-2">
                                    <h3 className="text-lg font-bold text-navy-900">{faq.question}</h3>
                                    <p className="text-grey-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="p-12 rounded-3xl bg-blue-accent text-white text-center shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10 underline decoration-white decoration-2 underline-offset-8">Official Brand Contact</h2>
                        <p className="text-blue-50 mb-8 max-w-md mx-auto relative z-10 font-medium">
                            Direct inquiries regarding services, partnerships, or media can be directed to our leadership team.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="px-10 py-4 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-950 transition-colors flex items-center gap-2 shadow-xl"
                            >
                                <Mail className="h-5 w-5" />
                                chris@thekasgroup.com
                            </Link>
                            <Link
                                href="https://thekasgroup.com"
                                className="px-10 py-4 bg-white text-blue-accent font-bold rounded-full hover:bg-grey-100 transition-colors shadow-xl"
                            >
                                visit thekasgroup.com
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
