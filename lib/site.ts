export const SITE = {
  name: "TheNorthTrip",
  domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "thenorthtrip.com",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),


  // contact (used in SEO JSON-LD)
  email: "hello@thenorthtrip.com",

  // metadata / og tags
  locale: "en_US",
  language: "en",
} as const;
