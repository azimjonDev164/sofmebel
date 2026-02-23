"use client";
import { useState, useRef, useEffect } from "react";

type Language = {
  code: string;
  label: string;
};

type LanguageSwitcherProps = {
  languages: Language[];
  active: string;
  switchLanguage: (code: string) => void;
};

export function LanguageSwitcher({
  languages,
  active,
  switchLanguage,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLang = languages.find((lang) => lang.code === active);

  return (
    <div ref={dropdownRef} className="relative inline-block text-sm">
      {/* Button to toggle dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-full glass-card soft-ring p-2 px-4 backdrop-blur-sm border border-foreground/10 text-white shadow-md hover:bg-foreground/5 transition"
      >
        {activeLang?.label}
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl bg-greenDeep/95 shadow-lg backdrop-blur-sm border border-greenDeep/20 z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                switchLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm transition duration-200 ${
                active === lang.code
                  ? "bg-goldAccent text-white"
                  : "text-white/80 hover:bg-greenDeep/70 hover:text-white"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
