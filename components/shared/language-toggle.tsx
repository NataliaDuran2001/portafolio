"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-xs font-mono px-2 h-8"
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      aria-label="Toggle language"
    >
      {locale === "en" ? "ES" : "EN"}
    </Button>
  );
}
