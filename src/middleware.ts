import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getMarkdownForPath, getAgentFriendly404Markdown } from "@/lib/markdown-content";

// Paths that Next.js handles internally — never intercept these
const INTERNAL_PREFIXES = ["/_next", "/api", "/__next"];
// Static file extensions served directly from /public
const STATIC_EXTENSIONS = /\.(ico|png|jpg|jpeg|gif|svg|webp|pdf|html|xml|txt|json|css|js|woff|woff2|ttf|eot|map)$/i;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip internals and static assets
    if (
        INTERNAL_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
        STATIC_EXTENSIONS.test(pathname)
    ) {
        const response = NextResponse.next();
        // Still add Vary so CDNs know this content can vary by Accept
        response.headers.set("Vary", "Accept, Accept-Encoding");
        return response;
    }

    const acceptHeader = request.headers.get("accept") ?? "";

    // Check if the client prefers markdown (strict or loose match)
    const wantsMarkdown =
        acceptHeader.includes("text/markdown") ||
        acceptHeader.includes("text/x-markdown");

    if (wantsMarkdown) {
        const markdown = getMarkdownForPath(pathname);

        if (markdown) {
            // Known route — return markdown representation
            return new NextResponse(markdown, {
                status: 200,
                headers: {
                    "Content-Type": "text/markdown; charset=utf-8",
                    "Vary": "Accept, Accept-Encoding",
                    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
                    "X-Robots-Tag": "index, follow",
                },
            });
        } else {
            // Unknown route — return agent-friendly 404 in markdown
            const body = getAgentFriendly404Markdown(pathname);
            return new NextResponse(body, {
                status: 404,
                headers: {
                    "Content-Type": "text/markdown; charset=utf-8",
                    "Vary": "Accept, Accept-Encoding",
                    "Cache-Control": "no-store",
                },
            });
        }
    }

    // For standard HTML requests: add Vary header so CDNs cache variants separately
    const response = NextResponse.next();
    response.headers.set("Vary", "Accept, Accept-Encoding");
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico
         */
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
