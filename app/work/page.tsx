import type { Metadata } from "next";
import WorkContent from "./content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected case studies — fintech apps, AI agents, CRM platforms, and insurance portals built across Latin America. Technologies: Next.js, Spring Boot, LangGraph, React.",
  alternates: { canonical: "https://nataliaduran.dev/work/" },
  openGraph: {
    title: "Projects — Natalia Durán Oliva",
    description:
      "Selected case studies — fintech apps, AI agents, CRM platforms, and insurance portals.",
    url: "https://nataliaduran.dev/work/",
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

export default function WorkPage() {
  return <WorkContent />;
}
