import Link from "next/link";
import GtmRoleMismatch from "./GtmRoleMismatch";

const link = "text-blue-accent hover:underline font-semibold";

export default function GtmRoleMismatchPage() {
    const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "GTM Role Mismatch Diagnostic, by The Kas Group",
        url: "https://www.thekasgroup.com/gtm-role-mismatch",
        description:
            "Free diagnostic that compares a sales job description with the company text. Twelve separate questions score the GTM stage and the seat; the mismatch percentage is computed from those answers.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: {
            "@type": "Organization",
            name: "The Kas Group",
            url: "https://www.thekasgroup.com",
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-6">
                    <p className="text-sm font-semibold text-blue-accent">GTM Role Mismatch, by The Kas Group</p>
                    <p className="text-sm">
                        <Link href="/tools" className={link}>More hiring tools</Link>
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-900 leading-tight">GTM Role Mismatch</h1>
                    <div className="p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent">
                        <h2 className="text-xl font-bold text-navy-900 mb-3">Direct answer</h2>
                        <p className="text-base text-grey-600 leading-relaxed">
                            Paste the job description next to the company. Twelve separate questions score the stage and the seat. The percentage is the distance between those answers, not a number a model wrote. Fix the seat first, then build the{" "}
                            <Link href="/hiring-scorecard" className={link}>hiring scorecard</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <GtmRoleMismatch />
                </div>
            </section>

            <section className="bg-white px-6 pb-20 lg:px-8 border-t border-grey-100">
                <div className="mx-auto max-w-4xl space-y-16 pt-16 text-grey-600 leading-relaxed text-lg">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">How the number is calculated</h2>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong className="text-navy-900">Two classifications.</strong> One reads the company stage. The other reads the seat the job description will attract.
                            </li>
                            <li>
                                <strong className="text-navy-900">Ten yes-or-no checks.</strong> Each tests a separate claim, such as whether a founder is still selling and whether the job description expects a team.
                            </li>
                            <li>
                                <strong className="text-navy-900">Computed, not written.</strong> The mismatch number is the distance between those answers, computed in code. The model is not allowed to write it.
                            </li>
                            <li>
                                <strong className="text-navy-900">Verbatim quotes only.</strong> A quote is shown only if it appears verbatim in the text you pasted. Thin text stays near 50% and the verdict is &ldquo;Not enough to call.&rdquo;
                            </li>
                            <li>
                                <strong className="text-navy-900">Optional link.</strong> An https link is optional. Private and local addresses are refused.
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Does this tool store my job description?</h2>
                        <p>
                            No. Pasted text is sent to an AI provider to answer the twelve questions and is not stored by us. Analytics record only the stage, the seat, the score and the verdict, never the text.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Related</h2>
                        <p>
                            <Link href="/tools" className={link}>More hiring tools</Link>
                            {" · "}
                            <Link href="/hiring-scorecard" className={link}>Hiring scorecard</Link>
                            {" · "}
                            <Link href="/bad-hire-calculator" className={link}>Cost of a Bad Sales Hire Calculator</Link>
                            {" · "}
                            <Link href="/guides/who-to-hire-vp-sales-startup" className={link}>Who to Hire: VP of Sales for Startups</Link>
                            {" · "}
                            <Link href="/contact#contact-form" className={link}>Schedule a consultation</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
