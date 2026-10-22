"use client";

import { BookmarkPlus, Mic, Volume2 } from "lucide-react";
import { motion } from "motion/react";

import { LogoMark } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const floatingGlyphs = [
  { glyph: "あ", className: "top-[6%] -left-[4%] text-rose-500", delay: "0s", rotate: "-8deg" },
  { glyph: "한", className: "top-[-4%] right-[18%] text-teal-600", delay: "1.2s", rotate: "6deg" },
  { glyph: "Ñ", className: "bottom-[30%] -right-[5%] text-amber-600", delay: "2.1s", rotate: "10deg" },
  { glyph: "中", className: "bottom-[-3%] right-[30%] text-red-500", delay: "0.6s", rotate: "-6deg" },
  { glyph: "अ", className: "top-[38%] -left-[9%] text-orange-500 hidden sm:flex", delay: "1.8s", rotate: "4deg" },
];

const floatingBubbles = [
  { text: "¡Hola!", className: "top-[18%] -right-[7%]", delay: "0.4s" },
  { text: "Bonjour !", className: "bottom-[14%] -right-[2%] hidden sm:block", delay: "1.6s" },
  { text: "안녕하세요", className: "-top-[7%] left-[16%] hidden sm:block", delay: "2.4s" },
];

export function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      role="img"
      aria-label="Preview of a Mimi lesson: Mimi greets the learner in Japanese with “Konnichiwa”, the learner replies, and a vocabulary card explains the word."
    >
      <div
        aria-hidden="true"
        className="absolute inset-[8%] -z-10 rounded-[3rem] bg-[conic-gradient(from_180deg_at_50%_50%,oklch(0.82_0.1_295),oklch(0.85_0.08_250),oklch(0.9_0.07_330),oklch(0.82_0.1_295))] opacity-70 blur-3xl"
      />

      {floatingGlyphs.map((g) => (
        <span
          key={g.glyph}
          aria-hidden="true"
          style={{ animationDelay: g.delay, ["--float-rotate" as string]: g.rotate }}
          className={cn(
            "font-jp absolute z-20 flex size-12 animate-float items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-xl font-semibold shadow-lift backdrop-blur sm:size-14 sm:text-2xl",
            g.className,
          )}
        >
          {g.glyph}
        </span>
      ))}

      {floatingBubbles.map((b) => (
        <span
          key={b.text}
          aria-hidden="true"
          style={{ animationDelay: b.delay }}
          className={cn(
            "absolute z-20 animate-float-slow rounded-2xl rounded-bl-md border border-white/80 bg-white/85 px-3 py-1.5 text-sm font-medium text-ink shadow-lift backdrop-blur",
            b.className,
          )}
        >
          {b.text}
        </span>
      ))}

      <div aria-hidden="true" className="relative z-10 mx-auto w-full max-w-[25rem] rounded-[2.25rem] border border-white/80 bg-white/75 p-2.5 shadow-lift backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-white to-[oklch(0.975_0.012_295)]">
          <div className="flex items-center gap-3 border-b border-violet/10 px-5 py-4">
            <div className="relative">
              <LogoMark className="size-10" />
              <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-white bg-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">Mimi</p>
              <p className="truncate text-xs text-muted-foreground">Japanese · Beginner · Greetings</p>
            </div>
            <span className="rounded-full bg-violet/10 px-2.5 py-1 text-[11px] font-medium text-violet">
              Lesson 1
            </span>
          </div>

          <div className="font-jp flex min-h-[19rem] flex-col gap-3 px-4 py-5">
            <Message delay={0.9} side="tutor">
              <p className="text-lg font-medium">こんにちは！</p>
              <p className="text-xs text-muted-foreground">Konnichiwa! · Hello!</p>
            </Message>
            <Message delay={1.6} side="learner">
              <p className="text-lg font-medium">こんにちは！</p>
            </Message>
            <Message delay={2.3} side="tutor">
              <p className="text-base font-medium">よくできました！お名前は？</p>
              <p className="text-xs text-muted-foreground">Yoku dekimashita! Onamae wa? · Well done! Your name?</p>
            </Message>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.4 }}
              className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-violet/8 px-3.5 py-3"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="size-1.5 rounded-full bg-violet/60"
                  animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex items-center gap-3 border-t border-violet/10 bg-white/70 px-4 py-3.5">
            <div className="flex h-9 flex-1 items-center gap-[3px] rounded-full bg-muted px-4">
              {Array.from({ length: 22 }).map((_, i) => (
                <span
                  key={i}
                  className="h-4 w-[3px] origin-center animate-wave rounded-full bg-violet/50"
                  style={{ animationDelay: `${(i % 7) * 0.12}s` }}
                />
              ))}
            </div>
            <span className="flex size-10 items-center justify-center rounded-full bg-violet text-white shadow-[0_6px_20px_-6px_oklch(0.55_0.2_292)]">
              <Mic className="size-4.5" />
            </span>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -20, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: -4 }}
        transition={{ delay: 1.3, duration: 0.9, ease }}
        className="absolute -bottom-10 -left-2 z-30 w-52 sm:-left-10 sm:w-60"
      >
        <div className="animate-float-slow rounded-3xl border border-white/80 bg-white/90 p-4 shadow-lift backdrop-blur-xl [animation-delay:1s]">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-rose-600 uppercase">
              New word
            </span>
            <div className="flex gap-1 text-muted-foreground">
              <Volume2 className="size-4" />
              <BookmarkPlus className="size-4" />
            </div>
          </div>
          <p className="font-jp mt-3 text-2xl font-semibold text-ink">こんにちは</p>
          <p className="mt-0.5 text-sm font-medium text-violet">Konnichiwa</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Hello · Good afternoon. A friendly daytime greeting.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Message({
  children,
  side,
  delay,
}: {
  children: React.ReactNode;
  side: "tutor" | "learner";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease }}
      className={cn(
        "max-w-[85%] rounded-2xl px-4 py-2.5",
        side === "tutor"
          ? "self-start rounded-bl-md bg-violet/8 text-ink"
          : "self-end rounded-br-md bg-gradient-to-br from-violet to-[oklch(0.6_0.16_265)] text-white [&_p]:text-white",
      )}
    >
      {children}
    </motion.div>
  );
}
