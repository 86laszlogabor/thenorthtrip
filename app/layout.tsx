import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TheNorthTrip",
  description:
    "Car rental, camper rental, and Lapland tours in Finland. Without the usual headaches.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
}
