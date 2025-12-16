// lib/blog.ts

export type PillarKey =
  | "/car-rental-helsinki"
  | "/camper-rental-finland"
  | "/lapland-tours";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  tags: string[];
  pillar: PillarKey;
};

export const BLOG: BlogPost[] = [
  {
    slug: "helsinki-airport-credit-card-deposit-hold",
    title: "Helsinki Airport car rental: credit card deposit hold (what actually happens)",
    description:
      "Why companies require a credit card at pickup, how deposit holds work, and why paid online still triggers a block.",
    publishedAt: "2025-01-01",
    tags: ["helsinki airport", "deposit", "credit card"],
    pillar: "/car-rental-helsinki",
  },
  {
    slug: "finland-car-rental-debit-card-when-it-fails",
    title: "Finland car rental with a debit card: when it works and when you get refused",
    description:
      "Debit cards sometimes work, sometimes don’t. The red flags that predict a refusal at pickup.",
    publishedAt: "2025-01-01",
    tags: ["debit card", "pickup rules"],
    pillar: "/car-rental-helsinki",
  },
  {
    slug: "finland-winter-driving-addons-what-you-need",
    title: "Finland winter driving add-ons: what you actually need (and what’s upsold)",
    description:
      "Winter tires are mandatory, many extras are not. This is the short list that matters.",
    publishedAt: "2025-01-01",
    tags: ["winter", "add-ons", "insurance"],
    pillar: "/car-rental-helsinki",
  },
  {
    slug: "lapland-road-trip-costs-7-day-example",
    title: "Lapland road trip costs: a realistic 7-day example",
    description:
      "A no-nonsense cost breakdown for a week in Lapland, including the hidden stuff people forget.",
    publishedAt: "2025-01-01",
    tags: ["lapland", "costs", "road trip"],
    pillar: "/lapland-tours",
  },
  {
    slug: "lapland-tours-included-vs-extra",
    title: "Lapland tours: what’s included vs what’s quietly extra",
    description:
      "Warm gear, transfers, photos, food: the common included traps and how to compare safely.",
    publishedAt: "2025-01-01",
    tags: ["lapland tours", "included", "extras"],
    pillar: "/lapland-tours",
  },
  {
    slug: "rovaniemi-vs-levi-vs-yllas",
    title: "Rovaniemi vs Levi vs Ylläs: which base to choose (depending on your trip)",
    description:
      "A practical decision guide. Pick the base that matches your plan, not a brochure.",
    publishedAt: "2025-01-01",
    tags: ["rovaniemi", "levi", "yllas"],
    pillar: "/lapland-tours",
  },
  {
    slug: "camper-rental-finland-winter-reality",
    title: "Camper rental in Finland: winter reality check",
    description:
      "Costs, heating, roads and expectations. Read this before booking a winter camper.",
    publishedAt: "2025-01-01",
    tags: ["camper", "winter", "costs"],
    pillar: "/camper-rental-finland",
  },
  {
    slug: "car-rental-insurance-finland-explained",
    title: "Car rental insurance in Finland: CDW, excess, Super CDW explained",
    description:
      "What you’re actually buying, when it matters, and the three questions that save money.",
    publishedAt: "2025-01-01",
    tags: ["insurance", "cdw", "excess"],
    pillar: "/car-rental-helsinki",
  },
];
