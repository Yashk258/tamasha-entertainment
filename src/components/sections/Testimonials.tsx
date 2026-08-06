import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const active = TESTIMONIALS[index]!;

  const go = (delta: number) => {
    setDir(delta);
    setIndex((i) => (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What the crowd says after"
          description="Sponsors, couples, colleges and regulars — reviewed after the lights came up."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="glass relative min-h-[22rem] overflow-hidden rounded-3xl p-8 sm:p-12">
            <Quote className="h-10 w-10 text-brand-orange/50" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: dir * 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -dir * 40, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6"
              >
                <p className="font-display text-2xl leading-snug font-medium sm:text-4xl">
                  “{active.quote}”
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[image:var(--gradient-brand)] font-display font-bold">
                    {active.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold">{active.name}</span>
                    <span className="block text-sm text-muted-foreground">{active.role}</span>
                  </span>
                  <span className="ml-auto flex gap-0.5">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="glass grid h-11 w-11 place-items-center rounded-full transition-colors hover:border-white/30"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="glass grid h-11 w-11 place-items-center rounded-full transition-colors hover:border-white/30"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="ml-2 flex gap-1.5">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show review by ${t.name}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-[image:var(--gradient-brand)]" : "w-1.5 bg-white/25"
                    }`}
                  />
                ))}
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { k: "4.9/5", v: "Average guest rating across 1,240 events" },
              { k: "92%", v: "Guests who book a second Tamasha experience" },
              { k: "48 hrs", v: "Average turnaround for event films and photos" },
            ].map((s) => (
              <div key={s.k} className="card-lux rounded-3xl p-6">
                <p className="font-display text-4xl font-bold text-gradient">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}