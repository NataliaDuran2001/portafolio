"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { education, leadership, communityPhotos, languages } from "@/lib/data/education";
import { skillsByLevel, methodologies } from "@/lib/data/skills";
import { personalInfo } from "@/lib/data/personal";
import { ImageLightbox } from "@/components/shared/image-lightbox";

export default function AboutPage() {
  const { t, l } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-2xl overflow-hidden flex-shrink-0 border border-border">
            <Image
              src="/images/natalia_duran.jpg"
              alt="Natalia Durán Oliva"
              fill
              className="object-cover object-top"
              priority
              sizes="192px"
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {l(personalInfo.bio)}
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge key={l(lang.name)} variant="secondary">
                  {l(lang.name)} — {l(lang.level)}
                </Badge>
              ))}
              <Badge variant="secondary">{l(personalInfo.location)}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            {t("about.what.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <Code className="w-6 h-6 text-muted-foreground" />
              <p className="text-foreground leading-relaxed">{t("about.what.dev")}</p>
            </div>
            <div className="space-y-3">
              <Users className="w-6 h-6 text-muted-foreground" />
              <p className="text-foreground leading-relaxed">{t("about.what.community")}</p>
            </div>
            <div className="space-y-3">
              <Briefcase className="w-6 h-6 text-muted-foreground" />
              <p className="text-foreground leading-relaxed">{t("about.what.consult")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Leadership with photos */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            {t("about.leadership.title")}
          </h2>
          <div className="space-y-12">
            {leadership.map((item, idx) => (
              <article key={idx}>
                <div className="mb-4">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.organization} · {item.period}
                  </p>
                </div>
                <p className="text-muted-foreground mb-4">{l(item.description)}</p>
                <ul className="space-y-1 mb-4">
                  {item.achievements.map((a, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">—</span>
                      {l(a)}
                    </li>
                  ))}
                </ul>
                {item.images && item.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {item.images.map((img, i) => (
                      <ImageLightbox
                        key={i}
                        src={img}
                        alt={`${item.title} - ${i + 1}`}
                        aspectRatio="4/3"
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}

            {/* Extra community photos */}
            {communityPhotos.length > 0 && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {communityPhotos.map((photo, i) => (
                    <ImageLightbox
                      key={i}
                      src={photo.src}
                      alt={l(photo.alt)}
                      aspectRatio="4/3"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            {t("about.skills.title")}
          </h2>
          <div className="space-y-6">
            {Object.entries(skillsByLevel).map(([key, group]) => (
              <div key={key} className="flex flex-wrap items-baseline gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest w-24 flex-shrink-0">
                  {l(group.label)}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant={key === "expert" ? "default" : "secondary"} className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest w-24 flex-shrink-0">
                Methods
              </span>
              <div className="flex flex-wrap gap-1.5">
                {methodologies.map((m) => (
                  <Badge key={m} variant="outline" className="font-normal">{m}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            {t("about.education.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <article key={idx} className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground">{l(item.title)}</h3>
                  <p className="text-sm text-muted-foreground">{l(item.subtitle)}</p>
                  <p className="text-sm text-muted-foreground">{item.institution} · {item.year}</p>
                </div>
                <Badge variant="secondary" className="text-xs flex-shrink-0">{l(item.status)}</Badge>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
