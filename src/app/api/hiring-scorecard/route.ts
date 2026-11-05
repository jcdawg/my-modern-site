import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { SYSTEM_PROMPT, MODEL_ORDER, MAX_INPUT_CHARS } from "@/lib/hiring-scorecard/prompt";
import { validateScorecardPayload } from "@/lib/hiring-scorecard/validate";
import { checkRateLimit } from "@/lib/hiring-scorecard/rate-limit";
import type { Scorecard } from "@/lib/hiring-scorecard/types";

export const runtime = "nodejs";
export const maxDuration = 60;

function clientIp(req: NextRequest): string {
    return (
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown"
    );
}

async function callOpenRouter(
    apiKey: string,
    userContent: string,
    model: string,
    fallbacks: string[],
    signal: AbortSignal
) {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        signal,
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://www.thekasgroup.com",
            "X-Title": "The Kas Group Hiring Scorecard",
        },
        body: JSON.stringify({
            model,
            models: fallbacks,
            temperature: 0.2,
            max_tokens: 3500,
            response_format: { type: "json_object" },
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userContent },
            ],
        }),
    });
    if (!res.ok) {
        const errText = await res.text().catch(() => "");
        throw new Error(`openrouter_${res.status}:${errText.slice(0, 120)}`);
    }
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content || typeof content !== "string") throw new Error("empty_content");
    return { content, modelUsed: (data.model as string) || model };
}

export async function POST(req: NextRequest) {
    const ip = clientIp(req);
    const limited = checkRateLimit(ip);
    if (!limited.ok) {
        return NextResponse.json(
            { error: `Too many scorecard requests. Try again in about ${limited.retryAfterSec} seconds.` },
            { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } }
        );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: "Scorecard service is not configured." }, { status: 503 });
    }

    let body: {
        jobDescription?: string;
        seniority?: string;
        mustHaves?: string;
        dealBreakers?: string;
        teamSize?: string;
    };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const jobDescription = (body.jobDescription || "").trim();
    if (!jobDescription) {
        return NextResponse.json({ error: "Paste a job description or role details first." }, { status: 400 });
    }
    if (jobDescription.length > MAX_INPUT_CHARS) {
        return NextResponse.json(
            { error: `Keep the job description under ${MAX_INPUT_CHARS.toLocaleString()} characters.` },
            { status: 400 }
        );
    }

    const extras = [
        body.seniority ? `Seniority: ${body.seniority}` : "",
        body.mustHaves ? `Must-haves from hiring manager: ${body.mustHaves}` : "",
        body.dealBreakers ? `Deal-breakers: ${body.dealBreakers}` : "",
        body.teamSize ? `Team size: ${body.teamSize}` : "",
    ]
        .filter(Boolean)
        .join("\n");

    const userContent = `Build a hiring scorecard for this role.\n\n${jobDescription}${extras ? `\n\n${extras}` : ""}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 55000);

    try {
        // Prefer OpenRouter models[] fallback (free then paid). If the response is not valid JSON
        // for our schema, retry once starting at the paid model.
        let lastError = "unknown";
        const attempts: { model: string; fallbacks: string[] }[] = [
            { model: MODEL_ORDER[0], fallbacks: MODEL_ORDER.length > 1 ? [MODEL_ORDER[1]] : [] },
            ...(MODEL_ORDER.length > 1
                ? [{ model: MODEL_ORDER[1], fallbacks: [] as string[] }]
                : []),
        ];

        for (const attempt of attempts) {
            try {
                const { content, modelUsed } = await callOpenRouter(
                    apiKey,
                    userContent,
                    attempt.model,
                    attempt.fallbacks,
                    controller.signal
                );
                let parsed: unknown;
                try {
                    parsed = JSON.parse(content);
                } catch {
                    lastError = "json_parse";
                    continue;
                }
                const payload = validateScorecardPayload(parsed);
                const scorecard: Scorecard = {
                    ...payload,
                    scorecardId: randomUUID(),
                    builtAt: new Date().toISOString(),
                };
                return NextResponse.json({ scorecard, modelUsed });
            } catch (e) {
                lastError = e instanceof Error ? e.message.slice(0, 80) : "error";
                continue;
            }
        }

        console.error("scorecard_all_failed", lastError);
        return NextResponse.json(
            { error: "We could not build a scorecard right now. Please try again in a minute." },
            { status: 502 }
        );
    } catch (e) {
        const aborted = e instanceof Error && e.name === "AbortError";
        console.error("scorecard_route_error", aborted ? "timeout" : "error");
        return NextResponse.json(
            { error: "We could not build a scorecard right now. Please try again in a minute." },
            { status: 502 }
        );
    } finally {
        clearTimeout(timeout);
    }
}
