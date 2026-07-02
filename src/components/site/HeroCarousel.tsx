import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/assets/l2chero1.png.asset.json";
import img2 from "@/assets/l2chero2.png.asset.json";
import img3 from "@/assets/l2chero3.png.asset.json";
import img4 from "@/assets/l2chero4.png.asset.json";

const slides = [
  { src: img1.url, alt: "LUV 2 CARE — Your support gives them a platform to thrive." },
  { src: img2.url, alt: "LUV 2 CARE — Bringing hope and care to those who need it most." },
  { src: img3.url, alt: "LUV 2 CARE — Building a compassionate world, one story at a time." },
  { src: img4.url, alt: "LUV 2 CARE — Standing together to uplift every voice." },
];

const AUTOPLAY_MS = 5000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((n: number) => {
    setIndex((n + slides.length) % slides.length);
  }, []);
  const next = useCallback(() => go(index + 1), [index, go]);
  const prev = useCallback(() => go(index - 1), [index, go]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => next(), AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, paused, next]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Luv 2 Care Foundation moments"
    >
      <div className="relative h-full w-full overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1024}
            height={1280}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/85 text-ink shadow-md backdrop-blur hover:bg-background transition"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/85 text-ink shadow-md backdrop-blur hover:bg-background transition"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-cream" : "w-2 bg-cream/60 hover:bg-cream/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
