import type { Metadata } from "next";
import { getPageDates } from "@/lib/page-dates";

export const SITE_URL = "https://www.thekasgroup.com";
export const SITE_NAME = "The Kas Group";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Default 1200x630 share image used when a page does not set its own. */
export const DEFAULT_OG_IMAGE = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "The Kas Group: Sales and GTM recruiting for startups",
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  /** Site-absolute path like /og/programs.png */
  image?: string;
  /**
   * "article" for /guides/* and /blog/* pages. Adds og:type=article plus
   * published/modified times from the git-derived page-dates map.
   */
  type?: "website" | "article";
}): Metadata {
  // Next.js replaces (does not deep-merge) a parent's openGraph/twitter
  // objects, so every page repeats site-wide fields like siteName and the
  // default image here.
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : [DEFAULT_OG_IMAGE];

  const base = {
    title,
    description,
    url: path,
    siteName: SITE_NAME,
    locale: "en_US",
    images,
  };

  let openGraph: Metadata["openGraph"];
  if (type === "article") {
    const dates = getPageDates(path);
    openGraph = {
      ...base,
      type: "article",
      authors: ["Chris Stinson"],
      ...(dates ? { publishedTime: dates.published, modifiedTime: dates.modified } : {}),
    };
  } else {
    openGraph = { ...base, type: "website" };
  }

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images[0].url],
    },
  };
}
