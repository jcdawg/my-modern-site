import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "How Long Does It Take to Hire an Account Executive? (2026)",
    description:
        "How long it takes to hire an account executive or an enterprise AE, what can shorten or lengthen the search, and a short 2026 AE OTE summary from RepVue and Bridge Group.",
    path: "/guides/how-long-does-it-take-to-hire-an-account-executive",
    headline: "How Long Does It Take to Hire an Account Executive in 2026?",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    shrm: "https://www.shrm.org/executive-network/insights/people-strategy/state-of-recruiting-2025-insights-to-maximize-recruitment",
    repvue: "https://www.repvue.com/blog/sales-salary-guide",
    bridgeAe: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
};

const FAQS = [
    {
        q: "How long does it take to hire an account executive?",
        a: "SHRM's State of Recruiting 2025 puts median time to fill at roughly a month and a half, from job requisition to offer acceptance. That covers all roles, not sales specifically. In Chris Stinson's recruiting view, a lot of it depends, and many variables can make an AE search quicker or longer.",
    },
    {
        q: "How long does it take to hire an enterprise AE?",
        a: "There is no verified public figure for enterprise AE time to fill on its own. SHRM's median across all roles is roughly a month and a half. In Chris Stinson's recruiting view, a lot of it depends, and many variables can make an enterprise search quicker or longer.",
    },
    {
        q: "What can make hiring an AE take longer or shorter?",
        a: "Many factors beyond company urgency and how fast the interview process runs can shorten or lengthen time to fill. In Chris Stinson's words, a lot of it depends, and there are a lot of variables that could make it quicker or longer.",
    },
    {
        q: "What is the median OTE for an account executive in 2026?",
        a: "RepVue's 2026 self-reported data puts the median at $200K OTE on a $100K base across all AE segments. The Bridge Group's 2026 survey of 158 B2B companies also found a median AE OTE of $200K.",
    },
    {
        q: "What is a typical enterprise AE OTE?",
        a: "RepVue's 2026 self-reported median for an enterprise AE is $275K OTE on a $140K base, across all company sizes. Strategic AEs sit at $300K on a $150K base.",
    },
    {
        q: "How does AE OTE differ for SMB, mid-market and enterprise roles?",
        a: "RepVue's 2026 medians put SMB AEs at $135K OTE on a $70K base, mid-market AEs at $180K on a $95K base and enterprise AEs at $275K on a $140K base. The AE OTE by level guide has the full table.",
    },
    {
        q: "What is the median quota for an account executive?",
        a: "The Bridge Group's 2026 AE survey of 158 B2B companies found a median AE quota of $960K across all AEs.",
    },
    {
        q: "Where do the figures on this page come from?",
        a: "Every figure comes from a public source: RepVue's 2026 sales salary guide, The Bridge Group's 2026 AE survey and SHRM's State of Recruiting 2025. None of it is placement data from The Kas Group.",
    },
];

export default function HowLongToHireAnAccountExecutive() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
    };

    const link = "text-blue-accent hover:underline";
    const h2 = "text-3xl font-bold text-navy-900";

    return (
        <div className="bg-white">
            <ArticleJsonLd
                title={PAGE.title}
                description={PAGE.description}
                path={PAGE.path}
                headline={PAGE.headline}
                author={{ jobTitle: "Managing Director", description: "Sales recruiter with 12 years of recruiting experience." }}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">How Long to Hire an AE</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">{PAGE.headline}</h1>
                    <p className="text-sm text-grey-500">Chris Stinson, Managing Director, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                        <strong>Short answer:</strong> <a href={SRC.shrm} className={link}>SHRM&apos;s State of Recruiting 2025</a> puts median time to fill at roughly a month and a half, from job requisition to offer acceptance, across all roles. There is no verified public figure for account executives or enterprise AEs on their own, and real searches vary a lot.
                    </blockquote>

                    <p className="text-sm text-grey-500">
                        All figures on this page come from named public sources, linked in the text. None of it is placement data from The Kas Group.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>How Long It Takes to Hire an Account Executive</h2>
                        <p>
                            SHRM measures time to fill from job requisition to offer acceptance. In its <a href={SRC.shrm} className={link}>State of Recruiting 2025</a>, the median is roughly a month and a half for both executive and nonexecutive roles. That is an all roles figure, not a sales figure, and it stops at the accepted offer, before the new AE starts or ramps.
                        </p>
                        <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900">
                            &quot;A lot of it depends. There are a lot of variables that go into that, and they could either make it quicker or longer.&quot; <span className="text-grey-500 text-base">Chris Stinson, Managing Director, The Kas Group, 12 years recruiting. This is his recruiting view, not data.</span>
                        </blockquote>
                        <p>Many factors beyond company urgency and how fast the interview process runs can shorten or lengthen time to fill.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How Long It Takes to Hire an Enterprise AE</h2>
                        <p>
                            No public source we could verify gives a time to fill for enterprise AEs on their own. The SHRM median above is the closest verified reference point. For the enterprise hiring process itself, read <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>how to hire an enterprise account executive</Link>, and for senior seats, <Link href="/guides/how-to-hire-senior-account-executive" className={link}>how to hire a senior account executive</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Things That Help a Search Move</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Agree on the scorecard and the interview panel before the first candidate call.</li>
                            <li>Set the OTE band and the base to variable split up front.</li>
                            <li>Hold interview slots on the calendar each week so strong candidates are not kept waiting.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>AE OTE in 2026: Short Summary</h2>
                        <p>
                            <a href={SRC.repvue} className={link}>RepVue&apos;s 2026 sales salary guide</a> puts the median across all AEs at $200K OTE on a $100K base, and enterprise AEs at $275K OTE on a $140K base. <a href={SRC.bridgeAe} className={link}>The Bridge Group&apos;s 2026 AE survey</a> of 158 B2B companies also found a median AE OTE of $200K, with a median quota of $960K. For pay by level, from SDR to strategic AE, see <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>.
                        </p>
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

                    <div className="space-y-3">
                        <h2 className={h2}>Sources</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            <li><a href={SRC.shrm} className={link}>The State of Recruiting 2025</a>, SHRM. Median time to fill is roughly a month and a half, all roles, not sales specific.</li>
                            <li><a href={SRC.repvue} className={link}>Sales salary guide</a>, RepVue, 2026. Self-reported rep data.</li>
                            <li><a href={SRC.bridgeAe} className={link}>2026 AE Models, Motions and Metrics</a>, The Bridge Group. Survey of 158 B2B companies.</li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-3">
                        <h2 className="text-2xl font-bold text-navy-900">Hiring Account Executives?</h2>
                        <p>
                            See <Link href="/guides/account-executive-ote-by-level" className={link}>AE OTE by level</Link>, then how The Kas Group works on the <Link href="/programs" className={link}>programs page</Link>. Searches above Sales Manager, such as VP of Sales, are quoted on request. Questions? Email <a href="mailto:chris@thekasgroup.com" className={link}>chris@thekasgroup.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
