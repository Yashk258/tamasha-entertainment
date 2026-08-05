import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageHeader } from "@/components/layout/PageHeader";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/data/site";

const title = "Contact Tamasha Entertainment — Talk to a Producer";
const description =
  "Call, WhatsApp or write to Tamasha Entertainment. Mumbai studio, teams in 38 cities, replies within 4 working hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const FIELD =
  "glass w-full rounded-2xl px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-brand";

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Let's talk about your night"
        subtitle="One producer, one number, straight answers. We reply within 4 working hours — usually much sooner on WhatsApp."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              className="glass rounded-3xl p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  toast.success("Message sent. A producer will reach out shortly.");
                  (e.target as HTMLFormElement).reset();
                }, 700);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full name" aria-label="Full name" className={FIELD} />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className={FIELD}
                />
                <input required placeholder="Phone" aria-label="Phone" className={FIELD} />
                <input placeholder="City" aria-label="City" className={FIELD} />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Tell us what you're planning..."
                aria-label="Message"
                className={`${FIELD} mt-4 resize-none`}
              />
              <div className="mt-6">
                <MagneticButton type="submit" className="px-8 py-4">
                  {sending ? "Sending..." : "Send message"}
                </MagneticButton>
              </div>
            </form>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-8">
                <ul className="space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                    <span className="text-muted-foreground">{SITE.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="h-5 w-5 text-brand-cyan" />
                    <a href={`tel:${SITE.phone}`} className="text-muted-foreground hover:text-foreground">
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="h-5 w-5 text-brand-cyan" />
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-5 w-5 text-brand-cyan" />
                    <span className="text-muted-foreground">Mon–Sat, 10:00–20:00 IST</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.18} className="flex-1">
              <div className="h-full min-h-[16rem] overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="Tamasha Entertainment studio location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.81%2C19.04%2C72.86%2C19.08&layer=mapnik"
                  loading="lazy"
                  className="h-full min-h-[16rem] w-full grayscale-[0.6] invert-[0.92] hue-rotate-180"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}