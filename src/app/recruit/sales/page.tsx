import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";


export const metadata = pageMetadata({
    title: "Sales Recruiter for B2B SaaS Teams",
    description: "Sales recruiter for B2B SaaS: VP of Sales, CRO, AE and SDR leaders. Quota-verified shortlists from The Kas Group. Kas Seat, Milestone Search and Directed Pursuit.",
    path: "/recruit/sales",
});

export default function SalesRecruiting() {
    const roles = [
        "Chief Revenue Officer (CRO)",
        "VP of Sales",
        "Enterprise Account Executives",
        "Sales Engineering Leaders",
        "SDR/BDR Managers",
        "Customer Success VPs",
    ];

        const FAQS = [
        {
            q: "What does a sales recruiter at The Kas Group do?",
            a: "A sales recruiter at The Kas Group sources and places B2B SaaS revenue talent: CRO, VP of Sales, enterprise AEs, SDR leaders and related seats. Every shortlist is quota-verified with a written assessment. Work runs through Kas Seat, Kas Milestone Search or Kas Directed Pursuit.",
        },
        {
            q: "What sales roles does The Kas Group place?",
            a: "Chief Revenue Officers, VPs of Sales, Enterprise and Strategic Account Executives, SDR/BDR Managers, Sales Engineering Leaders, and Customer Success VPs for B2B SaaS and high-growth technology companies.",
        },
        {
            q: "How are sales candidates vetted?",
            a: "Every candidate goes through quota-attainment verification, deal-size and sales-cycle analysis, sales methodology audits, and behavioral interviewing. You receive a written assessment per candidate, not a forwarded resume.",
        },
        {
            q: "How fast can we get a vetted shortlist?",
            a: "AE and SDR-level searches typically deliver a vetted shortlist in 2 to 4 weeks. VP of Sales and CRO searches run 6 to 10 weeks from kickoff to accepted offer.",
        },
        {
            q: "What does sales recruiting cost?",
            a: "Sales hiring runs on Kas programs: Seat (monthly fractional, normally $5,000 to $8,000 a month, up to $10,000 for senior AE and above), Milestone Search (example fees SDR $5k / AE $7.5k / Sr AE or Sales Manager $10k; leadership quote), or Directed Pursuit. Contingency remains an option. Industry retained search often starts around $25k, which is market context, not a Kas list price.",
        },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
    };

    return (
        <div className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="relative bg-navy-900 py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/20 to-navy-950/90 mix-blend-multiply" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sales Recruiter for VP, AE and SDR Hires</h1>
                    <p className="mt-6 text-lg leading-8 text-grey-200 border-l-2 border-blue-accent pl-4 inline-block mx-auto max-w-2xl text-left">
                        The Kas Group is a B2B SaaS sales recruiter for Seed through growth-stage teams. Quota-verified shortlists for CRO, VP of Sales, AE and SDR leaders.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">A sales recruiter who checks the number</h2>
                        <p className="mt-4 text-grey-600 leading-relaxed">
                            Since 2014, The Kas Group has placed B2B SaaS sales talent from SDR through VP of Sales and CRO. We speak GTM, quota and cycle length, and we do not send a shortlist without verifying attainment.
                        </p>
                        <p className="mt-4 text-grey-600 leading-relaxed">
                            Build a team, add one producer, or use a{" "}
                            <Link href="/guides/best-fractional-sales-recruiters" className="text-blue-accent hover:underline font-semibold">top fractional recruiter</Link>
                            {" "}model for multi-hire quarters. Compare{" "}
                            <Link href="/guides/best-recruiters-saas-startups-sales" className="text-blue-accent hover:underline font-semibold">SaaS sales recruiters</Link>
                            {" "}and programs on{" "}
                            <Link href="/programs" className="text-blue-accent hover:underline font-semibold">/programs</Link>.
                        </p>

                        <div className="mt-10">
                            <a
                                href="mailto:chris@thekasgroup.com"
                                className="rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-800 transition-colors"
                            >
                                Email chris@thekasgroup.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-grey-50 rounded-2xl p-8 border border-grey-100 shadow-sm">
                        <h3 className="text-xl font-semibold text-navy-900 mb-6 underline decoration-blue-accent decoration-2 underline-offset-8">Roles We Place</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {roles.map((role) => (
                                <li key={role} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-accent/10">
                                        <Check className="h-4 w-4 text-blue-accent" />
                                    </div>
                                    <span className="text-sm font-medium text-navy-700">{role}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Approach Section */}
            <section className="py-24 bg-white border-t border-grey-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Our Approach to Sales Recruiting</h2>
                        <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
                            Built on a foundation of deep industry knowledge and a proven ability to connect with strong sales professionals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Understanding Your Needs</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                We take the time to deeply understand your sales model, company culture, and specific role requirements to find candidates who are built for your environment. We handle standard placements, as well as specialized models like fractional cybersecurity sales recruiting and fractional SaaS sales recruiting.
                            </p>
                        </div>
                        {/* Pillar 2 */}
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Targeted Sourcing</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                We go past job boards. We source high-performing passive candidates who are not actively looking but will move for the right seat.
                            </p>
                        </div>
                        {/* Pillar 3 */}
                        <div className="p-8 rounded-2xl bg-grey-50 border border-grey-100 hover:border-blue-accent/50 transition-colors">
                            <h3 className="text-lg font-bold text-navy-900 mb-4">Experienced Vetting</h3>
                            <p className="text-sm text-grey-600 leading-relaxed">
                                We use our own extensive sales background to conduct thorough interviews, evaluating actual performance, motivation, and the psychological drive needed to close deals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-24 bg-grey-50 border-t border-grey-100">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {FAQS.map((f) => (
                            <div key={f.q} className="space-y-4 bg-white p-8 rounded-2xl border border-grey-200">
                                <h4 className="font-bold text-navy-900 text-lg">{f.q}</h4>
                                <p className="text-grey-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Resources Section */}
            <section className="py-24 bg-grey-50 border-t border-grey-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Hiring Resources</h2>
                            <p className="mt-4 text-grey-600">
                                Guides on SaaS sales recruiters, fractional hiring and VP of Sales searches.
                            </p>
                        </div>
                        <Link href="/guides" className="text-blue-accent font-bold hover:underline inline-flex items-center gap-2">
                            View All Guides <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/guides/best-recruiters-saas-startups-sales" className="group p-8 rounded-2xl bg-white border border-grey-200 hover:border-blue-accent/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-accent mb-2">Best SaaS Sales Recruiters for Startups</h3>
                            <p className="text-sm text-grey-500 mb-4 leading-relaxed">Specialist, fractional and agency models for Seed to Series B sales hiring.</p>
                            <span className="text-blue-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Guide <ArrowRight className="h-3 w-3" />
                            </span>
                        </Link>
                        <Link href="/guides/best-fractional-sales-recruiters" className="group p-8 rounded-2xl bg-white border border-grey-200 hover:border-blue-accent/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-accent mb-2">Top Fractional Recruiter for Sales Teams</h3>
                            <p className="text-sm text-grey-500 mb-4 leading-relaxed">How to pick the best fractional sales recruiters and when Kas Seat beats contingency.</p>
                            <span className="text-blue-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Guide <ArrowRight className="h-3 w-3" />
                            </span>
                        </Link>
                        <Link href="/guides/best-sales-recruiting-agencies-2026" className="group p-8 rounded-2xl bg-white border border-grey-200 hover:border-blue-accent/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-accent mb-2">Best Sales Recruiting Agencies 2026</h3>
                            <p className="text-sm text-grey-500 mb-4 leading-relaxed">Our objective analysis of the top firms for B2B sales talent and leadership roles.</p>
                            <span className="text-blue-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Guide <ArrowRight className="h-3 w-3" />
                            </span>
                        </Link>
                        <Link href="/guides/who-to-hire-vp-sales-startup" className="group p-8 rounded-2xl bg-white border border-grey-200 hover:border-blue-accent/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-accent mb-2">Hiring a VP of Sales: First 90 Days</h3>
                            <p className="text-sm text-grey-500 mb-4 leading-relaxed">A definitive roadmap for founding teams on finding and onboarding their first sales leader.</p>
                            <span className="text-blue-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Guide <ArrowRight className="h-3 w-3" />
                            </span>
                        </Link>
                        <Link href="/blog/ai-resume-boom-old-school-recruiting" className="group p-8 rounded-2xl bg-white border border-grey-200 hover:border-blue-accent/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-accent mb-2">400 Applications and Not One of Them Means Anything</h3>
                            <p className="text-sm text-grey-500 mb-4 leading-relaxed">Why AI-generated resumes broke inbound hiring, and how top employers source outside sales reps instead.</p>
                            <span className="text-blue-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Article <ArrowRight className="h-3 w-3" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
