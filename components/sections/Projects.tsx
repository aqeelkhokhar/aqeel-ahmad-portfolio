"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Zap, Star } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { TechChip } from "@/components/TechChip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/data/projects";
import { renderBoldHeading } from "@/lib/utils";

export function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <AnimatedSection id="projects" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects that shipped"
        description="A snapshot of mobile products I've architected, built, and released to real users."
      />

      <StaggerGroup className="grid gap-6 md:grid-cols-2" stagger={0.08}>
        {projects.map((project) => (
          <StaggerItem key={project.slug} hover className="h-full">
            <Card
              className="group relative flex h-full flex-col overflow-hidden transition-shadow hover:shadow-2xl"
            >
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-muted">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="grid h-full place-items-center">
                  <Sparkles className="h-12 w-12 text-primary/40" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {project.featured && (
                <Badge
                  variant="accent"
                  className="absolute left-4 top-4 gap-1"
                >
                  <Star className="h-3 w-3" /> Featured
                </Badge>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-lg font-bold leading-tight">
                  {project.title}
                </h3>
                <span className="whitespace-nowrap rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <div className="mt-1 text-sm font-medium text-primary">
                {project.role} · {project.company}
              </div>
              <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((t) => (
                  <TechChip key={t}>{t}</TechChip>
                ))}
                {project.technologies.length > 4 && (
                  <TechChip>+{project.technologies.length - 4}</TechChip>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setOpenSlug(project.slug)}
                  className="text-primary hover:text-primary"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-1">
                  {project.githubUrl && (
                    <Button asChild variant="ghost" size="icon">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repo"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild variant="ghost" size="icon">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogContent>
          {open && (
            <>
              <DialogHeader>
                <DialogTitle>{open.title}</DialogTitle>
                <div className="mt-1 text-sm text-muted-foreground">
                  {open.role} · {open.company} · {open.period}
                </div>
              </DialogHeader>

              {open.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src={open.image}
                    alt={`${open.title} preview`}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-base leading-relaxed text-foreground/90">
                {open.description}
              </p>

              {open.highlights.length > 0 && (
                <section>
                  <h4 className="mb-3 inline-flex items-center gap-2 font-heading text-lg font-bold">
                    <Sparkles className="h-4 w-4 text-primary" /> Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {open.highlights.map((h, i) => {
                      const bold = renderBoldHeading(h);
                      return (
                        <li key={i} className="flex gap-2.5 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
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
                  <h4 className="mb-3 inline-flex items-center gap-2 font-heading text-lg font-bold">
                    <Zap className="h-4 w-4 text-accent" /> Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {open.impacts.map((imp, i) => (
                      <li key={i} className="flex gap-2.5 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="text-foreground/80">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <h4 className="mb-3 font-heading text-lg font-bold">Tech stack</h4>
                <div className="flex flex-wrap gap-2">
                  {open.technologies.map((t) => (
                    <TechChip key={t}>{t}</TechChip>
                  ))}
                </div>
              </section>

              {(open.liveUrl || open.githubUrl) && (
                <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
                  {open.liveUrl && (
                    <Button asChild variant="gradient">
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
    </AnimatedSection>
  );
}

