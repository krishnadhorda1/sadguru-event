import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MaskedWords, wordsContainer } from "./MaskedWords";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      className="relative bg-[#0A0806] px-6 lg:px-12 py-36 lg:py-56 overflow-hidden"
      data-testid="process-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(61,18,32,0.55)_0%,rgba(23,19,16,0)_60%)]" />
      <motion.div
        className="absolute left-6 lg:left-12 top-24 h-px bg-gradient-to-r from-[#C9A24D] to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "38%" } : { width: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div ref={ref} className="relative w-full">
        <motion.h2
          className="font-serif text-[11vw] sm:text-5xl lg:text-[5.5rem] xl:text-[7rem] leading-[1.04] tracking-tight flex flex-wrap gap-x-3 lg:gap-x-6"
          variants={wordsContainer(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <span className="text-[#F3ECDD]">
            <MaskedWords text="You live the moment." />
          </span>
          <span className="italic text-[#E6C073]">
            <MaskedWords
              text="We handle everything behind it."
              wordClassName={(w) => (w === "everything" ? "text-shimmer" : "")}
            />
          </span>
        </motion.h2>
        <motion.div
          className="mt-12 h-px w-40 origin-left bg-[#C9A24D]"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}
