"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { aboutGallery } from "@/data/site";
import { useSite } from "@/lib/site-context";

export default function AboutPage() {
  const { t } = useSite();
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: "left" | "right") => {
    galleryRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth"
    });
  };

  return (
    <PageShell>
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <div className="mb-8 max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">{t.about.title}</h1>
            <p className="mt-4 text-base leading-7 text-muted">{t.about.intro}</p>
          </div>

          <div className="surface space-y-5 rounded-[1.75rem] p-6 text-sm leading-7 text-muted">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="surface rounded-[2rem] p-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/45 dark:border-white/10 dark:bg-white/[0.04]">
            <Image
              src="/profile-main.jpg"
              alt="Luis Felipe"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {t.about.blocks.map((block) => (
          <article key={block.title} className="surface rounded-[1.75rem] p-6">
            <h2 className="text-lg font-semibold">{block.title}</h2>
            <p className="mt-4 text-sm leading-6 text-muted">{block.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">{t.about.offCodeTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{t.about.offCodeDescription}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollGallery("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-muted hover:text-ink dark:border-white/10 dark:hover:text-paper"
              aria-label="Foto anterior"
              title="Foto anterior"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-muted hover:text-ink dark:border-white/10 dark:hover:text-paper"
              aria-label="Próxima foto"
              title="Próxima foto"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {aboutGallery.map((photo, index) => (
            <figure
              key={photo}
              className="surface group relative aspect-[4/5] w-[78vw] max-w-[330px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] p-2 sm:w-[320px]"
            >
              <div className="relative h-full overflow-hidden rounded-[1.2rem] bg-white/40 dark:bg-white/[0.03]">
                <Image
                  src={photo}
                  alt={`Registro pessoal ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 330px, 78vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent opacity-75" />
                <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
