import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollToId } from "@/lib/lenis";
import { heroImage, site } from "@/data/site";
import { MaskLines } from "./Reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("canplay", tryPlay);
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], [0, -80]);

  return (
    <section ref={ref} id="home" className="relative h-[100svh] overflow-hidden" data-testid="hero-section">
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImage}
          aria-label="A couple on a concert stage amid CO2 jets and teal light at a Sadguru Event Planner celebration"
        >
          <source src="/media/hero-loop.mp4" type="video/mp4" />
          <source src="/media/hero-loop.webm" type="video/webm" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/70 via-[#0A0806]/55 to-[#0A0806]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,77,0.14)_0%,rgba(10,8,6,0)_65%)]" />

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-12 pb-24 lg:pb-28"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-px w-14 bg-[#C9A24D]" />
          <span className="text-[0.62rem] sm:text-xs tracking-[0.32em] text-[#C9A24D] uppercase">
            {site.tagline}
          </span>
        </motion.div>

        <h1 className="sr-only">Sadguru Event Planner — We create experiences people remember</h1>
        <MaskLines
          baseDelay={0.35}
          lines={["SADGURU", "EVENT PLANNER"]}
          className="font-serif font-medium text-[#F3ECDD] text-[15vw] sm:text-[12vw] lg:text-[9.5vw] leading-[0.92] tracking-tight"
        />

        <div className="overflow-hidden mt-8">
          <motion.p
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F3ECDD]/90"
          >
            We create <em className="italic text-[#E6C073]">experiences</em> people remember.
          </motion.p>
        </div>

        <motion.div
          className="mt-10 flex items-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={() => scrollToId("#premium-work")}
            data-testid="hero-explore-cta"
            className="group inline-flex items-center gap-3 rounded-full border border-[#C9A24D]/60 px-7 py-3.5 text-[0.68rem] tracking-[0.28em] text-[#E6C073] transition-[background-color,color,border-color] duration-500 hover:bg-[#C9A24D] hover:text-[#0A0806] hover:border-[#C9A24D]"
          >
            EXPLORE OUR WORK
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1.5" />
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => scrollToId("#story")}
        data-testid="hero-scroll-cue"
        className="absolute bottom-8 right-6 lg:right-12 z-10 flex flex-col items-center gap-2 text-[#F3ECDD]/60 hover:text-[#E6C073] transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-label="Scroll to explore"
      >
        <span className="text-[0.58rem] tracking-[0.4em] [writing-mode:vertical-lr]">SCROLL TO EXPLORE</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} strokeWidth={1.5} />
        </motion.span>
      </motion.button>
    </section>
  );
}
