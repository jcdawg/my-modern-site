import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "AI SDRs Are Here. Who Startups Still Need",
    description: "Salesforce launched an AI SDR. Do startups still need SDRs? Yes, but the work changes. What AI handles, what a rep still owns, and who to hire first.",
    path: "/blog/ai-sdr-who-you-still-need",
    headline: "Salesforce Just Shipped an AI SDR. Here's Who You Still Need.",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    salesforce: "https://www.salesforce.com/news/stories/agentforce-job-ready-ai-agents/",
    leadium: "https://www.leadium.com/blog/are-ai-sdrs-worth-it",
    pipelineBee: "https://pipelinebee.com/research/ai-sdr-report/",
    apollo: "https://www.apollo.io/insights/replaceminimize-sdrs-with-ai-to-support-heavy-outreach-while-scaling-sales-hiring",
    techcrunch: "https://techcrunch.com/2026/10/02/techcrunch-disrupt-2026-clays-kareem-amin-on-the-rise-of-the-gtm-engineer/",
    revnu: "https://revnu.partners/blog/gtm-engineer-hiring",
    gtmCouncil: "https://gtmcouncil.substack.com/p/analysis-of-1394-gtm-engineer-roles",
};

const FAQS = [
    {
        q: "Do startups still need SDRs now that AI can do outreach?",
        a: "In my view, yes. The SDR role stays, but the work inside it moves. AI can handle research, list building and first drafts at volume. A person still owns the judgment calls, the live conversations and the handoff to close. Most early teams win with one strong rep who uses AI well.",
    },
    {
        q: "What is Salesforce Hunter?",
        a: "Hunter is the outbound sales agent Salesforce announced on September 11, 2026. Salesforce says it works a pipeline from research to outreach and collaborates with sellers over weeks and months. It is in pilot now, with general availability planned for November 2026.",
    },
    {
        q: "Do AI SDRs book qualified meetings?",
        a: "They book meetings. The open question is what happens after. Pipeline Bee's evidence review finds AI wins on raw volume and loses ground at show rate, conversion to opportunity and revenue. Pipeline Bee also notes most of that data comes from vendors, so treat it as directional.",
    },
    {
        q: "Should a seed startup hire an SDR or a GTM engineer?",
        a: "It depends on what is missing. A GTM engineer builds the research and outreach system. A rep runs the conversations that system creates. Write down which one your pipeline lacks today before you open the seat.",
    },
    {
        q: "What should a human SDR own when AI handles outreach?",
        a: "Leadium, which runs a human SDR agency, puts live calls, objection handling and qualifying leads on the human side. Pipeline Bee says people should own qualification and the conversations that decide revenue. Both put research, enrichment and first drafts on the AI side.",
    },
];

export default function AiSdrWhoYouStillNeedPost() {
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
                        Salesforce Just Shipped an AI SDR. Here&apos;s Who You Still Need.
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-grey-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> October 9, 2026</span>
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> Chris Stinson, The Kas Group</span>
                    </div>
                </div>

                <div className="border-t border-grey-200 mb-10" />

                <div className="prose prose-lg max-w-none text-grey-700 leading-relaxed space-y-6">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium not-prose">
                        <strong>Short answer:</strong> Yes, startups still need SDRs with AI. The work inside the role changes. AI can research accounts, build lists and send first touches at volume. A person still owns the judgment calls, the live conversations and the handoff to close. Most early teams should hire one strong rep and give that rep good AI tools.
                    </blockquote>

                    <p className="text-sm text-grey-500 not-prose">
                        How to read this post: paragraphs under a &quot;My view&quot; label are what I see in live sales searches at The Kas Group. Everything else comes from a named source, linked in the text and listed at the end. Salesforce, Leadium, Pipeline Bee and Apollo all sell sales products or services. Their numbers are vendor claims, and I label them that way.
                    </p>

                    <p>
                        Founders are asking me the same thing this fall. If AI can write and send outbound, do we still need an SDR? Salesforce just made the question louder. Here is what shipped, what the numbers say, who is saying them, and what I tell founders.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What Salesforce Shipped</h2>

                    <p>
                        On September 11, 2026, <a href={SRC.salesforce} className={link}>Salesforce announced a set of job-ready Agentforce agents</a>. One of them is Hunter, which Salesforce calls an outbound sales agent. Salesforce says Hunter works a pipeline from research to outreach and collaborates with sellers over weeks and months. It is in pilot now. Salesforce lists general availability for November 2026.
                    </p>

                    <p>
                        The same release names Piper, an inbound agent that engages and qualifies leads from websites and inboxes. Salesforce lists Piper as generally available now.
                    </p>

                    <p>
                        Salesforce also says 60% of Perk&apos;s sales pipeline is built by Hunter. That is a vendor claim from a launch announcement, with no detail on deal size or how pipeline is counted. One more detail matters for hiring. Salesforce describes guardrails that set when Hunter acts on its own and when it needs seller approval. Even in the vendor&apos;s own pitch, a seller stays in the loop.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What the Numbers Say, and Who Is Saying Them</h2>

                    <p>
                        Almost every AI SDR number comes from someone selling something. Read them with that in mind.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">Leadium (vendor, human SDR agency).</strong> In a <a href={SRC.leadium} className={link}>September 9 post</a>, CEO Kevin Warner says the AI SDR category &quot;corrected&quot; in 2026. He says 41% of enterprise sales teams run at least one AI SDR in production, and 47% of AI SDR programs hit a domain reputation wall inside 90 days. He also tells readers to discount his bias, since he runs a human SDR agency.</li>
                        <li><strong className="text-navy-900">Pipeline Bee (vendor, sells both SDR services and AI for sales teams).</strong> Its <a href={SRC.pipelineBee} className={link}>October evidence review</a> concludes that above roughly $25K ACV, human-led teams that use AI beat fully autonomous AI SDRs. It grades each stat and says most of the data is vendor data. It also flags that some widely shared anti-AI numbers do not hold up.</li>
                        <li><strong className="text-navy-900">Apollo (vendor, sales platform).</strong> A <a href={SRC.apollo} className={link}>September 21 guide</a> cites 6sense: 99% of BDRs use AI, yet only 8% of organizations cut BDR headcount while 58% grew their teams.</li>
                    </ul>

                    <p>
                        The sellers differ, and so do their incentives. The direction is the same. AI is doing more of the top of the funnel. Nobody in this set has shown it running the whole job alone.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">My View: The SDR Role Stays. The Work Inside It Moves.</h2>

                    <p>
                        When a founder asks me if they still need an SDR, my answer is yes. The role does not go away. What changes is where the rep spends the day.
                    </p>

                    <p>
                        AI takes the volume at the top of the funnel. Research, lists, first drafts, the first touch. Someone still has to make the judgment calls. Is this account worth a second week? Is this reply a real buyer or a polite no? That same person runs the live conversations and moves good ones toward a close.
                    </p>

                    <p>
                        The founders who win use AI to make one rep far more productive. They do not use it to replace the team.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What AI Handles and What a Person Still Owns</h2>

                    <p>
                        The vendor sources split the work in a similar way. Leadium&apos;s task table and Pipeline Bee&apos;s review land close together:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">AI side:</strong> list building, contact enrichment, intent and trigger signals, first-draft messages, and reply triage.</li>
                        <li><strong className="text-navy-900">Human side:</strong> cold calls, objection handling, and qualifying leads against a written standard. Pipeline Bee adds the conversations that decide revenue.</li>
                        <li><strong className="text-navy-900">Shared:</strong> Leadium suggests AI drafts and a human approves the send, and a human answers any reply that asks a question.</li>
                    </ul>

                    <p>
                        Use that split when you write the job description. Our <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>guide to hiring SDRs and AEs who ramp fast</Link> covers the scorecard and comp for that seat.
                    </p>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">SDR or GTM Engineer?</h2>

                    <p>
                        The other title in every founder&apos;s feed right now is GTM engineer. <a href={SRC.techcrunch} className={link}>TechCrunch reports</a> that Clay coined the role in 2023 and describes it as building automated revenue workflows instead of doing each task by hand. Clay says roughly 100 GTM engineering listings appear each month. That is Clay&apos;s own count, and Clay sells the tool many of these roles use.
                    </p>

                    <p>
                        <a href={SRC.revnu} className={link}>Revnu Partners</a> found a $159.5K median comp midpoint across 70 disclosed GTM engineer ranges in June. It also wrote that the founding GTM engineer at a 4-person company today is what the first SDR was in 2018. A <a href={SRC.gtmCouncil} className={link}>GTM Council guest post</a> from July found outbound work is 34.3% of open GTM engineer roles. It argues the bigger issue is inconsistent titles, not a lack of people.
                    </p>

                    <p>
                        So the tradeoff for a seed founder with one pipeline seat looks like this:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-navy-900">A GTM engineer</strong> builds the system. Data, enrichment, signals, sequences. The output is more pipeline inputs.</li>
                        <li><strong className="text-navy-900">A rep</strong> works the output. Calls, replies, discovery, qualification. Pipeline Bee reports broad agreement that this human layer matters more as ACV rises, though nobody has published outcome data by deal size.</li>
                        <li><strong className="text-navy-900">The open question</strong> is which one your pipeline lacks today: inputs, or someone to turn them into meetings that hold up.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-navy-900 pt-4">What to Do Before You Open the Seat</h2>

                    <p>
                        Write down three things. Which tasks AI will own. Which tasks the rep will own. What counts as a qualified meeting. Leadium&apos;s checklist calls for a written qualification standard, and says AI should never grade its own meetings. If the standard is not written down, the rep and the tool will each make one up.
                    </p>

                    <p>
                        If you are still the one closing every deal, start with <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>. If you want a recruiting partner inside the search instead of a stack of agency resumes, read <Link href="/guides/fractional-recruiting-guide" className={link}>what is fractional recruiting</Link>. The three ways The Kas Group works, Kas Seat, Kas Milestone Search and Kas Directed Pursuit, are on the <Link href="/programs" className={link}>programs page</Link>.
                    </p>

                    <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center not-prose">
                        <h3 className="text-xl font-bold text-white mb-3">Deciding on your next pipeline hire?</h3>
                        <p className="text-grey-300 text-sm mb-6 max-w-md mx-auto">Email me your stage, ACV band and the AI tools you already run. You get a straight read on what the seat should own.</p>
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
                        <li><a href={SRC.salesforce} className={link}>Salesforce Expands Agentforce With a New Portfolio of AI Agents Built for High-Value Work</a>, Salesforce, September 11, 2026. Vendor announcement. Hunter (pilot now, GA November 2026), Piper (GA now), and the Perk 60% pipeline claim.</li>
                        <li><a href={SRC.leadium} className={link}>Are AI SDRs Worth It? What the 2026 Backlash Means for Your Outbound</a>, Kevin Warner, Leadium, September 9, 2026. Vendor (human SDR agency). Category correction, 41% adoption, 47% deliverability figure, task split.</li>
                        <li><a href={SRC.pipelineBee} className={link}>Human-Led vs. Fully Autonomous: What the Data Actually Says About AI SDRs</a>, Pipeline Bee, October 2026. Vendor (SDR services and AI for sales). Evidence review with graded stats and the $25K ACV working line.</li>
                        <li><a href={SRC.apollo} className={link}>How to Replace or Minimize SDRs With AI at Scale</a>, Apollo, September 21, 2026. Vendor (sales platform). Cites 6sense on BDR AI use and headcount.</li>
                        <li><a href={SRC.techcrunch} className={link}>TechCrunch Disrupt 2026: Clay&apos;s Kareem Amin on the rise of the GTM engineer</a>, TechCrunch, October 2, 2026. Event preview. Clay&apos;s figure of about 100 GTM engineering listings a month.</li>
                        <li><a href={SRC.revnu} className={link}>GTM Engineer hiring in 2026: 211 jobs analyzed</a>, Revnu Partners, June 2, 2026. $159.5K median comp midpoint across 70 disclosed ranges.</li>
                        <li><a href={SRC.gtmCouncil} className={link}>Analysis of 1,394 GTM Engineer Roles</a>, GTM Council (guest post by Mada Seghete, Upside), July 11, 2026. Outbound work at 34.3% of open roles.</li>
                    </ul>

                    <p className="text-grey-600">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>Hire SDRs and AEs with Zero Ramp-Up Time</Link>
                        {" · "}
                        <Link href="/blog/founder-led-sales-first-hire" className={link}>Your First Sales Hire Needs a Playbook</Link>
                        {" · "}
                        <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>What to Pay Your First AE</Link>
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
