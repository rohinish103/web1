import Link from "next/link";
import { useId } from "react";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8", className)}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="0.55" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5c7.73 0 13.5 5.3 13.5 12.25S23.73 27 16 27c-1.5 0-2.95-.2-4.3-.57L6 29.5l1.2-5.2C4.3 22.06 2.5 18.6 2.5 14.75 2.5 7.8 8.27 2.5 16 2.5Z"
        fill={`url(#${id}-g)`}
      />
      <path
        d="M9.5 18.5v-4.25a3.25 3.25 0 0 1 6.5 0v4.25m0-4.25a3.25 3.25 0 0 1 6.5 0v4.25"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24.5" cy="8.5" r="1.6" fill="#fff" opacity="0.9" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
      aria-label="Mimi home"
    >
      <LogoMark className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
      <span className="text-xl font-semibold tracking-tight text-ink">mimi</span>
    </Link>
  );
}
