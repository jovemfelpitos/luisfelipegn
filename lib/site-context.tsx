"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { copy, Locale } from "@/data/site";

type Theme = "dark" | "light";

type SiteContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (typeof copy)[Locale];
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("lf-locale") as Locale | null;
    if (storedLocale === "pt" || storedLocale === "en") {
      setLocaleState(storedLocale);
    }

    const storedTheme = window.localStorage.getItem("lf-theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("lf-locale", nextLocale);
  };

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      window.localStorage.setItem("lf-theme", nextTheme);
      return nextTheme;
    });
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      theme,
      toggleTheme,
      t: copy[locale]
    }),
    [locale, theme]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error("useSite must be used inside SiteProvider");
  }

  return context;
}
