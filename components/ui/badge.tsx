import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-border text-muted-foreground",
        secondary: "border-transparent bg-muted text-foreground",
        outline: "border-border text-foreground",
        accent: "border-primary/40 text-primary",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
