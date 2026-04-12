"use client";

import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/lib/data/projects";
import { useLanguage } from "@/lib/i18n/language-context";

export default function WorkPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("work.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{t("work.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
