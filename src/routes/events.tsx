import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { EXPERIENCES } from "@/data/site";

const title = "Upcoming Experiences — Tamasha Entertainment";
const description =
  "Browse Tamasha's upcoming festivals, concerts, Holi and Dandiya nights, food fests and carnivals. Live countdowns and real ticket availability.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  const categories = ["All", ...new Set(EXPERIENCES.map((e) => e.category))];
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? EXPERIENCES : EXPERIENCES.filter((e) => e.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="WHAT'S NEXT"
        title="Upcoming experiences"
        subtitle="Every show below is produced in-house. Capacities are real, countdowns are live, and the good tiers go first."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                filter === c
                  ? "bg-[image:var(--gradient-brand)] text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} className="h-full">
              <ExperienceCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}