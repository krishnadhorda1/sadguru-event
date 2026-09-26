import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, useScroll } from "motion/react";
import { Reveal } from "./Reveal";
import { founderImage } from "@/data/site";
import { MaskedWords, wordsContainer } from "./MaskedWords";

export function Founder() {
  // 3D Tilt effect for the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll parallax for the image
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Quote reveal animation
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-15% 0px" });

  return (
    <section
      id="about"
      className="relative bg-[#0A0806] px-6 lg:px-12 pt-16 lg:pt-20 pb-28 lg:pb-40 overflow-hidden"
      data-testid="about-section"
      ref={containerRef}
    >
      <Reveal>
        <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">
          About us
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl tracking-tight">
          Behind <em className="italic text-[#E6C073]">Sadguru Event Planner.</em>
        </h2>
      </Reveal>

      <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start max-w-[1400px]">
        {/* Interactive Image Column */}
        <div className="lg:col-span-5 relative" style={{ perspective: 1200 }}>
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full relative group cursor-crosshair"
          >
            <div className="overflow-hidden aspect-[3/4] relative rounded-sm bg-[#120E0C]">
              {/* Subtle overlay glow that follows mouse */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: useTransform(
                    [springX, springY],
                    ([x, y]: any[]) =>
                      `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(230, 192, 115, 0.15) 0%, transparent 60%)`
                  ),
                }}
              />
              <motion.img
                src={founderImage}
                alt="Krishna Dhorda, Founder of Sadguru Event Planner"
                loading="lazy"
                style={{ y: imageY, scale: 1.15 }}
                className="absolute inset-0 h-full w-full object-cover object-top will-change-transform"
              />
            </div>
            {/* Border frame that slightly offsets for 3D effect */}
            <motion.div
              style={{ translateZ: -40 }}
              className="absolute -inset-4 border border-[#C9A24D]/10 rounded-sm pointer-events-none transition-colors duration-500 group-hover:border-[#C9A24D]/30"
            />
          </motion.div>
          <Reveal delay={0.2} className="mt-8">
            <p className="text-xs text-[#B5A796] italic font-serif text-center lg:text-left">
              Krishna Dhorda — the founder behind the feeling.
            </p>
          </Reveal>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-7 lg:pt-8 xl:pt-16">
          <Reveal>
            <h3 className="font-serif text-[#F3ECDD] text-3xl lg:text-5xl xl:text-6xl tracking-tight">
              Krishna Dhorda
            </h3>
            <p className="mt-4 text-[0.62rem] tracking-[0.35em] text-[#C9A24D] uppercase">
              Founder — Sadguru Event Planner
            </p>
          </Reveal>

          <div className="mt-12 xl:mt-16 space-y-10 max-w-2xl">
            <Reveal delay={0.05}>
              <p className="text-[#F3ECDD]/60 text-lg lg:text-xl leading-relaxed font-light">
                Krishna spent years searching for his purpose. He found it in the middle of a celebration —
                watching a room full of people moved by a single, beautifully executed moment.
              </p>
            </Reveal>

            {/* Animated Quote */}
            <div ref={quoteRef} className="relative py-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A24D]/0 via-[#C9A24D] to-[#C9A24D]/0" />
              <div className="pl-8 lg:pl-10">
                <motion.blockquote
                  className="font-serif italic text-[#E6C073] text-2xl lg:text-[2rem] leading-[1.25] tracking-tight"
                  variants={wordsContainer(0.1)}
                  initial="hidden"
                  animate={quoteInView ? "show" : "hidden"}
                >
                  <MaskedWords text="The real power of an event isn't the event itself. It's what people feel because of it." />
                </motion.blockquote>
              </div>
            </div>

            <Reveal delay={0.15}>
              <p className="text-[#F3ECDD]/60 text-lg lg:text-xl leading-relaxed font-light">
                That realization became Sadguru Event Planner — a company built not around logistics, but
                around the emotions those logistics protect.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="inline-flex items-center gap-4 mt-4">
                <span className="w-8 h-px bg-[#C9A24D]/40" />
                <p className="font-serif text-[#F3ECDD] text-lg lg:text-2xl italic tracking-tight">
                  This is why we exist.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
