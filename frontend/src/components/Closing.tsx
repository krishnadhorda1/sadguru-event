import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/lenis";

export function Closing() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a 3-phase scroll sequence using framer-motion scroll mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Block 2 fades in between 20% and 45% of the scroll, and stays visible until the end (1)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.45, 1], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45, 1], [40, 0, 0]);

  // Block 3 (and CTA) fades in between 60% and 85% of the scroll
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.85, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.85, 1], [40, 0, 0]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0A0806] h-[300vh]"
      data-testid="closing-sequence"
    >
      {/* Sticky container pins the content to the screen while scrolling the 300vh section */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(61,18,32,0.55)_0%,rgba(10,8,6,0)_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(201,162,77,0.07)_0%,rgba(10,8,6,0)_55%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl px-6 lg:px-12 flex flex-col items-center justify-center text-center gap-8 lg:gap-10">
          {/* Phase 1: Default Visible */}
          <div className="font-serif leading-[1.08] tracking-tight text-[6vw] sm:text-4xl lg:text-5xl xl:text-6xl text-[#F3ECDD]/70">
            Your event is more than a date on a calendar.
          </div>

          {/* Phase 2: Revealed on 1st scroll */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="font-serif leading-[1.08] tracking-tight text-[6vw] sm:text-4xl lg:text-5xl xl:text-6xl text-[#F3ECDD]"
          >
            It's a memory someone will carry for the rest of their life.
          </motion.div>

          {/* Phase 3: Revealed on 2nd scroll */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="flex flex-col items-center gap-8 pt-2"
          >
            <div className="font-serif italic leading-[1.08] tracking-tight text-[8vw] sm:text-5xl lg:text-6xl xl:text-7xl text-[#E6C073]">
              Let's make it worth remembering.
            </div>

            <button
              type="button"
              onClick={() => scrollToId("#contact")}
              data-testid="closing-cta"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C9A24D] px-8 py-4 text-[0.68rem] tracking-[0.28em] text-[#0A0806] transition-[background-color,transform] duration-500 hover:bg-[#E6C073] hover:scale-[1.03]"
            >
              START A CONVERSATION
              <ArrowRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
