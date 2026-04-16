"use client";

import { Mail, Phone, Linkedin, Download } from "lucide-react";
import { ContactForm } from "@/components/shared/contact-form";
import { personalInfo } from "@/lib/data/personal";
import { useLanguage } from "@/lib/i18n/language-context";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-16">
      {/* ═══════ CONTACT — clean, direct ═══════ */}
      <section className="container mx-auto px-6 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("contact.title")}
          </h1>
          <p className="text-muted-foreground">
            {t("contact.desc")}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Direct contact links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3 mb-12"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors"
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-foreground">{personalInfo.email}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${personalInfo.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="text-sm text-foreground">{personalInfo.phoneDisplay}</p>
              </div>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm text-foreground">/in/natalia-duran-oliva</p>
              </div>
            </a>
            <a
              href={personalInfo.cv}
              download
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors"
            >
              <Download className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">{locale === "es" ? "Descargar" : "Download"}</p>
                <p className="text-sm text-foreground">CV / Resume</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border p-6"
          >
            <h3 className="font-semibold text-foreground mb-1">{t("contact.form.title")}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t("contact.form.subtitle")}</p>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
