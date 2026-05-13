import { ArrowRight } from "lucide-react";

export function ProjectCard({
  title,
  category,
  description,
  status,
  action
}: {
  title: string;
  category: string;
  description: string;
  status: string;
  action: string;
}) {
  return (
    <article className="surface flex min-h-64 flex-col justify-between rounded-[1.75rem] p-6">
      <div>
        <div className="flex items-center justify-between gap-3 text-sm text-muted">
          <span>{category}</span>
          <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">{status}</span>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">{title}</h2>
        <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
      </div>
      <button
        type="button"
        disabled
        className="mt-8 flex w-fit cursor-not-allowed items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-muted opacity-70 dark:border-white/10"
      >
        {action}
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}
