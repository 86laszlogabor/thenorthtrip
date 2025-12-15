import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheNorthTrip",
  description: "Finland car rentals, camper rentals, and Lapland tours. Clear facts before you book.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
