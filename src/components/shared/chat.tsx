import { cn } from "@/lib/utils";

type Side = "tutor" | "learner";

interface ChatBubbleProps extends React.ComponentProps<"div"> {
  side: Side;
  /** `tint` sits on white surfaces; `paper` sits on tinted backdrops. */
  surface?: "tint" | "paper";
}

export function ChatBubble({ side, surface = "tint", className, ...props }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "rounded-2xl px-4 py-2.5",
        side === "tutor"
          ? cn("rounded-bl-md text-ink", surface === "tint" ? "bg-violet/8" : "bg-white shadow-soft")
          : "bg-brand rounded-br-md text-white",
        className,
      )}
      {...props}
    />
  );
}

/** Decorative equaliser bars. Parent should be `aria-hidden`. */
export function WaveBars({
  count = 8,
  stagger = 0.1,
  offset = 0,
  className,
  barClassName,
}: {
  count?: number;
  stagger?: number;
  offset?: number;
  className?: string;
  barClassName?: string;
}) {
  return (
    <span aria-hidden="true" className={cn("flex items-center gap-[2px]", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn("h-full w-[2px] animate-wave rounded-full bg-violet/60", barClassName)}
          style={{ animationDelay: `${(i + offset) * stagger}s` }}
        />
      ))}
    </span>
  );
}
