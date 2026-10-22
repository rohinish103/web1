"use client";

import { motion } from "motion/react";
import { Children } from "react";

export function HeroIntro({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-7">
      {Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
