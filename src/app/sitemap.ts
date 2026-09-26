import type { MetadataRoute } from 'next'
import { getPageDates } from '@/lib/page-dates'

const baseUrl = 'https://www.thekasgroup.com'

type Entry = {
    path: string
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
    priority: number
}

// Source of truth for public, indexable routes. scripts/generate-llms.mjs
// reads the built sitemap.xml, so llms.txt / llms-full.txt follow this list.
const entries: Entry[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/brand-facts', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/guides', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/recruit/sales', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/best-sales-recruiting-agencies-2026', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/how-to-hire-ai-ml-engineers', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/retained-vs-contingency-recruiting', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/recruit/ai', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/recruit/fractional-sales', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.5 },
    { path: '/methodology', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/guides/fractional-recruiting-guide', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/fractional-sales-recruiting-cost', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/fractional-recruiting-vs-in-house-recruiter', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/fractional-sales-recruiting-vs-contingency', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/how-to-hire-saas-sdrs-fast-ramp', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/cost-of-a-bad-hire', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog/fractional-saas-sales-recruiting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog/ai-resume-boom-old-school-recruiting', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/guides/best-recruiters-saas-startups-sales', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/best-fractional-sales-recruiters', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/best-saas-sales-recruiting-firms', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/top-executive-search-firms-sales-leaders', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/who-to-hire-vp-sales-startup', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/best-recruiting-agencies-b2b-sales', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/fractional-recruiting-services-sales-teams', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/top-sales-headhunters-us', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/best-firms-hire-cro', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/affordable-alternatives-korn-ferry', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/best-data-engineering-recruiting-agencies', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/how-to-hire-senior-data-engineers-ai-startups', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/top-data-engineering-headhunters-2026', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/senior-data-engineer-skills-assessment-vetting', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/data-engineer-vs-analytics-engineer-hiring-guide', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/cost-of-hiring-wrong-data-engineer', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/phd-vetted-ai-recruiting-methodology', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/sales-recruiters-atlanta', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/active-vs-passive-candidates', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/guides/do-ai-resume-screeners-work', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pip-calculator', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/candidate-mapping-brief', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/programs', changeFrequency: 'weekly', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    return entries.map(({ path, changeFrequency, priority }) => {
        // Real per-page dates from git history (src/lib/page-dates.ts), not build time.
        const modified = getPageDates(path)?.modified
        return {
            url: path === '/' ? baseUrl : `${baseUrl}${path}`,
            ...(modified ? { lastModified: modified } : {}),
            changeFrequency,
            priority,
        }
    })
}
