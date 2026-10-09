import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "What to Pay Your First AE",
    description: "First AE OTE: SMB and mid-market $140K to $220K, enterprise $220K to $300K. Why ranges disagree, and how to pressure-test attainment.",
    path: "/blog/early-stage-sales-comp-first-ae-ote",
    headline: "What to Pay Your First AE: OTE Ranges That Hold Up",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const FAQS = [
    {
        q: "How much should a startup pay its first AE?",
        a: "For an SMB or mid-market first AE, recruiter estimates put OTE at about $140K to $220K. An enterprise first AE typically runs $220K to $300K, and the word enterprise belongs next to any figure near $280K. Those first-AE bands are recruiter estimates, not survey data. RepVue's 2026 medians sit inside them: about $135K to $140K for SMB AEs, $180K for mid-market, and about $275K for enterprise.",
    },
    {
        q: "Why do first AE OTE ranges disagree so much?",
        a: "The gap is mostly segment, not disagreement. Sources that publish $140K to $160K are talking about seed or SMB. Sources that publish $220K to $280K or more are talking about enterprise motion or coastal founding AE searches. Blend them into one 'first AE' number and the range looks twice as wide as it is.",
    },
    {
        q: "Is OTE the same as take-home pay for an AE?",
        a: "No. OTE assumes the rep hits quota. RepVue's 2026 data has about 38% of enterprise AEs and 42% of SMB AEs at quota. The Bridge Group's 2026 AE report has 48% at quota. Treat OTE as a plan target, not a guarantee of what the hire will earn.",
    },
    {
        q: "What should a founder ask before publishing a first AE offer?",
        a: "In my view: what percentage of the team hit OTE last year, and how many of those were still ramping versus established. Also ask what outbound the hire owns, whether any pipeline is brought to them, and how long ramp lasts. Founders will play the plan up to attract the best person, so pressure-test it before you post.",
    },
    {
        q: "What happens if a seed founder sets a high quota with no guarantee?",
        a: "In my view, people willing to take a chance still show up. The pool of currently successful reps who are already earning high commissions or above OTE shrinks hard, because nothing is guaranteed. You end up looking for someone hungry and willing to prove themselves, with slimmer pickings among the candidates you can pull from. The founder has to own that trade.",
    },
];

export default function EarlyStageSalesCompFirstAeOtePost() {
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

    return (
        <div className="bg-white py-16 sm:py-24">
            <ArticleJsonLd title={PAGE.title} description={PAGE.description} path={PAGE.path} headline={PAGE.headline} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="mx-auto max-w-3xl px-6 lg:px-8">

                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-blue-accent transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Insights
                    </Link>
                </div>

                <div className="mb-10">
                    <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-navy-700 mb-4">Sales Leadership</span>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl leading-tight mb-6">
                        What to Pay Your First AE: OTE Ranges That Hold Up
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> October 5, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, The Kas Group</span>
                    </div>
                </div>

                <div className="border-t border-grey-200 mb-10" />

                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>Short answer:</strong> Pay a first AE selling SMB or mid-market deals about $140K to $220K OTE. Pay an enterprise first AE about $220K to $300K, and put the word enterprise next to any figure near $280K. Those first-AE bands are recruiter estimates. Pressure-test attainment, outbound ownership and ramp before you publish the offer, because OTE is a plan target, not take-home pay.
                    </blockquote>

                    <p className="text-sm text-grey-500 not-prose">
                        How to read this post: paragraphs under a &quot;My view&quot; label are what I see in live sales searches at The Kas Group. Everything else comes from a named source, linked in the text and listed at the end.
                    </p>

                    <p>
                        Founders keep asking the same question when they open a first AE search: how much should we pay? Five sources published this year put a first AE anywhere from about $140K to $280K OTE. That gap looks like chaos until you split it by segment. I read those numbers next to what I ask before I take a search.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Why the Ranges Look Twice as Wide as They Are</h2>

                    <p>
                        <a href="https://www.repvue.com/blog/sales-salary-guide" className={link}>RepVue&apos;s 2026 sales salary guide</a> (self-reported, verified submissions) puts median OTE at about $135K to $140K for SMB AEs, $180K for mid-market AEs, and about $275K for enterprise AEs. The all-AE median sits near $200K. Those are medians across company sizes, not first-hire packages.
                    </p>

                    <p>
                        <a href="https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics" className={link}>The Bridge Group&apos;s 2026 AE report</a> (158 B2B companies) finds a $200K median OTE across every AE in the sample, with median quota at 4.6x OTE and a 6.2 month ramp. The sample skews to established firms. It is not a seed benchmark.
                    </p>

                    <p>
                        Recruiter and advisor sources fill in the first-hire band. <a href="https://www.closedwontalent.com/post/2026-sales-and-gtm-comp-benchmarks-for-saas-startups" className={link}>ClosedWon Talent</a> puts founding AE OTE at $160K to $220K for SMB and mid-market, and $220K to $280K for enterprise. <a href="https://scalerr.com/founding-ae-compensation" className={link}>Scalerr</a> publishes a blended $200K to $280K headline, then splits it: SMB $160K to $200K, mid-market $200K to $240K, and enterprise Series A $260K to $350K. <a href="https://hub.causo.ai/guides/sales-compensation-plans-seed-2026" className={link}>Causo Hub</a> sits at the low end with a seed package of about $140K to $160K OTE. None of those first-AE figures come from Carta or Pave.
                    </p>

                    <p>
                        The story is the split. A $140K seed or SMB number and a $280K enterprise number are both real in their own lane. Put them in one &quot;first AE&quot; range and the plan looks twice as messy as it is.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Safe Ranges to Publish</h2>

                    <p>
                        From those sources, the bands I am comfortable putting in front of a founder are:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">First AE, SMB or mid-market:</strong> about $140K to $220K OTE. Recruiter estimate. Data-backed medians sit inside it (RepVue SMB about $135K to $140K, mid-market $180K, Bridge all-AE $200K).</li>
                        <li><strong className="text-navy-900">First AE, enterprise motion:</strong> about $220K to $300K OTE, higher at Series A and beyond with six-figure deals. Recruiter estimate. The RepVue enterprise median of about $275K is a median across all company sizes, not a founding AE package. Any figure near $280K needs the word enterprise next to it.</li>
                    </ul>

                    <p>
                        Our <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>SDR and AE fast-ramp guide</Link> carries the same split for general AEs ($120K to $200K SMB and mid-market, $220K to $300K enterprise) plus SDR and senior AE rows. Use that page for the full table. Use this post for the first-hire decision.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">OTE Is Not Take-Home Pay</h2>

                    <p>
                        OTE assumes the rep hits quota. Most do not. RepVue&apos;s 2026 data has about 38% of enterprise AEs and 42% of SMB AEs at quota. The Bridge Group&apos;s 2026 AE report has 48% at quota. A plan that looks rich on paper can still leave a hire underwater if attainment is weak.
                    </p>

                    <p>
                        Early-stage plans usually lean toward more base and a ramp or guarantee, because quota is still a guess. Scalerr suggests a first-year quota of about 3x to 4x OTE and a commission guarantee for the first two quarters. That sits below the Bridge Group&apos;s mature median of 4.6x. The difference is stage, not a fight over the right multiple.
                    </p>

                    <p>
                        Split matters as much as the headline. Mature AEs often sit near 50/50 base to variable. First seats usually run heavier on base, closer to 60/40, because the hire is building pipeline while trying to sell. ClosedWon Talent and Scalerr both warn that OTE means nothing if the quota is unattainable. Publish the base, the variable, the quota multiple and the ramp in the same breath as the OTE number, or a good candidate will ask for them on the first call anyway.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: What I Ask Before I Take a Search</h2>

                    <p>
                        When a founder sends me an offer for a first AE, I do not take the OTE number at face value. I ask what percentage of the team hit OTE last year, and which of those people were still ramping versus established. That tells me how realistic the plan is. Founders will play it up to attract the best person, so I pressure-test it.
                    </p>

                    <p>
                        I also ask what type of outbound they run. Does the rep own all of their own outbound, or does any pipeline get brought to them? And how long is ramp? A $200K OTE with zero inbound and a 30 day ramp is a different job from a $200K OTE with warm meetings and a 90 day ramp. The number alone does not tell you which one you are hiring for.
                    </p>

                    <p>
                        If the founder cannot answer those questions cleanly, I pause the search. Not forever. Just long enough to write down attainment, outbound ownership and ramp so the offer matches the job. That is cheaper than posting a plan that looks strong on LinkedIn and falls apart in the first interview.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: High Quota, No Guarantee</h2>

                    <p>
                        Seed founders sometimes want a high quota with no guarantee. You will still get people willing to take a chance. The pool of currently successful reps who are already earning high commissions or above OTE shrinks hard, because nothing is guaranteed. You end up looking for someone hungry and willing to prove themselves, with slimmer pickings among the candidates you can pull from. The founder has to own that trade. I will run the search either way. I will also say what the plan costs them in candidate quality before we post it.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Comp Comes After the Playbook</h2>

                    <p>
                        Comp will not fix a motion that only exists in the founder&apos;s head. If you are still deciding whether to hire at all, read <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link> first. Seed to Series B companies making their first one to five sales hires can also look at <Link href="/guides/fractional-recruiting-for-startups" className={link}>fractional recruiting for startups</Link>. When the seat is a VP of Sales instead of a first AE, use the <Link href="/guides/who-to-hire-vp-sales-startup" className={link}>hire a VP of Sales guide</Link>. The three ways we work, Kas Seat, Kas Milestone Search and Kas Directed Pursuit, are on the <Link href="/programs" className={link}>programs page</Link>. Fee math against contingency is on the <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>fractional vs contingency guide</Link>, and the full Kas price list is on the <Link href="/guides/fractional-sales-recruiting-cost" className={link}>cost guide</Link>.
                    </p>

                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Building a first AE offer?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Email me your stage, ACV band, quota and ramp plan. You get a straight read on whether the package will clear the market.</p>
                        <a
                            href="mailto:chris@thekasgroup.com"
                            className="inline-block rounded-md bg-blue-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-hover transition-colors"
                        >
                            Email chris@thekasgroup.com
                        </a>
                    </div>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Frequently Asked Questions</h2>

                    <div className="space-y-6 pt-2 not-prose">
                        {FAQS.map((f) => (
                            <div key={f.q} className="bg-grey-50 p-6 rounded-2xl border border-grey-200">
                                <h3 className="font-bold text-navy-900 mb-2">{f.q}</h3>
                                <p className="text-grey-600">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Sources</h2>

                    <ul className="list-disc pl-6 space-y-2 text-base">
                        <li><a href="https://www.repvue.com/blog/sales-salary-guide" className={link}>Sales Salary Guide: What Sales Reps are Earning in 2026</a>, RepVue, January 2, 2026 (July 2026 update). Self-reported verified submissions. Medians by segment and quota attainment.</li>
                        <li><a href="https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics" className={link}>2026 AE Models, Motions &amp; Metrics</a>, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. Median OTE $200K, quota 4.6x, 48% at quota, 6.2 month ramp.</li>
                        <li><a href="https://www.closedwontalent.com/post/2026-sales-and-gtm-comp-benchmarks-for-saas-startups" className={link}>2026 Sales Rep Comp Benchmarks for SaaS Startups</a>, ClosedWon Talent, April 17, 2026. Recruiter ranges for founding AE by segment.</li>
                        <li><a href="https://scalerr.com/founding-ae-compensation" className={link}>Founding AE Compensation Benchmarks 2026</a>, Scalerr, August 2026 (updated September 8, 2026). Recruiter ranges, quota guidance of 3x to 4x OTE, and a two-quarter commission guarantee.</li>
                        <li><a href="https://hub.causo.ai/guides/sales-compensation-plans-seed-2026" className={link}>Sales compensation plans at seed in 2026</a>, Causo Hub, June 21, 2026. Seed-stage first AE package of about $140K to $160K OTE.</li>
                    </ul>

                    <p className="text-grey-600">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>Hire SDRs and AEs with Zero Ramp-Up Time</Link>
                        {" · "}
                        <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>
                        {" · "}
                        <Link href="/guides/fractional-sales-recruiting-cost" className={link}>Fractional Sales Recruiting Cost</Link>
                        {" · "}
                        <Link href="/guides/fractional-recruiting-guide" className={link}>What Is Fractional Recruiting?</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
