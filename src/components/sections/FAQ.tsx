import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FAQS } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you'd ask us anyway"
          description="Still curious? Our producers reply on WhatsApp within minutes."
        />
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold transition-colors group-hover:text-brand-orange sm:text-2xl">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass grid h-10 w-10 shrink-0 place-items-center rounded-full"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}