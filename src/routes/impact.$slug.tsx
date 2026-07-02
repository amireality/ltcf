import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeUp } from "@/components/site/FadeUp";
import { themes } from "@/content/site";

export const Route = createFileRoute("/impact/$slug")({
  loader: ({ params }) => {
    const theme = themes.find((t) => t.slug === params.slug);
    if (!theme) throw notFound();
    return { theme };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.theme.title} — Luv 2 Care Foundation` },
          { name: "description", content: loaderData.theme.summary },
          { property: "og:title", content: `${loaderData.theme.title} — Luv 2 Care Foundation` },

          { property: "og:description", content: loaderData.theme.summary },
        ]
      : [],
  }),
  component: ThemePage,
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-ltcf py-32 text-center">
        <h1 className="text-4xl font-semibold">Theme not found</h1>
        <Link to="/impact" className="mt-6 inline-block text-teal font-semibold">Back to themes</Link>
      </div>
    </SiteShell>
  ),
});

const toneBg: Record<string, string> = {
  lavender: "bg-lavender/40",
  teal: "bg-teal/25",
  terracotta: "bg-terracotta/30",
  mustard: "bg-mustard/35",
  sage: "bg-sage/35",
};

function ThemePage() {
  const { theme } = Route.useLoaderData();
  const idx = themes.findIndex((t) => t.slug === theme.slug);
  const next = themes[(idx + 1) % themes.length];

  return (
    <SiteShell>
      <section className="container-ltcf pt-14 md:pt-20 pb-16">
        <Link to="/impact" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> All themes
        </Link>
        <span className="mt-8 eyebrow">Theme 0{idx + 1}</span>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          {theme.title}
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-foreground/75 leading-relaxed">
          {theme.lede}
        </p>
      </section>

      <section className="container-ltcf pb-24">
        <div className={`tinted-photo aspect-[16/8] ${toneBg[theme.tone]}`} />
      </section>

      <section className="container-ltcf pb-24 md:pb-32 grid gap-16 md:grid-cols-[1fr_1.6fr]">
        <div>
          <span className="eyebrow">How we work</span>
        </div>
        <ul className="space-y-6 text-lg text-foreground/85 leading-relaxed">
          {theme.approach.map((a: string, i: number) => (
            <FadeUp key={i} delay={i * 0.05}>
              <li className="flex gap-5">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                <span>{a}</span>
              </li>
            </FadeUp>
          ))}
        </ul>
      </section>

      <section className="bg-lavender-soft/50 border-y border-border/60">
        <div className="container-ltcf py-20 md:py-24">
          <span className="eyebrow">In numbers</span>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {theme.numbers.map((n: { value: string; label: string }) => (
              <div key={n.label}>
                <p className="text-5xl md:text-6xl font-semibold tracking-tight text-teal-deep">{n.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-ltcf py-24 md:py-32 grid gap-14 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <Quote className="h-10 w-10 text-lavender" />
        </div>
        <blockquote>
          <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight text-foreground">
            "{theme.story.quote}"
          </p>
          <footer className="mt-6 text-sm uppercase tracking-[0.16em] text-muted-foreground">
            — {theme.story.person} · {theme.story.where}
          </footer>
        </blockquote>
      </section>

      <section className="container-ltcf pb-24 md:pb-32">
        <Link
          to="/impact/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-between rounded-3xl border border-border bg-card p-8 hover:border-teal/40 transition-all"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-teal font-semibold">Next theme</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{next.title}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-teal transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </SiteShell>
  );
}
