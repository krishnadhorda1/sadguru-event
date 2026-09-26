import { Reveal } from "./Reveal";
import { philosophyImages } from "@/data/site";

export function Philosophy() {
  return (
    <section className="relative bg-[#0A0806] py-32 lg:py-48 overflow-hidden" data-testid="philosophy-section">
      {/* Burgundy ambient glow — top left accent only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(61,18,32,0.7)_0%,rgba(10,8,6,0)_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(42,13,22,0.4)_0%,rgba(10,8,6,0)_50%)] pointer-events-none" />
      {/* Top — full-width headline block */}
      <div className="px-6 lg:px-20">
        <Reveal>
          <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-12">
            Our philosophy
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif text-[#F3ECDD] text-[13vw] leading-[0.9] tracking-tight">
            This is our
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="font-serif text-[#F3ECDD] text-[13vw] leading-[0.9] tracking-tight">
            real earning.
          </h2>
        </Reveal>

        {/* Secondary text — flush right */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-end gap-1 text-right">
            <p className="text-[#F3ECDD]/55 text-2xl lg:text-4xl font-light">Not the contracts.</p>
            <p className="text-[#F3ECDD]/55 text-2xl lg:text-4xl font-light">Not the numbers.</p>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <span className="block font-serif italic text-[#E6C073] text-[13vw] leading-[0.9] tracking-tight mt-6">
            The feeling.
          </span>
        </Reveal>
      </div>

      {/* Photos */}
      <div className="mt-24 lg:mt-36 px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {philosophyImages.map((src, i) => (
          <Reveal key={i} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-16" : ""}>
            <div className="overflow-hidden aspect-[3/4] group">
              <img
                src={src}
                alt="A moment of pure celebration emotion"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
