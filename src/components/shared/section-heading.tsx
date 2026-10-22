import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "max-w-xl items-start",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-violet/15 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-violet uppercase shadow-soft backdrop-blur">
        <span className="size-1.5 rounded-full bg-violet" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-pretty text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function SerifAccent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal italic tracking-normal text-gradient pr-[0.08em]">{children}</span>;
}
