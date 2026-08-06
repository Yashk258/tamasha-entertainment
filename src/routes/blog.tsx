import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { img } from "@/data/images";
import { POSTS } from "@/data/site";

const title = "Journal — Tamasha Entertainment";
const description =
  "Field notes on live production, crowd safety, artist curation and the craft of building unforgettable events in India.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="JOURNAL"
        title="Notes from behind the barricade"
        subtitle="How shows actually get made — production diaries, safety thinking and the economics of live entertainment."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <article className="group glass hover-lift overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={img(post.image)}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-[1.1s] group-hover:scale-110 group-hover:opacity-100"
                  />
                </div>
                <div className="p-7">
                  <p className="flex gap-3 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    <span>{post.date}</span>
                    <span className="text-brand-gold">{post.read}</span>
                  </p>
                  <h2 className="mt-4 font-display text-2xl leading-tight font-bold transition-colors group-hover:text-brand-orange">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}