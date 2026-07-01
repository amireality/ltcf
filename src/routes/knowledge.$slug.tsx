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
          { name: "description", content: `${loaderData.article.kicker} from Love To Care Foundation — ${loaderData.article.minutes} min read.` },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: `${loaderData.article.kicker} · ${loaderData.article.minutes} min read.` },
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
        <div className="mt-12 tinted-photo aspect-[16/8] bg-lavender/40" />
        <div className="mt-12 space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            This is a placeholder body for the article. Full text will be added
            in the next content pass — or wired up to Lovable Cloud so the LTCF
            team can publish directly from an admin panel.
          </p>
          <p>
            Each article on the Knowledge Center will support long-form text,
            in-line images, pull quotes and downloadable PDFs.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
