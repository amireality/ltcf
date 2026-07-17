import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Logo } from "@/components/site/Logo";
import { StatCounter } from "@/components/site/StatCounter";
import { FadeUp } from "@/components/site/FadeUp";
import { JourneyScroll } from "@/components/site/JourneyScroll";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { stats, themes, articles, site } from "@/content/site";
import journeyImg from "@/assets/journey.jpg";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--5a54259f-7679-4b2b-8054-87a31ff87e83.lovable.app/og-home.jpg" },
    ],
  }),
  component: Home,
});

const solidToneBg: Record<string, string> = {
  purple: "bg-purple text-cream",
  yellow: "bg-yellow text-ink",
  red: "bg-red text-cream",
  orange: "bg-orange text-ink",
  green: "bg-green text-cream",
  beige: "bg-[#F5F5DC] text-ink",
};

function Home() {
  return (
    <SiteShell>
      {/* NEW HERO — Full screen GIF with centered logo */}
      <section className="relative flex min-h-[100vh] items-start justify-center overflow-hidden bg-cream pt-[15vh] md:pt-[20vh]">
        {/* Stretched GIF Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s]"
          style={{ backgroundImage: "url('/hero-animation.gif')" }}
        />
        
        {/* Centered Logo and Foundation Name - Moved up and scaled down */}
        <div className="relative z-10 flex flex-col items-center">
          <Logo stacked className="scale-110 md:scale-125 drop-shadow-lg" />
          <p className="mt-8 md:mt-10 text-base md:text-lg text-ink font-medium tracking-wide drop-shadow-sm">
            Restoring dignity through shared action.
          </p>
        </div>
      </section>

      {/* ORIGINAL HERO CONTENT — Shifted Down */}
      <section className="relative overflow-hidden bg-purple text-cream">
        <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="container-ltcf relative pt-14 md:pt-24 pb-28 md:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Narrative */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-cream" />
                  <p className="text-xs font-bold tracking-[0.22em] uppercase text-cream/70">
                    EST. 2002 · 24 YEARS OF QUIET WORK
                  </p>
                </div>
                <h1 className="text-cream text-5xl md:text-6xl lg:text-[76px] font-semibold leading-[0.95] tracking-[-0.03em]">
                  Restoring{" "}
                  <span className="text-yellow italic font-light">dignity</span>
                  <br />
                  through shared action.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-cream/80 max-w-lg leading-relaxed">
                {site.mission}
              </p>

              <div className="flex flex-wrap gap-5 items-center">
                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-tight text-primary-foreground shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all"
                >
                  I want to help
                  <Heart className="h-4 w-4 fill-current animate-bounce text-red-500" style={{ color: "var(--color-accent)" }} />
                </Link>
                <Link
                  to="/who-we-are"
                  className="group inline-flex items-center gap-3 text-sm font-bold tracking-tight text-cream"
                >
                  <span className="h-12 w-12 grid place-items-center rounded-full border border-cream/20 group-hover:bg-cream/10 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  Our story
                </Link>
              </div>

              <div className="pt-8 flex gap-12 border-t border-cream/10">
                <div>
                  <p className="text-2xl font-bold text-cream">06</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/60 font-semibold">
                    Impact themes
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-cream">9 states</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/60 font-semibold">
                    On the ground
                  </p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-2xl font-bold text-cream">₹0 comms</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/60 font-semibold">
                    No ad spend, ever
                  </p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[520px]">
              <div className="relative z-10 w-full max-w-md aspect-[3/4] group">
                <div className="absolute -inset-4 border-2 border-primary -z-10 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="tinted-photo h-full w-full overflow-hidden">
                  <HeroCarousel />
                </div>


              </div>

              {/* Marginalia */}
              <div className="absolute top-1/2 -right-6 lg:-right-10 -translate-y-1/2 rotate-90 hidden md:block pointer-events-none">
                <span className="text-[120px] font-black text-ink/[0.04] select-none leading-none tracking-tighter">
                  L2CF
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="bg-yellow text-ink border-y border-ink/10">
        <div className="container-ltcf py-16 md:py-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section id="themes" className="bg-ink text-cream py-24 md:py-32">
        <div className="container-ltcf">
          <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <span className="eyebrow !text-yellow">What we do</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-cream">
                Six threads, one fabric of care.
              </h2>
            </div>
            <p className="text-lg text-cream/70 leading-relaxed max-w-xl">
              Our themes are the ways communities have told us they want to be
              supported. Each one is a long conversation, not a project.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((t, i) => (
            <FadeUp key={t.slug} delay={i * 0.05}>
              <Link
                to="/impact/$slug"
                params={{ slug: t.slug }}
                className={`group block h-full rounded-3xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl ${solidToneBg[t.tone]}`}
              >
                <span
                  className="inline-flex h-9 items-center rounded-full px-3.5 text-xs font-bold uppercase tracking-[0.14em] bg-white/20 border border-white/20"
                >
                  0{i + 1}
                </span>
                
                <div className="relative mt-4 h-32 w-full overflow-visible">
                  <div className="absolute -inset-4 rounded-xl bg-black/10 -z-10 blur-md opacity-50" />
                  <img 
                    src={t.image} 
                    alt="Theme visual" 
                    className="absolute -top-4 left-4 h-36 w-11/12 object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" 
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight">{t.title}</h3>
                <p className="mt-3 text-sm opacity-80 leading-relaxed">{t.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeUp>
          ))}
          </div>
        </div>
      </section>

      {/* JOURNEY — sticky half-viewport scroll-linked timeline */}
      <JourneyScroll />

      {/* JOURNEY CTA */}
      <section className="bg-red text-cream border-b border-white/10">
        <div className="container-ltcf py-16 md:py-20 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow !text-cream">Since 2002</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-cream">
              Twenty-four years of quiet, community-first work.
            </h2>
          </div>
          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-black/10 px-6 py-3.5 text-sm font-semibold hover:bg-black/20 transition-colors"
          >
            Read the full story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>




      {/* CTA */}
      <section className="bg-orange text-ink pb-24 md:pb-32 pt-16">
        <div className="container-ltcf">
          <div className="relative overflow-hidden rounded-[32px] bg-white/10 border border-white/20 p-10 md:p-16 shadow-xl">
            <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/70">Stand with us</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Every act of care compounds.
              </h2>
              <p className="mt-5 max-w-lg text-cream/75 leading-relaxed">
                Whether it's ₹500 or your Saturday morning — the work grows in
                the company you keep it.
              </p>
            </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-cream hover:bg-ink/90 transition-colors shadow-lg">
                  I want to help
                  <Heart className="h-4 w-4 fill-current animate-bounce text-red-500" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-ink hover:border-ink/60 transition-colors">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
