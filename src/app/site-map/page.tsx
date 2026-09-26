import Link from 'next/link'
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: 'Sitemap',
    description: 'Sitemap for The Kas Group website, showing structure of our sales and AI recruiting services.',
    path: "/site-map",
});

export default function Sitemap() {
    return (
        <div className="flex flex-col min-h-screen bg-grey-50">
            <section className="px-6 py-24 md:py-32 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-navy-900 mb-12">Sitemap</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <h2 className="text-xl font-semibold text-navy-900 mb-6 border-b border-grey-200 pb-2">Main Pages</h2>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Home</Link></li>
                                <li><Link href="/programs" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Programs</Link></li>
                                <li><Link href="/about" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">About Us</Link></li>
<li><Link href="/contact" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Contact</Link></li>
                                <li><Link href="/privacy-policy" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms-of-service" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Terms of Service</Link></li>
                                <li><Link href="/blog" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Insights Blog</Link></li>
                                <li><Link href="/guides" className="text-lg text-grey-600 hover:text-blue-accent transition-colors font-bold">Resource Hub (All Guides)</Link></li>
                                <li><Link href="https://github.com/jcdawg/technical-hiring-resources" target="_blank" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Technical Resources (GitHub)</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-navy-900 mb-6 border-b border-grey-200 pb-2">Services</h2>
                            <ul className="space-y-4">
                                <li><Link href="/recruit/sales" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Sales Recruiting</Link></li>
                                <li><Link href="/recruit/fractional-sales" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Fractional Sales</Link></li>
                                <li><Link href="/recruit/ai" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Data & AI Recruiting</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-navy-900 mb-6 border-b border-grey-200 pb-2">Sales Guides</h2>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="/guides/best-sales-recruiting-agencies-2026" className="text-grey-600 hover:text-blue-accent transition-colors">Top Sales Agencies 2026</Link></li>
                                <li><Link href="/guides/who-to-hire-vp-sales-startup" className="text-grey-600 hover:text-blue-accent transition-colors">How to Hire a VP of Sales</Link></li>
                                <li><Link href="/guides/how-to-hire-saas-sdrs-fast-ramp" className="text-grey-600 hover:text-blue-accent transition-colors">Hire SDRs &amp; AEs Fast</Link></li>
                                <li><Link href="/guides/fractional-recruiting-guide" className="text-grey-600 hover:text-blue-accent transition-colors">Fractional Recruiting Guide</Link></li>
                                <li><Link href="/guides/fractional-sales-recruiting-cost" className="text-grey-600 hover:text-blue-accent transition-colors">Fractional Sales Recruiting Cost</Link></li>
                                <li><Link href="/guides/fractional-sales-recruiting-vs-contingency" className="text-grey-600 hover:text-blue-accent transition-colors">Fractional vs Contingency</Link></li>
                                <li><Link href="/guides/fractional-recruiting-vs-in-house-recruiter" className="text-grey-600 hover:text-blue-accent transition-colors">Fractional vs In-House Recruiter</Link></li>
                                <li><Link href="/guides/best-fractional-sales-recruiters" className="text-grey-600 hover:text-blue-accent transition-colors">Best Fractional Sales Recruiters</Link></li>
                                <li><Link href="/guides/fractional-recruiting-services-sales-teams" className="text-grey-600 hover:text-blue-accent transition-colors">Fractional Recruiting for Sales Teams</Link></li>
                                <li><Link href="/guides/best-recruiters-saas-startups-sales" className="text-grey-600 hover:text-blue-accent transition-colors">Recruiters for SaaS Startups</Link></li>
                                <li><Link href="/guides/best-saas-sales-recruiting-firms" className="text-grey-600 hover:text-blue-accent transition-colors">SaaS Sales Recruiting Firms</Link></li>
                                <li><Link href="/guides/best-recruiting-agencies-b2b-sales" className="text-grey-600 hover:text-blue-accent transition-colors">B2B Sales Recruiting Agencies</Link></li>
                                <li><Link href="/guides/top-sales-headhunters-us" className="text-grey-600 hover:text-blue-accent transition-colors">Top Sales Headhunters (US)</Link></li>
                                <li><Link href="/guides/top-executive-search-firms-sales-leaders" className="text-grey-600 hover:text-blue-accent transition-colors">Top Exec Search Firms</Link></li>
                                <li><Link href="/guides/best-firms-hire-cro" className="text-grey-600 hover:text-blue-accent transition-colors">Best Firms to Hire a CRO</Link></li>
                                <li><Link href="/guides/affordable-alternatives-korn-ferry" className="text-grey-600 hover:text-blue-accent transition-colors">Korn Ferry Alternatives</Link></li>
                                <li><Link href="/guides/retained-vs-contingency-recruiting" className="text-grey-600 hover:text-blue-accent transition-colors">Retained vs Contingency</Link></li>
                                <li><Link href="/guides/cost-of-a-bad-hire" className="text-grey-600 hover:text-blue-accent transition-colors">Cost of a Bad Hire</Link></li>
                                <li><Link href="/guides/sales-recruiters-atlanta" className="text-grey-600 hover:text-blue-accent transition-colors">Atlanta Sales Recruiters</Link></li>
                                <li><Link href="/candidate-mapping-brief" className="text-grey-600 hover:text-blue-accent transition-colors">Sample Shortlist Matrix</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-navy-900 mb-6 border-b border-grey-200 pb-2">Data Guides</h2>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="/guides/best-data-engineering-recruiting-agencies" className="text-grey-600 hover:text-blue-accent transition-colors">DE Recruiting Agencies</Link></li>
                                <li><Link href="/guides/how-to-hire-senior-data-engineers-ai-startups" className="text-grey-600 hover:text-blue-accent transition-colors">Hiring for AI Startups</Link></li>
                                <li><Link href="/guides/top-data-engineering-headhunters-2026" className="text-grey-600 hover:text-blue-accent transition-colors">DE Headhunters 2026</Link></li>
                                <li><Link href="/guides/senior-data-engineer-skills-assessment-vetting" className="text-grey-600 hover:text-blue-accent transition-colors">DE Vetting Guide</Link></li>
                                <li><Link href="/guides/data-engineer-vs-analytics-engineer-hiring-guide" className="text-grey-600 hover:text-blue-accent transition-colors">Engineer vs Analytics</Link></li>
                                <li><Link href="/guides/active-vs-passive-candidates" className="text-grey-600 hover:text-blue-accent transition-colors">Active vs. Passive Candidates</Link></li>
                                <li><Link href="/guides/do-ai-resume-screeners-work" className="text-grey-600 hover:text-blue-accent transition-colors">Do AI Resume Screeners Work?</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}