import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { nav, site } from "@/content/site";
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="container-ltcf flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-lavender text-ink transition-transform group-hover:-rotate-6">
            <Heart className="h-4 w-4 fill-current" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {site.short} · {site.location}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-teal" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-teal" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-teal-deep hover:shadow-md"
          >
            Donate
            <span aria-hidden>→</span>
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
                className="px-2 py-3 text-base font-medium text-foreground/80 hover:text-teal"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
