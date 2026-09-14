import { ArrowRight, CheckCircle2, Search, Target, Users, XCircle } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Programs | Sales & Technical Recruiting",
    description:
        "Three ways to hire with The Kas Group: monthly hiring capacity, milestone search, or an AI-sourced list. Programs, not contingency. You own the candidate data.",
    path: "/programs",
});

export default function Programs() {
    const programs = [
        {
            icon: Users,
            title: "Kas Seat",
            blurb: "For teams with more than one open role in sales or AI/ML/data.",
            desc: [
                "Flat monthly fee based on how many roles are open.",
                "Hire as many people as the search produces that month. The monthly price does not jump per hire.",
                "The Kas Group works inside your process. You own every name.",
            ],
            best: "you need capacity, not a one-off req.",
        },
        {
            icon: Target,
            title: "Kas Milestone Search",
            blurb: "For one critical seat.",
            desc: [
                "Three payments: start the search, hit the agreed number of qualified candidates, the person is hired.",
            ],
            best: "you are not ready for a monthly seat and you have one role that cannot slip.",
        },
        {
            icon: Search,
            title: "Kas Directed Pursuit",
            blurb: "For teams that want speed and control.",
            desc: [
                "AI runs the search and returns a list.",
                "The Kas Group reviews it for fit. You mark who to pursue. The Kas Group goes after those people.",
                "You own the list.",
            ],
            best: "you will tell us who is worth hunting.",
        },
    ];

    const forYou = [
        "Tech and SaaS companies",
        "Founders, CROs, Heads of People",
        "Two practices only: sales professionals, and AI/ML/data/analytics",
    ];

    const notForYou = [
        "Volume staffing",
        "Ten agencies on the same req",
        "Anyone who expects The Kas Group to keep the candidate database",
    ];

    const steps = [
        "You tell us the seats, the motion, and the timing.",
        "We recommend Seat, Milestone, or Directed Pursuit.",
        "Search runs. You own the data from day one.",
        "AI/ML candidates still pass Ph.D.-led technical review before they reach your team.",
    ];
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-grey-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 -mb-10 -mr-10 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-[1.15]">
                        Three ways to hire sales leaders and AI/ML talent.
                    </h1>
                    <p className="mt-4 text-xl font-medium text-grey-500 md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        Programs, not contingency. Your company owns the candidate data. Built for tech and SaaS teams.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xl text-grey-500 leading-relaxed max-w-2xl mx-auto">
                        Most firms rent you a recruiter and keep the database. The Kas Group runs a search inside your process and leaves you with the names.
                    </p>
                    <p className="text-xl text-navy-700 font-semibold leading-relaxed mt-6 max-w-2xl mx-auto">
                        Pick the model that matches how many seats you need to fill.
                    </p>
                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-blue-accent hover:shadow-xl hover:-translate-y-1"
                        >
                            Book a program conversation
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
                        {/* Three programs */}
            <section className="py-16 px-6 lg:px-8 bg-grey-50">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program) => (
                            <div key={program.title} className="bg-white p-8 rounded-3xl border border-grey-200 shadow-sm flex flex-col">
                                <div className="h-14 w-14 rounded-2xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-6">
                                    <program.icon className="h-7 w-7" />
                                </div>
                                <h2 className="text-2xl font-bold text-navy-900 mb-3">{program.title}</h2>
                                <p className="text-grey-500 font-semibold leading-relaxed mb-4">{program.blurb}</p>
                                <ul className="space-y-3 mb-6">
                                    {program.desc.map((line) => (
                                        <li key={line} className="text-grey-600 leading-relaxed flex gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-auto pt-4 border-t border-grey-100 text-grey-500 text-sm leading-relaxed">
                                    <strong className="text-navy-700">Best when:</strong> {program.best}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
                        {/* Who this is for / not for */}
            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl border border-grey-200 bg-white">
                        <h2 className="text-2xl font-bold text-navy-900 mb-6">Who this is for</h2>
                        <ul className="space-y-3">
                            {forYou.map((item) => (
                                <li key={item} className="text-grey-600 leading-relaxed flex gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl border border-grey-200 bg-grey-50">
                        <h2 className="text-2xl font-bold text-navy-900 mb-6">Who this is not for</h2>
                        <ul className="space-y-3">
                            {notForYou.map((item) => (
                                <li key={item} className="text-grey-600 leading-relaxed flex gap-2">
                                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* How a program starts */}
            <section className="py-16 px-6 lg:px-8 bg-navy-900 text-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">How a program starts</h2>
                    <ol className="space-y-4">
                        {steps.map((step, i) => (
                            <li key={step} className="flex items-start gap-4">
                                <span className="shrink-0 h-9 w-9 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">{i + 1}</span>
                                <span className="text-grey-300 leading-relaxed text-lg">{step}</span>
                            </li>
                        ))}
                    </ol>
                    <div className="text-center mt-12">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-accent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-blue-hover hover:shadow-xl"
                        >
                            Book a program conversation
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}