export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  tags: string[];
  pillar: "/car-rental-helsinki" | "/camper-rental-finland" | "/lapland-tours";
};

export const BLOG: BlogPost[] = [
  {
    slug: "helsinki-airport-credit-card-deposit-hold",
    title: "Helsinki Airport car rental: credit card deposit hold (what actually happens)",
    description:
      "Why many companies require a credit card at pickup, how deposit holds work, and why 'paid online' still gets blocked.",
    publishedAt: "2025-12-15",
    tags: ["helsinki airport", "deposit hold", "credit card"],
    pillar: "/car-rental-helsinki",
  },
  {
    slug: "finland-car-rental-debit-card-when-it-fails",
    title: "Finland car rental with a debit card: when it works and when you get refused",
    description:
      "Debit cards sometimes work, sometimes don't. The red flags that predict a counter refusal and what to do instead.",
    publishedAt: "2025-12-15",
    tags: ["debit card", "pickup rules", "finland"],
    pillar: "/car-rental-helsinki",
  },
  {
    slug: "helsinki-airport-vs-city-pickup-real-costs",
    title: "Helsinki Airport vs city pickup: the real cost differences people miss",
    description:
      "Counter rules, deposits, timing, and why airport convenience can cost more than the daily rate suggests.",
    publishedAt: "2025-12-15",
    tags: ["airport vs city", "helsinki", "fees"],
    pillar: "/car-rental-helsinki",
  },
  {
    slug: "finland-winter-driving-addons-what-matters",
    title: "Finland winter driving: which add-ons matter and which are pure upsell",
    description:
      "Studded tires, windshield coverages, snow chains (usually no), and the stuff that actually reduces risk.",
    publishedAt: "2025-12-15",
    tags: ["winter", "add-ons", "insurance"],
    pillar: "/car-rental-helsinki",
  },

  {
    slug: "winter-campervan-finland-heating-power-costs",
    title: "Winter campervan in Finland: heating + power costs (the unsexy reality)",
    description:
      "What 'winter-ready' should mean, how heating/power choices affect comfort, and the hidden cost drivers.",
    publishedAt: "2025-12-15",
    tags: ["camper", "winter", "heating"],
    pillar: "/camper-rental-finland",
  },
  {
    slug: "camper-rental-finland-mileage-caps-overage-fees",
    title: "Camper rental Finland: mileage caps & overage fees (route planning without regret)",
    description:
      "How the cheapest offer becomes the most expensive when kilometers are capped. Simple math checklist.",
    publishedAt: "2025-12-15",
    tags: ["mileage", "fees", "planning"],
    pillar: "/camper-rental-finland",
  },
  {
    slug: "camper-winterised-meaning-finland-checklist",
    title: "What 'winterised' means in Finland: a checklist you can copy-paste",
    description:
      "Insulation, heating type, water system, batteries, and what to ask before you book.",
    publishedAt: "2025-12-15",
    tags: ["winterised", "checklist", "camper"],
    pillar: "/camper-rental-finland",
  },

  {
    slug: "lapland-northern-lights-tours-cancellation-rules",
    title: "Lapland northern lights tours: cancellation rules and what 'guarantee' really means",
    description:
      "Refund windows, weather cancellations, and why 'no lights' does not automatically mean refund.",
    publishedAt: "2025-12-15",
    tags: ["aurora", "cancellation", "refund"],
    pillar: "/lapland-tours",
  },
  {
    slug: "lapland-tour-inclusions-vs-paid-extras",
    title: "Lapland tours: inclusions vs paid extras (thermal suits, photos, pickups)",
    description:
      "What’s usually included, what is often an add-on, and how to compare offers without getting fooled.",
    publishedAt: "2025-12-15",
    tags: ["inclusions", "extras", "pricing"],
    pillar: "/lapland-tours",
  },
  {
    slug: "lapland-small-group-vs-big-bus-compare",
    title: "Small group vs big bus in Lapland: how to compare beyond the headline price",
    description:
      "Timing, flexibility, group size, and why the cheapest tour can be the worst experience.",
    publishedAt: "2025-12-15",
    tags: ["small group", "tour", "lapland"],
    pillar: "/lapland-tours",
  },
];
