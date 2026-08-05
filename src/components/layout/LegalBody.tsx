import { Reveal } from "@/components/motion/Reveal";

export function LegalBody({ sections }: { sections: { h: string; p: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-28">
      <div className="space-y-10">
        {sections.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.05}>
            <article>
              <h2 className="font-display text-2xl font-bold">
                <span className="mr-3 text-brand-cyan">{String(i + 1).padStart(2, "0")}</span>
                {s.h}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}