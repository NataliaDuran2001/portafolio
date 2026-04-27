import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full Stack Engineer with 6+ years building software in fintech, insurance, AI, and energy. Lead organizer at GDG Santa Cruz and Women Techmakers, based in Bolivia.",
  alternates: { canonical: "https://nataliaduran.dev/about/" },
  openGraph: {
    title: "About — Natalia Durán Oliva",
    description:
      "Full Stack Engineer with 6+ years building software in fintech, insurance, AI, and energy. Community leader in Bolivia.",
    url: "https://nataliaduran.dev/about/",
    images: [
      {
        url: "https://nataliaduran.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Natalia Durán Oliva — Software Engineer & Independent Consultant",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
