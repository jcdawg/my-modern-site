import { NextRequest, NextResponse } from "next/server";

/**
 * Stub: validates email and accepts the scorecard payload.
 * Needs HubSpot wiring (form GUID or private app token). No email is sent yet.
 */
export async function POST(req: NextRequest) {
    let body: { email?: string; scorecardId?: string };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }
    const email = (body.email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (!body.scorecardId) {
        return NextResponse.json({ error: "Missing scorecard id." }, { status: 400 });
    }
    // TODO: HubSpot create/update contact + store scorecard id. No existing HubSpot API pattern in this repo.
    return NextResponse.json({
        ok: true,
        queued: false,
        message: "Email capture is ready for HubSpot wiring. Nothing was emailed yet.",
    });
}
