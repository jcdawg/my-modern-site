import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sales Ramp Time Calculator",
  description:
    "Estimate weeks to first deal and full productivity for a new sales hire. See the revenue leak during ramp. Free tool from The Kas Group.",
  path: "/ramp-time-calculator",
});

export default function RampTimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
