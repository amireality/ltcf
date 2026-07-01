import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Love To Care Foundation" },
      { name: "description", content: "Reach the LTCF team — for partnerships, volunteering, press, or a simple hello." },
      { property: "og:title", content: "Contact — LTCF" },
      { property: "og:description", content: "Get in touch with Love To Care Foundation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteShell>
      <section className="container-ltcf pt-16 md:pt-24 pb-16">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          Say hello. We read every note.
        </h1>
      </section>

      <section className="container-ltcf pb-24 md:pb-32 grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lavender/40 shrink-0">
              <Mail className="h-4 w-4 text-ink" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Email</p>
              <p className="mt-1 text-lg">{site.email}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lavender/40 shrink-0">
              <Phone className="h-4 w-4 text-ink" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Phone</p>
              <p className="mt-1 text-lg">{site.phone}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lavender/40 shrink-0">
              <MapPin className="h-4 w-4 text-ink" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Based in</p>
              <p className="mt-1 text-lg">{site.location}</p>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Contact form will be wired up in the next pass.");
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">Your name</span>
              <input required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">Email</span>
              <input required type="email" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">What's this about?</span>
            <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40">
              <option>Volunteering</option>
              <option>Partnership</option>
              <option>Press / media</option>
              <option>Just saying hello</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">Message</span>
            <textarea required rows={5} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-teal-deep transition-colors"
          >
            Send message
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
