import { PARTNERS } from "@/data/site";

export function TrustedBy() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="relative border-y border-white/10 py-10">
      <p className="mb-8 text-center text-[11px] tracking-[0.4em] text-muted-foreground">
        TRUSTED BY BRANDS, VENUES &amp; MEDIA
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-16 pr-16">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl font-bold whitespace-nowrap text-white/25 transition-colors duration-300 hover:text-white/80 sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}