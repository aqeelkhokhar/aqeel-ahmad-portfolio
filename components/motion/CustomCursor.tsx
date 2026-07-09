"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { usePointerFine } from "@/hooks/usePointerFine";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const INTERACTIVE = "a, button, [role='button'], [data-cursor]";
// Native cursor stays (no cursor:none) so text selection, inputs and drag
// behavior are untouched; the ring is purely decorative and hides over
// form fields where it would just add noise.
const HIDE_OVER = "input, textarea, select, [contenteditable]";

export function CustomCursor() {
  const fine = usePointerFine();
  const reduced = usePrefersReducedMotion();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 900, damping: 40 });
  const dotY = useSpring(y, { stiffness: 900, damping: 40 });

  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as Element | null;
      setVisible(!el?.closest(HIDE_OVER));
      const target = el?.closest(INTERACTIVE);
      setHovering(Boolean(target));
      setLabel(target?.getAttribute("data-cursor-label") ?? "");
    };
    const leave = () => setVisible(false);
    const downFn = () => setDown(true);
    const upFn = () => setDown(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", downFn);
    window.addEventListener("pointerup", upFn);
    document.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", downFn);
      window.removeEventListener("pointerup", upFn);
      document.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringScale = (hovering ? 1.9 : 1) * (down ? 0.82 : 1);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <m.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          width: 38,
          height: 38,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovering
            ? "hsl(var(--accent))"
            : "hsl(var(--muted-foreground) / 0.5)",
          backgroundColor: hovering
            ? "hsl(var(--accent) / 0.12)"
            : "transparent",
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: ringScale }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {label ? (
          <span className="font-mono text-[0.55rem] font-medium uppercase tracking-widest text-accent">
            {label}
          </span>
        ) : null}
      </m.div>

      <m.div
        className="absolute left-0 top-0 rounded-full bg-accent will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          width: 7,
          height: 7,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible && !hovering ? 1 : 0,
        }}
      />
    </div>
  );
}
