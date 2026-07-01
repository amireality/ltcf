import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
        {n.toLocaleString("en-IN")}
        <span className="text-teal">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-[0.14em]">
        {label}
      </div>
    </div>
  );
}
