export const SITE = {
  name: "thenorthtrip",
  domain: "thenorthtrip.com",
  url: "https://thenorthtrip.com",
  brand: "TheNorthTrip.com",
  email: "hello@thenorthtrip.com", // placeholder
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/car-rental-helsinki", label: "Car Rental Helsinki" },
  { href: "/camper-rental-finland", label: "Camper Rental Finland" },
  { href: "/lapland-tours", label: "Lapland Tours" },
  { href: "/get-help", label: "Get Help" },
  { href: "/blog", label: "Blog" },
] as const;

export const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
] as const;
