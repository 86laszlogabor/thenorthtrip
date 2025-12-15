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
    title: "Helsinki car rental deposit holds explained",
    description:
      "How much is blocked, credit vs debit cards, and airport vs city pickup differences.",
    publishedAt: "2025-01-10",
    tags: ["helsinki", "car rental", "deposit"],
  },
  {
    slug: "finland-winter-camper-rental-costs",
    title: "Winter camper rental costs in Finland",
    description:
      "Heating, insulation, fuel use, and what winter-ready actually means.",
    publishedAt: "2025-01-12",
    tags: ["camper", "winter", "finland"],
  },
  {
    slug: "lapland-tour-inclusions-small-groups",
    title: "Lapland tours: what is actually included",
    description:
      "Group size tricks, hidden extras, and cancellation terms.",
    publishedAt: "2025-01-15",
    tags: ["lapland", "tours"],
  },
];
