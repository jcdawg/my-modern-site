import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sitemap | The Kas Group',
    description: 'Sitemap for The Kas Group website, showing structure of our sales and AI recruiting services.',
}

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
                                <li><Link href="/about" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">About Us</Link></li>
                                <li><Link href="/blog" className="text-lg text-grey-600 hover:text-blue-accent transition-colors">Insights Blog</Link></li>
                                <li><Link href="/guides" className="text-lg text-grey-600 hover:text-blue-accent transition-colors font-bold">Resource Hub (All Guides)</Link></li>
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
                            <h2 className="text-xl font-semibold text-navy-900 mb-6 border-b border-grey-200 pb-2">Data Guides</h2>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="/guides/best-data-engineering-recruiting-agencies" className="text-grey-600 hover:text-blue-accent transition-colors">DE Recruiting Agencies</Link></li>
                                <li><Link href="/guides/how-to-hire-senior-data-engineers-ai-startups" className="text-grey-600 hover:text-blue-accent transition-colors">Hiring for AI Startups</Link></li>
                                <li><Link href="/guides/top-data-engineering-headhunters-2026" className="text-grey-600 hover:text-blue-accent transition-colors">DE Headhunters 2026</Link></li>
                                <li><Link href="/guides/senior-data-engineer-skills-assessment-vetting" className="text-grey-600 hover:text-blue-accent transition-colors">DE Vetting Guide</Link></li>
                                <li><Link href="/guides/data-engineer-vs-analytics-engineer-hiring-guide" className="text-grey-600 hover:text-blue-accent transition-colors">Engineer vs Analytics</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
