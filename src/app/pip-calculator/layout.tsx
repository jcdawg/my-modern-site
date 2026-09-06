import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sales Territory Optimization Calculator",
  description:
    "Measure the true financial cost of an underperforming sales rep on PIP, empty-chair downtime, and ramp. Plan confidential replacements with The Kas Group.",
  path: "/pip-calculator",
});

export default function PipCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
