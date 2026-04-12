"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Mail } from "lucide-react";
import { services } from "@/lib/data/services";
import { useLanguage } from "@/lib/i18n/language-context";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { t, l } = useLanguage();

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 md:px-8 py-20">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Badge variant="secondary" className="mb-4">{t("services.badge")}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("services.title")}</h1>
          <p className="text-muted-foreground">{t("services.desc")}</p>
        </div>

        {/* Services — compact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-lg border border-border bg-card p-6 hover:border-foreground/20 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-foreground">{l(service.title)}</h3>
                <Badge variant="secondary" className="text-xs flex-shrink-0 ml-2">{l(service.timeline)}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{l(service.description)}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {service.features.map((f, i) => (
                  <span key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-foreground/40" />
                    {l(f)}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA → Contact */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">{t("services.cta.title")}</h2>
          <p className="text-muted-foreground text-sm mb-6">{t("services.cta.desc")}</p>
          <Button asChild>
            <Link href="/contact">
              <Mail className="w-4 h-4 mr-2" />
              {t("services.cta.button")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
