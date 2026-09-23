import { Reveal } from "./Reveal";
import { founderImage } from "@/data/site";

export function Founder() {
  return (
    <section id="about" className="relative bg-[#0A0806] px-6 lg:px-12 py-28 lg:py-40" data-testid="about-section">
      <Reveal>
        <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">About us</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl tracking-tight">
          Behind <em className="italic text-[#E6C073]">Sadguru Event Planner.</em>
        </h2>
      </Reveal>

      <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="overflow-hidden aspect-[3/4] group">
            <img
              src={founderImage}
              alt="Krishna Dhorda, Founder of Sadguru Event Planner"
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
          </div>
          <p className="mt-4 text-xs text-[#B5A796] italic font-serif">
            Krishna Dhorda — the founder behind the feeling.
          </p>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <h3 className="font-serif text-[#F3ECDD] text-3xl lg:text-5xl tracking-tight">Krishna Dhorda</h3>
            <p className="mt-3 text-[0.62rem] tracking-[0.35em] text-[#C9A24D] uppercase">
              Founder — Sadguru Event Planner
            </p>
          </Reveal>

          <div className="mt-10 space-y-8 max-w-xl">
            <Reveal delay={0.05}>
              <p className="text-[#B5A796] text-base lg:text-lg leading-relaxed">
                Krishna spent years searching for his purpose. He found it in the middle of a celebration —
                watching a room full of people moved by a single, beautifully executed moment.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-[#C9A24D] pl-6 lg:pl-8">
                <p className="font-serif italic text-[#F3ECDD] text-xl lg:text-3xl leading-snug">
                  The real power of an event isn't the event itself. It's what people feel because of it.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[#B5A796] text-base lg:text-lg leading-relaxed">
                That realization became Sadguru Event Planner — a company built not around logistics, but
                around the emotions those logistics protect.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-serif text-[#E6C073] text-lg lg:text-xl italic">
                This is why Sadguru Event Planner exists.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
