"use client";

import { useId, useState } from "react";
import type { HiringToolId } from "@/lib/hiring-tools";
import { fireResultsEmailed } from "@/lib/tool-results-email-track";

export const EMAIL_RESULTS_COPY = {
    label: "Email me my results",
    emailLabel: "Email",
    placeholder: "you@company.com",
    button: "Email me my results",
    sending: "Sending...",
    sent: "Sent. Check your inbox.",
    invalid: "Enter a valid email address.",
    missing: "Generate a result first.",
    failed: "Could not send just now. Copy the result summary instead.",
} as const;

type Props = {
    tool: HiringToolId;
    getSummary: () => string;
    className?: string;
};

export default function EmailResultsForm({ tool, getSummary, className = "" }: Props) {
    const emailId = useId();
    const [email, setEmail] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [message, setMessage] = useState<string | null>(null);

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        const summary = getSummary().trim();
        if (!summary) {
            setStatus("error");
            setMessage(EMAIL_RESULTS_COPY.missing);
            return;
        }
        setStatus("sending");
        setMessage(null);
        try {
            const res = await fetch("/api/tool-results-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, company: honeypot, tool, summary }),
            });
            const data = (await res.json().catch(() => ({}))) as { error?: string; message?: string; sent?: boolean; ok?: boolean };
            if (res.status === 400) {
                setStatus("error");
                setMessage(data.error || EMAIL_RESULTS_COPY.invalid);
                return;
            }
            if (!res.ok) {
                setStatus("error");
                setMessage(data.error || EMAIL_RESULTS_COPY.failed);
                return;
            }
            if (data.sent) {
                setStatus("sent");
                setMessage(data.message || EMAIL_RESULTS_COPY.sent);
                fireResultsEmailed(tool);
                return;
            }
            setStatus("error");
            setMessage(data.message || EMAIL_RESULTS_COPY.failed);
        } catch {
            setStatus("error");
            setMessage(EMAIL_RESULTS_COPY.failed);
        }
    }

    return (
        <form onSubmit={onSubmit} className={`space-y-3 ${className}`.trim()}>
            <label htmlFor={emailId} className="block text-sm font-semibold text-navy-900">
                {EMAIL_RESULTS_COPY.label}
            </label>
            <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                    id={emailId}
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (status !== "idle") {
                            setStatus("idle");
                            setMessage(null);
                        }
                    }}
                    placeholder={EMAIL_RESULTS_COPY.placeholder}
                    autoComplete="email"
                    aria-label={EMAIL_RESULTS_COPY.emailLabel}
                    className="w-full flex-1 rounded-xl border border-grey-200 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                />
                <button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-accent disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {status === "sending" ? EMAIL_RESULTS_COPY.sending : EMAIL_RESULTS_COPY.button}
                </button>
            </div>
            {message ? (
                <p className={`text-sm ${status === "sent" ? "text-grey-600" : "text-slate-600"}`} role="status">
                    {message}
                </p>
            ) : null}
        </form>
    );
}
