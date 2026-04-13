"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/language-context";
import { experiences } from "@/lib/data/experience";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const { t, l } = useLanguage();

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 md:px-8 py-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("experience.title")}
          </h1>
          <p className="text-lg text-foreground/70">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl space-y-10">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative pl-6 border-l-2 border-border hover:border-foreground/30 transition-colors"
            >
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-foreground" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                <h3 className="font-semibold text-foreground">{l(exp.title)}</h3>
                <span className="text-xs text-foreground/50 font-mono">{exp.period}</span>
              </div>
              <p className="text-sm text-foreground/70 mb-2">
                {exp.company} · {exp.location}
              </p>
              <p className="text-sm text-foreground/60 mb-3">{l(exp.description)}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {exp.achievements.slice(0, 3).map((a, i) => (
                  <span key={i} className="text-xs text-foreground/70 bg-secondary rounded-md px-2 py-1">
                    {l(a)}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs font-normal">{tech}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
