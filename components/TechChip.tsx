import { cn } from "@/lib/utils";

export function TechChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80 ring-1 ring-inset ring-border/60",
        className
      )}
    >
      {children}
    </span>
  );
}
