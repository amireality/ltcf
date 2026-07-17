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

const solidBgMap: Record<string, string> = {
  purple: "bg-purple text-cream",
  yellow: "bg-yellow text-ink",
  red: "bg-red text-cream",
  orange: "bg-orange text-ink",
  green: "bg-green text-cream",
  beige: "bg-[#F5F5DC] text-ink",
};

const cardBgMap: Record<string, string> = {
  purple: "bg-white/10 border-white/20",
  yellow: "bg-black/5 border-black/10",
  red: "bg-white/10 border-white/20",
  orange: "bg-black/5 border-black/10",
  green: "bg-white/10 border-white/20",
  beige: "bg-black/5 border-black/10",
};

const textMap: Record<string, string> = {
  purple: "text-cream",
  yellow: "text-ink",
  red: "text-cream",
  orange: "text-ink",
  green: "text-cream",
  beige: "text-ink",
};

const mutedTextMap: Record<string, string> = {
  purple: "text-cream/70",
  yellow: "text-ink/70",
  red: "text-cream/70",
  orange: "text-ink/70",
  green: "text-cream/70",
  beige: "text-ink/70",
};

function ThemePage() {
  const { theme } = Route.useLoaderData();
  const idx = themes.findIndex((t) => t.slug === theme.slug);
  const next = themes[(idx + 1) % themes.length];

  const tColor = textMap[theme.tone];
  const tMuted = mutedTextMap[theme.tone];
  const cBg = cardBgMap[theme.tone];

  return (
    <SiteShell>
      <div className={`relative min-h-screen ${solidBgMap[theme.tone]} transition-colors duration-1000 overflow-hidden`}>
        
        <div className="relative z-10">
          <section className="container-ltcf pt-14 md:pt-24 pb-16">
            <Link to="/#themes" className={`inline-flex items-center gap-1.5 text-sm ${tMuted} hover:${tColor} font-medium transition-colors`}>
              <ArrowLeft className="h-4 w-4" /> All themes
            </Link>
            <div className="mt-12">
              <span className={`eyebrow !${tColor} ${cBg} px-4 py-2 rounded-full border shadow-sm`}>
                Theme 0{idx + 1}
              </span>
            </div>
            <h1 className={`mt-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl ${tColor}`}>
              {theme.title}
            </h1>
            <p className={`mt-10 max-w-2xl text-xl md:text-2xl ${tMuted} leading-relaxed`}>
              {theme.lede}
            </p>
          </section>

          <section className="container-ltcf pb-24">
            <div className={`relative aspect-[16/8] ${cBg} rounded-[2.5rem] overflow-hidden shadow-2xl border group`}>
              <img 
                src={theme.image} 
                alt={theme.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
          </section>

          <section className="container-ltcf pb-24 md:pb-32 grid gap-16 md:grid-cols-[1fr_1.6fr]">
            <div>
              <span className={`eyebrow !${tColor} ${cBg} px-4 py-2 rounded-full border`}>
                How we work
              </span>
            </div>
            <ul className={`space-y-4 text-lg md:text-xl ${tColor} leading-relaxed`}>
              {theme.approach.map((a: string, i: number) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <li className={`flex gap-6 group p-6 rounded-[2rem] hover:${cBg} transition-all duration-300 border border-transparent`}>
                    <span className={`mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full ${cBg} border group-hover:scale-150 transition-all duration-300 shadow-sm`} />
                    <span>{a}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </section>

          <section className="container-ltcf pb-24 md:pb-32">
            <div className={`rounded-[3rem] ${cBg} border p-12 md:p-24 shadow-xl relative overflow-hidden`}>
              
              <span className={`eyebrow !${tColor} ${cBg} border px-4 py-2 rounded-full shadow-sm`}>
                In numbers
              </span>
              <div className="mt-14 grid gap-10 md:grid-cols-3 relative z-10">
                {theme.numbers.map((n: { value: string; label: string }) => (
                  <div key={n.label} className="group">
                    <p className={`text-6xl md:text-7xl font-bold tracking-tight ${tColor} group-hover:scale-105 transition-transform origin-left`}>
                      {n.value}
                    </p>
                    <p className={`mt-4 text-sm uppercase tracking-[0.16em] ${tMuted} font-semibold`}>
                      {n.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="container-ltcf py-20 flex justify-center text-center">
            <div className="max-w-4xl relative">
              <Quote className={`h-40 w-40 ${tMuted} opacity-20 absolute -top-16 left-1/2 -translate-x-1/2 -z-10 rotate-3`} />
              <p className={`text-3xl md:text-5xl font-medium leading-[1.3] tracking-tight ${tColor}`}>
                "{theme.story.quote}"
              </p>
              <footer className={`mt-12 text-sm uppercase tracking-[0.2em] ${tColor} font-bold`}>
                — {theme.story.person} · <span className="opacity-70">{theme.story.where}</span>
              </footer>
            </div>
          </section>

          <section className="container-ltcf pb-32 pt-10">
            <Link
              to="/impact/$slug"
              params={{ slug: next.slug }}
              className={`group flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-[3rem] ${cBg} border p-10 md:p-14 hover:scale-[1.01] transition-all duration-500 shadow-xl`}
            >
              <div>
                <p className={`text-xs uppercase tracking-[0.18em] ${tMuted} font-bold`}>Next theme</p>
                <p className={`mt-3 text-3xl md:text-4xl font-bold tracking-tight ${tColor}`}>{next.title}</p>
              </div>
              <div className={`h-16 w-16 rounded-full ${cBg} border flex items-center justify-center shadow-md transition-colors duration-300`}>
                <ArrowRight className={`h-6 w-6 ${tColor} transition-transform group-hover:translate-x-1`} />
              </div>
            </Link>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}

