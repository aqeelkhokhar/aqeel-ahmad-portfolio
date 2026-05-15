"use client";

import { Check, ArrowRight, Star } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatedSection id="services" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Services"
        title="Ways we can work together"
        description="Three packaged engagements. Pick the one that matches where your mobile product is today."
      />

      <StaggerGroup className="grid gap-6 md:grid-cols-3" stagger={0.12}>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.title} hover>
              <Card
                className={cn(
                  "relative flex h-full flex-col overflow-hidden transition-shadow hover:shadow-2xl",
                  service.featured && "ring-2 ring-primary/40"
                )}
              >
                {service.featured && (
                  <div className="absolute right-4 top-4">
                    <Badge variant="accent" className="gap-1">
                      <Star className="h-3 w-3" /> Most popular
                    </Badge>
                  </div>
                )}
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.pitch}</p>

                  <ul className="mt-5 space-y-2.5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {service.timeline}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={scrollToContact}
                      className="text-primary hover:text-primary"
                    >
                      Discuss this
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </AnimatedSection>
  );
}
