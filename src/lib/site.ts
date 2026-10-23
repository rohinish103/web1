export const siteConfig = {
  name: "Yumi",
  tagline: "Learn a language. Make a connection.",
  description:
    "Meet Yumi, your AI language-learning companion. Practice real conversations, discover new words visually, and learn at your own pace.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Languages", href: "/#languages" },
  { label: "About", href: "/#about" },
] as const;

export const WAITLIST_HREF = "/#waitlist";
