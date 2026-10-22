import { Coffee, MapPin, Plane, ShoppingBasket, Users } from "lucide-react";

import { VocabularyArt } from "@/components/illustrations/vocabulary-illustration";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading, SerifAccent } from "@/components/shared/section-heading";
import { features, type Feature } from "@/data/content";
import { cn } from "@/lib/utils";

const layout: Record<Feature["id"], string> = {
  conversation: "lg:col-span-2",
  images: "",
  personalized: "",
  scenarios: "",
  voices: "",
  corrections: "md:col-span-2 lg:col-span-3",
};

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,oklch(0.92_0.05_295/0.7),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          title={
            <>
              Learning that feels like <SerifAccent>a conversation.</SerifAccent>
            </>
          }
          description="Everything in Mimi is designed around one idea: you learn a language best by using it — with patience, context, and a little delight."
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal as="li" key={feature.id} delay={(i % 3) * 0.08} className={cn("h-full", layout[feature.id])}>
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  const wide = feature.id === "corrections";
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
        wide && "lg:flex-row-reverse lg:items-stretch",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "relative flex min-h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.97_0.02_295)] via-white to-[oklch(0.96_0.025_250)] p-6",
          wide && "lg:w-[55%]",
        )}
      >
        <div className="absolute inset-0 bg-grid opacity-60 mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative w-full">
          <FeatureVisual id={feature.id} />
        </div>
      </div>
      <div className={cn("flex flex-1 flex-col gap-3 p-6", wide && "lg:justify-center lg:p-10")}>
        <span className="flex size-10 items-center justify-center rounded-2xl bg-violet/10 text-violet transition-colors duration-500 group-hover:bg-violet group-hover:text-white">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className={cn("text-lg font-semibold tracking-tight text-ink", wide && "lg:text-2xl")}>
          {feature.title}
        </h3>
        <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
      </div>
    </article>
  );
}

function FeatureVisual({ id }: { id: Feature["id"] }) {
  switch (id) {
    case "conversation":
      return (
        <div className="mx-auto flex max-w-md flex-col gap-2.5">
          <Bubble side="tutor">¿Qué hiciste el fin de semana?</Bubble>
          <Bubble side="learner">Fui a la playa con mis amigos.</Bubble>
          <Bubble side="tutor">¡Qué bien! ¿Hizo buen tiempo?</Bubble>
          <div className="flex items-center gap-2 self-end rounded-full bg-white/90 px-3 py-1.5 text-xs text-muted-foreground shadow-soft">
            <span className="flex h-3 items-center gap-[2px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="h-full w-[2px] animate-wave rounded-full bg-violet"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </span>
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
          {[
            { label: "Listening", w: "w-4/5" },
            { label: "Speaking", w: "w-1/2" },
            { label: "Vocabulary", w: "w-2/3" },
          ].map((row) => (
            <div key={row.label} className="rounded-2xl bg-white/90 px-3.5 py-2.5 shadow-soft">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-ink">{row.label}</span>
                <span className="text-muted-foreground">adapting</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-violet/10">
                <div
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r from-violet to-sky transition-all duration-700 group-hover:w-full",
                    row.w,
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
          {[
            { icon: Coffee, label: "Ordering food" },
            { icon: Users, label: "Meeting friends" },
            { icon: Plane, label: "Traveling" },
            { icon: ShoppingBasket, label: "Shopping" },
            { icon: MapPin, label: "Directions" },
          ].map(({ icon: Icon, label }, i) => (
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
          {[
            { lang: "Japanese", sample: "ありがとう", color: "bg-rose-400" },
            { lang: "Spanish", sample: "Gracias", color: "bg-amber-400" },
            { lang: "French", sample: "Merci", color: "bg-indigo-400" },
          ].map((v, i) => (
            <div key={v.lang} className="flex items-center gap-3 rounded-2xl bg-white/90 px-3.5 py-2.5 shadow-soft">
              <span className={cn("size-2.5 rounded-full", v.color)} />
              <div className="min-w-0 flex-1">
                <p className="font-jp text-sm font-medium text-ink">{v.sample}</p>
                <p className="text-[11px] text-muted-foreground">{v.lang} voice sample</p>
              </div>
              <span className="flex h-5 items-center gap-[2px]">
                {Array.from({ length: 8 }).map((_, j) => (
                  <span
                    key={j}
                    className="h-full w-[2px] animate-wave rounded-full bg-violet/60"
                    style={{ animationDelay: `${(j + i * 2) * 0.1}s` }}
                  />
                ))}
              </span>
            </div>
          ))}
        </div>
      );
    case "corrections":
      return (
        <div className="mx-auto flex max-w-md flex-col gap-3">
          <Bubble side="learner">
            Je suis allé <span className="rounded bg-white/25 px-1 line-through decoration-white/70">à le</span>{" "}
            marché hier.
          </Bubble>
          <div className="self-start rounded-2xl rounded-bl-md bg-white p-4 shadow-lift">
            <p className="text-sm text-ink">
              Je suis allé <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 font-semibold text-emerald-700">au</span>{" "}
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

function Bubble({ side, children }: { side: "tutor" | "learner"; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-soft",
        side === "tutor"
          ? "self-start rounded-bl-md bg-white text-ink"
          : "self-end rounded-br-md bg-gradient-to-br from-violet to-[oklch(0.6_0.16_265)] text-white",
      )}
    >
      {children}
    </p>
  );
}
