import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thekasgroup.com"),
  title: {
    default: "The Kas Group | Elite Sales & AI Technical Recruiting",
    template: "%s | The Kas Group",
  },
  description:
    "The Kas Group is an elite sales and AI technical recruiting firm. We specialize in placing B2B SaaS sales leaders (VP of Sales, CRO, AEs) and Ph.D.-vetted AI/ML engineers for high-growth tech companies. Founded 2014.",
  keywords: [
    "The Kas Group",
    "TKS",
    "sales recruiting firm",
    "AI technical recruiting",
    "B2B SaaS recruiting",
    "VP of Sales recruiter",
    "ML engineer recruiting",
    "executive search firm",
    "fractional sales recruiting",
    "data engineer recruiter",
    "Chris Stinson recruiter",
    "thekasgroup.com",
  ],
  alternates: {
    canonical: "https://www.thekasgroup.com",
    types: {
      "text/markdown": "https://www.thekasgroup.com/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.thekasgroup.com",
    siteName: "The Kas Group",
    title: "The Kas Group | Elite Sales & AI Technical Recruiting",
    description:
      "Elite Sales & AI Talent. Vetted by Experts. Placing B2B SaaS sales leaders and Ph.D.-vetted AI/ML engineers since 2014.",
    images: [
      {
        url: "/logos/kas-group-logo.svg",
        width: 1200,
        height: 630,
        alt: "The Kas Group: Elite Sales & AI Technical Recruiting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kas Group | Elite Sales & AI Technical Recruiting",
    description:
      "Elite Sales & AI Talent. Vetted by Experts. Placing B2B SaaS sales leaders and Ph.D.-vetted AI/ML engineers since 2014.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HSFJV4BFRG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HSFJV4BFRG');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
