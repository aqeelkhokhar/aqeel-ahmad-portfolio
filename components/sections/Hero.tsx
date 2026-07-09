"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { CountUp } from "@/components/motion/CountUp";
import { useBooking } from "@/components/BookingProvider";
import { personalInfo } from "@/data/personal";
import { stats } from "@/data/stats";
import { socialLinks } from "@/data/social";
import { projects } from "@/data/projects";

// Static "barcode" strip for the manifest card footer — widths in px.
const BARCODE = [3, 1, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2];

const MANIFEST_ROWS: Array<{ label: string; value: string }> = [
  { label: "Role", value: "Sr. Mobile & Full-Stack" },
  { label: "Stack", value: "React Native · Flutter · Next.js" },
  { label: "Base", value: `${personalInfo.location} · GMT+5` },
  { label: "Shipped", value: `${projects.length} products · 3 stores` },
];

export function Hero() {
  const booking = useBooking();

  return (
    <section id="home" className="relative">
      {/* Follows the page theme (ink or paper) with a crisp hairline boundary
          at the bottom, no seam fade. */}
      <div className="flex min-h-[94svh] flex-col justify-center border-b border-border bg-background pb-14 pt-28 text-foreground sm:pt-32">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* CSS-only entrance (reveal-*) so the hero paints and animates
                before the JS bundle hydrates. */}
            <div className="lg:col-span-7">
              <p className="label-mono reveal-up inline-flex items-center gap-2.5 text-muted-foreground">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {personalInfo.availability}
              </p>

              <h1 className="mt-6 font-heading text-[2.75rem] font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                {/* Crawler/screen-reader text: the visual headline is a slogan,
                    so the indexable h1 content carries name + target roles. */}
                <span className="sr-only">
                  {personalInfo.name}, Senior Mobile Engineer: React Native, Flutter, native iOS
                  and Android, and full stack web developer.
                </span>
                {personalInfo.heroHeadline.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <span className="reveal-line block" style={{ animationDelay: `${120 + i * 100}ms` }}>
                      {line}
                      {i === personalInfo.heroHeadline.length - 1 && (
                        <span className="text-primary">.</span>
                      )}
                    </span>
                  </span>
                ))}
              </h1>

              <p
                className="reveal-up mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                style={{ animationDelay: "280ms" }}
              >
                {personalInfo.heroIntro}
              </p>

              <div
                className="reveal-up mt-9 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "360ms" }}
              >
                <Magnetic>
                  <Button size="lg" onClick={booking.open} data-cursor data-cursor-label="Book">
                    Book a discovery call
                  </Button>
                </Magnetic>
                <Button asChild variant="outline" size="lg">
                  <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer" data-cursor>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>

              <div
                className="reveal-up mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
                style={{ animationDelay: "440ms" }}
              >
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
            </div>

            {/* Signature element: the release manifest / crew badge. */}
            <div className="reveal-scale lg:col-span-5" style={{ animationDelay: "220ms" }}>
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md border border-border bg-card lg:ml-auto lg:mr-0">
                <div className="flex items-center justify-between border-b border-border px-5 py-3">
                  <span className="label-mono text-muted-foreground">Release manifest</span>
                  <span className="label-mono text-primary">AA-2026</span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name}, Senior Mobile Engineer and Full Stack Developer`}
                    fill
                    sizes="(min-width: 1024px) 384px, 100vw"
                    className="object-cover object-[center_18%]"
                    priority
                  />
                </div>

                <dl className="px-5">
                  <div className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="label-mono text-muted-foreground">Engineer</dt>
                    <dd className="text-right font-heading text-base font-semibold">
                      {personalInfo.name}
                    </dd>
                  </div>
                  {MANIFEST_ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-t border-border py-3"
                    >
                      <dt className="label-mono flex-shrink-0 text-muted-foreground">{row.label}</dt>
                      <dd className="text-right text-sm text-foreground/90">{row.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-4 border-t border-border py-3">
                    <dt className="label-mono text-muted-foreground">Status</dt>
                    <dd className="label-mono inline-flex items-center gap-2 text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      Open for contracts
                    </dd>
                  </div>
                </dl>

                <div className="flex items-center justify-between border-t border-border px-5 py-3">
                  <div className="flex h-5 items-end gap-[2px]" aria-hidden="true">
                    {BARCODE.map((w, i) => (
                      <span
                        key={i}
                        className="inline-block h-full bg-foreground/60"
                        style={{ width: `${w}px` }}
                      />
                    ))}
                  </div>
                  <span className="label-mono text-muted-foreground">EST. 2020 · LHE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Proof strip */}
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="reveal-up" style={{ animationDelay: `${500 + i * 90}ms` }}>
                <div className="font-heading text-3xl font-bold sm:text-4xl">
                  <CountUp value={s.value} />
                </div>
                <div className="label-mono mt-2 text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
