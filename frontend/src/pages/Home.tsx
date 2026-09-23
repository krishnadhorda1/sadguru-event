import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StorySequence } from "@/components/StorySequence";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { Philosophy } from "@/components/Philosophy";
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
      <Portfolio />
      <Process />
      <Philosophy />
      <Audience />
      <Founder />
      <Closing />
      <Contact />
      <Footer />
    </main>
  );
}
