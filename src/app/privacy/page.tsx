import type { Metadata } from "next";

import { InfoPage } from "@/components/layout/info-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Mimi's privacy policy will be published before launch.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage eyebrow="Coming soon" title="Privacy">
      <p>
        Mimi&apos;s full privacy policy will be published before our first release. Privacy is a core
        design principle: Mimi&apos;s learning memory is meant to focus on your educational progress,
        not on unnecessary personal details.
      </p>
      <p>
        This prototype landing page does not create accounts, record audio, or store any information
        you enter.
      </p>
    </InfoPage>
  );
}
