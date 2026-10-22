import {
  AudioWaveform,
  BookOpenCheck,
  Footprints,
  Gauge,
  HeartHandshake,
  Image,
  Languages,
  MessageCircleHeart,
  MessagesSquare,
  Mic,
  PenLine,
  ShieldCheck,
  Sprout,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: "conversation" | "images" | "personalized" | "scenarios" | "voices" | "corrections";
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    id: "conversation",
    title: "Natural AI Conversations",
    description: "Practice speaking with friendly AI language tutors who listen, respond, and keep the conversation flowing.",
    icon: MessagesSquare,
  },
  {
    id: "images",
    title: "Learn Through Images",
    description: "Discover vocabulary with contextual illustrations and visual examples that make new words stick.",
    icon: Image,
  },
  {
    id: "personalized",
    title: "Personalized Learning",
    description: "Lessons adapt to your understanding, speaking ability, and progress — never too easy, never overwhelming.",
    icon: Gauge,
  },
  {
    id: "scenarios",
    title: "Real-Life Scenarios",
    description: "Practice ordering food, meeting friends, traveling, and the everyday moments you actually care about.",
    icon: Footprints,
  },
  {
    id: "voices",
    title: "Native Voices and Accents",
    description: "Explore authentic pronunciation and the language-specific voices available for each tutor.",
    icon: AudioWaveform,
  },
  {
    id: "corrections",
    title: "Gentle Corrections",
    description: "Improve pronunciation and grammar with kind, timely nudges that never interrupt the flow of conversation.",
    icon: PenLine,
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Tell Mimi your language",
    description: "Speak in your preferred language and select what you want to learn.",
    icon: Languages,
  },
  {
    number: "02",
    title: "Learn at your level",
    description: "Mimi adapts lessons to your current knowledge, from your very first word onward.",
    icon: Sprout,
  },
  {
    number: "03",
    title: "Practice naturally",
    description: "Learn new words, explore scenarios, and gradually build confidence through conversation.",
    icon: MessageCircleHeart,
  },
];

export interface Principle {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const principles: Principle[] = [
  {
    title: "Teach first, then talk",
    description: "Beginners are guided through the basics before Mimi ever expects an independent conversation.",
    icon: BookOpenCheck,
  },
  {
    title: "Speak up, take part",
    description: "Every lesson invites you to speak and participate actively, not just tap through answers.",
    icon: Mic,
  },
  {
    title: "Translations that fade",
    description: "Support in your own language is reduced naturally as your understanding grows.",
    icon: Languages,
  },
  {
    title: "Your situations, your story",
    description: "Imagine your own hypothetical scenes — a job interview, a first date, a trip — and rehearse them.",
    icon: WandSparkles,
  },
  {
    title: "Grammar in context",
    description: "Vocabulary and grammar are taught inside real sentences and moments, where they make sense.",
    icon: HeartHandshake,
  },
  {
    title: "Privacy by design",
    description: "Learning memory focuses on your educational progress — not on unnecessary personal details.",
    icon: ShieldCheck,
  },
];
