import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { MagneticButton } from "@/components/motion/MagneticButton";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass shadow-[var(--shadow-elevated)]" : "border border-transparent",
          )}
        >
          <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)]">
              <Sparkles className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg leading-none font-bold tracking-tight">
              TAMASHA
              <span className="block text-[10px] font-medium tracking-[0.32em] text-muted-foreground">
                ENTERTAINMENT
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <MagneticButton to="/book" className="px-6 py-3">
                Book Event
              </MagneticButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="glass grid h-11 w-11 place-items-center rounded-full lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-24 z-50 lg:hidden"
          >
            <div className="glass rounded-3xl p-6">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={link.to}
                      className="block rounded-2xl px-4 py-3 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                      activeProps={{ className: "text-foreground" }}
                      activeOptions={{ exact: link.to === "/" }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4">
                <MagneticButton to="/book" className="w-full">
                  Book Event
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}