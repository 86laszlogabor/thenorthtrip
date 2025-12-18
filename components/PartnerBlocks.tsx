// components/PartnerBlocks.tsx
import PartnerGrid from "@/components/PartnerGrid";
import type { PartnerKey } from "@/lib/partners";

export function CarRentalPartnerBlock({ placement = "car_rental_body" }: { placement?: string }) {
  const keys: PartnerKey[] = ["discovercars", "autoeurope"];

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-900">Compare (contextual, not spammy)</h3>
      <p className="mt-2 max-w-3xl text-sm text-slate-600">
        Car rental in Finland is rarely about “cheapest”. It’s about deposit rules, card acceptance, winter add-ons,
        and what happens when plans change. Use these as a quick comparison layer, then verify conditions.
      </p>

      <div className="mt-5">
        <PartnerGrid partnerKeys={keys} placement={placement} ctaLabel="Compare offers" />
      </div>
    </section>
  );
}

export function CamperPartnerBlock({ placement = "camper_body" }: { placement?: string }) {
  const keys: PartnerKey[] = ["indie_campers"];

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-900">Camper rental (practical starting point)</h3>
      <p className="mt-2 max-w-3xl text-sm text-slate-600">
        Fleet-based rentals are usually simpler for first trips. Peer-to-peer can be cheaper, but requires more caution.
      </p>

      <div className="mt-5">
        <PartnerGrid partnerKeys={keys} placement={placement} ctaLabel="Check availability" />
      </div>
    </section>
  );
}
