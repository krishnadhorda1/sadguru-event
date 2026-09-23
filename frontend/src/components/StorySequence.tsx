import { Reveal } from "./Reveal";
import { storyImages } from "@/data/site";

function Statement({
  lines,
  align = "left",
  id,
}: {
  lines: { text: string; italic?: boolean }[];
  align?: "left" | "right";
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`px-6 lg:px-12 py-28 lg:py-44 ${align === "right" ? "text-right" : ""}`}
      data-testid={id ? `${id}-statement` : undefined}
    >
      {lines.map((l, i) => (
        <Reveal key={i} delay={i * 0.12}>
          <span
            className={`block font-serif text-[#F3ECDD] text-[11vw] sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight ${
              l.italic ? "italic text-[#E6C073]" : ""
            }`}
          >
            {l.text}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

export function StorySequence() {
  return (
    <section id="story" className="relative bg-[#0A0806]" data-testid="story-sequence">
      <Statement
        id="story"
        lines={[
          { text: "We don't just" },
          { text: "plan events." },
        ]}
      />

      <div className="px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {storyImages.map((img, i) => (
            <Reveal key={i} delay={i * 0.1} className={i % 2 === 1 ? "lg:mt-16" : ""}>
              <figure className="group">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="mt-4 text-xs lg:text-sm text-[#B5A796] leading-relaxed max-w-[24ch]">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <Statement
        lines={[
          { text: "We create" },
          { text: "moments.", italic: true },
        ]}
        align="right"
      />
      <Statement
        lines={[
          { text: "Moments people" },
          { text: "remember.", italic: true },
        ]}
      />
      <Statement
        lines={[
          { text: "Different events." },
          { text: "Different people." },
          { text: "Different emotions.", italic: true },
        ]}
        align="right"
      />

      <div className="bg-[#2A0D16] px-6 lg:px-12 py-32 lg:py-48" data-testid="heartbeat-statement">
        <Reveal>
          <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-8">
            One responsibility
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="block font-serif text-[#F3ECDD] text-[12vw] sm:text-7xl lg:text-9xl leading-[0.98] tracking-tight">
            To manage every
          </span>
        </Reveal>
        <Reveal delay={0.3}>
          <span className="block font-serif italic text-[#E6C073] text-[12vw] sm:text-7xl lg:text-9xl leading-[0.98] tracking-tight">
            heartbeat.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
