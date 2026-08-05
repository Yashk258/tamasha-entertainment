import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { STATS } from "@/data/site";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 opacity-30 blur-[120px]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] font-bold sm:text-5xl">
              The numbers
              <span className="block text-gradient">behind the noise</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s, i) => (
              <div key={s.label} className="group relative bg-background p-6 sm:p-8">
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[image:var(--gradient-brand)] transition-transform duration-500 group-hover:scale-x-100"
                />
                <p className="font-display text-3xl leading-none font-bold tabular-nums sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-3 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {s.label}
                </p>
                <span className="mt-4 block text-[10px] text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}