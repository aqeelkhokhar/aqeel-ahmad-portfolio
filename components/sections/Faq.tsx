import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { faq } from "@/data/faq";

// Native <details> accordion: accessible, indexable and zero-hydration.
export function Faq() {
  if (!faq.length) return null;

  return (
    <section id="faq" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow={`FAQ · ${faq.length} questions`}
        title="Answers before you ask."
        description="The questions hiring teams and founders raise most often on the first call."
      />

      <Reveal>
        <div className="border-t border-border">
          {faq.map((item) => (
            <details key={item.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-base font-semibold tracking-tight transition-colors hover:text-primary sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
