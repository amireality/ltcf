import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeUp } from "@/components/site/FadeUp";
import { milestones } from "@/content/site";
import communityImg from "@/assets/Whoweare.JPG.asset.json";

import { themes } from "@/content/site";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Luv 2 Care Foundation" },
      { name: "description", content: "The people, principles, and impact themes behind Luv 2 Care Foundation." },
      { property: "og:title", content: "What We Do — Luv 2 Care Foundation" },
    ],
  }),
  component: WhatWeDo,
});

const solidToneBg: Record<string, string> = {
  purple: "bg-purple text-cream",
  yellow: "bg-yellow text-ink",
  red: "bg-red text-cream",
  orange: "bg-orange text-ink",
  green: "bg-green text-cream",
  beige: "bg-[#F5F5DC] text-ink",
};

function WhatWeDo() {
  return (
    <SiteShell>
      <div className="bg-green text-cream">
        <section className="container-ltcf pt-16 md:pt-24 pb-16">
        <span className="eyebrow">What We Do</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          A small team. A long conversation.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-cream/80 leading-relaxed">
          We are a team of 46 across nine states, and hundreds of community
          collaborators. Our work is guided by a simple principle: show up,
          listen first, and stay for the long haul.
        </p>
      </section>

      <section className="container-ltcf pb-24">
        <div className="tinted-photo aspect-[16/9]">
          <img
            src={communityImg.url}
            alt="A community gathering at a Luv 2 Care event — hundreds of families, children in the front, elders and volunteers behind."

            width={1600}
            height={912}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      </div>

      <section className="bg-purple text-cream">
        <div className="container-ltcf py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="eyebrow !text-yellow">Principles</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight max-w-md text-cream">
                Four sentences we come back to when a decision is hard.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { t: "Listen first", d: "Every programme begins with a season of listening — no assumptions, no template solutions." },
                { t: "Stay long", d: "We measure our work in years, not quarters. Trust is the only real currency." },
                { t: "Local first", d: "Field teams are rooted in the communities they serve. We are guests, always." },
                { t: "Transparent", d: "Every rupee is reported. Every mistake is written down and shared." },
              ].map((p) => (
                <div key={p.t} className="rounded-2xl bg-white/10 p-6 shadow-sm border border-white/10">
                  <h3 className="text-xl font-semibold tracking-tight text-cream">{p.t}</h3>
                  <p className="mt-2 text-sm text-cream/80 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY — scroll-linked timeline */}
      <section className="bg-yellow text-ink">
        <div className="container-ltcf py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="eyebrow">Our journey</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink">
              Fifteen years, quietly.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink/80 leading-relaxed">
              Luv 2 Care Foundation was never planned as an organisation. Here are the years
              that shaped it — in the words of the people who lived them.
            </p>
          </div>

          <ol className="relative mt-16 border-l-2 border-ink/20 ml-3 md:ml-6 space-y-16">
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={i * 0.04}>
                <li className="relative pl-8 md:pl-12">
                  <span className="absolute -left-[11px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-ink ring-8 ring-yellow">
                    <span className="h-2 w-2 rounded-full bg-yellow" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink font-bold">{m.year}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-ink">{m.title}</h3>
                  <p className="mt-3 max-w-xl text-ink/80 leading-relaxed">{m.body}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="container-ltcf">
          <div className="max-w-3xl mb-16">
          <span className="eyebrow !text-yellow">Impact Themes</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-cream">
            Six threads, one fabric of care.
          </h2>
          <p className="mt-5 text-lg text-cream/70 leading-relaxed">
            Our themes are the ways communities have told us they want to be supported. Each one is a long conversation, not a project.
          </p>
        </div>

        <div className="grid gap-16 md:gap-24">
          {themes.map((t, i) => (
            <div key={t.slug} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-start p-10 rounded-[2.5rem] ${solidToneBg[t.tone]}`}>
              <div>
                <span className="inline-flex h-9 items-center rounded-full bg-white/20 px-3.5 text-xs font-bold uppercase tracking-[0.14em]">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-3xl font-bold tracking-tight">{t.title}</h3>
                <p className="mt-4 text-lg opacity-90 leading-relaxed font-medium">
                  {t.lede}
                </p>
                <div className="mt-8 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-[0.14em] opacity-80">Our Approach</h4>
                  <ul className="space-y-3">
                    {t.approach.map((a, j) => (
                      <li key={j} className="flex gap-3 opacity-90 leading-relaxed font-medium">
                        <span className="mt-1">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <Link
                    to="/impact/$slug"
                    params={{ slug: t.slug }}
                    className="inline-flex items-center gap-2 rounded-full bg-black/10 border border-black/10 px-6 py-3.5 text-sm font-bold shadow-sm hover:bg-black/20 transition-colors"
                  >
                    Read full story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-3xl p-8 border border-white/20 shadow-sm backdrop-blur-md">
                <div className="grid grid-cols-2 gap-6 pb-8 border-b border-white/20">
                  {t.numbers.map((n, idx) => (
                    <div key={idx}>
                      <p className="text-3xl font-bold">{n.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.1em] font-bold opacity-80">{n.label}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <h4 className="text-sm font-bold uppercase tracking-[0.14em] opacity-80 mb-4">Story of Change</h4>
                  <blockquote className="text-lg italic opacity-90 leading-relaxed font-serif">
                    "{t.story.quote}"
                  </blockquote>
                  <p className="mt-4 text-sm font-bold">— {t.story.person}, {t.story.where}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-red text-cream py-24 md:py-32">
        <div className="container-ltcf grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow !text-cream">Governance</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-cream">
              Registered, audited, accountable.
            </h2>
          </div>
          <div className="space-y-4 text-cream/90 leading-relaxed font-medium">
            <p>Luv 2 Care Foundation is incorporated as a Section 8 company under the Companies Act, 2013 in the State of Delhi. Directors: Prerna Mishra and Rajesh.</p>
            <p>Our annual accounts are audited by an independent Chartered Accountant. The board meets regularly; minutes are available on request.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
