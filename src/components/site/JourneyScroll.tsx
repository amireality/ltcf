import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { milestones } from "@/content/site";

/**
 * Half-viewport sticky journey. As the user scrolls, the year on the
 * vertical line changes in place; previous story fades up and out at the
 * top, next story fades in from the bottom.
 */
export function JourneyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const steps = milestones.length;
  // Runway: one 60vh block per step, so scroll pacing feels considered.
  const runwayVh = steps * 60;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      aria-label="Our journey since 2002"
      className="relative bg-ink text-cream"
      style={{ height: `${runwayVh}vh` }}
    >
      <div className="sticky top-[25vh] h-[50vh] overflow-hidden">
        <div className="container-ltcf h-full grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-20 items-center">
          {/* Vertical line + year */}
          <div className="relative h-full w-24 md:w-32 flex items-center justify-center">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-cream/15" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-px bg-gradient-to-b from-ink to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-px bg-gradient-to-t from-ink to-transparent" />
            <div className="relative flex items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-teal ring-8 ring-ink" />
              <YearStack progress={scrollYProgress} />
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
                <StoryStack progress={scrollYProgress} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function YearStack({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const steps = milestones.length;
  return (
    <div className="relative h-40 w-40 md:h-56 md:w-56 grid place-items-center">
      {milestones.map((m, i) => {
        const start = i / steps;
        const end = (i + 1) / steps;
        const mid = (start + end) / 2;
        // Fade + slide: previous drifts up-and-out, next drifts in from below.
        return <Year key={m.year} year={m.year} progress={progress} start={start} mid={mid} end={end} />;
      })}
    </div>
  );
}

function Year({
  year,
  progress,
  start,
  mid,
  end,
}: {
  year: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  mid: number;
  end: number;
}) {
  const c = (n: number) => Math.max(0, Math.min(1, n));
  const opacity = useTransform(
    progress,
    [c(start - 0.02), c(start + 0.02), mid, c(end - 0.02), c(end + 0.02)],
    [0, 0.35, 1, 0.35, 0]
  );
  const y = useTransform(progress, [start, mid, end], [40, 0, -40]);
  return (
    <motion.span
      style={{ opacity, y }}
      className="absolute font-semibold tracking-tight text-5xl md:text-7xl text-cream"
    >
      {year}
    </motion.span>
  );
}


function StoryStack({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const steps = milestones.length;
  return (
    <div className="relative mt-6 h-56">
      {milestones.map((m, i) => {
        const start = i / steps;
        const mid = (start + (i + 1) / steps) / 2;
        const end = (i + 1) / steps;
        return <Story key={m.year} title={m.title} body={m.body} progress={progress} start={start} mid={mid} end={end} />;
      })}
    </div>
  );
}

function Story({
  title,
  body,
  progress,
  start,
  mid,
  end,
}: {
  title: string;
  body: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  mid: number;
  end: number;
}) {
  const c = (n: number) => Math.max(0, Math.min(1, n));
  const opacity = useTransform(
    progress,
    [c(start - 0.02), c(start + 0.03), mid, c(end - 0.03), c(end + 0.02)],
    [0, 0.25, 1, 0.25, 0]
  );
  const y = useTransform(progress, [start, mid, end], [60, 0, -60]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-cream">{title}</h3>
      <p className="mt-4 text-cream/70 leading-relaxed max-w-lg">{body}</p>
    </motion.div>
  );
}
