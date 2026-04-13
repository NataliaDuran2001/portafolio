"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ProjectCard } from "@/components/shared/project-card";
import { featuredProjects } from "@/lib/data/projects";
import { personalInfo } from "@/lib/data/personal";
import { useLanguage } from "@/lib/i18n/language-context";
import { img } from "@/lib/image-path";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t, l, locale } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />

        <div className="relative container mx-auto px-6 md:px-8 py-20 md:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-2xl overflow-hidden flex-shrink-0 border-2 border-foreground/10 shadow-2xl">
              <img
                src={img("/images/natalia_duran.jpg")}
                alt="Natalia Durán Oliva"
                className="absolute inset-0 w-full h-full object-cover scale-150"
                style={{ objectPosition: "center 35%" }}
              />
            </div>
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground mb-4"
              >
                {l(personalInfo.title)}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                {l(personalInfo.bio)}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-3 justify-center md:justify-start"
              >
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
              </motion.div>
            </div>
          </motion.div>

          {/* Impact numbers inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {personalInfo.highlights[locale].map((item, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{item.number}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>
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
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              {t("home.featured.all")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8 py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{t("home.services.title")}</h3>
              <p className="text-sm text-muted-foreground max-w-md">{t("home.services.desc")}</p>
            </div>
            <Button variant="outline" asChild className="flex-shrink-0">
              <Link href="/contact">
                {t("home.cta.contact")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
