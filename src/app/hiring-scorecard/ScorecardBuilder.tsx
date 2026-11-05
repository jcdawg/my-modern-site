"use client";

import { useState } from "react";
import type { Scorecard } from "@/lib/hiring-scorecard/types";
import { MAX_INPUT_CHARS } from "@/lib/hiring-scorecard/prompt";

function scorecardPlainText(s: Scorecard): string {
    const lines: string[] = [
        `Hiring Scorecard Builder, by The Kas Group`,
        `Scorecard ID: ${s.scorecardId}`,
        `Role: ${s.roleTitle}`,
        "",
        `1. Mission`,
        s.mission,
        "",
        `2. Outcomes`,
        `90 days:`,
        ...s.outcomes.days90.map((x) => `  - ${x}`),
        `6 months:`,
        ...s.outcomes.months6.map((x) => `  - ${x}`),
        `12 months:`,
        ...s.outcomes.months12.map((x) => `  - ${x}`),
        "",
        `3. Competencies (rate 1 to 5)`,
    ];
    s.competencies.forEach((c, i) => {
        lines.push(`${i + 1}. ${c.name}`);
        lines.push(`   What a 5 looks like: ${c.whatFiveLooksLike}`);
        lines.push(`   Red flags: ${c.redFlags}`);
        lines.push(`   Interview questions:`);
        c.interviewQuestions.forEach((q) => lines.push(`     - ${q}`));
        lines.push(`   Reference-check questions:`);
        c.referenceQuestions.forEach((q) => lines.push(`     - ${q}`));
    });
    lines.push("", `4. Must-haves`);
    s.mustHaves.forEach((x) => lines.push(`  - ${x}`));
    lines.push("", `5. Nice-to-haves`);
    s.niceToHaves.forEach((x) => lines.push(`  - ${x}`));
    lines.push("", `Built with The Kas Group`, `https://www.thekasgroup.com/hiring-scorecard`);
    return lines.join("\n");
}

export default function ScorecardBuilder() {
    const [jobDescription, setJobDescription] = useState("");
    const [seniority, setSeniority] = useState("");
    const [mustHaves, setMustHaves] = useState("");
    const [dealBreakers, setDealBreakers] = useState("");
    const [teamSize, setTeamSize] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [scorecard, setScorecard] = useState<Scorecard | null>(null);
    const [email, setEmail] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [emailMsg, setEmailMsg] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    async function onBuild() {
        setError(null);
        setEmailMsg(null);
        setLoading(true);
        setScorecard(null);
        try {
            const res = await fetch("/api/hiring-scorecard", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ jobDescription, seniority, mustHaves, dealBreakers, teamSize }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Request failed");
            setScorecard(data.scorecard);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    async function onCopy() {
        if (!scorecard) return;
        await navigator.clipboard.writeText(scorecardPlainText(scorecard));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    function onPrint() {
        window.print();
    }

    async function onEmail() {
        if (!scorecard) return;
        setEmailMsg(null);
        const res = await fetch("/api/hiring-scorecard/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, company: honeypot, scorecard }),
        });
        const data = await res.json();
        if (!res.ok) {
            setEmailMsg(data.error || "Could not send.");
            return;
        }
        setEmailMsg(data.message || "Thanks.");
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                        Job description or role details
                    </label>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        rows={10}
                        maxLength={MAX_INPUT_CHARS}
                        placeholder="Paste the job description, or describe the seat: title, outcomes, must-haves, team."
                        className="w-full rounded-2xl border border-grey-200 px-4 py-3 text-base text-grey-800 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                    />
                    <p className="mt-1 text-xs text-grey-500">
                        {jobDescription.length.toLocaleString()} / {MAX_INPUT_CHARS.toLocaleString()} characters. Pasted text is sent to an AI provider to build the scorecard and is not stored by us. An optional email goes to The Kas Group and is used to follow up.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        value={seniority}
                        onChange={(e) => setSeniority(e.target.value)}
                        placeholder="Seniority (optional)"
                        className="rounded-xl border border-grey-200 px-4 py-3 text-sm"
                    />
                    <input
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        placeholder="Team size (optional)"
                        className="rounded-xl border border-grey-200 px-4 py-3 text-sm"
                    />
                    <input
                        value={mustHaves}
                        onChange={(e) => setMustHaves(e.target.value)}
                        placeholder="Must-haves (optional)"
                        className="rounded-xl border border-grey-200 px-4 py-3 text-sm"
                    />
                    <input
                        value={dealBreakers}
                        onChange={(e) => setDealBreakers(e.target.value)}
                        placeholder="Deal-breakers (optional)"
                        className="rounded-xl border border-grey-200 px-4 py-3 text-sm"
                    />
                </div>
                <button
                    type="button"
                    onClick={onBuild}
                    disabled={loading}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-accent text-white font-bold hover:bg-blue-hover disabled:opacity-60"
                >
                    {loading ? "Building scorecard..." : "Build my scorecard"}
                </button>
                {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
            </div>

            {scorecard && (
                <div id="scorecard-print" className="space-y-8 border border-grey-200 rounded-3xl p-6 md:p-10 bg-white">
                    <header className="border-b border-grey-100 pb-4">
                        <p className="text-sm font-semibold text-blue-accent">Hiring Scorecard Builder, by The Kas Group</p>
                        <h2 className="text-3xl font-bold text-navy-900 mt-2">{scorecard.roleTitle}</h2>
                        <p className="text-xs text-grey-500 mt-2">Scorecard ID: {scorecard.scorecardId}</p>
                    </header>

                    <section>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">1. Mission</h3>
                        <p className="text-grey-700">{scorecard.mission}</p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-bold text-navy-900">2. Outcomes</h3>
                        <div>
                            <p className="font-semibold text-navy-900">90 days</p>
                            <ul className="list-disc pl-6 text-grey-700">{scorecard.outcomes.days90.map((x) => <li key={x}>{x}</li>)}</ul>
                        </div>
                        <div>
                            <p className="font-semibold text-navy-900">6 months</p>
                            <ul className="list-disc pl-6 text-grey-700">{scorecard.outcomes.months6.map((x) => <li key={x}>{x}</li>)}</ul>
                        </div>
                        <div>
                            <p className="font-semibold text-navy-900">12 months</p>
                            <ul className="list-disc pl-6 text-grey-700">{scorecard.outcomes.months12.map((x) => <li key={x}>{x}</li>)}</ul>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h3 className="text-xl font-bold text-navy-900">3. Competencies (rate 1 to 5)</h3>
                        {scorecard.competencies.map((c) => (
                            <div key={c.name} className="rounded-2xl bg-grey-50 p-5 space-y-2">
                                <p className="font-bold text-navy-900">{c.name}</p>
                                <p className="text-grey-700"><span className="font-semibold">What a 5 looks like:</span> {c.whatFiveLooksLike}</p>
                                <p className="text-grey-700"><span className="font-semibold">Red flags:</span> {c.redFlags}</p>
                                <div>
                                    <p className="font-semibold text-navy-900">Interview questions</p>
                                    <ul className="list-disc pl-6 text-grey-700">{c.interviewQuestions.map((q) => <li key={q}>{q}</li>)}</ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-navy-900">Reference-check questions</p>
                                    <ul className="list-disc pl-6 text-grey-700">{c.referenceQuestions.map((q) => <li key={q}>{q}</li>)}</ul>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">4. Must-haves</h3>
                        <ul className="list-disc pl-6 text-grey-700">{scorecard.mustHaves.map((x) => <li key={x}>{x}</li>)}</ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">5. Nice-to-haves</h3>
                        <ul className="list-disc pl-6 text-grey-700">{scorecard.niceToHaves.map((x) => <li key={x}>{x}</li>)}</ul>
                    </section>

                    <footer className="border-t border-grey-100 pt-4 space-y-2">
                        <p className="text-sm font-semibold text-navy-900">Built with The Kas Group</p>
                        <p className="text-sm text-grey-600">
                            Hiring sales, GTM, AI or data talent?{" "}
                            <a href="/programs" className="text-blue-accent hover:underline font-semibold">
                                The Kas Group
                            </a>
                        </p>
                        <p className="text-xs text-grey-400">Scorecard ID: {scorecard.scorecardId}</p>
                    </footer>

                    <div className="flex flex-wrap gap-3 print:hidden">
                        <button type="button" onClick={onCopy} className="px-5 py-3 rounded-full border border-grey-300 font-semibold text-sm">
                            {copied ? "Copied" : "Copy"}
                        </button>
                        <button type="button" onClick={onPrint} className="px-5 py-3 rounded-full border border-grey-300 font-semibold text-sm">
                            Download PDF
                        </button>
                    </div>

                    <div className="print:hidden rounded-2xl bg-grey-50 p-5 space-y-3">
                        <p className="text-sm font-semibold text-navy-900">Want Chris to follow up? Leave your email</p>
                        <p className="text-xs text-grey-500">Optional. You keep a copy with Copy or Download PDF. If you leave an email, Chris may get in touch.</p>
                        <input
                            type="text"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="flex-1 rounded-xl border border-grey-200 px-4 py-3 text-sm"
                            />
                            <button type="button" onClick={onEmail} className="px-5 py-3 rounded-full bg-navy-900 text-white font-semibold text-sm">
                                Send to Chris
                            </button>
                        </div>
                        {emailMsg && <p className="text-sm text-grey-600">{emailMsg}</p>}
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{__html: `@media print { body * { visibility: hidden !important; } #scorecard-print, #scorecard-print * { visibility: visible !important; } #scorecard-print { position: absolute; left: 0; top: 0; width: 100%; border: none; } }`}} />
        </div>
    );
}
