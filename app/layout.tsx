import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
 metadataBase: new URL("https://thenorthtrip.com"),
 title: "TheNorthTrip",
 description: "Decision-first Finland travel.",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (<html lang="en">
 <body className="bg-white text-slate-900 antialiased">
 <SiteHeader />
 <main>{children}</main>
 <SiteFooter />
 </body>
 </html>);
}

