// lib/cta.ts

export type PillarPath = "/car-rental-helsinki" | "/camper-rental-finland" | "/lapland-tours";

export type StickyCta = {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
};

export const CTA_BY_PILLAR: Record<PillarPath, StickyCta> = {
  "/car-rental-helsinki": {
    title: "Avoid deposit surprises",
    description: "Use the checklist before you pay.",
    primary: { href: "/offer-checklist", label: "Open checklist" },
    secondary: { href: "/get-help", label: "Ask" },
  },
  "/camper-rental-finland": {
    title: "Winter-ready? Don’t guess",
    description: "Checklist prevents expensive “oops”.",
    primary: { href: "/offer-checklist", label: "Checklist" },
    secondary: { href: "/get-help", label: "Ask" },
  },
  "/lapland-tours": {
    title: "Lapland tours: avoid tourist traps",
    description: "Checklist first, then book.",
    primary: { href: "/offer-checklist", label: "Checklist" },
    secondary: { href: "/get-help", label: "Ask" },
  },
};
