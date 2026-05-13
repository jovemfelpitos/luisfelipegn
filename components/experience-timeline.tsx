"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";
import { useSite } from "@/lib/site-context";

export function ExperienceTimeline() {
  const { locale, t } = useSite();

  return (
    <section className="mt-14">
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold">{t.home.experienceTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.home.experienceIntro}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-8 rounded-full bg-royal/70" />
          <span className="h-2 w-8 rounded-full bg-gold/80" />
        </div>
      </div>

      <div className="space-y-4">
        {experience[locale].map((item) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.38 }}
            className="surface relative overflow-hidden rounded-[1.75rem] p-6"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-royal/75 via-gold/70 to-transparent" />
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-medium text-muted">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.company}</h3>
                <p className="mt-1 text-muted">{item.role}</p>
              </div>
              <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-full border border-black/10 px-3 py-2 dark:border-white/10">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
