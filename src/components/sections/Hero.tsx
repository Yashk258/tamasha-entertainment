import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, Play, Ticket } from "lucide-react";

import heroImage from "@/assets/hero-festival.jpg";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Counter } from "@/components/motion/Counter";
import { Aurora, GridBackdrop } from "@/components/motion/Aurora";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 32, damping: 24, mass: 0.9 });
  const py = useSpring(my, { stiffness: 32, damping: 24, mass: 0.9 });
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 180]);
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section
      onPointerMove={(e) => {
        mx.set((e.clientX / window.innerWidth - 0.5) * 28);
        my.set((e.clientY / window.innerHeight - 0.5) * 20);
      }}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div style={{ y: imageY, x: px }} className="absolute inset-0 -z-20 scale-110">
        <img
          src={heroImage}
          alt="Festival crowd with hands raised under golden spotlight beams and smoke at a Tamasha night"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, oklch(0.723 0.203 51 / 18%), transparent 70%)",
          }}
        />
      </motion.div>

      <Aurora className="-z-10 opacity-70" />
      <GridBackdrop />

      {[...Array(22)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-[3px] w-[3px] rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            background: i % 3 === 0 ? "var(--brand-orange)" : "var(--brand-gold)",
            boxShadow: "0 0 12px 2px oklch(0.873 0.176 96 / 45%)",
          }}
          animate={{ y: [0, -60, 0], opacity: [0, 0.85, 0] }}
          transition={{ duration: 10 + (i % 6), repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass inline-flex items-center gap-3 rounded-full py-2 pr-5 pl-2 text-xs"
        >
          <span className="rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 font-semibold tracking-wide text-primary-foreground">
            NEXT UP
          </span>
          <span className="text-muted-foreground">
            NYE Skyline · Goa · <span className="text-brand-gold">42 passes left</span>
          </span>
        </motion.div>

        <h1 className="mt-10 max-w-5xl font-display text-[clamp(3rem,10vw,9rem)] leading-[0.84] font-bold tracking-[-0.045em]">
          {["CREATE", "MEMORIES"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block text-gradient"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              THAT LAST FOREVER
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          We don't organize events. We design experiences — festivals, concerts, weddings and
          nights people talk about for years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <MagneticButton to="/events" className="px-8 py-4 text-base">
            <Ticket className="h-4 w-4" />
            Explore Experiences
          </MagneticButton>
          <MagneticButton to="/gallery" variant="ghost" className="px-8 py-4 text-base">
            <Play className="h-4 w-4 fill-current" />
            Watch the Reel
          </MagneticButton>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.15 }}
          className="mt-16 flex flex-wrap gap-x-14 gap-y-6"
        >
          {[
            { v: 1240, s: "+", l: "Events produced" },
            { v: 2.4, s: "M+", l: "Guests hosted", d: 1 },
            { v: 38, s: "", l: "Cities live" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="font-display text-4xl font-bold text-brand-gold sm:text-5xl">
                <Counter value={s.v} suffix={s.s} decimals={s.d ?? 0} />
              </dt>
              <dd className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {s.l}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        aria-hidden
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] tracking-[0.35em] text-muted-foreground">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-9 w-9 place-items-center rounded-full border border-brand-gold/30"
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.span>
      </motion.div>
    </section>
  );
}