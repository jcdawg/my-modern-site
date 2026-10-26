import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "AI, ML & Data Engineer Recruiting for Insurance",
    description: "Hiring AI, ML, or data engineers? The Kas Group helps insurance carriers, MGAs, and insurtechs define the role, then find production-ready talent.",
    path: "/insurance",
});

const SCAN_HREF = "/contact";

const workTypes = [
    ["Underwriting models", "Risk scoring, submission triage, and appetite matching that fit into how underwriters actually work."],
    ["Claims automation", "Intake, routing, severity prediction, and straight-through processing for simpler claims."],
    ["Fraud detection", "Models and rules that flag suspicious claims or applications without burying investigators in false positives."],
    ["Pricing and actuarial collaboration", "Engineers and data scientists who can work alongside actuaries, respect rate filing realities, and explain their methods in terms the actuarial team accepts."],
    ["Data platforms", "Pipelines and warehouses that pull together policy, billing, claims, and third-party data so the rest of the team has something reliable to build on."],
    ["Document AI", "Extracting what matters from applications, loss runs, ACORD forms, medical records, and policy documents."],
    ["Model governance and explainability", "Documentation, monitoring, bias testing, and explainable outputs that hold up with internal model risk teams and state regulators."],
];

const roles = [
    "Head of AI / Chief Data Officer",
    "AI Architects",
    "Machine Learning Engineers and MLOps",
    "Data Scientists (NLP/LLM focus)",
    "Data Infrastructure and Data Engineers",
    "Analytics Engineers",
    "AI/ML Product Managers",
];

const faqs = [
    ["Do we have to use the full consult to work with you?", "No. Some teams want every step. Others already have a strong job description and just want help with market calibration or the technical interview. We will fit the work to what you need."],
    ["Do candidates need insurance experience?", "Not always. We decide that together in the alignment meeting. For some roles, insurance or regulated-industry experience is a must. For others, strong production experience and the ability to learn the domain matter more."],
    ["What does \"production-ready\" mean to you?", "It means the candidate has built and shipped real systems, not just prototypes. They have put models or pipelines into production, monitored them, and kept them working as data and business needs changed."],
    ["How do you handle model governance and explainability requirements?", "If your models face internal model risk review or regulatory scrutiny, we build that into the scorecard and the interview. We look for people who have documented, monitored, and explained models for review, and Derek probes for it in the technical interview."],
    ["How quickly will we see candidates?", "It depends on the role and how deep the pool is. After the market scan, we agree on a candidate timeline together, and if we miss it, we keep hunting at no extra cost."],
];

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
    return (
        <div className="flex gap-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">{n}</span>
            <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
                <div className="space-y-4 text-grey-600 leading-relaxed">{children}</div>
            </div>
        </div>
    );
}

function ScanButton({ label }: { label: string }) {
    return (
        <Link href={SCAN_HREF} className="inline-flex items-center gap-2 rounded-md bg-blue-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
            {label} <ArrowRight className="h-4 w-4" />
        </Link>
    );
}

export default function InsuranceAIRecruiting() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    };

    return (
        <div className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="relative bg-navy-950 py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/10 to-transparent" />
                </div>
                <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Hire AI and data engineers who are ready for production insurance work</h1>
                    <p className="mt-6 text-lg leading-8 text-grey-200">
                        The Kas Group helps insurance carriers, MGAs, and insurtechs hire AI engineers, machine learning engineers, data engineers, and analytics engineers. We work with you before and during the search, and every candidate is personally vetted by Derek Norton, PhD in Statistics.
                    </p>
                    <div className="mt-10"><ScanButton label="Get a free market scan" /></div>
                </div>
            </div>

            <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 space-y-6 text-lg text-grey-600 leading-relaxed">
                <p>A model that scores well in a notebook is a long way from a model an underwriter trusts, a claims team uses every day, or a regulator can follow. Insurance asks a lot of technical hires: messy policy and claims data, legacy core systems, actuaries who need to understand the work, and real scrutiny on how decisions get made.</p>
                <p>That is why we start with a conversation about the work, not a list of keywords. We help you get clear on who you need, then we go find people who have already shipped that kind of work.</p>
            </section>

            <section className="bg-grey-50 py-20 border-t border-grey-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">The kinds of work we hire for</h2>
                    <p className="mt-4 text-grey-600 max-w-3xl">The right hire depends on what you are building. These are the insurance problems we talk through most often:</p>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {workTypes.map(([t, d]) => (
                            <div key={t} className="bg-white rounded-2xl p-6 border border-grey-100 shadow-sm">
                                <h3 className="text-lg font-bold text-navy-900 border-b-2 border-blue-accent w-fit mb-3">{t}</h3>
                                <p className="text-sm text-grey-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">How the consult works</h2>
                <p className="mt-4 text-grey-600">Here is what we do with you, step by step. Use all of it or just the parts that help.</p>
                <div className="mt-12 space-y-12">
                    <Step n={1} title="The alignment meeting">
                        <p>We start with you and anyone who has a say in the hire. Usually that is the CTO, CIO, Chief Data or Analytics Officer, or the VP or Head of Data, Engineering, or AI, plus the hiring manager.</p>
                        <p>We talk through three things:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>What success looks like.</strong> At 90 days, 6 months, and a year. A fraud model in production? A claims data pipeline the business can trust? An underwriting tool that underwriters actually use?</li>
                            <li><strong>Why past hires didn&apos;t work out.</strong> No blame here. Maybe a strong researcher struggled to get anything into production. Maybe a data engineer was great with modern tools but couldn&apos;t work with your policy admin system. Those lessons tell us exactly what to screen for.</li>
                            <li><strong>Non-negotiables vs. nice-to-haves.</strong> Production MLOps experience? A specific cloud or warehouse? Insurance or other regulated-industry background? Experience documenting models for review? We separate what truly matters from what would be nice.</li>
                        </ul>
                        <p>You leave with a shared picture of the hire, and everyone involved is looking for the same person.</p>
                    </Step>
                    <Step n={2} title="Time with your best engineer or data lead">
                        <p>Next, we ask to sit down with one of your strongest people, ideally someone in or close to the role.</p>
                        <p>We want to know how the work really gets done. What your data looks like. Where projects tend to get stuck. How they work with underwriting, claims, and actuarial teams. What separates the people who thrive on your team from the ones who don&apos;t.</p>
                        <p>That conversation gives us a real profile to recruit against, and it gives Derek specific scenarios to use when he vets candidates.</p>
                    </Step>
                    <Step n={3} title="A scorecard and job description, written together">
                        <p>With what we have learned, we draft a scorecard: the outcomes the person needs to deliver in the first year and the skills and experience that predict them.</p>
                        <p>Then we help you write or rewrite the job description. It should speak to the engineers you want to reach. Clear about the problems they will work on, the stack, the data, who they will partner with, and how their work gets into production.</p>
                        <p>You approve every word. The scorecard then becomes the standard we use to evaluate every candidate.</p>
                    </Step>
                    <Step n={4} title="Comp and market calibration">
                        <p>Before the search starts, we share what we are seeing in the market for the role, the seniority, and the location or remote setup you have in mind.</p>
                        <p>If what you need and what you can offer are far apart, we will tell you early. Then we help you find a path that works, whether that means adjusting the level, the profile, the remote policy, or the timeline.</p>
                    </Step>
                    <Step n={5} title="Technical interview design and rubric">
                        <p>We help you design a technical interview process that tests what is on the scorecard, with a simple rubric so each interviewer knows what they are evaluating and how to rate it.</p>
                        <p>That might include a system design conversation around a claims or underwriting scenario, a review of how a candidate has monitored and maintained models after launch, or a discussion of how they would explain a model&apos;s output to an actuary or a regulator.</p>
                        <p>We can also help coordinate interviews, prepare both sides, and gather structured feedback after each round so decisions keep moving.</p>
                    </Step>
                    <Step n={6} title="Offer support">
                        <p>When you are ready to make an offer, we stay involved. We help you shape the offer, talk through compensation, handle candidate questions and competing offers, and keep things moving so the right person says yes.</p>
                    </Step>
                </div>
            </section>

            <section className="bg-grey-50 py-24 border-t border-grey-200">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Every candidate is vetted by Derek Norton, PhD</h2>
                    <div className="mt-6 space-y-4 text-grey-600 leading-relaxed">
                        <p>Derek Norton personally vets every AI, ML, and data candidate we present. Derek holds a PhD in Statistics, founded the Atlanta R Users Group, and spent five years at Microsoft as a Global Lead Data Scientist, Architect, and Industry Digital Strategist. He is currently CTO at Life2, where he designs and puts advanced analytics and machine learning into production.</p>
                        <p>He has built models for predicting fraud, lifetime value, and market share across hospitality, telco, credit risk, and healthcare, so he knows what this work looks like in practice.</p>
                        <p>Each candidate goes through a live technical interview with Derek, built around real-world scenarios. He looks at:</p>
                    </div>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Algorithmic depth and mathematical foundations", "System architecture and ML system design", "Data modeling", "Practical AI delivery: getting models into production and keeping them working"].map((x) => (
                            <li key={x} className="flex items-start gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-200"><Check className="h-4 w-4 text-navy-900" /></div>
                                <span className="text-sm font-medium text-navy-700">{x}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-grey-600 leading-relaxed">We only present production-ready candidates. You get a written assessment with each one, covering where they are strong, where the gaps are, and why we think they would succeed on your team.</p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="bg-grey-50 rounded-2xl p-8 border border-grey-100 shadow-sm">
                        <h2 className="text-xl font-semibold text-navy-900 mb-6">Roles we recruit</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {roles.map((role) => (
                                <li key={role} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-200"><Check className="h-4 w-4 text-navy-900" /></div>
                                    <span className="text-sm font-medium text-navy-700">{role}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 pt-6 border-t border-grey-200 text-sm text-grey-500">We work with insurance carriers, MGAs, and insurtechs, typically between 100 and 3,000 employees.</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900">What we stand behind</h2>
                        <ul className="mt-6 space-y-5 text-grey-600 leading-relaxed">
                            <li><strong className="text-navy-900">A timeline we agree on together.</strong> After the market scan, we commit to a candidate timeline for your role. If we miss it, we keep hunting at no extra cost.</li>
                            <li><strong className="text-navy-900">60-day re-hunt guarantee.</strong> If a placement doesn&apos;t work out in the first 60 days, we&apos;ll search again.</li>
                            <li><strong className="text-navy-900">Every candidate vetted by Derek.</strong> Each one comes with a written assessment.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-navy-950 py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Start with a free market scan</h2>
                    <p className="mt-6 text-lg text-grey-200">Not ready to commit to a search? Start here.</p>
                    <p className="mt-4 text-grey-300 leading-relaxed">Tell us about the role you are thinking about. Within 48 to 72 hours, we will send you a free market scan: what the talent pool looks like for that role, where the people you want are working now, and what it will take to attract them. For specialized roles, the scan also shows how deep the pool really is, and which tradeoffs on location, comp, or requirements would widen it.</p>
                    <p className="mt-4 text-grey-300">It is free, with no obligation. It is a good way to see how we think before you decide anything.</p>
                    <div className="mt-10"><ScanButton label="Request my free market scan" /></div>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">FAQ</h2>
                <dl className="mt-10 space-y-8">
                    {faqs.map(([q, a]) => (
                        <div key={q}>
                            <dt className="text-lg font-bold text-navy-900">{q}</dt>
                            <dd className="mt-2 text-grey-600 leading-relaxed">{a}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="bg-grey-50 py-20 border-t border-grey-200">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-navy-900">Let&apos;s find the right engineer for your team</h2>
                    <p className="mt-4 text-grey-600">If you are planning an AI, ML, or data hire, we would be glad to help you get clear on the role and find people who can do the work.</p>
                    <p className="mt-4 text-grey-600">Not sure which role comes first? Read our <Link href="/guides/hiring-ai-data-engineers-insurance" className="text-blue-accent hover:underline">guide to hiring AI, ML and data engineers for insurance</Link>.</p>
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <ScanButton label="Get a free market scan" />
                        <a href="mailto:chris@thekasgroup.com" className="text-sm font-semibold text-navy-900 hover:text-blue-accent transition-colors">Or email chris@thekasgroup.com</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
