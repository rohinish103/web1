"use client";

import { Eye, EyeOff, Info, Mic, RotateCcw, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Tabs as TabsPrimitive } from "radix-ui";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading, SerifAccent } from "@/components/shared/section-heading";
import { scenarios } from "@/data/scenarios";
import { cn } from "@/lib/utils";
import type { ConversationTurn, Scenario } from "@/types/learning";

const ease = [0.22, 1, 0.36, 1] as const;

export function Scenarios() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const active = scenarios.find((s) => s.id === activeId) ?? scenarios[0];

  return (
    <section id="scenarios" aria-labelledby="scenarios-title" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_75%_55%,oklch(0.9_0.06_250/0.55),transparent),radial-gradient(ellipse_40%_40%_at_20%_40%,oklch(0.92_0.05_320/0.5),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="scenarios-title"
          eyebrow="Conversation preview"
          title={
            <>
              Practice the conversations <SerifAccent>that matter to you.</SerifAccent>
            </>
          }
          description="Choose a moment and watch how a lesson might unfold. These are scripted samples to show the experience — not a live AI conversation."
        />

        <Reveal className="mt-14">
          <TabsPrimitive.Root
            value={activeId}
            onValueChange={setActiveId}
            orientation="vertical"
            className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6"
          >
            <TabsPrimitive.List
              aria-label="Conversation scenarios"
              className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {scenarios.map((scenario) => (
                <ScenarioTrigger key={scenario.id} scenario={scenario} active={scenario.id === activeId} />
              ))}
            </TabsPrimitive.List>

            {scenarios.map((scenario) => (
              <TabsPrimitive.Content
                key={scenario.id}
                value={scenario.id}
                className="rounded-[2rem] outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {scenario.id === active.id ? <ChatPreview scenario={scenario} /> : null}
              </TabsPrimitive.Content>
            ))}
          </TabsPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}

function ScenarioTrigger({ scenario, active }: { scenario: Scenario; active: boolean }) {
  const Icon = scenario.icon;
  return (
    <TabsPrimitive.Trigger
      value={scenario.id}
      className={cn(
        "group relative flex w-64 shrink-0 snap-start items-center gap-4 rounded-3xl border p-4 text-left outline-none transition-all duration-300 focus-visible:ring-3 focus-visible:ring-ring/50 lg:w-full",
        active
          ? "border-violet/25 bg-white shadow-lift"
          : "border-white/80 bg-white/55 shadow-soft hover:-translate-y-0.5 hover:bg-white/85",
      )}
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-soft transition-transform duration-500 group-hover:scale-105",
          scenario.accent,
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-ink">{scenario.title}</span>
        <span className="block truncate text-sm text-muted-foreground">
          {scenario.languageName} · {scenario.place}
        </span>
      </span>
      {active ? (
        <motion.span
          layoutId="scenario-indicator"
          className="absolute top-1/2 -left-px hidden h-8 w-1 -translate-y-1/2 rounded-full bg-violet lg:block"
          aria-hidden="true"
        />
      ) : null}
    </TabsPrimitive.Trigger>
  );
}

function usePlayback(turns: ConversationTurn[], start: boolean, replayKey: number) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!start) return;
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    at(0, () => {
      setTyping(false);
      setVisible(reduce ? turns.length : 0);
    });
    if (reduce) return () => timers.forEach(clearTimeout);

    let time = 350;
    turns.forEach((turn, i) => {
      if (turn.speaker === "tutor") {
        at(time, () => setTyping(true));
        time += 950;
      } else {
        time += 650;
      }
      at(time, () => {
        setTyping(false);
        setVisible(i + 1);
      });
      time += 600 + turn.text.length * 14;
    });

    return () => timers.forEach(clearTimeout);
  }, [turns, start, replayKey, reduce]);

  return { visible, typing, done: visible >= turns.length };
}

function ChatPreview({ scenario }: { scenario: Scenario }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-120px" });
  const [replayKey, setReplayKey] = useState(0);
  const [showTranslations, setShowTranslations] = useState(true);
  const { visible, typing, done } = usePlayback(scenario.turns, inView, replayKey);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible, typing, showTranslations]);

  return (
    <div
      ref={containerRef}
      className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-lift backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 border-b border-violet/10 px-5 py-4">
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-semibold text-white",
            scenario.accent,
          )}
          aria-hidden="true"
        >
          {scenario.tutorName[0]}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-ink">
            {scenario.tutorName}{" "}
            <span className="font-normal text-muted-foreground">· sample {scenario.languageName} tutor</span>
          </p>
          <p className="truncate text-sm text-muted-foreground">{scenario.place}</p>
        </div>
        <span className="hidden items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 sm:inline-flex">
          <Sparkles className="size-3" aria-hidden="true" />
          Preview
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 bg-[oklch(0.975_0.012_295)] px-5 py-2.5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Info className="size-3.5" aria-hidden="true" />
          Scripted sample conversation
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setShowTranslations((v) => !v)}
            aria-pressed={showTranslations}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium text-ink outline-none transition hover:bg-white focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {showTranslations ? <EyeOff className="size-3.5" aria-hidden="true" /> : <Eye className="size-3.5" aria-hidden="true" />}
            {showTranslations ? "Hide" : "Show"} translations
          </button>
          <button
            type="button"
            onClick={() => setReplayKey((k) => k + 1)}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium text-ink outline-none transition hover:bg-white focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Replay
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex h-[26rem] flex-col gap-3 overflow-y-auto px-4 py-5 sm:px-6"
        aria-live="polite"
        aria-label={`Sample conversation: ${scenario.title}`}
        lang={scenario.language}
      >
        <AnimatePresence initial={false}>
          {scenario.turns.slice(0, visible).map((turn) => (
            <ChatMessage
              key={`${replayKey}-${turn.id}`}
              turn={turn}
              tutorName={scenario.tutorName}
              showTranslation={showTranslations}
            />
          ))}
          {typing ? (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-violet/8 px-4 py-3.5"
              aria-label={`${scenario.tutorName} is typing`}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="size-1.5 rounded-full bg-violet/60"
                  animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {done ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            lang="en"
          >
            End of preview
          </motion.p>
        ) : null}
      </div>

      <div className="flex items-center gap-3 border-t border-violet/10 bg-white/70 px-4 py-3.5" lang="en">
        <div className="flex h-11 flex-1 items-center rounded-full bg-muted px-4 text-sm text-muted-foreground">
          Live conversations are coming soon
        </div>
        <button
          type="button"
          disabled
          aria-label="Microphone unavailable in preview"
          className="flex size-11 cursor-not-allowed items-center justify-center rounded-full bg-violet/30 text-white"
        >
          <Mic className="size-4.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function ChatMessage({
  turn,
  tutorName,
  showTranslation,
}: {
  turn: ConversationTurn;
  tutorName: string;
  showTranslation: boolean;
}) {
  const isTutor = turn.speaker === "tutor";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease }}
      className={cn("flex max-w-[85%] flex-col gap-1.5", isTutor ? "self-start items-start" : "self-end items-end")}
    >
      <span className="px-1 text-[11px] font-medium text-muted-foreground" lang="en">
        {isTutor ? tutorName : "You"}
      </span>
      <div
        className={cn(
          "rounded-2xl px-4 py-2.5",
          isTutor
            ? "rounded-bl-md bg-violet/8 text-ink"
            : "rounded-br-md bg-gradient-to-br from-violet to-[oklch(0.6_0.16_265)] text-white",
        )}
      >
        <p className="font-jp text-[0.95rem] font-medium">{turn.text}</p>
        {turn.romanization ? (
          <p className={cn("mt-0.5 text-xs", isTutor ? "text-violet" : "text-white/80")}>{turn.romanization}</p>
        ) : null}
        <AnimatePresence initial={false}>
          {showTranslation && turn.translation ? (
            <motion.p
              lang="en"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={cn("overflow-hidden text-xs", isTutor ? "text-muted-foreground" : "text-white/75")}
            >
              <span className="block pt-1">{turn.translation}</span>
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
      {turn.correction ? (
        <motion.div
          lang="en"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="max-w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-left"
        >
          <p className="text-[11px] font-semibold tracking-wide text-emerald-700 uppercase">Gentle tip</p>
          <p className="font-jp mt-0.5 text-sm font-medium text-ink">{turn.correction.suggestion}</p>
          <p className="mt-0.5 text-xs text-emerald-800/80">{turn.correction.note}</p>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
