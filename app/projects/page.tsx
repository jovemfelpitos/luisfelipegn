"use client";

import { PageHeading, PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/site";
import { useSite } from "@/lib/site-context";

export default function ProjectsPage() {
  const { locale, t } = useSite();

  return (
    <PageShell>
      <PageHeading title={t.projects.title} intro={t.projects.intro} />

      <section className="grid gap-4 md:grid-cols-3">
        {projects[locale].map((project) => (
          <ProjectCard key={project.title} {...project} action={t.projects.disabled} />
        ))}
      </section>
    </PageShell>
  );
}
