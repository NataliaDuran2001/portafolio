"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/contact-form";
import { personalInfo } from "@/lib/data/personal";
import { useLanguage } from "@/lib/i18n/language-context";

export default function ContactPage() {
  const { t, l } = useLanguage();

  const contactLinks = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: t("contact.info"), value: personalInfo.phoneDisplay, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: l(personalInfo.location), value: l(personalInfo.location), href: null as string | null },
    { icon: Linkedin, label: "LinkedIn", value: "/in/natalia-duran-oliva", href: personalInfo.linkedin, external: true },
    { icon: Github, label: "GitHub", value: "NataliaDuran2001", href: personalInfo.github, external: true },
  ];

  const availability = [
    { type: t("contact.availability.freelance"), status: t("contact.availability.available") },
    { type: t("contact.availability.consulting"), status: t("contact.availability.available") },
    { type: t("contact.availability.mentoring"), status: t("contact.availability.limited") },
    { type: t("contact.availability.collab"), status: t("contact.availability.open") },
  ];

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 md:px-8 py-20">
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("contact.desc")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <h3 className="font-semibold text-foreground">{t("contact.info")}</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactLinks.map((item) => {
                  const content = (
                    <div className="flex items-center gap-3 text-sm">
                      <item.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                  if (!item.href) return <div key={item.label}>{content}</div>;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="block hover:bg-secondary/50 rounded-lg p-2 -m-2 transition-colors"
                    >
                      {content}
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <h3 className="font-semibold text-foreground">{t("contact.availability")}</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {availability.map((item) => (
                  <div key={item.type} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.type}</span>
                    <Badge variant="secondary" className="text-xs">{item.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button variant="outline" className="w-full" asChild>
              <a href={personalInfo.cv} download>
                <Download className="w-4 h-4 mr-2" />
                {t("home.cta.cv")}
              </a>
            </Button>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <h3 className="font-semibold text-foreground">{t("contact.form.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("contact.form.subtitle")}</p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
