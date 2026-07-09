import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { education } from "@/data/education";

export function Education() {
  if (!education.length) return null;

  return (
    <section id="education" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading eyebrow="Education" title="Foundations." />

      <Reveal>
        <div className="border-t border-border">
          {education.map((item) => (
            <div
              key={item.institution}
              className="grid gap-x-8 gap-y-1 border-b border-border py-5 md:grid-cols-12"
            >
              <div className="font-mono text-xs tracking-wider text-muted-foreground md:col-span-3 md:pt-1">
                {item.period}
              </div>
              <div className="md:col-span-9">
                <div className="font-heading text-base font-semibold">
                  {item.degree}
                  {item.field ? `, ${item.field}` : ""}
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">{item.institution}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
