import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { storyImages } from "@/data/site";

function ParallaxImg({
  src,
  caption,
  aspectRatio = "aspect-[3/4]",
}: {
  src: string;
  caption: string;
  aspectRatio?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <figure ref={ref} className="group relative w-full z-10">
      <div
        className={`overflow-hidden ${aspectRatio} relative w-full bg-[#1A1816]`}
      >
        <motion.img
          style={{ y, scale: 1.15 }}
          src={src}
          alt={caption}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.2]"
        />
      </div>
      <Reveal delay={0.1} y={20}>
        <figcaption className="mt-4 text-xs lg:text-sm text-[#B5A796] leading-relaxed max-w-[24ch]">
          {caption}
        </figcaption>
      </Reveal>
    </figure>
  );
}

function Statement({
  lines,
  align = "left",
}: {
  lines: { text: string; italic?: boolean }[];
  align?: "left" | "right";
}) {
  return (
    <div
      className={`w-full z-10 relative ${align === "right" ? "text-right" : "text-left"}`}
    >
      {lines.map((l, i) => (
        <Reveal key={i} delay={i * 0.12}>
          <span
            className={`block font-serif text-[#F3ECDD] text-[11vw] sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight ${
              l.italic ? "italic text-[#E6C073]" : ""
            }`}
          >
            {l.text}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

export function StorySequence() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  const pathData = "M 15 15 C 50 15, 85 25, 85 45 C 85 65, 50 65, 20 75";

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative bg-[#0A0806] pt-24 pb-8 lg:pt-40 lg:pb-12 overflow-hidden"
      data-testid="story-sequence"
    >
      {/* Golden animated line background */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-visible">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full absolute inset-0 overflow-visible"
        >
          {/* 1. Faint background track */}
          <path
            d={pathData}
            fill="none"
            stroke="rgba(201, 162, 77, 0.12)"
            strokeWidth="0.1"
          />
          {/* 2. Glow (Blurred thick stroke) */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="#E6C073"
            strokeWidth="0.8"
            style={{
              pathLength: scrollYProgress,
              filter: "blur(4px)",
            }}
          />
          {/* 3. Core (Solid thin stroke) */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="#E6C073"
            strokeWidth="0.15"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          {/* 4. Leading Dot */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="#E6C073"
            strokeWidth="0.5"
            strokeLinecap="round"
            style={{
              pathLength: 0.0001,
              pathOffset: scrollYProgress,
              filter: "drop-shadow(0px 0px 4px #E6C073)",
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-32 lg:gap-48 relative z-10">
        {/* Block 1: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex justify-start">
            <Statement
              lines={[{ text: "We don't just" }, { text: "plan events." }]}
            />
          </div>
          <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-end">
            <div className="w-full max-w-md">
              <ParallaxImg
                src={storyImages[0].src}
                caption={storyImages[0].caption}
              />
            </div>
          </div>
        </div>

        {/* Block 2: Image Left, Text Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-start">
            <div className="w-full max-w-md">
              <ParallaxImg
                src={storyImages[1].src}
                caption={storyImages[1].caption}
                aspectRatio="aspect-square"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <Statement
              lines={[
                { text: "We create" },
                { text: "moments.", italic: true },
              ]}
              align="right"
            />
          </div>
        </div>

        {/* Block 3: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex justify-start">
            <Statement
              lines={[
                { text: "Moments people" },
                { text: "remember.", italic: true },
              ]}
            />
          </div>
          <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-end">
            <div className="w-full max-w-lg">
              <ParallaxImg
                src={storyImages[2].src}
                caption={storyImages[2].caption}
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>

        {/* Block 4: Large Center Image */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl">
            <ParallaxImg
              src={storyImages[3].src}
              caption={storyImages[3].caption}
              aspectRatio="aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
