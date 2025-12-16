// lib/partners.ts

export type PartnerKey =
  | "discovercars"
  | "rentalcars"
  | "directferries"
  | "getyourguide"
  | "tiqets"
  | "motorhomerepublic"
  | "camperdays"
  | "viator";

export type Partner = {
  key: PartnerKey;
  name: string;
  brandHint?: string;

  // Linkek (most placeholder, holnap csere)
  url: string;           // fallback / default partner link
  helsinkiUrl?: string;  // city-specific deep link (optional)

  // Megjelenítés
  disclosureLabel?: string;
  bestFor: string;
  bullets: string[];
  ctaLabel?: string;
};

export const PARTNERS: Record<PartnerKey, Partner> = {
  rentalcars: {
    key: "rentalcars",
    name: "Rentalcars.com",
    brandHint: "by Booking.com",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Familiar global brands, stable booking flow, wide availability.",
    bullets: [
      "Strong coverage of major rental chains",
      "Customer support in many languages",
      "Free cancellation on many bookings (booking-dependent)",
      "Good for predictable booking UX",
      "Useful if you prefer well-known suppliers",
    ],
    ctaLabel: "Check prices",
  },

  discovercars: {
    key: "discovercars",
    name: "DiscoverCars",
    brandHint: "comparison platform",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Compare big brands + smaller local providers (often where price gaps appear).",
    bullets: [
      "Good for spotting cheaper local suppliers",
      "Helps compare deposit and coverage differences",
      "Works well for airport vs city pickup comparisons",
      "Great as a second check before booking",
      "Inventory sometimes differs vs other platforms",
    ],
    ctaLabel: "Check prices",
  },

  directferries: {
    key: "directferries",
    name: "Direct Ferries",
    brandHint: "ferry comparison",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Direct ferry tickets (Tallinn / Stockholm) with schedule comparison.",
    bullets: [
      "Compare routes and operators in one place",
      "Best for point-to-point ferry booking",
      "Useful for Helsinki–Tallinn day trips",
      "Also covers overnight Stockholm routes",
      "Good if you want flexible departure times",
    ],
    ctaLabel: "Check ferries",
  },

  getyourguide: {
    key: "getyourguide",
    name: "GetYourGuide",
    brandHint: "tours & tickets",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Guided experiences: day cruises, tours, sauna experiences, Lapland activities.",
    bullets: [
      "Good inventory for tours & tickets",
      "Easy filtering by date and language",
      "Often flexible cancellation (offer-dependent)",
      "Works well as the main “experiences” partner",
      "Useful when you want a packaged option",
    ],
    ctaLabel: "Browse options",
  },

  tiqets: {
    key: "tiqets",
    name: "Tiqets",
    brandHint: "tickets & activities",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Backup tickets platform when availability differs vs GYG.",
    bullets: [
      "Useful alternative inventory for tickets",
      "Quick mobile-friendly booking",
      "Good as a backup partner",
      "Sometimes different cancellation terms",
      "Compare vs GetYourGuide if sold out",
    ],
    ctaLabel: "Check tickets",
  },

  motorhomerepublic: {
    key: "motorhomerepublic",
    name: "Motorhome Republic",
    brandHint: "camper comparison",
    url: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Campervan/motorhome comparison across multiple suppliers.",
    bullets: [
      "Good for broad price comparison",
      "Useful filters for vehicle type and capacity",
      "Works for longer road trips in Finland",
      "Compare pickup locations and dates fast",
      "Best as a primary camper comparison partner",
    ],
    ctaLabel: "Compare campers",
  },

  camperdays: {
    key: "camperdays",
    name: "CamperDays",
    brandHint: "camper rentals",
    url: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Camper rental offers with clear filters and European supplier coverage.",
    bullets: [
      "Good second opinion vs other platforms",
      "Useful for different supplier inventory",
      "Filters help reduce mismatches",
      "Good for planning multi-day trips",
      "Compare insurance/excess details carefully",
    ],
    ctaLabel: "Check camper deals",
  },

  viator: {
    key: "viator",
    name: "Viator",
    brandHint: "tours marketplace",
    url: "#",
    disclosureLabel: "Sponsored",
    bestFor: "Backup inventory for tours when GetYourGuide is sold out.",
    bullets: [
      "Good backup marketplace for tours",
      "Sometimes different availability/pricing",
      "Useful for Lapland peak season",
      "Compare cancellation terms per offer",
      "Use as second check for sold-out dates",
    ],
    ctaLabel: "Browse tours",
  },
};
