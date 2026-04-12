import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PersonJsonLd } from "@/components/shared/json-ld";
import { Providers } from "@/components/shared/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nataliaduran.tech"),
  title: {
    default: "Natalia Durán Oliva — Software Engineer",
    template: "%s | Natalia Durán Oliva",
  },
  description:
    "Software Engineer & Independent Consultant. Specialized in scalable architectures, microservices, AI agents, and full stack development.",
  keywords: [
    "Software Engineer",
    "Consultant",
    "Full Stack Developer",
    "Spring Boot",
    "React",
    "Microservices",
    "AI Agents",
    "LangGraph",
    "Bolivia",
  ],
  authors: [{ name: "Natalia Durán Oliva" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Natalia Durán Oliva",
  },
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
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
