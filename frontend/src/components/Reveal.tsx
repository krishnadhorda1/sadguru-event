import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 48, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface MaskLinesProps {
  lines: ReactNode[];
  baseDelay?: number;
  className?: string;
  lineClassName?: string;
}

export function MaskLines({ lines, baseDelay = 0.3, className, lineClassName }: MaskLinesProps) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            className={lineClassName}
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.15, delay: baseDelay + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
