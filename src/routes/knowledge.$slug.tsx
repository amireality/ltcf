import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { articles } from "@/content/site";

export const Route = createFileRoute("/knowledge/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — LTCF` },
          { name: "description", content: loaderData.article.dek },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.dek },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-ltcf py-32 text-center">
        <h1 className="text-4xl font-semibold">Article not found</h1>
        <Link to="/knowledge" className="mt-6 inline-block text-teal font-semibold">Back to Knowledge Center</Link>
      </div>
    </SiteShell>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <SiteShell>
      <article className="container-ltcf pt-14 md:pt-20 pb-24 max-w-3xl">
        <Link to="/knowledge" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Knowledge Center
        </Link>
        <p className="mt-10 text-xs uppercase tracking-[0.18em] text-teal font-semibold">
          {article.kicker} · {article.minutes} min read
        </p>
        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          {article.title}
        </h1>
        <p className="mt-6 text-xl text-foreground/70 leading-relaxed">
          {article.dek}
        </p>
        <p className="mt-8 text-sm text-muted-foreground">
          By {article.author} · {article.date}
        </p>
        <div className="mt-12 tinted-photo aspect-[16/8] bg-lavender/40" />
        <div className="mt-12 space-y-6 text-lg text-foreground/85 leading-relaxed">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-lavender-soft/60 p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-teal font-semibold">Keep reading</p>
          <div className="mt-4 grid gap-3">
            {articles.filter((a) => a.slug !== article.slug).map((a) => (
              <Link
                key={a.slug}
                to="/knowledge/$slug"
                params={{ slug: a.slug }}
                className="flex items-center justify-between gap-6 rounded-2xl bg-background/70 p-4 hover:bg-background transition-colors"
              >
                <span className="font-semibold">{a.title}</span>
                <span className="text-xs text-muted-foreground shrink-0">{a.minutes} min</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
