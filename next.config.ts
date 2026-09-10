import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        source: "/contact-us",
        destination: "/contact",
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
    ];
  },
};

export default nextConfig;