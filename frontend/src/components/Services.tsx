import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="what-we-do" className="relative bg-[#0A0806] px-6 lg:px-12 py-28 lg:py-40" data-testid="services-section">
      <Reveal>
        <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">What we do</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
          Everything behind <em className="italic text-[#E6C073]">the moment.</em>
        </h2>
      </Reveal>

      <div className="relative mt-20 lg:mt-28">
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              className="hidden lg:block pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 z-20 w-[300px] aspect-[3/4] overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.94, rotate: 2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={services[active].image}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-[#C9A24D]/40" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="border-t border-[#F3ECDD]/10">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={Math.min(i * 0.05, 0.25)}>
              <div
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 lg:gap-10 border-b border-[#F3ECDD]/10 py-7 lg:py-9 cursor-default"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                data-testid={`service-row-${i + 1}`}
              >
                <span className="font-serif italic text-[#C9A24D]/60 text-sm lg:text-base w-8">{s.num}</span>
                <div className="min-w-0">
                  <h3 className="font-serif text-[#F3ECDD] text-xl sm:text-2xl lg:text-4xl tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:text-[#E6C073]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs lg:text-sm text-[#B5A796] max-w-xl leading-relaxed">{s.desc}</p>
                </div>
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.25}
                  className="text-[#C9A24D] opacity-0 -translate-x-2 translate-y-2 transition-[opacity,transform] duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
