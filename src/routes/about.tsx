import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-festival.jpg";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { Stats } from "@/components/sections/Stats";
import { WhyTamasha } from "@/components/sections/WhyTamasha";

const title = "About Tamasha Entertainment — Experience Makers";
const description =
  "Tamasha Entertainment is an experience company producing festivals, concerts and celebrations across 38 Indian cities since 2014.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Kabir Sethi", role: "Founder & Executive Producer" },
  { name: "Meher Kapadia", role: "Head of Experience Design" },
  { name: "Arjun Rao", role: "Director, Live Production" },
  { name: "Nikita Bansal", role: "Head of Partnerships" },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="OUR STORY"
        title="We build the nights people remember"
        subtitle="Tamasha started in 2014 with one rented sound system and 400 people on a terrace in Bandra. Twelve years later, the obsession hasn't changed — only the scale."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src={heroImage}
              alt="Tamasha festival main stage with laser lighting"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-[24rem] w-full object-cover opacity-70 sm:h-[32rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <p className="absolute right-8 bottom-8 left-8 max-w-2xl font-display text-2xl leading-snug font-bold sm:text-4xl">
              “We don't organize events.
              <span className="text-gradient"> We create unforgettable memories.”</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The philosophy</h2>
            <p className="mt-5 text-muted-foreground">
              An event is a date on a calendar. An experience is a memory with a soundtrack. We
              design for the second one — mapping the guest journey from the first ticket email to
              the last photograph, and treating sound, light, scent, queueing and safety as one
              single craft.
            </p>
            <p className="mt-4 text-muted-foreground">
              That's why our production, artist, hospitality and content teams sit under one roof.
              Nothing gets outsourced to the lowest bidder, and nobody hands you off mid-project.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold">Milestones</h3>
              <ul className="mt-6 space-y-5">
                {[
                  ["2014", "First terrace gig in Mumbai — 400 guests, one rented rig."],
                  ["2017", "Rangleela Holi debuts; 12,000 tickets sold in 36 hours."],
                  ["2020", "Pivot to hybrid shows; 2.1M livestream viewers."],
                  ["2023", "Expansion to 38 cities and the in-house film studio."],
                  ["2026", "Tamasha Premium Experiences launches for private clients."],
                ].map(([year, text]) => (
                  <li key={year} className="flex gap-5">
                    <span className="font-display text-sm font-bold text-brand-gold">{year}</span>
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">The people behind it</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="glass hover-lift rounded-3xl p-6">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] font-display text-xl font-bold">
                    {m.name.charAt(0)}
                  </span>
                  <p className="mt-5 font-display text-lg font-bold">{m.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <WhyTamasha />
      <CTABanner />
    </>
  );
}