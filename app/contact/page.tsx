"use client";

import { PageHeading, PageShell } from "@/components/page-shell";
import { SocialLinks } from "@/components/social-links";
import { useSite } from "@/lib/site-context";

export default function ContactPage() {
  const { t } = useSite();

  return (
    <PageShell>
      <PageHeading title={t.contact.title} intro={t.contact.intro} />

      <section className="surface max-w-xl rounded-[1.75rem] p-6">
        <SocialLinks compact />
      </section>
    </PageShell>
  );
}
