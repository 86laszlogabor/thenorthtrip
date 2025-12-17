// lib/partners.ts

export type PartnerStatus = "live" | "placeholder";

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
  | "autoeurope"
  // Camper
  | "indie_campers"
  | "mycamper"
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

  status: PartnerStatus;
  href?: string;

  /** Optional internal note (not displayed) */
  note?: string;
};

export function isLivePartner(p: Partner): p is Partner & { href: string } {
  return p.status === "live" && typeof p.href === "string" && p.href.length > 0;
}

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
    status: "live",
    href: "https://www.discovercars.com?a_aid=86laszlogabor",
    note: "Affiliate link live.",
  },

  autoeurope: {
    key: "autoeurope",
    name: "Auto Europe",
    type: "car_search",
    badge: "Backup",
    blurb: "Second comparison check. Useful for pricing sanity-checks, inclusions, and supplier coverage.",
    status: "placeholder",
    note: "Awaiting affiliate approval + tracking link.",
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
    status: "placeholder",
  },
  mycamper: {
    key: "mycamper",
    name: "MyCamper",
    type: "camper_p2p",
    badge: "Local",
    blurb: "Peer-to-peer rentals from local owners. Often better value and flexibility than fleets.",
    status: "placeholder",
  },
  touring_cars_finland: {
    key: "touring_cars_finland",
    name: "Touring Cars",
    type: "camper_local",
    badge: "Winter-ready",
    blurb: "Local fleet operator. Practical choice if you want a straightforward, robust setup.",
    status: "placeholder",
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
    status: "placeholder",
  },
  lapland_welcome: {
    key: "lapland_welcome",
    name: "Lapland Welcome",
    type: "tour_local",
    badge: "Local",
    blurb: "Local operator focus. Northern lights, husky, snowmobile style experiences.",
    status: "placeholder",
  },
  arctic_lifestyle: {
    key: "arctic_lifestyle",
    name: "Arctic Lifestyle",
    type: "tour_local",
    badge: "Local",
    blurb: "Small-group Lapland experiences. Good niche-quality alternative to platforms.",
    status: "placeholder",
  },
  getyourguide_lapland: {
    key: "getyourguide_lapland",
    name: "GetYourGuide (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Platform backup for availability and last-minute booking options.",
    status: "placeholder",
  },
  viator_lapland: {
    key: "viator_lapland",
    name: "Viator (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Another platform backup to cover inventory gaps.",
    status: "placeholder",
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
    status: "placeholder",
  },
  tallink_silja: {
    key: "tallink_silja",
    name: "Tallink Silja",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Direct operator. Reliable for Helsinki–Tallinn and Helsinki–Stockholm routes.",
    status: "placeholder",
  },
  viking_line: {
    key: "viking_line",
    name: "Viking Line",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Direct operator. Solid alternative for route times and onboard options.",
    status: "placeholder",
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
    status: "placeholder",
  },
  allas_sea_pool: {
    key: "allas_sea_pool",
    name: "Allas Sea Pool",
    type: "sauna_local",
    badge: "Local",
    blurb: "Central, easy-access sauna + sea pool combo. Good city-day option.",
    status: "placeholder",
  },
  getyourguide_sauna: {
    key: "getyourguide_sauna",
    name: "GetYourGuide (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Booking layer backup for tickets and bundles.",
    status: "placeholder",
  },
  tiqets_sauna: {
    key: "tiqets_sauna",
    name: "Tiqets (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Ticketing backup, useful if you want quick mobile-friendly tickets.",
    status: "placeholder",
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
    status: "placeholder",
  },
  viator_city: {
    key: "viator_city",
    name: "Viator (Helsinki)",
    type: "city_tours",
    badge: "Backup",
    blurb: "Another platform backup to cover inventory gaps.",
    status: "placeholder",
  },
  helsinki_city_tours: {
    key: "helsinki_city_tours",
    name: "Helsinki City Tours",
    type: "city_tours",
    badge: "Top pick",
    blurb: "Local provider for city sightseeing routes and practical first-day tours.",
    status: "placeholder",
  },
  redrib_experience: {
    key: "redrib_experience",
    name: "Redrib Experience",
    type: "city_tours",
    badge: "Local",
    blurb: "Speedboat-style experiences. More memorable than yet another museum.",
    status: "placeholder",
  },
};
