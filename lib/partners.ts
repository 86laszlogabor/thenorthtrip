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

  // Helsinki ferry (TEMP = platform fallback)
  | "direct_ferries"
  | "tallink_silja"
  | "viking_line"

  // Helsinki sauna (TEMP = platform fallback)
  | "loyly"
  | "allas_sea_pool"
  | "getyourguide_sauna"
  | "tiqets_sauna"

  // Helsinki city (platforms live)
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

const GYG_BASE = "https://www.getyourguide.com";
const GYG_AFF = "partner_id=WZOJZJM";
const VIATOR_BASE = "https://www.viator.com";
const VIATOR_AFF = "pid=P00281199&mcid=42383&medium=link";

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
    note: "Add tracking link when onboarded.",
  },
  mycamper: {
    key: "mycamper",
    name: "MyCamper",
    type: "camper_p2p",
    badge: "Local",
    blurb: "Peer-to-peer rentals from local owners. Often better value.",
    status: "placeholder",
    note: "Add tracking link when onboarded.",
  },
  touring_cars_finland: {
    key: "touring_cars_finland",
    name: "Touring Cars",
    type: "camper_local",
    badge: "Winter-ready",
    blurb: "Premium local operator. Strong option for off-season and Lapland routes.",
    status: "placeholder",
    note: "Add tracking link when onboarded.",
  },

  // -------------------------
  // LAPLAND TOURS (LIVE)
  // -------------------------
  staylapland: {
    key: "staylapland",
    name: "StayLapland",
    type: "tour_local",
    badge: "Local",
    blurb: "Curated Lapland experiences with a local-first approach.",
    status: "placeholder",
    note: "Outreach sent.",
  },
  arctic_lifestyle: {
    key: "arctic_lifestyle",
    name: "Arctic Lifestyle",
    type: "tour_local",
    badge: "Local",
    blurb: "Small-group, experience-focused Lapland tours.",
    status: "placeholder",
    note: "Outreach sent.",
  },

  getyourguide_lapland: {
    key: "getyourguide_lapland",
    name: "GetYourGuide (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Reliable booking platform for tours and activities.",
    status: "live",
    href: `${GYG_BASE}/?${GYG_AFF}&cmp=lapland`,
    note: "Affiliate link live.",
  },

  viator_lapland: {
    key: "viator_lapland",
    name: "Viator (Lapland)",
    type: "tour_platform",
    badge: "Backup",
    blurb: "Platform backup for availability and last-minute bookings.",
    status: "live",
    href: `${VIATOR_BASE}/Rovaniemi/d22130-ttd?${VIATOR_AFF}&campaign=thenorthtriplapland`,
    note: "Affiliate link live.",
  },

  // -------------------------
  // HELSINKI FERRY (TEMP via platforms)
  // -------------------------
  direct_ferries: {
    key: "direct_ferries",
    name: "Direct Ferries",
    type: "ferry_search",
    badge: "Compare",
    blurb: "Compare routes and ferry operators.",
    status: "live",
    href: `${GYG_BASE}/helsinki-l13/?${GYG_AFF}&cmp=helsinki_ferry&search=tallinn%20ferry`,
    note: "TEMP: routed to GetYourGuide search (Tallinn ferry/day trips).",
  },
  tallink_silja: {
    key: "tallink_silja",
    name: "Tallink Silja",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Direct operator for Helsinki–Tallinn and Stockholm routes.",
    status: "live",
    href: `${VIATOR_BASE}/Helsinki-tours/Day-Trips-and-Excursions/d803-g5?${VIATOR_AFF}&campaign=thenorthtriphelsinki_ferry`,
    note: "TEMP: routed to Viator day trips (includes Tallinn-style options).",
  },
  viking_line: {
    key: "viking_line",
    name: "Viking Line",
    type: "ferry_operator",
    badge: "Direct",
    blurb: "Alternative ferry operator with good schedules.",
    status: "live",
    href: `${VIATOR_BASE}/Helsinki/d803-ttd?${VIATOR_AFF}&campaign=thenorthtriphelsinki_ferry`,
    note: "TEMP: routed to Viator Helsinki activities (ferry/day-trip style).",
  },

  // -------------------------
  // HELSINKI SAUNA (TEMP via platforms)
  // -------------------------
  loyly: {
    key: "loyly",
    name: "Löyly",
    type: "sauna_local",
    badge: "Top pick",
    blurb: "Iconic seaside sauna. Book ahead on weekends.",
    status: "live",
    href: `${GYG_BASE}/helsinki-l13/?${GYG_AFF}&cmp=helsinki_loyly&search=sauna%20l%C3%B6yly`,
    note: "TEMP: routed to GetYourGuide search.",
  },
  allas_sea_pool: {
    key: "allas_sea_pool",
    name: "Allas Sea Pool",
    type: "sauna_local",
    badge: "Local",
    blurb: "Central sauna and sea pool combo.",
    status: "live",
    href: `${GYG_BASE}/helsinki-l13/?${GYG_AFF}&cmp=helsinki_allas&search=sauna%20allas`,
    note: "TEMP: routed to GetYourGuide search.",
  },
  getyourguide_sauna: {
    key: "getyourguide_sauna",
    name: "GetYourGuide (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Platform backup for sauna tickets.",
    status: "live",
    href: `${GYG_BASE}/helsinki-l13/?${GYG_AFF}&cmp=helsinki_sauna&search=sauna`,
    note: "Affiliate link live (sauna search landing).",
  },
  tiqets_sauna: {
    key: "tiqets_sauna",
    name: "Tiqets (Sauna)",
    type: "ticketing",
    badge: "Backup",
    blurb: "Mobile-friendly ticketing backup.",
    status: "placeholder",
    note: "Later: add Tiqets tracking link when ready.",
  },

  // -------------------------
  // HELSINKI CITY (LIVE platforms; locals later)
  // -------------------------
  getyourguide_city: {
    key: "getyourguide_city",
    name: "GetYourGuide (Helsinki)",
    type: "city_tours",
    badge: "Backup",
    blurb: "Platform backup for common city tours.",
    status: "live",
    href: `${GYG_BASE}/helsinki-l13/?${GYG_AFF}&cmp=helsinki_city`,
    note: "Affiliate link live.",
  },
  viator_city: {
    key: "viator_city",
    name: "Viator (Helsinki)",
    type: "city_tours",
    badge: "Backup",
    blurb: "Alternative platform for city activities.",
    status: "live",
    href: `${VIATOR_BASE}/Helsinki/d803-ttd?${VIATOR_AFF}&campaign=thenorthtriphelsinki`,
    note: "Affiliate link live.",
  },
  helsinki_city_tours: {
    key: "helsinki_city_tours",
    name: "Helsinki City Tours",
    type: "city_tours",
    badge: "Top pick",
    blurb: "Local sightseeing routes and first-day tours.",
    status: "placeholder",
    note: "Later: replace with direct partner link if onboarded.",
  },
  redrib_experience: {
    key: "redrib_experience",
    name: "Redrib Experience",
    type: "city_tours",
    badge: "Local",
    blurb: "Speedboat experiences. Short, memorable, expensive in a good way.",
    status: "placeholder",
    note: "Later: add direct booking link when onboarded.",
  },
};
