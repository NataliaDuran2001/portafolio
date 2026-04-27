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
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
