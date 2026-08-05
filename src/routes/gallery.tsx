import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { InstagramFeed } from "@/components/sections/InstagramFeed";

const title = "Gallery — Tamasha Entertainment";
const description =
  "Photos and films from Tamasha festivals, concerts, weddings and carnivals across India. Shot on location, never stock.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="THE ARCHIVE"
        title="Twelve years in frames"
        subtitle="Tap any frame to open it. Every image comes from a Tamasha production — no stock libraries, no renders."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <GalleryMasonry />
      </section>
      <InstagramFeed />
      <CTABanner />
    </>
  );
}