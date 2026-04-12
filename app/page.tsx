"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ProjectCard } from "@/components/shared/project-card";
import { featuredProjects } from "@/lib/data/projects";
import { personalInfo } from "@/lib/data/personal";
import { useLanguage } from "@/lib/i18n/language-context";
import { img } from "@/lib/image-path";

export default function HomePage() {
  const { t, l } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero — centered with photo */}
      <section className="container mx-auto px-6 md:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-36 h-36 md:w-44 md:h-44 relative rounded-2xl overflow-hidden flex-shrink-0 border border-border">
            <img
              src={img("/images/natalia_duran.jpg")}
              alt="Natalia Durán Oliva"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {l(personalInfo.title)}
            </p>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {l(personalInfo.bio)}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button asChild size="lg" className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  {t("home.cta.contact")}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <a href={personalInfo.cv} download>
                  <Download className="w-4 h-4 mr-2" />
                  {t("home.cta.cv")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 md:px-8 py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("home.featured")}
            </h2>
            <Link
              href="/work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
        </div>
      </section>

      {/* Services CTA — balanced */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 md:px-8 py-16">
          <div className="rounded-lg border border-border p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <Badge variant="secondary" className="mb-2">{t("home.services.badge")}</Badge>
              <h3 className="text-lg font-semibold text-foreground mb-1">{t("home.services.title")}</h3>
              <p className="text-sm text-muted-foreground max-w-md">{t("home.services.desc")}</p>
            </div>
            <Button variant="outline" asChild className="flex-shrink-0 focus-visible:ring-2 focus-visible:ring-ring">
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
