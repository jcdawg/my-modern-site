import { getPageDates } from "@/lib/page-dates";
import { DEFAULT_OG_IMAGE, ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/lib/seo";

/**
 * Article + BreadcrumbList JSON-LD for /guides/* and /blog/* pages.
 * Dates come from src/lib/page-dates.ts (git history, see
 * scripts/generate-page-dates.mjs). Existing FAQPage blocks on each page are
 * left as they are; this renders a separate script tag.
 */
export default function ArticleJsonLd({
  title,
  description,
  path,
  headline,
  about,
}: {
  title: string;
  description: string;
  path: string;
  /** Optional longer headline; defaults to the page title. */
  headline?: string;
  about?: string[];
}) {
  const url = `${SITE_URL}${path}`;
  const dates = getPageDates(path);
  const section = path.startsWith("/blog/")
    ? { name: "Blog", path: "/blog" }
    : { name: "Guides", path: "/guides" };

  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: headline ?? title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: "Chris Stinson",
      jobTitle: "Founder",
      url: `${SITE_URL}/about`,
      sameAs: ["https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/"],
    },
    publisher: { "@id": ORGANIZATION_ID, "@type": "Organization", name: SITE_NAME },
  };
  if (dates) {
    article.datePublished = dates.published;
    article.dateModified = dates.modified;
  }
  if (about?.length) article.about = about;

  const breadcrumbs = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: section.name, item: `${SITE_URL}${section.path}` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const jsonLd = { "@context": "https://schema.org", "@graph": [article, breadcrumbs] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
