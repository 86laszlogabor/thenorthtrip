export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Stronger blend from page into footer (kills the “cut”) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/80 to-slate-950" />

        {/* Soft aurora glows (keep your idea, just cleaner) */}
        <div className="absolute -top-24 left-[-10%] h-[340px] w-[520px] rounded-full bg-emerald-400/8 blur-[80px]" />
        <div className="absolute -top-10 right-[-12%] h-[320px] w-[520px] rounded-full bg-cyan-400/8 blur-[80px]" />
        <div className="absolute top-[28%] left-[35%] h-[380px] w-[680px] rounded-full bg-indigo-400/7 blur-[100px]" />

        {/* Star speckle: keep it, but make it subtle and not “cheap” */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10">
        {/* Content panel to avoid “floating text in space” */}
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_18px_70px_rgba(0,0,0,0.35)]">
            <div className="px-6 py-10 md:px-10 md:py-12">
              <div className="grid gap-10 md:grid-cols-2 md:items-start">
                <div>
                  <div className="text-sm font-semibold text-white">
                    TheNorthTrip
                  </div>

                  <p className="mt-3 text-sm text-slate-200/90 leading-relaxed">
                    Affiliate disclosure (short): We may earn a commission when
                    you book through our links. It doesn’t change your price,
                    but it helps fund independent comparisons.
                  </p>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Disclaimer: Terms and prices can change. Always confirm at
                    booking.
                  </p>
                </div>

                <div className="md:justify-self-end">
                  <div className="grid gap-2 text-sm">
                    <a href="/" className="text-slate-200/90 hover:text-white hover:underline">
                      Home
                    </a>
                    <a href="/car-rental-helsinki" className="text-slate-200/90 hover:text-white hover:underline">
                      Car Rental Helsinki
                    </a>
                    <a href="/lapland-tours" className="text-slate-200/90 hover:text-white hover:underline">
                      Lapland Tours
                    </a>
                    <a href="/camper-rental-finland" className="text-slate-200/90 hover:text-white hover:underline">
                      Camper Rental Finland
                    </a>
                    <a href="/getting-around-finland" className="text-slate-200/90 hover:text-white hover:underline">
                      Getting Around Finland
                    </a>
                    <a href="/rental-terms-prices" className="text-slate-200/90 hover:text-white hover:underline">
                      Rental Terms &amp; Prices
                    </a>
                    <a href="/policy" className="text-slate-200/90 hover:text-white hover:underline">
                      Policy
                    </a>
                    <a href="/get-help" className="text-slate-200/90 hover:text-white hover:underline">
                      Get Help
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-300">
                © {year} TheNorthTrip
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade so it ends clean, not abruptly */}
        <div className="h-10 bg-gradient-to-b from-slate-950/0 to-slate-950" aria-hidden />
      </div>
    </footer>
  );
}
