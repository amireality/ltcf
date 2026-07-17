import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  stacked?: boolean;
  lightText?: boolean;
}

export function Logo({ className, stacked = false, lightText = false }: LogoProps) {
  return (
    <div
      className={cn(
        "flex",
        stacked ? "flex-col items-center gap-3 text-center" : "items-center gap-3.5",
        className
      )}
    >
      <img 
        src="/logo_heart.png" 
        alt="Luv 2 Care Logo Mark" 
        className={stacked ? "w-24 object-contain" : "w-[52px] object-contain"} 
      />
      <img 
        src="/logo_text.png" 
        alt="Luv 2 Care Foundation" 
        className={cn(
          stacked ? "h-14 object-contain" : "h-[36px] object-contain",
          lightText && "brightness-0 invert"
        )} 
      />
    </div>
  );
}
