"use client";

import { Eye, EyeOff, Info, Mic, RotateCcw, Sparkles } from "lucide-react";
import { AnimatePresence, useInView } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";

import { ChatBubble } from "@/components/shared/chat";
import { TypingIndicator } from "@/components/shared/typing-indicator";
import { usePlayback } from "@/hooks/use-playback";
import { cn } from "@/lib/utils";
import type { ConversationTurn, Scenario } from "@/types/learning";

const ease = [0.22, 1, 0.36, 1] as const;

const toolbarButton =
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 font-medium text-ink outline-none transition hover:bg-white focus-visible:ring-3 focus-visible:ring-ring/50";

/** A scripted, non-interactive chat that plays one scenario. Clearly labelled as a preview. */
export function ScenarioChat({ scenario }: { scenario: Scenario }) {
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
    <div ref={containerRef} className="glass flex h-full flex-col overflow-hidden rounded-[2rem] shadow-lift">
      <div className="flex items-center gap-3 border-b border-violet/10 px-5 py-4">
        <span
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-semibold text-white",
            scenario.accent,
          )}
          aria-hidden="true"
        >
          {scenario.tutorName[0]}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-ink">
            {scenario.tutorName}{" "}
            <span className="font-normal text-muted-foreground">· sample {scenario.languageName} tutor</span>
          </p>
          <p className="truncate text-sm text-muted-foreground">{scenario.place}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
          <Sparkles className="size-3" aria-hidden="true" />
          Preview
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 bg-[oklch(0.975_0.012_295)] px-4 py-2 text-xs text-muted-foreground sm:px-5">
        <span className="inline-flex items-center gap-1.5">
          <Info className="size-3.5 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">Scripted sample conversation</span>
          <span className="sm:hidden">Scripted sample</span>
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setShowTranslations((v) => !v)}
            aria-pressed={showTranslations}
            className={toolbarButton}
          >
            {showTranslations ? (
              <EyeOff className="size-3.5" aria-hidden="true" />
            ) : (
              <Eye className="size-3.5" aria-hidden="true" />
            )}
            <span>
              {showTranslations ? "Hide" : "Show"}
              <span className="hidden sm:inline"> translations</span>
            </span>
          </button>
          <button type="button" onClick={() => setReplayKey((k) => k + 1)} className={toolbarButton}>
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Replay
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        role="log"
        tabIndex={0}
        aria-label={`Sample conversation: ${scenario.title}`}
        className="flex h-[26rem] flex-col gap-3 overflow-y-auto px-4 py-5 outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 sm:px-6"
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
            <m.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <TypingIndicator label={`${scenario.tutorName} is typing`} />
            </m.div>
          ) : null}
        </AnimatePresence>

        {done ? (
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            lang="en"
          >
            End of preview
          </m.p>
        ) : null}
      </div>

      <div className="flex items-center gap-3 border-t border-violet/10 bg-white/70 px-4 py-3.5" lang="en">
        <div className="flex h-11 min-w-0 flex-1 items-center rounded-full bg-muted px-4 text-sm text-muted-foreground">
          <span className="truncate">Live conversations are coming soon</span>
        </div>
        <button
          type="button"
          disabled
          aria-label="Microphone unavailable in preview"
          className="flex size-11 shrink-0 cursor-not-allowed items-center justify-center rounded-full bg-violet/30 text-white"
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
    <m.div
      layout
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease }}
      className={cn("flex max-w-[88%] flex-col gap-1.5", isTutor ? "items-start self-start" : "items-end self-end")}
    >
      <span className="px-1 text-[11px] font-medium text-muted-foreground" lang="en">
        {isTutor ? tutorName : "You"}
      </span>
      <ChatBubble side={turn.speaker}>
        <p className="font-jp text-[0.95rem] font-medium">{turn.text}</p>
        {turn.romanization ? (
          <p className={cn("mt-0.5 text-xs", isTutor ? "text-[oklch(0.45_0.2_292)]" : "text-white/85")}>
            {turn.romanization}
          </p>
        ) : null}
        <AnimatePresence initial={false}>
          {showTranslation && turn.translation ? (
            <m.p
              lang="en"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={cn("overflow-hidden text-xs", isTutor ? "text-muted-foreground" : "text-white/80")}
            >
              <span className="block pt-1">{turn.translation}</span>
            </m.p>
          ) : null}
        </AnimatePresence>
      </ChatBubble>
      {turn.correction ? (
        <m.div
          lang="en"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="max-w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-left"
        >
          <p className="text-[11px] font-semibold tracking-wide text-emerald-800 uppercase">Gentle tip</p>
          <p className="font-jp mt-0.5 text-sm font-medium text-ink">{turn.correction.suggestion}</p>
          <p className="mt-0.5 text-xs text-emerald-900/80">{turn.correction.note}</p>
        </m.div>
      ) : null}
    </m.div>
  );
}
