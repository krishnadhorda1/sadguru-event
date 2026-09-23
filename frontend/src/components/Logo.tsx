import { scrollToId } from "@/lib/lenis";

export function Logo({ onDark = true }: { onDark?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => scrollToId("#home")}
      className="flex items-center gap-3 group"
      data-testid="nav-logo"
      aria-label="Sadguru Event Planner — home"
    >
      <svg width="36" height="36" viewBox="0 0 64 64" className="shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <path d="M32 6 L58 32 L32 58 L6 32 Z" fill="none" stroke="#C9A24D" strokeWidth="2.5" />
        <path d="M32 16 L48 32 L32 48 L16 32 Z" fill="none" stroke="#C9A24D" strokeWidth="1" opacity="0.45" />
        <text
          x="32"
          y="41"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fontSize="24"
          fill="#E6C073"
        >
          S
        </text>
      </svg>
      <span className="leading-none text-left">
        <span className={`block font-serif text-lg tracking-[0.18em] ${onDark ? "text-[#F3ECDD]" : "text-[#0A0806]"}`}>
          SADGURU
        </span>
        <span className="block text-[0.55rem] tracking-[0.42em] text-[#C9A24D] mt-1">EVENT PLANNER</span>
      </span>
    </button>
  );
}
