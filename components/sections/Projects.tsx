"use client";

import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TechChip } from "@/components/TechChip";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { renderBoldHeading } from "@/lib/utils";
import { cn } from "@/lib/utils";

// Release IDs run newest-first: the top row is R-<total>, the last is R-001.
// The numbering encodes the real count of shipped products.
const releaseId = (index: number) => `R-${String(projects.length - index).padStart(3, "0")}`;

const platformOf = (p: Project) =>
  p.technologies.some((t) => /flutter|react native/i.test(t)) ? "Mobile" : "Web";

function DialogSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="label-mono mb-3 flex items-center gap-2 text-muted-foreground">
      <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
      {children}
    </h4>
  );
}

export function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <section id="projects" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow={`Release history · ${projects.length} shipped since 2020`}
        title="Every release, on record."
        description="Real products in production, with client names withheld where contracts require it. Open any entry for the full case study."
      />

      <div className="border-t border-border">
        {projects.map((project, index) => {
          const featured = Boolean(project.featured);
          return (
            <Reveal key={project.slug} delay={Math.min(index, 4) * 0.05}>
              <button
                onClick={() => setOpenSlug(project.slug)}
                className="group grid w-full grid-cols-1 items-start gap-x-6 gap-y-3 border-b border-border px-3 py-7 text-left transition-colors hover:bg-muted/50 md:grid-cols-12 md:px-4"
                aria-label={`Open case study: ${project.title}`}
              >
                <div className="md:col-span-2">
                  <div
                    className={cn(
                      "font-mono text-xs font-medium tracking-wider",
                      featured ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {releaseId(index)}
                    {featured && <span className="ml-2">★</span>}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-muted-foreground/80">
                    {project.period}
                  </div>
                </div>

                <div className="md:col-span-7">
                  <h3 className="font-heading text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                    {project.title}
                  </h3>
                  <div className="label-mono mt-1.5 text-muted-foreground">
                    {project.role} · {project.company}
                  </div>
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-start justify-between gap-3 md:col-span-3 md:flex-col md:items-end">
                  <span className="label-mono rounded-sm border border-border px-2 py-1 text-muted-foreground">
                    {platformOf(project)}
                  </span>
                  <span className="hidden text-right font-mono text-[11px] leading-relaxed text-muted-foreground/80 md:block">
                    {project.technologies.slice(0, 3).join(" · ")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogContent>
          {open && (
            <>
              <DialogHeader>
                <div className="label-mono flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">
                    {releaseId(projects.findIndex((p) => p.slug === open.slug))}
                  </span>
                  {open.period} · {platformOf(open)}
                </div>
                <DialogTitle className="font-heading text-2xl font-semibold tracking-tight">
                  {open.title}
                </DialogTitle>
                <div className="text-sm text-muted-foreground">
                  {open.role} · {open.company}
                </div>
              </DialogHeader>

              <p className="text-base leading-relaxed text-foreground/90">{open.description}</p>

              {open.highlights.length > 0 && (
                <section>
                  <DialogSectionLabel>Highlights</DialogSectionLabel>
                  <ul className="space-y-2.5">
                    {open.highlights.map((h, i) => {
                      const bold = renderBoldHeading(h);
                      return (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed">
                          <span
                            className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-primary"
                            aria-hidden="true"
                          />
                          {bold ? (
                            <span className="text-foreground/80">
                              <span className="font-semibold text-foreground">{bold.heading}:</span>{" "}
                              {bold.body}
                            </span>
                          ) : (
                            <span className="text-foreground/80">{h}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}

              {open.impacts.length > 0 && (
                <section>
                  <DialogSectionLabel>Impact</DialogSectionLabel>
                  <ul className="space-y-2.5">
                    {open.impacts.map((imp, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-primary"
                          aria-hidden="true"
                        />
                        <span className="text-foreground/80">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <DialogSectionLabel>Stack</DialogSectionLabel>
                <div className="flex flex-wrap gap-2">
                  {open.technologies.map((t) => (
                    <TechChip key={t}>{t}</TechChip>
                  ))}
                </div>
              </section>

              {(open.liveUrl || open.githubUrl) && (
                <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
                  {open.liveUrl && (
                    <Button asChild>
                      <a href={open.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> View project
                      </a>
                    </Button>
                  )}
                  {open.githubUrl && (
                    <Button asChild variant="outline">
                      <a href={open.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> View code
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
