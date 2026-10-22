"use client";

import { Lightbulb, Pause, Play, Volume2 } from "lucide-react";
import * as m from "motion/react-m";
import { Tabs as TabsPrimitive } from "radix-ui";
import { useCallback, useEffect, useRef, useState } from "react";

import { VocabularyArt } from "@/components/illustrations/vocabulary-illustration";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading, SerifAccent } from "@/components/shared/section-heading";
import { vocabulary } from "@/data/vocabulary";
import { cn } from "@/lib/utils";
import type { VocabularyItem } from "@/types/learning";

const ease = [0.22, 1, 0.36, 1] as const;

export function VisualLearning() {
  const [activeId, setActiveId] = useState(vocabulary[0].id);

  return (
    <section id="visual-learning" aria-labelledby="visual-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="visual-title"
          eyebrow="Visual learning preview"
          title={
            <>
              See it. Hear it. <SerifAccent>Remember it.</SerifAccent>
            </>
          }
          description="Here's how Mimi could introduce new Japanese words — with an illustration, a pronunciation guide, and sentences you'd actually say. Pick a word to explore."
        />

        <Reveal className="mt-14">
          <TabsPrimitive.Root value={activeId} onValueChange={setActiveId} className="flex flex-col gap-5">
            <TabsPrimitive.List
              aria-label="Example vocabulary"
              className="glass mx-auto flex max-w-full snap-x gap-2 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none]"
            >
              {vocabulary.map((item) => (
                <TabsPrimitive.Trigger
                  key={item.id}
                  value={item.id}
                  className="relative flex shrink-0 snap-start items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[oklch(0.42_0.04_285)] outline-none transition-colors hover:text-ink focus-visible:ring-3 focus-visible:ring-ring/50 data-[state=active]:text-white"
                >
                  {activeId === item.id ? (
                    <m.span
                      layoutId="vocab-pill"
                      className="bg-brand absolute inset-0 rounded-full shadow-[0_6px_20px_-8px_oklch(0.5_0.22_290)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  ) : null}
                  <span className="font-jp relative">{item.word}</span>
                  <span className="relative hidden sm:inline">{item.meaning}</span>
                </TabsPrimitive.Trigger>
              ))}
            </TabsPrimitive.List>

            {vocabulary.map((item) => (
              <TabsPrimitive.Content key={item.id} value={item.id} className="outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-[2rem]">
                <VocabularyCard item={item} />
              </TabsPrimitive.Content>
            ))}
          </TabsPrimitive.Root>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            Preview with sample content. Audio uses your device&apos;s built-in voice when one is available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function VocabularyCard({ item }: { item: VocabularyItem }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="glass grid gap-4 rounded-[2rem] p-3 shadow-lift sm:p-4 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[oklch(0.95_0.04_300)] via-[oklch(0.97_0.02_330)] to-[oklch(0.95_0.035_250)] p-8">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-70 mask-[radial-gradient(circle_at_center,black,transparent_70%)]" />
        <m.div
          key={item.id}
          initial={{ scale: 0.85, rotate: -4, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.35, duration: 0.8 }}
          className="relative size-56 drop-shadow-[0_20px_30px_oklch(0.5_0.15_290/0.2)] sm:size-64"
        >
          <VocabularyArt name={item.illustration} />
        </m.div>
        <span className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
          {item.partOfSpeech}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-2 sm:p-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div lang="ja">
            {item.reading ? <p className="font-jp text-sm text-muted-foreground">{item.reading}</p> : null}
            <p className="font-jp text-5xl font-semibold tracking-tight text-ink sm:text-6xl">{item.word}</p>
          </div>
          <dl className="grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-2xl bg-violet/8 px-4 py-2.5">
              <dt className="text-[11px] font-medium tracking-wide text-violet uppercase">Romaji</dt>
              <dd className="font-semibold text-ink">{item.romanization}</dd>
            </div>
            <div className="rounded-2xl bg-sky/25 px-4 py-2.5">
              <dt className="text-[11px] font-medium tracking-wide text-[oklch(0.4_0.12_250)] uppercase">Meaning</dt>
              <dd className="font-semibold text-ink">{item.meaning}</dd>
            </div>
          </dl>
        </div>

        <PronunciationGuide item={item} />

        <div className="grid gap-3 sm:grid-cols-2">
          {item.sentences.map((s, i) => (
            <m.figure
              key={s.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease }}
              className="rounded-2xl border border-violet/10 bg-white p-4 shadow-soft"
            >
              <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">Example {i + 1}</p>
              <p lang="ja" className="font-jp mt-2 text-lg font-medium text-ink">
                {s.text}
              </p>
              <p className="mt-1 text-sm text-violet">{s.romanization}</p>
              <figcaption className="mt-1 text-sm text-muted-foreground">{s.translation}</figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </m.div>
  );
}

function PronunciationGuide({ item }: { item: VocabularyItem }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timers = useRef<number[]>([]);

  const stop = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setActiveIndex(null);
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  useEffect(() => stop, [stop]);

  const play = () => {
    stop();
    const step = 520;
    item.syllables.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setActiveIndex(i), i * step));
    });
    timers.current.push(window.setTimeout(() => setActiveIndex(null), item.syllables.length * step + 250));
    speak(item.reading ?? item.word, item.language);
  };

  const playing = activeIndex !== null;

  return (
    <div className="rounded-2xl bg-gradient-to-r from-violet/8 to-sky/15 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-medium text-ink">
          <Volume2 className="size-4 text-violet" aria-hidden="true" />
          Pronunciation guide
        </p>
        <button
          type="button"
          onClick={playing ? stop : play}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-violet shadow-soft transition hover:bg-violet hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"
          aria-label={playing ? "Stop pronunciation guide" : `Play pronunciation guide for ${item.romanization}`}
        >
          {playing ? <Pause className="size-3.5" aria-hidden="true" /> : <Play className="size-3.5" aria-hidden="true" />}
          {playing ? "Stop" : "Play"}
        </button>
      </div>
      <ol className="mt-3 flex flex-wrap gap-2" aria-label="Syllables">
        {item.syllables.map((s, i) => (
          <li key={`${s.kana}-${i}`}>
            <m.span
              animate={activeIndex === i ? { scale: 1.08, y: -3 } : { scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
              className={cn(
                "flex min-w-16 flex-col items-center rounded-xl border px-3 py-2 transition-colors",
                activeIndex === i
                  ? "border-violet bg-violet text-white shadow-[0_8px_20px_-8px_oklch(0.5_0.22_290)]"
                  : "border-white bg-white/90 text-ink",
              )}
            >
              <span lang="ja" className="font-jp text-lg font-semibold">
                {s.kana}
              </span>
              <span className={cn("text-xs", activeIndex === i ? "text-white/85" : "text-muted-foreground")}>
                {s.romaji}
              </span>
            </m.span>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex gap-2 text-sm leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
        {item.tip}
      </p>
    </div>
  );
}

function speak(text: string, lang: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const prefix = lang.split("-")[0];
  const voice = window.speechSynthesis.getVoices().find((v) => v.lang.toLowerCase().startsWith(prefix));
  if (!voice) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = lang;
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}
