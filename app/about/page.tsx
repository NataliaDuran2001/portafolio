"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { education, leadership, communityPhotos, languages } from "@/lib/data/education";
import { techStack, methodologies } from "@/lib/data/skills";
import { personalInfo } from "@/lib/data/personal";
import { ImageLightbox } from "@/components/shared/image-lightbox";
import { img } from "@/lib/image-path";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const { t, l, locale } = useLanguage();

  const allCommunityImages = [
    ...leadership.flatMap((item) => (item.images || []).map((src) => ({ src, alt: item.title }))),
    ...communityPhotos.map((p) => ({ src: p.src, alt: l(p.alt) })),
  ];

  return (
    <div className="pt-16">

      {/* ═══════════ HERO — Clean, centered, professional ═══════════ */}
      <section className="relative overflow-hidden">
        {/* Background — subtle gradient, no photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-background to-background" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative container mx-auto px-6 md:px-8 pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-44 h-44 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-background shadow-2xl mb-6">
              <img
                src={img("/images/natalia_duran.jpg")}
                alt="Natalia Durán Oliva"
                className="absolute inset-0 w-full h-full object-cover scale-150"
                style={{ objectPosition: "center 35%" }}
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              {l(personalInfo.title)}
            </p>
            <div className="flex items-center gap-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative container mx-auto px-6 md:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {personalInfo.highlights[locale].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl font-bold text-foreground">{item.number}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ BIO — who I am ═══════════ */}
      <section className="container mx-auto px-6 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            {l(personalInfo.bio)}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {languages.map((lang) => (
              <Badge key={l(lang.name)} variant="outline">{l(lang.name)} — {l(lang.level)}</Badge>
            ))}
            <Badge variant="outline">{l(personalInfo.location)}</Badge>
          </div>
        </motion.div>
      </section>

      {/* ═══════════ COMMUNITY — photo gallery + roles ═══════════ */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {t("about.leadership.title")}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {locale === "es"
                ? "Speaker, moderadora, MC, organizadora de hackathones y mentora."
                : "Speaker, moderator, MC, hackathon organizer, and mentor."}
            </p>
          </motion.div>

          {/* Photo grid — clean, same size */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {allCommunityImages.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <ImageLightbox src={photo.src} alt={photo.alt} aspectRatio="4/3" />
              </motion.div>
            ))}
          </div>

          {/* Community roles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {leadership.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-lg border border-border bg-card p-5 text-center hover:border-foreground/20 transition-all"
              >
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TECH STACK — clean grid ═══════════ */}
      <section className="container mx-auto px-6 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t("about.skills.title")}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {Object.entries(techStack).map(([category, skills]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest sm:w-20 flex-shrink-0">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-sm bg-secondary text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest sm:w-20 flex-shrink-0">
              methods
            </span>
            <div className="flex flex-wrap gap-2">
              {methodologies.map((m) => (
                <span key={m} className="px-3 py-1 rounded-full text-sm text-muted-foreground border border-border/60">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════ EDUCATION — timeline ═══════════ */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("about.education.title")}
            </h2>
          </motion.div>
          <div className="max-w-xl mx-auto space-y-6">
            {education.map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-foreground" />
                <h3 className="font-semibold text-foreground">{l(item.title)}</h3>
                <p className="text-sm text-muted-foreground">{l(item.subtitle)}</p>
                <p className="text-sm text-muted-foreground">{item.institution} · {item.year}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="container mx-auto px-6 md:px-8 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {locale === "es" ? "¿Quieres saber más?" : "Want to know more?"}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {locale === "es" ? "Mira mi trabajo o conversemos." : "Check out my work or let's chat."}
          </p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/experience">
                {locale === "es" ? "Ver experiencia" : "See experience"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/work">
                {locale === "es" ? "Ver proyectos" : "See projects"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild>
              <a href={`https://wa.me/${personalInfo.phone}`} target="_blank" rel="noopener noreferrer">
                {locale === "es" ? "Hablemos" : "Let's talk"}
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
