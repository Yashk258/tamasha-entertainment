import { motion } from "motion/react";
import { BadgeIndianRupee, Camera, HeartHandshake, Mic2, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { WHY_TAMASHA } from "@/data/site";

const ICONS = [ShieldCheck, Mic2, Sparkles, HeartHandshake, BadgeIndianRupee, Camera];

export function WhyTamasha() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="WHY TAMASHA"
          title="Six reasons the crowd keeps coming back"
          description="Scale is easy. Consistency isn't. Here's what we refuse to compromise on."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_TAMASHA.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover="hover"
                  className="group relative h-full overflow-hidden bg-background p-8 sm:p-10"
                >
                  <motion.span
                    aria-hidden
                    variants={{ hover: { opacity: 0.16, scale: 1.4 } }}
                    initial={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -top-16 -right-10 h-48 w-48 rounded-full blur-3xl"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 transition-colors duration-500 group-hover:border-brand/60">
                    <Icon className="h-5 w-5 text-brand-cyan transition-colors group-hover:text-brand-pink" />
                  </span>
                  <h3 className="relative mt-7 font-display text-xl font-bold">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <span className="relative mt-6 block h-px w-0 bg-[image:var(--gradient-brand)] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}