import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import { TiltCard } from "@/components/motion/TiltCard";
import { useCountdown } from "@/hooks/useCountdown";
import { img } from "@/data/images";
import type { Experience } from "@/data/site";

const ACCENT: Record<Experience["accent"], string> = {
  brand: "var(--brand)",
  pink: "var(--brand-orange)",
  cyan: "var(--brand-gold)",
  amber: "var(--brand-gold)",
};

export function ExperienceCard({ item }: { item: Experience }) {
  const t = useCountdown(item.iso);
  const sold = Math.round(((item.totalTickets - item.ticketsLeft) / item.totalTickets) * 100);

  return (
    <TiltCard className="h-full">
      <article className="group glass hover-lift relative flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={img(item.image)}
            alt={`${item.title} — ${item.category} in ${item.city}`}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
          <span
            className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-background"
            style={{ background: ACCENT[item.accent] }}
          >
            {item.category.toUpperCase()}
          </span>
          <span className="glass absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-semibold">
            {item.ticketsLeft < 200 ? "🔥 " : ""}
            {item.ticketsLeft} left
          </span>
          <div className="absolute right-4 bottom-4 left-4 flex gap-1.5">
            {t.ready &&
              (
                [
                  ["D", t.d],
                  ["H", t.h],
                  ["M", t.m],
                  ["S", t.s],
                ] as const
              ).map(([unit, val]) => (
                <span
                  key={unit}
                  className="glass flex-1 rounded-xl py-1.5 text-center font-display text-sm font-bold tabular-nums"
                >
                  {String(val).padStart(2, "0")}
                  <span className="ml-0.5 text-[9px] text-muted-foreground">{unit}</span>
                </span>
              ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl leading-tight font-bold">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>

          <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-brand-gold" />
              {item.date}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-gold" />
              {item.venue}, {item.city}
            </div>
          </dl>

          <div className="mt-5">
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[image:var(--gradient-brand)]"
                style={{ width: `${sold}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">{sold}% sold</p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <p className="font-display text-xl font-bold">
              ₹{item.price.toLocaleString("en-IN")}
              <span className="ml-1 text-xs font-normal text-muted-foreground">onwards</span>
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold transition-all hover:bg-[image:var(--gradient-brand)]"
            >
              Book Now
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}