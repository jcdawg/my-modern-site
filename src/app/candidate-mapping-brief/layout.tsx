import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Confidential Shortlist Matrix",
  description:
    "Active cohort mapping and confidential shortlist matrix for GTM and technical talent from The Kas Group.",
  path: "/candidate-mapping-brief",
});

export default function CandidateMappingBriefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
