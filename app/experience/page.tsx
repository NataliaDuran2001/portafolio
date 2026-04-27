import type { Metadata } from "next";
import ExperienceContent from "./content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "6+ years building solutions in fintech, insurance, AI, ERP, and CRM at Banco Ganadero, BMA, and other companies across Latin America.",
  alternates: { canonical: "https://nataliaduran.dev/experience/" },
  openGraph: {
    title: "Experience — Natalia Durán Oliva",
    description:
      "6+ years building solutions in fintech, insurance, AI, ERP, and CRM across Latin America.",
    url: "https://nataliaduran.dev/experience/",
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
