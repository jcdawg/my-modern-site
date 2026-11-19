"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Check, Copy, Loader2, RotateCcw, TriangleAlert, UserRound } from "lucide-react";
import { resolveCompanyInput } from "@/lib/gtm-role-mismatch/company-input";
import {
    SCAN_LABELS,
    SAMPLE_ALIGNED,
    SAMPLE_MISMATCH,
    diagnoseFromSignals,
    type Diagnosis,
} from "@/lib/gtm-role-mismatch/diagnose";
import { fireGtmMismatchRun } from "@/lib/gtm-role-mismatch/track";

type Phase = "form" | "scan" | "result";

function cn(...parts: (string | false | null | undefined)[]) {
    return parts.filter(Boolean).join(" ");
}

export default function GtmRoleMismatch() {
    const [jd, setJd] = useState("");
    const [company, setCompany] = useState("");
    const [companyUrl, setCompanyUrl] = useState("");
    const [phase, setPhase] = useState<Phase>("form");
    const [visibleChecks, setVisibleChecks] = useState(0);
    const [result, setResult] = useState<Diagnosis | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if (phase !== "scan") return;
        const timers = SCAN_LABELS.map((_, i) => window.setTimeout(() => setVisibleChecks(i + 1), 180 + i * 140));
        return () => timers.forEach((t) => window.clearTimeout(t));
    }, [phase]);

    async function onRun() {
        setError("");
        const jobDescription = jd.trim();
        const resolved = resolveCompanyInput(company, companyUrl);
        const companyText = resolved.companyText;
        const url = resolved.companyUrl;
        if (url && !/^https:\/\//i.test(url)) {
            setError("That link is not a public https page. Paste the company text instead.");
            return;
        }
        if (jobDescription.length < 40 || (companyText.length < 40 && !/^https:\/\//i.test(url))) {
            setError("Paste the job description, and either the company text or an https link to the site.");
            return;
        }
        setVisibleChecks(0);
        setPhase("scan");
        const started = Date.now();
        let diagnosis: Diagnosis;
        try {
            const res = await fetch("/api/gtm-role-mismatch", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ jobDescription, companyText, companyUrl: url }),
            });
            const body = (await res.json().catch(() => ({}))) as Partial<Diagnosis> & { error?: string };
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500 && body.error) {
                    setError(body.error);
                    setPhase("form");
                    return;
                }
                throw new Error("diagnostic_failed");
            }
            diagnosis = body as Diagnosis;
        } catch {
            diagnosis = diagnoseFromSignals(jobDescription, companyText);
        }
        const wait = Math.max(0, 2100 - (Date.now() - started));
        window.setTimeout(() => {
            setResult(diagnosis);
            setPhase("result");
            fireGtmMismatchRun(diagnosis);
            document.getElementById("gtm-mismatch-tool")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, wait);
    }

    function reset() {
        setPhase("form");
        setResult(null);
        setVisibleChecks(0);
    }

    return (
        <div id="gtm-mismatch-tool" className="scroll-mt-28">
            {phase === "form" ? (
                <Form
                    jd={jd}
                    company={company}
                    companyUrl={companyUrl}
                    error={error}
                    onJd={setJd}
                    onCompany={setCompany}
                    onUrl={setCompanyUrl}
                    onRun={onRun}
                    onSample={(kind) => {
                        const sample = kind === "mismatch" ? SAMPLE_MISMATCH : SAMPLE_ALIGNED;
                        setJd(sample.jobDescription);
                        setCompany(sample.companyText);
                        setCompanyUrl("");
                        setError("");
                    }}
                />
            ) : null}
            {phase === "scan" ? <Scan visible={visibleChecks} /> : null}
            {phase === "result" && result ? <Report result={result} onReset={reset} /> : null}
        </div>
    );
}

function Form({
    jd,
    company,
    companyUrl,
    error,
    onJd,
    onCompany,
    onUrl,
    onRun,
    onSample,
}: {
    jd: string;
    company: string;
    companyUrl: string;
    error: string;
    onJd: (v: string) => void;
    onCompany: (v: string) => void;
    onUrl: (v: string) => void;
    onRun: () => void;
    onSample: (kind: "mismatch" | "aligned") => void;
}) {
    return (
        <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="rounded-3xl border border-grey-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
                <div className="space-y-6">
                    <Field
                        id="gtm-jd"
                        label="Job description"
                        hint="The posting as you would send it, or the one already live."
                        value={jd}
                        onChange={onJd}
                        placeholder="Paste the full job description..."
                    />
                    <Field
                        id="gtm-company"
                        label="Website or pitch"
                        hint="A site link, homepage or about copy, a deck, or a short note on stage, ACV, and who sells today."
                        value={company}
                        onChange={onCompany}
                        placeholder="Paste a site link or the company language..."
                    />
                    <label className="block" htmlFor="gtm-url">
                        <span className="text-sm font-bold text-navy-900">Or a public https link</span>
                        <span className="mt-1 block text-sm text-grey-500">Optional. We read the page once. Nothing is stored.</span>
                        <input
                            id="gtm-url"
                            type="url"
                            inputMode="url"
                            autoComplete="off"
                            value={companyUrl}
                            onChange={(e) => onUrl(e.target.value)}
                            placeholder="https://"
                            className="mt-3 w-full rounded-2xl border border-grey-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-grey-400 focus:border-blue-accent"
                        />
                    </label>
                    {error ? (
                        <p role="alert" className="rounded-2xl border border-blue-accent/30 bg-blue-accent/5 px-4 py-3 text-sm font-medium text-navy-900">
                            {error}
                        </p>
                    ) : null}
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <button
                            type="button"
                            onClick={onRun}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-accent"
                        >
                            Run the diagnostic
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => onSample("mismatch")}
                            className="h-12 rounded-full border border-grey-200 px-5 text-sm font-medium text-navy-700 transition-colors hover:border-blue-accent hover:text-blue-accent"
                        >
                            Load a mismatch
                        </button>
                        <button
                            type="button"
                            onClick={() => onSample("aligned")}
                            className="h-12 rounded-full border border-grey-200 px-5 text-sm font-medium text-navy-700 transition-colors hover:border-blue-accent hover:text-blue-accent"
                        >
                            Load an aligned seat
                        </button>
                    </div>
                    <p className="text-xs text-grey-500">Nothing is stored. The text is used once for this read.</p>
                </div>
            </div>
            <aside className="space-y-4 lg:col-span-5">
                <div className="rounded-3xl border border-grey-200 bg-grey-50 p-8">
                    <p className="text-sm font-bold uppercase tracking-wider text-blue-accent">What this catches</p>
                    <h2 className="mt-3 text-2xl font-bold text-navy-900">The JD for the company you want to be.</h2>
                    <p className="mt-3 text-base leading-relaxed text-grey-600">
                        Seed founders post for an enterprise VP who expects a 20-person enablement team. The company still needs someone who will close the next deals and write the motion down.
                    </p>
                </div>
                <ul className="space-y-3">
                    {[
                        ["Stage vs title", "A VP title on a first-hire company is the usual miss."],
                        ["Team that does not exist", "If the JD hires managers and the site has no sellers, stop."],
                        ["Then the scorecard", "Fix the seat first. The hiring scorecard comes after."],
                    ].map(([title, body]) => (
                        <li key={title} className="rounded-2xl border border-grey-200 bg-white px-5 py-4">
                            <p className="text-sm font-bold text-navy-900">{title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-grey-500">{body}</p>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}

function Field({
    id,
    label,
    hint,
    value,
    onChange,
    placeholder,
}: {
    id: string;
    label: string;
    hint: string;
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
}) {
    return (
        <label className="block" htmlFor={id}>
            <span className="text-sm font-bold text-navy-900">{label}</span>
            <span className="mt-1 block text-sm text-grey-500">{hint}</span>
            <textarea
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={8}
                maxLength={12000}
                placeholder={placeholder}
                className="mt-3 w-full resize-y rounded-2xl border border-grey-200 bg-white px-4 py-3 text-sm leading-relaxed text-navy-900 outline-none transition placeholder:text-grey-400 focus:border-blue-accent"
            />
        </label>
    );
}

function Scan({ visible }: { visible: number }) {
    return (
        <div className="gtm-rise rounded-3xl border border-grey-200 bg-white p-6 shadow-sm sm:p-10" aria-live="polite">
            <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-blue-accent" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-wider text-blue-accent">Reading both sides</p>
            </div>
            <h2 className="mt-3 text-3xl font-bold text-navy-900">Twelve questions, one pass.</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {SCAN_LABELS.map((name, i) => {
                    const on = i < visible;
                    return (
                        <li
                            key={name}
                            className={cn(
                                "flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors",
                                on ? "border-grey-200 bg-grey-50" : "border-transparent bg-white",
                            )}
                        >
                            <span
                                className={cn(
                                    "flex h-7 w-7 items-center justify-center rounded-full",
                                    on ? "bg-blue-accent text-white" : "bg-grey-100 text-grey-400",
                                )}
                            >
                                {on ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <span className="text-xs font-bold">{i + 1}</span>}
                            </span>
                            <span className={cn("text-sm font-medium", on ? "text-navy-900" : "text-grey-400")}>{name}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function copyText(result: Diagnosis) {
    const lines = [
        `GTM Role Mismatch: ${result.verdict}`,
        `Computed mismatch: ${result.mismatch}% (evidence strength ${result.confidence}%)`,
        `Company stage: ${result.stageLabel}`,
        `Who the JD attracts: ${result.personaLabel}`,
        "",
        result.summary,
        "",
        "The twelve answers:",
        `- Company stage: ${result.stageLabel} (${result.stageConfidence}%)`,
        `- Seat the JD is hiring: ${result.personaLabel} (${result.personaConfidence}%)`,
        ...result.checks.map((check) => `- ${check.label}: ${check.call} ${Math.round(check.probability * 100)}%`),
        "",
        "Where it breaks:",
        ...result.gaps.map((gap) => `- ${gap.title}`),
        "",
        `Write the seat like this: ${result.roleShouldBe}`,
        "",
        "https://www.thekasgroup.com/gtm-role-mismatch",
    ];
    return lines.join("\n");
}

function Report({ result, onReset }: { result: Diagnosis; onReset: () => void }) {
    const match = 100 - result.mismatch;
    const [copied, setCopied] = useState(false);

    async function onCopy() {
        try {
            await navigator.clipboard.writeText(copyText(result));
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="space-y-6">
            <section className="gtm-rise relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-8 text-white sm:px-10 sm:py-10">
                <MarkGhost />
                <div className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-blue-accent">{result.verdict}</p>
                        <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">{result.summary}</h2>
                        <p className="mt-4 inline-flex max-w-xl items-center gap-2 text-sm leading-relaxed text-grey-400">
                            <EngineBadge engine={result.engine} />
                            <span>{engineLine(result.engine, result.pageStatus)}</span>
                        </p>
                    </div>
                    <div className="text-left md:text-right">
                        <Count value={result.mismatch} />
                        <p className="text-sm text-grey-400">Computed mismatch</p>
                        <p className="mt-1 text-xs text-grey-400">Evidence strength {result.confidence}%</p>
                    </div>
                </div>
                <div className="relative mt-8">
                    <div className="mb-2 flex justify-between text-xs font-medium text-grey-400">
                        <span>Stage match</span>
                        <span>{match}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-blue-accent transition-all duration-700" style={{ width: `${match}%` }} />
                    </div>
                </div>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
                <InfoCard
                    icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
                    kicker="Company stage"
                    title={result.stageLabel}
                    body={result.stageDetail}
                    confidence={result.stageConfidence}
                />
                <InfoCard
                    icon={<UserRound className="h-5 w-5" aria-hidden="true" />}
                    kicker="Who the JD attracts"
                    title={result.personaLabel}
                    body={result.personaDetail}
                    confidence={result.personaConfidence}
                />
            </div>

            <section className="rounded-3xl border border-grey-200 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy-900">The twelve answers</h3>
                <p className="mt-2 text-sm text-grey-500">Each row is its own yes or no. The percentage above is the distance between them.</p>
                <ul className="mt-5 divide-y divide-grey-100">
                    {result.checks.map((check) => (
                        <li key={check.key} className="py-4">
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-sm font-bold text-navy-900">
                                    {check.label}
                                    <span className="ml-2 whitespace-nowrap text-xs font-medium text-grey-400">{check.side === "jd" ? "JD" : "Company"}</span>
                                </p>
                                <span
                                    className={cn(
                                        "shrink-0 text-xs font-bold uppercase tracking-wider",
                                        check.call === "Yes" ? "text-blue-accent" : check.call === "No" ? "text-navy-700" : "text-grey-500",
                                    )}
                                >
                                    {check.call} {Math.round(check.probability * 100)}%
                                </span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-grey-100">
                                <div className="h-full rounded-full bg-blue-accent" style={{ width: `${Math.round(check.probability * 100)}%` }} />
                            </div>
                            {check.evidence ? (
                                <p className="mt-2 border-l-2 border-blue-accent/40 pl-3 text-sm italic leading-relaxed text-grey-600">&ldquo;{check.evidence}&rdquo;</p>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="rounded-3xl border border-grey-200 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy-900">Where it breaks</h3>
                <ul className="mt-5 space-y-4">
                    {result.gaps.map((gap) => (
                        <li key={gap.title} className="flex gap-3">
                            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-blue-accent" aria-hidden="true" />
                            <div>
                                <p className="font-bold text-navy-900">{gap.title}</p>
                                <p className="mt-1 text-sm leading-relaxed text-grey-600">{gap.detail}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="rounded-3xl border border-grey-200 bg-grey-50 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-accent">Write the seat like this</p>
                <p className="mt-3 text-2xl font-bold leading-snug text-navy-900">{result.roleShouldBe}</p>
                <ul className="mt-6 space-y-3">
                    {result.firstYear.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-accent" aria-hidden="true" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-grey-600">{result.recommendation}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                        href="/hiring-scorecard"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-accent"
                    >
                        Build the scorecard for the corrected seat
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                        href="/contact#contact-form"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-grey-200 bg-white px-6 text-sm font-medium text-navy-900 transition-colors hover:border-blue-accent hover:text-blue-accent"
                    >
                        Schedule a consultation
                    </Link>
                </div>
            </section>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                    type="button"
                    onClick={onCopy}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-grey-200 bg-white px-5 text-sm font-medium text-navy-900 transition-colors hover:border-blue-accent hover:text-blue-accent"
                >
                    {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                    {copied ? "Copied" : "Copy the result"}
                </button>
                <button
                    type="button"
                    onClick={onReset}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-grey-500 transition-colors hover:text-blue-accent"
                >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Run another diagnostic
                </button>
            </div>
        </div>
    );
}

function InfoCard({
    icon,
    kicker,
    title,
    body,
    confidence,
}: {
    icon: ReactNode;
    kicker: string;
    title: string;
    body: string;
    confidence: number;
}) {
    return (
        <article className="rounded-3xl border border-grey-200 bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-accent/10 text-blue-accent">{icon}</div>
                <span className="text-xs font-bold uppercase tracking-wider text-grey-500">{confidence}%</span>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-accent">{kicker}</p>
            <h3 className="mt-2 text-2xl font-bold text-navy-900">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-grey-600">{body}</p>
        </article>
    );
}

function EngineBadge({ engine }: { engine: Diagnosis["engine"] }) {
    const label = engine === "jev" ? "Jev" : "Keywords";
    return (
        <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-grey-200">
            {label}
        </span>
    );
}

function engineLine(engine: Diagnosis["engine"], pageStatus: Diagnosis["pageStatus"]) {
    const page =
        pageStatus === "fetched" ? " The page link was read." : pageStatus === "failed" ? " The page link could not be read." : "";
    if (engine === "jev") return `Jev answered twelve questions in one pass. This number is the distance between those answers.${page}`;
    return `Keyword stand-in. Same formula, weaker inputs.${page}`;
}

function Count({ value }: { value: number }) {
    const [n, setN] = useState(0);
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const start = performance.now();
        let frame = 0;
        const tick = (now: number) => {
            const t = reduce ? 1 : Math.min(1, (now - start) / 700);
            setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
            if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [value]);
    return <p className="font-mono text-6xl font-semibold tracking-tight text-white sm:text-7xl">{n}%</p>;
}

function MarkGhost() {
    return (
        <svg viewBox="0 0 32 32" fill="none" className="pointer-events-none absolute -right-6 -top-10 h-56 w-56 text-white/5" aria-hidden="true">
            <path d="M16 4.5L25.96 10.25V21.75L16 27.5L6.04 21.75V10.25L16 4.5Z" stroke="currentColor" strokeWidth="1.2" />
            <path
                d="M16 16L25.96 10.25M16 16L25.96 21.75M16 16L16 27.5M16 16L6.04 21.75M16 16L6.04 10.25M16 16L16 4.5"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}
