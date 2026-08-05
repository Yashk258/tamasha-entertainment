import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/layout/PageHeader";
import { LegalBody } from "@/components/layout/LegalBody";

const title = "Terms of Service — Tamasha Entertainment";
const description =
  "Ticketing, refunds, entry rules and event conduct terms for all Tamasha Entertainment experiences.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    h: "Tickets and passes",
    p: "Passes are issued per person and validated by QR at entry. A pass may be scanned once; duplicates are void. Resale above face value is not permitted.",
  },
  {
    h: "Refunds and cancellations",
    p: "Full refunds up to 7 days before the event date, 50% up to 48 hours before, none thereafter. If we cancel or reschedule, you receive 100% back within 7 working days.",
  },
  {
    h: "Entry and age policy",
    p: "Government photo ID is mandatory. Alcohol-serving events are 21+. Kids carnivals require an accompanying adult per four children.",
  },
  {
    h: "Prohibited items and conduct",
    p: "Outside alcohol, weapons, drones and professional recording gear are not allowed. Harassment of any guest, artist or crew member results in immediate removal without refund.",
  },
  {
    h: "Force majeure",
    p: "Weather, civic orders, permit withdrawal or public health directives may force postponement. In such cases your pass carries forward to the rescheduled date.",
  },
  {
    h: "Liability",
    p: "Attendance is at your own risk. Tamasha's liability is limited to the value of the pass purchased. Personal belongings remain your responsibility.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Terms of Service"
        subtitle="Last updated 5 August 2026. The rules that keep everyone safe and the shows running."
      />
      <LegalBody sections={SECTIONS} />
    </>
  );
}