"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { useBooking } from "@/components/BookingProvider";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { whatsappLink } from "@/lib/utils";

export function Contact() {
  const booking = useBooking();
  const wa = whatsappLink(
    personalInfo.countryCode,
    personalInfo.phone,
    `Hi ${personalInfo.name.split(" ")[0]}, I would love to chat about a mobile project.`
  );
  const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    "Mobile project enquiry"
  )}`;

  const channels = [
    { label: "Email", value: personalInfo.email, href: mailto, external: false },
    {
      label: "WhatsApp",
      value: `+${personalInfo.countryCode} ${personalInfo.phone}`,
      href: wa,
      external: true,
    },
    { label: "Base", value: `${personalInfo.location} · GMT+5 · replies < 24h` },
  ];

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="border-t border-border bg-background py-24 text-foreground sm:py-32">
        <div className="container">
          <Reveal>
            <span className="label-mono inline-flex items-center gap-2.5 text-muted-foreground">
              <span className="h-2 w-2 bg-primary" aria-hidden="true" />
              Next release
            </span>
            <h2 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Ship yours next<span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The fastest way to start is a 20 minute discovery call. It is free, zero pressure,
              and you leave with a clear read on scope either way.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Button size="lg" onClick={booking.open} data-cursor data-cursor-label="Book">
                  Book a discovery call
                </Button>
              </Magnetic>
              <Button asChild variant="outline" size="lg">
                <a href={wa} target="_blank" rel="noopener noreferrer" data-cursor>
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-16 grid gap-x-8 gap-y-8 border-t border-border pt-8 sm:grid-cols-3">
              {channels.map((c) => (
                <div key={c.label}>
                  <dt className="label-mono text-muted-foreground">{c.label}</dt>
                  <dd className="mt-2 text-sm text-foreground/90">
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group inline-flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
                      >
                        {c.value}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
