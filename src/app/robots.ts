import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/_api/", "/cdn-cgi/"],
            },
        ],
        sitemap: "https://www.thekasgroup.com/sitemap.xml",
        host: "https://www.thekasgroup.com",
    };
}