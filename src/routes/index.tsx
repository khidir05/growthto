import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GrowthTo — From concept to reality" },
      { name: "description", content: "GrowthTo is a small studio offering civil engineering, architecture, AR, web & app development, and graphic design. Tell us about your project." },
      { property: "og:title", content: "GrowthTo — From concept to reality" },
      { property: "og:description", content: "Bringing ideas to life — from buildings and brands to digital systems and AR experiences." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
