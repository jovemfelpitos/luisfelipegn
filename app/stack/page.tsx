"use client";

import { PageHeading, PageShell } from "@/components/page-shell";
import { StackCard } from "@/components/stack-card";
import { stackCategories } from "@/data/site";
import { useSite } from "@/lib/site-context";

export default function StackPage() {
  const { t } = useSite();

  return (
    <PageShell>
      <PageHeading title={t.stack.title} intro={t.stack.intro} />

      <section className="grid gap-4 md:grid-cols-2">
        {stackCategories.map((category) => (
          <StackCard key={category.key} category={category} />
        ))}
      </section>
    </PageShell>
  );
}
