"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ track scroll
  const [active, setActive] = useState("uz");
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("navbar");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // check initial scroll position in case user reloads scrolled page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) setActive(savedLocale);
  }, []);

  const switchLanguage = (locale: string) => {
    localStorage.setItem("locale", locale);
    setActive(locale);
    router.push(`/${locale}${pathname.substring(3)}`);
  };

  const navItems = [
    { key: "home", href: "/#bosh-sahifa" },
    { key: "furniture", href: "/#mebel" },
    { key: "accessories", href: "/#aksessuarlar" },
    { key: "magazine", href: "/online-magazine" },
    { key: "about", href: "/#biz-haqimizda" },
  ];

  const languages = [
    { code: "uz", label: "UZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1F3D2B]/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="glass-card soft-ring rounded-2xl px-5 py-3 mt-2 text-lg font-semibold tracking-wide text-beigeLight">
          <span className="font-display text-goldAccent">Sof</span> Mebel
        </div>

        <div className="inline-flex items-center gap-1 rounded-full glass-card soft-ring p-1 backdrop-blur-sm border border-foreground/10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                active === lang.code
                  ? "bg-goldAccent text-white shadow-lg"
                  : "text-white/70 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <nav className="hidden items-center gap-7 rounded-2xl px-6 py-3 text-sm text-beigeLight md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="transition duration-300 hover:text-goldAccent"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-2xl text-beigeLight md:hidden"
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`mx-auto w-full max-w-7xl px-5 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0 h-[0]"
        }`}
      >
        <nav
          id="mobile-menu"
          className="glass-card soft-ring rounded-2xl p-3 text-beigeLight"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm transition duration-300 hover:bg-beigeLight/10 hover:text-goldAccent"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
