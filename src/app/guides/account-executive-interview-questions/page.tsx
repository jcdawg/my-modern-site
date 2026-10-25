import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const PAGE = {
    title: "10 AE Interview Questions to Spot a Real Closer",
    description:
        "10 account executive interview questions by stage, a hiring manager scorecard, deal walkthrough red flags, the hiccups question, how to run a role play, and what research says works.",
    path: "/guides/account-executive-interview-questions",
    headline: "Account Executive Interview Questions: 10 to Ask and How to Spot a Real Closer",
};

export const metadata = pageMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, type: "article" });

const SRC = {
    sackett: "https://doi.org/10.1037/apl0000994",
    sackettPdf: "https://gwern.net/doc/statistics/meta-analysis/2021-sackett.pdf",
    rework: "https://rework.withgoogle.com/intl/en/guides/a-guide-to-structured-interviewing-for-better-hiring-practices",
    bridge: "https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics",
    gong: "https://www.gong.io/blog/data-shows-top-reps-dont-just-sell-they-orchestrate-with-ai",
    salesfuel: "https://salesfuel.com/177000-new-salesfuel-research-shows-a-bad-sales-hire-costs-sales-managers-more-than-a-luxury-car/",
    radioink: "https://radioink.com/2026/06/04/that-bad-sales-hire-probably-costs-more-than-you-think/",
    checkr: "https://checkr.com/resources/articles/hiring-hoax-manager-survey-2025",
    gartner: "https://www.gartner.com/en/newsroom/press-releases/2025-07-31-gartner-survey-shows-just-26-percent-of-job-applicants-trust-ai-will-fairly-evaluate-them",
    resumebuilder: "https://www.resumebuilder.com/1-4-americans-have-lied-on-their-resume/",
};

const FAQS = [
    {
        q: "What are the best interview questions for an account executive?",
        a: "The best ones make the candidate prove they won the deals on their resume. Ask for one deal from start to finish, then ask where the lead came from, who on their team helped close it, what hiccups came up and how they resolved them. Ask every candidate the same questions and score the answers the same way.",
    },
    {
        q: "What should be on an account executive interview scorecard?",
        a: "Score deal ownership, hiccups, team collaboration, attainment in context, pipeline sourcing, motion match, role play preparation and how they talk about a loss. For each one, write down what good sounds like and the red flag before the first interview, and score every candidate against the same list.",
    },
    {
        q: "What are the red flags in an account executive interview?",
        a: "In my view, the biggest red flag is a large deal with a committee or several people involved that the candidate says went pretty straightforward. I have never seen a deal that did not have any hiccups along the way. I also listen for a vague answer on where the lead came from and who on their team they worked with to close it.",
    },
    {
        q: "How can you tell if an AE actually closed the deals on their resume?",
        a: "Walk through one deal in detail. Ask where the lead came from, who they collaborated with to close it, and what went wrong along the way. A rep who ran the deal can tell you about the hiccups and what they did about each one. A rep who rode it tends to go vague on those parts.",
    },
    {
        q: "Should you do a role play when hiring an account executive?",
        a: "Yes, in my view a founder should run one. Set it up with the hiring manager. Build a scenario around your product with realistic situations, plus specific questions that show whether the AE did the research and can handle the situation. Research by Sackett and colleagues (2022) rates work samples at .33, below structured interviews at .42, so use it alongside the deal walkthrough.",
    },
    {
        q: "Do structured interviews work better than unstructured ones for sales hires?",
        a: "Across jobs, yes. A 2022 review by Sackett and colleagues found structured interviews predict job performance at .42, against .19 for unstructured interviews, and ranked them the top selection procedure. The research covers jobs in general, not sales roles alone.",
    },
    {
        q: "How do you check references for a sales rep?",
        a: "Carefully. Reference checks are tricky, because candidates usually give you only their best references. I work with companies to figure out what information they actually need from them.",
    },
    {
        q: "What does a bad AE hire cost?",
        a: "SalesFuel, a vendor that sells hiring assessments, puts the average cost of a bad B2B sales hire at $177,171. That comes from its 2026 opt-in survey of 316 US sales managers, and it covers all sales roles, not only AEs.",
    },
];

export default function AccountExecutiveInterviewQuestions() {
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

    const rubric = [
        { area: "Agenda", strong: "Opens by setting a plan for the call and checks it with the buyer." },
        { area: "Discovery", strong: "Asks before pitching and follows up when an answer is vague." },
        { area: "Research", strong: "Knows the buyer, the company and the likely problem before the call starts." },
        { area: "Cost of the problem", strong: "Gets the buyer to put a number or a consequence on the problem." },
        { area: "Other decision makers", strong: "Asks who else decides and how they buy." },
        { area: "Next step", strong: "Ends with a dated next step, not a vague follow up." },
    ];

    const questions = [
        { q: "What share of your pipeline did you source yourself?", stage: "Phone screen" },
        { q: "Did you mostly win new customers or grow existing ones?", stage: "Phone screen" },
        { q: "What quota did you carry, and what did you close against it in dollars?", stage: "Phone screen" },
        { q: "Tell me about a deal you closed where you started it and finished it. What steps did you take, what challenges did you run into, and what did you do to build the relationship with the customer?", stage: "Deal walkthrough" },
        { q: "Where did the lead come from?", stage: "Deal walkthrough" },
        { q: "Who on your team did you work with to close it, and what did each person do?", stage: "Deal walkthrough" },
        { q: "Were there any hiccups, and how did you resolve them?", stage: "Deal walkthrough" },
        { q: "Was this a new customer or an existing one?", stage: "Deal walkthrough" },
        { q: "Tell me about a deal you should have won. What would you change?", stage: "Deal walkthrough" },
        { q: "Run a first call with our buyer, using the scenario we built around our product.", stage: "Role play" },
    ];

    const scorecard = [
        { c: "Deal ownership", good: "Knows where the lead came from and what they did at each step.", flag: "Goes vague on the lead source or their own part in the deal." },
        { c: "Hiccups", good: "Names specific problems in the deal and how they resolved each one.", flag: "Says a large committee deal went pretty straightforward." },
        { c: "Team collaboration", good: "Names who helped close it and what each person did.", flag: "Cannot say who else worked on the deal." },
        { c: "Attainment in context", good: "Gives quota and results in dollars, plus how the team did.", flag: "Offers percentages only, with no dollar figure behind them." },
        { c: "Pipeline sourcing", good: "States what share of pipeline they sourced themselves.", flag: "Cannot separate their own pipeline from leads they were handed." },
        { c: "Motion match", good: "Clear on whether they won new customers or grew existing ones.", flag: "Their experience is the opposite of the job you are hiring for." },
        { c: "Role play preparation", good: "Did the research on the buyer and asks before pitching.", flag: "Pitches before asking a single question." },
        { c: "Losses", good: "Owns a lost deal and says what they would change.", flag: "Has no loss to talk about or nothing they would change." },
    ];

    return (
        <div className="bg-white">
            <ArticleJsonLd title={PAGE.title} description={PAGE.description} path={PAGE.path} headline={PAGE.headline} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">AE Interview Questions</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl mb-6 leading-tight">
                        Account Executive Interview Questions: 10 to Ask and How to Spot a Real Closer
                    </h1>
                    <p className="text-sm text-grey-500">October 19, 2026 &middot; Chris Stinson, The Kas Group</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-12 text-grey-700 leading-relaxed text-lg">

                    <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                        <strong>Short answer:</strong> Have the AE walk you through one deal they closed. Listen for where the lead came from and who on their team they worked with to close it. Then ask what hiccups came up and how they resolved them. If a big committee deal went pretty straightforward, that is a red flag. Real deals have hiccups.
                    </blockquote>

                    <div className="space-y-4">
                        <h2 className={h2}>10 Account Executive Interview Questions to Ask</h2>
                        <p>Ask every candidate these in the same order. The stage is listed after each one.</p>
                        <ol className="list-decimal pl-6 space-y-2">
                            {questions.map((x) => (
                                <li key={x.q}>{x.q} <span className="text-grey-500 text-base">({x.stage})</span></li>
                            ))}
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Hiring Manager Scorecard for AE Interviews</h2>
                        <p>Agree on this before the first interview. Score each row in writing before you compare notes.</p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse text-base">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-3 px-5 font-bold text-navy-900">Criteria</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">What good sounds like</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">Red flag</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scorecard.map((r) => (
                                        <tr key={r.c} className="border-b border-grey-100 last:border-0">
                                            <td className="py-3 px-5 font-bold text-navy-900">{r.c}</td>
                                            <td className="py-3 px-5 text-grey-600">{r.good}</td>
                                            <td className="py-3 px-5 text-grey-600">{r.flag}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-sm text-grey-500">
                        How to read this guide: sections labeled &quot;My view&quot; come from my own work placing sales people at The Kas Group. Everything else comes from a named outside source, linked in the text and listed at the end. I label vendor figures as such.
                    </p>

                    <p>
                        Most lists of AE interview questions are written for candidates. This one is for founders and sales leaders hiring mid-market, senior and enterprise AEs. It is built around one test: did this person actually win the deals on their resume? It covers four stages: a phone screen, a deal walkthrough, a role play and references.
                    </p>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: The Red Flags in a Deal Walkthrough</h2>
                        <p>
                            The deal walkthrough tells me more than any other part of the interview. I start with the question from my guide on <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>how to hire an enterprise account executive</Link>:
                        </p>
                        <blockquote className="border-l-4 border-blue-accent pl-4 text-navy-900 font-medium">
                            &quot;Tell me about a deal you closed where you started it and finished it. What steps did you take, what challenges did you run into, and since it was probably a cold lead, what did you do to build the relationship with the customer?&quot;
                        </blockquote>
                        <p>
                            Then I listen for two things. Where did the lead come from? And who on their team did they actually collaborate with to close it? A rep who ran the deal knows both answers without thinking.
                        </p>
                        <p>
                            Next I ask: were there any hiccups in the deal, and how did you resolve them? On a larger deal with a committee or several people involved, if they say it went pretty straightforward, that is definitely a red flag. In my words: &quot;I&apos;ve never seen a deal that didn&apos;t have any hiccups along the way.&quot;
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>My View: The Follow Up I Ask Most</h2>
                        <p>
                            The follow up I ask most is that same one. What were the hiccups, and how did you resolve them? It is hard to fake. The answer shows who did the work, how they handled pressure and whether they were in the room when the deal nearly fell apart.
                        </p>
                        <p>
                            Large deals involve a lot of people. <a href={SRC.gong} className={link}>Gong</a>, a sales software vendor, analyzed 1.8 million new business deals closed in 2024 and found won large strategic deals averaged 17 buyer contacts. A rep who says a deal that size had no problems is either leaving things out or was not close to it.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Why a Resume and a Good Conversation Are Not Enough</h2>
                        <p>
                            Logos on a resume do not prove the AE brought the deal in. Attainment needs context too. <a href={SRC.bridge} className={link}>The Bridge Group&apos;s 2026 survey</a> of 158 B2B companies found 48% of reps at quota, down from 51% in 2024. A candidate&apos;s percentage means little without the quota and the team rate behind it.
                        </p>
                        <p>Candidates also misstate things. These are outside surveys, and most come from vendors who sell screening:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><a href={SRC.checkr} className={link}>Checkr</a>, a background check vendor, surveyed 3,000 managers in 2025. 60% said they had uncovered a candidate who misrepresented their experience or qualifications. 35% said someone other than the listed applicant took part in a virtual interview.</li>
                            <li><a href={SRC.gartner} className={link}>Gartner</a> found 6% of 3,000 job candidates admitted to interview fraud in a 2025 survey. Gartner also predicts that by 2028, one in four candidate profiles worldwide will be fake. That is a prediction, not a measurement.</li>
                            <li><a href={SRC.resumebuilder} className={link}>ResumeBuilder</a> surveyed 2,000 US job applicants in January 2025. 24% said they had lied on their resume.</li>
                        </ul>
                        <p>
                            A polished resume or an answer written with AI can look good on paper. A detailed deal story with real hiccups is much harder to fake.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What the Research Says About Interviews</h2>
                        <p>
                            The largest updated review of hiring research is <a href={SRC.sackett} className={link}>Sackett, Zhang, Berry and Lievens</a>, published in the Journal of Applied Psychology in 2022. Structured interviews, where every candidate gets the same job related questions scored the same way, came out as the top ranked selection procedure. Their validity for predicting job performance was .42. Unstructured interviews came in at .19. Work sample tests, the closest category to a role play, came in at .33.
                        </p>
                        <p>
                            <a href={SRC.rework} className={link}>Google&apos;s re:Work guide</a> reports the same pattern from Google&apos;s own hiring: structured interviews were more predictive of job performance than unstructured ones across functions and levels. Google also found rejected candidates who had a structured interview were 35% happier with the process.
                        </p>
                        <p>
                            One caveat. This research covers jobs in general, not AEs alone. The practical rule still holds. Ask every candidate the same questions, take notes and score in writing before you compare opinions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>First, Decide What Kind of AE You Are Hiring</h2>
                        <p>
                            Before the first interview, decide whether the AE will hunt for new business or grow existing accounts. Those are different jobs, and they need different questions. I cover that choice, plus pay, quota and ramp, in <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>How to Hire an Enterprise Account Executive</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Stage 1: The Phone Screen</h2>
                        <p>
                            The phone screen checks that the motion is a match. Use the quota and deal size questions in <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>How to Hire SaaS SDRs and AEs with Zero Ramp-Up Time</Link>. Add two more for AEs:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>What share of your pipeline did you source yourself?</li>
                            <li>Did you mostly win new customers or grow existing ones?</li>
                        </ul>
                        <p>
                            If the answers are percentages with no dollar figure behind them, ask again. For pay questions, see <Link href="/blog/early-stage-sales-comp-first-ae-ote" className={link}>what to pay your first AE</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Stage 2: The Deal Walkthrough</h2>
                        <p>
                            This is the stage from the top of the page. Give it real time. Use the question above, then the follow ups:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Where did the lead come from?</li>
                            <li>Who on your team did you work with to close it, and what did each person do?</li>
                            <li>Were there any hiccups, and how did you resolve them?</li>
                            <li>Was this a new customer or an existing one?</li>
                        </ul>
                        <p>
                            Ask about one loss too. A deal they should have won, and what they would change. Score every candidate on the same follow ups.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Stage 3: My View on the Role Play</h2>
                        <p>
                            Yes, a founder should run a role play. Set it up with the hiring manager. Build a scenario around your product or offering, with realistic situations the AE has to walk through. Then add specific questions that show whether the AE did the research and has the skills to handle it.
                        </p>
                        <p>
                            Run the same scenario for every candidate and score it the same way. A simple rubric:
                        </p>
                        <div className="overflow-x-auto border border-grey-200 rounded-2xl shadow-sm bg-white">
                            <table className="w-full text-left border-collapse text-base">
                                <thead className="bg-grey-50">
                                    <tr className="border-b border-grey-200">
                                        <th className="py-3 px-5 font-bold text-navy-900">Area</th>
                                        <th className="py-3 px-5 font-bold text-navy-900">What a strong answer looks like</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rubric.map((r) => (
                                        <tr key={r.area} className="border-b border-grey-100 last:border-0">
                                            <td className="py-3 px-5 font-bold text-navy-900">{r.area}</td>
                                            <td className="py-3 px-5 text-grey-600">{r.strong}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p>
                            The research supports using it with the deal walkthrough, not in place of it. Sackett and colleagues rate work samples at .33, below structured interviews at .42.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Stage 4: References</h2>
                        <p>
                            Reference checks are tricky. Candidates usually give you only their best references. I work with companies to figure out what information they actually need from them.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>What a Bad AE Hire Costs</h2>
                        <p>
                            <a href={SRC.salesfuel} className={link}>SalesFuel</a>, a vendor that sells hiring assessments, puts the average cost of a bad B2B sales hire at $177,171. It comes from an opt-in survey of 316 US sales managers, <a href={SRC.radioink} className={link}>reported by Radio Ink</a>, and it covers all sales roles. For the wider picture, read <Link href="/guides/cost-of-a-bad-hire" className={link}>the cost of a bad hire</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>How The Kas Group Works</h2>
                        <p>
                            The Kas Group works three ways. Kas Seat is $5,000 a month for up to two open sales roles and $8,000 a month for three to five. Kas Milestone Search is $5,000 for an SDR or BDR, $7,500 for an AE and $10,000 for a senior AE or sales manager. Kas Directed Pursuit starts with a conversation to learn what the company wants, so there is no price to list. Details are on the <Link href="/programs" className={link}>programs page</Link>.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent)]" />
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Interviewing AEs?</h2>
                        <p className="text-grey-400 mb-6 max-w-xl leading-relaxed relative z-10">
                            Email me the role, your deal size and whether the AE will hunt or grow existing accounts. I will tell you what I would listen for.
                        </p>
                        <a
                            href="mailto:chris@thekasgroup.com"
                            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-hover transition-all"
                        >
                            Email chris@thekasgroup.com
                            <ChevronRight className="h-5 w-5" />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <h2 className={h2}>Frequently Asked Questions</h2>
                        {FAQS.map((f) => (
                            <div key={f.q} className="space-y-2">
                                <h3 className="font-bold text-navy-900 text-xl">{f.q}</h3>
                                <p className="text-grey-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h2 className={h2}>Sources</h2>
                        <p className="text-sm text-grey-500">All are outside sources. None is Kas placement data. Vendor figures are labeled as such.</p>
                        <ul className="list-disc pl-6 space-y-2 text-base">
                            <li>Revisiting meta-analytic estimates of validity in personnel selection, Sackett, Zhang, Berry and Lievens, Journal of Applied Psychology, 2022. Research. <a href={SRC.sackett} className={link}>{SRC.sackett}</a> Full text: <a href={SRC.sackettPdf} className={link}>{SRC.sackettPdf}</a></li>
                            <li>A guide to structured interviewing, Google re:Work. Practitioner guide. <a href={SRC.rework} className={link}>{SRC.rework}</a></li>
                            <li>AE Models, Motions &amp; Metrics: 2026 Research Report, The Bridge Group, June 22, 2026. Survey of 158 B2B companies. <a href={SRC.bridge} className={link}>{SRC.bridge}</a></li>
                            <li>Data shows top reps don&apos;t just sell, they orchestrate (with AI), Gong Labs, April 28, 2025. Vendor data on 1.8 million deals. <a href={SRC.gong} className={link}>{SRC.gong}</a></li>
                            <li>The Hiring Hoax: What 3,000 Managers Revealed, Checkr, September 16, 2025. Vendor survey. <a href={SRC.checkr} className={link}>{SRC.checkr}</a></li>
                            <li>Gartner Survey Shows Just 26% of Job Applicants Trust AI Will Fairly Evaluate Them, Gartner, July 31, 2025. Candidate surveys. <a href={SRC.gartner} className={link}>{SRC.gartner}</a></li>
                            <li>1 in 4 Americans have lied on their resume, ResumeBuilder, January 2025. Vendor survey of 2,000 US job applicants. <a href={SRC.resumebuilder} className={link}>{SRC.resumebuilder}</a></li>
                            <li>New SalesFuel research shows a bad sales hire costs sales managers more than a luxury car, SalesFuel, June 3, 2026. Vendor survey. <a href={SRC.salesfuel} className={link}>{SRC.salesfuel}</a></li>
                            <li>That Bad Sales Hire Probably Costs More Than You Think, Radio Ink, June 4, 2026. Reports the SalesFuel survey method. <a href={SRC.radioink} className={link}>{SRC.radioink}</a></li>
                        </ul>
                    </div>

                    <p className="text-grey-600 text-base">
                        <strong>Further reading:</strong>{" "}
                        <Link href="/guides/how-to-hire-enterprise-account-executive" className={link}>How to Hire an Enterprise Account Executive</Link>
                        {" · "}
                        <Link href="/guides/how-to-hire-senior-account-executive" className={link}>How to Hire a Senior Account Executive</Link>
                        {" · "}
                        <Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className={link}>Hire SDRs and AEs with Zero Ramp-Up Time</Link>
                        {" · "}
                        <Link href="/guides/cost-of-a-bad-hire" className={link}>The Cost of a Bad Hire</Link>
                        {" · "}
                        <Link href="/guides/best-recruiters-saas-startups-sales" className={link}>SaaS Sales Recruiters for Startups</Link>
                        {" · "}
                        <Link href="/programs" className={link}>Programs</Link>
                    </p>

                </div>
            </section>
        </div>
    );
}
