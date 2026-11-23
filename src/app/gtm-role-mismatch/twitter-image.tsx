import { toolOpenGraphImage, TOOL_OG_CONTENT_TYPE, TOOL_OG_SIZE } from "@/lib/og/tool-image";

export const alt = "GTM Role Mismatch Diagnostic";
export const size = TOOL_OG_SIZE;
export const contentType = TOOL_OG_CONTENT_TYPE;
export const runtime = "nodejs";

export default async function Image() {
    return toolOpenGraphImage("GTM Role Mismatch Diagnostic");
}
