export const PAGES = [
  "/",
  "/helsinki",
  "/car-rental-helsinki",
  "/camper-rental-finland",
  "/lapland-tours",
  "/blog",
  "/offer-checklist",
  "/get-help",
  "/about",
  "/contact",
  "/affiliate-disclosure",
  "/privacy",
  "/terms",
] as const;

export type PagePath = (typeof PAGES)[number];
