import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CallToAction } from "@/components/sections/call-to-action";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Languages } from "@/components/sections/languages";
import { Philosophy } from "@/components/sections/philosophy";
import { Scenarios } from "@/components/sections/scenarios";
import { VisualLearning } from "@/components/sections/visual-learning";
import { Waitlist } from "@/components/sections/waitlist";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Languages />
        <Features />
        <HowItWorks />
        <VisualLearning />
        <Scenarios />
        <Philosophy />
        <CallToAction />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}
