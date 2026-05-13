"use client";

import { motion } from "framer-motion";
import { workflowNodes } from "@/data/site";

export function WorkflowVisualization({ label, description }: { label: string; description: string }) {
  return (
    <section className="surface rounded-[1.75rem] p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
          <p className="mt-2 text-sm text-muted">{description}</p>
        </div>
        <span className="h-2 w-2 rounded-full bg-gold" />
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-4 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-center">
          {workflowNodes.map((node, index) => (
            <div key={node} className="flex flex-1 items-center">
              <div className="relative z-10 flex min-h-14 min-w-14 items-center justify-center rounded-2xl border border-black/10 bg-paper px-3 text-xs font-semibold dark:border-white/10 dark:bg-[#151514] sm:min-w-24">
                {node}
              </div>
              {index < workflowNodes.length - 1 && (
                <div className="relative h-px flex-1 overflow-hidden bg-black/10 dark:bg-white/10">
                  <motion.span
                    className="absolute left-0 top-1/2 h-px w-14 -translate-y-1/2 bg-gradient-to-r from-transparent via-royal to-transparent"
                    animate={{ x: ["-80%", "260%"] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: index * 0.25,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
