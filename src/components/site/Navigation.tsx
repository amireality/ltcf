import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/40 backdrop-blur-xl border-b border-border/60 py-0"
          : isHome
          ? "bg-transparent py-4"
          : "bg-background py-0"
      )}
    >
      <div className="container-ltcf flex h-16 items-center justify-between md:h-20">
        {/* Logo - Hidden on home page until scrolled */}
        <Link 
          to="/" 
          className={cn(
            "flex items-center gap-2.5 group transition-all duration-300",
            isHome && !scrolled ? "opacity-0 pointer-events-none w-0 md:w-auto overflow-hidden" : "opacity-100 w-auto"
          )}
        >
          <Logo />
        </Link>

        {/* Navigation Links - Centered on Home when not scrolled */}
        <nav className={cn(
          "hidden md:flex items-center gap-1 transition-all duration-300",
          isHome && !scrolled ? "flex-1 justify-center" : ""
        )}>
          {nav.map((item) => {
            const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            I want to help
            <Heart className="h-4 w-4 fill-current animate-bounce text-red-500" style={{ color: "var(--color-accent)" }} />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="container-ltcf flex flex-col py-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-2 py-3 text-base font-medium text-foreground/80 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              I want to help
              <Heart className="h-4 w-4 fill-current animate-bounce text-red-500" style={{ color: "var(--color-accent)" }} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
