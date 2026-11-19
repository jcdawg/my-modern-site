/**
 * Normalize the "Website or pitch" box and the optional URL field so a pasted
 * link (or bare domain) is treated as a company URL. Pure TypeScript: safe to
 * import from client and server. This is not the SSRF gate; publicHttps() still
 * has to approve any URL before it is fetched.
 */

export type CompanyInput = {
    companyText: string;
    companyUrl: string;
};

const BARE_DOMAIN = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+([/?#][^\s]*)?$/i;
const HTTP_URL = /^https?:\/\/[^\s]+$/i;
const SCHEME = /^([a-z][a-z0-9+.-]*):/i;
const IPV4 = /^(\d{1,3})(?:\.(\d{1,3})){3}$/;

const FILE_LIKE_TLDS = new Set([
    "md",
    "txt",
    "pdf",
    "doc",
    "docx",
    "rtf",
    "csv",
    "tsv",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "svg",
    "ico",
    "mp3",
    "mp4",
    "wav",
    "mov",
    "zip",
    "tar",
    "gz",
    "tgz",
    "rar",
    "7z",
    "js",
    "jsx",
    "ts",
    "tsx",
    "mjs",
    "cjs",
    "css",
    "scss",
    "json",
    "xml",
    "html",
    "htm",
    "map",
    "py",
    "rb",
    "go",
    "rs",
    "java",
    "yml",
    "yaml",
    "toml",
    "ini",
    "log",
    "env",
    "sql",
    "exe",
    "dmg",
    "pkg",
    "vue",
    "php",
]);

export function resolveCompanyInput(companyText: string, companyUrl: string): CompanyInput {
    const text = companyText.trim();
    const url = companyUrl.trim();

    if (url) {
        return { companyText: text, companyUrl: normalizeCompanyUrl(url) };
    }
    if (!text) {
        return { companyText: "", companyUrl: "" };
    }
    if (isSingleUrlOrBareDomain(text)) {
        return { companyText: "", companyUrl: normalizeCompanyUrl(text) };
    }

    const extracted = extractUrlLine(text);
    if (extracted) return extracted;

    return { companyText: text, companyUrl: "" };
}

/** Upgrade a bare domain or public http(s) link to https, leaving other schemes and local/private hosts untouched. */
export function normalizeCompanyUrl(raw: string): string {
    const value = raw.trim();
    if (!value) return "";

    const schemeMatch = value.match(SCHEME);
    if (schemeMatch) {
        const scheme = schemeMatch[1].toLowerCase();
        if (scheme !== "http" && scheme !== "https") return value;
        const host = hostnameOf(value);
        if (!host || isLocalOrPrivateHost(host)) return value;
        if (scheme === "https" && value.startsWith("https:")) return value;
        return `https:${value.slice(schemeMatch[0].length)}`;
    }

    if (isBareDomain(value)) {
        const host = hostnameOf(value);
        if (!host || isLocalOrPrivateHost(host)) return value;
        return `https://${value}`;
    }

    return value;
}

function isSingleUrlOrBareDomain(value: string): boolean {
    return HTTP_URL.test(value) || isBareDomain(value);
}

function extractUrlLine(text: string): CompanyInput | null {
    const lines = text.split(/\r?\n/);
    const index = lines.findIndex((line) => HTTP_URL.test(line.trim()));
    if (index === -1) return null;
    const companyUrl = normalizeCompanyUrl(lines[index].trim());
    const companyText = [...lines.slice(0, index), ...lines.slice(index + 1)].join("\n").trim();
    return { companyText, companyUrl };
}

function isBareDomain(value: string): boolean {
    if (!BARE_DOMAIN.test(value)) return false;
    const host = value.split(/[/?#]/, 1)[0]?.toLowerCase() ?? "";
    if (!host || IPV4.test(host)) return false;
    const tld = host.slice(host.lastIndexOf(".") + 1);
    if (!/^[a-z]{2,}$/.test(tld) || FILE_LIKE_TLDS.has(tld)) return false;
    return true;
}

function hostnameOf(value: string): string | null {
    try {
        const href = SCHEME.test(value) ? value : `https://${value}`;
        return new URL(href).hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.+$/, "");
    } catch {
        return null;
    }
}

function isLocalOrPrivateHost(host: string): boolean {
    const name = host.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.+$/, "");
    if (
        !name ||
        name === "localhost" ||
        name.endsWith(".localhost") ||
        name.endsWith(".local") ||
        name.endsWith(".internal") ||
        name.endsWith(".lan") ||
        name.endsWith(".home.arpa")
    ) {
        return true;
    }
    if (IPV4.test(name)) return !isPublicV4(name);
    if (name.includes(":")) return isPrivateV6(name);
    return false;
}

function isPublicV4(ip: string): boolean {
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
    if (a >= 224) return false;
    return true;
}

function isPrivateV6(ip: string): boolean {
    if (ip === "::" || ip === "::1") return true;
    const mapped = ip.match(/^::ffff:(?:0:)?(.+)$/);
    if (mapped) {
        const tail = mapped[1];
        if (IPV4.test(tail)) return !isPublicV4(tail);
        const hex = tail.match(/^([0-9a-f]{1,4}):([0-9a-f]{1,4})$/);
        if (!hex) return true;
        const hi = parseInt(hex[1], 16);
        const lo = parseInt(hex[2], 16);
        return !isPublicV4(`${hi >> 8}.${hi & 255}.${lo >> 8}.${lo & 255}`);
    }
    if (/^(fe[89ab][0-9a-f]?|fc|fd|ff)/.test(ip)) return true;
    if (ip.startsWith("64:ff9b:") || ip.startsWith("2001:db8") || ip.startsWith("2002:") || ip.startsWith("100::")) return true;
    if (/^::(\d|[0-9a-f]{1,4}:)/.test(ip)) return true;
    return false;
}
