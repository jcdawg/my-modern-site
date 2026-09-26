import { ArrowRight, CheckCircle2, Search, Target, Users, XCircle } from "lucide-react";
import Link from "next/link";
import { ORGANIZATION_ID, SITE_URL, pageMetadata } from "@/lib/seo";
import ProgramFitWidget from "@/components/ProgramFitWidget";

export const metadata = pageMetadata({
    title: "Programs | Sales & Technical Recruiting",
    description:
        "Three ways to hire with The Kas Group: monthly hiring capacity, milestone search, or a list you direct. Programs, not contingency. You own the candidate data.",
    path: "/programs",
    image: "/og/programs.png",
});

// Service/Offer JSON-LD for /programs. Matches the locked product map and the
// visible program cards below. Provider references the site-wide Organization
// node in the root layout. Leadership / VP / CRO and Directed Pursuit carry
// no numeric price on purpose.
const PROGRAMS_URL = `${SITE_URL}/programs`;
const provider = { "@id": ORGANIZATION_ID };
const areaServed = { "@type": "Country", name: "United States" };

const milestoneExample = (id: string, role: string, price: number) => ({
    "@type": "Offer",
    "@id": `${PROGRAMS_URL}#offer-milestone-${id}`,
    name: `Kas Milestone Search: ${role} (example fee)`,
    description: `Example ${role} search fee. Quoted per role. Paid in three milestone payments.`,
    price,
    priceCurrency: "USD",
    url: PROGRAMS_URL,
});

const programsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${PROGRAMS_URL}#kas-seat`,
            name: "Kas Seat",
            serviceType: "Sales fractional recruiting retainer",
            description:
                "Monthly sales fractional recruiting retainer from The Kas Group. Hire as many people as the search produces that month. Zero success fees. Sales roles only; tech roles are never monthly.",
            provider,
            areaServed,
            url: PROGRAMS_URL,
            offers: [
                {
                    "@type": "Offer",
                    "@id": `${PROGRAMS_URL}#offer-kas-seat`,
                    name: "Kas Seat monthly retainer",
                    description:
                        "Normally $5,000 to $8,000 per month based on how many sales roles are open. Up to $10,000 per month when the seat covers senior AE and above. Zero success fees.",
                    url: PROGRAMS_URL,
                    priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        priceCurrency: "USD",
                        minPrice: 5000,
                        maxPrice: 8000,
                        unitCode: "MON",
                        unitText: "MONTH",
                        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                    },
                },
                {
                    "@type": "Offer",
                    "@id": `${PROGRAMS_URL}#offer-kas-seat-senior-ae`,
                    name: "Kas Seat monthly retainer: senior AE and above",
                    description:
                        "When the seat covers senior AE and above, up to $10,000 per month. Zero success fees.",
                    url: PROGRAMS_URL,
                    priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        priceCurrency: "USD",
                        minPrice: 5000,
                        maxPrice: 10000,
                        unitCode: "MON",
                        unitText: "MONTH",
                        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                    },
                },
            ],
        },
        {
            "@type": "Service",
            "@id": `${PROGRAMS_URL}#kas-milestone-search`,
            name: "Kas Milestone Search",
            serviceType: "Sales success or retained search",
            description:
                "Success or retained search from The Kas Group for one critical sales seat, quoted per role. Three payments tied to milestones, not a monthly retainer. Example fees are not a percentage of OTE.",
            provider,
            areaServed,
            url: PROGRAMS_URL,
            offers: [
                milestoneExample("sdr-bdr", "SDR/BDR", 5000),
                milestoneExample("ae", "AE", 7500),
                milestoneExample("senior-ae-sales-manager", "Senior AE / Sales Manager", 10000),
            ],
        },
        {
            "@type": "Service",
            "@id": `${PROGRAMS_URL}#leadership-search`,
            name: "Leadership / VP / CRO",
            serviceType: "Specialist or retained sales leadership search",
            description:
                "Specialist or retained search from The Kas Group for sales leadership, VP of Sales, and CRO roles. Quoted per role.",
            provider,
            areaServed,
            url: PROGRAMS_URL,
        },
        {
            "@type": "Service",
            "@id": `${PROGRAMS_URL}#kas-directed-pursuit`,
            name: "Kas Directed Pursuit",
            serviceType: "List-driven outbound search",
            description:
                "List-driven outbound search. A search returns a list, The Kas Group reviews it, and you mark who we hunt. You own the list. Pricing on request.",
            provider,
            areaServed,
            url: PROGRAMS_URL,
        },
    ],
};

export default function Programs() {
    const programs = [
        {
            icon: Users,
            title: "Kas Seat",
            blurb: "Monthly sales-fractional capacity. Tech roles are never monthly.",
            desc: [
                "Normally $5,000–$8,000/mo based on how many sales roles are open; up to $5,000–$10,000/mo when the seat covers senior AE+ capacity.",
                "Hire as many people as the search produces that month. The monthly price does not jump per hire. Zero success fees on Seat.",
                "The Kas Group works inside your process. You own every name.",
            ],
            best: "you need sales hiring capacity, not a one-off req.",
            more: { label: "For sales teams, see how the embedded month works", href: "/recruit/fractional-sales" },
        },
        {
            icon: Target,
            title: "Kas Milestone Search",
            blurb: "Sales success or retained search for one critical seat. Not monthly.",
            desc: [
                "Three payments tied to milestones, not a monthly retainer.",
                "Example fees (not a % of OTE): SDR/BDR $5,000; AE $7,500; Senior AE / Sales Manager $10,000. Leadership / VP / CRO = quote.",
                "Payment one starts the search. Payment two unlocks once you receive the agreed number of qualified candidates. Payment three is due when the person is hired.",
            ],
            best: "you are not ready for a monthly seat and you have one role that cannot slip.",
            more: null,
        },
        {
            icon: Search,
            title: "Kas Directed Pursuit",
            blurb: "List-driven / outbound search. Pricing on request.",
            desc: [
                "A search returns a list.",
                "The Kas Group reviews it.",
                "You mark who we hunt.",
                "You own the list. No published price list for Directed Pursuit.",
            ],
            best: "you will tell us who is worth hunting.",
            more: null,
        },
    ];

    const forYou = [
        "Tech and SaaS companies",
        "Founders, CROs, Heads of People",
    ];

    const notForYou = [
        "Volume staffing",
        "Ten agencies on the same req",
        "Anyone who expects The Kas Group to keep the candidate database",
    ];

    const steps = [
        "You tell us the seats, the motion, and the timing.",
        "We recommend Seat, Milestone, or Directed Pursuit.",
        "Search runs. You own the data from day one.",
    ];
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(programsJsonLd) }}
            />
            {/* Hero */}
            <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-grey-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 -mb-10 -mr-10 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-[1.15]">
                        Three ways to hire sales talent.
                    </h1>
                    <p className="mt-4 text-xl font-medium text-grey-500 md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        Programs, not contingency. Your company owns the candidate data.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xl text-grey-500 leading-relaxed max-w-2xl mx-auto">
                        Most firms rent you a recruiter and keep the database. The Kas Group runs a search inside your process and leaves you with the names.
                    </p>
                    <p className="text-xl text-navy-700 font-semibold leading-relaxed mt-6 max-w-2xl mx-auto">
                        Pick the model that matches how many seats you need to fill.
                    </p>
                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-blue-accent hover:shadow-xl hover:-translate-y-1"
                        >
                            Book a program conversation
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <div className="mt-4">
                            <Link href="#fit" className="text-sm font-semibold text-blue-accent hover:underline">
                                See which program fits →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
                        {/* Three programs */}
            <section className="py-16 px-6 lg:px-8 bg-grey-50">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <p className="text-blue-accent font-bold uppercase tracking-wider text-sm mb-2">Three programs</p>
                        <h2 className="text-3xl font-bold text-navy-900">Choose the model that fits your hiring</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, i) => (
                            <div key={program.title} className="relative bg-white p-8 rounded-3xl border border-grey-200 shadow-sm flex flex-col overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-accent" />
                                <div className="flex items-center justify-between mb-6">
                                    <div className="h-14 w-14 rounded-2xl bg-blue-accent/10 flex items-center justify-center text-blue-accent">
                                        <program.icon className="h-7 w-7" />
                                    </div>
                                    <span className="text-4xl font-extrabold text-grey-200">{String(i + 1).padStart(2, "0")}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-navy-900 mb-3">{program.title}</h2>
                                <p className="text-grey-500 font-semibold leading-relaxed mb-4">{program.blurb}</p>
                                <ul className="space-y-3 mb-6">
                                    {program.desc.map((line) => (
                                        <li key={line} className="text-grey-600 leading-relaxed flex gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-auto pt-4 border-t border-grey-100 text-grey-500 text-sm leading-relaxed">
                                    <strong className="text-navy-700">Best when:</strong> {program.best}
                                </p>
                                {program.more && (
                                    <Link href={program.more.href} className="mt-3 text-sm font-semibold text-blue-accent hover:underline inline-flex items-center gap-1">
                                        {program.more.label}
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Fit widget */}
            <ProgramFitWidget />

            {/* Who this is for / not for */}
            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl border border-grey-200 bg-white">
                        <h2 className="text-2xl font-bold text-navy-900 mb-6">Who this is for</h2>
                        <ul className="space-y-3">
                            {forYou.map((item) => (
                                <li key={item} className="text-grey-600 leading-relaxed flex gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl border border-grey-200 bg-grey-50">
                        <h2 className="text-2xl font-bold text-navy-900 mb-6">Who this is not for</h2>
                        <ul className="space-y-3">
                            {notForYou.map((item) => (
                                <li key={item} className="text-grey-600 leading-relaxed flex gap-2">
                                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            {/* Read next: fractional sales */}
            <section className="py-16 px-6 lg:px-8 bg-grey-50 border-t border-grey-100">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold text-navy-900 mb-6">Read next: fractional sales recruiting</h2>
                    <p className="text-grey-600 leading-relaxed mb-6">
                        If you are weighing Kas Seat / fractional GTM against agencies or a first recruiter hire:
                    </p>
                    <ul className="space-y-3 text-grey-600 leading-relaxed">
                        <li>
                            <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting cost</Link>
                            {" "}- Kas Seat $5k–$8k/mo and Milestone example fees
                        </li>
                        <li>
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting vs contingency</Link>
                            {" "}- 20-30% fee math on AE and VP packages
                        </li>
                        <li>
                            <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline font-semibold">Fractional recruiting vs in-house recruiter</Link>
                            {" "}- $100k-$160k fully loaded vs retainer
                        </li>
                        <li>
                            <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline font-semibold">Fractional recruiting guide</Link>
                            {" "}- when fractional fits Seed through Series B
                        </li>
                    </ul>
                    <p className="text-grey-600 mt-6">
                        Product deep link: <Link href="/recruit/fractional-sales" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting</Link>.
                    </p>
                </div>
            </section>

            {/* How a program starts */}
            <section className="py-16 px-6 lg:px-8 bg-navy-900 text-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">How a program starts</h2>
                    <ol className="space-y-4">
                        {steps.map((step, i) => (
                            <li key={step} className="flex items-start gap-4">
                                <span className="shrink-0 h-9 w-9 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">{i + 1}</span>
                                <span className="text-grey-300 leading-relaxed text-lg">{step}</span>
                            </li>
                        ))}
                    </ol>
                    <div className="text-center mt-12">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-accent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-blue-hover hover:shadow-xl"
                        >
                            Book a program conversation
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}