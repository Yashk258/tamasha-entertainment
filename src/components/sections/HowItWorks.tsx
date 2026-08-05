import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { STEPS } from "@/data/site";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="Four steps between you and the night"
          description="No forms in triplicate. No chasing. Just a clean path from curiosity to confetti."
        />
        <div ref={ref} className="relative mt-16 pl-10 sm:pl-0">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-white/10 sm:left-1/2" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-3 w-px bg-[image:var(--gradient-brand)] sm:left-1/2"
          />
          <div className="space-y-14 sm:space-y-24">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={0.05}>
                <div
                  className={`relative flex flex-col sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:ml-auto sm:pl-16"
                  }`}
                >
                  <span
                    className={`absolute -left-[1.85rem] top-2 grid h-4 w-4 place-items-center rounded-full bg-[image:var(--gradient-brand)] glow-ring sm:top-3 ${
                      i % 2 === 0 ? "sm:-right-2 sm:left-auto" : "sm:-left-2"
                    }`}
                  />
                  <span className="font-display text-6xl font-bold text-white/10 sm:text-7xl">
                    {s.step}
                  </span>
                  <h3 className="-mt-4 font-display text-3xl font-bold sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
                    {i % 2 === 0 ? <span className="sm:ml-auto sm:block">{s.body}</span> : s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}