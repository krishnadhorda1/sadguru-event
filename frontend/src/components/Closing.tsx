import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/lenis";
import { MaskedWords, wordsContainer } from "./MaskedWords";

interface BeatLine {
  text: string;
  italic?: boolean;
  shimmer?: string[];
}

function Beat({
  lines,
  delay = 0,
  big = false,
  showRule = true,
}: {
  lines: BeatLine[];
  delay?: number;
  big?: boolean;
  showRule?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-18% 0px" });
  const size = big
    ? "text-[12vw] sm:text-6xl lg:text-8xl"
    : "text-[9.5vw] sm:text-5xl lg:text-7xl";

  return (
    <div ref={ref}>
      {lines.map((l, li) => (
        <motion.h2
          key={li}
          className={`font-serif leading-[1.08] tracking-tight ${size} ${
            l.italic ? "italic text-[#E6C073]" : "text-[#F3ECDD]/90"
          }`}
          variants={wordsContainer(delay + li * 0.22)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <MaskedWords
            text={l.text}
            wordClassName={(w) => (l.shimmer?.includes(w) ? "text-shimmer" : "")}
          />
        </motion.h2>
      ))}
      {showRule && (
        <motion.div
          className="mt-12 h-px w-28 origin-left bg-[#C9A24D]/70"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1.3, delay: delay + lines.length * 0.22 + 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </div>
  );
}

export function Closing() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-15% 0px" });

  return (
    <section
      className="relative bg-[#0A0806] px-6 lg:px-12 py-40 lg:py-64 overflow-hidden"
      data-testid="closing-sequence"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(61,18,32,0.55)_0%,rgba(10,8,6,0)_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(201,162,77,0.07)_0%,rgba(10,8,6,0)_55%)]" />

      <div className="relative max-w-6xl space-y-32 lg:space-y-44">
        <Beat
          lines={[
            { text: "Your event" },
            { text: "is more than" },
            { text: "a date on a calendar." },
          ]}
        />
        <Beat
          delay={0.1}
          lines={[
            { text: "It's a memory", shimmer: ["memory"] },
            { text: "someone will carry" },
            { text: "for the rest of their life." },
          ]}
        />
        <Beat
          big
          showRule={false}
          delay={0.1}
          lines={[
            { text: "Let's make it", italic: true },
            { text: "worth remembering.", italic: true, shimmer: ["worth", "remembering."] },
          ]}
        />

        <div ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
            animate={ctaInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={() => scrollToId("#contact")}
              data-testid="closing-cta"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C9A24D] px-8 py-4 text-[0.68rem] tracking-[0.28em] text-[#0A0806] transition-[background-color,transform] duration-500 hover:bg-[#E6C073] hover:scale-[1.03]"
            >
              START A CONVERSATION
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
