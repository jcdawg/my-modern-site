import Link from "next/link";
import BadHireCalculator from "./BadHireCalculator";
import { SALESFUEL_URL } from "@/lib/bad-hire";

const link = "text-blue-accent hover:underline font-semibold";

function SalesFuel({ children = "SalesFuel" }: { children?: React.ReactNode }) {
    return (
        <a href={SALESFUEL_URL} target="_blank" rel="noopener noreferrer" className={link}>
            {children}
        </a>
    );
}

export default function BadHireCalculatorPage() {
    const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Cost of a Bad Sales Hire Calculator, by The Kas Group",
        url: "https://www.thekasgroup.com/bad-hire-calculator",
        description:
            "Free calculator that adds up the cost of a bad sales hire from your own inputs: ramp time, lost revenue, manager hours and optional other costs.",
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
                    <p className="text-sm font-semibold text-blue-accent">Cost of a Bad Sales Hire, by The Kas Group</p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
                        Add up the cost of a bad sales hire
                    </h1>
                    <div className="p-6 rounded-2xl bg-blue-accent/5 border-2 border-blue-accent">
                        <h2 className="text-xl font-bold text-navy-900 mb-3">Direct answer</h2>
                        <p className="text-base text-grey-600 leading-relaxed">
                            A bad sales hire shows up as ramp time, lost revenue from pipeline that will not be worked, and manager hours. This calculator uses your numbers. Pair it with the{" "}
                            <Link href="/pip-calculator" className={link}>Sales Territory Optimization Calculator</Link>
                            {" "}when the seat is already on a PIP, and with the{" "}
                            <Link href="/hiring-scorecard" className={link}>hiring scorecard</Link>
                            {" "}before the next interview.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <BadHireCalculator />
                </div>
            </section>

            <section className="bg-white px-6 pb-20 lg:px-8 border-t border-grey-100">
                <div className="mx-auto max-w-4xl space-y-16 pt-16 text-grey-600 leading-relaxed text-lg">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">How the numbers are calculated</h2>
                        <p>
                            The calculator uses only the inputs you set. It does not pull Kas placement data. There is no recruiting fee in the total unless you add one under Other costs.
                        </p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong className="text-navy-900">Ramp time.</strong> Monthly cost of the seat, times months in the seat, times the share of plan they missed. If you count the replacement, add the seat cost times the next ramp times the production gap. The 50% production during a normal ramp is the same working assumption as the{" "}
                                <Link href="/pip-calculator" className={link}>Sales Territory Optimization Calculator</Link>.
                            </li>
                            <li>
                                <strong className="text-navy-900">Lost revenue.</strong> Pipeline that nobody else will work, times the close rate you would have expected. If another rep inherited the deals, leave those dollars out.
                            </li>
                            <li>
                                <strong className="text-navy-900">Manager hours.</strong> Months times 52/12, times extra hours per week, times what you say that hour is worth. Do not count the one-to-ones you would have held anyway.
                            </li>
                            <li>
                                <strong className="text-navy-900">Other costs.</strong> This line is optional. Whatever you enter is added to the total as is.
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Worked example (Account Executive)</h2>
                        <p className="text-sm text-grey-500">This uses the AE starting point. It is an illustration, not a forecast for your team.</p>
                        <div className="rounded-3xl border border-grey-200 p-6 space-y-4 bg-grey-50">
                            <p className="font-bold text-navy-900">Seat: Account Executive</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Monthly cost of the seat: $12,500</li>
                                <li>Months in the seat: 6, at 28% of plan</li>
                                <li>Replacement ramp: 6 months at 50% production</li>
                                <li>Pipeline that will not be worked: $250,000 at a 24% close rate</li>
                                <li>Manager: 6 hours a week at $160</li>
                                <li>Other costs: $0</li>
                            </ul>
                            <p className="font-semibold text-navy-900">Arithmetic</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ramp shortfall = $12,500 × 6 × 72% = $54,000</li>
                                <li>Replacement ramp = $12,500 × 6 × 50% = $37,500</li>
                                <li>Lost revenue = $250,000 × 24% = $60,000</li>
                                <li>Manager hours = 26 weeks × 6 × $160 = $24,960</li>
                                <li>Other costs = $0</li>
                                <li>Total = <strong className="text-navy-900">$176,460</strong></li>
                            </ul>
                            <p className="text-sm text-grey-500">
                                That lands next to the <SalesFuel>SalesFuel survey average of $177,171</SalesFuel>. The survey is a vendor study of 316 US sales managers. Treat it as a landmark, not your profit and loss.{" "}
                                <Link href="/guides/cost-of-a-bad-hire" className={link}>Read the cost of a bad hire</Link>.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">What is not in the total</h2>
                        <p>
                            The core lines leave out severance, a draw you did not put in the seat cost, a customer who will not take the next call, and whatever you pay to search again. Add any of those you can put a number on under Other costs. Leave the rest out rather than inventing them.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-navy-900">Related</h2>
                        <p>
                            <Link href="/pip-calculator" className={link}>Sales Territory Optimization Calculator</Link>
                            {" · "}
                            <Link href="/hiring-scorecard" className={link}>Hiring scorecard</Link>
                            {" · "}
                            <Link href="/guides/cost-of-a-bad-hire" className={link}>Cost of a bad hire</Link>
                            {" · "}
                            <Link href="/contact#contact-form" className={link}>Schedule a consultation</Link>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base text-grey-600">
                            <li>
                                <SalesFuel>$177,000: New SalesFuel research shows a bad sales hire costs sales managers more than a luxury car</SalesFuel>, SalesFuel. Average cost of a bad B2B sales hire: $177,171.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
