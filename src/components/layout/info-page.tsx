import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export function InfoPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative flex-1">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,oklch(0.9_0.06_295/0.7),transparent)]"
        />
        <article className="mx-auto flex max-w-2xl flex-col gap-6 px-5 py-20 sm:py-28">
          <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-wide text-amber-800 uppercase">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">{children}</div>
          <Button asChild variant="glass" size="pill" className="mt-4 w-fit">
            <Link href="/">
              <ArrowLeft aria-hidden="true" />
              Back to home
            </Link>
          </Button>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
