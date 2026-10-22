"use client";

import * as m from "motion/react-m";
import { Tabs as TabsPrimitive } from "radix-ui";
import { useState } from "react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading, SerifAccent } from "@/components/shared/section-heading";
import { scenarios } from "@/data/scenarios";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import type { Scenario } from "@/types/learning";

import { ScenarioChat } from "./scenario-chat";

export function Scenarios() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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
            orientation={isDesktop ? "vertical" : "horizontal"}
            className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6"
          >
            <div className="-mx-5 min-w-0 lg:mx-0">
              <TabsPrimitive.List
                aria-label="Conversation scenarios"
                className="scroll-fade-x flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-3 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:px-0 lg:py-0 lg:[mask-image:none]"
              >
                {scenarios.map((scenario) => (
                  <ScenarioTrigger key={scenario.id} scenario={scenario} active={scenario.id === activeId} />
                ))}
              </TabsPrimitive.List>
            </div>

            {scenarios.map((scenario) => (
              <TabsPrimitive.Content
                key={scenario.id}
                value={scenario.id}
                className="min-w-0 rounded-[2rem] outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <ScenarioChat scenario={scenario} />
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
        "group relative flex w-72 shrink-0 snap-center items-center gap-4 rounded-3xl border p-4 text-left outline-none transition-all duration-300 focus-visible:ring-3 focus-visible:ring-ring/50 sm:w-80 lg:w-full",
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
          {scenario.languageName}
          <span className="hidden lg:inline"> · {scenario.place}</span>
        </span>
      </span>
      {active ? (
        <m.span
          layoutId="scenario-indicator"
          className="absolute top-1/2 -left-px hidden h-8 w-1 -translate-y-1/2 rounded-full bg-violet lg:block"
          aria-hidden="true"
        />
      ) : null}
    </TabsPrimitive.Trigger>
  );
}
