export const FIRST_TOUCH_KEY = "kas_first_touch";

export type FirstTouch = {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    gclid: string;
    referrer: string;
    landing_page: string;
    timestamp: string;
};

declare global {
    interface Window {
        gtag?: (
            command: string,
            eventName: string,
            params?: Record<string, string>
        ) => void;
        dataLayer?: unknown[];
    }
}

const emptyTouch = (): FirstTouch => ({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
    referrer: "",
    landing_page: "",
    timestamp: "",
});

function readStore(): string | null {
    try {
        const value = localStorage.getItem(FIRST_TOUCH_KEY);
        if (value) return value;
    } catch {
        // private mode or disabled storage
    }
    try {
        return sessionStorage.getItem(FIRST_TOUCH_KEY);
    } catch {
        return null;
    }
}

function writeStore(value: string) {
    try {
        localStorage.setItem(FIRST_TOUCH_KEY, value);
    } catch {
        // fall through to sessionStorage
    }
    try {
        sessionStorage.setItem(FIRST_TOUCH_KEY, value);
    } catch {
        // attribution will still be returned for this page view
    }
}

function parseTouch(raw: string | null): FirstTouch | null {
    if (!raw) return null;
    try {
        const parsed = JSON.parse(raw) as Partial<FirstTouch>;
        if (!parsed || typeof parsed !== "object") return null;
        return { ...emptyTouch(), ...parsed };
    } catch {
        return null;
    }
}

/** Capture first-touch attribution once. Later page views do not overwrite it. */
export function captureFirstTouch(): FirstTouch {
    if (typeof window === "undefined") return emptyTouch();

    const existing = parseTouch(readStore());
    if (existing) return existing;

    const params = new URLSearchParams(window.location.search);
    const touch: FirstTouch = {
        utm_source: params.get("utm_source") ?? "",
        utm_medium: params.get("utm_medium") ?? "",
        utm_campaign: params.get("utm_campaign") ?? "",
        utm_term: params.get("utm_term") ?? "",
        utm_content: params.get("utm_content") ?? "",
        gclid: params.get("gclid") ?? "",
        referrer: document.referrer ?? "",
        landing_page: `${window.location.pathname}${window.location.search}`,
        timestamp: new Date().toISOString(),
    };
    writeStore(JSON.stringify(touch));
    return touch;
}

export function getFirstTouch(): FirstTouch {
    if (typeof window === "undefined") return emptyTouch();
    return parseTouch(readStore()) ?? captureFirstTouch();
}

const LEAD_FIELD_MAX = 500;

/** Accept a first-touch object from the client, keeping only known short string fields. */
export function parseLeadSourceInput(raw: unknown): FirstTouch {
    if (!raw || typeof raw !== "object") return emptyTouch();
    const o = raw as Record<string, unknown>;
    const pick = (key: keyof FirstTouch) =>
        typeof o[key] === "string" ? o[key].slice(0, LEAD_FIELD_MAX) : "";
    return {
        utm_source: pick("utm_source"),
        utm_medium: pick("utm_medium"),
        utm_campaign: pick("utm_campaign"),
        utm_term: pick("utm_term"),
        utm_content: pick("utm_content"),
        gclid: pick("gclid"),
        referrer: pick("referrer"),
        landing_page: pick("landing_page"),
        timestamp: pick("timestamp"),
    };
}

/** Human-readable block for the Formspree email / mailto body. */
export function formatLeadSource(touch: FirstTouch): string {
    const hasCampaign = Boolean(
        touch.utm_source || touch.utm_medium || touch.utm_campaign || touch.utm_term || touch.utm_content || touch.gclid
    );
    const hasReferrer = Boolean(touch.referrer);
    if (!hasCampaign && !hasReferrer && !touch.landing_page) {
        return "Direct (no campaign or referrer captured)";
    }

    const lines: string[] = [];
    const source = [touch.utm_source, touch.utm_medium].filter(Boolean).join(" / ");
    if (source) lines.push(`Source: ${source}`);
    else if (!hasCampaign && !hasReferrer) lines.push("Source: Direct (no campaign or referrer captured)");
    else if (!hasCampaign) lines.push("Source: Referral / no UTM");
    if (touch.utm_campaign) lines.push(`Campaign: ${touch.utm_campaign}`);
    if (touch.utm_term) lines.push(`Term: ${touch.utm_term}`);
    if (touch.utm_content) lines.push(`Content: ${touch.utm_content}`);
    if (touch.gclid) lines.push(`Google Click ID: ${touch.gclid}`);
    if (touch.referrer) lines.push(`Referrer: ${touch.referrer}`);
    if (touch.landing_page) lines.push(`Landing page: ${touch.landing_page}`);
    if (touch.timestamp) lines.push(`First touch: ${touch.timestamp}`);
    return lines.join("\n");
}

export function leadSourceFormFields(touch: FirstTouch): Record<string, string> {
    return {
        lead_source: formatLeadSource(touch),
        utm_source: touch.utm_source,
        utm_medium: touch.utm_medium,
        utm_campaign: touch.utm_campaign,
        utm_term: touch.utm_term,
        utm_content: touch.utm_content,
        gclid: touch.gclid,
        referrer: touch.referrer,
        landing_page: touch.landing_page,
        first_touch_at: touch.timestamp,
    };
}

/** Fire GA4 + Vercel Analytics only after a confirmed successful form submit. */
export function fireContactFormConversion(
    touch: FirstTouch,
    options?: { form_name?: string }
) {
    if (typeof window === "undefined") return;

    const formName = options?.form_name ?? "contact";
    const params: Record<string, string> = {
        form_name: formName,
        page_location: window.location.href,
    };
    const optional: Array<[string, string]> = [
        ["utm_source", touch.utm_source],
        ["utm_medium", touch.utm_medium],
        ["utm_campaign", touch.utm_campaign],
        ["utm_term", touch.utm_term],
        ["utm_content", touch.utm_content],
        ["gclid", touch.gclid],
        ["referrer", touch.referrer],
        ["landing_page", touch.landing_page],
    ];
    for (const [key, value] of optional) {
        if (value) params[key] = value;
    }

    if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", params);
    }

    const analyticsEvent = formName === "contact" ? "contact_form_submit" : `${formName}_submit`;
    void import("@vercel/analytics")
        .then(({ track }) => {
            track(analyticsEvent, params);
        })
        .catch(() => {
            // no-op if the package is unavailable
        });
}
