import { Reveal } from "./Reveal";
import { audienceCategories } from "@/data/site";

export function Audience() {
  return (
    <section className="relative bg-[#171310] px-6 lg:px-12 py-28 lg:py-40" data-testid="audience-section">
      <Reveal>
        <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">
          Who we create for
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
          Built for every kind of <em className="italic text-[#E6C073]">celebration.</em>
        </h2>
      </Reveal>

      <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
        {audienceCategories.map((cat, i) => (
          <Reveal key={cat} delay={Math.min(i * 0.04, 0.3)}>
            <div
              className="group flex items-baseline justify-between gap-6 border-b border-[#F3ECDD]/10 py-5 lg:py-6"
              data-testid={`audience-category-${i + 1}`}
            >
              <span className="font-serif text-[#F3ECDD] text-xl lg:text-3xl tracking-tight transition-colors duration-500 group-hover:text-[#E6C073]">
                {cat}
              </span>
              <span className="font-serif italic text-[#C9A24D]/40 text-sm shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
