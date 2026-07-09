import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  stacked?: boolean;
  lightText?: boolean;
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      {/* Right 2 (Purple) - Rendered first so it sits underneath the yellow top lobe */}
      <path
        d="M 45 35 C 75 0, 100 35, 80 60 C 65 80, 50 90, 42 95 L 85 95"
        stroke="#502A8B"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left Heart (Yellow) - Rendered second so it overlaps the purple 2 */}
      <path
        d="M 55 30 C 25 -5, 0 40, 20 70 C 30 85, 38 90, 42 95"
        stroke="#F0B323"
        strokeWidth="15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, stacked = false, lightText = false }: LogoProps) {
  return (
    <div
      className={cn(
        "flex",
        stacked ? "flex-col items-center gap-2 text-center" : "items-center gap-3",
        className
      )}
    >
      <LogoMark className={stacked ? "w-16 h-16" : "w-10 h-10"} />
      <div className={cn("flex flex-col justify-center leading-none", stacked ? "mt-1" : "")}>
        <span
          className={cn(
            "font-bold tracking-[0.12em]", 
            lightText ? "text-white" : "text-[#502A8B]",
            stacked ? "text-[22px]" : "text-[17px]"
          )}
        >
          LUV 2 CARE
        </span>
        <span
          className={cn(
            "font-semibold uppercase mt-[2px]",
            lightText ? "text-white/70" : "text-[#556985]", 
            stacked ? "text-[11px] tracking-[0.3em]" : "text-[9px] tracking-[0.25em]"
          )}
        >
          FOUNDATION
        </span>
      </div>
    </div>
  );
}
