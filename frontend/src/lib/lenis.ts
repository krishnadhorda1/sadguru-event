import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
  if (lenis) return lenis;
  lenis = new Lenis({
    duration: 1.25,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToId(id: string) {
  if (lenis) {
    lenis.scrollTo(id, { duration: 1.6 });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

export function stopScroll() {
  lenis?.stop();
  document.documentElement.style.overflow = "hidden";
}

export function startScroll() {
  lenis?.start();
  document.documentElement.style.overflow = "";
}
