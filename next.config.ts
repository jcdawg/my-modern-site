import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prefer non-trailing-slash URLs sitewide (matches sitemap canonicals).
  // Note: the homepage root path is always "/" at the HTTP layer, so
  // https://www.thekasgroup.com and https://www.thekasgroup.com/ both 200
  // on Vercel; non-root paths get slash → no-slash permanent redirects.
  trailingSlash: false,
  turbopack: {
    root: "./",
  },
  async headers() {
    return [
      {
        // Apply Vary: Accept, Accept-Encoding globally so CDNs cache
        // HTML and Markdown representations as separate variants
        source: "/:path*",
        headers: [
          {
            key: "Vary",
            value: "Accept, Accept-Encoding",
          },
        ],
      },
      {
        // Serve .well-known/agent-instructions as plain text
        source: "/.well-known/agent-instructions",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Vary",
            value: "Accept, Accept-Encoding",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/guides/how-to-hire-vp-sales-startup",
        destination: "/guides/who-to-hire-vp-sales-startup",
        permanent: true,
      },
      {
        // Consolidated onto the stronger vs-contingency guide (cannibalization fix).
        source: "/guides/fractional-vs-traditional-sales-recruiting",
        destination: "/guides/fractional-sales-recruiting-vs-contingency",
        permanent: true,
      },
      {
        // Consolidated onto the kept SaaS sales recruiters guide (cannibalization fix).
        source: "/guides/best-saas-sales-recruiting-firms",
        destination: "/guides/best-recruiters-saas-startups-sales",
        statusCode: 301,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/unbundled",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/atlanta-sales-headhunter",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/unbundled-recruiting-services",
        destination: "/recruit/fractional-sales",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/post/why-grit-is-so-important-in-salespeople",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/job-seekers",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/connect-with-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services-2",
        destination: "/recruit/sales",
        permanent: true,
      },
      {
        source: "/services-2/artifical-intelligence-recruiting",
        destination: "/recruit/ai",
        permanent: true,
      },
      {
        source: "/post/boosting-success-in-cold-calling",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/expert-strategies-for-recruiting",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/resume-refresh",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/the-myth-recruiting-firms-are-too-expensive",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/the-power-of-topgrading-a-comprehensive-guide-to-elevating-your-sales-team",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/the-ultimate-guide-to-hiring-retaining-your-next-superstar-employee",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/navigating-the-world-of-b2b-sales-common-pitfalls-to-avoid",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/topgrading-sales-people",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/ai-powered-sales",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/the-fatal-assumptions-that-hiring-leaders-make",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/categories/linkedin",
        destination: "/blog",
        permanent: true,
      },
      // Wix legacy 301s (permanent: true emits 308 on this host). Specific sources first.
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/kontakt",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/post/are-you-missing-out-on-70-of-the-talent-market",
        destination: "/guides/active-vs-passive-candidates",
        permanent: true,
      },
      {
        source: "/post/is-it-possible-to-hire-passive-a-player-sales-talent-in-an-unstable-market",
        destination: "/guides/active-vs-passive-candidates",
        permanent: true,
      },
      {
        source: "/post/recruiting-passive-candidates",
        destination: "/guides/active-vs-passive-candidates",
        permanent: true,
      },
      {
        source: "/post/how-hiring-the-wrong-salesperson-can-impact-your-team",
        destination: "/guides/cost-of-a-bad-hire",
        permanent: true,
      },
      {
        source: "/post/the-true-cost-of-a-bad-hire-what-every-employer-needs-to-know",
        destination: "/guides/cost-of-a-bad-hire",
        permanent: true,
      },
      {
        source: "/atlanta",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/atlanta-sales-recruiting",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/post/sales-headhunter",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/post/sales-headhunting",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/post/sales-recruiter",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/post/sales-recruiting-atlanta",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/sales-recruiter-atlanta",
        destination: "/guides/sales-recruiters-atlanta",
        permanent: true,
      },
      {
        source: "/post/advantages-interview-scorecard",
        destination: "/hiring-scorecard",
        permanent: true,
      },
      {
        source: "/post/interview-scorecard",
        destination: "/hiring-scorecard",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/post/ai-recruiting-bias-and-how-it-can-impact-hiring",
        destination: "/recruit/ai",
        permanent: true,
      },
      {
        source: "/post/advantages-of-outsourcing-your-recruiting-and-hiring-needs",
        destination: "/recruit/fractional-sales",
        permanent: true,
      },
      {
        source: "/post/on-demand-recruiting",
        destination: "/recruit/fractional-sales",
        permanent: true,
      },
      {
        source: "/post/outsourced-recruiting-solutions",
        destination: "/recruit/fractional-sales",
        permanent: true,
      },
      {
        source: "/post/the-benefits-of-utilizing-unbundled-recruiting-services-in-2023",
        destination: "/recruit/fractional-sales",
        permanent: true,
      },
      {
        source: "/post/unbundled-recruiting-services",
        destination: "/recruit/fractional-sales",
        permanent: true,
      },
      {
        source: "/hiring",
        destination: "/recruit/sales",
        permanent: true,
      },
      {
        source: "/services-3",
        destination: "/recruit/sales",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/terms-of-use",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/post/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/categories/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/tags/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/hashtags/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/page/:path*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;