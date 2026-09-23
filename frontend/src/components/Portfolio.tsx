import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, MapPin, Users, X, Check } from "lucide-react";
import { premiumWork, type Project } from "@/data/site";
import { Reveal } from "./Reveal";
import { startScroll, stopScroll } from "@/lib/lenis";

function ProjectCard({
  project,
  onOpen,
  featured = false,
  tall = false,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  featured?: boolean;
  tall?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      data-testid={`project-card-${project.id}`}
      className={`group relative block w-full overflow-hidden text-left ${
        featured ? "h-[70vh] lg:h-[86vh]" : tall ? "h-[52vh] lg:h-[72vh]" : "h-[52vh] lg:h-[34vh]"
      }`}
    >
      <img
        src={project.image}
        alt={`${project.title} — ${project.subtitle}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/95 via-[#0A0806]/25 to-[#0A0806]/10 transition-opacity duration-700 group-hover:opacity-90" />
      <div className="absolute inset-0 ring-1 ring-inset ring-[#C9A24D]/0 transition-[box-shadow] duration-700 group-hover:ring-[#C9A24D]/40" />

      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-12">
        <span className="block text-[0.6rem] tracking-[0.35em] text-[#C9A24D] uppercase mb-3">
          {project.category}
        </span>
        <h3
          className={`font-serif text-[#F3ECDD] tracking-tight leading-[1.02] ${
            featured ? "text-4xl sm:text-6xl lg:text-8xl" : "text-3xl sm:text-4xl lg:text-5xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 font-serif italic text-[#E6C073]/90 text-base lg:text-xl max-w-2xl">
          {project.subtitle}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 text-[0.62rem] tracking-[0.3em] text-[#F3ECDD]/70 transition-colors duration-500 group-hover:text-[#E6C073]">
          VIEW EXPERIENCE
          <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1.5" />
        </span>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    stopScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      startScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-stretch justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      data-testid="project-modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="absolute inset-0 bg-[#0A0806]/90 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative z-10 m-3 lg:m-8 w-full max-w-6xl overflow-y-auto bg-[#120E0C] border border-[#C9A24D]/25"
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          data-testid="modal-close-btn"
          aria-label="Close project"
          className="absolute top-4 right-4 z-20 rounded-full bg-[#0A0806]/70 backdrop-blur p-3 text-[#F3ECDD] hover:text-[#E6C073] hover:bg-[#0A0806] transition-colors duration-300"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="relative h-[46vh] lg:h-[58vh] overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-[#120E0C]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 lg:p-12">
            <span className="block text-[0.6rem] tracking-[0.35em] text-[#C9A24D] uppercase mb-3">
              {project.category}
            </span>
            <h3 className="font-serif text-[#F3ECDD] text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none">
              {project.title}
            </h3>
            <p className="mt-3 font-serif italic text-[#E6C073] text-lg lg:text-2xl">{project.subtitle}</p>
          </div>
        </div>

        <div className="px-6 lg:px-12 py-10 lg:py-14">
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-xs tracking-[0.2em] text-[#B5A796] uppercase">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-[#C9A24D]" /> {project.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Users size={14} className="text-[#C9A24D]" /> {project.guests}
            </span>
          </div>

          <p className="mt-8 max-w-3xl text-[#F3ECDD]/85 text-base lg:text-lg leading-relaxed font-light">
            {project.description}
          </p>

          <h4 className="mt-12 font-serif text-[#F3ECDD] text-2xl lg:text-3xl">
            Everything the guests <em className="italic text-[#E6C073]">never had to worry about.</em>
          </h4>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F3ECDD]/10 border border-[#F3ECDD]/10">
            {project.responsibilities.map((r) => (
              <div key={r} className="flex items-center gap-3 bg-[#120E0C] px-5 py-4">
                <Check size={15} className="text-[#C9A24D] shrink-0" strokeWidth={1.75} />
                <span className="text-sm text-[#F3ECDD]/85">{r}</span>
              </div>
            ))}
          </div>

          <h4 className="mt-12 text-[0.62rem] tracking-[0.35em] text-[#C9A24D] uppercase">Event highlights</h4>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-baseline gap-3 text-[#F3ECDD]/80 text-sm lg:text-base">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A24D] shrink-0 translate-y-[-1px]" />
                {h}
              </li>
            ))}
          </ul>

          {project.video && (
            <div className="mt-12 aspect-video w-full overflow-hidden border border-[#C9A24D]/20">
              <iframe
                src={project.video}
                title={`${project.title} film`}
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {project.reels && project.reels.length > 0 && (
            <div className="mt-12">
              <h4 className="text-[0.62rem] tracking-[0.35em] text-[#C9A24D] uppercase">Films from the celebration</h4>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                {project.reels.map((r) => (
                  <figure key={r.embed}>
                    <div className="aspect-[9/16] w-full overflow-hidden border border-[#C9A24D]/20 bg-[#0A0806]">
                      <iframe
                        src={r.embed}
                        title={`${project.title} — ${r.label}`}
                        className="h-full w-full"
                        loading="lazy"
                        allow="encrypted-media; clipboard-write"
                        allowFullScreen
                      />
                    </div>
                    <figcaption className="mt-3 text-xs text-[#B5A796] italic font-serif">{r.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {project.reviews && project.reviews.length > 0 && (
            <div
              className="mt-12 border border-[#C9A24D]/40 bg-[#2A0D16] px-6 lg:px-10 py-10"
              data-testid="project-reviews"
            >
              <span className="block text-[0.62rem] tracking-[0.35em] text-[#C9A24D] uppercase">
                Highlight — words from the audience
              </span>
              <h4 className="mt-4 font-serif text-[#F3ECDD] text-2xl lg:text-4xl">
                What the crowd said <em className="italic text-[#E6C073]">after the lights dimmed.</em>
              </h4>
              <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
                {project.reviews.map((r, i) => (
                  <img
                    key={i}
                    src={r}
                    alt={`Audience feedback ${i + 1} for ${project.title}`}
                    loading="lazy"
                    className="h-56 lg:h-72 w-auto shrink-0 border border-[#F3ECDD]/15 bg-[#0A0806]"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.gallery.map((g, i) => (
              <div key={i} className="group/img overflow-hidden aspect-[4/3]">
                <img
                  src={g}
                  alt={`${project.title} gallery image ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.06]"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [open, setOpen] = useState<Project | null>(null);
  const [featured, ...rest] = premiumWork;

  return (
    <section id="premium-work" className="relative bg-[#0A0806] py-28 lg:py-40" data-testid="portfolio-section">
      <div className="px-6 lg:px-12 mb-16 lg:mb-24">
        <Reveal>
          <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">
            Our premium work
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-5xl">
            Some celebrations deserve to be{" "}
            <em className="italic text-[#E6C073]">remembered twice.</em>
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <ProjectCard project={featured} onOpen={setOpen} featured />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 px-4 lg:px-5 mt-4 lg:mt-5">
        {rest[0] && (
          <Reveal className="lg:col-span-7" delay={0.05}>
            <ProjectCard project={rest[0]} onOpen={setOpen} tall />
          </Reveal>
        )}
        <div className="lg:col-span-5 grid grid-rows-2 gap-4 lg:gap-5">
          {rest.slice(1).map((p, i) => (
            <Reveal key={p.id} delay={0.1 + i * 0.08}>
              <ProjectCard project={p} onOpen={setOpen} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}
