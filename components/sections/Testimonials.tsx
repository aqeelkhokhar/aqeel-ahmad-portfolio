import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow={`Signed off · ${testimonials.length} on record`}
        title="What clients say after launch."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={0.06 * i} className="h-full">
            <figure className="flex h-full flex-col rounded-md border border-border bg-card p-6 sm:p-8">
              <blockquote className="flex-1 font-heading text-lg font-medium leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-4">
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="label-mono mt-1 text-muted-foreground">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </div>
                </div>
                {t.linkedinUrl && (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.name} on LinkedIn`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
