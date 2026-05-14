"use client";

import { useSite } from "@/lib/site-context";

export function Footer() {
  const { t } = useSite();

  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-black/10 px-5 py-8 text-sm text-muted dark:border-white/10 sm:flex-row sm:items-start sm:justify-between sm:px-8">
      <div className="max-w-3xl space-y-3">
        <p>{t.person.footer}</p>
        <div className="space-y-1 text-xs leading-relaxed opacity-80">
          <p>CNPJ: 66.773.121/0001-84</p>
          <p>Razão Social: 66.773.121 LUIS FELIPE GUIMARAES DO NASCIMENTO</p>
          <p>Endereço: RUA TARAUACA, 970 — JARDIM CUMBICA — GUARULHOS/SP — CEP 07240-180</p>
        </div>
      </div>
      <p className="shrink-0">2026</p>
    </footer>
  );
}
