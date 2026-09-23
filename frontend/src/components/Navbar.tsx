import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { scrollToId, startScroll, stopScroll } from "@/lib/lenis";
import { Logo } from "./Logo";

const links = [
  { label: "HOME", id: "#home", testid: "nav-home-link" },
  { label: "OUR PREMIUM WORK", id: "#premium-work", testid: "nav-premium-work-link" },
  { label: "HOW WE WORK", id: "#how-we-work", testid: "nav-how-we-work-link" },
  { label: "ABOUT US", id: "#about", testid: "nav-about-link" },
  { label: "CONTACT", id: "#contact", testid: "nav-contact-link" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) stopScroll();
    else startScroll();
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-[background-color,border-color,backdrop-filter] duration-700 ${
          scrolled
            ? "bg-[#0A0806]/80 backdrop-blur-xl border-b border-[#C9A24D]/15"
            : "bg-transparent border-b border-transparent"
        }`}
        data-testid="main-nav"
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                data-testid={l.testid}
                className="relative text-[0.68rem] tracking-[0.28em] text-[#F3ECDD]/75 hover:text-[#E6C073] transition-colors duration-300 py-2 group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#C9A24D] transition-[width] duration-500 group-hover:w-full" />
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="lg:hidden text-[#F3ECDD] p-2"
            onClick={() => setOpen(true)}
            data-testid="mobile-menu-open-btn"
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#0A0806]/97 backdrop-blur-2xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            data-testid="mobile-menu"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo />
              <button
                type="button"
                className="text-[#F3ECDD] p-2"
                onClick={() => setOpen(false)}
                data-testid="mobile-menu-close-btn"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map((l, i) => (
                <div key={l.id} className="overflow-hidden">
                  <motion.button
                    type="button"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => go(l.id)}
                    data-testid={`mobile-${l.testid}`}
                    className="font-serif text-4xl sm:text-5xl text-[#F3ECDD] hover:text-[#E6C073] transition-colors duration-300 py-2 text-left"
                  >
                    {l.label}
                  </motion.button>
                </div>
              ))}
            </nav>
            <p className="px-8 pb-10 text-[0.6rem] tracking-[0.35em] text-[#C9A24D]">
              EVERY CELEBRATION. EVERY EMOTION. PLANNED TO PERFECTION.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
