import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { img } from "@/data/images";
import { CATEGORIES } from "@/data/site";

export function Categories() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="CATEGORIES"
          title="Pick your kind of chaos"
          description="From 50,000-strong festivals to a candlelit dinner for twelve."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.04}>
              <Link
                to="/events"
                className="group relative block h-44 overflow-hidden rounded-2xl border border-white/10 sm:h-52"
              >
                <img
                  src={img(cat.image)}
                  alt={`${cat.name} events by Tamasha`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-45 transition-all duration-[1.1s] group-hover:scale-110 group-hover:opacity-70"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <span className="absolute inset-x-4 bottom-4">
                  <span className="block font-display text-lg leading-tight font-bold">
                    {cat.name}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                    {cat.count}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}