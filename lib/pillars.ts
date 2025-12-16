// lib/pillars.ts

export const PILLARS = {
  "/car-rental-helsinki": {
    title: "Car rental Helsinki",
    href: "/car-rental-helsinki",
    kicker: "Helsinki airport reality-check",
    description:
      "Deposits, debit cards, winter add-ons, after-hours pickup. The stuff that changes the real price.",
  },
  "/camper-rental-finland": {
    title: "Camper rental Finland",
    href: "/camper-rental-finland",
    kicker: "Winter-ready campervans",
    description:
      "Mileage caps, winterization, borders/ferries. Avoid paying twice for the same “package”.",
  },
  "/lapland-tours": {
    title: "Lapland tours",
    href: "/lapland-tours",
    kicker: "High-ticket experiences",
    description:
      "Northern lights, snowmobiles, reindeer. Avoid “guaranteed” nonsense and vague pickup rules.",
  },
} as const;

export type PillarPath = keyof typeof PILLARS;
