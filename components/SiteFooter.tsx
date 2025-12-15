import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/offer-checklist", label: "Offer checklist" },
  { href: "/blog", label: "Blog" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-gray-950/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">thenorthtrip</p>
            <p className="text-sm text-white/60">
              Small, high-intent guides about deposits, card rules, winter add-ons, and inclusions.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">Explore</p>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link className="text-white/70 hover:text-white/90" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="space-y-2 text-sm">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link className="text-white/70 hover:text-white/90" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">Quick action</p>
            <Link
              href="/get-help"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Ask before booking
            </Link>
            <p className="text-xs text-white/60">
              Don’t send card numbers. Blurring screenshots is encouraged. Humans invented privacy for a reason.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} thenorthtrip</p>
          <p>Built to reduce “surprise fees”. Not to cure capitalism.</p>
        </div>
      </div>
    </footer>
  );
}
