"use client";

import { useSite } from "@/lib/site-context";

export function Footer() {
  const { t } = useSite();

  return (
    <footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-black/10 px-5 py-8 text-sm text-muted dark:border-white/10 sm:px-8">
      <p>{t.person.footer}</p>
      <p>2026</p>
    </footer>
  );
}
