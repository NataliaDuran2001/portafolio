// Grouped by proficiency — no year counts, just categorized badges
export const skillsByLevel = {
  expert: {
    label: { en: "Expert", es: "Experto" },
    skills: ["Java", "Spring Boot", "TypeScript", "React.js", "Oracle", "MongoDB"],
  },
  proficient: {
    label: { en: "Proficient", es: "Competente" },
    skills: [
      "NestJS", "Next.js", "Node.js", "Express", "Angular",
      "PostgreSQL", "Docker", "Kubernetes", "Jenkins", "Azure DevOps",
      "Apache Kafka", "Microservices", "Clean Architecture",
    ],
  },
  growing: {
    label: { en: "Growing", es: "En crecimiento" },
    skills: [
      "Python", "LangGraph", "LangChain", "OpenAI", "Claude",
      "MCP Server", "AWS", "Flutter", ".NET", "SAP B1",
    ],
  },
};

export const methodologies = [
  "SCRUM", "Agile", "CI/CD", "Event-Driven Architecture",
  "Hexagonal Architecture", "OWASP / ASVS", "REST APIs",
  "Project Management (PMI)", "Claude Code",
];
