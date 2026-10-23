import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { LogoMark } from "@/components/shared/logo";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { WAITLIST_HREF } from "@/lib/site";

const greetings = [
  { text: "こんにちは", className: "top-[14%] left-[8%]" },
  { text: "Bonjour", className: "top-[22%] right-[9%]" },
  { text: "¡Hola!", className: "bottom-[22%] left-[12%]" },
  { text: "안녕하세요", className: "bottom-[16%] right-[14%]" },
  { text: "नमस्ते", className: "top-[48%] left-[3%] hidden lg:block" },
  { text: "Ciao", className: "top-[50%] right-[3%] hidden lg:block" },
];

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative px-3 py-16 sm:px-5 sm:py-24">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,oklch(0.93_0.05_300),oklch(0.96_0.03_330)_45%,oklch(0.93_0.05_250))] px-6 py-24 text-center shadow-lift sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(1_0_0/0.8),transparent_60%)]" />
          {greetings.map((g, i) => (
            <span
              key={g.text}
              style={{ animationDelay: `${i * 0.7}s` }}
              className={`font-jp absolute hidden animate-float-slow rounded-2xl rounded-bl-md border border-white/80 bg-white/70 px-3.5 py-2 text-sm font-medium text-ink/80 shadow-soft backdrop-blur sm:block ${g.className}`}
            >
              {g.text}
            </span>
          ))}
        </div>

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <LogoMark className="size-14 drop-shadow-[0_12px_24px_oklch(0.5_0.2_290/0.35)]" />
          <h2 id="cta-title" className="text-4xl leading-[1.02] font-semibold tracking-tight text-balance text-ink sm:text-6xl">
            Your next conversation{" "}
            <span className="font-serif font-normal italic text-gradient pr-[0.08em]">starts here.</span>
          </h2>
          <p className="max-w-lg text-lg text-pretty text-muted-foreground">
            Discover a more natural way to learn languages with Yumi.
          </p>
          <Button asChild variant="hero" size="cta" className="mt-2 h-14 px-8 text-base">
            <Link href={WAITLIST_HREF}>
              Get Started
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
