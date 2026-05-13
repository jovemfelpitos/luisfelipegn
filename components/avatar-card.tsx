import Image from "next/image";
import { SocialLinks } from "@/components/social-links";

export function AvatarCard() {
  return (
    <aside className="surface flex flex-col gap-6 rounded-[2rem] p-5">
      <div className="grid-pattern relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.04]">
        <Image
          src="/profile-main.jpg"
          alt="Luis Felipe"
          fill
          priority
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold/15 to-transparent" />
      </div>
      <SocialLinks />
    </aside>
  );
}
