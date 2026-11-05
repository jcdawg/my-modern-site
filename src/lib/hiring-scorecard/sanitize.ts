/** Replace em/en dashes so copy stays within site rules. */
export function sanitizeScorecardText(text: string): string {
    return text
        .replace(/\u2014/g, ",") // em dash
        .replace(/\u2013/g, " to ") // en dash as range
        .replace(/\s+to\s+/g, " to ")
        .replace(/\s+,/g, ",")
        .replace(/,\s*,/g, ",")
        .trim();
}

export function sanitizeDeep<T>(value: T): T {
    if (typeof value === "string") return sanitizeScorecardText(value) as T;
    if (Array.isArray(value)) return value.map((v) => sanitizeDeep(v)) as T;
    if (value && typeof value === "object") {
        const out: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
            out[k] = sanitizeDeep(v);
        }
        return out as T;
    }
    return value;
}
