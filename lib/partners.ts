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
  | "arctic_lifestyle"
  | "getyourguide_lapland"
  | "viator_lapland"

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
  note?: string;
};

export const PARTNERS: Record<PartnerKey, Partner> = {
  // -------------------------
  // CAR RENTAL
  // -------------------------
  discovercars: {
    key: "discovercars",
    name: "DiscoverCars",
    type: "car_search",
    badge: "Compare",
    blurb: "Compare prices and availability across multiple rental companies.",
    status: "live",
    href: "https://www.discovercars.com?a_aid=86laszlogabor",
    note: "Affiliate link live.",
  },

  autoeurope: {
    key: "autoeurope",
    name: "Auto Europe",
    type: "car_operator",
    badge: "Top pick",
    blurb:
      "Trusted car rental broker with strong support. Good if you value fewer surprises over chasing the cheapest price.",
    status: "placeholder",
    note: "Awaiting affiliate onboarding / tracking link.",
  },

  // -------------------------
  // CAMPER RENTAL
  // -------------------------
  indie_campers: {
    key: "indie_campers",
    name: "Indie Campers",
    type: "camper_fleet",
    badge: "Top pick",
    blurb: "Fleet-based camper rental. Simple booking for first-time trips.",
    status: "placeholder",
  },
  mycamper: {
    key: "mycamper",
    name: "MyCamper",
    type: "camper_p2p",
    badge: "Local",
    blurb: "Peer-to-peer rentals from local owners. Often better value.",
    status: "placeholder",
  },
  touring_cars_finland: {
    key: "touring_cars_finland",
    name: "Touring Cars",
    type: "camper_local",
    badge: "Winter-ready",
    blurb: "Premium local operator. Strong option for off-season and Lapland routes.",
    status: "placeholder",
  },

  // -------------------------
  // LAPLAND TOURS
  // -------------------------
  staylapland: {
    key: "staylapland",
    name: "StayLapland",
    type: "tour_local",
    badge: "Local",
    blurb: "Curated Lapland experiences with a local-first approach.",
    status: "placeholder",
  },
  arctic_lifestyle: {
    key: "arctic_lifestyle",
    name: "Arctic Lifestyle",
    type: "tour_local",
    badge: "Local",
    blurb: "Small-group, experience-focused Lapland tours.",
    status: "placeholder",
  },
  viator_lapland: {
    key: "viator_lapland",
    name: "Viator (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Platform backup for availability and last-minute bookings.",
    status: "live",
    href: "https://www.viator.com/Rovaniemi/d22130-ttd?pid=P00281199&mcid=42383&medium=link&campaign=thenorthtriplapland",
    note: "Affiliate link live.",
  },
  getyourguide_lapland: {
    key: "getyourguide_lapland",
    name: "GetYourGuide (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Reliable booking platform for tours and activities.",
    status: "live",
    href: "https://www.getyourguide.com?partner_id=WZOJZJM&cmp=share_to_earn",
    note: "Affiliate link live.",
  },

  // -------------------------
  // HELSINKI FERRY
  // -------------------------
  direct_ferries: {
    key: "direct_ferries",
    name: "Direct Ferries",
    type: "ferry_search",
    badge: "Compare",
    blurb: "Compare routes and ferry operators.",
    status: "placeholder",
  },
  tallink_silja: {
    key: "tallink_silja",
    name: "Tallink Silja",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Direct operator for Helsinki–Tallinn and Stockholm routes.",
    status: "placeholder",
  },
  viking_line: {
    key: "viking_line",
    name: "Viking Line",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Alternative ferry operator with good schedules.",
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
    blurb: "Iconic seaside sauna. Book ahead on weekends.",
    status: "placeholder",
  },
  allas_sea_pool: {
    key: "allas_sea_pool",
    name: "Allas Sea Pool",
    type: "sauna_local",
    badge: "Local",
    blurb: "Central sauna and sea pool combo.",
    status: "placeholder",
  },
  getyourguide_sauna: {
    key: "getyourguide_sauna",
    name: "GetYourGuide (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Platform backup for sauna tickets.",
    status: "placeholder",
  },
  tiqets_sauna: {
    key: "tiqets_sauna",
    name: "Tiqets (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Mobile-friendly ticketing backup.",
    status: "placeholder",
  },

  // -------------------------
  // HELSINKI CITY
  // -------------------------
  getyourguide_city: {
    key: "getyourguide_city",
    name: "GetYourGuide (Helsinki)",
    type: "city_tours",
    badge: "Backup",
    blurb: "Platform backup for common city tours.",
    status: "placeholder",
  },
  viator_city: {
  key: "viator_city",
  name: "Viator (Helsinki)",
  type: "city_tours",
  badge: "Backup",
  blurb: "Alternative platform for city activities.",
  status: "live",
  href: "https://www.viator.com/Helsinki/d803-ttd?pid=P00281199&mcid=42383&medium=link&campaign=thenorthtriphelsinki",
  note: "Affiliate link live.",
},
  helsinki_city_tours: {
    key: "helsinki_city_tours",
    name: "Helsinki City Tours",
    type: "city_tours",
    badge: "Top pick",
    blurb: "Local sightseeing routes and first-day tours.",
    status: "placeholder",
  },
  redrib_experience: {
    key: "redrib_experience",
    name: "Redrib Experience",
    type: "city_tours",
    badge: "Local",
    blurb: "Speedboat experiences. Short, memorable, expensive in a good way.",
    status: "placeholder",
  },
};
