import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, ChevronRight, CalendarClock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact The Kas Group to hire elite B2B SaaS sales leaders or Ph.D.-vetted AI/ML and data engineering talent. Reach Chris Stinson directly.",
};

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        value: "chris@thekasgroup.com",
        detail: "Best for detailed inquiries",
        href: "mailto:chris@thekasgroup.com",
        cta: "Send an email",
    },
    {
        icon: CalendarClock,
        title: "Schedule a Call",
        value: "Free discovery call",
        detail: "Tell us about your hiring need",
        href: "mailto:chris@thekasgroup.com?subject=Discovery%20Call%20Request",
        cta: "Request a call",
    },
    {
        icon: MapPin,
        title: "Based In",
        value: "Alpharetta, GA",
        detail: "Serving clients across North America",
        href: null,
        cta: null,
    },
    {
        icon: Clock,
        title: "Hours",
        value: "Mon \u2013 Fri, 9am \u2013 6pm ET",
        detail: "Flexible to your schedule",
        href: null,
        cta: null,
    },
];

const faqs = [
    {
        q: "What should I include in my first message?",
        a: "A short overview of the role(s) you're hiring for, your company stage, and rough timing. If you're a candidate, a summary of your background and target roles is helpful. Chris will respond with next steps.",
    },
    {
        q: "How fast will I hear back?",
        a: "We typically respond to inquiries within one business day. For time-sensitive searches, mention urgency in your message and we'll prioritize it.",
    },
    {
        q: "Where is The Kas Group located?",
        a: "We're headquartered in Alpharetta, Georgia (metro Atlanta) and serve clients across North America, working fully remote.",
    },
];

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-grey-50 px-6 py-24 sm:py-28 lg:px-8 border-b border-grey-100">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-accent">
                        Contact
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                        Let&apos;s find your next great hire.
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-grey-500 font-medium max-w-2xl mx-auto">
                        Tell us about the role, your team, or the talent you&apos;re looking for, and
                        we&apos;ll get back to you within one business day.
                    </p>
                </div>
            </section>

            {/* Contact Methods Grid */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method) => (
                        <div
                            key={method.title}
                            className="rounded-2xl border border-grey-200 bg-grey-50 p-6 flex flex-col"
                        >
                            <method.icon className="h-7 w-7 text-blue-accent mb-4" />
                            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-900">
                                {method.title}
                            </h2>
                            <p className="mt-2 text-lg font-semibold text-navy-900">{method.value}</p>
                            <p className="mt-1 text-sm text-grey-500">{method.detail}</p>
                            {method.href ? (
                                <Link
                                    href={method.href}
                                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-accent hover:text-blue-hover hover:underline"
                                >
                                    {method.cta} <ChevronRight className="h-4 w-4" />
                                </Link>
                            ) : null}
                        </div>
                    ))}
                </div>
            </section>

            {/* Form + Aside */}
            <section className="border-t border-grey-100 bg-grey-50">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl mb-2">
                                Send us a message
                            </h2>
                            <p className="text-grey-500 mb-8">
                                Share a few details and we&apos;ll take it from there.
                            </p>
                            <div className="rounded-3xl border border-grey-200 bg-white p-6 sm:p-10 shadow-sm">
                                <ContactForm />
                            </div>
                        </div>

                        <aside className="space-y-6">
                            <div className="rounded-3xl border border-grey-200 bg-white p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-navy-900 mb-4">Quick links</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/recruit/sales" className="text-grey-600 hover:text-blue-accent transition-colors font-medium">
                                            Sell &amp; hire sales talent
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/recruit/ai" className="text-grey-600 hover:text-blue-accent transition-colors font-medium">
                                            AI / data / technical recruiting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/recruit/fractional-sales" className="text-grey-600 hover:text-blue-accent transition-colors font-medium">
                                            Fractional sales recruiting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/methodology" className="text-grey-600 hover:text-blue-accent transition-colors font-medium">
                                            Our methodology
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-3xl bg-navy-900 p-8 text-white shadow-sm">
                                <h3 className="text-lg font-bold mb-3">Prefer to just call?</h3>
                                <p className="text-grey-300 text-sm mb-5">
                                    Email is the fastest way to reach us, but we&rsquo;re happy to
                                    schedule a free discovery call to talk through your hiring needs.
                                </p>
                                <Link
                                    href="mailto:chris@thekasgroup.com?subject=Discovery%20Call%20Request"
                                    className="inline-flex items-center gap-2 rounded-full bg-blue-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors"
                                >
                                    Request a call <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl mb-12 text-center">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((item) => (
                            <div key={item.q} className="rounded-2xl border border-grey-200 bg-grey-50 p-6">
                                <h3 className="font-bold text-navy-900">{item.q}</h3>
                                <p className="mt-2 leading-relaxed text-grey-600">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
