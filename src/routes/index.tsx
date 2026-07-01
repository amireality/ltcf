import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { StatCounter } from "@/components/site/StatCounter";
import { FadeUp } from "@/components/site/FadeUp";
import { JourneyScroll } from "@/components/site/JourneyScroll";
import { stats, themes, articles, site } from "@/content/site";
import heroImg from "@/assets/hero-portrait.jpg";
import journeyImg from "@/assets/journey.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--5a54259f-7679-4b2b-8054-87a31ff87e83.lovable.app/og-home.jpg" },
    ],
  }),
  component: Home,
});

const toneMap: Record<string, string> = {
  lavender: "bg-lavender/25 text-ink",
  teal: "bg-teal/15 text-teal-deep",
  terracotta: "bg-terracotta/20 text-ink",
  mustard: "bg-mustard/25 text-ink",
  sage: "bg-sage/25 text-ink",
};

function Home() {
  return (
    <SiteShell>
      {/* HERO — layered editorial composition */}
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-lavender/25 blur-3xl" />
        <div className="container-ltcf relative pt-14 md:pt-24 pb-28 md:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Narrative */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-lavender" />
                  <p className="text-xs font-bold tracking-[0.22em] uppercase text-ink">
                    Est. 2011 · 14 years of quiet work
                  </p>
                </div>
                <h1 className="text-ink text-5xl md:text-6xl lg:text-[76px] font-semibold leading-[0.95] tracking-[-0.03em]">
                  Restoring{" "}
                  <span className="text-lavender italic font-light">dignity</span>
                  <br />
                  through shared action.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed">
                {site.mission}
              </p>

              <div className="flex flex-wrap gap-5 items-center">
                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-2 rounded-sm bg-teal px-8 py-4 text-sm font-bold tracking-tight text-primary-foreground shadow-xl shadow-teal/20 hover:-translate-y-0.5 transition-all"
                >
                  Partner with us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/who-we-are"
                  className="group inline-flex items-center gap-3 text-sm font-bold tracking-tight text-ink"
                >
                  <span className="h-12 w-12 grid place-items-center rounded-full border border-ink/20 group-hover:bg-lavender/15 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  Our story
                </Link>
              </div>

              <div className="pt-8 flex gap-12 border-t border-ink/10">
                <div>
                  <p className="text-2xl font-bold text-ink">05</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    Impact themes
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink">9 states</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    On the ground
                  </p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-2xl font-bold text-ink">₹0 comms</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    No ad spend, ever
                  </p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[520px]">
              <div className="relative z-10 w-full max-w-md aspect-[3/4] group">
                <div className="absolute -inset-4 border-2 border-lavender -z-10 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="tinted-photo h-full w-full overflow-hidden">
                  <img
                    src={heroImg}
                    alt="A community teacher reading with two young girls on a woven mat in a sunlit courtyard."
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Overlapping field-note card */}
                <div className="absolute -bottom-10 -left-6 md:-left-16 bg-background p-5 shadow-2xl max-w-[260px] hidden sm:block border border-border">
                  <div className="tinted-photo aspect-[16/9] mb-4 overflow-hidden">
                    <img
                      src={journeyImg}
                      alt="Hands meeting over a cup of chai."
                      width={400}
                      height={225}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-teal font-bold">Field note</p>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground/80">
                    “We don't arrive with answers. We arrive with time.” — Ritu, programme lead
                  </p>
                </div>
              </div>

              {/* Marginalia */}
              <div className="absolute top-1/2 -right-6 lg:-right-10 -translate-y-1/2 rotate-90 hidden md:block pointer-events-none">
                <span className="text-[120px] font-black text-ink/[0.04] select-none leading-none tracking-tighter">
                  LTCF
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="border-y border-border/60 bg-background">
        <div className="container-ltcf py-16 md:py-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="container-ltcf py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Five threads, one fabric of care.
            </h2>
          </div>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
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
                className="group block h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-teal/40"
              >
                <span
                  className={`inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold uppercase tracking-[0.14em] ${toneMap[t.tone]}`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{t.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* JOURNEY TEASE */}
      <section className="bg-lavender-soft/60">
        <div className="container-ltcf py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Our journey</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                From a kitchen table to nine states.
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-lg">
                LTCF was never planned as an organisation. It grew slowly,
                one conversation at a time. Walk with us through the years
                that shaped it.
              </p>
              <Link
                to="/who-we-are"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-background px-6 py-3.5 text-sm font-semibold hover:border-ink/50 transition-colors"
              >
                Read the full story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="tinted-photo aspect-[5/4]">
                <img
                  src={journeyImg}
                  alt="Hands of an older woman and a younger volunteer meeting over a cup of chai."
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE */}
      <section className="container-ltcf py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Knowledge Center</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Field notes & reports.
            </h2>
          </div>
          <Link to="/knowledge" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-deep">
            See all writing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <FadeUp key={a.slug} delay={i * 0.06}>
              <Link
                to="/knowledge/$slug"
                params={{ slug: a.slug }}
                className="group block h-full rounded-3xl bg-card border border-border p-7 hover:border-teal/40 hover:shadow-md transition-all"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-teal font-semibold">{a.kicker} · {a.minutes} min read</p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight leading-snug group-hover:text-teal-deep transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed line-clamp-3">{a.dek}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                  Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-ltcf pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-[32px] bg-ink text-cream p-10 md:p-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lavender/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-teal/40 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lavender">Stand with us</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Every act of care compounds.
              </h2>
              <p className="mt-5 max-w-lg text-cream/75 leading-relaxed">
                Whether it's ₹500 or your Saturday morning — the work grows in
                the company you keep it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink hover:bg-cream/90 transition-colors">
                Donate <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream hover:border-cream/60 transition-colors">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
