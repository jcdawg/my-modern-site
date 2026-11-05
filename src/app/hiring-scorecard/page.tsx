import Link from "next/link";
import ScorecardBuilder from "./ScorecardBuilder";

const FAQS = [
    {
        q: "What is a hiring scorecard?",
        a: "A hiring scorecard defines the mission, outcomes, competencies and interview questions for a role before you interview anyone. Every candidate is rated on the same 1 to 5 scale so the team can compare people fairly.",
    },
    {
        q: "How do you build a hiring scorecard for a sales role?",
        a: "Start with the mission and the outcomes at 90 days, 6 months and 12 months. Add competencies that cover quota ownership, ramp, deal motion and discovery. Map interview and reference questions to each competency. This tool adds those sales focused sections when the role looks like GTM or sales.",
    },
    {
        q: "How many competencies should a scorecard have?",
        a: "Four to six is enough for most seats. Fewer and you miss signal. More and the panel spends the interview on process instead of judgment.",
    },
    {
        q: "How do you rate candidates fairly?",
        a: "Write what a 5 looks like and the red flags before the first interview. Ask every candidate the same mapped questions. Score each competency 1 to 5 with notes, then compare the cards, not the vibes.",
    },
    {
        q: "Does this tool store my job description?",
        a: "No. Pasted text is sent to an AI provider to build the scorecard and is not stored by us. Optional email capture is separate and only used if you choose to leave an address.",
    },
    {
        q: "Can I use this for AI or data roles?",
        a: "Yes. When the role looks like AI, data or ML, the scorecard adds sections for technical depth, evaluation approach and tooling, on top of the standard mission, outcomes and competencies.",
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
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
                        Build a hiring scorecard before the first interview
                    </h1>
                    <div className="p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent">
                        <h2 className="text-xl font-bold text-navy-900 mb-3">Direct answer</h2>
                        <p className="text-base text-grey-700 leading-relaxed">
                            A hiring scorecard defines the outcomes, skills and interview questions for a role before you interview anyone. Paste a job description below to build one with a 1 to 5 rating scale, must-haves and reference checks. Pair it with{" "}
                            <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions</Link>
                            {" "}and{" "}
                            <Link href="/guides/cost-of-a-bad-hire" className={link}>the cost of a bad hire</Link>
                            {" "}when the seat is sales or GTM.
                        </p>
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
                            <li>Competencies rated 1 to 5, with what a 5 looks like and the red flags.</li>
                            <li>Must-haves versus nice-to-haves.</li>
                            <li>Interview questions mapped to each competency.</li>
                            <li>Reference-check questions for the same competencies.</li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Worked example (generic operations role)</h2>
                        <p className="text-sm text-grey-500">Hand-written example only. Not generated by the tool and not a real open role.</p>
                        <div className="rounded-3xl border border-grey-200 p-6 space-y-4 bg-grey-50">
                            <p className="font-bold text-navy-900">Role: Operations Manager</p>
                            <p><span className="font-semibold">Mission:</span> Keep daily operations reliable so the team hits weekly service targets without fire drills.</p>
                            <p className="font-semibold text-navy-900">90 day outcomes</p>
                            <ul className="list-disc pl-6">
                                <li>Map current SOPs and fix the top three broken handoffs.</li>
                                <li>Publish a weekly KPI pack the leadership team actually uses.</li>
                            </ul>
                            <p className="font-semibold text-navy-900">Sample competency: Process ownership</p>
                            <p>What a 5 looks like: writes clear SOPs, trains the team, and catches drift before it becomes a miss.</p>
                            <p>Red flags: blames other teams, cannot show a process they personally improved.</p>
                            <p className="text-sm text-grey-500">Built with The Kas Group · example only</p>
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
