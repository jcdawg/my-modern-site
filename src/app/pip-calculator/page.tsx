import Link from "next/link";
import PipCalculatorClient from "./PipCalculatorClient";

const SRC = {
    bridge: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    shrm: "https://www.shrm.org/executive-network/insights/people-strategy/state-of-recruiting-2025-insights-to-maximize-recruitment",
};

const FAQS = [
    {
        q: "How much does a PIP cost?",
        a: "This calculator estimates quota dollars lost while a rep is on a PIP, while the seat is empty after exit, and while a replacement ramps. With the default inputs ($100,000 monthly quota, 40% attainment, 60 day PIP, 60 days to hire, 3 month ramp at 50% effectiveness), the total is $470,000. Change the sliders to match your AE or senior AE seat.",
    },
    {
        q: "Is a PIP worth it for an underperforming AE?",
        a: "A PIP can be worth it when the gap is coachable and the territory stays covered. Run the numbers first. If the PIP loss plus the empty chair and ramp gap exceeds what you can recover, replacing with a confidential search may cost less in quota dollars than a long PIP.",
    },
    {
        q: "How long should a PIP for a sales rep last?",
        a: "The calculator lets you set PIP length from 30 to 120 days. Pick a window long enough to test a clear plan on an AE or senior AE seat, and short enough that the quota gap does not stack for months.",
    },
    {
        q: "When should you replace an AE instead of coaching?",
        a: "Replace when the deal walkthrough and attainment history show the gap is not closing, or when the empty chair and ramp cost of waiting past the PIP window is larger than the coaching upside. For senior AE seats, weigh ramp length carefully before you extend a PIP.",
    },
    {
        q: "What does this calculator count as revenue leak?",
        a: "Three lines only: the quota gap during the PIP, full daily quota while the chair is empty, and half of monthly quota across the ramp months. It does not add recruiting fees, severance, or morale costs. For those, see the cost of a bad hire guide.",
    },
    {
        q: "How does AE ramp time change the total?",
        a: "Ramp is monthly quota times ramp months times 0.5, our working assumption for average effectiveness while the new hire is learning the book. The Bridge Group's 2026 survey of 158 B2B companies puts average AE ramp at 6.2 months. Longer ramp raises the total quickly on enterprise and senior AE seats.",
    },
];

const link = "text-blue-accent hover:underline font-semibold";

export default function PipCalculatorPage() {
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
        name: "Sales Territory Optimization Calculator",
        url: "https://www.thekasgroup.com/pip-calculator",
        description:
            "Free calculator that estimates quota dollars lost during a sales PIP, empty chair downtime, and new hire ramp for AE and senior AE seats.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
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

            <PipCalculatorClient>
                <section className="bg-white px-6 py-8 lg:px-8">
                    <div className="mx-auto max-w-4xl space-y-3">
                        <div className="p-5 rounded-2xl bg-blue-accent/5 border border-blue-accent/40">
                            <h2 className="text-base font-bold text-navy-900 mb-2">Direct answer</h2>
                            <p className="text-sm text-grey-700 leading-relaxed">
                                This free calculator estimates how much quota an underperforming AE or senior AE seat can leak during a PIP, while the chair is empty, and while a replacement ramps. Adjust monthly quota, attainment, PIP days, time to hire, and ramp months. The default run totals $470,000. Pair it with{" "}
                                <Link href="/guides/cost-of-a-bad-hire" className={link}>the cost of a bad hire guide</Link>
                                {" "}and the{" "}
                                <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions</Link>
                                {" "}guide when you decide whether to coach or replace.
                            </p>
                        </div>
                        <p className="text-sm text-grey-500">
                            Updated Nov 2026, Chris Stinson. Chris is Managing Partner of The Kas Group and has recruited sales and GTM talent since 2014.
                        </p>
                    </div>
                </section>
            </PipCalculatorClient>

            <section className="bg-white px-6 py-20 lg:px-8 border-t border-grey-200">
                <div className="mx-auto max-w-4xl space-y-16 text-grey-700 leading-relaxed text-lg">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">How the numbers are calculated</h2>
                        <p>
                            The calculator uses only the five inputs you set. It does not pull Kas placement data. Each line below matches the live formulas in the tool.
                        </p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong className="text-navy-900">Daily quota.</strong> Monthly target quota divided by 30. A 30 day month is our working assumption for turning a monthly number into a daily rate.
                            </li>
                            <li>
                                <strong className="text-navy-900">Loss during PIP.</strong> Daily quota times PIP days times the attainment gap (100% minus current attainment). Example: at 40% attainment, 60% of daily quota counts as loss for each PIP day.
                            </li>
                            <li>
                                <strong className="text-navy-900">Empty chair loss.</strong> Daily quota times days to hire. The model assumes the territory produces no quota while the seat is vacant. That full loss rate is our working assumption, not a published benchmark.
                            </li>
                            <li>
                                <strong className="text-navy-900">Ramp gap.</strong> Monthly quota times ramp months times 0.5. The 50% effectiveness during ramp is our working assumption. For context,{" "}
                                <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2026 survey</a>{" "}
                                of 158 B2B companies puts average AE ramp to full productivity at 6.2 months, the highest in that study&apos;s history.
                            </li>
                            <li>
                                <strong className="text-navy-900">Total revenue leak.</strong> PIP loss plus empty chair loss plus ramp gap. Recruiting fees, severance, and morale are not included.
                            </li>
                        </ol>
                        <p>
                            For time to hire context across all roles,{" "}
                            <a href={SRC.shrm} className={link}>SHRM&apos;s State of Recruiting 2025</a>{" "}
                            puts median time to fill at roughly a month and a half, from job requisition to offer acceptance. Sales AE searches often run longer than that all roles median. Use the slider to match your process.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Worked example (default inputs)</h2>
                        <p>
                            This example uses the calculator&apos;s default sliders. It is an illustration only, not a forecast for your team.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Monthly target quota: $100,000</li>
                            <li>Current rep attainment: 40%</li>
                            <li>PIP duration: 60 days</li>
                            <li>Time to hire replacement: 60 days</li>
                            <li>New hire ramp: 3 months at 50% effectiveness (working assumption)</li>
                        </ul>
                        <p>Arithmetic:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Daily quota = $100,000 / 30 = $3,333.33</li>
                            <li>PIP loss = $3,333.33 × 60 × 0.60 = $120,000</li>
                            <li>Empty chair loss = $3,333.33 × 60 = $200,000</li>
                            <li>Ramp gap = $100,000 × 3 × 0.5 = $150,000</li>
                            <li>Total revenue leak = $120,000 + $200,000 + $150,000 = <strong className="text-navy-900">$470,000</strong></li>
                        </ul>
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
                        <h2 className="text-3xl font-bold text-navy-900">Related guides</h2>
                        <p>
                            <Link href="/guides/cost-of-a-bad-hire" className={link}>Cost of a bad hire</Link>
                            {" · "}
                            <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>
                            {" · "}
                            <Link href="/guides/account-executive-interview-questions" className={link}>AE interview questions</Link>
                            {" · "}
                            <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>How to hire an enterprise AE</Link>
                            {" · "}
                            <Link href="/guides/how-to-hire-senior-account-executive" className={link}>How to hire a senior AE</Link>
                            {" · "}
                            <Link href="/hiring-scorecard" className={link}>Hiring scorecard builder</Link>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base text-grey-600">
                            <li>
                                AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. Average AE ramp 6.2 months.{" "}
                                <a href={SRC.bridge} className={link}>{SRC.bridge}</a>
                            </li>
                            <li>
                                The State of Recruiting 2025, SHRM. Median time to fill roughly a month and a half, all roles, not sales specific.{" "}
                                <a href={SRC.shrm} className={link}>{SRC.shrm}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
