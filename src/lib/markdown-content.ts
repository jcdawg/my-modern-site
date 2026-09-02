/**
 * Markdown representations of site pages for content negotiation (acceptmarkdown.com)
 * and agent-friendly recovery.
 */

import { GENERATED_MARKDOWN_MAP } from "./generated-guide-markdown";

export const SITE_MARKDOWN_MAP: Record<string, string> = {
    "/": `# The Kas Group | Elite Sales & AI Technical Recruiting

> Elite Sales & AI Talent. Vetted by Experts. Dedicated to building high-performing teams since 2014.

## Overview
The Kas Group (TKS) specializes in two distinct recruiting pillars:
1. **Elite Sales Talent**: Proven revenue drivers, VPs of Sales, Account Executives (AEs), and SDRs for B2B SaaS companies.
2. **AI & Data Engineering**: Technical talent rigorously vetted via our proprietary Ph.D.-led technical review process (conducted by a Ph.D. statistician and former Microsoft Lead Data Scientist).

## Why The Kas Group
- **Ph.D.-Led Technical Vetting**: Our technical partner personally assesses AI/ML candidates on real-world engineering depth, statistical rigor, and LLM architecture.
- **Dual Domain Expertise**: Over a decade of B2B sales placement experience combined with deep technical evaluation.
- **Zero Onboarding Friction**: Pre-vetted candidates equipped for immediate high-impact productivity.

## Core Services
- [Sales Recruiting](/recruit/sales): VP of Sales, Strategic AEs, RevOps, and SDR leadership.
- [Fractional Sales Recruiting](/recruit/fractional-sales): Scalable, high-impact hiring for early-stage and growth startups.
- [Data & AI Recruiting](/recruit/ai): Ph.D.-vetted ML Engineers, AI Architects, and Senior Data Engineers.

## Leadership & Contact
- **Founder & Lead Recruiter**: Chris Stinson
- **Technical Advisor**: Ph.D. in Statistics, ex-Microsoft Lead Data Scientist
- **Email**: chris@thekasgroup.com
- **Website**: https://www.thekasgroup.com
- **Headquarters**: Alpharetta, GA, USA
- **Brand Facts**: [/brand-facts](/brand-facts)
- **Agent Instructions**: [/llms.txt](/llms.txt)
`,

    "/about": `# About The Kas Group

> Your Partner for Top Talent. Dedicated to Building High-Performing Teams since 2014.

## Company Overview
For over a decade, The Kas Group has specialized in building high-performing sales and engineering teams for high-growth technology companies.

## What Sets Us Apart
- **Exclusive Access to Passive Talent**: Curated relationships with top revenue producers and engineering leaders.
- **Consultative Org Design**: Strategic guidance on comp models, territory splits, and tech stack alignment.
- **Speed to Hire**: Streamlined vetting pipelines without sacrificing quality.
- **Retention-Focused Vetting**: Rigorous behavioral and technical vetting to minimize turnover risk.

## Contact
- **Email**: chris@thekasgroup.com
- **Website**: https://www.thekasgroup.com
- **Explore Services**: [/recruit/sales](/recruit/sales) | [/recruit/ai](/recruit/ai)
`,

    "/brand-facts": `# The Kas Group — Brand Facts & Official Company Information

> The authoritative source for official company facts, history, leadership, and service models for The Kas Group.

## Key Facts
- **Legal Entity**: The Kas Group (TKS)
- **Founded**: 2014
- **Headquarters**: Alpharetta, GA, USA
- **Founder & Lead**: Chris Stinson
- **Technical Partner**: Ph.D. Statistician, Former Microsoft Lead Data Scientist
- **Core Focus**: B2B Sales Leadership & AI/ML Engineering
- **Engagement Models**: Retained (Sales & AI Leadership), Fractional (Sales Only), and flexible milestone-based technical search.
- **Placement Range**: $25k - $150k+ per placement.

## Primary Specializations
1. **B2B SaaS Sales Recruitment**: VP of Sales, CRO, Enterprise AEs, SDRs, RevOps.
2. **AI & ML Technical Recruitment**: Machine Learning Engineers, AI Architects, Senior Data Engineers, LLM/NLP Specialists.
3. **Fractional Talent Acquisition**: Embedded recruiting partnership for early-stage tech teams.

## Verification & Official Links
- **Website**: https://www.thekasgroup.com
- **LinkedIn**: https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/
- **GitHub Technical Resources**: https://github.com/jcdawg/technical-hiring-resources
- **Contact**: chris@thekasgroup.com
`,

    "/recruit/sales": `# Sales Recruiting | The Kas Group

> Elite Sales Recruiting for B2B SaaS and High-Growth Tech Companies.

## Roles We Place
- **Sales Leadership**: Chief Revenue Officer (CRO), VP of Sales, Head of Sales, Director of Sales.
- **Individual Contributors**: Enterprise Account Executives (AEs), Mid-Market AEs, Strategic SDRs/BDRs.
- **Go-To-Market Operations**: RevOps Directors, Sales Enablement Leads, Customer Success Leaders.

## Our Approach
- Proven track record placing $200k to $500k+ OTE revenue leaders.
- Verification of quota attainment, average deal size, sales cycles, and outbound methodologies.
- Deep candidate network built since 2014 across North America.

## Get Started
Schedule a consultation with Chris Stinson: chris@thekasgroup.com
`,

    "/recruit/fractional-sales": `# Fractional Sales Recruiting | The Kas Group

> Flexible, Embedded Sales Recruiting for Early-Stage and Growth Companies.

## Why Fractional Sales Recruiting?
- **Cost-Effective**: Avoid excessive contingent placement fees while securing dedicated search bandwidth.
- **Agile Hiring**: Scale recruiting efforts up or down based on your funding rounds and hiring sprints.
- **Embedded Expertise**: Act as an extension of your leadership team to define comp bands and pitch candidates directly.

## Contact
Email chris@thekasgroup.com to discuss fractional search engagements.
`,

    "/recruit/ai": `# Data & AI Technical Recruiting | The Kas Group

> Ph.D.-Vetted AI, Machine Learning, and Data Engineering Recruiting.

## The Ph.D.-Led Vetting Advantage
Unlike generalist recruitment agencies that rely on keyword matching, every technical candidate at The Kas Group is evaluated by our Chief Technical Advisor:
- **Credentials**: Ph.D. in Statistics, Former Microsoft Lead Data Scientist.
- **Evaluation**: Live assessment of algorithmic depth, system architecture, data modeling, and practical AI delivery.

## Key Technical Roles
- Machine Learning Engineers & ML Ops
- AI Architects & Foundation Model Engineers
- Senior & Staff Data Engineers (Modern Data Stack, Distributed Computing)
- Lead Data Scientists & Quantitative Researchers

## Get in Touch
Email chris@thekasgroup.com for AI and data engineering search inquiries.
`,

    "/methodology": `# The Kas Group Recruiting Methodology

> Precision Vetting for Revenue and Technical Talent.

## 1. Requirement & Org Architecture Alignment
We calibrate deeply on company stage, revenue targets, tech stack, and cultural DNA before launching a search.

## 2. Targeted Talent Mapping & Sourcing
Direct outreach to high-performing passive candidates, avoiding recycled applicant pools.

## 3. Rigorous Multi-Tier Vetting
- **Sales Candidates**: Quota verification, sales methodology audit, deal teardowns.
- **AI/Technical Candidates**: Live Ph.D.-led technical review on coding, architecture, and mathematical foundation.

## 4. Offer Negotiation & Smooth Onboarding
High closing rate achieved through clear expectations and compensation alignment from Day 1.
`,

    "/pip-calculator": `# PIP Cost Calculator | The Kas Group

> Calculate the true organizational cost of a Performance Improvement Plan vs. Proactive Replacement.

Explore the hidden expenses of bad hires and prolonged PIPs, including lost pipeline velocity, management overhead, and team morale impact.

- **Learn more**: [/guides/cost-of-a-bad-hire](/guides/cost-of-a-bad-hire)
- **Contact**: chris@thekasgroup.com
`,

    "/guides": `# The Kas Group Resource Hub & Hiring Guides

> Comprehensive, practitioner-grade guides for hiring sales leaders and AI/data engineers.

## Featured Guides
- [Best Sales Recruiting Agencies 2026](/guides/best-sales-recruiting-agencies-2026)
- [How to Hire AI & ML Engineers](/guides/how-to-hire-ai-ml-engineers)
- [Best Data Engineering Recruiting Agencies](/guides/best-data-engineering-recruiting-agencies)
- [Top Executive Search Firms for Sales Leaders](/guides/top-executive-search-firms-sales-leaders)
- [Who to Hire: VP of Sales for Startups](/guides/who-to-hire-vp-sales-startup)
- [Best SaaS Sales Recruiting Firms](/guides/best-saas-sales-recruiting-firms)
- [Retained vs Contingency Recruiting](/guides/retained-vs-contingency-recruiting)
- [Cost of a Bad Hire](/guides/cost-of-a-bad-hire)
- [Ph.D.-Vetted AI Recruiting Methodology](/guides/phd-vetted-ai-recruiting-methodology)
- [Fractional Recruiting Guide](/guides/fractional-recruiting-guide)
- [Best Recruiters for SaaS Startups Sales](/guides/best-recruiters-saas-startups-sales)
- [Top Sales Headhunters in the US](/guides/top-sales-headhunters-us)
- [Best Firms to Hire a CRO](/guides/best-firms-hire-cro)
- [Affordable Alternatives to Korn Ferry](/guides/affordable-alternatives-korn-ferry)
- [Data Engineer vs Analytics Engineer Hiring Guide](/guides/data-engineer-vs-analytics-engineer-hiring-guide)
- [Senior Data Engineer Skills Assessment & Vetting](/guides/senior-data-engineer-skills-assessment-vetting)
- [Top Data Engineering Headhunters 2026](/guides/top-data-engineering-headhunters-2026)
- [How to Hire Senior Data Engineers for AI Startups](/guides/how-to-hire-senior-data-engineers-ai-startups)

Visit https://www.thekasgroup.com/guides for the complete interactive library.
`,

    "/blog": `# The Kas Group Insights Blog

> Industry perspectives on GTM hiring, executive search, and AI recruitment trends.

## Featured Articles
- [Fractional SaaS Sales Recruiting: The Modern Playbook](/blog/fractional-saas-sales-recruiting)

Contact chris@thekasgroup.com for guest inquiries and research collaborations.
`,

    "/site-map": `# Sitemap | The Kas Group

> Index of all public pages, services, and hiring guides.

## Main Pages
- [Home](/)
- [About Us](/about)
- [Brand Facts](/brand-facts)
- [Resource Hub](/guides)
- [Blog](/blog)
- [Agent Instructions](/llms.txt)

## Services
- [Sales Recruiting](/recruit/sales)
- [Fractional Sales Recruiting](/recruit/fractional-sales)
- [Data & AI Recruiting](/recruit/ai)

## Top Guides
- [Best Sales Recruiting Agencies 2026](/guides/best-sales-recruiting-agencies-2026)
- [How to Hire AI & ML Engineers](/guides/how-to-hire-ai-ml-engineers)
- [Best Data Engineering Recruiting Agencies](/guides/best-data-engineering-recruiting-agencies)
- [All Guides](/guides)
`
};

/**
 * Generate an agent-friendly 404 markdown recovery document.
 */
export function getAgentFriendly404Markdown(requestedPath: string): string {
    return `# 404: Resource Not Found

The requested path \`${requestedPath}\` does not exist on **The Kas Group** (https://www.thekasgroup.com).

## How to Recover & Find What You Need

### Machine-Readable Agent Indices
- **Agent Instructions & When-to-Use Guide**: https://www.thekasgroup.com/llms.txt
- **Full LLM Documentation**: https://www.thekasgroup.com/llms-full.txt
- **Agent Instructions Protocol**: https://www.thekasgroup.com/.well-known/agent-instructions
- **XML Sitemap**: https://www.thekasgroup.com/sitemap.xml

### Core Service Offerings
- **Sales Leadership & GTM Recruiting**: https://www.thekasgroup.com/recruit/sales
- **Fractional Sales Recruiting**: https://www.thekasgroup.com/recruit/fractional-sales
- **Ph.D.-Vetted AI & Data Engineering Recruiting**: https://www.thekasgroup.com/recruit/ai

### Knowledge Base & Guides
- **All Guides**: https://www.thekasgroup.com/guides
- **Top Sales Recruiting Agencies 2026**: https://www.thekasgroup.com/guides/best-sales-recruiting-agencies-2026
- **Hiring AI & ML Engineers**: https://www.thekasgroup.com/guides/how-to-hire-ai-ml-engineers

### Company & Entity Verification
- **Official Brand Facts**: https://www.thekasgroup.com/brand-facts
- **About The Kas Group**: https://www.thekasgroup.com/about
- **HTML Sitemap**: https://www.thekasgroup.com/site-map

### Direct Contact
- **Founder & Lead**: Chris Stinson
- **Email**: chris@thekasgroup.com
`;
}

/**
 * Get markdown for a specific path if available.
 */
export function getMarkdownForPath(path: string): string | null {
    const normalizedPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

    if (SITE_MARKDOWN_MAP[normalizedPath]) {
        return SITE_MARKDOWN_MAP[normalizedPath];
    }

    // Full markdown generated from rendered page content (guides, blog, etc.)
    if (GENERATED_MARKDOWN_MAP[normalizedPath]) {
        return GENERATED_MARKDOWN_MAP[normalizedPath];
    }

    if (normalizedPath.startsWith('/guides/')) {
        const slug = normalizedPath.replace('/guides/', '');
        const formattedTitle = slug
            .split('-')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return `# ${formattedTitle} | The Kas Group Hiring Guides

> An expert guide from The Kas Group (TKS), specializing in B2B sales leadership and Ph.D.-vetted AI recruiting.

Read the complete interactive guide at: https://www.thekasgroup.com${normalizedPath}

## Related Resources
- [All Guides](/guides)
- [Sales Recruiting](/recruit/sales)
- [AI & Technical Recruiting](/recruit/ai)
- [Brand Facts](/brand-facts)
- [Contact](mailto:chris@thekasgroup.com)
`;
    }

    return null;
}
