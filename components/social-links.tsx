"use client";

import { socialLinks } from "@/data/site";

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex flex-wrap gap-2" : "flex flex-col gap-2"}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            className="group flex items-center gap-3 rounded-full border border-black/10 bg-white/45 px-4 py-3 text-sm font-medium text-muted hover:border-black/20 hover:text-ink dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/20 dark:hover:text-paper"
            aria-label={social.label}
            title={social.label}
          >
            <Icon className="h-4 w-4" />
            <span>{social.label}</span>
          </a>
        );
      })}
    </div>
  );
}
