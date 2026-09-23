import { Reveal } from "./Reveal";
import { philosophyImages } from "@/data/site";

export function Philosophy() {
  return (
    <section className="relative bg-[#3D1220] px-6 lg:px-12 py-32 lg:py-48" data-testid="philosophy-section">
      <Reveal>
        <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-10">
          Our philosophy
        </span>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="font-serif text-[#F3ECDD] text-[11vw] sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight">
          This is our
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-serif text-[#F3ECDD] text-[11vw] sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight">
          real earning.
        </h2>
      </Reveal>

      <div className="mt-14 space-y-2">
        <Reveal delay={0.05}>
          <p className="text-[#F3ECDD]/60 text-lg lg:text-2xl font-light">Not the contracts.</p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[#F3ECDD]/60 text-lg lg:text-2xl font-light">Not the numbers.</p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16">
        <span className="block font-serif italic text-[#E6C073] text-[14vw] sm:text-7xl lg:text-9xl leading-none tracking-tight">
          The feeling.
        </span>
      </Reveal>

      <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {philosophyImages.map((src, i) => (
          <Reveal key={i} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-12" : ""}>
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

      <Reveal className="mt-20 lg:mt-28">
        <span className="block font-serif italic text-[#F3ECDD] text-[13vw] sm:text-7xl lg:text-9xl leading-none tracking-tight">
          The hug.
        </span>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-8 max-w-xl text-[#F3ECDD]/75 text-base lg:text-xl leading-relaxed font-light">
          That hug erases every ounce of exhaustion.
        </p>
      </Reveal>
    </section>
  );
}
