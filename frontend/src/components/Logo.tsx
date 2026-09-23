import { scrollToId } from "@/lib/lenis";

export function Logo() {
  return (
    <button
      type="button"
      onClick={() => scrollToId("#home")}
      className="flex items-center gap-3 group"
      data-testid="nav-logo"
      aria-label="Sadguru Event Planner — home"
    >
      <img
        src="/media/logo-mark.png"
        alt="Sadguru Event Planner lotus mark"
        className="h-11 w-auto transition-transform duration-500 group-hover:scale-110"
      />
      <span className="leading-none text-left">
        <span className="block font-serif text-lg tracking-[0.18em] text-[#F3ECDD]">
          SADGURU
        </span>
        <span className="block text-[0.55rem] tracking-[0.42em] text-[#C9A24D] mt-1">EVENT PLANNER</span>
      </span>
    </button>
  );
}
