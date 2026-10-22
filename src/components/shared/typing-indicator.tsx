"use client";

import * as m from "motion/react-m";

import { cn } from "@/lib/utils";

export function TypingIndicator({ className, label }: { className?: string; label?: string }) {
  return (
    <div
      role={label ? "status" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-violet/8 px-4 py-3.5", className)}
    >
      {[0, 1, 2].map((i) => (
        <m.span
          key={i}
          className="size-1.5 rounded-full bg-violet/60"
          animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}
