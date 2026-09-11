import { BarChart3, Building2, CheckCircle2, ChevronRight, DollarSign, HelpCircle, Scale, Target, Users, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "How to Hire SaaS SDRs and AEs with Zero Ramp-Up Time",
    description:
        "How to hire SDRs and AEs who produce in weeks, not quarters. Ramp-adjacent traits, a 4-week fast-ramp scorecard, interview questions, comp and OTE math, and when fractional hiring covers Seed-B sales volume.",
    path: "/guides/how-to-hire-saas-sdrs-fast-ramp",
});

export default function HowToHireSaasSdrsFastRamp() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What makes an SDR or AE a 'zero ramp-up' hire?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A candidate whose pattern matches the motion you already run: the same call or deal volume, the same pipeline stage, the same buyer, and the same ACV band. Proven in that exact motion, with quota-verified (not self-reported) numbers. Title alone is not enough.",
                },
            },
            {
                "@type": "Question",
                name: "What should you interview for to reduce SDR/AE ramp time in B2B SaaS?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hire for motion match, not generic sales charisma. Ask for a walkthrough of their actual weekly activity pattern, example calls and closes, quota attainment with numbers, pipeline hygiene, and how they would handle your specific first 30 days. Coachability within the first month matters more than years of exact-title experience.",
                },
            },
            {
                "@type": "Question",
                name: "How long does it take an SDR or AE to ramp to full productivity?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Realistic bands: an SDR with a matching motion can handle volume in roughly 2-4 weeks, an AE commonly needs 60-90 days to reach full quota, and a senior revenue role can take a full quarter-plus. Budget for it and protect it; hiring 'fast' still requires a 30-day sprint plan.",
                },
            },
            {
                "@type": "Question",
                name: "What does a quota-verified sales vetting process look like?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "It validates that numbers are real rather than taking 'I hit 110%' at face value. We drill into specific data points: quota in dollars, attainment by quarter, deal size ranges, win rate, sales cycle length, and manager reference checks against those claims. This is how you cut first-quarter attrition risk.",
                },
            },
            {
                "@type": "Question",
                name: "What comp structure reduces SDR/AE ramp-up risk?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A structure that rewards the activity you need now rather than only the close you hope for later. For SDRs, protect base pay for call volume early. For AEs, use a base-variable split with realistic ramp quotas (often 50-70% of full quota for months 1-3) so the first quarter isn't unwinnable.",
                },
            },
            {
                "@type": "Question",
                name: "Should a Seed-Series B team use fractional hiring to fill SDR/AE seats?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For bursty, quota-driven SDR/AE volume, fractional sales hiring covers it without paying for a full-time desk. The Kas Group fractional retainers have zero success fees (Tier 1 $5,000/mo up to 2 Seed/A roles; Tier 2 $8,000/mo up to 5 GTM roles), with flat success fees (SDR $5k, AE $7.5k, Sr AE/SM $10k) as a separate per-hire option.",
                },
            },
        ],
    };

    const traitRows = [
        { trait: "Motion match", what: "Same call volume, pipeline stage, buyer, and selling motion you run every day.", why: "Activity transfers fast; titles and industries transfer slowly." },
        { trait: "Quota-verified numbers", what: "Attainment you can pressure-test in dollars and quarters, with manager references.", why: "Self-reported 'hit 110%' is the top source of first-quarter misses." },
        { trait: "Playbook match to ACV band", what: "Has sold at a comparable ACV ($10k deals need a different motion than $100k deals).", why: "Mismatched ACV experience is the most common ramp killer." },
        { trait: "Coachability in 30 days", what: "Will adapt to your script, your sequence, and your CRM within the first month.", why: "The best profile on paper still stalls if they won't adopt your motion." },
        { trait: "Activity pattern", what: "SDR: sustained daily volume. AE: disciplined pipeline hygiene and follow-up.", why: "Activity is the leading indicator of production before quota evidence exists." },
    ];

    const rampRows = [
        { role: "SDR (motion-matched)", handleVolume: "2-4 weeks", fullQuota: "4-8 weeks", notes: "Fastest seat to productivity; wins on volume and repetition." },
        { role: "AE (closed-won, motion-matched)", handleVolume: "30-60 days", fullQuota: "60-90 days", notes: "Needs pipeline runway to develop before closed revenue shows." },
        { role: "Senior AE / Sales Manager", handleVolume: "60+ days", fullQuota: "Quarter-plus", notes: "Transfers strategy and leadership, but quota proof takes a cycle." },
        { role: "New to the motion (high risk)", handleVolume: "90+ days", fullQuota: "2+ quarters", notes: "Hiring a motion mismatch is the most expensive shortcut you can take." },
    ];

    const scorecardRows = [
        { area: "What the candidate ran", loose: "Same title, referrals", tight: "Same title AND same motion, verified" },
        { area: "Numbers", loose: "'Hit 110%', no detail", tight: "Dollar quota, attainment by quarter, win rate" },
        { area: "ACV band", loose: "Any SaaS revenue", tight: "Comparable ACV to your offer" },
        { area: "30-day plan", loose: "'I'll ramp on my own'", tight: "A written week-1-4 sprint against your script and sequence" },
    ];

    const compRows = [
        { line: "SDR OTE (Seed-B reminder)", low: "$70k-$85k", mid: "$85k-$95k", high: "$95k-$110k", note: "Higher base-to-variable ratio" },
        { line: "AE OTE (Seed-B reminder)", low: "$110k-$130k", mid: "$130k-$160k", high: "$160k-$190k", note: "Base-variable split, ramp quotas months 1-3" },
        { line: "Senior AE / Sales Manager", low: "$150k-$180k", mid: "$180k-$220k", high: "$220k+", note: "Larger variable, longer ramp" },
    ];

    const checklistRows = [
        { q: "Do we know our exact motion (volume, stage, buyer, ACV band)?", lean: "Define first" },
        { q: "Are we validating numbers, or taking 'I hit 110%' at face value?", lean: "Quota-verified" },
        { q: "Is this a bursty sprint or a permanent desk?", lean: "Sprint = fractional, permanent = in-house" },
        { q: "Does our comp make month 1-3 winnable for a new hire?", lean: "Ramp quotas" },
        { q: "Do we have a written 30-day ramp plan and a named owner?", lean: "Onboarding sprint" },
        { q: "Are we paying for a full desk to fill 2-5 seats?", lean: "Fractional or flat success fee" },
    ];
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">
                            Home
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">
                            Guides
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Hire SDRs &amp; AEs Fast</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        How to Hire SaaS SDRs and AEs with{" "}
                        <span className="text-blue-accent">Zero Ramp-Up Time</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        The traits, scorecard, interview questions, comp math, and ramp timeline for hiring SDRs and AEs who produce in weeks instead of quarters.
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
                            Hiring SDRs and AEs who are productive in weeks instead of quarters is about hiring for{" "}
                            <strong className="text-white">the motion you already run</strong>, not for generic sales talent. A zero-ramp candidate has three markers: a matching activity pattern (same call volume and pipeline stage),{" "}
                            <strong className="text-white">quota-verified numbers</strong> (not just &quot;I hit 110%&quot;), and a playbook that fits your offer and ACV band. Budget a realistic ramp (SDRs handle volume in{" "}
                            <strong className="text-white">2-4 weeks</strong>, AEs reach full quota in{" "}
                            <strong className="text-white">60-90 days</strong>) and protect it with a written 30-day sprint and ramp-friendly comp. For Seed through Series B with bursty volume, fractional sales hiring covers SDR/AE seats at flat success fees (SDR $5k, AE $7.5k, Sr AE/SM $10k) or a fractional retainer with zero success fees, instead of paying for a full-time desk.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <BarChart3 className="h-8 w-8 text-blue-accent" />
                            Why ramp time is the real cost of a bad SDR/AE hire
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Most teams mis-hire salespeople by optimizing for the resume: the right title, the right industry, the right number of years. But ramp time is a function of <strong>motion match</strong>, not years. A seller who ran a $100k-ACV, meetings-or-die SDR motion will out-produce a &quot;senior AE&quot; who only ever sold $5k self-serve seats, in the same first 60 days, because the activity pattern transfers while the story does not.
                        </p>
                        <p className="text-grey-600 leading-relaxed">
                            The hidden cost of getting this wrong is compounding: a 90-day ramp that becomes a 6-month stall, then a re-hire, then another ramp. For quota-driven SDR/AE seats, the cheapest lever is to hire for the motion you run and to verify the numbers before you start the clock.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Target className="h-8 w-8 text-blue-accent" />
                            The 5 traits that actually predict fast ramp
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Score every shortlist against these five. Each is checkable in an interview or a reference call, and each has a direct line to ramp speed.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Trait</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">What to look for</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Why it matters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {traitRows.map((row) => (
                                        <tr key={row.trait} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 font-bold text-navy-900 align-top text-sm md:text-base">{row.trait}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.what}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            The 4-week fast-ramp scorecard
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            Use this during screening and reference checks. The &quot;tight&quot; column is the profile that produces in weeks; the &quot;loose&quot; column is where first-quarter attrition starts.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Area</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Loose (adds ramp time)</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Tight (fast ramp)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scorecardRows.map((row) => (
                                        <tr key={row.area} className="border-b border-grey-100 last:border-0 hover:bg-grey-50/50">
                                            <td className="py-4 px-6 font-bold text-navy-900 align-top text-sm md:text-base">{row.area}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.loose}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.tight}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            The zero-ramp interview questions
                        </h2>
<ul className="space-y-4">
                            <li className="p-4 rounded-xl border border-grey-200 bg-white flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0" />
                                <span className="text-grey-600 leading-relaxed">
                                    <strong>Activity pattern:</strong> &quot;Walk me through your exact weekly activity at your last company. How many dials or touches, in which stages, against what ACV?&quot; They should answer in numbers, not adjectives.
                                </span>
                            </li>
                            <li className="p-4 rounded-xl border border-grey-200 bg-white flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0" />
                                <span className="text-grey-600 leading-relaxed">
                                    <strong>Quota-verified numbers:</strong> &quot;What was your quota in dollars by quarter, and what did you actually hit?&quot; Then pressure-test: &quot;Who can confirm that, and what will they say about your weakest quarter?&quot;
                                </span>
                            </li>
                            <li className="p-4 rounded-xl border border-grey-200 bg-white flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0" />
                                <span className="text-grey-600 leading-relaxed">
                                    <strong>ACV / motion match:</strong> &quot;What is the largest deal you&apos;ve closed, and the typical deal size you sold week to week?&quot; A mismatch here is the leading ramp killer.
                                </span>
                            </li>
                            <li className="p-4 rounded-xl border border-grey-200 bg-white flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0" />
                                <span className="text-grey-600 leading-relaxed">
                                    <strong>30-day plan:</strong> &quot;Write me your weeks 1-4 sprint against our script and sequence.&quot; Motion-matched candidates can outline this on the spot; story-sellers stall.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            Comp that reduces ramp risk
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            The right structure protects the ramp. For SDRs, protect base pay in exchange for call volume early. For AEs, use realistic ramp quotas (often 50-70% of full quota in months 1-3) so the first quarter is actually winnable.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Role</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Low</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Mid</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">High</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Structure note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {compRows.map((row) => (
                                        <tr key={row.line} className="border-b border-grey-100 last:border-0">
                                            <td className="py-4 px-6 text-navy-900 font-semibold">{row.line}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.low}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.mid}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.high}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            Realistic ramp timeline by role
                        </h2>
<div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-4 px-6 font-bold text-navy-900">Role</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Handle volume</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Full quota</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rampRows.map((row) => (
                                        <tr key={row.role} className="border-b border-grey-100 last:border-0 hover:bg-grey-50/50">
                                            <td className="py-4 px-6 font-bold text-navy-900 align-top text-sm md:text-base">{row.role}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.handleVolume}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.fullQuota}</td>
                                            <td className="py-4 px-6 text-grey-600 text-sm md:text-base">{row.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-grey-600 leading-relaxed">
                            Even a perfect motion match needs a deliberate first 30 days. Assign an owner, a script, a sequence, and a check-in cadence. The candidates ramp fast; the process has to, too.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-accent" />
                            Cover SDR/AE volume without paying for a full desk
                        </h2>
                        <p className="text-grey-600 leading-relaxed">
                            For Seed through Series B with bursty, quota-driven SDR/AE volume, fractional sales hiring covers the seats without a full-time headcount. The Kas Group fractional retainers are{" "}
                            <strong>$5,000/mo</strong> (Tier 1, up to 2 Seed/A roles) or{" "}
                            <strong>$8,000/mo</strong> (Tier 2, up to 5 GTM roles) with{" "}
                            <strong>zero success fees</strong>, and pause month to month. Separate per-hire flat success fees are SDR $5k, AE $7.5k, Sr AE/SM $10k. For the full model, see the{" "}
                            <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">
                                fractional recruiting guide
                            </Link>
                            .
                        </p>
                        <div className="p-8 rounded-3xl bg-grey-50 border border-grey-100 relative overflow-hidden">
                            <p className="text-grey-600 leading-relaxed">
                                This page owns SDR/AE fast-ramp hiring. For the head-to-head of fractional versus an in-house seat, see{" "}
                                <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline">
                                    fractional recruiting vs in-house recruiter
                                </Link>
                                . For fee math against contingency agencies, see{" "}
                                <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">
                                    fractional sales recruiting vs contingency
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Target className="h-8 w-8 text-blue-accent" />
                            Decision checklist: hire fast-ramp SDRs/AEs
                        </h2>
                        <div className="space-y-6">
                            {checklistRows.map((row) => (
                                <div key={row.q} className="p-4 rounded-2xl border border-grey-200 bg-white flex justify-between gap-4 items-start">
                                    <p className="text-grey-600 leading-relaxed font-semibold">{row.q}</p>
                                    <span className="inline-flex shrink-0 px-3 py-1 rounded-full bg-blue-accent/10 text-blue-accent text-xs font-bold">{row.lean}</span>
                                </div>
                            ))}
                        </div>
                    </div>
<div className="space-y-8 bg-grey-50 p-8 rounded-3xl border border-grey-100">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: Fast-ramp SDR and AE hiring
                        </h2>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">What makes an SDR or AE a &apos;zero ramp-up&apos; hire?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    A candidate whose pattern matches the motion you already run: the same call or deal volume, the same pipeline stage, the same buyer, and the same ACV band. Proven in that exact motion, with quota-verified (not self-reported) numbers.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">How long does it take an SDR or AE to ramp up?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Realistic bands: an SDR with a matching motion can handle volume in roughly 2-4 weeks, an AE commonly needs 60-90 days to reach full quota, and a senior revenue role can take a full quarter-plus.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">What does a quota-verified sales vetting process look like?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    It validates that numbers are real rather than taking &quot;I hit 110%&quot; at face value, by drilling into quota in dollars, attainment by quarter, deal size ranges, win rate, sales cycle length, and manager reference checks.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-navy-900 text-lg">Should a Seed-Series B team use fractional hiring for SDR/AE seats?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    For bursty, quota-driven volume, fractional sales hiring covers it without paying for a full-time desk. Kas fractional retainers have zero success fees (Tier 1 $5,000/mo up to 2 Seed/A roles; Tier 2 $8,000/mo up to 5 GTM roles), with flat success fees (SDR $5k, AE $7.5k, Sr AE/SM $10k) as a separate option.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Need SDR/AE seats filled now?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email chris@thekasgroup.com with your open SDR/AE roles, ACV band, and timeline. You get a motion-matched shortlist and a clear recommendation: fractional, flat success fee, or build in-house.
                        </p>
                        <Link
                            href="/contact"
                            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                        >
                            Contact The Kas Group
                            <ChevronRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
