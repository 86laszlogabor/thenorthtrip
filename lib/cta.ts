// lib/cta.ts
import { PillarKey } from "./blog";

export type CTA = {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
};

export const CTA_BY_PILLAR: Record<PillarKey, CTA> = {
  "/car-rental-helsinki": {
    title: "Ready to book without surprises?",
    description:
      "Compare options first, then choose a reliable operator. Avoid the pickup traps people only discover too late.",
    primary: { href: "/car-rental-helsinki", label: "See car rental options" },
    secondary: { href: "/offer-checklist", label: "Free booking checklist" },
  },
  "/camper-rental-finland": {
    title: "Planning a camper trip in Finland?",
    description:
      "Compare platforms and understand winter constraints before committing to a route.",
    primary: { href: "/camper-rental-finland", label: "Compare camper rentals" },
    secondary: { href: "/offer-checklist", label: "Free booking checklist" },
  },
  "/lapland-tours": {
    title: "Want Lapland tours without hidden extras?",
    description:
      "Compare what’s included vs what’s extra, and avoid the classic upsells that inflate the final price.",
    primary: { href: "/lapland-tours", label: "Explore Lapland tours" },
    secondary: { href: "/offer-checklist", label: "Free booking checklist" },
  },
};
