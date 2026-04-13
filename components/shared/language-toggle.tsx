"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      aria-label="Toggle language"
      className="relative flex items-center w-14 h-7 rounded-full border border-border bg-secondary transition-colors hover:border-foreground/30"
    >
      <span
        className={`absolute w-6 h-5 rounded-full bg-foreground transition-transform duration-200 ${
          locale === "en" ? "translate-x-0.5" : "translate-x-7"
        }`}
      />
      <span className={`relative z-10 flex-1 text-center text-xs font-bold ${locale === "en" ? "text-background" : "text-muted-foreground"}`}>
        EN
      </span>
      <span className={`relative z-10 flex-1 text-center text-xs font-bold ${locale === "es" ? "text-background" : "text-muted-foreground"}`}>
        ES
      </span>
    </button>
  );
}
