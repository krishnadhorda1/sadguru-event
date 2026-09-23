import { useRef } from "react";
import { motion, useInView } from "motion/react";

const container = {
  hidden: {},
  show: (baseDelay: number) => ({
    transition: { staggerChildren: 0.09, delayChildren: baseDelay },
  }),
};

const word = {
  hidden: { y: "115%", rotate: 3 },
  show: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function MaskedWords({
  text,
  className = "",
  wordClassName = () => "",
}: {
  text: string;
  className?: string;
  wordClassName?: (w: string, i: number) => string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="inline">
          <span className={`inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom ${className}`}>
            <motion.span className={`inline-block ${wordClassName(w, i)}`} variants={word}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      className="relative bg-[#171310] px-6 lg:px-12 py-36 lg:py-56 overflow-hidden"
      data-testid="process-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(61,18,32,0.55)_0%,rgba(23,19,16,0)_60%)]" />
      <motion.div
        className="absolute left-6 lg:left-12 top-24 h-px bg-gradient-to-r from-[#C9A24D] to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "38%" } : { width: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div ref={ref} className="relative max-w-6xl">
        <motion.h2
          className="font-serif text-[#F3ECDD] text-[11vw] sm:text-6xl lg:text-8xl leading-[1.04] tracking-tight"
          variants={container}
          custom={0}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <MaskedWords text="You live the moment." />
        </motion.h2>
        <motion.h2
          className="mt-2 font-serif italic text-[#E6C073] text-[11vw] sm:text-6xl lg:text-8xl leading-[1.04] tracking-tight"
          variants={container}
          custom={0.5}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <MaskedWords
            text="We handle everything behind it."
            wordClassName={(w) => (w === "everything" ? "text-shimmer" : "")}
          />
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
