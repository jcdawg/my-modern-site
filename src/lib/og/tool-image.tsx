import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const TOOL_OG_SIZE = { width: 1200, height: 630 };
export const TOOL_OG_CONTENT_TYPE = "image/png";

async function loadFonts() {
    const dir = join(process.cwd(), "src/lib/og/fonts");
    const [bold, medium] = await Promise.all([
        readFile(join(dir, "geist-700.ttf")),
        readFile(join(dir, "geist-500.ttf")),
    ]);
    return [
        { name: "Geist", data: bold, weight: 700 as const, style: "normal" as const },
        { name: "Geist", data: medium, weight: 500 as const, style: "normal" as const },
    ];
}

/** 1200x630 share image: navy, Geist, #2563EB accent, hexagon mark, tool title only. */
export async function toolOpenGraphImage(title: string) {
    const fonts = await loadFonts();
    const fontSize = title.length > 36 ? 64 : 72;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#020617",
                    color: "#ffffff",
                    padding: "72px 90px",
                    position: "relative",
                    fontFamily: "Geist",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        top: 0,
                        right: 0,
                        width: 420,
                        height: 420,
                        borderRadius: 420,
                        backgroundColor: "rgba(37, 99, 235, 0.12)",
                        transform: "translate(120px, -160px)",
                    }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            d="M16 4.5L25.96 10.25V21.75L16 27.5L6.04 21.75V10.25L16 4.5Z"
                            stroke="#2563EB"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                        />
                        <path d="M16 4.5L16 27.5" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.5" />
                        <path d="M25.96 10.25L6.04 21.75" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.5" />
                        <path d="M25.96 21.75L6.04 10.25" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.5" />
                        <path
                            d="M16 16L25.96 10.25M16 16L25.96 21.75M16 16L16 27.5M16 16L6.04 21.75M16 16L6.04 10.25M16 16L16 4.5"
                            stroke="#2563EB"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>
                        <span>The </span>
                        <span style={{ color: "#2563EB" }}>Kas</span>
                        <span> Group</span>
                    </div>
                </div>
                <div
                    style={{
                        width: 360,
                        height: 6,
                        backgroundColor: "#2563EB",
                        marginTop: 44,
                        borderRadius: 3,
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        fontSize,
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: "-0.03em",
                        marginTop: 36,
                        maxWidth: 1020,
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        left: 90,
                        bottom: 56,
                        color: "#2563EB",
                        fontSize: 24,
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                    }}
                >
                    THEKASGROUP.COM
                </div>
            </div>
        ),
        { ...TOOL_OG_SIZE, fonts },
    );
}
