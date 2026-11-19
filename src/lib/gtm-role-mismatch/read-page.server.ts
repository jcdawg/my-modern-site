import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

/**
 * Read one public https page as plain text for the GTM Role Mismatch diagnostic.
 * Refuses anything that is not https, carries credentials, or resolves to a
 * private, loopback, link-local, CGNAT, multicast or reserved address. Redirects
 * are followed by hand (max 2 hops) and every hop is re-checked. Nothing fetched
 * is logged or stored.
 */
export async function fetchPublicPage(raw: string) {
    let current = raw;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    try {
        for (let hop = 0; hop < 3; hop += 1) {
            const url = await publicHttps(current);
            if (!url) return null;
            const res = await fetch(url, {
                redirect: "manual",
                signal: controller.signal,
                cache: "no-store",
                headers: { Accept: "text/html,text/plain", "User-Agent": "KasGroupDiagnostic/1.0" },
            });
            if (res.status >= 300 && res.status < 400) {
                const location = res.headers.get("location");
                if (!location) return null;
                current = new URL(location, url).toString();
                continue;
            }
            if (!res.ok) return null;
            const type = res.headers.get("content-type") ?? "";
            if (!/text\/html|text\/plain/.test(type)) return null;
            const bytes = await res.arrayBuffer();
            if (bytes.byteLength > 250_000) return null;
            const text = htmlToText(new TextDecoder().decode(bytes)).slice(0, 8000);
            return text.length >= 40 ? text : null;
        }
        return null;
    } catch {
        return null;
    } finally {
        clearTimeout(timer);
    }
}

/** Returns the normalized URL when it is a public https address, otherwise null. */
export async function publicHttps(raw: string) {
    let url: URL;
    try {
        url = new URL(raw);
    } catch {
        return null;
    }
    if (url.protocol !== "https:" || url.username || url.password) return null;
    if (url.port && url.port !== "443") return null;
    const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.+$/, "");
    if (
        !host ||
        host === "localhost" ||
        host.endsWith(".localhost") ||
        host.endsWith(".local") ||
        host.endsWith(".internal") ||
        host.endsWith(".lan") ||
        host.endsWith(".home.arpa")
    ) {
        return null;
    }
    if (isIP(host)) return isPublicAddress(host) ? url.toString() : null;
    if (!host.includes(".")) return null;
    try {
        const records = await lookup(host, { all: true, verbatim: true });
        if (!records.length || records.some((record) => !isPublicAddress(record.address))) return null;
    } catch {
        return null;
    }
    return url.toString();
}

export function isPublicAddress(address: string) {
    const ip = address.toLowerCase();
    const kind = isIP(ip);
    if (!kind) return false;
    if (kind === 4) return isPublicV4(ip);

    // IPv6
    if (ip === "::" || ip === "::1") return false;
    const mapped = ip.match(/^::ffff:(?:0:)?(.+)$/);
    if (mapped) {
        const tail = mapped[1];
        if (isIP(tail) === 4) return isPublicV4(tail);
        const hex = tail.match(/^([0-9a-f]{1,4}):([0-9a-f]{1,4})$/);
        if (!hex) return false;
        const hi = parseInt(hex[1], 16);
        const lo = parseInt(hex[2], 16);
        return isPublicV4(`${hi >> 8}.${hi & 255}.${lo >> 8}.${lo & 255}`);
    }
    if (/^(fe[89ab][0-9a-f]?|fc|fd|ff)/.test(ip)) return false; // link-local, unique-local, multicast
    if (ip.startsWith("64:ff9b:") || ip.startsWith("2001:db8") || ip.startsWith("2002:") || ip.startsWith("100::")) return false;
    if (/^::(\d|[0-9a-f]{1,4}:)/.test(ip)) return false; // IPv4-compatible / other ::-prefixed forms
    return true;
}

function isPublicV4(ip: string) {
    const parts = ip.split(".").map((part) => Number(part));
    if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return false;
    const [a, b] = parts;
    if (a === 0 || a === 10 || a === 127) return false;
    if (a === 169 && b === 254) return false;
    if (a === 172 && b >= 16 && b <= 31) return false;
    if (a === 192 && b === 168) return false;
    if (a === 192 && b === 0) return false;
    if (a === 100 && b >= 64 && b <= 127) return false;
    if (a === 198 && (b === 18 || b === 19)) return false;
    if (a >= 224) return false; // multicast + reserved + broadcast
    return true;
}

function htmlToText(html: string) {
    return html
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/gi, " ")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/&#39;|&apos;/gi, "'")
        .replace(/&quot;/gi, '"')
        .replace(/&amp;/gi, "&")
        .replace(/\s+/g, " ")
        .trim();
}
