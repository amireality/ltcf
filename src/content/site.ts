// LTCF site content store. Static now; ready to migrate to Lovable Cloud when we
// wire the admin CMS (Phase 5) — table shapes should mirror these types.

export const site = {
  name: "Love To Care Foundation",
  short: "LTCF",
  tagline: "Care, in every corner.",
  mission:
    "We build quiet, lasting change with communities across India — through education, health, livelihood and dignity.",
  location: "Bhopal, Madhya Pradesh, India",
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

export type Tone = "lavender" | "teal" | "terracotta" | "mustard" | "sage";

export type Theme = {
  slug: string;
  title: string;
  summary: string;
  tone: Tone;
  lede: string;
  approach: string[];
  numbers: { value: string; label: string }[];
  story: { quote: string; person: string; where: string };
};

export const themes: Theme[] = [
  {
    slug: "education",
    title: "Education & Learning",
    summary:
      "Learning spaces, teacher fellowships and material support for first-generation learners.",
    tone: "lavender",
    lede: "We run neighbourhood learning centres for children whose parents never sat in a classroom. The work is slow — a decade in, we are still learning how to teach.",
    approach: [
      "Six community-run learning centres across MP, Rajasthan and Jharkhand.",
      "Teacher fellowships that pair young graduates with senior educators for two years.",
      "Reading kits, menstrual kits and a warm meal — because learning happens in a body.",
    ],
    numbers: [
      { value: "1,240", label: "Children in centres" },
      { value: "38", label: "Fellow teachers" },
      { value: "92%", label: "Retention (Yr 1 → Yr 2)" },
    ],
    story: {
      quote:
        "My mother wanted me to stop after class 5. Didi came home and sat with her for four evenings. I am in class 9 now.",
      person: "Priya, 14",
      where: "Vidisha, MP",
    },
  },
  {
    slug: "health",
    title: "Health & Wellbeing",
    summary:
      "Preventive camps, maternal care and mental-health circles for underserved communities.",
    tone: "teal",
    lede: "Health work at LTCF is built around ASHAs — the women who already know every family. We don't replace the system, we sit alongside it.",
    approach: [
      "Monthly maternal-health camps in 24 villages, in partnership with local ASHAs.",
      "Mental-health listening circles for women and adolescent girls.",
      "A last-mile referral fund for surgeries the public system can't schedule fast enough.",
    ],
    numbers: [
      { value: "3,100", label: "Women in maternal care" },
      { value: "24", label: "Villages covered" },
      { value: "₹18L", label: "Referral fund disbursed (2025)" },
    ],
    story: {
      quote:
        "The circle is the only place I can say I am tired without someone offering me a solution.",
      person: "Sunita, ASHA worker",
      where: "Betul, MP",
    },
  },
  {
    slug: "livelihood",
    title: "Livelihood & Skills",
    summary:
      "Vocational training and micro-enterprise support for women and rural youth.",
    tone: "terracotta",
    lede: "A livelihood is not a one-time skill — it is a relationship with a market. Our cohorts stay together for two years past graduation.",
    approach: [
      "Two-year tailoring, digital-literacy and food-processing cohorts.",
      "A revolving fund that lets women borrow ₹5,000–₹25,000 without collateral.",
      "Warm-market help: printing, GST, first three orders, a WhatsApp Business setup.",
    ],
    numbers: [
      { value: "120", label: "Women graduated (2025)" },
      { value: "₹9,400", label: "Median monthly income" },
      { value: "86%", label: "Still trading, 18 months on" },
    ],
    story: {
      quote:
        "First time in my life a bank called me 'ma'am'. I laughed for a full minute.",
      person: "Rekha, tailoring cohort",
      where: "Sagar, MP",
    },
  },
  {
    slug: "dignity",
    title: "Dignity & Rights",
    summary:
      "Legal aid, documentation drives and safe spaces for migrant and marginalised families.",
    tone: "mustard",
    lede: "A ration card, an Aadhaar linkage, a birth certificate — the paperwork of citizenship is the paperwork of dignity. We show up on the days no one else does.",
    approach: [
      "Weekly documentation clinics at three urban migrant settlements.",
      "A panel of pro-bono lawyers for domestic-violence and wage-theft cases.",
      "Safe overnight spaces for women in transit crises.",
    ],
    numbers: [
      { value: "2,700+", label: "Documents restored" },
      { value: "48", label: "Cases fought pro-bono" },
      { value: "312", label: "Nights of safe shelter" },
    ],
    story: {
      quote: "They didn't ask me why I ran. They asked if I had eaten.",
      person: "Anonymous, safe-shelter guest",
      where: "Indore",
    },
  },
  {
    slug: "climate",
    title: "Climate & Community",
    summary: "Water conservation, kitchen gardens and climate-resilient livelihoods.",
    tone: "sage",
    lede: "The climate conversation, at village scale, is a conversation about water. We build with — never for — the panchayat.",
    approach: [
      "Reviving 14 traditional johads and check-dams with village labour and matched funds.",
      "Kitchen-garden kits for 800 households — seeds, drip-lines, training.",
      "A climate-resilient millet cooperative in three drought-prone blocks.",
    ],
    numbers: [
      { value: "14", label: "Water bodies revived" },
      { value: "800", label: "Kitchen gardens" },
      { value: "3", label: "Millet co-ops" },
    ],
    story: {
      quote:
        "My mother-in-law grew up on millets. My children forgot. Now they are asking for them at dinner.",
      person: "Kaveri",
      where: "Chhatarpur, MP",
    },
  },
];

export const milestones = [
  { year: "2011", title: "A kitchen table beginning", body: "Five friends pooled ₹2,000 a month to fund school supplies for 12 children in a Bhopal basti." },
  { year: "2014", title: "First learning centre", body: "Opened in a two-room space near Karond, serving 60 first-generation learners with two teachers." },
  { year: "2017", title: "Health circle", body: "Launched maternal health camps across 6 villages in partnership with local ASHA workers." },
  { year: "2020", title: "Pandemic response", body: "Distributed 42,000 ration kits, moved learning to community radio, and lost two friends we will not forget." },
  { year: "2023", title: "Livelihood cohort", body: "First 120 women graduated from the tailoring & digital literacy programme. 86% are still trading today." },
  { year: "2026", title: "Where we are now", body: "Working across 9 states with 38 partner communities, a team of 46, and more questions than we started with." },
];

export type Article = {
  slug: string;
  title: string;
  kicker: string;
  minutes: number;
  dek: string;
  author: string;
  date: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "why-quiet-work-lasts",
    title: "Why quiet work lasts longer than loud campaigns",
    kicker: "Field notes",
    minutes: 6,
    dek: "A year of listening in one district taught us more than a decade of dashboards.",
    author: "Ritu Mehta",
    date: "March 2026",
    body: [
      "We spent the whole of 2024 not launching anything. It felt terrible.",
      "In the funding logic we grew up inside, a year without a launch is a year without impact. But a year of only listening — of drinking chai on 200 verandas across four blocks — turned out to be the most useful year of programme design we have ever done.",
      "The women we listened to were unanimous about one thing: they were tired of being 'beneficiaries' of programmes designed elsewhere. What they wanted was slower, smaller, and much more boring than what most NGOs bring to a village.",
      "So we built the 2025 livelihood cohort around three unromantic ideas: it would only accept applications from groups of three or more; the curriculum would be co-written with graduates from the 2019 cohort; and no one would be photographed for a fundraising brochure without their written consent, every time.",
      "The cohort is now 18 months in. Retention is 92%. Median income is up 2.4x. And not a single graduate has been used as a stock image.",
      "Quiet work lasts because it doesn't need to be photographed to be real.",
    ],
  },
  {
    slug: "listening-before-lending",
    title: "Listening before lending: what a livelihood cohort taught us",
    kicker: "Case study",
    minutes: 9,
    dek: "The revolving fund worked. The graduation ceremony did not. Here is what we changed.",
    author: "Amol Verma",
    date: "January 2026",
    body: [
      "In 2023 we ran our first revolving fund — ₹8 lakh, disbursed as micro-loans of ₹5,000 to ₹25,000, no collateral, only a co-signature from two other cohort members.",
      "Eighteen months later, repayment is at 94% and default is concentrated in one specific pattern: women whose husbands had lost work in the same quarter. That is not a credit problem; it is a household-cashflow problem, and we should have designed for it.",
      "We changed three things in the 2025 round. First, every loan now comes with a compulsory 10% held aside as a household buffer, released only on a shock event. Second, we run a partner-conversation session before disbursal — not to gate the loan, but to make the money visible to the household. Third, we stopped calling it 'graduation'. The cohort continues, informally, for as long as the women want it to.",
      "The lesson is simple and old: the design of a financial product is the design of a relationship. If the relationship is honest about who else is in the room, the product is more forgiving.",
    ],
  },
  {
    slug: "annual-report-2025",
    title: "Annual Report 2025 — the year in numbers and stories",
    kicker: "Report",
    minutes: 4,
    dek: "12,400 lives touched, 38 partner communities, one team learning out loud.",
    author: "LTCF Team",
    date: "December 2025",
    body: [
      "This report is shorter than last year's on purpose. We would rather you read one page well than skim ten.",
      "The financial section is unchanged in format from 2020. Every rupee is accounted for on page four. Our audit is by Chaturvedi & Co. and is public on the site.",
      "The narrative section is longer than usual — because 2025 was the year our theory of change actually changed. We used to believe programmes made communities stronger. We now believe communities make programmes possible, and we say so in section two.",
      "As always, we welcome your questions, your disagreements, and your time.",
    ],
  },
];
