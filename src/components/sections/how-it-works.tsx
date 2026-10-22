"use client";

import { ArrowRight, Check } from "lucide-react";
import * as m from "motion/react-m";

import { SectionHeading, SerifAccent } from "@/components/shared/section-heading";
import { steps } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

const stepDetails: React.ReactNode[] = [
  <div key="0" className="flex flex-wrap items-center gap-2 text-sm">
    <span className="rounded-full bg-white px-3 py-1.5 font-medium text-ink shadow-soft">I speak English</span>
    <ArrowRight className="size-4 text-violet" aria-hidden="true" />
    <span className="font-jp rounded-full bg-violet px-3 py-1.5 font-medium text-white shadow-soft">
      日本語を学びたい
    </span>
  </div>,
  <div key="1" className="flex flex-wrap gap-2 text-sm">
    {["Brand new", "A few words", "Conversational"].map((level, i) => (
      <span
        key={level}
        className={
          i === 1
            ? "inline-flex items-center gap-1 rounded-full bg-violet px-3 py-1.5 font-medium text-white shadow-soft"
            : "rounded-full bg-white px-3 py-1.5 text-muted-foreground shadow-soft"
        }
      >
        {i === 1 ? <Check className="size-3.5" aria-hidden="true" /> : null}
        {level}
      </span>
    ))}
  </div>,
  <div key="2" className="flex flex-col gap-1.5 text-sm">
    <span className="font-jp w-fit rounded-2xl rounded-bl-md bg-white px-3 py-1.5 text-ink shadow-soft">
      カフェで注文してみよう！
    </span>
    <span className="w-fit self-end rounded-2xl rounded-br-md bg-violet px-3 py-1.5 text-white shadow-soft">
      Let&apos;s try ordering at a café!
    </span>
  </div>,
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="how-title"
          eyebrow="How Mimi works"
          title={
            <>
              Three steps to your <SerifAccent>first conversation.</SerifAccent>
            </>
          }
          description="No placement exams, no pressure. Mimi meets you where you are and grows with you."
        />

        <div className="relative mt-16">
          <div aria-hidden="true" className="absolute top-7 right-[16.66%] left-[16.66%] hidden h-0.5 rounded-full bg-violet/10 lg:block">
            <m.div
              className="h-full origin-left bg-gradient-to-r from-violet via-fuchsia-400 to-sky"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.4, ease }}
            />
          </div>

          <ol className="relative grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <m.li
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease }}
                  className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-6 lg:text-center"
                >
                  {i < steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-14 -bottom-6 left-7 w-px -translate-x-1/2 bg-gradient-to-b from-violet/40 to-sky/30 lg:hidden"
                    />
                  ) : null}
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white bg-white text-violet shadow-lift">
                    <Icon className="size-6" aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="glass flex flex-1 flex-col gap-4 rounded-[1.75rem] p-6 lg:w-full lg:items-center">
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-violet uppercase">Step {step.number}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                    <div
                      aria-hidden="true"
                      className="rounded-2xl bg-gradient-to-br from-[oklch(0.96_0.025_295)] to-[oklch(0.96_0.02_250)] p-4 lg:w-full [&>div]:lg:justify-center"
                    >
                      {stepDetails[i]}
                    </div>
                  </div>
                </m.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
