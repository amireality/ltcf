import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
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
          { title: `${loaderData.theme.title} — LTCF` },
          { name: "description", content: loaderData.theme.summary },
          { property: "og:title", content: `${loaderData.theme.title} — LTCF` },
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
          {theme.summary}
        </p>
      </section>

      <section className="container-ltcf pb-24">
        <div className="tinted-photo aspect-[16/8] bg-lavender/40" />
      </section>

      <section className="container-ltcf pb-24 md:pb-32 grid gap-16 md:grid-cols-[1fr_1.6fr]">
        <div>
          <span className="eyebrow">The work</span>
        </div>
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            This page will hold the deeper story of {theme.title.toLowerCase()} —
            the communities, the field partners, the numbers, and the honest
            reflections of what has and hasn't worked.
          </p>
          <p>
            Full narrative content and photography will be added in the next
            content pass. For now, this is a working template.
          </p>
        </div>
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
