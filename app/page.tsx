"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ProjectCard } from "@/components/shared/project-card";
import { featuredProjects } from "@/lib/data/projects";
import { personalInfo } from "@/lib/data/personal";
import { useLanguage } from "@/lib/i18n/language-context";

export default function HomePage() {
  const { t, l } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            {l(personalInfo.title)}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            {l(personalInfo.bio)}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                {t("home.cta.contact")}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={personalInfo.cv} download>
                <Download className="w-4 h-4 mr-2" />
                {t("home.cta.cv")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t("home.featured")}
          </h2>
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            {t("home.featured.all")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Services CTA — subtle, not dominant */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t("home.services.badge")}</p>
              <p className="text-foreground font-medium">{t("home.services.title")}</p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/services">
                {t("home.services.cta")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
