"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/lib/data/services";
import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 md:px-8 py-20">
        <div className="max-w-2xl mb-16">
          <Badge variant="secondary" className="mb-4">{t("services.badge")}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("services.title")}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("services.desc")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-border p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t("services.cta.title")}</h2>
          <p className="text-muted-foreground mb-6 max-w-xl">{t("services.cta.desc")}</p>
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
