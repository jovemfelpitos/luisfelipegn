"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Moon, Sun } from "lucide-react";
import { navItems } from "@/data/site";
import { useSite } from "@/lib/site-context";

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale, theme, toggleTheme } = useSite();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-black/10 bg-paper/72 px-3 py-2 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-[#10100f]/72">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-sm font-semibold dark:border-white/10"
          aria-label="Luis Felipe"
        >
          LF
        </Link>

        <nav className="hidden items-center rounded-full border border-black/10 bg-white/45 p-1 text-sm dark:border-white/10 dark:bg-white/[0.04] md:flex">
          {navItems[locale].map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 ${
                  active
                    ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                    : "text-muted hover:text-ink dark:hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className="group flex h-10 items-center gap-2 rounded-full border border-black/10 px-3 text-sm font-medium text-muted hover:text-ink dark:border-white/10 dark:hover:text-paper"
            aria-label="Change language"
            title="Change language"
          >
            <Languages className="h-4 w-4" />
            <span>{locale.toUpperCase()}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-muted hover:text-ink dark:border-white/10 dark:hover:text-paper"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <nav className="mx-auto mt-3 flex max-w-6xl gap-2 overflow-x-auto rounded-full border border-black/10 bg-paper/80 p-1 text-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#10100f]/80 md:hidden">
        {navItems[locale].map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-4 py-2 ${
                active
                  ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                  : "text-muted hover:text-ink dark:hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
