import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageHeader } from "@/components/layout/PageHeader";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { CATEGORIES, EXPERIENCES } from "@/data/site";

const title = "Book an Event — Tamasha Entertainment";
const description =
  "Book tickets or commission a private, corporate or wedding experience with Tamasha. Concept deck within 4 working hours.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const FIELD =
  "glass w-full rounded-2xl px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-brand";

function BookPage() {
  const [mode, setMode] = useState<"tickets" | "private">("tickets");
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="BOOKING"
        title="Lock your night in 90 seconds"
        subtitle="Grab passes to a listed experience, or brief us on something entirely your own."
      />
      <section className="mx-auto max-w-4xl px-6 pb-28">
        <div className="glass mb-8 inline-flex rounded-full p-1">
          {(["tickets", "private"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded-full px-6 py-2.5 text-xs font-semibold transition-all ${
                mode === m
                  ? "bg-[image:var(--gradient-brand)] text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m === "tickets" ? "Book tickets" : "Plan my own event"}
            </button>
          ))}
        </div>

        <Reveal>
          {done ? (
            <div className="glass rounded-3xl p-12 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-brand)] glow-ring">
                <Check className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold">You're in.</h2>
              <p className="mt-3 text-muted-foreground">
                A producer has your request. Expect a WhatsApp within 4 working hours.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton onClick={() => setDone(false)} variant="ghost">
                  Make another booking
                </MagneticButton>
              </div>
            </div>
          ) : (
            <form
              className="glass rounded-3xl p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                toast.success("Request received — a producer is on it.");
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
                {mode === "tickets" ? (
                  <>
                    <select required aria-label="Experience" className={FIELD}>
                      <option value="">Choose an experience</option>
                      {EXPERIENCES.map((e) => (
                        <option key={e.id} value={e.id}>
                          {e.title} · {e.city}
                        </option>
                      ))}
                    </select>
                    <input
                      required
                      type="number"
                      min={1}
                      defaultValue={2}
                      aria-label="Number of passes"
                      placeholder="Passes"
                      className={FIELD}
                    />
                    <select aria-label="Tier" className={FIELD}>
                      <option>General Access</option>
                      <option>Premium</option>
                      <option>VIP Lounge</option>
                      <option>Backstage</option>
                    </select>
                  </>
                ) : (
                  <>
                    <select required aria-label="Event type" className={FIELD}>
                      <option value="">Event type</option>
                      {CATEGORIES.map((c) => (
                        <option key={c.name}>{c.name}</option>
                      ))}
                    </select>
                    <input required type="date" aria-label="Event date" className={FIELD} />
                    <input
                      required
                      type="number"
                      min={10}
                      placeholder="Expected guests"
                      aria-label="Expected guests"
                      className={FIELD}
                    />
                    <input placeholder="City" aria-label="City" className={FIELD} />
                    <select aria-label="Budget range" className={FIELD}>
                      <option>Budget: ₹2–5 L</option>
                      <option>Budget: ₹5–15 L</option>
                      <option>Budget: ₹15–50 L</option>
                      <option>Budget: ₹50 L+</option>
                    </select>
                  </>
                )}
              </div>
              <textarea
                rows={4}
                placeholder="Anything we should know?"
                aria-label="Notes"
                className={`${FIELD} mt-4 resize-none`}
              />
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <MagneticButton type="submit" className="px-8 py-4">
                  {mode === "tickets" ? "Reserve my passes" : "Get a concept deck"}
                </MagneticButton>
                <p className="text-xs text-muted-foreground">
                  No payment now. We confirm availability first.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}