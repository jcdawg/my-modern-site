import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "GTM Role Mismatch Diagnostic",
    description:
        "Paste a sales job description next to your company text. Twelve separate questions score your GTM stage and the seat. Free diagnostic from The Kas Group.",
    path: "/gtm-role-mismatch",
});

export default function GtmRoleMismatchLayout({ children }: { children: React.ReactNode }) {
    return children;
}
