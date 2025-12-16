// lib/partners.ts

export type PartnerKey = "discovercars" | "rentalcars";

export type Partner = {
  key: PartnerKey;
  name: string;
  brandHint?: string;

  // Linkek
  url: string;           // fallback / default partner link
  helsinkiUrl?: string;  // city-specific deep link (optional)

  // Megjelenítés
  disclosureLabel?: string;
  bestFor: string;
  bullets: string[];
};

export const PARTNERS: Record<PartnerKey, Partner> = {
  rentalcars: {
    key: "rentalcars",
    name: "Rentalcars.com",
    brandHint: "by Booking.com",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor: "If you want familiar big brands, wide coverage, and a stable booking flow.",
    bullets: [
      "60,000+ locations worldwide",
      "Customer support in 30+ languages",
      "Free cancellations / changes on most bookings up to ~48h before pickup (booking-dependent)",
      "Millions of verified customer reviews",
      "Strong coverage of major rental chains",
    ],
  },

  discovercars: {
    key: "discovercars",
    name: "DiscoverCars",
    brandHint: "comparison platform",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor: "If you want to compare across big brands + smaller local providers (often where price differences show).",
    bullets: [
      "Compares multiple rental companies in one search",
      "Good for spotting cheaper local providers",
      "Useful for checking deposit and coverage differences across offers",
      "Works well for airport + city pickup comparisons",
      "Great as a second opinion when inventory differs",
    ],
  },
};
