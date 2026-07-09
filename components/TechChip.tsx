import { cn } from "@/lib/utils";

export function TechChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
