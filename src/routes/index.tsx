import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Grow To — Immersive AR & Software Development" },
      {
        name: "description",
        content: "Grow To is a software house building immersive AR experiences and scalable software for forward-thinking businesses.",
      },
      { property: "og:title", content: "Grow To — Immersive AR & Software Development" },
      { property: "og:description", content: "We turn ideas into powerful AR and scalable digital solutions." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
