// LTCF site content store. Static for Phase 1; migrates to Lovable Cloud later.

export const site = {
  name: "Love To Care Foundation",
  short: "LTCF",
  tagline: "Care, in every corner.",
  mission:
    "We build quiet, lasting change with communities across India — through education, health, livelihood and dignity.",
  location: "India",
  email: "hello@lovetocare.org",
  phone: "+91 00000 00000",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/impact", label: "Impact Themes" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/knowledge", label: "Knowledge Center" },
  { to: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: 12400, suffix: "+", label: "Lives touched" },
  { value: 38, suffix: "", label: "Communities served" },
  { value: 9, suffix: "", label: "States reached" },
  { value: 14, suffix: "", label: "Years of work" },
];

export type Theme = {
  slug: string;
  title: string;
  summary: string;
  tone: "lavender" | "teal" | "terracotta" | "mustard" | "sage";
};

export const themes: Theme[] = [
  {
    slug: "education",
    title: "Education & Learning",
    summary:
      "Learning spaces, teacher fellowships and material support for first-generation learners.",
    tone: "lavender",
  },
  {
    slug: "health",
    title: "Health & Wellbeing",
    summary:
      "Preventive camps, maternal care and mental-health circles for underserved communities.",
    tone: "teal",
  },
  {
    slug: "livelihood",
    title: "Livelihood & Skills",
    summary:
      "Vocational training and micro-enterprise support for women and rural youth.",
    tone: "terracotta",
  },
  {
    slug: "dignity",
    title: "Dignity & Rights",
    summary:
      "Legal aid, documentation drives and safe spaces for migrant and marginalised families.",
    tone: "mustard",
  },
  {
    slug: "climate",
    title: "Climate & Community",
    summary:
      "Water conservation, kitchen gardens and climate-resilient livelihoods.",
    tone: "sage",
  },
];

export const milestones = [
  { year: "2011", title: "A kitchen table beginning", body: "Five friends pooled ₹2,000 a month to fund school supplies for 12 children." },
  { year: "2014", title: "First learning centre", body: "Opened in a two-room space in Bhopal, serving 60 first-generation learners." },
  { year: "2017", title: "Health circle", body: "Launched maternal health camps across 6 villages in partnership with local ASHAs." },
  { year: "2020", title: "Pandemic response", body: "Distributed 42,000 ration kits and moved learning to community radio." },
  { year: "2023", title: "Livelihood cohort", body: "First 120 women graduated from the tailoring & digital literacy programme." },
  { year: "2026", title: "Where we are now", body: "Working across 9 states with 38 partner communities and a team of 46." },
];

export const articles = [
  {
    slug: "why-quiet-work-lasts",
    title: "Why quiet work lasts longer than loud campaigns",
    kicker: "Field notes",
    minutes: 6,
  },
  {
    slug: "listening-before-lending",
    title: "Listening before lending: what a livelihood cohort taught us",
    kicker: "Case study",
    minutes: 9,
  },
  {
    slug: "annual-report-2025",
    title: "Annual Report 2025 — the year in numbers and stories",
    kicker: "Report",
    minutes: 4,
  },
];
