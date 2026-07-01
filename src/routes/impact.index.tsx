import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeUp } from "@/components/site/FadeUp";
import { themes } from "@/content/site";

export const Route = createFileRoute("/impact/")({
  head: () => ({
    meta: [
      { title: "Impact Themes — Love To Care Foundation" },
      { name: "description", content: "The five threads of LTCF's work: education, health, livelihood, dignity, and climate & community." },
      { property: "og:title", content: "Impact Themes — LTCF" },
      { property: "og:description", content: "Five long conversations, not five projects." },
    ],
  }),
  component: ImpactIndex,
});

function ImpactIndex() {
  return (
    <SiteShell>
      <section className="container-ltcf pt-16 md:pt-24 pb-16">
        <span className="eyebrow">Impact Themes</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          Five threads, one fabric of care.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          Each theme is a long-term relationship with the communities we serve.
          Click through to read the stories, the numbers, and the partners
          behind each one.
        </p>
      </section>

      <section className="container-ltcf pb-24 md:pb-32">
        <div className="grid gap-5 md:grid-cols-2">
          {themes.map((t, i) => (
            <FadeUp key={t.slug} delay={i * 0.05}>
              <Link
                to="/impact/$slug"
                params={{ slug: t.slug }}
                className="group block rounded-3xl border border-border bg-card p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40 transition-all"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-teal font-semibold">
                      Theme 0{i + 1}
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                      {t.title}
                    </h2>
                    <p className="mt-4 text-foreground/70 max-w-md leading-relaxed">
                      {t.summary}
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-teal shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

// noop to appease notFound import shake
void notFound;
