import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "The Kas Group's terms of service govern the use of our website and the recruiting services we provide.",
};

const sections = [
    {
        heading: "1. Acceptance of Terms",
        paragraphs: [
            "These Terms of Service (\"Terms\") govern your access to and use of the website at https://www.thekasgroup.com (the \"Site\") and the recruiting services offered by The Kas Group (\"we\", \"us\", or \"our\"), a boutique recruiting firm headquartered in Alpharetta, Georgia.",
            "By accessing the Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.",
        ],
    },
    {
        heading: "2. Description of Services",
        paragraphs: [
            "The Kas Group provides executive search and recruiting services for B2B SaaS sales leadership (including CRO, VP of Sales, and enterprise Account Executives) and AI/ML and data engineering talent. Our engagement models may include retained search, fractional sales recruiting, and other arrangements as agreed in a separate written agreement.",
            "Any specific recruiting engagement is governed by a separate written agreement between you and The Kas Group. In the event of a conflict between these Terms and such an agreement, the specific agreement will control with respect to that engagement.",
        ],
    },
    {
        heading: "3. Use of the Site",
        paragraphs: [
            "You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Site by, any third party. You agree not to attempt to gain unauthorized access to the Site, our servers, or any systems connected to the Site.",
            "The content on the Site, including guides, articles, and other materials, is provided for general informational purposes only and does not constitute professional, legal, or financial advice.",
        ],
    },
    {
        heading: "4. Confidentiality",
        paragraphs: [
            "Recruiting inherently involves the exchange of confidential information (including candidate details, client hiring requirements, compensation data, and business strategies). You agree to hold all non-public information shared by The Kas Group in confidence and to use it solely for the purposes of your recruiting engagement.",
        ],
    },
    {
        heading: "5. Intellectual Property",
        paragraphs: [
            "All content on the Site, including text, graphics, logos, and other materials, is owned by or licensed to The Kas Group and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any Site content without our prior written consent.",
        ],
    },
    {
        heading: "6. Disclaimers and Limitation of Liability",
        paragraphs: [
            "The Site and its content are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied, including without limitation implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
            "To the fullest extent permitted by law, The Kas Group will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or related to your use of the Site or our services.",
        ],
    },
    {
        heading: "7. Indemnification",
        paragraphs: [
            "You agree to indemnify, defend, and hold harmless The Kas Group and its affiliates, officers, and employees from and against any claims, liabilities, damages, losses, and expenses arising out of your use of the Site or your breach of these Terms.",
        ],
    },
    {
        heading: "8. Governing Law",
        paragraphs: [
            "These Terms are governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict-of-law principles. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Georgia.",
        ],
    },
    {
        heading: "9. Changes to These Terms",
        paragraphs: [
            "We may revise these Terms at any time by updating this page. Your continued use of the Site after any changes become effective constitutes your acceptance of the revised Terms.",
        ],
    },
    {
        heading: "10. Contact",
        paragraphs: [
            "If you have questions about these Terms, contact us at chris@thekasgroup.com or at The Kas Group, Alpharetta, Georgia, USA.",
        ],
    },
    ];

export default function TermsOfServicePage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-grey-50 px-6 py-24 sm:py-28 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-accent">
                        Legal
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                        Terms of Service
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-grey-500 font-medium">
                        The terms that govern your use of our website and services.
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
                            {section.paragraphs.map((text, i) => (
                                <p key={i} className="leading-relaxed text-grey-600 mb-4">
                                    {text}
                                </p>
                            ))}
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