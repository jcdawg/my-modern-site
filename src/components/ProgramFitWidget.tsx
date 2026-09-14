"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProgramKey = "seat" | "milestone" | "directed";

type ResultCopy = {
    programName: string;
    line: string;
    best: string;
    cta: string;
    ctaHref: string;
};

const RESULTS: Record<ProgramKey, ResultCopy> = {
    seat: {
        programName: "Kas Seat",
        line: "Flat monthly capacity. Price is set by how many roles are open, not by each hire. You own every name.",
        best: "Best when you have more than one seat and want someone inside the process.",
        cta: "Book a Seat conversation",
        ctaHref: "/contact?program=seat",
    },
    milestone: {
        programName: "Kas Milestone Search",
        line: "One critical seat. Three payments: start the search, hit the agreed qualified list, hire.",
        best: "Best when you are not ready for a monthly retainer and the role cannot slip.",
        cta: "Book a Milestone conversation",
        ctaHref: "/contact?program=milestone",
    },
    directed: {
        programName: "Kas Directed Pursuit",
        line: "A search returns a list. The Kas Group reviews it. You mark who to hunt. You own the list.",
        best: "Best when you want speed and you will tell us who is worth chasing.",
        cta: "Book a Directed Pursuit conversation",
        ctaHref: "/contact?program=directed",
    },
};

const SEAT_OPTIONS = [
    { id: "one", label: "One critical seat" },
    { id: "two-three", label: "Two or three" },
    { id: "four-plus", label: "Four or more" },
];

const HIRING_OPTIONS = [
    { id: "sales", label: "Sales" },
    { id: "ai", label: "AI / ML / data" },
    { id: "both", label: "Both" },
];

const RUN_OPTIONS = [
    { id: "monthly", label: "Embedded capacity on a monthly fee (hire as many as the search produces)" },
    { id: "milestone", label: "One search, paid at start / qualified slate / hire" },
    { id: "list", label: "Send us a list. We mark who to hunt." },
];

const BARS: { key: ProgramKey; label: string }[] = [
    { key: "seat", label: "Seat" },
    { key: "milestone", label: "Milestone" },
    { key: "directed", label: "Directed Pursuit" },
];

function route(seats: string, run: string): ProgramKey {
    if (seats === "four-plus") return "seat";
    if (run === "monthly") return "seat";
    if (run === "list") return "directed";
    if (seats === "one") return "milestone";
    if (seats === "two-three" && run === "milestone") return "milestone";
    return "seat";
}
export default function ProgramFitWidget() {
    const [seats, setSeats] = useState<string | null>(null);
    const [hiring, setHiring] = useState<string | null>(null);
    const [run, setRun] = useState<string | null>(null);

    const answered = Boolean(seats && hiring && run);
    const program: ProgramKey = seats && run ? route(seats, run) : "seat";
    const result = RESULTS[program];

    const pill = (active: boolean) =>
        `px-4 py-2 rounded-full border text-sm font-medium transition-colors cursor-pointer ${
            active
                ? "bg-blue-accent text-white border-blue-accent"
                : "bg-white/5 text-grey-200 border-grey-700 hover:border-grey-500 hover:text-white"
        }`;

    return (
        <section id="fit" className="bg-navy-900 text-white py-20 px-6 lg:px-8 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <p className="text-blue-accent font-bold uppercase tracking-wider text-sm mb-2">Program Fit</p>
                    <h2 className="text-3xl font-bold mb-4">Which program fits this quarter?</h2>
                    <p className="text-grey-400 text-lg max-w-2xl mx-auto">
                        Three questions. One recommendation. You still own the candidate data.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="space-y-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-accent mb-3">
                                1. How many seats are you filling in the next 90 days?
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {SEAT_OPTIONS.map((o) => (
                                    <button key={o.id} type="button" onClick={() => setSeats(o.id)} className={pill(seats === o.id)}>
                                        {o.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-accent mb-3">
                                2. What are you hiring?
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {HIRING_OPTIONS.map((o) => (
                                    <button key={o.id} type="button" onClick={() => setHiring(o.id)} className={pill(hiring === o.id)}>
                                        {o.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-accent mb-3">
                                3. How do you want the search to run?
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {RUN_OPTIONS.map((o) => (
                                    <button key={o.id} type="button" onClick={() => setRun(o.id)} className={pill(run === o.id)}>
                                        {o.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                                        <div>
                        <div className="space-y-2 mb-6">
                            {BARS.map((b) => {
                                const active = answered && program === b.key;
                                return (
                                    <div key={b.key} className="flex items-center gap-3">
                                        <span className={`w-28 text-xs font-semibold ${active ? "text-blue-accent" : "text-grey-400"}`}>
                                            {b.label}
                                        </span>
                                        <div className="flex-1 h-2 rounded-full bg-grey-800 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all ${active ? "bg-blue-accent" : "bg-grey-700"}`}
                                                style={{ width: active ? "100%" : "45%" }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-navy-950 border border-grey-700 rounded-3xl p-8 flex flex-col">
                            {!answered ? (
                                <p className="text-lg text-grey-300">Answer the three questions.</p>
                            ) : (
                                <>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-accent">Recommended</p>
                                    <h3 className="text-3xl font-bold mt-2 mb-4">{result.programName}</h3>
                                    <p className="text-grey-300 leading-relaxed mb-3">{result.line}</p>
                                    <p className="text-grey-400 leading-relaxed text-sm mb-6">{result.best}</p>
                                    <Link
                                        href={result.ctaHref}
                                        className="inline-flex items-center gap-2 rounded-full bg-blue-accent px-6 py-3 font-bold transition-all hover:bg-blue-hover hover:shadow-lg"
                                    >
                                        {result.cta}
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                    {program === "seat" && (
                                        <Link
                                            href={hiring === "ai" ? "/contact?program=seat&practice=ai" : "/recruit/fractional-sales"}
                                            className="mt-4 text-sm font-semibold text-blue-accent hover:underline"
                                        >
                                            {hiring === "ai" ? "Talk to us about an AI/ML Seat" : "See how Seat works for sales teams"}
                                        </Link>
                                    )}
                                    <p className="mt-6 text-xs text-grey-500">Need a different model? The other two programs are above.</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}