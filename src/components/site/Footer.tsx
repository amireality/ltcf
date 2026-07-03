import { Link } from "@tanstack/react-router";
import { Heart, Instagram, Linkedin, Youtube } from "lucide-react";
import { nav, site } from "@/content/site";
import setuprLogo from "@/assets/setupr-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-32 bg-slate-deep text-cream">
      <div className="container-ltcf py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-lavender text-ink">
                <Heart className="h-4 w-4 fill-current" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm text-cream/70 leading-relaxed">
              {site.mission}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={site.socials.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:border-lavender hover:text-lavender transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={site.socials.linkedin} aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:border-lavender hover:text-lavender transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={site.socials.youtube} aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:border-lavender hover:text-lavender transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-cream/50">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-cream/85 hover:text-lavender transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-cream/50">Support</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/donate" className="text-cream/85 hover:text-lavender">Donate</Link></li>
              <li><Link to="/impact" className="text-cream/85 hover:text-lavender">Our themes</Link></li>
              <li><Link to="/knowledge" className="text-cream/85 hover:text-lavender">Reports & stories</Link></li>
              <li><Link to="/contact" className="text-cream/85 hover:text-lavender">Volunteer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-cream/50">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="text-cream/85">{site.email}</li>
              <li className="text-cream/85">{site.phone}</li>
              <li className="text-cream/60">Based in {site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-xs text-cream/40">
              Built with care · {site.short}
            </p>
            <p className="text-xs text-cream/50">
              © {new Date().getFullYear()} {site.name}. A registered non-profit. All rights reserved.
            </p>
          </div>
          <a href="https://setupr.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-cream/40 hover:text-lavender transition-colors">
            <span>Developed by <span className="font-medium">Setupr</span></span>
            <img src={setuprLogo.url} alt="Setupr" className="h-4 w-4 object-contain rounded-sm" />
          </a>
        </div>
      </div>
    </footer>
  );
}
