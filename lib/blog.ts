export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  tags: string[];
  pillar: "/car-rental-helsinki" | "/camper-rental-finland" | "/lapland-tours";
  draft?: boolean;
};

export const BLOG: BlogPost[] = [
  {
    slug: "helsinki-airport-credit-card-deposit-hold",
    title: "Helsinki Airport car rental: credit card deposit hold (what actually happens)",
    description:
      "Why companies require a credit card at pickup, how holds work, and why ‘paid online’ can still trigger a block.",
    publishedAt: "2025-12-16",
    tags: ["helsinki airport", "deposit", "credit card"],
    pillar: "/car-rental-helsinki",
    draft: true,
  },
  {
    slug: "finland-car-rental-debit-card-when-it-fails",
    title: "Finland car rental with a debit card: when it works and when you get refused",
    description:
      "Debit cards sometimes work, sometimes don’t. The red flags that predict a refusal at the counter.",
    publishedAt: "2025-12-16",
    tags: ["debit card", "pickup rules"],
    pillar: "/car-rental-helsinki",
    draft: true,
  },
  {
    slug: "finland-winter-driving-addons-what-you-actually-need",
    title: "Finland winter driving add-ons: what you actually need (and what’s upsold)",
    description:
      "Winter tires are not optional, but many extras are. This is the short list that matters.",
    publishedAt: "2025-12-16",
    tags: ["winter", "add-ons", "insurance"],
    pillar: "/car-rental-helsinki",
    draft: true,
  },
  {
    slug: "lapland-road-trip-costs-7-day-example",
    title: "Lapland road trip costs: a realistic 7-day example (car, fuel, stays)",
    description:
      "A no-nonsense cost breakdown for a week in Lapland, including the hidden stuff people forget.",
    publishedAt: "2025-12-16",
    tags: ["lapland", "costs", "road trip"],
    pillar: "/lapland-tours",
    draft: true,
  },
  {
    slug: "lapland-tours-what-included-what-not",
    title: "Lapland tours: what’s included vs what’s quietly extra",
    description:
      "Warm gear, transfers, photos, food: the common ‘included’ traps and how to compare safely.",
    publishedAt: "2025-12-16",
    tags: ["lapland tours", "included", "extras"],
    pillar: "/lapland-tours",
    draft: true,
  },
  {
    slug: "rovaniemi-levi-yllas-which-base-to-choose",
    title: "Rovaniemi vs Levi vs Ylläs: which base to choose (depending on your trip)",
    description:
      "A practical decision guide, not a travel brochure. Pick the base that matches your plan.",
    publishedAt: "2025-12-16",
    tags: ["rovaniemi", "levi", "yllas"],
    pillar: "/lapland-tours",
    draft: true,
  },
  {
    slug: "camper-rental-finland-winter-reality-check",
    title: "Camper rental in Finland: winter reality check (costs, heating, roads)",
    description:
      "If you’re thinking winter camper in Finland, read this before paying for a fantasy.",
    publishedAt: "2025-12-16",
    tags: ["camper", "winter", "costs"],
    pillar: "/camper-rental-finland",
    draft: true,
  },
  {
    slug: "car-rental-insurance-finland-cdw-supercdw-explained",
    title: "Car rental insurance in Finland: CDW, excess, Super CDW explained without the fluff",
    description:
      "What you’re actually buying, when it matters, and the 3 questions that prevent expensive surprises.",
    publishedAt: "2025-12-16",
    tags: ["insurance", "cdw", "excess"],
    pillar: "/car-rental-helsinki",
    draft: true,
  },
];
