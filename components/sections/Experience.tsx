import { Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/experience";
import { renderBoldHeading } from "@/lib/utils";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped"
        description="Roles, responsibilities and the wins along the way."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-6" />

        <StaggerGroup className="space-y-6" stagger={0.15}>
          {experience.map((job, idx) => (
            <StaggerItem key={idx} direction="left" className="relative pl-12 md:pl-16">
              <span className="absolute left-0 top-3 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-md md:h-12 md:w-12">
                <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold">{job.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {job.company} · {job.location} · {job.type}
                      </p>
                    </div>
                    <Badge variant={job.current ? "accent" : "outline"}>{job.period}</Badge>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((b, i) => {
                      const bold = renderBoldHeading(b);
                      return (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {bold ? (
                            <span className="text-foreground/80">
                              <span className="font-semibold text-foreground">{bold.heading}:</span>{" "}
                              {bold.body}
                            </span>
                          ) : (
                            <span className="text-foreground/80">{b}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
