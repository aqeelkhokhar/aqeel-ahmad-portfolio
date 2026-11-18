import Link from "next/link";
import { ArrowRight, CalendarCheck, FileDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { SectionHeading } from "@/components/SectionHeading";
import { TechChip } from "@/components/TechChip";
import { Footer } from "@/components/sections/Footer";
import { buttonVariants } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import type { TrackLandingData } from "@/data/tracks";
import { cn } from "@/lib/utils";

const stripBold = (s: string) => s.replace(/\*\*(.+?):\*\*\s*/, "$1: ");

export function TrackLanding({ track }: { track: TrackLandingData }) {
  const list = track.projectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <RevealObserver />
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
            {personalInfo.name}
            <span className="text-primary">.</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="label-mono hidden text-muted-foreground hover:text-foreground sm:inline">
              Full portfolio
            </Link>
            <a
              href={personalInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              <CalendarCheck className="h-4 w-4" />
              Book a call
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="container pb-14 pt-16 sm:pt-24">
          <span className="label-mono inline-flex items-center gap-2.5 text-muted-foreground">
            <span className="h-2 w-2 bg-primary" aria-hidden="true" />
            {track.eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            {track.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {track.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <CalendarCheck className="h-5 w-5" />
              Book a 15 minute intro call
            </a>
            <a href={track.cvHref} className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
              <FileDown className="h-5 w-5" />
              {track.cvLabel}
            </a>
          </div>
          <p className="label-mono mt-5 text-muted-foreground">
            Remote from Lahore, Pakistan (UTC+5) · {personalInfo.availability}
          </p>
        </section>

        <section className="container pb-16">
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {track.proof.map((p) => (
              <div key={p.label} className="border-b border-r border-border p-6">
                <div className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {p.value}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-12 sm:py-16">
          <SectionHeading eyebrow="Scope" title={track.buildTitle} />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <ul className="space-y-3">
              {track.builds.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
                  <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 bg-primary" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap content-start gap-2">
              {track.stack.map((t) => (
                <TechChip key={t}>{t}</TechChip>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 sm:py-16">
          <SectionHeading
            eyebrow={`Case studies · ${list.length} projects`}
            title="Selected work."
            description="Real client work with names withheld where contracts require it."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 4) * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-md border border-border bg-card p-6">
                  <div className="label-mono flex items-center justify-between gap-3 text-muted-foreground">
                    <span>{p.period}</span>
                    <span>{p.role}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-primary" aria-hidden="true" />
                        {stripBold(h)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 7).map((t) => (
                      <TechChip key={t}>{t}</TechChip>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container pb-24 pt-12">
          <div className="rounded-md border border-border bg-card p-8 sm:p-12">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-4xl">
              Let us talk about your roadmap.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A fixed-scope project from $3,000, a part-time retainer from $2,000 per month, or ongoing support from $25 per hour.
              Book a 15 minute call or send an email.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                <CalendarCheck className="h-5 w-5" />
                Book a call
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                {personalInfo.email}
              </a>
              <Link
                href={track.other.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                {track.other.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
