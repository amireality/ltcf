import { createFileRoute } from "@tanstack/react-router";
import { Heart, QrCode, Link as LinkIcon } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import donateHero from "@/assets/donate_hero.png.asset.json";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Luv 2 Care Foundation" },
      { name: "description", content: "Support Luv 2 Care Foundation's work across India. Every ₹500 keeps a child learning for a month." },
      { property: "og:title", content: "Donate — Luv 2 Care Foundation" },
      { property: "og:description", content: "Stand with Luv 2 Care Foundation. Every act of care compounds." },
    ],
  }),
  component: Donate,
});

const amounts = [500, 1500, 3000, 7500];

function Donate() {
  return (
    <SiteShell>
      {/* HERO with background image */}
      <section className="relative overflow-hidden">
        <img
          src={donateHero.url}
          alt="Volunteers with schoolchildren at a Luv 2 Care community event."
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />
        <div className="absolute inset-0 bg-lavender/10 mix-blend-multiply" />
        <div className="container-ltcf relative pt-24 md:pt-36 pb-24 md:pb-36">
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase text-lavender">
            <span className="h-px w-10 bg-lavender" /> Donate
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-cream max-w-4xl">
            Small, steady, together.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-cream/85 leading-relaxed">
            Your contribution supports learning centres, health camps, animal
            welfare drives and safe circles across India. All donations are
            eligible for 80G tax exemption.
          </p>
        </div>
      </section>



      <section className="container-ltcf pb-24 md:pb-32 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl bg-card border border-border p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Choose an amount</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {amounts.map((a) => (
              <button
                key={a}
                className="rounded-2xl border border-border px-4 py-5 text-center hover:border-teal hover:bg-teal/5 transition-colors"
              >
                <span className="block text-2xl font-semibold">₹{a.toLocaleString("en-IN")}</span>
                <span className="block text-xs text-muted-foreground mt-1">One-time</span>
              </button>
            ))}
          </div>
          <div className="mt-6">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">Or a custom amount (₹)</span>
              <input type="number" min={100} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" placeholder="1000" />
            </label>
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-teal-deep transition-colors">
            <Heart className="h-4 w-4 fill-current" /> Continue to donate
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Payment gateway (Razorpay / UPI link) will be wired in a follow-up pass.
          </p>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl bg-lavender-soft/60 p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-background">
                <QrCode className="h-4 w-4" />
              </span>
              <h3 className="text-lg font-semibold">UPI / QR</h3>
            </div>
            <div className="mt-6 aspect-square rounded-2xl bg-background grid place-items-center border border-border">
              <span className="text-xs text-muted-foreground">QR placeholder</span>
            </div>
            <p className="mt-4 text-sm text-foreground/75">
              Scan with any UPI app. GPay, PhonePe, Paytm and BHIM all work.
            </p>
          </div>
          <div className="rounded-3xl bg-ink text-cream p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10">
                <LinkIcon className="h-4 w-4" />
              </span>
              <h3 className="text-lg font-semibold">Bank transfer</h3>
            </div>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-cream/60">Account</dt><dd>LTCF Public Trust</dd></div>
              <div className="flex justify-between"><dt className="text-cream/60">A/C no.</dt><dd>0000 0000 0000</dd></div>
              <div className="flex justify-between"><dt className="text-cream/60">IFSC</dt><dd>XXXX0000000</dd></div>
              <div className="flex justify-between"><dt className="text-cream/60">Bank</dt><dd>State Bank of India</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
