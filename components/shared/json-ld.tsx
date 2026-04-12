export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Natalia Durán",
    jobTitle: "Software Engineer",
    url: "https://nataliaduran.tech",
    sameAs: [
      "https://www.linkedin.com/in/natalia-duran-oliva/",
      "https://github.com/NataliaDuran2001",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Cruz de la Sierra",
      addressCountry: "BO",
    },
    knowsAbout: [
      "Software Engineering",
      "Microservices",
      "Spring Boot",
      "React",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
