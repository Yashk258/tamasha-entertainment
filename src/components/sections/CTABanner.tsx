import { MagneticButton } from "@/components/motion/MagneticButton";
import { Aurora } from "@/components/motion/Aurora";
import { Reveal, RevealText } from "@/components/motion/Reveal";

export function CTABanner() {
  return (
    <section className="relative px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-20 text-center sm:py-28">
        <Aurora className="opacity-80" />
        <div className="relative">
          <Reveal>
            <span className="glass inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-brand-amber">
              LIMITED CAPACITY
            </span>
          </Reveal>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl leading-[0.95] font-bold sm:text-7xl">
            <RevealText text="Ready for the next celebration?" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Tell us the date. We'll bring the stage, the sound, the crowd and the story worth
              retelling.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton to="/book" className="px-9 py-4 text-base">
                Book Now
              </MagneticButton>
              <MagneticButton to="/contact" variant="ghost" className="px-9 py-4 text-base">
                Talk to a producer
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}