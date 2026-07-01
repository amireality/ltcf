import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { StatCounter } from "@/components/site/StatCounter";
import { FadeUp } from "@/components/site/FadeUp";
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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-lavender/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-32 h-[360px] w-[360px] rounded-full bg-teal/15 blur-3xl" />

        <div className="container-ltcf relative pt-14 md:pt-24 pb-20 md:pb-32">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <div>
              <span className="eyebrow">Est. 2011 · India</span>
              <h1 className="mt-6 text-[44px] leading-[1.02] md:text-6xl lg:text-[76px] font-semibold tracking-[-0.03em]">
                Care, in every{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">corner.</span>
                  <span className="absolute inset-x-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-lavender/70 -z-0 rounded-sm" />
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg md:text-xl text-foreground/75 leading-relaxed">
                {site.mission}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-teal-deep hover:shadow-lg"
                >
                  Support our work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-ink/40 transition-colors"
                >
                  See our work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="tinted-photo aspect-[4/5]">
                <img
                  src={heroImg}
                  alt="A community teacher reading with two young girls on a woven mat in a sunlit courtyard."
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block max-w-[240px] rounded-2xl bg-background p-4 shadow-lg border border-border">
                <p className="text-xs uppercase tracking-[0.16em] text-teal font-semibold">Field note</p>
                <p className="mt-2 text-sm leading-snug text-foreground/80">
                  “We don't arrive with answers. We arrive with time.” — Ritu, programme lead
                </p>
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
