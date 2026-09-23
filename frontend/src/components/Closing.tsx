import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/lenis";
import { Reveal } from "./Reveal";

export function Closing() {
  return (
    <section
      className="relative bg-[#0A0806] px-6 lg:px-12 py-36 lg:py-56"
      data-testid="closing-sequence"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(61,18,32,0.5)_0%,rgba(10,8,6,0)_65%)]" />
      <div className="relative max-w-6xl">
        <Reveal>
          <span className="block font-serif text-[#F3ECDD]/85 text-[9vw] sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight">
            Your event
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="block font-serif text-[#F3ECDD]/85 text-[9vw] sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight">
            is more than
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <span className="block font-serif text-[#F3ECDD]/85 text-[9vw] sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight">
            a date on a calendar.
          </span>
        </Reveal>

        <div className="h-20 lg:h-32" />

        <Reveal>
          <span className="block font-serif text-[#F3ECDD]/85 text-[9vw] sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight">
            It's a memory
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="block font-serif text-[#F3ECDD]/85 text-[9vw] sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight">
            someone will carry
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <span className="block font-serif text-[#F3ECDD]/85 text-[9vw] sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight">
            for the rest of their life.
          </span>
        </Reveal>

        <div className="h-20 lg:h-32" />

        <Reveal>
          <span className="block font-serif italic text-[#E6C073] text-[11vw] sm:text-6xl lg:text-8xl leading-[1.05] tracking-tight">
            Let's make it
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="block font-serif italic text-[#E6C073] text-[11vw] sm:text-6xl lg:text-8xl leading-[1.05] tracking-tight">
            worth remembering.
          </span>
        </Reveal>

        <Reveal delay={0.25} className="mt-16">
          <button
            type="button"
            onClick={() => scrollToId("#contact")}
            data-testid="closing-cta"
            className="group inline-flex items-center gap-3 rounded-full bg-[#C9A24D] px-8 py-4 text-[0.68rem] tracking-[0.28em] text-[#0A0806] transition-[background-color,transform] duration-500 hover:bg-[#E6C073] hover:scale-[1.03]"
          >
            START A CONVERSATION
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
