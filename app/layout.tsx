import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-100 antialiased">
        <SiteHeader />
        <div className="min-h-screen">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
