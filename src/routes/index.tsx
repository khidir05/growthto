import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoCloud } from "@/components/site/LogoCloud";
import { Devices } from "@/components/site/Devices";
import { FeatureSplit } from "@/components/site/FeatureSplit";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Blog } from "@/components/site/Blog";
import { Community } from "@/components/site/Community";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Grow To — Immersive AR & Software Studio" },
      { name: "description", content: "Grow To is an AR and software studio crafting immersive experiences and scalable products for forward-thinking teams." },
      { property: "og:title", content: "Grow To — Immersive AR & Software Studio" },
      { property: "og:description", content: "Build AR experiences and ship software like a pro." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Devices />
        <FeatureSplit />
        <FeatureGrid />
        <Testimonials />
        <Pricing />
        <LogoCloud />
        <Blog />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
