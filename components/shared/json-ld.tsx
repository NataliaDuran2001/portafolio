const SITE_URL = "https://nataliaduran.dev";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Natalia Durán Oliva",
    jobTitle: "Software Engineer & Independent Consultant",
    url: SITE_URL,
    image: `${SITE_URL}/images/natalia_duran.jpg`,
    email: "nataliaduran.dev@gmail.com",
    telephone: "+59178482245",
    sameAs: [
      "https://www.linkedin.com/in/natalia-duran-oliva/",
      "https://github.com/NataliaDuran2001",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Cruz de la Sierra",
      addressCountry: "BO",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Universidad Evangélica Boliviana",
      },
      {
        "@type": "EducationalOrganization",
        name: "Universidad Privada de Santa Cruz de la Sierra (UPSA)",
      },
    ],
    knowsAbout: [
      "Software Engineering",
      "Microservices",
      "Spring Boot",
      "React",
      "Next.js",
      "AI Agents",
      "LangGraph",
      "Python",
      "TypeScript",
      "Full Stack Development",
      "Project Management",
    ],
    memberOf: [
      { "@type": "Organization", name: "Google Developer Groups Santa Cruz" },
      { "@type": "Organization", name: "Women Techmakers Santa Cruz" },
      { "@type": "Organization", name: "LOLA - Libertad y Oportunidad Latinoamérica" },
      { "@type": "Organization", name: "Students For Liberty" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Natalia Durán Oliva",
    alternateName: "Natalia Durán — Software Engineer Portfolio",
    url: SITE_URL,
    inLanguage: ["en", "es"],
    publisher: {
      "@type": "Person",
      name: "Natalia Durán Oliva",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbsJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CaseStudyJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
  technologies: string[];
  year: string;
  publisher?: string;
}

export function CaseStudyJsonLd({
  title,
  description,
  url,
  image,
  category,
  technologies,
  year,
  publisher,
}: CaseStudyJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    headline: title,
    description,
    url,
    image,
    inLanguage: "en",
    dateCreated: year,
    datePublished: year,
    creator: {
      "@type": "Person",
      name: "Natalia Durán Oliva",
      url: SITE_URL,
    },
    author: {
      "@type": "Person",
      name: "Natalia Durán Oliva",
      url: SITE_URL,
    },
    about: category,
    keywords: technologies.join(", "),
    ...(publisher && {
      sourceOrganization: { "@type": "Organization", name: publisher },
    }),
    isPartOf: {
      "@type": "WebSite",
      name: "Natalia Durán Oliva",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
