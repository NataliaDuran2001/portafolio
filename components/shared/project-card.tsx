"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/language-context";
import { img } from "@/lib/image-path";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { l } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link href={`/work/${project.slug}/`} className="group block h-full">
        <article className="h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-xl hover:-translate-y-1 flex flex-col">
          {/* Image — fixed ratio, cover crop, hover zoom */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={img(project.image)}
              alt={l(project.title)}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Category badge on image */}
            <div className="absolute top-3 left-3">
              <Badge className="bg-background/80 backdrop-blur-sm text-foreground text-xs border-0">
                {l(project.category)}
              </Badge>
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-1">
                {l(project.title)}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-0.5" />
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              {project.company} · {project.year}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
              {l(project.description)}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5">{tech}</span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5">+{project.technologies.length - 3}</span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
