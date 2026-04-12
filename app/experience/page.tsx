"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/language-context";
import { experiences } from "@/lib/data/experience";

export default function ExperiencePage() {
  const { t, l } = useLanguage();

  return (
    <div className="pt-16">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("experience.title")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl space-y-12">
          {experiences.map((exp, idx) => (
            <article key={idx} className="relative pl-6 border-l-2 border-border">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-foreground" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                <h3 className="text-lg font-semibold text-foreground">{l(exp.title)}</h3>
                <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
              </div>
              <p className="text-muted-foreground font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
              <p className="text-sm text-muted-foreground mb-3">{l(exp.description)}</p>
              <ul className="space-y-1 mb-4">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">—</span>
                    {l(a)}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs font-normal">{tech}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
