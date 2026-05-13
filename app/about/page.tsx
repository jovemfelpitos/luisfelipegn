"use client";

import { PageHeading, PageShell } from "@/components/page-shell";
import { useSite } from "@/lib/site-context";

export default function AboutPage() {
  const { t } = useSite();

  return (
    <PageShell>
      <PageHeading title={t.about.title} intro={t.about.intro} />

      <section className="grid gap-4 md:grid-cols-2">
        {t.about.blocks.map((block) => (
          <article key={block.title} className="surface rounded-[1.75rem] p-6">
            <h2 className="text-lg font-semibold">{block.title}</h2>
            <p className="mt-4 text-sm leading-6 text-muted">{block.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.about.photos.map((photo, index) => (
          <div
            key={photo}
            className="grid-pattern group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/45 dark:border-white/10 dark:bg-white/[0.035]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-royal/[0.04] via-transparent to-gold/[0.08]" />
            <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-paper/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur dark:border-white/10 dark:bg-[#10100f]/80">
              0{index + 1}
            </div>
            <div className="absolute bottom-4 left-4 text-sm font-medium">{photo}</div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
