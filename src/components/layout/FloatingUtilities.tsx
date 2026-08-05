import { AnimatePresence, motion, useScroll, useMotionValueEvent, useSpring } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useState } from "react";

import { SITE } from "@/data/site";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[image:var(--gradient-brand)]"
    />
  );
}

export function FloatingUtilities() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 600));

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass grid h-12 w-12 place-items-center rounded-full transition-colors hover:border-white/30"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-brand)] glow-ring transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
        <span className="absolute inset-0 animate-ping rounded-full bg-brand/40" aria-hidden />
      </a>
    </div>
  );
}