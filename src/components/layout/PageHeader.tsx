import { Aurora, GridBackdrop } from "@/components/motion/Aurora";
import { Reveal, RevealText } from "@/components/motion/Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-24">
      <Aurora className="opacity-60" />
      <GridBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-brand-gold">
            {eyebrow}
          </span>
        </Reveal>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] font-bold sm:text-7xl">
          <RevealText text={title} />
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        </Reveal>
      </div>
    </header>
  );
}