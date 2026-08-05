import { createFileRoute } from "@tanstack/react-router";

import { CTABanner } from "@/components/sections/CTABanner";
import { Categories } from "@/components/sections/Categories";
import { FAQ } from "@/components/sections/FAQ";
import { GallerySection } from "@/components/sections/GallerySection";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { UpcomingExperiences } from "@/components/sections/UpcomingExperiences";
import { WhyTamasha } from "@/components/sections/WhyTamasha";

const title = "Tamasha Entertainment — Unforgettable Live Experiences";
const description =
  "Festivals, concerts, weddings and private nights produced across 38 Indian cities. Book curated experiences from Tamasha Entertainment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tamasha Entertainment",
          description,
          url: "/",
          sameAs: ["https://instagram.com", "https://youtube.com"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1240",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="sr-only">
        Tamasha Entertainment — we don't organize events, we create unforgettable memories
      </h1>
      <Hero />
      <TrustedBy />
      <UpcomingExperiences />
      <WhyTamasha />
      <Stats />
      <GallerySection />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <CTABanner />
    </>
  );
}
