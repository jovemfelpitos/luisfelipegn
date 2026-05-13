import { SocialLinks } from "@/components/social-links";

export function AvatarCard() {
  return (
    <aside className="surface flex flex-col gap-6 rounded-[2rem] p-5">
      <div className="grid-pattern relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.04]">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold/15 to-transparent" />
        <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-paper text-4xl font-semibold dark:border-white/10 dark:bg-[#151514]">
          LF
        </div>
      </div>
      <SocialLinks />
    </aside>
  );
}
