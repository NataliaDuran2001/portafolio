import type { Metadata } from "next";
import ContactContent from "./content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about consulting, mentoring, or collaborations. Email, WhatsApp, LinkedIn, or send a message directly. I reply within 24 hours.",
  alternates: { canonical: "https://nataliaduran.dev/contact/" },
  openGraph: {
    title: "Contact — Natalia Durán Oliva",
    description:
      "Get in touch about consulting, mentoring, or collaborations. I reply within 24 hours.",
    url: "https://nataliaduran.dev/contact/",
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

export default function ContactPage() {
  return <ContactContent />;
}
