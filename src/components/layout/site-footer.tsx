import { AtSign, Camera, MessageCircle, PlayCircle } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/shared/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Languages", href: "/#languages" },
      { label: "Conversation preview", href: "/#scenarios" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/contact" },
      { label: "Waitlist", href: "/#waitlist" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const socials = [
  { label: "Social channel", icon: AtSign },
  { label: "Community", icon: MessageCircle },
  { label: "Video", icon: PlayCircle },
  { label: "Photos", icon: Camera },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-violet/10 bg-white/40 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_2fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Yumi is an AI-powered language-learning companion that helps you learn through natural
            conversations, personal guidance, and visual learning.
          </p>
          <div>
            <p className="text-xs font-medium text-muted-foreground">Social channels — coming soon</p>
            <ul className="mt-2 flex gap-2" aria-label="Social media placeholders">
              {socials.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <span
                    title={`${label} — coming soon`}
                    className="flex size-9 items-center justify-center rounded-full border border-violet/15 bg-white/70 text-muted-foreground"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    <span className="sr-only">{label} placeholder, coming soon</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold text-ink">{col.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-violet focus-visible:text-violet focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-violet/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© Yumi. All rights reserved.</p>
          <p>Prototype landing page · All conversations and examples are sample content.</p>
        </div>
      </div>
    </footer>
  );
}
