import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StorySequence } from "@/components/StorySequence";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { Philosophy } from "@/components/Philosophy";
import { Values } from "@/components/Values";
import { Audience } from "@/components/Audience";
import { Closing } from "@/components/Closing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <main className="bg-[#0A0806] text-[#F3ECDD] antialiased overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <StorySequence />
      <Services />
      <Portfolio />
      <Process />
      <Founder />
      <Philosophy />
      <Values />
      <Audience />
      <Closing />
      <Contact />
      <Footer />
    </main>
  );
}
