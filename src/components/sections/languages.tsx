import { Reveal } from "@/components/shared/reveal";
import { SectionHeading, SerifAccent } from "@/components/shared/section-heading";
import { languages } from "@/data/languages";
import { cn } from "@/lib/utils";
import type { Language } from "@/types/learning";

export function Languages() {
  return (
    <section id="languages" aria-labelledby="languages-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="languages-title"
          eyebrow="Planned languages"
          title={
            <>
              One world. <SerifAccent>Many languages.</SerifAccent>
            </>
          }
          description="Mimi is being built to speak with learners around the world. Here is the language coverage we're planning — tutors will roll out gradually, starting with Japanese previews."
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {languages.map((language, i) => (
            <Reveal as="li" key={language.code} delay={(i % 5) * 0.06} y={18} className="h-full">
              <LanguageCard language={language} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-violet" aria-hidden="true" /> Featured in previews
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full border border-violet/40" aria-hidden="true" /> Planned
          </span>
        </Reveal>
      </div>
    </section>
  );
}

function LanguageCard({ language }: { language: Language }) {
  const Icon = language.icon;
  const isPreview = language.availability === "preview";

  return (
    <article
      lang={language.code}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-4 shadow-soft backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lift sm:p-5"
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute -top-10 -right-10 size-32 rounded-full bg-gradient-to-br opacity-80 blur-xl transition-transform duration-700 group-hover:scale-150",
          language.accent,
        )}
      />

      <div className="relative flex items-start justify-between">
        <span className="flex size-10 items-center justify-center rounded-2xl bg-white/90 text-ink shadow-soft transition-transform duration-500 group-hover:rotate-[-8deg]">
          <Icon className="size-4.5" aria-hidden="true" />
        </span>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
            isPreview ? "bg-violet text-white" : "border border-violet/20 bg-white/70 text-violet",
          )}
        >
          {isPreview ? "Preview" : "Planned"}
        </span>
      </div>

      <span
        aria-hidden="true"
        className="font-jp relative mt-6 text-5xl leading-none font-semibold text-ink/90 transition-transform duration-500 group-hover:scale-110 sm:text-6xl"
      >
        {language.glyph}
      </span>

      <div className="relative mt-6">
        <h3 className="font-semibold text-ink" lang="en">
          {language.name}
        </h3>
        <p className="font-jp text-sm text-muted-foreground">{language.nativeName}</p>
        <p className="font-jp mt-3 h-5 translate-y-1 text-sm font-medium text-violet opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100">
          {language.greeting}
        </p>
      </div>
    </article>
  );
}
