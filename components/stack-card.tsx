import { stackCategories } from "@/data/site";

type StackCategory = (typeof stackCategories)[number];

export function StackCard({ category }: { category: StackCategory }) {
  const Icon = category.icon;

  return (
    <article className="surface rounded-[1.75rem] p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10">
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-semibold">{category.title}</h2>
      </div>
      <div className="grid gap-2">
        {category.items.map((item) => {
          const ItemIcon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/35 px-4 py-3 text-sm text-muted hover:border-black/20 hover:text-ink dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-white/20 dark:hover:text-paper"
            >
              <span>{item.label}</span>
              <ItemIcon className="h-4 w-4" />
            </div>
          );
        })}
      </div>
    </article>
  );
}
