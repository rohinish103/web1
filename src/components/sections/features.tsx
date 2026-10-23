import { Reveal } from "@/components/shared/reveal";
import { SectionHeading, SerifAccent } from "@/components/shared/section-heading";
import { features, type Feature } from "@/data/content";
import { cn } from "@/lib/utils";

import { FeatureVisual } from "./feature-visuals";

/**
 * Bento layout. Two columns on tablet and three on desktop, arranged so no
 * row is ever left with an empty slot.
 */
const span: Record<Feature["id"], string> = {
  conversation: "md:col-span-2",
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
          description="Everything in Yumi is designed around one idea: you learn a language best by using it — with patience, context, and a little delight."
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal as="li" key={feature.id} delay={(i % 3) * 0.08} className={cn("h-full", span[feature.id])}>
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
        "glass group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
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
