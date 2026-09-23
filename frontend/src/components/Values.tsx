import { Reveal } from "./Reveal";

const values = [
  {
    num: "I",
    title: "PEOPLE FIRST",
    desc: "Because every event is ultimately about people.",
  },
  {
    num: "II",
    title: "DETAILS MATTER",
    desc: "Because the smallest details can become the biggest memories.",
  },
  {
    num: "III",
    title: "EXECUTION IS EVERYTHING",
    desc: "Because an idea means nothing without flawless execution.",
  },
  {
    num: "IV",
    title: "EMOTION OVER EVERYTHING",
    desc: "Because people remember how an event made them feel.",
  },
];

export function Values() {
  return (
    <section className="relative bg-[#0A0806] px-6 lg:px-12 py-28 lg:py-40" data-testid="values-section">
      <Reveal>
        <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">Our values</span>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#F3ECDD]/10">
        {values.map((v, i) => (
          <Reveal key={v.num} delay={Math.min(i * 0.06, 0.25)}>
            <div
              className="group border-b border-r border-[#F3ECDD]/10 p-8 lg:p-14 h-full transition-colors duration-700 hover:bg-[#171310]"
              data-testid={`value-${v.num.toLowerCase()}`}
            >
              <span className="font-serif italic text-[#C9A24D]/50 text-xl">{v.num}.</span>
              <h3 className="mt-5 font-serif text-[#F3ECDD] text-xl lg:text-3xl tracking-[0.06em]">
                {v.title}
              </h3>
              <p className="mt-4 text-[#B5A796] text-sm lg:text-base leading-relaxed max-w-sm">{v.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
