"use client";

import { AvatarCard } from "@/components/avatar-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PageShell } from "@/components/page-shell";
import { WorkflowVisualization } from "@/components/workflow-visualization";
import { useSite } from "@/lib/site-context";

export default function Home() {
  const { t } = useSite();

  return (
    <PageShell>
      <section className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <AvatarCard />

        <div className="space-y-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">{t.home.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-normal sm:text-6xl">{t.person.name}</h1>
            <p className="mt-5 text-xl text-muted">{t.person.title}</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">{t.person.description}</p>
          </div>

          <WorkflowVisualization label={t.home.workflowLabel} description={t.home.workflowDescription} />
        </div>
      </section>

      <ExperienceTimeline />
    </PageShell>
  );
}
