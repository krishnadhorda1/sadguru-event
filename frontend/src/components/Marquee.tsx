const items = [
  "Weddings",
  "Cultural Shows",
  "Live Concerts",
  "Community Gatherings",
  "Destination Events",
  "Artist Management",
  "Gujarati Soul",
  "Global Stages",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="relative border-y border-[#F3ECDD]/10 bg-[#0A0806] py-7 overflow-hidden"
      data-testid="editorial-marquee"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee-drift items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-serif italic text-2xl md:text-4xl text-[#F3ECDD]/70 px-8 md:px-12 whitespace-nowrap">
              {item}
            </span>
            <span className="w-2 h-2 rotate-45 bg-[#C9A24D]/80 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
