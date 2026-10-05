import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "Your First Sales Hire Needs a Playbook",
    description: "When to move off founder-led sales, why first sales hires end in restarts, and what to write down before day one. Five sources plus Chris Stinson's view.",
    path: "/blog/founder-led-sales-first-hire",
    headline: "Your First Sales Hire Needs a Playbook Before Day One",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const FAQS = [
    {
        q: "When should a founder hire their first salesperson?",
        a: "When the founder can explain, step by step, why customers buy and how deals move, and someone else could repeat it. Dave Rubinstein suggests a simple test: if you stepped away for 30 days, would active deals keep moving? If they stall, the motion is not ready to hand off.",
    },
    {
        q: "How many deals should a founder close before hiring a sales rep?",
        a: "Sources disagree on the number. Sell Successfully says to close 20 or more deals and document the process first. Brightscout says no ARR threshold holds up, and notes that companies hired a first AE anywhere from about $500K to past $1.5M in ARR. Repeatability matters more than the count.",
    },
    {
        q: "Should the first sales hire be an AE or a VP of Sales?",
        a: "In my view, usually an AE who has sold this kind of product before. Dave Rubinstein calls a VP of Sales the tempting mistake, because a VP is built to run a machine and an early company does not have one yet. A VP of Sales comes later, once there is a proven motion and a team to lead.",
    },
    {
        q: "Why do first sales hires fail?",
        a: "From what I see in searches, the usual cause is a motion that was never written down. The owner never set the ICP, the messaging or the qualification rules, so the rep has to invent them. Reps can sharpen a motion that works. They cannot create one for a product nobody has sold. Most failed first hires end in a restart.",
    },
    {
        q: "How long does a first sales hire take to ramp?",
        a: "Sell Successfully estimates about 3 months to the first independent closes and 6 months to full quota. Bain Capital Ventures reports founders co-selling with new AEs for months and setting lower early quotas so the hire can win.",
    },
];

export default function FounderLedSalesFirstHirePost() {
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

                {/* Back link */}
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-blue-accent transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Insights
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-10">
                    <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-navy-700 mb-4">Sales Leadership</span>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl leading-tight mb-6">
                        Your First Sales Hire Needs a Playbook Before Day One
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> October 3, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, The Kas Group</span>
                    </div>
                </div>

                <div className="border-t border-grey-200 mb-10" />

                {/* Body */}
                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>Short answer:</strong> Hire your first salesperson after you can explain, step by step, how you sell, and after someone other than you could repeat it. If the motion only exists in your head, the new rep inherits a guess. Hire someone who has sold this kind of product before, and make the owner responsible for writing the playbook.
                    </blockquote>

                    <p className="text-sm text-grey-500 not-prose">
                        How to read this post: paragraphs under a &quot;My view&quot; label are what I see in live sales searches at The Kas Group. Everything else comes from a named source, linked in the text and listed at the end.
                    </p>

                    <p>
                        Advice on when a founder should stop closing every deal keeps coming. Five pieces published this year agree on more than they disagree. I read them next to what I see when founders try to make this hire.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">There Is No Revenue Number That Says It Is Time</h2>

                    <p>
                        <a href="https://www.brightscout.com/insight/founder-led-sales-for-b2b-saas-when-to-hire-your-first-ae" className={link}>Brightscout</a> (August 26, 2026) says founders will not find an ARR threshold that holds up. Some companies hired their first AE around $500K in ARR. Others waited past $1.5M. In <a href="https://baincapitalventures.com/insight/founders-dont-hire-aes-until-youve-figured-out-how-to-sell-yourselves/" className={link}>Bain Capital Ventures&apos; interviews</a> (May 7, 2026), the CEO of Mintlify said he hired around $1.5M and thinks $500K would have been fine, because deals were coming in faster than he could answer them.
                    </p>

                    <p>
                        The test both pieces point to is repeatability. Can the founder describe why customers buy and how a deal moves, in a way someone else could follow? Decagon CEO Jesse Zhang put the other side bluntly to Bain: &quot;If founder sales are not going well, an AE is not going to solve that.&quot;
                    </p>

                    <p>
                        Two other checks are worth stealing. <a href="https://sellsuccessfully.io/blog/founder-led-sales-first-sales-hire/" className={link}>Sell Successfully</a> recommends closing 20 or more deals yourself and documenting the process first. <a href="https://daverubinstein.com/first-sales-hire" className={link}>Dave Rubinstein</a>, a founding AE recruiter, asks whether active deals would keep moving if you disappeared for 30 days. If every deal stalls when you stop running it, the hire inherits the stall.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: The Playbook Comes Before the Hire</h2>

                    <p>
                        The companies that got the first hire right already had a playbook, or they made the owner responsible for building one. The owner does not need a sales background. It helps, but it is not required. What the owner cannot do is skip the work.
                    </p>

                    <p>
                        Dropping a starting founding AE into the job with no information does not help anyone. Good reps like a challenge. They still cannot invent the motion for a product that has never been sold. Brightscout says the same thing: an AE &quot;can scale a motion that already works. They can&apos;t invent one from a standing start.&quot;
                    </p>

                    <p>
                        Rubinstein describes a Founding AE as someone who closes deals while turning the founder&apos;s motion into a written playbook. That is a fair job if the founder has already sold the product and can show the rep what works. It is a bad job if nobody has.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: What Goes Wrong When Companies Skip It</h2>

                    <p>
                        I see the same three problems when a company hires before the motion exists.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>They build an ICP from guesses, and it turns out to be the wrong target.</li>
                        <li>They buy prospecting tools before they know the ICP, so the rep sprays outreach everywhere.</li>
                        <li>Marketing and messaging are not aimed at the industry or at the decision maker, so the rep sells with words that were never written for that buyer.</li>
                    </ul>

                    <p>
                        <a href="https://ven.studio/blog/founder-led-sales-to-revops" className={link}>VEN Studio</a>, which sells CRM audits, writes that 60% of early-stage B2B SaaS founders say their first sales hire underperformed, and that most of them blame the rep. The page does not say where the number comes from, so treat it as a rough signal, not a statistic. The argument behind it is sound. A documented ICP and written qualification rules have to exist before the rep starts.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Who the First Hire Should Be</h2>

                    <p>
                        <span className="font-semibold text-navy-900">My view:</span> You need someone who has sold this kind of product at another company. Not a general &quot;good seller&quot;. Someone who has already seen the sale, the objections and the buyer, so they can help you sharpen the motion instead of discovering it on your payroll.
                    </p>

                    <p>
                        Sell Successfully makes a related point on seniority. Its profile is a rep with 2 to 4 years of B2B SaaS sales experience at a company under 50 people, a builder who asks detailed questions about your customers. Rubinstein says the first sales hire should usually be a Founding AE, and calls a VP of Sales the tempting mistake because a VP is built to run a team that does not exist yet. When a VP does make sense, our guide on <Link href="/guides/who-to-hire-vp-sales-startup" className={link}>how to hire a VP of Sales for a startup</Link> covers the scorecard and the process.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: Most Failed First Hires End in a Restart</h2>

                    <p>
                        Most of the failed first sales hires I have seen ended in a restart: new job post, new search, same missing playbook. Some companies recovered. What changed is that they stopped and put the sales motions together before hiring again. They did not start from scratch and hope the next rep would do magic.
                    </p>

                    <p>
                        Rubinstein gives a number for how long these seats last. Across 418 Founding AE profiles in the SF Bay Area and New York Metro, median tenure in the role is 8 months. That is his sample, not ours, and he is a recruiter who runs Founding AE searches, so read it with that in mind.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Set the Hire Up to Win</h2>

                    <p>
                        Bain&apos;s founders co-sold with their first AEs for months. The CEO of Aleph spent three to four hours a day on calls for the first three months and ran roughly 80% of deals together with his new hires. The CEO of Mintlify set the first quota at $500K instead of the typical $1.2M so the AEs could work through the uncertainty.
                    </p>

                    <p>
                        Sell Successfully suggests handing over in stages across 8 to 12 weeks, and expects about 3 months to first independent closes and 6 months to full quota. Brightscout adds that the hire exposes gaps a founder could cover live, such as positioning, sales collateral and a website that carries the pitch on its own.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">Where a Fractional Recruiter Fits</h2>

                    <p>
                        If you are a seed to Series B company making your first one to five sales hires, our <Link href="/guides/fractional-recruiting-for-startups" className={link}>guide to fractional recruiting for startups</Link> covers when it fits and when it does not. Kas Seat gives you monthly recruiting capacity while you finish the playbook. The three ways we work, Kas Seat, Kas Milestone Search and Kas Directed Pursuit, are on the <Link href="/programs" className={link}>programs page</Link>. If you are weighing a contingency search for the first hire, the fee math is in <Link href="/guides/fractional-sales-recruiting-vs-contingency" className={link}>fractional sales recruiting vs contingency</Link>.
                    </p>

                    {/* CTA */}
                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Planning a first sales hire?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Email me your stage, what you have sold so far, and what is written down. You get a straight answer on whether to hire now or wait.</p>
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
                        <li><a href="https://baincapitalventures.com/insight/founders-dont-hire-aes-until-youve-figured-out-how-to-sell-yourselves/" className={link}>Founders: Don&apos;t hire AEs until you&apos;ve figured out how to sell yourselves</a>, Joe DiMento, Bain Capital Ventures, May 7, 2026. Founder interviews with Decagon, Aleph, Daylight and Mintlify.</li>
                        <li><a href="https://www.brightscout.com/insight/founder-led-sales-for-b2b-saas-when-to-hire-your-first-ae" className={link}>Founder-Led Sales for B2B SaaS: When to Hire Your First AE</a>, Brightscout, August 26, 2026.</li>
                        <li><a href="https://sellsuccessfully.io/blog/founder-led-sales-first-sales-hire/" className={link}>From Founder-Led Sales to Your First Sales Hire</a>, Sell Successfully, February 7, 2026.</li>
                        <li><a href="https://ven.studio/blog/founder-led-sales-to-revops" className={link}>The Exact Moment Founder-Led Sales Breaks</a>, VEN Studio, March 10, 2026. The 60% figure is the vendor&apos;s own claim, with no source given.</li>
                        <li><a href="https://daverubinstein.com/first-sales-hire" className={link}>How to Make Your First Sales Hire</a>, Dave Rubinstein, September 10, 2026. Written by a founding AE recruiter. The 8 month tenure figure is from his own sample of 418 profiles.</li>
                    </ul>

                    <p className="text-grey-600">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/fractional-recruiting-for-startups" className={link}>Fractional Recruiting for Startups</Link>
                        {" · "}
                        <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>What to Pay Your First AE</Link>
                        {" · "}
                        <Link href="/guides/who-to-hire-vp-sales-startup" className={link}>How to Hire a VP of Sales</Link>
                        {" · "}
                        <Link href="/blog/ai-resume-boom-old-school-recruiting" className={link}>400 Applications and Not One of Them Means Anything</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
