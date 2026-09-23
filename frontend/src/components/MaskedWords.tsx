import { motion } from "motion/react";

export const wordsContainer = (baseDelay = 0, stagger = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: baseDelay } },
});

export const wordReveal = {
  hidden: { y: "115%", rotate: 2, opacity: 0, filter: "blur(6px)" },
  show: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function MaskedWords({
  text,
  wordClassName = () => "",
}: {
  text: string;
  wordClassName?: (word: string, index: number) => string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="inline">
          <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
            <motion.span className={`inline-block ${wordClassName(w, i)}`} variants={wordReveal}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
