export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
};

export const BLOG: BlogPost[] = [
  {
    slug: "helsinki-car-rental-deposit-holds",
    title: "Helsinki car rental deposit holds: what actually happens",
    description:
      "A practical explanation of deposit holds, release times, and why debit cards often fail at pickup.",
    publishedAt: "2025-12-01",
    tags: ["helsinki", "deposit", "credit-card"],
  },
  {
    slug: "camper-rental-finland-winter-heating-costs",
    title: "Camper rental Finland: winter heating costs & hidden extras",
    description:
      "What winter-ready really means for campervans: heating, power, insulation, and why the cheapest listing rarely is.",
    publishedAt: "2025-12-01",
    tags: ["camper", "winter", "costs"],
  },
  {
    slug: "lapland-tours-small-group-vs-big-bus",
    title: "Lapland tours: small group vs big bus and what you pay for",
    description:
      "A calm way to compare Lapland tour inclusions: group size, pickup times, cancellations, and add-ons.",
    publishedAt: "2025-12-01",
    tags: ["lapland", "tours", "comparison"],
  },
];
