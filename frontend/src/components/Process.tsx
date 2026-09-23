import { Reveal } from "./Reveal";

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We understand your vision, event, audience, expectations and objectives.",
  },
  {
    num: "02",
    title: "CONCEPT",
    desc: "We develop the experience, creative direction and event structure.",
  },
  {
    num: "03",
    title: "PLAN",
    desc: "We coordinate people, artists, vendors, production, logistics, guests and timelines.",
  },
  {
    num: "04",
    title: "EXECUTE",
    desc: "Our team manages the moving parts on the ground.",
  },
  {
    num: "05",
    title: "EXPERIENCE",
    desc: "You stop worrying. Your guests start celebrating.",
  },
];

export function Process() {
  return (
    <section id="how-we-work" className="relative bg-[#171310] px-6 lg:px-12 py-28 lg:py-40" data-testid="process-section">
      <Reveal>
        <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">How we work</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight">
          From idea to <em className="italic text-[#E6C073]">experience.</em>
        </h2>
      </Reveal>

      <div className="mt-20 lg:mt-28 border-t border-[#F3ECDD]/10">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={Math.min(i * 0.06, 0.3)}>
            <div
              className="group grid grid-cols-1 lg:grid-cols-[180px_1fr_1.2fr] gap-4 lg:gap-12 items-baseline border-b border-[#F3ECDD]/10 py-10 lg:py-14"
              data-testid={`process-step-${s.num}`}
            >
              <span className="font-serif italic text-6xl lg:text-8xl text-[#C9A24D]/25 transition-colors duration-700 group-hover:text-[#C9A24D]/60 leading-none">
                {s.num}
              </span>
              <h3 className="font-serif text-[#F3ECDD] text-2xl lg:text-4xl tracking-[0.08em]">{s.title}</h3>
              <p className="text-[#B5A796] text-sm lg:text-base leading-relaxed max-w-lg">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 lg:mt-36 text-center lg:text-left">
        <Reveal>
          <span className="block font-serif text-[#F3ECDD] text-[10vw] sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
            You live the moment.
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="block font-serif italic text-[#E6C073] text-[10vw] sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
            We handle everything behind it.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
