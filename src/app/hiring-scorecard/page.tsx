import Link from "next/link";
import ScorecardBuilder from "./ScorecardBuilder";
import ExampleLightbox from "./ExampleLightbox";

const FAQS = [
    {
        q: "What is a hiring scorecard?",
        a: "A hiring scorecard defines the mission, outcomes, competencies and interview questions for a role before you interview anyone. Each competency has questions that test it, a clear picture of what a 5 looks like, and red flags, so every candidate is rated on the same 1 to 5 scale.",
    },
    {
        q: "How do you build a hiring scorecard for a sales role?",
        a: "Start with the mission and the outcomes at 90 days, 6 months and 12 months. Add competencies that cover quota ownership, ramp, deal motion and discovery. Put 1 to 2 questions under each competency, write what a 5 looks like in concrete behaviors, and keep a short list of additional cross-cutting questions.",
    },
    {
        q: "How many competencies should a scorecard have?",
        a: "Four to six is enough for most seats. Fewer and you miss signal. More and the panel spends the interview on process instead of judgment.",
    },
    {
        q: "How do you rate candidates fairly?",
        a: "Write what a 5 looks like and the red flags before the first interview. Ask the competency questions of every candidate. Score each competency 1 to 5 with notes, then compare the cards, not the vibes.",
    },
    {
        q: "Does this tool store my job description?",
        a: "No. Pasted text is sent to an AI provider to build the scorecard and is not stored by us. An optional email goes to The Kas Group and is used to follow up.",
    },
    {
        q: "Can I use this for AI or data roles?",
        a: "Yes. When the role looks like AI, data or ML, the scorecard adds sections for technical depth, evaluation approach and tooling, on top of the standard mission, outcomes and per-competency questions.",
    },
];

const link = "text-blue-accent hover:underline font-semibold";

export default function HiringScorecardPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Hiring Scorecard Builder, by The Kas Group",
        url: "https://www.thekasgroup.com/hiring-scorecard",
        description:
            "Free tool that turns a job description into a hiring scorecard with outcomes, competencies rated 1 to 5, interview questions and reference checks.",
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-6">
                    <p className="text-sm font-semibold text-blue-accent">Hiring Scorecard Builder, by The Kas Group</p>
                    <p className="text-sm">
                        <Link href="/tools" className={link}>More hiring tools</Link>
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
                        Build a hiring scorecard before the first interview
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                        <div className="lg:col-span-3 p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent">
                            <h2 className="text-xl font-bold text-navy-900 mb-3">Direct answer</h2>
                            <p className="text-base text-grey-700 leading-relaxed">
                                A hiring scorecard defines the outcomes, skills and interview questions for a role before you interview anyone. Paste a job description below to build one with per-competency questions, a clear &ldquo;what a 5 looks like&rdquo; anchor, must-haves and reference checks. Pair it with{" "}
                                <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions</Link>
                                {" "}and{" "}
                                <Link href="/guides/cost-of-a-bad-hire" className={link}>the cost of a bad hire</Link>
                                {" "}when the seat is sales or GTM.
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <ExampleLightbox />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <ScorecardBuilder />
                </div>
            </section>

            <section className="bg-white px-6 pb-20 lg:px-8 border-t border-grey-100">
                <div className="mx-auto max-w-4xl space-y-16 text-grey-700 leading-relaxed text-lg">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">What a good hiring scorecard includes</h2>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Mission: one sentence on why the seat exists.</li>
                            <li>Outcomes at 90 days, 6 months and 12 months.</li>
                            <li>Competencies rated 1 to 5, each with questions that test it, what a 5 looks like, an optional 3 bar, and red flags.</li>
                            <li>A short list of additional interview questions for motivation, culture and logistics.</li>
                            <li>Must-haves versus nice-to-haves.</li>
                            <li>Reference-check questions for the same competencies.</li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Worked example (Account Executive)</h2>
                        <p className="text-sm text-grey-500">From a sample Account Executive run of this tool. Trimmed for the page. Not a real open role.</p>
                        <div className="rounded-3xl border border-grey-200 p-6 space-y-4 bg-grey-50">
                            <p className="font-bold text-navy-900">Role: Account Executive, Mid-Market B2B SaaS</p>
                            <p><span className="font-semibold">Mission:</span> Drive revenue growth by selling our SaaS platform to VP Sales in mid-market companies.</p>
                            <p className="font-semibold text-navy-900">90 day outcomes</p>
                            <ul className="list-disc pl-6">
                                <li>Close first deal</li>
                                <li>Ramp up to quota ownership</li>
                            </ul>
                            <p className="font-semibold text-navy-900">Sample competency: Hunting and Prospecting</p>
                            <p><span className="font-semibold">What a 5 looks like:</span> Consistently identifies and engages high-value prospects. Demonstrates a strategic approach to outbound campaigns.</p>
                            <p><span className="font-semibold">What a 3 looks like:</span> Actively uses outbound channels but may need guidance on targeting.</p>
                            <p><span className="font-semibold">Red flags:</span> Relies solely on inbound leads.</p>
                            <p><span className="font-semibold">Questions for this competency:</span></p>
                            <ul className="list-disc pl-6">
                                <li>Can you describe your most successful outbound campaign and why it worked?</li>
                                <li>How do you identify and prioritize target accounts?</li>
                            </ul>
                            <p className="text-sm text-grey-500">Built with The Kas Group · sample AE run · Scorecard ID: example-ae-001</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900">Frequently Asked Questions</h2>
                        {FAQS.map((f) => (
                            <div key={f.q} className="space-y-2">
                                <h3 className="font-bold text-navy-900 text-xl">{f.q}</h3>
                                <p className="text-grey-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Related</h2>
                        <p>
                            <Link href="/tools" className={link}>More hiring tools</Link>
                            {" · "}
                            <Link href="/programs" className={link}>Programs</Link>
                            {" · "}
                            <Link href="/guides/cost-of-a-bad-hire" className={link}>Cost of a bad hire</Link>
                            {" · "}
                            <Link href="/pip-calculator" className={link}>PIP calculator</Link>
                            {" · "}
                            <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions</Link>
                            {" · "}
                            <Link href="/guides/how-to-hire-senior-account-executive" className={link}>How to hire a senior AE</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
