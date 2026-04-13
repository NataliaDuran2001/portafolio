export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Natalia Durán Oliva",
    jobTitle: "Software Engineer & Independent Consultant",
    url: "https://nataliaduran2001.github.io/portafolio",
    image: "https://nataliaduran2001.github.io/portafolio/images/natalia_duran.jpg",
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
