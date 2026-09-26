import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Play,
  Users,
  X,
  Check,
} from "lucide-react";
import { premiumWork, type Project } from "@/data/site";
import { Reveal, MaskLines } from "./Reveal";
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
        featured
          ? "h-[70vh] lg:h-[86vh]"
          : tall
            ? "h-[52vh] lg:h-[72vh]"
            : "h-[52vh] lg:h-[34vh]"
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
            featured
              ? "text-4xl sm:text-6xl lg:text-8xl"
              : "text-3xl sm:text-4xl lg:text-5xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 font-serif italic text-[#E6C073]/90 text-base lg:text-xl max-w-2xl">
          {project.subtitle}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 text-[0.62rem] tracking-[0.3em] text-[#F3ECDD]/70 transition-colors duration-500 group-hover:text-[#E6C073]">
          VIEW EXPERIENCE
          <ArrowRight
            size={14}
            className="transition-transform duration-500 group-hover:translate-x-1.5"
          />
        </span>
      </div>
    </button>
  );
}

function formatModalTitle(title: string, subtitle: string) {
  if (subtitle.includes("Trusha & Karan")) {
    return (
      <>
        The grand wedding of{" "}
        <em className="italic text-[#E6C073]">Trusha & Karan</em>
      </>
    );
  } else if (title === "GUJROCK") {
    return (
      <>
        GujRock —{" "}
        <em className="italic text-[#E6C073]">Gujarati roots. Modern beats.</em>
      </>
    );
  } else if (title === "KHELAIYA KULTURE") {
    return (
      <>
        KHELAIYA KULTURE :{" "}
        <em className="italic text-[#E6C073]">Pre-Navratri Celebration</em>
      </>
    );
  }
  return <>{subtitle}</>;
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      data-testid="project-modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-[#0A0806]/90 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        className="relative z-10 w-full max-w-[90%] max-h-full overflow-y-auto bg-[#120E0C] border border-[#C9A24D]/25"
        data-lenis-prevent="true"
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
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-[#120E0C]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 lg:p-14 w-full">
            <span className="block text-[0.65rem] tracking-[0.35em] text-[#C9A24D] uppercase mb-4">
              {project.category}
            </span>
            <h3 className="font-serif text-[#F3ECDD] text-4xl sm:text-6xl lg:text-[5rem] tracking-tight leading-[1.05] w-full">
              {formatModalTitle(project.title, project.subtitle)}
            </h3>
          </div>
        </div>

        <div className="px-6 lg:px-14 py-10 lg:py-16">
          <p className="w-full text-[#F3ECDD]/70 text-lg lg:text-xl leading-relaxed font-light">
            {project.description}
          </p>

          {project.reels && project.reels.length > 0 && (
            <div className="mt-16 flex flex-wrap justify-center gap-x-8 lg:gap-x-16 gap-y-10 items-start w-full">
              {project.reels.map(r => (
                <div
                  key={r.link}
                  className="flex flex-col items-center gap-5 text-center"
                >
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3.5 rounded-full border border-[#C9A24D]/30 px-12 py-5 transition-all duration-300 hover:bg-[#C9A24D]/10 hover:border-[#C9A24D]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-[#C9A24D]"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span className="text-sm tracking-[0.2em] text-[#C9A24D] uppercase font-medium mt-0.5">
                      WATCH REEL
                    </span>
                  </a>
                  <span className="text-lg text-[#F3ECDD]/60 font-light">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-28">
            <h4 className="font-serif text-[#F3ECDD] text-3xl lg:text-[2.75rem] tracking-tight leading-[1.1]">
              {project.title === "THE WEDDING EVENT"
                ? "Behind Trusha & Karan"
                : `Behind ${project.title}`}
              <br />
              <em className="italic text-[#E6C073]">
                Everything the guests never had to worry about.
              </em>
            </h4>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-2">
              {project.responsibilities.map(r => (
                <div
                  key={r}
                  className="py-7 border-b border-[#F3ECDD]/10 text-base lg:text-lg text-[#F3ECDD]/70 font-light"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 flex flex-wrap justify-center gap-3">
            {project.gallery.map((g, i) => (
              <div key={i} className="group/img overflow-hidden aspect-[4/3] w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]">
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
    <section
      id="premium-work"
      className="relative bg-[#0A0806] pt-4 pb-28 lg:pt-8 lg:pb-40"
      data-testid="portfolio-section"
    >
      <div className="px-6 lg:px-12 mb-12 lg:mb-20">
        <Reveal>
          <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">
            Our premium work
          </span>
        </Reveal>

        <MaskLines
          baseDelay={0.1}
          lines={[
            <span
              key="1"
              className="block font-serif text-[#F3ECDD] text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-8xl leading-[1.05] tracking-tight"
            >
              Some celebrations deserve to be
            </span>,
            <span
              key="2"
              className="block font-serif text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-8xl leading-[1.05] tracking-tight italic text-[#E6C073]"
            >
              remembered twice.
            </span>,
          ]}
        />
      </div>

      <Reveal>
        <ProjectCard project={featured} onOpen={setOpen} featured />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 px-4 lg:px-5 mt-4 lg:mt-5">
        {rest.map((p, i) => (
          <Reveal key={p.id} delay={0.05 + i * 0.05}>
            <ProjectCard project={p} onOpen={setOpen} tall />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}
