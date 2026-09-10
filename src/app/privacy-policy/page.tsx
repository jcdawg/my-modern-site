import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "The Kas Group's privacy policy explains what information we collect (including via Google Analytics), how we use it, and the choices you have about your data.",
};

const sections = [
    {
        heading: "1. Who We Are",
        paragraphs: [
            "The Kas Group (\"the Kas Group\", \"we\", \"us\", or \"our\") is a boutique recruiting firm headquartered in Alpharetta, Georgia, specializing in B2B SaaS sales leadership and AI/ML and data engineering talent. We operate the website located at https://www.thekasgroup.com (the \"Site\").",
            "This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the Site, and our practices for collecting, using, maintaining, protecting, and disclosing that information.",
        ],
    },
    {
        heading: "2. Information We Collect",
        paragraphs: [
            "We collect two broad categories of information: (a) information you voluntarily provide to us, and (b) information collected automatically as you navigate the Site.",
        ],
        bullets: [
            "Information you provide: When you contact us by email or request a consultation (for example, via chris@thekasgroup.com), we collect the information you choose to send us, such as your name, email address, company, and the contents of your inquiry.",
            "Information collected automatically: We may collect certain information automatically when you visit the Site, including your browser type and version, device type, operating system, pages viewed, referring URL, IP address, and the dates and times of your visits.",
        ],
    },
    {
        heading: "3. Cookies and Analytics",
        paragraphs: [
            "Like most websites, the Site uses cookies and similar technologies to help it function properly and to understand how visitors use the Site.",
            "We use Google Analytics (our Analytics ID: G-HSFJV4BFRG) to collect standard usage data, such as how many people visit the Site, which pages are viewed, and how visitors arrive at the Site. Google Analytics uses cookies to collect this information. You can learn more about how Google uses data from partner sites at https://policies.google.com/technologies/partner-sites.",
            "You can refuse or disable cookies through the settings in your browser. Disabling cookies may affect your experience on some parts of the Site.",
        ],
    },
    {
        heading: "4. How We Use Your Information",
        paragraphs: ["We use the information we collect to:"],
        bullets: [
            "Respond to your inquiries and communicate with you about our services.",
            "Evaluate potential clients, candidates, and recruiting engagements.",
            "Operate, maintain, and improve the Site.",
            "Analyze usage trends and improve site performance and content.",
            "Comply with legal obligations and protect our rights and the rights of others.",
        ],
    },
    {
        heading: "5. Sharing and Disclosure",
        paragraphs: [
            "We do not sell your personal information. We may share information in the following limited circumstances:",
        ],
        bullets: [
            "With candidates, clients, and prospective employers as necessary to provide recruiting services (for example, sharing a candidate's background as part of a vetting or placement process).",
            "With service providers that support our operations (such as analytics providers), who are bound by confidentiality obligations.",
            "When required by law, regulation, legal process, or governmental request.",
            "In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of that transaction.",
        ],
    },
    {
        heading: "6. Data Security and Retention",
        paragraphs: [
            "We take reasonable measures to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee its absolute security.",
            "We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.",
        ],
    },
    {
        heading: "7. Your Choices and Rights",
        paragraphs: [
            "Where applicable law provides you with rights regarding your personal information, you may have the right to access, correct, update, or delete the personal information we hold about you, and to object to or restrict certain processing of that information.",
            "Depending on your state of residence, you may have additional rights, including the right to opt out of \"sales\" or \"sharing\" of personal information and the right to non-discrimination for exercising your privacy rights. We do not sell your personal information.",
            "To exercise any of these rights, please contact us using the details in Section 8 below. We will respond to verifiable requests as required by applicable law.",
        ],
    },
    {
        heading: "8. Contact Us",
        paragraphs: [
            "If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:",
        ],
        contact: {
            company: "The Kas Group",
            email: "chris@thekasgroup.com",
            location: "Alpharetta, Georgia, USA",
        },
    },
    {
        heading: "9. Changes to This Privacy Policy",
        paragraphs: [
            "We may update this Privacy Policy from time to time. The date at the bottom of this page indicates when it was last revised. Any changes become effective when we post the revised policy on this page. We encourage you to review this page periodically for the latest information about our privacy practices.",
        ],
    },
    ];

export default function PrivacyPolicyPage() {
return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-grey-50 px-6 py-24 sm:py-28 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-accent">
                        Legal
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-grey-500 font-medium">
                        How The Kas Group collects, uses, and protects your information.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.heading}>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">
                                {section.heading}
                            </h2>
                            {section.paragraphs?.map((text, i) => (
                                <p key={i} className="leading-relaxed text-grey-600 mb-4">
                                    {text}
                                </p>
                            ))}
                            {section.bullets ? (
                                <ul className="space-y-3 mt-2 mb-4">
                                    {section.bullets.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex gap-3 leading-relaxed text-grey-600"
                                        >
                                            <span className="text-blue-accent font-bold shrink-0">
                                                •
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                            {section.contact ? (
                                <div className="mt-4 rounded-2xl border border-grey-200 bg-grey-50 p-6 leading-relaxed text-grey-600">
                                    <p className="font-bold text-navy-900">
                                        {section.contact.company}
                                    </p>
                                    <p className="mt-2">
                                        Email:{" "}
                                        <Link
                                            href="mailto:chris@thekasgroup.com"
                                            className="text-blue-accent hover:underline font-medium"
                                        >
                                            {section.contact.email}
                                        </Link>
                                    </p>
                                    <p className="mt-1">{section.contact.location}</p>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>

                {/* Last updated note */}
                <p className="mt-16 border-t border-grey-200 pt-6 text-sm text-grey-500">
                    Last updated: September 2026. This page is provided for informational
                    purposes and does not constitute legal advice.
                </p>
            </section>
        </div>
    );
}