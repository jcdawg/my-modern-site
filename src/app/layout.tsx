import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactClickTracker from "@/components/ContactClickTracker";
import Script from "next/script";
import { DEFAULT_OG_IMAGE, ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/lib/seo";

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
    "The Kas Group recruits for B2B SaaS and AI companies: VPs of Sales, CROs, AEs, SDRs, and AI/ML engineers. Programs, not contingency. Founded 2014.",
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
    types: {
      "text/markdown": "https://www.thekasgroup.com/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Kas Group",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE.url],
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

// Site-wide Organization node. Article JSON-LD on guides/blog references it
// as publisher via @id. Values match the fuller Organization on the homepage.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logos/kas-group-logo.svg`,
  },
  email: "chris@thekasgroup.com",
  foundingDate: "2014",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ContactClickTracker />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
