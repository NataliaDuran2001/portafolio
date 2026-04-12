"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/language-context";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { l } = useLanguage();

  return (
    <Link href={`/work/${project.slug}/`} className="group block">
      <article className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={l(project.title)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
              {l(project.title)}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {project.company} · {project.year}
          </p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {l(project.description)}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-normal">{tech}</Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs font-normal">+{project.technologies.length - 4}</Badge>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
