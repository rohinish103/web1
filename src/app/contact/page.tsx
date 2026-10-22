import type { Metadata } from "next";
import Link from "next/link";

import { InfoPage } from "@/components/layout/info-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Mimi will be shared at launch.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage eyebrow="Coming soon" title="Contact">
      <p>
        Official contact channels for Mimi will be shared when we launch. Until then, you can keep an
        eye on our{" "}
        <Link href="/#waitlist" className="font-medium text-violet underline-offset-4 hover:underline">
          waitlist placeholder
        </Link>{" "}
        for updates.
      </p>
    </InfoPage>
  );
}
