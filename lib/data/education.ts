import type { Education, Leadership } from "../types";
import type { L } from "../types";

export const education: Education[] = [
  {
    title: { en: "Postgraduate in Project Management", es: "Postítulo en Dirección de Proyectos" },
    subtitle: { en: "PMI Methodology", es: "Metodología PMI" },
    institution: "Universidad Privada de Santa Cruz de la Sierra (UPSA)",
    year: "2025",
    type: { en: "Postgraduate", es: "Postítulo" },
    status: { en: "Completed", es: "Completado" },
  },
  {
    title: { en: "English Language Diploma", es: "Diploma en Idioma Inglés" },
    subtitle: { en: "Upper Intermediate B2", es: "Nivel Intermedio Alto B2" },
    institution: "Focus Your Mind",
    year: "2023 – 2024",
    type: { en: "Certification", es: "Certificación" },
    status: { en: "Completed", es: "Completado" },
  },
  {
    title: { en: "Systems Engineering", es: "Ingeniería de Sistemas" },
    subtitle: { en: '"CREando Valor" Scholarship', es: 'Beca "CREando Valor"' },
    institution: "Universidad Evangélica Boliviana",
    year: "2019 – 2022",
    type: { en: "Undergraduate", es: "Pregrado" },
    status: { en: "Completed", es: "Completado" },
  },
  {
    title: { en: "Cisco Certified Network Associate (CCNA)", es: "Cisco Certified Network Associate (CCNA)" },
    subtitle: { en: "Networking Fundamentals", es: "Networking Fundamentals" },
    institution: "CIFT UAGRM",
    year: "2021",
    type: { en: "Certification", es: "Certificación" },
    status: { en: "Completed", es: "Completado" },
  },
];

export const leadership: Leadership[] = [
  {
    title: "Google Developer Groups Organizer",
    organization: "GDG Santa Cruz — Google",
    period: "2019 – Present",
    description: {
      en: "Official Google community organizer. Leading the organization of DevFest, Build with AI hackathons, Google I/O Extended, and 50+ tech events for the developer community in Santa Cruz.",
      es: "Organizadora oficial de comunidad Google. Liderando la organización de DevFest, hackathones Build with AI, Google I/O Extended y 50+ eventos tech para la comunidad de desarrolladores en Santa Cruz.",
    },
    achievements: [
      { en: "6+ years as official Google community organizer", es: "6+ años como organizadora oficial de comunidad Google" },
      { en: "Organized Build with AI hackathons, DevFest, Google I/O Extended", es: "Organizó hackathones Build with AI, DevFest, Google I/O Extended" },
      { en: "50+ technical events, reaching 2000+ developers", es: "50+ eventos técnicos, alcanzando 2000+ desarrolladores" },
      { en: "Speaker, moderator, and MC at major tech events", es: "Speaker, moderadora y MC en eventos tech importantes" },
    ],
    images: [
      "/images/eventos/devfest-2025.jpeg",
      "/images/eventos/build-with-ai2025.jpeg",
      "/images/eventos/google-io-mc-2025.jpeg",
    ],
  },
  {
    title: "Women Techmakers Leader",
    organization: "WTM Santa Cruz — Google",
    period: "2019 – Present",
    description: {
      en: "Google Women Techmakers leader promoting women's inclusion in technology through events, mentorship, and community building.",
      es: "Líder de Google Women Techmakers promoviendo la inclusión de mujeres en tecnología a través de eventos, mentorship y construcción de comunidad.",
    },
    achievements: [
      { en: "Organized International Women's Day (IWD) events", es: "Organizó eventos del Día Internacional de la Mujer (IWD)" },
      { en: "Mentorship and support networks for women in tech", es: "Mentorship y redes de apoyo para mujeres en tech" },
      { en: "Talks and panels on diversity in technology", es: "Charlas y paneles sobre diversidad en tecnología" },
    ],
    images: [
      "/images/eventos/iwd2025.jpeg",
      "/images/eventos/devfest-wtm-2025.jpeg",
      "/images/eventos/moderadora-iwd2025.jpeg",
      "/images/eventos/iwd2926.jpeg",
    ],
  },
  {
    title: "Community Member",
    organization: "LOLA — Libertad y Oportunidad Latinoamérica",
    period: "2019 – Present",
    description: {
      en: "Active in a community that promotes ideas of liberty, empowerment, and opportunities for women in Latin America.",
      es: "Activa en una comunidad que promueve ideas de libertad, empoderamiento y oportunidades para mujeres en Latinoamérica.",
    },
    achievements: [
      { en: "Promoting liberty-oriented ideas and women's leadership", es: "Promoviendo ideas de libertad y liderazgo femenino" },
      { en: "Community events and networking", es: "Eventos comunitarios y networking" },
    ],
  },
  {
    title: "Community Member",
    organization: "Students For Liberty (SFL)",
    period: "2019 – Present",
    description: {
      en: "Part of the global network promoting ideas of individual freedom and open societies through education and community building.",
      es: "Parte de la red global que promueve ideas de libertad individual y sociedades abiertas a través de educación y construcción de comunidad.",
    },
    achievements: [
      { en: "Advocacy for liberty and open societies", es: "Promoción de libertad y sociedades abiertas" },
      { en: "Educational events and collaboration", es: "Eventos educativos y colaboración" },
    ],
  },
];


export const communityPhotos = [
  { src: "/images/eventos/bootcamp-blockchain2025.jpeg", alt: { en: "Blockchain Bootcamp 2025", es: "Bootcamp Blockchain 2025" } as L },
  { src: "/images/eventos/mujer-en-la-ciencia-2026-sib.jpeg", alt: { en: "Women in Science 2026", es: "Mujer en la Ciencia 2026" } as L },
];

export const languages = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "Upper Intermediate (B2)", es: "Intermedio Alto (B2)" } },
];
