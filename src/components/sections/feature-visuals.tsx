import { Coffee, MapPin, Plane, ShoppingBasket, Users } from "lucide-react";

import { VocabularyArt } from "@/components/illustrations/vocabulary-illustration";
import { ChatBubble, WaveBars } from "@/components/shared/chat";
import type { Feature } from "@/data/content";
import { cn } from "@/lib/utils";

const scenarioChips = [
  { icon: Coffee, label: "Ordering food" },
  { icon: Users, label: "Meeting friends" },
  { icon: Plane, label: "Traveling" },
  { icon: ShoppingBasket, label: "Shopping" },
  { icon: MapPin, label: "Directions" },
];

const progressRows = [
  { label: "Listening", width: "w-4/5" },
  { label: "Speaking", width: "w-1/2" },
  { label: "Vocabulary", width: "w-2/3" },
];

const voiceSamples = [
  { lang: "Japanese", sample: "ありがとう", dot: "bg-rose-400" },
  { lang: "Spanish", sample: "Gracias", dot: "bg-amber-400" },
  { lang: "French", sample: "Merci", dot: "bg-indigo-400" },
];

/** Small illustrative mockups for each feature card. Purely decorative. */
export function FeatureVisual({ id }: { id: Feature["id"] }) {
  switch (id) {
    case "conversation":
      return (
        <div className="mx-auto flex max-w-md flex-col gap-2.5">
          <ChatBubble side="tutor" surface="paper" className="max-w-[85%] self-start text-sm">
            ¿Qué hiciste el fin de semana?
          </ChatBubble>
          <ChatBubble side="learner" className="max-w-[85%] self-end text-sm shadow-soft">
            Fui a la playa con mis amigos.
          </ChatBubble>
          <ChatBubble side="tutor" surface="paper" className="max-w-[85%] self-start text-sm">
            ¡Qué bien! ¿Hizo buen tiempo?
          </ChatBubble>
          <div className="flex items-center gap-2 self-end rounded-full bg-white/90 px-3 py-1.5 text-xs text-muted-foreground shadow-soft">
            <WaveBars count={5} stagger={0.15} className="h-3" />
            Your turn to speak
          </div>
        </div>
      );

    case "images":
      return (
        <div className="mx-auto flex w-48 flex-col items-center rounded-3xl bg-white p-4 shadow-lift transition-transform duration-500 group-hover:-rotate-2">
          <div className="size-28 rounded-2xl bg-pink-50 p-2">
            <VocabularyArt name="sakura" />
          </div>
          <p className="font-jp mt-3 text-xl font-semibold text-ink">桜</p>
          <p className="text-xs text-muted-foreground">sakura · cherry blossom</p>
        </div>
      );

    case "personalized":
      return (
        <div className="mx-auto flex max-w-xs flex-col gap-3">
          {progressRows.map((row) => (
            <div key={row.label} className="rounded-2xl bg-white/90 px-3.5 py-2.5 shadow-soft">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-ink">{row.label}</span>
                <span className="text-muted-foreground">adapting</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-violet/10">
                <div
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r from-violet to-sky transition-all duration-700 group-hover:w-full",
                    row.width,
                  )}
                />
              </div>
            </div>
          ))}
          <p className="text-center text-[11px] text-muted-foreground">Illustrative example</p>
        </div>
      );

    case "scenarios":
      return (
        <div className="mx-auto flex max-w-xs flex-wrap justify-center gap-2">
          {scenarioChips.map(({ icon: Icon, label }, i) => (
            <span
              key={label}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-ink shadow-soft transition-transform duration-500",
                i % 2 === 0 ? "group-hover:-translate-y-1" : "group-hover:translate-y-1",
              )}
            >
              <Icon className="size-4 text-violet" />
              {label}
            </span>
          ))}
        </div>
      );

    case "voices":
      return (
        <div className="mx-auto flex max-w-xs flex-col gap-2">
          {voiceSamples.map((v, i) => (
            <div key={v.lang} className="flex items-center gap-3 rounded-2xl bg-white/90 px-3.5 py-2.5 shadow-soft">
              <span className={cn("size-2.5 rounded-full", v.dot)} />
              <div className="min-w-0 flex-1">
                <p className="font-jp text-sm font-medium text-ink">{v.sample}</p>
                <p className="text-[11px] text-muted-foreground">{v.lang} voice sample</p>
              </div>
              <WaveBars count={8} offset={i * 2} className="h-5" />
            </div>
          ))}
        </div>
      );

    case "corrections":
      return (
        <div className="mx-auto flex max-w-md flex-col gap-3">
          <ChatBubble side="learner" className="max-w-[85%] self-end text-sm shadow-soft">
            Je suis allé <span className="rounded bg-white/25 px-1 line-through decoration-white/70">à le</span>{" "}
            marché hier.
          </ChatBubble>
          <div className="self-start rounded-2xl rounded-bl-md bg-white p-4 shadow-lift">
            <p className="text-sm text-ink">
              Je suis allé{" "}
              <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 font-semibold text-emerald-700">au</span>{" "}
              marché hier.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Nice sentence! Tiny tip: <span className="font-medium text-ink">à + le</span> becomes{" "}
              <span className="font-medium text-ink">au</span>. Keep going — what did you buy?
            </p>
          </div>
        </div>
      );
  }
}
