"use client";

import { useState } from "react";

const navItems = [
  { label: "Bosh sahifa", href: "/#bosh-sahifa" },
  { label: "Mebel", href: "/#mebel" },
  { label: "Aksessuarlar", href: "/#aksessuarlar" },
  { label: "Online Magazine", href: "/online-magazine" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <div className="glass-card soft-ring rounded-2xl px-5 py-3 text-lg font-semibold tracking-wide text-beigeLight">
          <span className="font-display text-goldAccent">Sof</span> Mebel
        </div>

        <nav className="hidden items-center gap-7 rounded-2xl bg-[#1F3D2B]/80 px-6 py-3 text-sm text-beigeLight shadow-soft backdrop-blur-md md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition duration-300 hover:text-goldAccent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-2xl text-beigeLight md:hidden"
          aria-label="Menyu"
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
        className={`mx-auto w-full max-w-7xl px-5 transition-all duration-300 sm:px-8 lg:px-10 md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav
          id="mobile-menu"
          className="glass-card soft-ring rounded-2xl p-3 text-beigeLight"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm transition duration-300 hover:bg-beigeLight/10 hover:text-goldAccent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
