// LTCF site content store. Static now; ready to migrate to Lovable Cloud when we
// wire the admin CMS (Phase 5) — table shapes should mirror these types.

export const site = {
  name: "Luv 2 Care Foundation",
  short: "L2CF",
  tagline: "Care, in every corner.",
  mission:
    "A Section 8 non-profit working across India for health, education, social welfare, animal care and holistic well-being - one community, one story at a time.",
  location: "New Delhi, India",
  email: "connect@luv2carefoundation.org",
  phone: "+91 00000 00000",
  registration: "Section 8, Companies Act 2013 · State of Delhi",
  founders: ["Prerna Mishra", "Rajesh"],
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
  { value: 24, suffix: "", label: "Years of care" },
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
    slug: "health",
    title: "Public Health & Wellbeing",
    summary:
      "Free camps, medicines and last-mile referrals — bringing healthcare where the system runs thin.",
    tone: "teal",
    lede: "We support hospitals, clinics and medical relief camps, and stand with individuals facing chronic illness, disability or medical emergencies. Prevention sits alongside treatment — sanitation, nutrition and hygiene are health work too.",
    approach: [
      "Free and subsidised medical treatment, medicines and equipment.",
      "Preventive camps on sanitation, nutrition, hygiene and wellness.",
      "Emergency assistance for individuals with disabilities and chronic illness.",
    ],
    numbers: [
      { value: "3,100+", label: "Patients served" },
      { value: "24", label: "Villages covered" },
      { value: "12", label: "Partner clinics" },
    ],
    story: {
      quote:
        "The camp came to our lane. My mother saw a doctor for the first time in three years.",
      person: "Reshma",
      where: "North West Delhi",
    },
  },
  {
    slug: "education",
    title: "Education & Learning",
    summary:
      "Schools, libraries and skill centres — plus scholarships, uniforms and fee assistance for children who need them.",
    tone: "lavender",
    lede: "We establish, support and run learning spaces from libraries to vocational institutes. Scholarships, materials and adult literacy sit alongside seminars, counselling and career workshops for young people.",
    approach: [
      "Scholarships, uniforms and fee assistance for students from EWS backgrounds.",
      "Digital learning, women's education and adult literacy programmes.",
      "Career counselling, workshops and skill-development for marginalised communities.",
    ],
    numbers: [
      { value: "1,240", label: "Children in centres" },
      { value: "38", label: "Fellow teachers" },
      { value: "92%", label: "Year-on-year retention" },
    ],
    story: {
      quote:
        "My father said class 8 is enough. Didi came to our home and spoke with him. I am in class 11 now.",
      person: "Priya, 16",
      where: "Kirari, Delhi",
    },
  },
  {
    slug: "social-welfare",
    title: "Social Welfare & Relief",
    summary:
      "Food, clothing and shelter for the poor, homeless and elderly — and relief when disasters strike.",
    tone: "mustard",
    lede: "We provide relief to underprivileged groups and support welfare initiatives during natural calamities, disasters and emergencies. Orphanages, old-age homes and community centres are long-standing partners.",
    approach: [
      "Ration, clothing and shelter drives for the homeless and elderly.",
      "Disaster and emergency response with local partners.",
      "Support to orphanages, old-age homes and community centres.",
    ],
    numbers: [
      { value: "42,000", label: "Ration kits distributed" },
      { value: "312", label: "Nights of safe shelter" },
      { value: "14", label: "Partner institutions" },
    ],
    story: {
      quote: "They didn't ask me why I ran. They asked if I had eaten.",
      person: "Anonymous, safe-shelter guest",
      where: "New Delhi",
    },
  },
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    summary:
      "Rescue, treatment and rehabilitation of injured, abandoned and stray animals — with vaccination and sterilisation drives.",
    tone: "sage",
    lede: "We work with veterinary institutions, government bodies and neighbourhood volunteers to care for the animals who share our streets. Awareness campaigns run alongside on-ground rescues.",
    approach: [
      "Rescue, treatment and shelter for injured or abandoned animals.",
      "Vaccination and sterilisation drives in partnership with vets.",
      "Community awareness on humane treatment of animals.",
    ],
    numbers: [
      { value: "1,600+", label: "Animals treated" },
      { value: "22", label: "Vaccination drives" },
      { value: "6", label: "Veterinary partners" },
    ],
    story: {
      quote: "They came at 11 pm for a puppy hit by a scooter. She's back on our street now.",
      person: "Meera",
      where: "Hari Nagar, New Delhi",
    },
  },
  {
    slug: "mental-health",
    title: "Mental Health & Wellbeing",
    summary:
      "Counselling, helplines and support groups — plus yoga, meditation and mind-body practices for holistic health.",
    tone: "terracotta",
    lede: "Emotional well-being is health. We help set up counselling centres, helplines and support groups, and run workshops on yoga, meditation and mind-body wellness for communities that rarely get to pause.",
    approach: [
      "Counselling centres, helplines and peer support groups.",
      "Yoga, meditation and mind-body wellness workshops.",
      "Community training sessions on emotional health.",
    ],
    numbers: [
      { value: "820", label: "Counselling sessions" },
      { value: "36", label: "Support circles" },
      { value: "9", label: "Trained facilitators" },
    ],
    story: {
      quote:
        "The circle is the only place I can say I am tired without someone offering me a solution.",
      person: "Sunita",
      where: "New Delhi",
    },
  },
];

export const milestones = [
  { year: "2002", title: "The seed of an idea", body: "A small group of friends in Delhi begin weekend tuition classes for children in a nearby basti. No name, no plan — just a Sunday habit that refused to end." },
  { year: "2006", title: "An informal collective", body: "The Sunday habit becomes a monthly pool of ₹500 each. Books, notebooks, one second-hand blackboard. Still no letterhead." },
  { year: "2011", title: "Beyond the classroom", body: "First health camps and ration drives — organised out of a Hari Nagar living room, run entirely by volunteers." },
  { year: "2014", title: "First learning centre", body: "Opened in a two-room space in North West Delhi, serving 60 first-generation learners with two teachers." },
  { year: "2017", title: "Circles of care", body: "Launched maternal-health camps and the first women's support circles across six neighbourhoods." },
  { year: "2020", title: "Pandemic response", body: "Distributed 42,000 ration kits, moved learning to community radio, and lost two friends we will not forget." },
  { year: "2023", title: "Livelihood cohort", body: "First 120 women graduated from the tailoring & digital-literacy programme. 86% are still trading today." },
  { year: "2026", title: "Formally, Luv 2 Care Foundation", body: "Registered as a Section 8 company in Delhi by Prerna Mishra and Rajesh — the same work, now with a letterhead." },
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
    dek: "A year of listening in one Delhi neighbourhood taught us more than a decade of dashboards.",
    author: "Prerna Mishra",
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
    author: "Rajesh",
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
    author: "L2CF Team",
    date: "December 2025",
    body: [
      "This report is shorter than last year's on purpose. We would rather you read one page well than skim ten.",
      "The financial section is unchanged in format from 2020. Every rupee is accounted for on page four.",
      "The narrative section is longer than usual — because 2025 was the year our theory of change actually changed. We used to believe programmes made communities stronger. We now believe communities make programmes possible, and we say so in section two.",
      "As always, we welcome your questions, your disagreements, and your time.",
    ],
  },
];
