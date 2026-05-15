"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type SectionRevealProps = HTMLMotionProps<"section"> & { delay?: number };

export function SectionReveal({ className, delay = 0, children, ...rest }: SectionRevealProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={sectionVariants}
      transition={{ delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & {
  as?: "div" | "ul" | "section";
  delay?: number;
  stagger?: number;
};

export function StaggerGroup({
  className,
  as = "div",
  delay = 0.05,
  stagger = 0.1,
  children,
  ...rest
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const shared = {
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, margin: "-10% 0px -10% 0px" } as const,
    variants,
    className: cn(className),
  };
  if (as === "ul") {
    return (
      <motion.ul {...shared} {...(rest as HTMLMotionProps<"ul">)}>
        {children}
      </motion.ul>
    );
  }
  if (as === "section") {
    return (
      <motion.section {...shared} {...(rest as HTMLMotionProps<"section">)}>
        {children}
      </motion.section>
    );
  }
  return (
    <motion.div {...shared} {...(rest as HTMLMotionProps<"div">)}>
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  as?: "div" | "li" | "article";
  direction?: "up" | "left" | "right";
  hover?: boolean;
};

export function StaggerItem({
  className,
  as = "div",
  direction = "up",
  hover = false,
  children,
  ...rest
}: StaggerItemProps) {
  const v =
    direction === "left"
      ? slideLeftVariants
      : direction === "right"
        ? slideRightVariants
        : itemVariants;
  const shared = {
    variants: v,
    whileHover: hover ? { y: -6, scale: 1.015 } : undefined,
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
    className: cn(className),
  };
  if (as === "li") {
    return (
      <motion.li {...shared} {...(rest as HTMLMotionProps<"li">)}>
        {children}
      </motion.li>
    );
  }
  if (as === "article") {
    return (
      <motion.article {...shared} {...(rest as HTMLMotionProps<"article">)}>
        {children}
      </motion.article>
    );
  }
  return (
    <motion.div {...shared} {...(rest as HTMLMotionProps<"div">)}>
      {children}
    </motion.div>
  );
}

export { itemVariants, sectionVariants };
