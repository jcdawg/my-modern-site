import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/unbundled-recruiting-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/the-myth-recruiting-firms-are-too-expensive",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/the-power-of-topgrading-a-comprehensive-guide-to-elevating-your-sales-team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/resume-refresh",
        destination: "/",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services-2",
        destination: "/recruit/sales",
        permanent: true,
      },
      {
        source: "/post/why-grit-is-so-important-in-salespeople",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/boosting-success-in-cold-calling",
        destination: "/",
        permanent: true,
      },
      {
        source: "/atlanta-sales-headhunter",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/expert-strategies-for-recruiting",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services-2/artifical-intelligence-recruiting",
        destination: "/recruit/ai",
        permanent: true,
      },
      {
        source: "/connect-with-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/the-ultimate-guide-to-hiring-retaining-your-next-superstar-employee",
        destination: "/",
        permanent: true,
      },
      {
        source: "/job-seekers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/navigating-the-world-of-b2b-sales-common-pitfalls-to-avoid",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/topgrading-sales-people",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
