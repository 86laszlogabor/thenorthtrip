export default function manifest() {
  return {
    name: "thenorthtrip",
    short_name: "thenorthtrip",
    description:
      "Small, high-intent guides about Finland bookings: deposits, card rules, winter add-ons, inclusions.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
