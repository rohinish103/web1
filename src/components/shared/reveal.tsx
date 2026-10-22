"use client";

import { type HTMLMotionProps } from "motion/react";
import * as m from "motion/react-m";

type RevealProps = { as?: "div" | "li"; delay?: number; y?: number } & HTMLMotionProps<"div">;

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ as = "div", delay = 0, y = 24, children, ...props }: RevealProps) {
  const Component = as === "li" ? m.li : m.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      {...(props as object)}
    >
      {children}
    </Component>
  );
}
