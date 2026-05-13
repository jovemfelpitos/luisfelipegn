"use client";

import { PageHeading, PageShell } from "@/components/page-shell";
import { useSite } from "@/lib/site-context";

export default function InsightsPage() {
  const { t } = useSite();

  return (
    <PageShell>
      <PageHeading title={t.insights.title} intro={t.insights.intro} />

      <section className="surface rounded-[1.75rem] p-6">
        <div className="flex flex-wrap gap-2">
          {t.insights.topics.map((topic) => (
            <span key={topic} className="rounded-full border border-black/10 px-4 py-2 text-sm text-muted dark:border-white/10">
              {topic}
            </span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
