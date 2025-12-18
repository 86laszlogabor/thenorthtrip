// app/offer-checklist/page.tsx
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import { CarRentalPartnerBlock } from "@/components/PartnerBlocks";

export const metadata = {
  title: "Offer checklist | TheNorthTrip",
  description:
    "Free checklist for Finland & Lapland bookings: car rental deposits, card rules, insurance, winter add-ons, and tour fine print.",
  alternates: { canonical: "/offer-checklist" },
};

export default function OfferChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO */}
      <section className="relative isolate">
        <div className="relative h-[56vh] min-h-[460px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Lapland planning"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/20 backdrop-blur">
                  Free checklist
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  The checklist that prevents
                  <span className="block text-white/85">“surprise costs”.</span>
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Autóbérlés, túrák, biztosítás, kártyák, kauciók, téli kiegészítők.
                  5 perc ellenőrzés, sok száz euró idegeskedés helyett.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <TrackedLink
                    href="/get-help"
                    eventName="cta_click"
                    props={{ placement: "checklist_hero", cta: "get_help" }}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  >
                    Get help
                  </TrackedLink>

                  <TrackedLink
                    href="/car-rental-helsinki"
                    eventName="cta_click"
                    props={{ placement: "checklist_hero", cta: "car_rental" }}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Car rental guide →
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE BODY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-10 pb-16">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10">
              <div className="mx-auto max-w-3xl">
                <p className="text-xs font-semibold tracking-wide text-slate-500">
                  Use this before you pay
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                  Checklist: what to verify
                </h2>

                <div className="mt-6 space-y-8 text-slate-700">
                  <section>
                    <h3 className="text-lg font-semibold text-slate-900">Car rental</h3>
                    <ul className="mt-3 list-disc pl-5 space-y-2">
                      <li>Card type accepted (credit vs debit), and whose name must be on the card</li>
                      <li>Deposit hold amount and conditions</li>
                      <li>Excess amount + what “full coverage” actually covers (tyres, windshield, underbody)</li>
                      <li>Winter tyres included? Any winter add-ons mandatory?</li>
                      <li>Pickup/return timing rules, late fees, cancellation policy</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-slate-900">Tours & experiences</h3>
                    <ul className="mt-3 list-disc pl-5 space-y-2">
                      <li>What’s included (gear, food, transfers) and what’s extra</li>
                      <li>Cancellation rules and weather policy</li>
                      <li>Pickup area, duration breakdown (transport vs activity)</li>
                      <li>Group size and minimum age/health requirements</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-slate-900">Stays</h3>
                    <ul className="mt-3 list-disc pl-5 space-y-2">
                      <li>Location realism: distances in winter, not just on the map</li>
                      <li>Check-in/out constraints vs your flight times</li>
                      <li>Heating, parking, road access in heavy snow</li>
                    </ul>
                  </section>
                </div>

                {/* Discrete partner help */}
                <CarRentalPartnerBlock placement="checklist_partners" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 bg-slate-950" />
    </main>
  );
}
