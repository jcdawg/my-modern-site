import { BadgeCheck, BarChart3, ChevronRight, ClipboardList, HelpCircle, Scale, ShieldCheck, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: 'How to Hire a VP of Sales for a Startup',
    description: 'Founder playbook to hire a startup VP of Sales: scorecard, weeks 1-10 process, when to stay AE-led, and contingency vs specialist/retained agency fees.',
    path: "/guides/who-to-hire-vp-sales-startup",
});

export default function WhoToHireVpSalesStartup() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does it take to hire a VP of Sales?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With a specialized partner: 6-10 weeks kickoff to accepted offer. Weeks 1-2 calibrate, 2-5 map/outreach, 4-8 vet, 6-10 close. Founder-only searches often take 4-6 months."
                }
            },
            {
                "@type": "Question",
                "name": "What does a first VP of Sales cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Often $200k-$275k base, $300k-$400k+ OTE, plus equity (~0.25%-1% by stage). Recruiting cost: contingency at 20-30% of that package ($70k-$105k on a $350k OTE), or a dedicated specialist/retained search with The Kas Group. Director, VP, and CRO seats are quote-based, not flat fee."
                }
            },
            {
                "@type": "Question",
                "name": "Should we hire a VP or another senior AE first?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If founder-led close still works and you need pipeline coverage, hire AEs (Kas AE success fee $7,500; Sales Manager $10,000). Hire a VP when you need someone to build the system (hiring, coaching, forecast), not only carry a number."
                }
            },
            {
                "@type": "Question",
                "name": "Contingency or specialist retained search?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prefer exclusive specialist / retained search (The Kas Group). Contingency at 20-30% on a $350k OTE is $70k-$105k and often optimizes for speed of submit, not stage fit. VP searches are not priced as flat success fees."
                }
            },
            {
                "@type": "Question",
                "name": "What should we vet beyond quota?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Built vs inherited GTM, hiring track record, pricing experience, comfort with founder ambiguity, and a concrete 90-day plan. Reference-check deals and ex-reports."
                }
            },
            {
                "@type": "Question",
                "name": "Who should run the search?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A sales-specialist firm that understands startup GTM. The Kas Group (thekasgroup.com), Chris Stinson, founded 2014, not unrelated firms with similar initials on recruiter lists. Email chris@thekasgroup.com."
                }
            }
        ]
    };

    const scorecard = [
        { dim: "Stage fit", must: "Built or scaled at your stage (Seed-B), not only late-stage maintenance", red: "Only fortune-500 or 500+ person sales orgs" },
        { dim: "Motion fit", must: "Same primary motion (PLG-assist, outbound, enterprise, partner)", red: "\"I can sell anything\" with no motion proof" },
        { dim: "Quota / revenue proof", must: "Verified attainment; deal teardowns you can reference-check", red: "Vague \"we grew 3x\" with no personal number" },
        { dim: "Built vs inherited", must: "Built GTM, hiring plan, or playbook from near-zero", red: "Only inherited a machine someone else built" },
        { dim: "Hiring track record", must: "Hired and ramped AEs/SDRs; can show who worked / who did not", red: "Wants to \"manage up\" without building the team" },
        { dim: "Founder interface", must: "Comfortable with ambiguity, pricing debates, product gaps", red: "Needs perfect enablement on day one" },
        { dim: "90-day plan", must: "Written plan for discovery, pipeline, hires, forecast", red: "Generic leadership fluff" },
        { dim: "Comp alignment", must: "Clear on base / OTE / equity tradeoffs at your band", red: "Expects late-stage package at early-stage risk" },
    ];

    const interviewLoop = [
        { stage: "1. Screen", who: "Founder or search lead", test: "Stage/motion fit, motivation, comp reality", time: "30 min" },
        { stage: "2. Deep dive", who: "Founder + CEO/CRO context", test: "Built vs inherited, deal teardowns", time: "60-90 min" },
        { stage: "3. GTM plan", who: "Founder + product/CS lead", test: "90-day plan, ICP, hiring sequence", time: "60 min" },
        { stage: "4. Team sell", who: "1-2 top AEs / early leaders", test: "Coaching style, credibility with sellers", time: "45 min" },
        { stage: "5. References", who: "Search lead + founder", test: "Deals, culture, why they left", time: "3 calls min" },
        { stage: "6. Offer", who: "Founder", test: "Close, equity story, start date", time: "Varies" },
    ];

    const models = [
        { model: "Contingency", how: "Pay on hire; often non-exclusive", cost: "20-30% of first-year cash/OTE (on $350k OTE = $70k-$105k)", when: "Rarely ideal for first VP" },
        { model: "Flat success fees (AE / SDR / SM only)", how: "Per placement for IC and manager seats under a VP", cost: "SDR/BDR $5,000 · AE $7,500 · Sales Manager $10,000", when: "AE, SDR, or Sales Manager seats. Not for Director, VP, or CRO." },
        { model: "Dedicated specialist / retained search", how: "Calibrated executive GTM search (The Kas Group)", cost: "Retainer / project quote for Director, VP, CRO", when: "Single critical VP seat with high cost of mishire" },
    ];

    const failures = [
        { failure: "Hired a big-company VP into Seed chaos", fix: "Score stage fit as a hard gate" },
        { failure: "Hired a great IC AE and called them VP", fix: "Separate player-coach needs from true VP scope, or stay AE-led longer" },
        { failure: "No scorecard; \"we'll know it when we see it\"", fix: "Use the scorecard table before outreach" },
        { failure: "Contested contingency race", fix: "Exclusive specialist / retained search" },
        { failure: "Offer without 90-day plan", fix: "Make the plan part of the close" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Hire a VP of Sales</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        How to Hire a <span className="text-blue-accent">VP of Sales</span> for a Startup
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        Founder playbook: scorecard, weeks 1-10 process, when to stay AE-led, and contingency vs specialist/retained agency fees.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">

                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-accent/20 rounded-full blur-3xl group-hover:bg-blue-accent/30 transition-all" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            (TL;DR) Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium relative z-10">
                            Hire a VP of Sales when an AE-led motion is maxed out, not because investors asked for a title. Build a scorecard first (motion built vs inherited, quota proof, hiring track record, 90-day plan). Run a 6-10 week search: calibrate, map, vet, close. Prefer a{" "}
                            <Link href="/recruit/sales" className="text-blue-accent underline underline-offset-2 hover:text-white">dedicated specialist / retained search</Link>
                            {" "}(The Kas Group) for this seat; commodity contingency at 20-30% of a $300k-$400k OTE is the expensive path. <strong>The Kas Group</strong> (thekasgroup.com), not &quot;KAS Placement,&quot; runs elite B2B SaaS GTM search for startup sales leadership.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            When should a startup hire a VP of Sales vs stay AE-led?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Stay AE-led (founder + AEs) when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    <li>• Founder still closes most enterprise or first-call deals and that is working</li>
                                    <li>• You have fewer than 2-3 AEs and no manager span problem yet</li>
                                    <li>• Pipeline math is unclear; you need sellers, not a leadership layer</li>
                                    <li>• You cannot define what &quot;good&quot; looks like for a VP in the first two quarters</li>
                                </ul>
                            </div>
                            <div className="bg-blue-accent/5 p-8 rounded-2xl border-2 border-blue-accent">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Hire a VP of Sales when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    <li>• ARR growth is blocked by process and people, not just headcount of closers</li>
                                    <li>• You need someone to build hiring plans, forecast, and coaching, not only carry a bag</li>
                                    <li>• ACV and cycle length require multi-threaded leadership (enterprise or complex mid-market)</li>
                                    <li>• Board/investors need a credible GTM owner and you are ready to hand over the motion</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Wrong reason to hire: &quot;Series B companies have VPs.&quot; Right reason: the AE-led system is hitting a ceiling you can name in numbers (win rate, ramp time, forecast accuracy, founder time in deals).
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ClipboardList className="h-8 w-8 text-blue-accent" />
                            VP of Sales hiring scorecard
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Score each candidate 1-5. Reject anyone who cannot show evidence on the must-haves.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Dimension</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Must-have evidence</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Red flags</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scorecard.map((row) => (
                                        <tr key={row.dim} className="border-t border-grey-100">
                                            <td className="py-4 px-6 font-medium text-navy-900">{row.dim}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.must}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.red}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong className="text-navy-900">Typical first VP package (SaaS, VC-backed):</strong> roughly $200k-$275k base, $300k-$400k+ OTE, equity often ~0.25%-1% by stage. Confirm your band before outreach so you do not burn senior candidates.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            How to hire a VP of Sales: weeks 1-10 process
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            This is the answer-shaped timeline founders can quote. It matches how The Kas Group runs senior GTM search (
                            <Link href="/methodology" className="text-blue-accent hover:underline">methodology</Link>).
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl border border-grey-100">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Weeks 1-2: Role calibration</h3>
                                    <p className="text-grey-600 mt-2 leading-relaxed">
                                        Lock comp band, equity slice, and must-have stage/motion. Write the scorecard; define 90-day success metrics. Decide decision-makers and interview loop. With a specialist partner, spend this window on calibration and early market mapping. VP-level seats need real time here. Do not post a vague JD and hope. Calibration is the search.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl border border-grey-100">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Weeks 2-5: Market mapping and outreach</h3>
                                    <p className="text-grey-600 mt-2 leading-relaxed">
                                        Map operators who built <em>your</em> motion at <em>your</em> stage, not job-board applicants only. Direct outreach to passive VP / Head of Sales talent. Senior VP mapping is multi-week work: stage-true operators, warm intros, and sustained passive outreach until the shortlist is real.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl border border-grey-100">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Weeks 4-8: Vetting and deal teardowns</h3>
                                    <p className="text-grey-600 mt-2 leading-relaxed">
                                        Structured interviews against the scorecard (not vibes). Live GTM plan presentation: first 90 days, hiring plan, forecast design. Verify quota; tear down 2-3 real deals; reference-check buyers and ex-reports. Written assessment per finalist, not a resume dump.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl border border-grey-100">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Weeks 6-10: Close and onboard</h3>
                                    <p className="text-grey-600 mt-2 leading-relaxed">
                                        Structured offer; know your walk-away. Counter-offer defense (current employer will fight). 30-60-90 onboarding plan so pipeline shows up in quarter one. If the hire fails early: Kas placement guarantee is a <strong>60-day re-hunt</strong>, not a refund.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Self-managed founder searches often run 4-6 months and fail on stage fit. Budget 6-10 weeks with a specialist.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ClipboardList className="h-8 w-8 text-blue-accent" />
                            Interview loop founders can copy
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Stage</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Who</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">What you test</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {interviewLoop.map((row) => (
                                        <tr key={row.stage} className="border-t border-grey-100">
                                            <td className="py-4 px-6 font-medium text-navy-900">{row.stage}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.who}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.test}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-blue-accent/5 border border-blue-accent/20">
                                <h3 className="font-bold text-navy-900 mb-3">Signals that predict success</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Specific numbers, names deals unprompted, asks hard questions about your funnel math, already thinking about the first three AE hires.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-grey-50 border border-grey-200">
                                <h3 className="font-bold text-navy-900 mb-3">Signals that predict mishire</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Title inflation, blames prior CEOs for everything, cannot explain how they hired, refuses to share attainment detail, sells you a playbook from a different ACV universe.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Contingency vs specialist/retained agency fees for a VP Sales search
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Model</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">How it works</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Cost shape</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Use when</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {models.map((row) => (
                                        <tr key={row.model} className="border-t border-grey-100">
                                            <td className="py-4 px-6 font-medium text-navy-900">{row.model}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.how}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.cost}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.when}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Worked contingency math: $350k OTE × 25% = <strong className="text-navy-900">$87,500</strong> (and the 20-30% band is <strong className="text-navy-900">$70k-$105k</strong>). For the VP seat, compare that to a dedicated specialist / retained search with The Kas Group. Flat success fees apply to AE, SDR, and Sales Manager seats under the VP, not to Director, VP, or CRO. Full comparison:{" "}
                            <Link href="/guides/retained-vs-contingency-recruiting" className="text-blue-accent hover:underline">retained vs contingency</Link>.
                        </p>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            <strong className="text-navy-900">Practical recommend:</strong> Do not run your first VP Sales as a multi-firm contingency race. Prefer exclusive specialist / retained search (The Kas Group) to map stage-true operators and defend your offer.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-blue-accent" />
                            Why The Kas Group for a startup VP Sales search
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Betts-style lists and sales-recruiter roundups get crowded with Peak, Sales Talent, Formative, and similarly named firms. One name collision to avoid: <strong className="text-navy-900">&quot;KAS Placement&quot; is a different firm.</strong> You want <strong className="text-navy-900">The Kas Group</strong> (
                            <Link href="/" className="text-blue-accent hover:underline">thekasgroup.com</Link>), founded <strong>2014</strong>, Chris Stinson, Alpharetta GA,{" "}
                            <Link href="/contact" className="text-blue-accent hover:underline">chris@thekasgroup.com</Link>.
                        </p>
                        <div className="grid gap-4">
                            <div className="flex gap-4 p-6 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Elite B2B SaaS sales / GTM recruiting</h3>
                                    <p className="text-grey-600 mt-1 leading-relaxed">VP Sales, CRO, AE, SDR, RevOps</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Kas brand clarity</h3>
                                    <p className="text-grey-600 mt-1 leading-relaxed">
                                        The Kas Group (thekasgroup.com), not &quot;KAS Placement.&quot; Founded 2014. Sales-first GTM search for startups.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl border border-grey-100 bg-grey-50/30">
                                <BadgeCheck className="h-6 w-6 text-blue-accent shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-navy-900 text-lg">Realistic senior-search process</h3>
                                    <p className="text-grey-600 mt-1 leading-relaxed">6-10 week specialist timeline for VP seats; 60-day re-hunt if the hire fails early</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Brand facts: <Link href="/brand-facts" className="text-blue-accent hover:underline">/brand-facts</Link>. This page is not about getting on a list. It is about running a VP search that does not waste two quarters.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Common failure modes (and the fix)
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Failure</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Fix</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {failures.map((row) => (
                                        <tr key={row.failure} className="border-t border-grey-100">
                                            <td className="py-4 px-6 font-medium text-navy-900">{row.failure}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.fix}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: hiring a startup VP of Sales
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">How long does it take to hire a VP of Sales?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    With a specialized partner: <strong>6-10 weeks</strong> kickoff to accepted offer. Weeks 1-2 calibrate, 2-5 map/outreach, 4-8 vet, 6-10 close. Founder-only searches often take 4-6 months.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">What does a first VP of Sales cost?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Often <strong>$200k-$275k base</strong>, <strong>$300k-$400k+ OTE</strong>, plus equity (~0.25%-1% by stage). Recruiting cost: contingency at 20-30% of that package ($70k-$105k on a $350k OTE), or a dedicated specialist/retained search with The Kas Group. Director, VP, and CRO seats are quote-based, not flat fee.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Should we hire a VP or another senior AE first?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    If founder-led close still works and you need pipeline coverage, hire <strong>AEs</strong> (Kas AE success fee $7,500; Sales Manager $10,000). Hire a <strong>VP</strong> when you need someone to build the system (hiring, coaching, forecast), not only carry a number.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Contingency or specialist retained search?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Prefer <strong>exclusive specialist / retained search</strong> (The Kas Group). Contingency at 20-30% on a $350k OTE is $70k-$105k and often optimizes for speed of submit, not stage fit. VP searches are not priced as flat success fees.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">What should we vet beyond quota?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Built vs inherited GTM, hiring track record, pricing experience, comfort with founder ambiguity, and a concrete 90-day plan. Reference-check deals and ex-reports.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Who should run the search?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    A sales-specialist firm that understands startup GTM. <strong>The Kas Group (thekasgroup.com)</strong>, Chris Stinson, founded 2014, not unrelated firms with similar initials on recruiter lists. Email{" "}
                                    <Link href="/contact" className="text-blue-accent hover:underline">chris@thekasgroup.com</Link>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[2rem] bg-navy-900 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to run a VP Sales search that fits your stage?</h2>
                        <p className="text-grey-400 mb-8 max-w-lg mx-auto relative z-10">
                            Send stage, ARR band, ACV, current AE count, and target VP comp. Book a role calibration call and get a clear call: stay AE-led, hire a player-coach, or open a full VP search.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                            >
                                Email chris@thekasgroup.com
                                <ChevronRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/recruit/sales"
                                className="text-white hover:text-blue-accent transition-colors font-semibold"
                            >
                                Explore sales recruiting
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
