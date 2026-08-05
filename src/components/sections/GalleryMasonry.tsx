import { AnimatePresence, motion } from "motion/react";
import { Play, X, ZoomIn } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { img } from "@/data/images";

const ITEMS = [
  { key: "hero", label: "Main stage · Mumbai", video: true, span: "row-span-2" },
  { key: "holi", label: "Rangleela Holi", video: false, span: "" },
  { key: "dandiya", label: "Dandiya Raas", video: false, span: "row-span-2" },
  { key: "concert", label: "Midnight Echo", video: true, span: "" },
  { key: "wedding", label: "Udaipur Wedding", video: false, span: "" },
  { key: "food", label: "Swaad Street Fest", video: false, span: "row-span-2" },
  { key: "kids", label: "Junior Carnival", video: false, span: "" },
  { key: "corporate", label: "Aurora Launch", video: true, span: "" },
];

export function GalleryMasonry({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const items = compact ? ITEMS.slice(0, 6) : ITEMS;

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.key + i} delay={i * 0.05} className={item.span}>
            <button
              type="button"
              onClick={() => setActive(item.key)}
              className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10"
              aria-label={`Open ${item.label}`}
            >
              <img
                src={img(item.key)}
                alt={item.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-115"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-95" />
              <span className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-left text-sm font-semibold">{item.label}</span>
                <span className="glass grid h-9 w-9 place-items-center rounded-full">
                  {item.video ? (
                    <Play className="h-4 w-4 fill-current" />
                  ) : (
                    <ZoomIn className="h-4 w-4" />
                  )}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-background/90 p-6 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={img(active)}
              alt="Expanded Tamasha event photograph"
              className="max-h-[85vh] w-auto rounded-3xl border border-white/15 object-contain"
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="glass absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}