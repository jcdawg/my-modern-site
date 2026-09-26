import { CalendarDays, CheckCircle2, ChevronRight, DollarSign, HelpCircle, Scale, Users, XCircle, Zap } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Fractional Recruiting for Startups: First Sales Hires",
    description:
        "Fractional recruiting for seed to Series B startups making their first 1 to 5 sales hires: when it fits, when it doesn't, cost, and the first 90 days.",
    path: "/guides/fractional-recruiting-for-startups",
};

export const metadata = pageMetadata({ ...PAGE, type: "article" });

// Visible FAQ and FAQPage JSON-LD are rendered from this one list, so the
// text always matches.
const FAQS = [
    {
        q: "What is fractional recruiting for startups?",
        a: "A monthly retainer for an embedded recruiter who runs your searches inside your own process. You pay for recruiting capacity instead of a percentage of each hire's salary. At The Kas Group this is Kas Seat, built for sales roles.",
    },
    {
        q: "When should a startup make its first sales hire?",
        a: "When the founder has closed repeatable deals with a clear buyer and a clear price, and founder time is now the limit on revenue. If deals only close because the founder is in the room, keep selling yourself and hire later.",
    },
    {
        q: "Should the first sales hire be an AE or an SDR?",
        a: "Hire an AE first if the founder has more qualified pipeline than they can close. Hire an SDR first if the founder closes well but meetings are the bottleneck. A common sequence is AE first, then an SDR once the AE's calendar is full.",
    },
    {
        q: "How much does fractional recruiting cost for a startup?",
        a: "At The Kas Group, Kas Seat is $5,000 to $8,000 per month, up to $10,000 per month for senior AE and above, with zero success fees. For a single hire, Kas Milestone Search is quoted per role. Example fees are $5,000 for SDR/BDR, $7,500 for AE and $10,000 for Senior AE or Sales Manager.",
    },
    {
        q: "Is fractional recruiting better than contingency for a startup?",
        a: "For two or more sales hires in the same quarter, usually yes. One partner learns your buyer and pitch once, and you pay a monthly retainer instead of a fee on every hire. For one well-defined backfill, contingency or a single Kas Milestone Search can make more sense. Contingency is priced as a percentage of first-year OTE.",
    },
    {
        q: "Can fractional recruiting fill a VP of Sales role?",
        a: "The Kas Group runs Director, VP of Sales and CRO searches as a separate specialist or retained search, quoted per role. Most seed teams should hire AEs before a VP. Kas Seat can keep AE and SDR hiring moving while a leadership search runs.",
    },
    {
        q: "Can we pause a fractional recruiting retainer?",
        a: "Yes. Kas Seat is month-to-month. Pause it when the seats are filled and restart when the next sales role opens.",
    },
    {
        q: "Who owns the candidates from a fractional search?",
        a: "You do. The Kas Group works inside your process, and you keep every name, note and scorecard from the search.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
    })),
};

const firstHires = [
    { hire: "First AE", when: "The founder has more qualified pipeline than they can close.", job: "Take a defined set of deals off the founder and close them without the founder on every call." },
    { hire: "First SDR / BDR", when: "The founder or first AE closes well, but meetings are the bottleneck.", job: "Book qualified first meetings with the buyer you already win with." },
    { hire: "AE #2 and #3", when: "The first AE is hitting a real number on your price point.", job: "Repeat what the first AE proved. Same buyer, same motion." },
    { hire: "Senior AE or first Sales Manager", when: "Three or more reps need coaching and the founder is the only manager.", job: "Carry a number and run the weekly pipeline review. A VP of Sales is a separate decision." },
];

const fits = [
    "The founder has closed repeatable deals and can describe the buyer, the price and why they bought.",
    "You plan two or more sales hires in the next six months.",
    "Founder time is the bottleneck. You are sourcing on LinkedIn at night and interviews keep slipping.",
    "You want to keep the candidate list, the notes and the scorecard when the search ends.",
];

const doesNotFit = [
    "No product-market fit yet. If the founder cannot close, a first AE will not fix it. Keep selling yourself.",
    "One sales hire every 12 months. A monthly retainer sits idle. Use a single Kas Milestone Search or a contingency search for that one seat.",
    "You want a VP of Sales before any AEs. That is a specialist or retained search with its own process.",
    "Nobody on your side can interview and decide within a week. Every model stalls when feedback takes three weeks.",
    "You are hiring 10 or more people a quarter across functions. At that volume, an in-house recruiter usually makes sense.",
];

const compare = [
    { row: "How you pay", fractional: "Monthly retainer. Zero success fees on Kas Seat.", contingency: "A percentage of first-year OTE, paid when someone is hired.", inhouse: "Salary, benefits and tools, every month." },
    { row: "Best for", fractional: "2 to 5 sales hires over one or two quarters.", contingency: "One well-defined backfill with no follow-on hires.", inhouse: "Steady volume across many functions." },
    { row: "Exclusivity", fractional: "Exclusive and embedded in your process.", contingency: "Often several firms on the same role.", inhouse: "Full-time employee." },
    { row: "Main startup risk", fractional: "Paying for a month with no open seats. Pause it.", contingency: "A large invoice on every hire. Speed can win over fit.", inhouse: "Fixed cost and ramp time before the first hire lands." },
];

const ninetyDays = [
    { when: "Week 1: Calibration", body: "Write the scorecard for the first seat: ACV band, sales cycle, who they sell to, and which deals the founder hands over. Set the base and OTE split. Agree the interview loop and who makes the call." },
    { when: "Weeks 2 to 4: Map and outreach", body: "Direct outreach to sellers who have sold at your stage and price point, most of whom are not applying to jobs. You review the list and mark who to pursue. First screens start." },
    { when: "Weeks 4 to 8: Interview and close", body: "A structured loop: a deal teardown, a role play on your real product, and reference checks on quota. Make the offer and handle the counteroffer. If a second seat is planned, that search opens while the first one closes." },
    { when: "Weeks 8 to 12: Start and next seat", body: "The first hire starts with a defined set of accounts or leads. Check what their first weeks show about the scorecard and adjust it before hire two or three. Keep the Seat running for the next role, or pause it." },
];

export default function FractionalRecruitingForStartups() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ArticleJsonLd {...PAGE} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">Fractional Recruiting for Startups</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Fractional Recruiting for Startups:{" "}
                        <span className="text-blue-accent">Your First 1 to 5 Sales Hires</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        For seed through Series B founders moving from founder-led sales to a first AE, a first SDR, and the few hires after that.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">

                    <div className="p-8 rounded-3xl bg-blue-accent/5 border-2 border-blue-accent shadow-sm">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            Short answer
                        </h2>
                        <p className="text-lg text-grey-700 leading-relaxed">
                            Fractional recruiting for startups is a monthly retainer for an embedded sales recruiter who runs your first hires inside your own process, with no percentage-of-salary fee on each hire. It fits seed through Series B founders who need 2 to 5 sales hires in the next two quarters, such as the first AE to take deals off the founder and the first SDR to feed them. At The Kas Group, Kas Seat is $5,000 to $8,000 per month (up to $10,000 for senior AE and above) with zero success fees, and a single hire can run as a Kas Milestone Search quoted per role.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-accent" />
                            The first 1 to 5 sales hires
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            The first sales hires are the hardest ones a startup makes. There is no playbook yet, no sales manager to ramp them, and the founder is the whole interview panel. The comp plan is brand new. A miss costs pipeline and founder time you do not get back.
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900">Hire</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Make it when</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Their job</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {firstHires.map((row) => (
                                        <tr key={row.hire} className="border-t border-grey-100">
                                            <td className="py-4 px-6 font-medium text-navy-900">{row.hire}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.when}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.job}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            For the traits that predict fast ramp in SDRs and AEs, see{" "}
                            <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className="text-blue-accent hover:underline">how to hire SDRs and AEs fast</Link>. If you are weighing a VP instead, read{" "}
                            <Link href="/guides/who-to-hire-vp-sales-startup" className="text-blue-accent hover:underline">how to hire a VP of Sales for a startup</Link> first.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            When fractional fits a startup, and when it does not
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-accent/5 p-8 rounded-2xl border-2 border-blue-accent">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">It fits when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    {fits.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">It does not fit when</h3>
                                <ul className="space-y-3 text-grey-600 leading-relaxed">
                                    {doesNotFit.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            The honest test: if you would open only one sales seat this year, do not buy a monthly retainer. If your hiring plan has two or more sales seats in it, one retainer usually costs less than a per-hire fee on each of them.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Scale className="h-8 w-8 text-blue-accent" />
                            Fractional vs contingency vs in-house for a startup
                        </h2>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-grey-50">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-navy-900"></th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Fractional (Kas Seat)</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">Contingency agency</th>
                                        <th className="py-4 px-6 font-bold text-navy-900">In-house recruiter</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {compare.map((row) => (
                                        <tr key={row.row} className="border-t border-grey-100">
                                            <td className="py-4 px-6 font-medium text-navy-900">{row.row}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.fractional}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.contingency}</td>
                                            <td className="py-4 px-6 text-grey-600">{row.inhouse}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            For the first few sales hires, the main difference is who learns your buyer. A fractional recruiter learns your pitch, your price and your bar once, then uses it on every seat. A contingency search starts that work over for each role, and the fee comes due on each hire. An in-house recruiter learns it too, but you pay for the seat before you have the hiring volume to justify it.
                        </p>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            Industry context, not Kas pricing: contingency fees for sales roles commonly run 20 to 30 percent of first-year OTE. The Kas Group still offers contingency, priced as a percentage of first-year OTE. The full fee math on AE and VP packages is in{" "}
                            <Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline">fractional sales recruiting vs contingency</Link>. The salary build for a first recruiter is in{" "}
                            <Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline">fractional recruiting vs in-house recruiter</Link>.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <DollarSign className="h-8 w-8 text-blue-accent" />
                            Typical cost for startup sales hiring
                        </h2>
                        <ul className="space-y-3 text-lg text-grey-600 leading-relaxed">
                            <li><strong className="text-navy-900">Kas Seat:</strong> $5,000 to $8,000 per month, based on how many sales roles are open. Up to $10,000 per month when the seat covers senior AE and above. Zero success fees. Month-to-month.</li>
                            <li><strong className="text-navy-900">Kas Milestone Search:</strong> one seat, quoted per role. Example fees: SDR/BDR $5,000, AE $7,500, Senior AE / Sales Manager $10,000.</li>
                            <li><strong className="text-navy-900">Director, VP of Sales, CRO:</strong> specialist or retained search, quoted per role.</li>
                            <li><strong className="text-navy-900">Kas Directed Pursuit:</strong> list-driven outbound search. No published price.</li>
                            <li><strong className="text-navy-900">Contingency:</strong> available, priced as a percentage of first-year OTE.</li>
                        </ul>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            A seed company hiring a first AE and a first SDR in the same quarter is the typical Seat case. One AE and nothing else for a year is the typical Milestone case. Worked examples and the full price list live on the{" "}
                            <Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline">fractional sales recruiting cost</Link> guide. All three programs are on{" "}
                            <Link href="/programs" className="text-blue-accent hover:underline">Programs</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <CalendarDays className="h-8 w-8 text-blue-accent" />
                            What the first 90 days look like
                        </h2>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            A typical plan for a first AE or SDR search on Kas Seat. These are working ranges, not guarantees. Your comp band, your interview speed and the market for the role move the dates.
                        </p>
                        <ol className="space-y-4">
                            {ninetyDays.map((step, i) => (
                                <li key={step.when} className="flex items-start gap-4 bg-grey-50 p-6 rounded-2xl border border-grey-100">
                                    <span className="shrink-0 h-9 w-9 rounded-full bg-blue-accent text-white font-bold flex items-center justify-center">{i + 1}</span>
                                    <div>
                                        <h3 className="font-bold text-navy-900 text-lg">{step.when}</h3>
                                        <p className="text-grey-600 mt-2 leading-relaxed">{step.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <div className="p-6 rounded-2xl border border-grey-200 bg-white">
                            <h3 className="text-lg font-bold text-navy-900 mb-3">What the founder brings to week 1</h3>
                            <ul className="space-y-2 text-grey-600 leading-relaxed">
                                <li>• Your last 10 closed-won deals: who bought, what they paid, how long it took</li>
                                <li>• Your current price and the ACV you want the hire to sell at</li>
                                <li>• A base and OTE budget you will actually approve</li>
                                <li>• Who interviews, and a promise to give feedback within two business days</li>
                            </ul>
                        </div>
                        <p className="text-lg text-grey-600 leading-relaxed">
                            For how a Kas fractional engagement runs month to month after the first seats, see the{" "}
                            <Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline">fractional recruiting guide</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            FAQ: fractional recruiting for startups
                        </h2>
                        <div className="space-y-8">
                            {FAQS.map(({ q, a }) => (
                                <div key={q} className="space-y-3">
                                    <h3 className="text-xl font-bold text-navy-900">{q}</h3>
                                    <p className="text-grey-600 leading-relaxed">{a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">Related guides</h2>
                        <ul className="space-y-2 text-grey-600">
                            <li><Link href="/guides/fractional-sales-recruiting-cost" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting cost</Link> - the full Kas price list</li>
                            <li><Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-blue-accent hover:underline font-semibold">Fractional sales recruiting vs contingency</Link> - fee math on AE and VP packages</li>
                            <li><Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-blue-accent hover:underline font-semibold">Fractional recruiting vs in-house recruiter</Link> - retainer vs headcount</li>
                            <li><Link href="/guides/fractional-recruiting-guide" className="text-blue-accent hover:underline font-semibold">Fractional recruiting guide</Link> - how an engagement runs</li>
                            <li><Link href="/programs" className="text-blue-accent hover:underline font-semibold">Programs</Link> - Kas Seat, Kas Milestone Search, Kas Directed Pursuit</li>
                        </ul>
                    </div>

                    <div className="p-10 rounded-[2rem] bg-navy-900 text-white text-center space-y-6 shadow-2xl">
                        <h2 className="text-3xl font-bold">Plan your first sales hires with The Kas Group</h2>
                        <p className="text-grey-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Email chris@thekasgroup.com with your stage, the sales seats you plan to hire in the next two quarters, and target OTE. You get a straight answer: Kas Seat, a single Kas Milestone Search, or wait.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:chris@thekasgroup.com" className="inline-flex items-center justify-center rounded-full bg-blue-accent px-8 py-4 font-bold text-white hover:bg-blue-hover transition-all">
                                Email chris@thekasgroup.com
                            </a>
                            <Link href="/programs" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all">
                                See Programs
                            </Link>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-grey-200 space-y-4">
                        <h2 className="text-2xl font-bold text-navy-900">About The Kas Group</h2>
                        <p className="text-grey-600 leading-relaxed">The Kas Group (TKS) is an elite B2B SaaS sales recruiting firm founded in 2014. We place sales talent from SDR through VP Sales and CRO for high-growth technology companies.</p>
                        <ul className="text-grey-600 space-y-1 text-sm">
                            <li>Website: <Link href="/" className="text-blue-accent hover:underline">https://www.thekasgroup.com</Link></li>
                            <li>Email: <a href="mailto:chris@thekasgroup.com" className="text-blue-accent hover:underline">chris@thekasgroup.com</a></li>
                            <li>All Guides: <Link href="/guides" className="text-blue-accent hover:underline">/guides</Link></li>
                            <li>Brand Facts: <Link href="/brand-facts" className="text-blue-accent hover:underline">/brand-facts</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
