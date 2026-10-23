"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, WAITLIST_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const id = visible[0].target.id;
          setActive(ids.includes(id) ? id : null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((l) => l.href.split("#")[1]);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 pl-4 transition-all duration-500 sm:h-16 sm:px-4 sm:pl-5",
          scrolled
            ? "border-white/80 bg-white/70 shadow-soft backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-white/30 backdrop-blur-md",
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.split("#")[1];
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      isActive ? "text-ink" : "text-muted-foreground hover:text-ink",
                    )}
                  >
                    {isActive ? (
                      <span
                        className="absolute inset-0 -z-10 rounded-full bg-violet/10"
                        aria-hidden="true"
                      />
                    ) : null}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="pill" className="text-ink">
            <Link href={WAITLIST_HREF}>Log In</Link>
          </Button>
          <Button asChild variant="hero" size="pill">
            <Link href={WAITLIST_HREF}>
              Get Started
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="glass" size="icon-lg" className="rounded-full md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] border-l-0 bg-cream/95 backdrop-blur-xl">
            <SheetHeader className="pt-5">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">Jump to a section of the Yumi page.</SheetDescription>
              <Logo />
            </SheetHeader>
            <nav aria-label="Mobile" className="px-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-violet/8"
                      >
                        {link.label}
                        <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4 pb-8">
              <SheetClose asChild>
                <Button asChild variant="glass" size="cta">
                  <Link href={WAITLIST_HREF}>Log In</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="hero" size="cta">
                  <Link href={WAITLIST_HREF}>
                    Get Started
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </SheetClose>
              <p className="pt-2 text-center text-xs text-muted-foreground">
                Accounts open with our first release.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
