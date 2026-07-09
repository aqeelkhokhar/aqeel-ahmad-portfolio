import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";
import { renderBoldHeading } from "@/lib/utils";

// Changelog layout: period in the mono voice on the left, role entry on the
// right. Current roles carry a live status marker.
export function Experience() {
  return (
    <section id="experience" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Changelog · 2020 to present"
        title="Associate to team lead, one release at a time."
        description="Every role, and what actually shipped during it."
      />

      <div className="border-t border-border">
        {experience.map((job, idx) => (
          <Reveal key={`${job.title}-${job.period}`} delay={Math.min(idx, 3) * 0.06}>
            <article className="grid gap-x-8 gap-y-4 border-b border-border py-9 md:grid-cols-12">
              <div className="md:col-span-3">
                <div className="font-mono text-xs font-medium tracking-wider text-foreground/90">
                  {job.period}
                </div>
                {job.current && (
                  <div className="label-mono mt-2 inline-flex items-center gap-2 text-primary">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    Current
                  </div>
                )}
                <div className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  {job.location}
                  <br />
                  {job.type}
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {job.title}
                </h3>
                <div className="mt-1 text-sm font-medium text-muted-foreground">{job.company}</div>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b, i) => {
                    const bold = renderBoldHeading(b);
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
                          <span className="text-foreground/80">{b}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
