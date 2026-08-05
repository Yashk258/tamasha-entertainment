import { Heart, Instagram } from "lucide-react";

import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { img } from "@/data/images";
import { INSTAGRAM } from "@/data/site";

export function InstagramFeed() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="@TAMASHA.LIVE"
          title="Straight from the floor"
          description="Shot last night, posted this morning. Follow along for presale codes."
          action={
            <MagneticButton href="https://instagram.com" variant="ghost">
              <Instagram className="h-4 w-4" />
              Follow us
            </MagneticButton>
          }
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {INSTAGRAM.map((post, i) => (
            <Reveal
              key={post.caption}
              delay={i * 0.05}
              className={i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group relative block h-full min-h-[9rem] overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={img(post.image)}
                  alt={post.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-background/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-400 group-hover:opacity-100">
                  <span className="flex flex-col items-center gap-1.5 text-center">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Heart className="h-4 w-4 fill-brand-pink text-brand-pink" />
                      {post.likes}
                    </span>
                    <span className="px-3 text-[11px] text-muted-foreground">{post.caption}</span>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}