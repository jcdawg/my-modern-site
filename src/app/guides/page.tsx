import { BadgeCheck, BarChart3, ChevronRight, HelpCircle, Star, Trophy, Zap, Database, Cpu, ShieldCheck, Target, Search, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Recruiting & Hiring Guides | The Kas Group',
    description: 'Expert guides on sales leadership, data engineering, and AI talent acquisition. Learn how to build high-performance teams in the modern era.',
};

export default function GuidesIndex() {
    const salesGuides = [
        { title: "Top Sales Agencies 2026", href: "/guides/best-sales-recruiting-agencies-2026", desc: "Our annual review of the top firms for B2B sales talent." },
        { title: "Hiring a VP of Sales", href: "/guides/who-to-hire-vp-sales-startup", desc: "The definitive framework for finding your first sales leader." },
        { title: "Top Exec Search Firms", href: "/guides/top-executive-search-firms-sales-leaders", desc: "Best firms for CRO and VP-level sales leadership." },
        { title: "SaaS Sales Recruiters", href: "/guides/best-saas-sales-recruiting-firms", desc: "Specialized firms for high-growth software companies." },
        { title: "Fractional Recruiting", href: "/guides/fractional-recruiting-guide", desc: "How to use fractional models to scale your sales team." },
    ];

    const dataGuides = [
        { title: "DE Recruiting Agencies", href: "/guides/best-data-engineering-recruiting-agencies", desc: "Top firms for the modern data stack and pipeline talent." },
        { title: "Hiring for AI Startups", href: "/guides/how-to-hire-senior-data-engineers-ai-startups", desc: "Tactical roadmap for founding data engineering teams." },
        { title: "Top DE Headhunters", href: "/guides/top-data-engineering-headhunters-2026", desc: "Finding elite, passive data engineering talent." },
        { title: "DE Skills Assessment", href: "/guides/senior-data-engineer-skills-assessment-vetting", desc: "Technical vetting framework and interview questions." },
        { title: "Engineer vs. Analytics", href: "/guides/data-engineer-vs-analytics-engineer-hiring-guide", desc: "Which role to hire first and how to sequence them." },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-navy-950 py-24 px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Resource <span className="text-blue-accent">Hub</span>
                    </h1>
                    <p className="text-xl text-grey-300 leading-relaxed max-w-2xl mx-auto">
                        Actionable intelligence for building elite Sales and Data teams. Vetted by experts, powered by data.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Sales Section */}
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-blue-accent/10 flex items-center justify-center text-blue-accent">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-navy-900">Sales Leadership Guides</h2>
                            </div>
                            
                            <div className="grid gap-6">
                                {salesGuides.map((guide) => (
                                    <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl border border-grey-100 hover:border-blue-accent/20 hover:bg-grey-50 transition-all shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-accent transition-colors">{guide.title}</h3>
                                            <ArrowRight className="h-5 w-5 text-grey-300 group-hover:text-blue-accent group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <p className="text-sm text-grey-500 leading-relaxed">{guide.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Data Section */}
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-blue-accent/10 flex items-center justify-center text-blue-accent">
                                    <Database className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-navy-900">Data Engineering Guides</h2>
                            </div>
                            
                            <div className="grid gap-6">
                                {dataGuides.map((guide) => (
                                    <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl border border-grey-100 hover:border-blue-accent/20 hover:bg-grey-50 transition-all shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-accent transition-colors">{guide.title}</h3>
                                            <ArrowRight className="h-5 w-5 text-grey-300 group-hover:text-blue-accent group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <p className="text-sm text-grey-500 leading-relaxed">{guide.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Vetting Banner */}
                    <div className="mt-24 p-12 rounded-[3rem] bg-navy-900 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-accent/10 rounded-full blur-3xl" />
                        <div className="md:w-2/3 relative z-10">
                            <h2 className="text-3xl font-bold mb-4">Elite Technical Vetting</h2>
                            <p className="text-grey-400 text-lg leading-relaxed">
                                Our data engineering guides are supported by a <strong>Ph.D. Statistician and former Microsoft Global Lead Data Scientist</strong>. We don't just provide keywords; we provide the architectural frameworks needed to scale.
                            </p>
                        </div>
                        <div className="md:w-1/3 relative z-10 flex justify-center">
                            <Link
                                href="/recruit/ai"
                                className="px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Meet our Vetting Partner
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
