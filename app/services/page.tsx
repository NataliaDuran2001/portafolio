import type { Metadata } from "next";
import ServicesContent from "./content";

export const metadata: Metadata = {
  title: "Services & Independent Consulting",
  description:
    "Technical audits, MVP development, AI integration, and team training for startups and product teams. 6+ years across fintech, insurance, ERP, and CRM.",
  alternates: { canonical: "https://nataliaduran.dev/services/" },
  openGraph: {
    title: "Services & Independent Consulting — Natalia Durán Oliva",
    description:
      "Technical audits, MVP development, AI integration, and team training for startups and product teams.",
    url: "https://nataliaduran.dev/services/",
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

export default function ServicesPage() {
  return <ServicesContent />;
}
