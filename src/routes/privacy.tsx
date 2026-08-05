import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { LegalBody } from "@/components/layout/LegalBody";

const title = "Privacy Policy — Tamasha Entertainment";
const description =
  "How Tamasha Entertainment collects, uses and protects your personal data when you book tickets or events with us.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    h: "Information we collect",
    p: "Name, email, phone number, city and booking preferences you submit through our forms, plus anonymous analytics about how our site is used.",
  },
  {
    h: "How we use it",
    p: "To confirm bookings, issue passes, send event logistics, respond to enquiries and — only with your consent — share presale and lineup announcements.",
  },
  {
    h: "Sharing",
    p: "We share the minimum necessary data with venue partners, payment processors and ticketing infrastructure. We never sell personal data to advertisers.",
  },
  {
    h: "Photography at events",
    p: "Our venues are photographed and filmed. Attending an event grants us permission to use resulting footage. Write to us to request removal of a specific image.",
  },
  {
    h: "Your rights",
    p: "You can request access, correction or deletion of your data at any time by emailing hello@tamasha.live. We respond within 30 days.",
  },
  {
    h: "Security & retention",
    p: "Data is encrypted in transit and at rest, and retained only as long as needed for legal, tax and support obligations.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Privacy Policy"
        subtitle="Last updated 5 August 2026. Plain language, no dark patterns."
      />
      <LegalBody sections={SECTIONS} />
    </>
  );
}