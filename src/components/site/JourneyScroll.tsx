import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { milestones } from "@/content/site";

/**
 * Half-viewport sticky journey. As the user scrolls, the year on the
 * vertical line changes in place; previous story fades up and out at the
 * top, next appears fading from the bottom.
 */
export function JourneyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const steps = milestones.length;
  const runwayVh = steps * 65;
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const clamped = Math.max(0, Math.min(0.9999, v));
    const idx = Math.min(steps - 1, Math.floor(clamped * steps));
    if (idx !== active) setActive(idx);
  });

  return (
    <section
      ref={ref}
      aria-label="Our journey since 2002"
      className="relative bg-ink text-cream"
      style={{ height: `${runwayVh}vh` }}
    >
      <div className="sticky top-[25vh] h-[50vh] overflow-hidden">
        <div className="container-ltcf h-full grid grid-cols-[auto_1fr] gap-8 md:gap-20 items-center">
          {/* Vertical line + year */}
          <div className="relative h-full w-24 md:w-40 flex items-center justify-center">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-cream/15" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-px bg-gradient-to-b from-ink to-transparent z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-px bg-gradient-to-t from-ink to-transparent z-10" />

            <div className="relative h-40 md:h-56 w-full grid place-items-center">
              <span className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-teal ring-8 ring-ink z-20" />
              {milestones.map((m, i) => {
                const state = i === active ? "current" : i < active ? "past" : "future";
                return (
                  <span
                    key={m.year}
                    className={`absolute font-semibold tracking-tight text-4xl md:text-6xl text-cream transition-all duration-700 ease-out ${
                      state === "current"
                        ? "opacity-100 translate-y-0"
                        : state === "past"
                          ? "opacity-15 -translate-y-14 blur-[1px]"
                          : "opacity-15 translate-y-14 blur-[1px]"
                    }`}
                  >
                    {m.year}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Story stack */}
          <div className="relative h-full">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent z-10 pointer-events-none" />
            <div className="relative h-full flex items-center">
              <div className="w-full max-w-xl">
                <p className="text-xs uppercase tracking-[0.22em] text-lavender font-semibold">
                  Our journey · since 2002
                </p>
                <div className="relative mt-6 h-56">
                  {milestones.map((m, i) => {
                    const state = i === active ? "current" : i < active ? "past" : "future";
                    return (
                      <div
                        key={m.year}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${
                          state === "current"
                            ? "opacity-100 translate-y-0"
                            : state === "past"
                              ? "opacity-0 -translate-y-16"
                              : "opacity-0 translate-y-16"
                        }`}
                      >
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-cream">
                          {m.title}
                        </h3>
                        <p className="mt-4 text-cream/70 leading-relaxed max-w-lg">
                          {m.body}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Progress dots */}
                <div className="mt-6 flex gap-1.5">
                  {milestones.map((m, i) => (
                    <span
                      key={m.year}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === active ? "w-8 bg-lavender" : "w-4 bg-cream/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
