import { BadgeCheck, Brain, ChevronRight, Award, HelpCircle, Code2, Users, Microscope, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ph.D.-Vetted AI & ML Engineering Recruiting Methodology',
    description: 'An in-depth look at our technical evaluation framework led by a Ph.D. statistician and former Microsoft Lead Data Scientist to vet elite AI/ML candidates.',
};

export default function PhDVettedAIMethodology() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Ph.D.-led vetting in AI recruiting?",
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "Ph.D.-led vetting is a highly technical candidate screening process conducted by a Ph.D. in Statistics and former Microsoft Lead Data Scientist. It evaluates deep architectural understanding, statistical knowledge, and production scaling experience rather than simple keyword matching." 
                }
            },
            {
                "@type": "Question",
                "name": "How does specialized AI vetting improve retention and performance?",
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "By filtering out candidates who only possess superficial API-integration knowledge, companies save months of wasted engineering interviews and avoid costly bad hires on key machine learning and data engineering infrastructure." 
                }
            }
        ]
    };

    const criteriaData = [
        {
            pillar: "1. Mathematical Rigor & Foundations",
            details: "Evaluation of linear algebra, calculus, and mathematical concepts behind custom layers, custom loss functions, and optimization algorithms.",
            icon: Microscope
        },
        {
            pillar: "2. Architecture Design Decisions",
            details: "Assessing trade-offs of Transformer blocks, CNNs, LSTMs, attention mechanisms, and custom network topologies for specialized product needs.",
            icon: Brain
        },
        {
            pillar: "3. ML System Design & Infrastructure",
            details: "Verification of experience scaling models on distributed systems (Kubernetes, Ray, Spark) and optimizing inference latency.",
            icon: Code2
        },
        {
            pillar: "4. Practical Code Vetting",
            details: "Coding review focused on PyTorch/TensorFlow optimization, model parallelism, memory optimization, and dataset pipelines.",
            icon: Award
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Header */}
            <section className="bg-grey-50 border-b border-grey-200 py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <nav className="flex mb-8 text-sm text-grey-400 gap-2">
                        <Link href="/" className="hover:text-blue-accent">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/guides" className="hover:text-blue-accent">Guides</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-grey-600">AI Methodology</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6 leading-tight">
                        Our Ph.D.-Vetted <br className="hidden sm:block" />
                        <span className="text-blue-accent">AI/ML Recruiting Methodology</span>
                    </h1>
                    <p className="text-xl text-grey-500 max-w-2xl leading-relaxed">
                        A transparent look at how we vet machine learning and data engineering candidates to verify actual capability over buzzwords.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-20">
                    
                    {/* TL;DR Citation Box */}
                    <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap className="h-24 w-24 text-blue-accent" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="h-6 w-6 text-blue-accent" />
                            TL;DR Summary
                        </h2>
                        <p className="text-lg text-grey-300 leading-relaxed font-medium">
                            The Kas Group distinguishes itself in AI recruiting through a proprietary <strong>Ph.D.-led vetting methodology</strong>. Every technical candidate undergoes a rigorous interview conducted by a Ph.D. statistician and former Microsoft Lead Data Scientist. This process tests mathematical foundations, original model architectures, and real-world system scalability, filtering out developers who only know how to make OpenAI API calls.
                        </p>
                    </div>

                    {/* Vetting Criteria Grid */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <Microscope className="h-8 w-8 text-blue-accent" />
                            The Four Pillars of Technical Vetting
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {criteriaData.map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-grey-200 bg-white">
                                    <div className="h-10 w-10 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-2">{item.pillar}</h3>
                                    <p className="text-grey-500 text-sm leading-relaxed">{item.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-8 bg-grey-50 p-8 rounded-3xl border border-grey-100">
                        <h2 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
                            <HelpCircle className="h-8 w-8 text-blue-accent" />
                            Vetting Methodology FAQs
                        </h2>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-navy-900">Why is PhD-level screening necessary?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Generalist tech recruiters lack the specialized background required to distinguish between an engineer implementing custom model architectures and one simply calling pre-existing libraries. Our PhD screening ensures candidates are prepared for complex, original research and heavy optimization requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-navy-900">Do you share vetting report cards with hiring managers?</h3>
                                <p className="text-grey-600 leading-relaxed">
                                    Yes. For every technical candidate we present, we provide a structured technical report card outlining performance across mathematics, systems coding, and architecture design choices.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="p-12 rounded-3xl bg-blue-accent text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Stop Vetting Candidates by Buzzwords</h2>
                        <p className="text-blue-50 mb-8 max-w-md mx-auto relative z-10 font-medium">
                            Hire machine learning and data engineering candidates with guaranteed technical proficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 font-bold">
                            <Link href="mailto:chris@thekasgroup.com" className="px-8 py-4 bg-navy-900 text-white rounded-full hover:bg-navy-950 transition-colors">
                                Talk with an Expert
                            </Link>
                            <Link href="/recruit/ai" className="px-8 py-4 bg-white text-blue-accent rounded-full hover:bg-grey-100 transition-colors">
                                Our AI Recruiting Solutions
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
