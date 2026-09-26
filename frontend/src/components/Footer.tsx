import { scrollToId } from "@/lib/lenis";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import { motion } from "motion/react";

const links = [
  { label: "HOME", id: "#home", testid: "footer-home-link" },
  { label: "OUR PREMIUM WORK", id: "#premium-work", testid: "footer-premium-work-link" },
  { label: "ABOUT US", id: "#about", testid: "footer-about-link" },
  { label: "CONTACT", id: "#contact", testid: "footer-contact-link" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Footer() {
  return (
    <footer className="relative bg-[#0A0806] pt-20 lg:pt-32 pb-8 overflow-hidden flex flex-col items-center" data-testid="site-footer">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(201,162,77,0.05)_0%,rgba(10,8,6,0)_60%)] pointer-events-none rounded-full blur-3xl -translate-y-1/2" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <motion.div variants={item}>
          <Logo />
        </motion.div>
        
        <motion.p variants={item} className="mt-8 font-serif italic text-[#E6C073]/90 text-base sm:text-xl tracking-wide text-center max-w-lg px-6">
          Every Celebration. Every Emotion. Planned to Perfection.
        </motion.p>
        
        {/* Four items in one line */}
        <motion.nav variants={item} className="mt-12 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-4 px-4 w-full">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToId(l.id)}
              data-testid={l.testid}
              className="group relative flex items-center text-[0.65rem] sm:text-xs tracking-[0.2em] sm:tracking-[0.28em] text-[#F3ECDD]/60 hover:text-[#E6C073] transition-colors duration-500 uppercase"
            >
              <span className="transition-transform duration-500 group-hover:-translate-y-0.5">{l.label}</span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C9A24D] transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
        </motion.nav>

        {/* Huge Graphical Text */}
        <motion.div variants={item} className="w-full mt-16 sm:mt-20 lg:mt-24 overflow-hidden flex justify-center select-none pointer-events-none relative">
           <h1 className="text-[17vw] leading-[0.75] font-serif text-[#F3ECDD]/[0.03] tracking-tighter uppercase whitespace-nowrap drop-shadow-2xl">
             SADGURU
           </h1>
        </motion.div>
        
        {/* Copyright and Tagline */}
        <motion.div 
          variants={item}
          className="w-full max-w-7xl px-6 lg:px-12 mt-8 sm:-mt-2 flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.5rem] sm:text-[0.55rem] tracking-[0.25em] text-[#B5A796]/40 uppercase relative z-20"
        >
          <span>© {new Date().getFullYear()} Sadguru Event Planner</span>
          <span className="text-center">We create experiences people remember.</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}
