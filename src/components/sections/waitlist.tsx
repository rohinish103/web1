"use client";

import { ArrowRight, CircleCheck, Hourglass, Loader2, LogIn, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { EMAIL_PATTERN, joinWaitlist } from "@/lib/waitlist";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "done";

export function Waitlist() {
  const inputId = useId();
  const errorId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setState("submitting");
    await joinWaitlist(email.trim());
    setState("done");
  };

  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="relative px-5 pt-4 pb-24 sm:pb-32">
      <Reveal className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-dashed border-violet/30 bg-white/60 p-6 shadow-soft backdrop-blur sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-wide text-amber-800 uppercase">
            <Hourglass className="size-3.5" aria-hidden="true" />
            Coming soon
          </span>
          <h2 id="waitlist-title" className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            Mimi isn&apos;t open yet — but it&apos;s on its way.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            This page is an early prototype. Sign-up, log-in, and live tutors will arrive with our first
            release. The waitlist below is a placeholder while we get ready.
          </p>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <LogIn className="mt-0.5 size-4 shrink-0 text-violet" aria-hidden="true" />
            Looking to log in? Accounts aren&apos;t available in this preview.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[oklch(0.96_0.03_295)] to-[oklch(0.96_0.025_250)] p-5 sm:p-6">
          <AnimatePresence mode="wait" initial={false}>
            {state === "done" ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-start gap-3"
                role="status"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-soft">
                  <CircleCheck className="size-5" aria-hidden="true" />
                </span>
                <p className="text-lg font-semibold text-ink">Thanks for your interest!</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The waitlist isn&apos;t live yet, so your email was <strong className="text-ink">not</strong>{" "}
                  saved or sent anywhere. Please check back soon.
                </p>
                <Button
                  type="button"
                  variant="glass"
                  size="pill"
                  onClick={() => {
                    setState("idle");
                    setEmail("");
                  }}
                >
                  Back
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-3"
              >
                <label htmlFor={inputId} className="text-sm font-medium text-ink">
                  Waitlist (placeholder)
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <input
                      id={inputId}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? errorId : undefined}
                      className={cn(
                        "h-12 w-full rounded-full border bg-white pr-4 pl-11 text-[0.95rem] text-ink shadow-soft outline-none transition placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
                        error ? "border-destructive" : "border-white",
                      )}
                    />
                  </div>
                  <Button type="submit" variant="hero" size="cta" disabled={state === "submitting"}>
                    {state === "submitting" ? (
                      <Loader2 className="animate-spin" aria-hidden="true" />
                    ) : (
                      <ArrowRight aria-hidden="true" />
                    )}
                    Notify me
                  </Button>
                </div>
                {error ? (
                  <p id={errorId} className="text-sm text-destructive">
                    {error}
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Prototype only — nothing is stored or sent.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
