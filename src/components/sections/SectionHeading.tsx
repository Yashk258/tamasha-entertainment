import { Reveal, RevealText } from "@/components/motion/Reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.32em] text-brand-cyan">
            <span className="h-px w-8 bg-brand-cyan" />
            {eyebrow}
          </span>
        </Reveal>
        <h2 className="mt-5 text-4xl leading-[1] font-bold sm:text-6xl">
          <RevealText text={title} />
        </h2>
        {description && (
          <Reveal delay={0.12}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">{description}</p>
          </Reveal>
        )}
      </div>
      {action && <Reveal delay={0.18}>{action}</Reveal>}
    </div>
  );
}