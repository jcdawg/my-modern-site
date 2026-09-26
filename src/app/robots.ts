import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // /_next/ is intentionally NOT disallowed: crawlers need
                // /_next/static (JS/CSS) to render pages and /_next/image for
                // optimized images.
                disallow: ["/api/", "/_api/", "/cdn-cgi/"],
            },
        ],
        sitemap: "https://www.thekasgroup.com/sitemap.xml",
        host: "https://www.thekasgroup.com",
    };
}
