import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeUp } from "@/components/site/FadeUp";
import { articles } from "@/content/site";

export const Route = createFileRoute("/knowledge/")({
  head: () => ({
    meta: [
      { title: "Knowledge Center — Luv 2 Care Foundation" },
      { name: "description", content: "Field notes, case studies and annual reports from Luv 2 Care Foundation's work across India." },
      { property: "og:title", content: "Knowledge Center — Luv 2 Care Foundation" },
      { property: "og:description", content: "Field notes and reports from our community-first work." },

    ],
  }),
  component: KnowledgeIndex,
});

function KnowledgeIndex() {
  return (
    <SiteShell>
      <section className="container-ltcf pt-16 md:pt-24 pb-16">
        <span className="eyebrow">Knowledge Center</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          What we learn, written down.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          Reports, field notes, and case studies from our teams. Honest,
          slow, and without varnish.
        </p>
      </section>

      <section className="container-ltcf pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <FadeUp key={a.slug} delay={i * 0.05}>
              <Link
                to="/knowledge/$slug"
                params={{ slug: a.slug }}
                className="group block h-full rounded-3xl bg-card border border-border p-7 hover:border-teal/40 hover:shadow-md transition-all"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-teal font-semibold">
                  {a.kicker} · {a.minutes} min read
                </p>
                <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight leading-snug group-hover:text-teal-deep transition-colors">
                  {a.title}
                </h3>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                  Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
