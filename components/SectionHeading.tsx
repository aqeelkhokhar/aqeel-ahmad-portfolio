import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

const delay = (ms: number) => ({ "--gr-delay": `${ms}ms` }) as CSSProperties;

// Document-style section header with an orchestrated entrance: the hairline
// rule draws across, the signal square stamps in, the title rises out of a
// clip and the description follows (gr-* classes, see globals.css).
export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <Reveal
      variant="group"
      className={cn("mb-12 sm:mb-16", align === "center" && "text-center", className)}
    >
      <div className="gr-rule h-px w-full bg-border" aria-hidden="true" />
      <div className="pt-6">
        {eyebrow && (
          <span
            className={cn(
              "label-mono inline-flex items-center gap-2.5 text-muted-foreground",
              align === "center" && "justify-center"
            )}
          >
            <span className="gr-stamp h-2 w-2 flex-shrink-0 bg-primary" style={delay(150)} aria-hidden="true" />
            <span className="gr-fade" style={delay(100)}>
              {eyebrow}
            </span>
          </span>
        )}
        <h2 className="mt-4 overflow-hidden font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
          <span className="gr-line block pb-1" style={delay(180)}>
            {title}
          </span>
        </h2>
        {description && (
          <p
            className={cn(
              "gr-fade mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto"
            )}
            style={delay(320)}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
