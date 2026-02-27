import { ArrowRight, CheckCircle2, Search, Users, FileText, Calendar, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Methodology | The Kas Group',
    description: 'Learn about The Kas Group\'s elite hiring methodology, including our Ph.D.-led technical vetting for AI/ML and Data roles.',
};

export default function MethodologyPage() {
    const steps = [
        {
            title: "Alignment Meeting",
            description: "We start by understanding your team, culture, and exactly what you're looking for. This isn't a generic intake call. We dig into the nuances: What does success look like in this role? What past hires failed and why? What technical skills are non-negotiable versus nice-to-have?",
            icon: Users,
        },
        {
            title: "Top Performer Intelligence",
            description: "Whenever possible, we sit down with your best performer in the role. We learn how they got there, what skills actually matter, and what separates top performers from the rest. This informs our search. We know exactly who to target.",
            icon: CheckCircle2,
        },
        {
            title: "Proactive Hunting",
            description: "We don't wait for resumes. We hunt. We identify and reach out to passive candidates who aren't looking but are exactly who you need. We use multiple channels: phone, text, email, and LinkedIn. Multiple touchpoints until we make contact.",
            icon: Search,
        },
        {
            title: "Immediate Shortlist with Write-up",
            description: "When we find strong fits, we don't make you dig through stacks of resumes. We send a curated shortlist with a write-up explaining why each candidate fits, not just their background, but why they'd succeed in your specific environment.",
            icon: FileText,
        },
        {
            title: "Interview Facilitation",
            description: "We manage the process end to end: coordinating schedules, preparing both sides, and keeping momentum so nothing stalls.",
            icon: Calendar,
        },
        {
            title: "Offer and Close",
            description: "When you're ready to extend an offer, we present it professionally and help close. We know how to navigate candidate concerns, competing offers, and compensation discussions.",
            icon: Handshake,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 lg:px-8 bg-navy-900 text-white overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl opacity-50" />
                <div className="mx-auto max-w-5xl relative z-10 text-center">
                    <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1]">
                        Our <span className="text-blue-accent">Methodology</span>
                    </h1>
                    <p className="mt-8 text-xl font-medium text-grey-300 md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        We don&apos;t just source candidates; we architect high-performance teams through a rigorous, proactive, and technical-first approach.
                    </p>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-start group">
                                <div className="h-14 w-14 rounded-2xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-6 group-hover:bg-blue-accent group-hover:text-white transition-all duration-300">
                                    <step.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                                <p className="text-grey-500 leading-relaxed text-lg">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ph.D. Difference Section */}
            <section className="py-24 bg-grey-50 border-y border-grey-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_30%_30%,#2563eb_0%,transparent_50%)]" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="bg-navy-900 rounded-[3rem] p-10 md:p-20 text-white shadow-2xl">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/3 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-accent/20 text-blue-accent font-bold text-sm uppercase tracking-widest mb-6">
                                    <ShieldCheck className="h-4 w-4" />
                                    Technical Vetting
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8">For AI/ML/Data Roles: <br /><span className="text-blue-accent italic">The Ph.D. Difference</span></h2>

                                <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-blue-accent/30 shadow-2xl">
                                    <Image
                                        src="/derek.png"
                                        alt="Derek, Ph.D."
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-2/3 space-y-6 text-lg text-grey-300 leading-relaxed">
                                <p>
                                    Every technical candidate goes through our proprietary Ph.D.-led vetting. Derek, our technical advisor with a PhD in Statistics and former Global Lead Data Scientist at Microsoft, conducts a 45 to 60 minute technical interview covering real-world scenarios.
                                </p>
                                <p>
                                    Most recruiters can&apos;t evaluate AI/ML expertise. <span className="text-white font-bold underline decoration-blue-accent decoration-2">We can.</span> We separate buzzwords from capability, ensuring you only spend time with candidates who can actually perform at an elite level.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Link Home CTA Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Ready to Build Your Elite Team?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="mailto:chris@thekasgroup.com"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-accent text-white font-black text-xl rounded-full hover:bg-blue-hover hover:scale-105 transition-all shadow-xl shadow-blue-accent/20"
                        >
                            Schedule a consultation
                            <ArrowRight className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
