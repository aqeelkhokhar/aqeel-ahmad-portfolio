"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  if (!testimonials.length) return null;

  const t = testimonials[index];
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <AnimatedSection id="testimonials" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Kind words"
        title="What people say"
        description="Real quotes from teammates, managers and clients I've worked with."
      />

      <Card className="mx-auto max-w-3xl">
        <CardContent className="p-8 md:p-10">
          <Quote className="h-10 w-10 text-primary/40" />
          <p className="mt-4 text-lg leading-relaxed text-foreground/90 sm:text-xl">
            “{t.quote}”
          </p>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {t.avatar && (
                <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-border">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
              )}
              <div>
                <div className="font-heading text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
              </div>
              {t.linkedinUrl && (
                <Button asChild variant="ghost" size="icon" className="ml-1">
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            {testimonials.length > 1 && (
              <div className="flex items-center gap-1.5">
                <Button variant="outline" size="icon" onClick={prev} aria-label="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} aria-label="Next">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-muted"
                  }`}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
