// lib/partners.ts

export type PartnerKey =
  | "discovercars"
  | "rentalcars";

export type Partner = {
  key: PartnerKey;
  name: string;
  url: string; // affiliate URL, most placeholder
  disclosureLabel?: string;
  description?: string;
};

export const PARTNERS: Record<PartnerKey, Partner> = {
  discovercars: {
    key: "discovercars",
    name: "DiscoverCars – car rental comparison",
    url: "#",
    disclosureLabel: "Sponsored",
    description: "Compare car rental prices across multiple providers at Helsinki Airport and city locations.",
  },
  rentalcars: {
    key: "rentalcars",
    name: "Rentalcars – global car hire deals",
    url: "#",
    disclosureLabel: "Sponsored",
    description: "Search and compare international car rental offers with transparent pricing.",
  },
};
