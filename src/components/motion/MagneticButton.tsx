import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 16 });
  const sy = useSpring(y, { stiffness: 250, damping: 16 });

  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors",
    variant === "primary"
      ? "text-primary-foreground glow-ring"
      : "glass text-foreground hover:border-white/30",
    className,
  );

  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-[image:var(--gradient-brand)] bg-[length:200%_200%] transition-[background-position] duration-700 group-hover:bg-[position:100%_50%]"
        />
      )}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-y-full bg-white/15 transition-transform duration-500 group-hover:translate-y-0"
      />
      {children}
    </>
  );

  const handlers = {
    onPointerMove: (e: React.PointerEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - r.left - r.width / 2) * 0.25);
      y.set((e.clientY - r.top - r.height / 2) * 0.35);
    },
    onPointerLeave: () => {
      x.set(0);
      y.set(0);
    },
  };

  if (to) {
    return (
      <motion.span style={{ x: sx, y: sy }} className="inline-flex" {...handlers}>
        <Link to={to} className={base}>
          {inner}
        </Link>
      </motion.span>
    );
  }

  if (href) {
    return (
      <motion.span style={{ x: sx, y: sy }} className="inline-flex" {...handlers}>
        <a href={href} target="_blank" rel="noreferrer" className={base}>
          {inner}
        </a>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={base}
      {...handlers}
    >
      {inner}
    </motion.button>
  );
}