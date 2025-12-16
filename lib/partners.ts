// lib/partners.ts

export type PartnerKey =
  | "discovercars"
  | "sixt"
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

  // Affiliate links (placeholder for now)
  url: string;
  helsinkiUrl?: string;

  // Display
  disclosureLabel?: string;
  bestFor: string;
  bullets: string[];
  ctaLabel?: string;
};

export const PARTNERS: Record<PartnerKey, Partner> = {
  discovercars: {
    key: "discovercars",
    name: "DiscoverCars",
    brandHint: "price discovery tool",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor:
      "Scan the market fast. Compare multiple suppliers (including major brands like SIXT) before you commit.",
    bullets: [
      "Best used to understand the price landscape (not to blindly pick the cheapest)",
      "Helps compare deposit/card/coverage differences across offers",
      "Useful for airport vs city pickup comparison",
      "Inventory varies by date and location",
      "Always open the terms for payment method + deposit rules",
    ],
    ctaLabel: "Compare prices",
  },

  sixt: {
    key: "sixt",
    name: "SIXT",
    brandHint: "our top pick (direct operator)",
    url: "#",
    helsinkiUrl: "#",
    disclosureLabel: "Sponsored",
    bestFor:
      "Direct operator option in Finland when you want a cleaner pickup experience and predictable standards (not always the cheapest).",
    bullets: [
      "Finland rating shown as 4.6 (based on 4,489 reviews)",
      "11 Finland airport locations highlighted for easier pickup/return",
      "Helsinki-Vantaa Airport: Car Rental Center; 24h return listed",
      "Seasonal equipment stated: winter tires in winter, summer tires in summer",
      "Cross-border driving mentioned as available (confirm fees/permission in your booking terms)",
      "Minimum age stated as 19; some categories higher; young driver surcharge may apply",
      "Driver’s license typically must be valid for 1 year+ (category-dependent)",
    ],
    ctaLabel: "Check SIXT",
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
    bestFor: "Backup tickets platform when availability differs vs GetYourGuide.",
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
