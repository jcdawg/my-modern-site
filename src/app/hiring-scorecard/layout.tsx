import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Hiring Scorecard Builder",
    description:
        "Build a free hiring scorecard from a job description: outcomes, competencies rated 1 to 5, interview questions and reference checks. From The Kas Group.",
    path: "/hiring-scorecard",
});

export default function HiringScorecardLayout({ children }: { children: React.ReactNode }) {
    return children;
}
