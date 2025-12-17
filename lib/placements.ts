export const PLACEMENTS = [
  "home_hero",
  "home_cards",
  "home_destinations",
  "sticky_bar",

  "helsinki_top",
  "helsinki_ferries",
  "helsinki_sauna",
  "helsinki_tours",
  "city_helsinki_recommended",

  "pillar_car_rental",
  "pillar_car_rental_primary",
  "pillar_car_rental_secondary",
  "pillar_camper_rental",
  "pillar_lapland_tours",

  "internal_next",
  "footer",
] as const;

export type Placement = (typeof PLACEMENTS)[number];
