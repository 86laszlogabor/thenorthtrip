export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  tags: string[];
  pillar: "/car-rental-helsinki" | "/camper-rental-finland" | "/lapland-tours";
  /** Optional markdown content */
  content?: string;
};

// A te BLOG listád maradhat ahogy volt, csak opcionálisan adhatsz content-et.
// Példa (egy poszthoz később beírjuk):
export const BLOG: BlogPost[] = [
  {
    slug: "helsinki-airport-credit-card-deposit-hold",
    title: "Helsinki Airport car rental: credit card deposit hold (what actually happens)",
    description:
      "Why many companies require a credit card at pickup, how deposit holds work, and why 'paid online' still gets blocked.",
    publishedAt: "2025-12-15",
    tags: ["helsinki airport", "deposit hold", "credit card"],
    pillar: "/car-rental-helsinki",
    // content: `# Heading\n\nMarkdown content here...`,
  },
  // ... a többi posztod változatlanul mehet
];
