import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeUp } from "@/components/site/FadeUp";
import { milestones } from "@/content/site";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — Love To Care Foundation" },
      { name: "description", content: "The people, principles and journey behind LTCF — a 14-year story of quiet, community-first work." },
      { property: "og:title", content: "Who We Are — LTCF" },
      { property: "og:description", content: "The people and principles behind Love To Care Foundation." },
    ],
  }),
  component: WhoWeAre,
});

function WhoWeAre() {
  return (
    <SiteShell>
      <section className="container-ltcf pt-16 md:pt-24 pb-16">
        <span className="eyebrow">Who We Are</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          A small team. A long conversation.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          We are a team of 46 across nine states, and hundreds of community
          collaborators. Our work is guided by a simple principle: show up,
          listen first, and stay for the long haul.
        </p>
      </section>

      <section className="container-ltcf pb-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">Principles</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { t: "Listen first", d: "Every programme begins with a season of listening — no assumptions, no template solutions." },
              { t: "Stay long", d: "We measure our work in years, not quarters. Trust is the only real currency." },
              { t: "Local first", d: "Field teams are rooted in the communities they serve. We are guests." },
              { t: "Transparent", d: "Every rupee is reported. Every mistake is written down." },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl bg-lavender-soft/60 p-6">
                <h3 className="text-xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-background border-y border-border/60">
        <div className="container-ltcf py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="eyebrow">Our journey</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Fifteen years, quietly.
            </h2>
          </div>

          <ol className="relative mt-14 border-l-2 border-lavender/50 ml-3 md:ml-6 space-y-14">
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={i * 0.04}>
                <li className="relative pl-8 md:pl-12">
                  <span className="absolute -left-[11px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-teal">
                    <span className="h-2 w-2 rounded-full bg-cream" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-teal font-semibold">{m.year}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{m.title}</h3>
                  <p className="mt-3 max-w-xl text-foreground/75 leading-relaxed">{m.body}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
