import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "auditoria-tecnica",
    title: { en: "Technical Audit", es: "Auditoría Técnica" },
    description: {
      en: "Complete evaluation of your tech stack, architecture, and development practices with actionable recommendations.",
      es: "Evaluación completa de tu stack tecnológico, arquitectura y prácticas de desarrollo con recomendaciones accionables.",
    },
    features: [
      { en: "Architecture and code review", es: "Revisión de arquitectura y código" },
      { en: "Performance and scalability analysis", es: "Análisis de rendimiento y escalabilidad" },
      { en: "Security assessment (OWASP/ASVS)", es: "Evaluación de seguridad (OWASP/ASVS)" },
      { en: "Prioritized recommendations with roadmap", es: "Recomendaciones priorizadas con roadmap" },
    ],
    idealFor: {
      en: "Startups and companies that need to validate their architecture before scaling.",
      es: "Startups y empresas que necesitan validar su arquitectura antes de escalar.",
    },
    deliverables: [
      { en: "Detailed technical report", es: "Informe técnico detallado" },
      { en: "Prioritized improvement roadmap", es: "Roadmap de mejoras priorizado" },
      { en: "1:1 review session", es: "Sesión de revisión 1:1" },
    ],
    timeline: { en: "1–2 weeks", es: "1–2 semanas" },
  },
  {
    slug: "desarrollo-mvp",
    title: { en: "MVP Development", es: "Desarrollo MVP" },
    description: {
      en: "Design and implementation of your minimum viable product with architecture ready to scale.",
      es: "Diseño e implementación de tu producto mínimo viable con arquitectura lista para escalar.",
    },
    features: [
      { en: "Microservices or modular monolith architecture", es: "Arquitectura de microservicios o monolito modular" },
      { en: "Modern frontend (React / Next.js)", es: "Frontend moderno (React / Next.js)" },
      { en: "Robust backend (Spring Boot / NestJS)", es: "Backend robusto (Spring Boot / NestJS)" },
      { en: "CI/CD and production deployment", es: "CI/CD y despliegue en producción" },
    ],
    idealFor: {
      en: "Founders and teams that need to bring their idea to market quickly.",
      es: "Founders y equipos que necesitan llevar su idea al mercado rápidamente.",
    },
    deliverables: [
      { en: "Deployed functional product", es: "Producto funcional desplegado" },
      { en: "Technical documentation", es: "Documentación técnica" },
      { en: "Complete team handoff", es: "Handoff completo al equipo" },
    ],
    timeline: { en: "4–8 weeks", es: "4–8 semanas" },
  },
  {
    slug: "project-management",
    title: { en: "Project Management", es: "Gestión de Proyectos" },
    description: {
      en: "End-to-end project management with PMI methodology, from planning to delivery.",
      es: "Gestión de proyectos de inicio a fin con metodología PMI, desde la planificación hasta la entrega.",
    },
    features: [
      { en: "Project planning and scope definition", es: "Planificación y definición de alcance" },
      { en: "Risk management and mitigation", es: "Gestión y mitigación de riesgos" },
      { en: "Team coordination and stakeholder management", es: "Coordinación de equipos y gestión de stakeholders" },
      { en: "Progress tracking and reporting", es: "Seguimiento de progreso y reportes" },
    ],
    idealFor: {
      en: "Teams that need structured project leadership with technical understanding.",
      es: "Equipos que necesitan liderazgo de proyecto estructurado con entendimiento técnico.",
    },
    deliverables: [
      { en: "Project plan and timeline", es: "Plan de proyecto y cronograma" },
      { en: "Status reports", es: "Reportes de estado" },
      { en: "Post-mortem and lessons learned", es: "Post-mortem y lecciones aprendidas" },
    ],
    timeline: { en: "Per project", es: "Por proyecto" },
  },
  {
    slug: "eventos-comunidad",
    title: { en: "Events & Community", es: "Eventos & Comunidad" },
    description: {
      en: "Speaker, moderator, MC, event organizer, and community builder with 6+ years of experience leading tech communities.",
      es: "Speaker, moderadora, maestra de ceremonia, organizadora de eventos y constructora de comunidad con 6+ años de experiencia liderando comunidades tech.",
    },
    features: [
      { en: "Tech talks and keynote speaking", es: "Charlas técnicas y keynotes" },
      { en: "Event moderation and MC", es: "Moderación de eventos y maestría de ceremonia" },
      { en: "Event organization and logistics", es: "Organización de eventos y logística" },
      { en: "Sponsor management and partnerships", es: "Gestión de patrocinadores y alianzas" },
    ],
    idealFor: {
      en: "Companies, communities, and conferences that need experienced tech event leadership.",
      es: "Empresas, comunidades y conferencias que necesitan liderazgo experimentado en eventos tech.",
    },
    deliverables: [
      { en: "Event planning and execution", es: "Planificación y ejecución de eventos" },
      { en: "Community growth strategy", es: "Estrategia de crecimiento de comunidad" },
      { en: "Sponsor relationship management", es: "Gestión de relaciones con patrocinadores" },
    ],
    timeline: { en: "Per event / ongoing", es: "Por evento / ongoing" },
  },
];
