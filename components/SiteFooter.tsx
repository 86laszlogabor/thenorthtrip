import React from "react";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-white">NordicDrive</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Practical guides for comparing travel offers in Finland.
            Deposits, insurance, desk rules, real-world gotchas.
          </p>
        </div>

        <div>
          <div className="font-semibold text-white">Explore</div>
          <div className="mt-3 grid gap-2 text-sm">
            <a className="text-white/70 hover:text-white transition" href="/car-rental-helsinki">Car rental Helsinki</a>
            <a className="text-white/70 hover:text-white transition" href="/camper-rental-finland">Camper rental Finland</a>
            <a className="text-white/70 hover:text-white transition" href="/lapland-tours">Lapland tours</a>
            <a className="text-white/70 hover:text-white transition" href="/blog">Blog</a>
            <a className="text-white/70 hover:text-white transition" href="/offer-checklist">Offer checklist</a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white">Legal</div>
          <div className="mt-3 grid gap-2 text-sm">
            <a className="text-white/70 hover:text-white transition" href="/affiliate-disclosure">Affiliate disclosure</a>
            <a className="text-white/70 hover:text-white transition" href="/privacy">Privacy</a>
            <a className="text-white/70 hover:text-white transition" href="/terms">Terms</a>
            <a className="text-white/70 hover:text-white transition" href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} NordicDrive</span>
          <span>Built to reduce desk drama.</span>
        </div>
      </div>
    </footer>
  );
}
