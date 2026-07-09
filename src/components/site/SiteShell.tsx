import { type ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className={cn("flex-1", isHome ? "pt-0" : "pt-16 md:pt-20")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
