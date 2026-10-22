import type { LucideIcon } from "lucide-react";

/** BCP-47 language tag, e.g. "ja-JP". Voice agents and speech services key off this. */
export type LanguageCode = string;

export type LanguageAvailability = "preview" | "planned";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  /** Short glyph used as the card's visual mark. */
  glyph: string;
  greeting: string;
  icon: LucideIcon;
  availability: LanguageAvailability;
  /** Tailwind gradient classes for the card accent. */
  accent: string;
}

export type Speaker = "tutor" | "learner";

/**
 * A single conversational turn. Mirrors the shape a live tutor agent
 * would stream back, so previews can later be swapped for real sessions.
 */
export interface ConversationTurn {
  id: string;
  speaker: Speaker;
  text: string;
  romanization?: string;
  translation?: string;
  /** Optional gentle correction shown under a learner turn. */
  correction?: { suggestion: string; note: string };
}

export interface Scenario {
  id: string;
  title: string;
  place: string;
  language: LanguageCode;
  languageName: string;
  icon: LucideIcon;
  tutorName: string;
  accent: string;
  turns: ConversationTurn[];
}

export interface ExampleSentence {
  text: string;
  romanization: string;
  translation: string;
}

export type VocabularyIllustration = "coffee" | "cat" | "train" | "sakura" | "ramen";

export interface VocabularyItem {
  id: string;
  language: LanguageCode;
  word: string;
  reading?: string;
  romanization: string;
  meaning: string;
  partOfSpeech: string;
  /** Syllable-by-syllable guide used by the pronunciation walkthrough. */
  syllables: { kana: string; romaji: string }[];
  illustration: VocabularyIllustration;
  tip: string;
  sentences: ExampleSentence[];
}
