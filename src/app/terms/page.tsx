import type { Metadata } from "next";

import { InfoPage } from "@/components/layout/info-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Mimi's terms of service will be published before launch.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InfoPage eyebrow="Coming soon" title="Terms of Service">
      <p>
        Mimi&apos;s terms of service will be published alongside our first release.
      </p>
      <p>
        This site is an early prototype. All conversations, vocabulary, and tutor personas shown here
        are sample content for demonstration purposes.
      </p>
    </InfoPage>
  );
}
