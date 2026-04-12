"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { useLanguage } from "@/lib/i18n/language-context";
import { ImageLightbox } from "@/components/shared/image-lightbox";

export function CaseStudyContent({ slug }: { slug: string }) {
  const { t, l } = useLanguage();
  const project = projects.find((p) => p.slug === slug)!;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-16">
      <article className="container mx-auto px-6 md:px-8 py-20">
        <Link
          href="/work/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("work.back")}
        </Link>

        <div className="max-w-3xl mb-12">
          <Badge variant="secondary" className="mb-4">{l(project.category)}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{l(project.title)}</h1>
          <p className="text-lg text-muted-foreground mb-6">{l(project.subtitle)}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span><strong className="text-foreground">{t("work.company")}:</strong> {project.company}</span>
            <span><strong className="text-foreground">{t("work.role")}:</strong> {l(project.role)}</span>
            <span><strong className="text-foreground">{t("work.period")}:</strong> {project.year}</span>
            <span><strong className="text-foreground">{t("work.duration")}:</strong> {l(project.duration)}</span>
          </div>
        </div>

        <div className="mb-16">
          <ImageLightbox
            src={project.image}
            alt={l(project.title)}
            aspectRatio="video"
          />
        </div>

        <div className="max-w-3xl space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">{t("work.problem")}</h2>
            <p className="text-muted-foreground leading-relaxed">{l(project.problem)}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">{t("work.solution")}</h2>
            <p className="text-muted-foreground leading-relaxed">{l(project.solution)}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">{t("work.impact")}</h2>
            <ul className="space-y-2">
              {project.impact.map((item, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-foreground/40 mt-1.5">—</span>
                  {l(item)}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">{t("work.stack")}</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
              ))}
            </div>
          </section>
        </div>

        {/* Gallery — natural aspect ratio, no cropping */}
        {project.gallery.length > 1 && (
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">{t("work.gallery")}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.gallery.map((img, idx) => (
                <ImageLightbox
                  key={idx}
                  src={img}
                  alt={`${l(project.title)} - ${idx + 1}`}
                  aspectRatio="video"
                />
              ))}
            </div>
          </section>
        )}

        <div className="flex items-center justify-between mt-20 pt-8 border-t border-border">
          {prevProject ? (
            <Button variant="ghost" asChild>
              <Link href={`/work/${prevProject.slug}/`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{l(prevProject.title)}</span>
              </Link>
            </Button>
          ) : <div />}
          {nextProject ? (
            <Button variant="ghost" asChild>
              <Link href={`/work/${nextProject.slug}/`}>
                <span className="hidden sm:inline">{l(nextProject.title)}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : <div />}
        </div>
      </article>
    </div>
  );
}
