import { Link } from "@tanstack/react-router";
import { Heart, Instagram, Linkedin, Youtube } from "lucide-react";
import { nav, site } from "@/content/site";

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

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} {site.name}. A registered non-profit. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            Built with care · {site.short}
          </p>
        </div>
      </div>
    </footer>
  );
}
