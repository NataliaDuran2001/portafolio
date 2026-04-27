"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Mail,
  Home,
  User,
  Briefcase,
  FolderGit2,
  Send,
  Linkedin,
  Github,
} from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { useLanguage } from "@/lib/i18n/language-context";
import { personalInfo } from "@/lib/data/personal";

export default function Navbar() {
  const pathname = usePathname();
  const { t, locale } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "/", icon: Home },
    { name: t("nav.about"), href: "/about", icon: User },
    { name: t("nav.experience"), href: "/experience", icon: Briefcase },
    { name: t("nav.work"), href: "/work", icon: FolderGit2 },
    { name: t("nav.contact"), href: "/contact", icon: Send },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center group-hover:bg-foreground/80 transition-colors">
              <span className="text-background font-bold text-sm">ND</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              Natalia Durán Oliva
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="flex lg:hidden items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9"
                  aria-label={t("nav.menu")}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88%] max-w-sm p-0 flex flex-col"
              >
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-background font-bold text-sm">
                        ND
                      </span>
                    </div>
                    <div className="text-left min-w-0">
                      <SheetTitle className="text-base truncate">
                        {personalInfo.name}
                      </SheetTitle>
                      <SheetDescription className="text-xs truncate">
                        {personalInfo.title[locale]}
                      </SheetDescription>
                    </div>
                  </div>
                </SheetHeader>

                <nav className="flex-1 overflow-y-auto px-3 py-4">
                  <ul className="flex flex-col gap-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);
                      return (
                        <li key={item.href}>
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base transition-colors ${
                                active
                                  ? "bg-secondary text-foreground font-medium"
                                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                              }`}
                              aria-current={active ? "page" : undefined}
                            >
                              <Icon
                                className={`w-5 h-5 shrink-0 ${
                                  active ? "text-foreground" : ""
                                }`}
                              />
                              <span>{item.name}</span>
                            </Link>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="border-t border-border px-6 py-4">
                  <p className="text-xs text-muted-foreground mb-3">
                    {locale === "es" ? "Conecta conmigo" : "Get in touch"}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      asChild
                    >
                      <a
                        href={`mailto:${personalInfo.email}`}
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      asChild
                    >
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      asChild
                    >
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
