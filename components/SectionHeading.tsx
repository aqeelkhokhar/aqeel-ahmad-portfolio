import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

// Document-style section header: hairline rule, mono "manifest" eyebrow with
// a signal square, then the display title. Left-aligned by default.
export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <Reveal
      className={cn(
        "mb-12 border-t border-border pt-6 sm:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "label-mono inline-flex items-center gap-2.5 text-muted-foreground",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-2 w-2 flex-shrink-0 bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
