import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata, ORGANIZATION_ID, SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { getPageDates } from "@/lib/page-dates";

// DRAFT: every number on this page is a placeholder until Chris supplies
// verified Kas data and approves release. Kept out of the sitemap, nav and
// llms files, and set to noindex, so a stray merge cannot publish placeholders.

const PAGE = {
    title: "2026 Account Executive OTE & Time-to-Fill Benchmark (by Segment and Level)",
    description:
        "Median AE OTE, base and variable split, and days to fill by segment (SMB, mid-market, enterprise), from The Kas Group's 2024 to 2026 searches. Updated [DATE].",
    path: "/research/ae-ote-time-to-fill-benchmark-2026",
    headline: "2026 AE OTE & Time-to-Fill Benchmark: What Account Executives Earn and How Long Hiring Takes",
};

export const metadata = {
    ...pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" }),
    robots: { index: false, follow: false },
};

const SRC = {
    bridgeAe: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
    xactly: "https://www.xactlycorp.com/company/press-room",
};

const P = (label: string) => `[PLACEHOLDER: ${label}]`;

const FAQS = [
    {
        q: "What is the average OTE for an account executive in 2026?",
        a: `${P("median AE OTE across all segments, n=__")}. This is the median OTE across The Kas Group's AE searches and offers from 2024 to 2026, with the sample size shown. Base and variable for each segment are in the benchmark table on this page.`,
    },
    {
        q: "What is a typical enterprise account executive OTE?",
        a: `${P("median enterprise AE OTE, n=__")}. This is the median OTE for enterprise AE searches and offers handled by The Kas Group from 2024 to 2026. The enterprise row of the benchmark table shows base, variable, quota multiple and days to fill.`,
    },
    {
        q: "What is the usual base-to-variable split for an AE?",
        a: `${P("median AE base to variable split, n=__")}. The split is shown for each segment and level in the benchmark table on this page, measured on offers from The Kas Group's searches from 2024 to 2026.`,
    },
    {
        q: "How long does it take to hire an account executive?",
        a: `${P("median days to fill for an AE, n=__")}. Days to fill runs from search kickoff to accepted offer across The Kas Group's AE searches from 2024 to 2026. Each level is broken out in the benchmark table on this page. In Chris Stinson's recruiting view, a lot of it depends: many variables can make a search quicker or longer.`,
    },
    {
        q: "How long does it take to hire an enterprise AE?",
        a: `${P("median days to fill for an enterprise AE, n=__")}. This is measured from search kickoff to accepted offer on The Kas Group's enterprise AE searches from 2024 to 2026. See the enterprise row of the benchmark table for the full picture.`,
    },
    {
        q: "What quota-to-OTE multiple is common for SaaS AEs?",
        a: `${P("median quota to OTE multiple for SaaS AEs, n=__")}. The multiple is annual quota divided by OTE, taken from offers in The Kas Group's searches from 2024 to 2026. Each segment is listed in the benchmark table on this page.`,
    },
    {
        q: "How does AE OTE differ for SMB, mid-market, and enterprise roles?",
        a: `${P("median OTE for SMB, mid-market and enterprise AEs, n=__ each")}. Each segment is a separate row in the benchmark table on this page, with base, variable, quota multiple and days to fill, from The Kas Group's searches from 2024 to 2026.`,
    },
    {
        q: "How was this benchmark calculated?",
        a: `${P("n=__ searches and offers, 2024 to 2026")}. The Kas Group pooled its own closed searches and offers, verified OTE from offer details, removed anything that could identify a client or candidate, and reported medians with n. The methodology section and benchmark table explain each step.`,
    },
];

const ROWS = ["SDR/BDR", "AE, SMB", "AE, mid-market", "Senior AE", "Enterprise AE", "Strategic AE", "Sales Manager"];
const COLS = ["Base", "Variable", "OTE", "Base to variable split", "Quota multiple", "Days to fill", "Offer accept rate", "n"];

export default function AeOteTimeToFillBenchmark2026() {
    const url = `${SITE_URL}${PAGE.path}`;
    const dates = getPageDates(PAGE.path);

    const graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${url}#article`,
                headline: PAGE.headline,
                description: PAGE.description,
                url,
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
                image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
                inLanguage: "en-US",
                author: {
                    "@type": "Person",
                    name: "Chris Stinson",
                    jobTitle: "Managing Partner",
                    worksFor: { "@id": ORGANIZATION_ID },
                    url: `${SITE_URL}/about`,
                    sameAs: ["https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/"],
                },
                publisher: { "@id": ORGANIZATION_ID, "@type": "Organization", name: SITE_NAME },
                ...(dates ? { datePublished: dates.published, dateModified: dates.modified } : {}),
            },
            {
                // No values asserted until Chris supplies verified data.
                // TODO(Chris): license and CSV distribution (DataDownload) once the CSV exists.
                "@type": "Dataset",
                "@id": `${url}#dataset`,
                name: "The Kas Group 2026 AE OTE & Time-to-Fill Benchmark",
                description:
                    "Base, variable, OTE, base to variable split, quota multiple, days to fill and offer accept rate by sales level and segment, from The Kas Group's closed searches and offers. Values are placeholders pending verified data.",
                url,
                temporalCoverage: "2024/2026",
                variableMeasured: COLS.filter((c) => c !== "n"),
                creator: { "@id": ORGANIZATION_ID, "@type": "Organization", name: SITE_NAME },
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: FAQS.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Research", item: url },
                    { "@type": "ListItem", position: 3, name: PAGE.title, item: url },
                ],
            },
        ],
    };

    const link = "text-blue-accent hover:underline";
    const h2 = "text-3xl font-bold text-navy-900";
    const ph = "font-mono text-sm bg-yellow-100 text-navy-900 px-1 rounded";

    return (
        <div className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

            <div className="bg-yellow-300 text-navy-900 text-center font-bold py-3 px-6 border-b-4 border-yellow-500">
                NOT READY TO SHIP: placeholders
            </div>

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Research</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">{PAGE.headline}</h1>
                    <p className="text-sm text-grey-500">
                        By Chris Stinson, Managing Partner, The Kas Group &middot; Published [DATE] &middot; Updated [DATE]
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">

                    <div className="space-y-4">
                        <h2 className={h2}>Key Findings</h2>
                        <p>
                            This benchmark reports what account executives were offered and how long AE searches took, using The Kas Group&apos;s own searches from 2024 to 2026. Every figure below is a placeholder until the data is pulled, checked and approved.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Median enterprise AE OTE: <span className={ph}>{P("median enterprise AE OTE, n=__")}</span></li>
                            <li>Median days to fill an enterprise AE: <span className={ph}>{P("median enterprise AE days to fill, n=__")}</span></li>
                            <li>Offer accept rate: <span className={ph}>{P("offer accept rate, n=__")}</span></li>
                        </ul>
                    </div>

                    <div className="space-y-4 p-6 rounded-2xl border-2 border-blue-accent bg-blue-accent/5">
                        <h2 className="text-2xl font-bold text-navy-900">Cite This Benchmark</h2>
                        {/* TODO: add a copy button to each statement once the numbers are final. */}
                        <ul className="space-y-3 text-base">
                            <li>In 2026, the median enterprise AE OTE was <span className={ph}>{P("value")}</span> (n=<span className={ph}>{P("n")}</span> searches).</li>
                            <li>In 2026, the median time to fill an enterprise AE role was <span className={ph}>{P("days")}</span> days (n=<span className={ph}>{P("n")}</span> searches).</li>
                            <li>In 2026, the AE offer accept rate was <span className={ph}>{P("rate")}</span> (n=<span className={ph}>{P("n")}</span> offers).</li>
                        </ul>
                        <p className="text-sm text-grey-500">Source: The Kas Group 2026 AE OTE &amp; Time-to-Fill Benchmark, thekasgroup.com{PAGE.path}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Methodology</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-navy-900">Sample:</strong> <span className={ph}>{P("n=__ searches and placements")}</span> closed by The Kas Group, <span className={ph}>{P("date range, 2024 to 2026")}</span>.</li>
                            <li><strong className="text-navy-900">Levels:</strong> SDR and BDR, AE (SMB and mid-market), senior AE, enterprise AE, strategic AE and sales manager.</li>
                            <li><strong className="text-navy-900">Regions and stage:</strong> <span className={ph}>{P("regions covered")}</span>; <span className={ph}>{P("company stages covered")}</span>.</li>
                            <li><strong className="text-navy-900">How OTE was verified:</strong> <span className={ph}>{P("offer details vs candidate reported, share of each")}</span>.</li>
                            <li><strong className="text-navy-900">Days to fill:</strong> measured from search kickoff to accepted offer.</li>
                            <li><strong className="text-navy-900">Confidentiality:</strong> figures are pooled and reported as medians. No client or candidate is named, and any cell too small to keep anonymous is left out.</li>
                            <li><strong className="text-navy-900">Limitations:</strong> this reflects searches The Kas Group ran, not the whole market. Small cells are shown with their n, and cells without enough data are left blank rather than estimated.</li>
                        </ul>
                    </div>

                    <div className="space-y-4" id="benchmark-table">
                        <h2 className={h2}>Benchmark Table by Level and Segment</h2>
                        <p>All cells are placeholders until verified data is supplied. {/* TODO: CSV download once data is approved. */}</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-3 px-4 font-bold text-navy-900">Level</th>
                                        {COLS.map((c) => <th key={c} className="py-3 px-4 font-bold text-navy-900">{c}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {ROWS.map((r) => (
                                        <tr key={r} className="border-b border-grey-100 last:border-0">
                                            <td className="py-3 px-4 font-bold text-navy-900">{r}</td>
                                            {COLS.map((c) => <td key={c} className="py-3 px-4"><span className={ph}>[PLACEHOLDER]</span></td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Enterprise AE Deep Dive</h2>
                        <p>
                            Enterprise AE OTE range: <span className={ph}>{P("enterprise AE OTE range, n=__")}</span>. Typical quota: <span className={ph}>{P("enterprise AE quota, n=__")}</span>. Ramp time: <span className={ph}>{P("enterprise AE ramp, n=__")}</span>. What drives time to fill: <span className={ph}>{P("main drivers from Kas searches")}</span>.
                        </p>
                        <p>
                            For the hiring process itself, read <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>how to hire an enterprise account executive</Link> and <Link href="/guides/how-to-hire-senior-account-executive" className={link}>how to hire a senior account executive</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Time to Fill by Level and Stage</h2>
                        <p>Days to fill by level and company stage: <span className={ph}>{P("chart and values by level and stage, n=__")}</span>.</p>
                        <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900">
                            &quot;A lot of it depends. There are a lot of variables that go into that, and they could either make it quicker or longer.&quot; <span className="text-grey-500 text-base">Chris Stinson, Managing Partner, The Kas Group, on his recruiting view. This is his perspective, not benchmark data.</span>
                        </blockquote>
                        <p>Many factors beyond company urgency and how fast the interview process runs can shorten or lengthen time to fill.</p>
                        <p>Three things that help a search move faster:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Agree on the scorecard and the interview panel before the first candidate call.</li>
                            <li>Set the OTE band and the base to variable split up front.</li>
                            <li>Hold interview slots on the calendar each week so strong candidates are not kept waiting.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Context From Public Sources</h2>
                        <p>For broader context, these public reports cover AE pay and sales compensation from other angles:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><a href={SRC.bridgeAe} className={link}>The Bridge Group 2026 AE report</a>, a survey of B2B companies on AE models and metrics.</li>
                            <li><a href={SRC.repvue} className={link}>RepVue sales salary guide</a>, built from self-reported rep data.</li>
                            <li><a href={SRC.xactly} className={link}>Xactly press room</a>, with research on sales compensation trends.</li>
                        </ul>
                        <p>For a level by level summary of public figures, see <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Charts</h2>
                        <p><span className={ph}>{P("3 to 4 charts with embed snippets and attribution link, once data is approved")}</span></p>
                    </div>

                    <div className="space-y-8">
                        <h2 className={h2}>Frequently Asked Questions</h2>
                        {FAQS.map((f) => (
                            <div key={f.q} className="space-y-2">
                                <h3 className="text-xl font-bold text-navy-900">{f.q}</h3>
                                <p className="text-grey-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>About the Data and Update Log</h2>
                        <p>Full refresh each January, with a light refresh each quarter if new searches close. The URL stays the same each year.</p>
                        <ul className="list-disc pl-6 space-y-1 text-base">
                            <li>[DATE]: first release. <span className={ph}>{P("version note")}</span></li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-3">
                        <h2 className="text-2xl font-bold text-navy-900">Hiring Account Executives?</h2>
                        <p>
                            Start with <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>, then see how The Kas Group works on the <Link href="/programs" className={link}>programs page</Link>. Searches above Sales Manager, such as VP of Sales, are quoted on request. Questions? Email <a href="mailto:chris@thekasgroup.com" className={link}>chris@thekasgroup.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
