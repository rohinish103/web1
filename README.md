# Yumi — Landing Page

Marketing landing page for **Yumi**, an AI-powered multilingual language-learning companion.

This is a front-end prototype: every conversation, vocabulary card, and tutor persona is static
mock data. There are no AI calls, speech APIs, accounts, payments, or databases.

## Stack

- Next.js (App Router, Turbopack) · React · TypeScript
- Tailwind CSS v4 · shadcn/ui (Radix) · Lucide icons
- Motion for React (`motion/react`) for animation, respecting `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, the sitemap, and Open Graph images
resolve to the real domain.

## Project structure

```
src/
  app/                    Routes, metadata, OG image, robots, sitemap, 404
    privacy | terms | contact   "Coming soon" info pages
  components/
    layout/               Site header (sticky + mobile sheet), footer, info page shell
    sections/             One component per landing-page section
                          (feature-visuals.tsx and scenario-chat.tsx hold the larger sub-parts)
    illustrations/        Inline SVG vocabulary art
    shared/               Logo, section heading, scroll reveal, chat bubbles, typing indicator,
                          lazy Motion provider
    ui/                   shadcn/ui primitives
  data/                   Mock content: languages, vocabulary, scenarios, features, steps
  hooks/                  use-playback (scripted chat timing), use-media-query
  lib/                    Site config, waitlist placeholder, utils
  types/learning.ts       Domain types shared by previews and future live features
```

## Conventions

- **Animation:** use `import * as m from "motion/react-m"` (`<m.div>`), never the full `motion`
  component. Features are lazy-loaded by `MotionProvider`, which runs in `strict` mode and throws if
  the heavy component is used. Above-the-fold entrances use the CSS `animate-rise` utility so they
  paint without waiting for JavaScript.
- **Styling:** shared design tokens and utilities (`glass`, `bg-brand`, `shadow-soft`, `shadow-lift`,
  `font-jp`) live in `src/app/globals.css` and are defined with `@utility` so they work with
  variants such as `hover:`.
- **Chat UI:** use `ChatBubble`, `WaveBars` and `TypingIndicator` from `components/shared` rather than
  re-creating bubble styles.

## Future integration notes

The preview components are deliberately driven by typed data so they can later be backed by
Yumi's Microsoft Foundry voice agents without rewriting the UI:

- `ConversationTurn` / `Scenario` (`src/types/learning.ts`) model a tutor ↔ learner exchange,
  including optional romanization, translation, and gentle corrections. A live session can stream
  turns in this shape into `ChatPreview` (`src/components/sections/scenarios.tsx`) in place of the
  scripted `usePlayback` hook.
- `Language.code` and `VocabularyItem.language` use BCP-47 tags (e.g. `ja-JP`), which map directly
  onto speech/voice locale selection.
- The vocabulary pronunciation guide uses the browser's built-in `speechSynthesis` only when a
  matching local voice exists; swap `speak()` in `visual-learning.tsx` for a real voice service.
- `joinWaitlist` (`src/lib/waitlist.ts`) is a no-op placeholder that stores nothing; replace it with
  a real endpoint when the waitlist opens.
