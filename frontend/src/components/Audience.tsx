import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { audienceEvents as events } from "@/data/site";

function FloatingTag({
  event,
  isSelected,
  anySelected,
  onClick,
}: {
  event: (typeof events)[0];
  isSelected: boolean;
  anySelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="relative lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] select-none cursor-pointer flex-shrink-0"
      style={{
        "--x": `${event.x}%`,
        "--y": `${event.y}%`,
      } as React.CSSProperties}
      animate={
        isSelected
          ? { scale: 1.15, zIndex: 20, opacity: 1 }
          : anySelected
          ? { scale: 0.88, opacity: 0.25, zIndex: 1 }
          : { scale: 1, opacity: 1, zIndex: 10 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      whileHover={!anySelected ? { scale: 1.05, zIndex: 15 } : {}}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0, 4, 0] }}
        transition={{
          duration: event.floatDuration,
          delay: event.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="relative group flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-6 lg:py-3 rounded-full border transition-all duration-300"
          style={{
            borderColor: isSelected ? event.color : "rgba(230,192,115,0.2)",
            background: isSelected
              ? `linear-gradient(135deg, rgba(230,192,115,0.18), rgba(12,8,6,0.9))`
              : "rgba(12,8,6,0.7)",
            backdropFilter: "blur(12px)",
            boxShadow: isSelected
              ? `0 0 32px rgba(230,192,115,0.35), 0 0 80px rgba(230,192,115,0.12)`
              : "0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          <span className="text-lg lg:text-2xl leading-none">{event.icon}</span>
          <span
            className="text-sm lg:text-lg font-light tracking-wide whitespace-nowrap"
            style={{ color: isSelected ? event.color : "#F3ECDD" }}
          >
            {event.label}
          </span>
          {/* Pulse ring on selected */}
          {isSelected && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: `1px solid ${event.color}` }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </motion.div>
    </motion.button>
  );
}

export function Audience() {
  const [selected, setSelected] = useState<(typeof events)[0] | null>(null);

  const handleSelect = useCallback(
    (event: (typeof events)[0]) => {
      setSelected((prev) => (prev?.id === event.id ? null : event));
    },
    []
  );

  return (
    <section
      className="relative bg-[#0A0806] pt-28 lg:pt-40 pb-16 lg:pb-20 overflow-hidden"
      data-testid="audience-section"
    >
      {/* Background ambient glow that shifts with selection */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 40%, rgba(230,192,115,0.07) 0%, transparent 70%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="px-6 lg:px-16 mb-8 lg:mb-6 text-center lg:text-left">
        <Reveal>
          <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-4 lg:mb-6">
            Who we create for
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            Built for every kind of{" "}
            <em className="italic text-[#E6C073]">celebration.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-[#F3ECDD]/35 text-sm lg:text-base font-light">
            Tap any event type to explore what we bring to it.
          </p>
        </Reveal>
      </div>

      {/* Floating tags stage */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-3 lg:block lg:h-[500px] px-4 lg:px-0 py-6 lg:py-0">
        {events.map((event) => (
          <FloatingTag
            key={event.id}
            event={event}
            isSelected={selected?.id === event.id}
            anySelected={selected !== null}
            onClick={() => handleSelect(event)}
          />
        ))}

        {/* Center hint when nothing selected */}
        <AnimatePresence>
          {!selected && (
            <motion.div
              className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-5xl mb-3 text-[#F3ECDD]/30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✦
                </motion.div>
                <p className="text-[#F3ECDD]/20 text-xs tracking-[0.3em] uppercase">
                  Click to explore
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Detail panel */}
      <div className="px-6 lg:px-16 min-h-[160px]">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="border-t pt-10 flex flex-col lg:flex-row gap-8 lg:gap-20"
              style={{ borderColor: `${selected.color}30` }}
            >
              <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                <span className="text-5xl lg:text-6xl">{selected.icon}</span>
                <div>
                  <h3
                    className="font-serif text-3xl lg:text-5xl tracking-tight"
                    style={{ color: selected.color }}
                  >
                    {selected.label}
                  </h3>
                  <p className="text-[#F3ECDD]/50 text-sm lg:text-base italic font-light mt-1">
                    {selected.tagline}
                  </p>
                </div>
              </div>
              <p className="text-[#F3ECDD]/65 text-base lg:text-xl font-light leading-relaxed max-w-2xl self-center">
                {selected.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border-t border-[#F3ECDD]/8 pt-10"
            >
              <p className="text-[#F3ECDD]/20 text-sm italic">
                Select an event above to see how we approach it.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
