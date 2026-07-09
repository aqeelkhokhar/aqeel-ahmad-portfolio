import { Fragment } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/data/skills";

// Spec-sheet layout: category in the mono "manifest voice" on the left,
// tools as plain running text on the right. No chip soup.
export function Skills() {
  return (
    <section id="skills" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow={`Spec sheet · ${skills.length} categories`}
        title="The stack, in full."
        description="Every tool here has shipped to production, nothing listed from a tutorial."
      />

      <Reveal>
        <dl className="border-y border-border">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-y-1 border-b border-border py-4 last:border-b-0 md:grid-cols-12 md:gap-x-8"
            >
              <dt className="label-mono pt-1 text-muted-foreground md:col-span-4 lg:col-span-3">
                {group.category}
              </dt>
              <dd className="text-sm leading-relaxed text-foreground/85 md:col-span-8 lg:col-span-9">
                {group.items.map((item, i) => (
                  <Fragment key={item}>
                    {i > 0 && <span className="mx-2 text-muted-foreground/60">·</span>}
                    <span className="inline-block">{item}</span>
                  </Fragment>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
