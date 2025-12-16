// lib/partners.ts

export type PartnerKey = "discovercars" | "rentalcars";

export type Partner = {
  key: PartnerKey;
  name: string;
  brandHint?: string;
  url: string; // placeholder most, holnap csere
  disclosureLabel?: string;
  bullets: string[];
  bestFor: string;
};

export const PARTNERS: Record<PartnerKey, Partner> = {
  rentalcars: {
    key: "rentalcars",
    name: "Rentalcars.com",
    brandHint: "by Booking.com",
    url: "#",
    disclosureLabel: "Sponsored",
    bestFor: "If you want familiar big brands, wide coverage, and a stable booking flow.",
    bullets: [
      "60,000+ locations worldwide",
      "Customer support in 30+ languages",
      "Free cancellations / changes on most bookings up to ~48h before pickup",
      "Millions of verified customer reviews",
      "Positioned as “no hidden fees” (still compare deposit/coverage rules)",
    ],
  },
  discovercars: {
    key: "discovercars",
    name: "DiscoverCars",
    brandHint: "comparison platform",
    url: "#",
    disclosureLabel: "Sponsored",
    bestFor: "If you want to compare across big brands + smaller local providers (often where price differences show).",
    bullets: [
      "Compares multiple rental companies in one search",
      "Good for spotting cheaper local providers",
      "Useful for checking deposit and coverage differences across offers",
      "Works well for airport + city pickup comparisons",
      "Good fallback when one platform has limited inventory",
    ],
  },
};
