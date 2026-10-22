import { Reveal } from "@/components/shared/reveal";
import { principles } from "@/data/content";

export function Philosophy() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative px-3 py-24 sm:px-5 sm:py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-white sm:px-12 lg:px-16 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 size-[32rem] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.2_292/0.55),transparent_65%)] blur-2xl" />
          <div className="absolute -right-24 -bottom-40 size-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.14_250/0.45),transparent_65%)] blur-2xl" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
          <span className="font-jp absolute top-10 right-10 text-[9rem] leading-none font-bold text-white/[0.04] select-none sm:text-[14rem]">
            話
          </span>
        </div>

        <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-violet-200 uppercase">
              <span className="size-1.5 rounded-full bg-violet-300" aria-hidden="true" />
              Our philosophy
            </span>
            <h2 id="about-title" className="text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl">
              Less memorization.{" "}
              <span className="font-serif font-normal italic text-violet-200">More communication.</span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-pretty text-white/70">
              Mimi exists to help people connect across languages. Instead of endless flashcards, Mimi
              builds your confidence one real exchange at a time — with friendly AI tutors, personal
              guidance, and visual learning.
            </p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={(i % 2) * 0.08}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400/30 to-sky-400/20 text-violet-100 ring-1 ring-white/10 transition-transform duration-500 group-hover:-rotate-6">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{p.description}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
