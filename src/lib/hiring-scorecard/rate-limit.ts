/**
 * Simple in-memory per-IP rate limiter.
 * Durable store (Vercel KV / Upstash) is a follow-up; this resets on cold starts.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 8;

export function checkRateLimit(ip: string): { ok: true } | { ok: false; retryAfterSec: number } {
    const now = Date.now();
    const key = ip || "unknown";
    let b = buckets.get(key);
    if (!b || now >= b.resetAt) {
        b = { count: 0, resetAt: now + WINDOW_MS };
        buckets.set(key, b);
    }
    if (b.count >= MAX_PER_WINDOW) {
        return { ok: false, retryAfterSec: Math.max(1, Math.ceil((b.resetAt - now) / 1000)) };
    }
    b.count += 1;
    return { ok: true };
}

/** Test helper: force a key over the limit. */
export function forceExhaust(ip: string) {
    buckets.set(ip, { count: MAX_PER_WINDOW, resetAt: Date.now() + WINDOW_MS });
}
