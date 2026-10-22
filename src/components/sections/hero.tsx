import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { SerifAccent } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { WAITLIST_HREF } from "@/lib/site";

import { HeroMockup } from "./hero-mockup";

/** Staggered entrance driven by CSS so the headline paints without waiting for JS. */
function Rise({ step, children }: { step: number; children: React.ReactNode }) {
  return (
    <div className="animate-rise" style={{ animationDelay: `${step * 80}ms` }}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <HeroBackdrop />
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-16 px-5 pt-12 pb-24 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-28">
        <div className="flex flex-col items-start gap-6 sm:gap-7">
          <Rise step={0}>
            <Link
              href={WAITLIST_HREF}
              className="group inline-flex max-w-full items-center gap-2 rounded-full border border-violet/15 bg-white/70 py-1 pr-3 pl-1 text-sm text-ink shadow-soft backdrop-blur transition hover:border-violet/30 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-violet px-2 py-0.5 text-xs font-medium text-white">
                <Sparkles className="size-3" aria-hidden="true" />
                Preview
              </span>
              <span className="truncate text-muted-foreground">
                <span className="hidden sm:inline">Mimi is coming soon — </span>Join the waitlist
              </span>
              <ArrowRight
                className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Rise>

          <Rise step={1}>
            <h1
              id="hero-title"
              className="text-[clamp(2.5rem,10.5vw,3.25rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-balance text-ink sm:text-6xl lg:text-[4.5rem]"
            >
              Learn a language. <br className="hidden sm:block" />
              <SerifAccent>Make a connection.</SerifAccent>
            </h1>
          </Rise>

          <Rise step={2}>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
              Meet Mimi, your AI language-learning companion. Practice real conversations, discover new
              words visually, and learn at your own pace.
            </p>
          </Rise>

          <Rise step={3}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="cta">
                <Link href={WAITLIST_HREF}>
                  Get Started
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="cta">
                <Link href="/#how-it-works">Explore How It Works</Link>
              </Button>
            </div>
          </Rise>

          <Rise step={4}>
            <p className="text-sm text-muted-foreground">
              Starting with Japanese previews · More languages planned
            </p>
          </Rise>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute -top-40 -left-[10%] size-[38rem] rounded-full bg-[radial-gradient(circle,oklch(0.86_0.09_300/0.7),transparent_65%)] blur-2xl" />
      <div className="absolute top-10 -right-[15%] size-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.87_0.07_250/0.65),transparent_65%)] blur-2xl" />
      <div className="absolute bottom-[-20%] left-[30%] size-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.92_0.06_330/0.55),transparent_65%)] blur-2xl" />
    </div>
  );
}
