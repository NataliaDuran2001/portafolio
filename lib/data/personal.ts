import type { L } from "../types";

export const personalInfo = {
  name: "Natalia Durán Oliva",
  title: {
    en: "Software Engineer & Independent Consultant",
    es: "Software Engineer & Consultora Independiente",
  } as L,
  email: "nataliaduran.dev@gmail.com",
  phone: "+59178482245",
  phoneDisplay: "(+591) 78482245",
  location: { en: "Santa Cruz de la Sierra, Bolivia", es: "Santa Cruz de la Sierra, Bolivia" } as L,
  linkedin: "https://www.linkedin.com/in/natalia-duran-oliva/",
  github: "https://github.com/NataliaDuran2001",
  cv: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv-natalia-duran.pdf`,
  bio: {
    en: "Software engineer, community leader, and independent consultant. I build scalable software, lead tech communities, organize events, and help teams grow. 5+ years shipping products in fintech, insurance, AI, and energy.",
    es: "Ingeniera de software, líder de comunidad y consultora independiente. Construyo software escalable, lidero comunidades tech, organizo eventos y ayudo a equipos a crecer. 5+ años desarrollando productos en fintech, seguros, AI y energía.",
  } as L,
  highlights: {
    en: [
      { number: "5+", label: "Years of experience" },
      { number: "6", label: "Companies worked with" },
      { number: "10+", label: "Projects delivered" },
      { number: "4", label: "Industries" },
    ],
    es: [
      { number: "5+", label: "Años de experiencia" },
      { number: "6", label: "Empresas" },
      { number: "10+", label: "Proyectos entregados" },
      { number: "4", label: "Industrias" },
    ],
  },
};
