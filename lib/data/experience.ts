import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    title: { en: "AI Engineer", es: "AI Engineer" },
    company: "Noxis AI",
    period: "abril 2026 – Presente",
    location: "Santa Cruz, Bolivia",
    description: {
      en: "Migration of an n8n-based chatbot system with autonomous AI agent to an MCP server with multi-tenant LangGraph agent for customer service and catalog product sales for small businesses.",
      es: "Migración de sistema de chatbot basado en n8n con agente de AI autónomo a MCP server con agente LangGraph multi-tenancy para atención al cliente y venta de productos por catálogo para empresas pequeñas.",
    },
    achievements: [
      {
        en: "Optimized and scaled infrastructure for AI agent-powered sales flow",
        es: "Optimización y escalabilidad de infraestructura para flujo de venta con agentes de AI",
      },
      {
        en: "Migrated from LangChain to LangGraph for improved agent orchestration",
        es: "Migración de LangChain a LangGraph para mejor orquestación de agentes",
      },
      {
        en: "Multi-tenant architecture serving multiple small businesses",
        es: "Arquitectura multi-tenant sirviendo a múltiples empresas pequeñas",
      },
    ],
    technologies: ["Python", "LangGraph", "OpenAI", "MCP Server", "Claude Code"],
  },
  {
    title: { en: "Software Developer", es: "Desarrolladora de Software" },
    company: "Sunstar Solutions",
    period: "septiembre 2025 – marzo 2026",
    location: "Texas, USA (Remote)",
    description: {
      en: "Full stack development of a CRM for solar energy sales, including lead management, client conversion, proposals, contracts with electronic signatures, and installation tracking.",
      es: "Desarrollo full stack de CRM para ventas de energía solar, incluyendo gestión de leads, conversión de clientes, propuestas, contratos con firma electrónica y seguimiento de instalación.",
    },
    achievements: [
      {
        en: "Built end-to-end lead-to-customer conversion flow for solar system sales",
        es: "Flujo completo de conversión de leads a clientes para venta de sistemas solares",
      },
      {
        en: "Integrated GoHighLevel for automated lead nurturing",
        es: "Integración con GoHighLevel para nutrición automatizada de leads",
      },
      {
        en: "Implemented electronic contract signing with HelloSign",
        es: "Implementación de firma electrónica de contratos con HelloSign",
      },
      {
        en: "Maps API integration for installation site visualization",
        es: "Integración de APIs de mapas para visualización de sitios de instalación",
      },
    ],
    technologies: ["Next.js", "Express", "MongoDB", "AWS S3", "GoHighLevel", "HelloSign", "Claude Code"],
  },
  {
    title: { en: "Software Developer", es: "Desarrolladora de Software" },
    company: "Banco Ganadero S.A.",
    period: "octubre 2023 – agosto 2025",
    location: "Santa Cruz, Bolivia",
    description: {
      en: "Contributed to business growth through technology solutions in cross-functional teams, focused on customer loyalty and banking operations.",
      es: "Contribuí al crecimiento del negocio a través de soluciones tecnológicas en equipos multidisciplinarios, con enfoque en la fidelización de clientes y operatividad bancaria.",
    },
    achievements: [
      {
        en: "75% increase in customer interaction with loyalty programs",
        es: "75% de aumento en interacción con programas de lealtad",
      },
      {
        en: "Implemented streaming architecture with Apache Kafka",
        es: "Implementación de arquitectura de streaming con Apache Kafka",
      },
      {
        en: "Developed microservices with NestJS and Kubernetes",
        es: "Desarrollo de microservicios con NestJS y Kubernetes",
      },
      {
        en: "Optimized Oracle and MongoDB databases for millions of records",
        es: "Optimización de bases de datos Oracle y MongoDB para millones de registros",
      },
      {
        en: "Implemented CI/CD pipelines with Jenkins and Azure DevOps",
        es: "Implementación de pipelines CI/CD con Jenkins y Azure DevOps",
      },
    ],
    technologies: [
      "Spring Boot", "NestJS", "React.js", "Next.js", "Apache Kafka",
      "Oracle", "MongoDB", "Kubernetes", "Docker", "Jenkins",
    ],
  },
  {
    title: { en: "Systems Analyst", es: "Analista de Sistemas" },
    company: "Santa Cruz Vida y Salud Seguros y Reaseguros Personales S.A.",
    period: "octubre 2022 – octubre 2023",
    location: "Santa Cruz, Bolivia",
    description: {
      en: "Development and migration of management systems, focused on regulatory compliance and clean code architectures.",
      es: "Desarrollo y migración de sistemas de gestión, con enfoque en cumplimiento normativo y arquitecturas clean code.",
    },
    achievements: [
      {
        en: "99% accuracy in Anti-Money Laundering system (AMLC)",
        es: "99% de precisión en sistema Anti-Lavado de Dinero (AMLC)",
      },
      {
        en: "Successful migration of personnel management module",
        es: "Migración exitosa de módulo de gestión de personas",
      },
      {
        en: "Implemented insurance products with hexagonal architecture",
        es: "Implementación de productos de seguros con arquitectura hexagonal",
      },
    ],
    technologies: ["Spring Boot", "Angular", "Oracle", "Clean Architecture", "Hexagonal Architecture"],
  },
  {
    title: { en: "Full Stack Developer", es: "Desarrolladora Full Stack" },
    company: "Sociedad Synergy Ltda.",
    period: "febrero 2022 – octubre 2022",
    location: "Santa Cruz, Bolivia",
    description: {
      en: "Design and implementation of integration services with SAP B1 for warehouse process optimization.",
      es: "Diseño e implementación de servicios de integración con SAP B1 para optimización de procesos de almacén.",
    },
    achievements: [
      {
        en: "60% improvement in operational transparency",
        es: "60% de mejora en transparencia operacional",
      },
      {
        en: "40% optimization in warehouse efficiency",
        es: "40% de optimización en eficiencia de almacén",
      },
      {
        en: "Complete integration with SAP B1 SDK DI API",
        es: "Integración completa con SDK DI API de SAP B1",
      },
    ],
    technologies: ["React.js", "SAP B1", "SDK DI API", "Web Services"],
  },
  {
    title: { en: "Full Stack Developer", es: "Desarrolladora Full Stack" },
    company: "Grupo Editorial La Hoguera",
    period: "abril 2021 – noviembre 2021",
    location: "Santa Cruz, Bolivia",
    description: {
      en: "Implementation of integration services and mobile app development for process digitization.",
      es: "Implementación de servicios de integración y desarrollo de aplicación móvil para digitalización de procesos.",
    },
    achievements: [
      {
        en: "60% optimization in sales registration flow",
        es: "60% de optimización en flujo de registro de ventas",
      },
      {
        en: "100% digitization of the order-taking process",
        es: "100% de digitalización del proceso de toma de pedidos",
      },
      {
        en: "80% increase in ERP data entry efficiency",
        es: "80% de aumento en eficiencia de ingreso de datos al ERP",
      },
    ],
    technologies: ["ASP.NET", "Flutter", "SAP B1", "Mobile Development"],
  },
];
