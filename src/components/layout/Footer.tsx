import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { MagneticButton } from "@/components/motion/MagneticButton";
import { NAV_LINKS, SITE } from "@/data/site";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-surface/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)]">
                <Sparkles className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-bold">TAMASHA</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-medium transition-colors hover:border-white/30 hover:text-brand-pink"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-muted-foreground">
              EXPLORE
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-muted-foreground">LEGAL</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Book an Event
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-muted-foreground">
              NEWSLETTER
            </h3>
            <p className="mt-5 text-sm text-muted-foreground">
              Early access to drops, presales and secret shows.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                toast.success("You're on the list. Watch your inbox.");
                setEmail("");
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="glass w-full rounded-full px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-brand"
              />
              <MagneticButton type="submit" className="shrink-0 px-5 py-3">
                Join
              </MagneticButton>
            </form>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-cyan" />
                <a href={`tel:${SITE.phone}`} className="hover:text-foreground">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-cyan" />
                <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Tamasha Entertainment Pvt. Ltd. All rights reserved.</p>
          <p>Made for people who collect moments, not things.</p>
        </div>
      </div>
    </footer>
  );
}