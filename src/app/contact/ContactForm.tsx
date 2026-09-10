"use client";

import { useState } from "react";
import { Send, CheckCircle2, XCircle } from "lucide-react";
import {
    FORMSPREE_ENDPOINT,
    isFormspreeConfigured,
    CONTACT_EMAIL,
} from "@/lib/contact-config";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-grey-200 bg-white text-navy-900 placeholder:text-grey-400 focus:outline-none focus:border-blue-accent focus:ring-1 focus:ring-blue-accent/20 transition-all text-sm";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        topic: "Hiring",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Fallback: open a pre-filled email if Formspree isn't configured yet.
    const openMailto = () => {
        const subject = encodeURIComponent(
            `[${form.topic}] ${form.name}${form.company ? ` - ${form.company}` : ""}`
        );
        const body = encodeURIComponent(
            [
                "Name: " + form.name,
                "Email: " + form.email,
                form.company && "Company: " + form.company,
                "Topic: " + form.topic,
                "",
                "Message:",
                form.message,
            ]
                .filter(Boolean)
                .join("\n")
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormspreeConfigured()) {
            setStatus("idle");
            openMailto();
            return;
        }

        setStatus("submitting");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    company: form.company,
                    topic: form.topic,
                    message: form.message,
                    _subject: `[Website] ${form.topic} - ${form.name}`,
                    _replyto: form.email,
                }),
            });
            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClasses}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Work Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClasses}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className={inputClasses}
                    />
                </div>
                <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-navy-900 mb-1.5">
                        I&apos;m interested in *
                    </label>
                    <select
                        id="topic"
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        className={inputClasses}
                    >
                        <option value="Hiring">Hiring sales talent</option>
                        <option value="Hiring AI/Technical">Hiring AI / data / technical talent</option>
                        <option value="Fractional">Fractional sales recruiting</option>
                        <option value="Candidate">I&apos;m a candidate</option>
                        <option value="Other">Something else</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                    How can we help? *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about the role, your team, or the talent you're looking for."
                    className={inputClasses}
                />
            </div>

            <div className="pt-2">
                {status === "success" ? (
                    <div className="rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-4 flex items-center gap-3 font-semibold text-sm">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                        Thanks! Your message is on its way. We&apos;ll get back to you within one business day.
                    </div>
                ) : status === "error" ? (
                    <div className="rounded-2xl bg-red-50 border border-red-200 text-red-800 px-4 py-4 flex items-center gap-3 font-semibold text-sm">
                        <XCircle className="h-5 w-5 text-red-600" />
                        Something went wrong sending your message. Please email us directly at chris@thekasgroup.com.
                    </div>
                ) : (
                    <>
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover hover:scale-[1.02] transition-all shadow-lg shadow-blue-accent/20 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                        >
                            {status === "submitting" ? (
                                "Sending…"
                            ) : (
                                <>
                                    Send message
                                    <Send className="h-5 w-5" />
                                </>
                            )}
                        </button>
                        <p className="mt-3 text-xs text-grey-500">
                            Your message goes straight to our inbox. We reply within one business day.
                        </p>
                    </>
                )}
            </div>
        </form>
    );
}
