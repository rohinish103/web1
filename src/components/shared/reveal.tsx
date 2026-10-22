"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface RevealProps extends HTMLMotionProps<"div"> {
  as?: "div" | "li";
  delay?: number;
  y?: number;
}

export function Reveal({ as = "div", delay = 0, y = 24, children, ...props }: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...(props as HTMLMotionProps<"div"> & HTMLMotionProps<"li">)}
    >
      {children}
    </Component>
  );
}
