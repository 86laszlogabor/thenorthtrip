// lib/partners.ts

export type PartnerType =
  | "car_search"
  | "car_operator"
  | "camper_fleet"
  | "camper_p2p"
  | "camper_local"
  | "tour_platform"
  | "tour_local"
  | "ferry_search"
  | "ferry_operator"
  | "sauna_local"
  | "ticketing"
  | "city_tours";

export type PartnerKey =
  // Car rental
  | "discovercars"
  | "sixt"
  // Camper
  | "indie_campers"
  | "mycamper"
  | "nordic_campers"
  | "touring_cars_finland"
  // Lapland tours
  | "staylapland"
  | "getyourguide_lapland"
  | "viator_lapland"
  | "lapland_welcome"
  | "arctic_lifestyle"
  // Helsinki ferry
  | "direct_ferries"
  | "tallink_silja"
  | "viking_line"
  // Helsinki sauna
  | "loyly"
  | "allas_sea_pool"
  | "getyourguide_sauna"
  | "tiqets_sauna"
  // Helsinki city
  | "getyourguide_city"
  | "viator_city"
  | "helsinki_city_tours"
  | "redrib_experience";

export type Partner = {
  key: PartnerKey;
  name: string;
  type: PartnerType;
  badge?: "Top pick" | "Local" | "Backup" | "Winter-ready" | "Compare" | "Direct";
  blurb: string;

  /**
   * Single source of truth for outbound links.
   * Placeholder allowed ("#"/"TBD") until you get affiliate deals.
   */
  href: string;

  /** Optional internal note (not displayed) */
  note?: string;
};

export const PARTNERS: Record<PartnerKey, Partner> = {
  // -------------------------
  // CAR RENTAL (Helsinki)
  // -------------------------
  discovercars: {
    key: "discovercars",
    name: "DiscoverCars",
    type: "car_search",
    badge: "Compare",
    blurb: "Search tool to compare prices and availability across multiple rental companies.",
    href: "https://www.discovercars.com?a_aid=86laszlogabor",
    note: "Affiliate link live.",
  },
  sixt: {
    key: "sixt",
    name: "SIXT",
    type: "car_operator",
    badge: "Top pick",
    blurb: "Direct operator. Predictability and customer support over saving a few euros.",
    href: "#",
    note: "Replace with affiliate/partner link when you get it.",
  },

  // -------------------------
  // CAMPER RENTAL (Finland)
  // -------------------------
  indie_campers: {
    key: "indie_campers",
    name: "Indie Campers",
    type: "camper_fleet",
    badge: "Top pick",
    blurb: "Fleet-based rental. Simple booking, good for first-time camper trips in Finland.",
    href: "#",
  },
  mycamper: {
    key: "mycamper",
    name: "MyCamper",
    type: "camper_p2p",
    badge: "Local",
    blurb: "Peer-to-peer rentals from local owners. Often better value and flexibility than fleets.",
    href: "#",
  },
  nordic_campers: {
    key: "nordic_campers",
    name: "Nordic Campers",
    type: "camper_local",
    badge: "Winter-ready",
    blurb: "Premium local operator. Strong option for winter routes and Lapland travel.",
    href: "#",
  },
  touring_cars_finland: {
    key: "touring_cars_finland",
    name: "Touring Cars",
    type: "camper_local",
    badge: "Winter-ready",
    blurb: "Local fleet operator. Practical choice if you want a straightforward, robust setup.",
    href: "#",
  },

  // -------------------------
  // LAPLAND TOURS
  // -------------------------
  staylapland: {
    key: "staylapland",
    name: "StayLapland",
    type: "tour_local",
    badge: "Top pick",
    blurb: "Curated Lapland experiences with a more local feel. Not mass-tourism vibes.",
    href: "#",
  },
  lapland_welcome: {
    key: "lapland_welcome",
    name: "Lapland Welcome",
    type: "tour_local",
    badge: "Local",
    blurb: "Local operator focus. Northern lights, husky, snowmobile style experiences.",
    href: "#",
  },
  arctic_lifestyle: {
    key: "arctic_lifestyle",
    name: "Arctic Lifestyle",
    type: "tour_local",
    badge: "Local",
    blurb: "Small-group Lapland experiences. Good niche-quality alternative to platforms.",
    href: "#",
  },
  getyourguide_lapland: {
    key: "getyourguide_lapland",
    name: "GetYourGuide (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Platform backup for availability and last-minute booking options.",
    href: "#",
  },
  viator_lapland: {
    key: "viator_lapland",
    name: "Viator (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Another platform backup to cover inventory gaps.",
    href: "#",
  },

  // -------------------------
  // HELSINKI FERRY
  // -------------------------
  direct_ferries: {
    key: "direct_ferries",
    name: "Direct Ferries",
    type: "ferry_search",
    badge: "Compare",
    blurb: "Compare routes and operators. Useful for quick schedule/price checks.",
    href: "#",
  },
  tallink_silja: {
    key: "tallink_silja",
    name: "Tallink Silja",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Direct operator. Reliable for Helsinki–Tallinn and Helsinki–Stockholm routes.",
    href: "#",
  },
  viking_line: {
    key: "viking_line",
    name: "Viking Line",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Direct operator. Solid alternative for route times and onboard options.",
    href: "#",
  },

  // -------------------------
  // HELSINKI SAUNA
  // -------------------------
  loyly: {
    key: "loyly",
    name: "Löyly",
    type: "sauna_local",
    badge: "Top pick",
    blurb: "Iconic local sauna experience by the sea. Book ahead on busy days.",
    href: "#",
  },
  allas_sea_pool: {
    key: "allas_sea_pool",
    name: "Allas Sea Pool",
    type: "sauna_local",
    badge: "Local",
    blurb: "Central, easy-access sauna + sea pool combo. Good city-day option.",
    href: "#",
  },
  getyourguide_sauna: {
    key: "getyourguide_sauna",
    name: "GetYourGuide (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Booking layer backup for tickets and bundles.",
    href: "#",
  },
  tiqets_sauna: {
    key: "tiqets_sauna",
    name: "Tiqets (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Ticketing backup, useful if you want quick mobile-friendly tickets.",
    href: "#",
  },

  // -------------------------
  // HELSINKI CITY / TOURS
  // -------------------------
  getyourguide_city: {
    key: "getyourguide_city",
    name: "GetYourGuide (Helsinki)",
    type: "city_tours",
    badge: "Backup",
    blurb: "Platform backup for common tours and day trips.",
    href: "#",
  },
  viator_city: {
    key: "viator_city",
    name: "Viator (Helsinki)",
    type: "city_tours",
    badge: "Backup",
    blurb: "Another platform backup to cover inventory gaps.",
    href: "#",
  },
  helsinki_city_tours: {
    key: "helsinki_city_tours",
    name: "Helsinki City Tours",
    type: "city_tours",
    badge: "Top pick",
    blurb: "Local provider for city sightseeing routes and practical first-day tours.",
    href: "#",
  },
  redrib_experience: {
    key: "redrib_experience",
    name: "Redrib Experience",
    type: "city_tours",
    badge: "Local",
    blurb: "Speedboat-style experiences. More memorable than yet another museum.",
    href: "#",
  },
};
