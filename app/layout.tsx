import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/shared/json-ld";
import { Providers } from "@/components/shared/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = "https://nataliaduran.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1e" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Natalia Durán Oliva — Software Engineer & Consultant",
    template: "%s | Natalia Durán Oliva",
  },
  description:
    "Software Engineer, AI Engineer & Independent Consultant. 6+ years building scalable software in fintech, insurance, AI, and energy. Community leader at GDG & WTM Santa Cruz.",
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Independent Consultant",
    "Full Stack Developer",
    "Spring Boot",
    "React",
    "Next.js",
    "Microservices",
    "LangGraph",
    "Python",
    "TypeScript",
    "Bolivia",
    "Santa Cruz",
    "GDG",
    "Women Techmakers",
  ],
  authors: [{ name: "Natalia Durán Oliva", url: BASE_URL }],
  creator: "Natalia Durán Oliva",
  publisher: "Natalia Durán Oliva",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_BO",
    url: BASE_URL,
    siteName: "Natalia Durán Oliva",
    title: "Natalia Durán Oliva — Software Engineer & Consultant",
    description:
      "Software Engineer, AI Engineer & Independent Consultant. 6+ years building scalable software. Community leader at GDG & WTM Santa Cruz, Bolivia.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Natalia Durán Oliva — Software Engineer & Independent Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natalia Durán Oliva — Software Engineer & Consultant",
    description:
      "Software Engineer, AI Engineer & Independent Consultant. 6+ years building scalable software.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  category: "technology",
  // verification: {
  //   google: "<paste-your-Google-Search-Console-token-here>",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground antialiased">
        <Providers>
          <PersonJsonLd />
          <WebSiteJsonLd />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
