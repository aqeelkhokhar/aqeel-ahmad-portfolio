import type { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: "up" | "pop" | "side";
  /** Seconds. */
  delay?: number;
}

// Server component: renders plain markup tagged data-reveal; RevealObserver
// (client) adds .is-in when it scrolls into view and CSS runs the animation.
// Content stays visible without JS because hiding is gated on html[data-js]
// (see globals.css).
export function Reveal({
  children,
  className,
  as: Tag = "div",
  variant = "up",
  delay,
}: RevealProps) {
  const style = delay
    ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag
      data-reveal={variant === "up" ? "" : variant}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
