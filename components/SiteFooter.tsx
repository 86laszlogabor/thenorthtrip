import Link from "next/link";
import { LEGAL, SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.brand}. Practical travel info, not fairy tales.</p>
          <div className="flex flex-wrap gap-4">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/80">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
