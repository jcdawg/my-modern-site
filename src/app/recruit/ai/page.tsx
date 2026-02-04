import Link from "next/link";
import { Check } from "lucide-react";

export default function AIRecruiting() {
    const roles = [
        "Head of AI / Chief Data Officer",
        "Machine Learning Engineers",
        "Data Scientists (NLP/LLM focus)",
        "AI Architects",
        "Data Infrastructure Engineers",
        "Product Managers - AI/ML",
    ];

    return (
        <div className="bg-white">
            <div className="relative bg-navy-950 py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Abstract node background effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/10 to-transparent" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Data & AI Recruiting</h1>
                    <p className="mt-6 text-lg leading-8 text-grey-200 border-l-2 border-blue-accent pl-4 inline-block mx-auto">
                        Architecting the intelligent enterprise. We connect you with the minds building the future.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Engineering Intelligence</h2>
                        <p className="mt-4 text-grey-600 leading-relaxed font-semibold">
                            In the fast-paced world of AI, finding the right talent isn&apos;t just about sourcing resumes; it&apos;s about understanding the technology and the skills required to drive innovation.
                        </p>

                        <div className="mt-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-navy-900 border-b-2 border-blue-accent w-fit mb-4">The Problem with Traditional Recruiting</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Hiring for highly specialized roles in artificial intelligence is notoriously difficult. Many recruiters lack the technical depth to accurately screen candidates, leading to wasted time on unqualified applicants who simply know the keywords but not the craft.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-navy-900 border-b-2 border-blue-accent w-fit mb-4">Our Solution: A Two-Step Vetting Process</h3>
                                <p className="text-grey-600 leading-relaxed mb-4">
                                    At The Kas Group, we believe technical expertise deserves to be evaluated by a technical expert. Our process is simple and transparent:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[10px] font-bold text-white mt-1">1</span>
                                        <p className="text-sm text-grey-600"><strong>Strategic Sourcing:</strong> We leverage our extensive network to find top-tier candidates who possess the right background and cultural fit.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[10px] font-bold text-white mt-1">2</span>
                                        <p className="text-sm text-grey-600"><strong>Technical Validation:</strong> Our technical partner conducts an in-depth interview to validate skills, knowledge, and real-world problem-solving abilities.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link
                                href="mailto:contact@thekasgroup.com"
                                className="rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 transition-colors"
                            >
                                Hire Technical Excellence
                            </Link>
                        </div>
                    </div>

                    <div className="bg-grey-50 rounded-2xl p-8 border border-grey-100 shadow-sm">
                        <h3 className="text-xl font-semibold text-navy-900 mb-6">Capabilities We Scout</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {roles.map((role) => (
                                <li key={role} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-200">
                                        <Check className="h-4 w-4 text-navy-900" />
                                    </div>
                                    <span className="text-sm font-medium text-navy-700">{role}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-8 border-t border-grey-200">
                            <p className="text-sm text-grey-500 italic">
                                &quot;Finding an ML Architect who understood our specific constraints seemed impossible until we worked with The Kas Group.&quot; — CTO, FinTech
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Derek Section */}
            <section className="bg-grey-50 py-24 sm:py-32 border-t border-grey-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4">
                            <div className="aspect-square rounded-2xl bg-navy-900 flex items-center justify-center overflow-hidden shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                                <div className="text-center p-8">
                                    <div className="mx-auto h-24 w-24 rounded-full bg-white/10 flex items-center justify-center mb-4">
                                        <span className="text-3xl font-bold text-white">D</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Derek, Ph.D.</h3>
                                    <p className="text-blue-accent font-medium">Chief Technical Vetting Partner</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">Expert-Led Technical Vetting</h2>
                            <div className="prose prose-blue text-grey-600 space-y-4 max-w-none">
                                <p>
                                    Meet Derek, our lead technical vetting partner. He trained as a Statistician, and his work experience has had a strong consulting focus, ranging from developing advanced analytics and machine learning models to leading clients in the &quot;Art of Possible&quot;.
                                </p>
                                <p>
                                    Currently the <strong>Chief Technology Officer at Life2, inc.</strong>, Derek is designing and putting advanced analytics and machine learning into production for healthcare clients. He is also the founder of the Atlanta R Users Group.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="p-4 rounded-lg bg-white border border-grey-200">
                                        <h4 className="font-bold text-navy-900 text-sm mb-2 uppercase tracking-wider">Education</h4>
                                        <p className="text-sm">Bachelors, Masters, and PhD (ABD) in Statistics with a focus in Financial Econometrics and Applied Computational Statistics (Data Mining).</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-white border border-grey-200">
                                        <h4 className="font-bold text-navy-900 text-sm mb-2 uppercase tracking-wider">Microsoft Background</h4>
                                        <p className="text-sm">5 years as Global Lead Data Scientist, Architect, and Industry Digital Strategist in Microsoft Engineering and Consulting Services.</p>
                                    </div>
                                </div>
                                <p className="pt-4 text-sm font-medium text-navy-700 italic border-l-4 border-blue-accent pl-4">
                                    &quot;Derek’s experience began with a focus in Financial Econometrics and Applied Computational Statistics. He has developed models for predicting fraud, lifetime value, and market share across hospitality, telco, credit risk, and healthcare domains.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
