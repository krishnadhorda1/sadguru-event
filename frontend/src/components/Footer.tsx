import { scrollToId } from "@/lib/lenis";
import { site } from "@/data/site";
import { Logo } from "./Logo";

const links = [
  { label: "HOME", id: "#home", testid: "footer-home-link" },
  { label: "OUR PREMIUM WORK", id: "#premium-work", testid: "footer-premium-work-link" },
  { label: "HOW WE WORK", id: "#how-we-work", testid: "footer-how-we-work-link" },
  { label: "ABOUT US", id: "#about", testid: "footer-about-link" },
  { label: "CONTACT", id: "#contact", testid: "footer-contact-link" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0806] border-t border-[#F3ECDD]/10 px-6 lg:px-12 py-16 lg:py-20" data-testid="site-footer">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <div>
          <Logo />
          <p className="mt-6 text-xs text-[#B5A796] max-w-xs leading-relaxed">{site.tagline}</p>
          <p className="mt-4 font-serif italic text-[#E6C073]/80 text-sm">
            Every Celebration. Every Emotion. Planned to Perfection.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToId(l.id)}
              data-testid={l.testid}
              className="text-left text-[0.62rem] tracking-[0.28em] text-[#F3ECDD]/60 hover:text-[#E6C073] transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-14 pt-8 border-t border-[#F3ECDD]/10 flex flex-col sm:flex-row justify-between gap-4 text-[0.6rem] tracking-[0.25em] text-[#B5A796]/70 uppercase">
        <span>© {new Date().getFullYear()} Sadguru Event Planner</span>
        <span>We create experiences people remember.</span>
      </div>
    </footer>
  );
}
