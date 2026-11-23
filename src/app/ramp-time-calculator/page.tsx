import Link from "next/link";
import RampTimeCalculatorClient from "./RampTimeCalculatorClient";

const SRC = {
  bridge: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
};

const FAQS = [
  {
    q: "How long does it take a new AE to ramp?",
    a: "Industry benchmarks put average AE ramp around 6 months. This calculator lets you model your own motion: onboarding length, prior experience with the product category, and how many demos it typically takes to close. The default experienced-new-product scenario lands near 5 months.",
  },
  {
    q: "What does this calculator count as ramp cost?",
    a: "The difference between what a fully productive rep would have produced and what the new hire actually produces during onboarding plus the climb to full effectiveness. It uses only the inputs you set. It does not include recruiting fees or salary.",
  },
  {
    q: "Why does product category experience matter so much?",
    a: "Someone who has already sold the same type of offer to the same buyer starts higher and climbs faster than a generalist or someone from a different motion. The three presets reflect that. You can override every number.",
  },
  {
    q: "How should I use the weeks-to-first-deal number?",
    a: "It is an estimate of when the first closed deal is likely, based on onboarding plus the early effectiveness curve and your typical demos-to-close. Use it for pipeline planning and for setting realistic ramp quotas.",
  },
  {
    q: "What if my ramp runs past four months?",
    a: "On most AE seats that means the seat is leaking more quota than many bad-hire scenarios. Pair this with the Cost of a Bad Sales Hire and Territory Optimization calculators to see the full picture before you open the req.",
  },
];

const link = "text-blue-accent hover:underline font-semibold";

export default function RampTimeCalculatorPage() {
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
    name: "Sales Ramp Time Calculator",
    url: "https://www.thekasgroup.com/ramp-time-calculator",
    description:
      "Free calculator that estimates weeks to first deal, weeks to full productivity, and revenue leak during ramp for sales hires.",
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

      <RampTimeCalculatorClient>
        <section className="bg-white px-6 py-8 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-3">
            <div className="p-5 rounded-2xl bg-blue-accent/5 border border-blue-accent/40">
              <h2 className="text-base font-bold text-navy-900 mb-2">Direct answer</h2>
              <p className="text-sm text-grey-700 leading-relaxed">
                This free calculator estimates weeks to first deal and weeks to full productivity for a new sales hire, plus the revenue gap during ramp. Pick a scenario (first-time in category, experienced new to product, or exact category match), then adjust monthly quota, onboarding weeks, years of experience, and demos-to-close. Pair it with{" "}
                <Link href="/pip-calculator" className={link}>the Territory Optimization Calculator</Link>
                {" "}and{" "}
                <Link href="/bad-hire-calculator" className={link}>the Cost of a Bad Hire Calculator</Link>
                {" "}to see the full cost of slow starts and bad fits.
              </p>
            </div>
            <p className="text-sm text-grey-500">
              Updated Nov 2026, Chris Stinson. Chris is Managing Director of The Kas Group and has recruited sales and GTM talent since 2014.
            </p>
          </div>
        </section>
      </RampTimeCalculatorClient>

      <section className="bg-white px-6 py-20 lg:px-8 border-t border-grey-200">
        <div className="mx-auto max-w-4xl space-y-16 text-grey-700 leading-relaxed text-lg">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-navy-900">How the numbers are calculated</h2>
            <p>
              The calculator uses only the inputs you set. Each line matches the live formulas in the tool.
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-navy-900">Scenario base.</strong> Three presets set starting effectiveness (20%, 35%, or 55%) and base ramp length (7, 5, or 3.5 months). These are working assumptions grounded in typical AE ramp data.
              </li>
              <li>
                <strong className="text-navy-900">Adjustments.</strong> More years of experience slightly shortens ramp. Higher demos-to-close lengthens the early curve. Onboarding weeks are added at zero production.
              </li>
              <li>
                <strong className="text-navy-900">Effectiveness curve.</strong> After onboarding, effectiveness starts at the preset base and climbs linearly to 100% over the adjusted ramp weeks.
              </li>
              <li>
                <strong className="text-navy-900">Ramp leak.</strong> Sum of (weekly full quota × actual effectiveness) across the whole window, subtracted from what a fully ramped rep would have produced. That difference is the revenue gap.
              </li>
              <li>
                <strong className="text-navy-900">Weeks to first deal.</strong> Onboarding weeks plus an estimate based on demos-to-close and starting effectiveness.
              </li>
            </ol>
            <p>
              For context,{" "}
              <a href={SRC.bridge} className={link}>The Bridge Group's 2026 survey</a>{" "}
              of 158 B2B companies puts average AE ramp to full productivity at 6.2 months. Your number will be shorter or longer depending on the match between the hire and your motion.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-navy-900">Worked example (default inputs)</h2>
            <p>
              Experienced rep new to your product, $100,000 monthly quota, 3 weeks onboarding, 5 years experience, 8 demos to close.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Starting effectiveness: 35%</li>
              <li>Adjusted ramp: roughly 5 months</li>
              <li>Weeks to first deal: around 6–8</li>
              <li>Weeks to full: around 22–24</li>
              <li>Ramp leak: typically $150k–$250k depending on exact curve</li>
            </ul>
            <p>Change any slider and the live total updates immediately.</p>
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
              <Link href="/tools" className={link}>More hiring tools</Link>
              {" · "}
              <Link href="/pip-calculator" className={link}>Territory Optimization Calculator</Link>
              {" · "}
              <Link href="/bad-hire-calculator" className={link}>Cost of a Bad Hire</Link>
              {" · "}
              <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>How to hire SDRs and AEs with fast ramp</Link>
              {" · "}
              <Link href="/hiring-scorecard" className={link}>Hiring scorecard builder</Link>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-navy-900">Sources</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-grey-600">
              <li>
                AE Models, Motions & Metrics: 2026 Research Report, The Bridge Group. Average AE ramp 6.2 months.{" "}
                <a href={SRC.bridge} className={link}>{SRC.bridge}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
