import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Luv 2 Care Foundation" },
      { name: "description", content: "Reach the Luv 2 Care Foundation team — for partnerships, volunteering, press, or a simple hello. We read every note." },
      { property: "og:title", content: "Contact — Luv 2 Care Foundation" },
      { property: "og:description", content: "Get in touch with Luv 2 Care Foundation." },

    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <div className="bg-orange text-ink min-h-screen">
      <section className="container-ltcf pt-16 md:pt-24 pb-16">
        <span className="eyebrow !text-ink">Contact</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          Say hello. We read every note.
        </h1>
      </section>

      <section className="container-ltcf pb-24 md:pb-32 grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink/10 shrink-0">
              <Mail className="h-4 w-4 text-ink" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] font-bold opacity-80">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-lg font-medium hover:text-ink/70">{site.email}</a>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink/10 shrink-0">
              <Phone className="h-4 w-4 text-ink" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] font-bold opacity-80">Phone</p>
              <p className="mt-1 text-lg font-medium">{site.phone}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink/10 shrink-0">
              <MapPin className="h-4 w-4 text-ink" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] font-bold opacity-80">Based in</p>
              <p className="mt-1 text-lg font-medium">{site.location}</p>
            </div>
          </div>
        </div>

        {sent ? (
          <div className="rounded-3xl border border-ink/20 bg-ink/5 p-10 md:p-14 flex flex-col items-start">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream">
              <Check className="h-5 w-5" />
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight">Thank you.</h2>
            <p className="mt-3 text-ink/80 leading-relaxed max-w-md">
              Your note has been received. Someone from the team will write
              back within two working days — often sooner.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-8 text-sm font-bold text-ink hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="rounded-3xl border border-ink/20 bg-white/20 backdrop-blur-md p-8 md:p-10 space-y-5 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              // Email delivery via Lovable Cloud edge function is queued for the next pass.
              setSent(true);
            }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] font-bold opacity-80">Your name</span>
                <input required className="mt-2 w-full rounded-xl border border-ink/20 bg-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink/40 text-ink placeholder:text-ink/50" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] font-bold opacity-80">Email</span>
                <input required type="email" className="mt-2 w-full rounded-xl border border-ink/20 bg-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink/40 text-ink placeholder:text-ink/50" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.14em] font-bold opacity-80">What's this about?</span>
              <select className="mt-2 w-full rounded-xl border border-ink/20 bg-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink/40 text-ink">
                <option>Volunteering</option>
                <option>Partnership</option>
                <option>Press / media</option>
                <option>Just saying hello</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.14em] font-bold opacity-80">Message</span>
              <textarea required rows={5} className="mt-2 w-full rounded-xl border border-ink/20 bg-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink/40 text-ink placeholder:text-ink/50" />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-cream hover:bg-ink/80 transition-colors shadow-md"
            >
              Send message
            </button>
          </form>
        )}
      </section>
      </div>
    </SiteShell>
  );
}
