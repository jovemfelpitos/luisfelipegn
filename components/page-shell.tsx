"use client";

import { motion } from "framer-motion";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">{title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{intro}</p>
    </div>
  );
}
