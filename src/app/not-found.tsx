import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SerifAccent } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_40%,oklch(0.9_0.07_295/0.8),transparent)]"
        />
        <div className="flex max-w-md flex-col items-center gap-5 text-center">
          <p aria-hidden="true" lang="ja" className="font-jp text-8xl font-semibold text-violet/25">
            迷子
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            This page <SerifAccent>got lost.</SerifAccent>
          </h1>
          <p className="text-lg text-muted-foreground">
            We couldn&apos;t find what you were looking for. Let&apos;s get you back to the conversation.
          </p>
          <Button asChild variant="hero" size="cta">
            <Link href="/">
              <ArrowLeft aria-hidden="true" />
              Back to home
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
