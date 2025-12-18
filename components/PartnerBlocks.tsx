// components/PartnerBlocks.tsx
import TrackedLink from "@/components/TrackedLink";

type Partner = {
  name: string;
  blurb: string;
  href: string; // later you can swap to your real affiliate links
  cta: string;
  tag?: string; // "Best for debit cards", etc.
};

function PartnerCard({
  title,
  subtitle,
  partner,
  placement,
}: {
  title: string;
  subtitle: string;
  partner: Partner;
  placement: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="text-xs font-semibold tracking-wide text-slate-500">{title}</div>
      <div className="mt-2 text-lg font-semibold text-slate-900">{partner.name}</div>
      {partner.tag ? (
        <div className="mt-2 inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
          {partner.tag}
        </div>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-slate-700">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{partner.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        <TrackedLink
          href={partner.href}
          external
          target="_blank"
          rel="sponsored nofollow noopener"
          eventName="affiliate_click"
          props={{ placement, partner: partner.name }}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
        >
          {partner.cta}
        </TrackedLink>

        <TrackedLink
          href="/offer-checklist"
          eventName="cta_click"
          props={{ placement, cta: "offer_checklist" }}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Ellenőrzőlista →
        </TrackedLink>
      </div>
    </div>
  );
}

/**
 * Contextual blocks by page:
 * You can keep these “soft”, not screaming affiliate.
 */
export function CarRentalPartnerBlock({ placement = "car_rental_body" }: { placement?: string }) {
  const partners: Partner[] = [
    {
      name: "DiscoverCars",
      tag: "Compare offers fast",
      blurb:
        "Összehasonlítós keresésnél praktikus: gyorsan látod az árakat, feltételeket, és ki a szolgáltató. (A részleteket úgyis ellenőrizni kell.)",
      href: "YOUR_DISCOVERCARS_AFFILIATE_LINK_HERE",
      cta: "Árak összehasonlítása",
    },
    {
      name: "Rentalcars",
      tag: "Big inventory",
      blurb:
        "Ha csak gyorsan akarsz széles kínálatot látni és azonnal szűrni, jó második check. A szabályokat itt is olvasd el.",
      href: "YOUR_RENTALCARS_LINK_HERE",
      cta: "Kínálat megnézése",
    },
    {
      name: "GetYourGuide",
      tag: "Flexible tours",
      blurb:
        "Nem autó, de ha a logisztikát túrával oldod meg: sok foglalásnál a lemondás rugalmasabb, ami Lappföldön életmentő.",
      href: "YOUR_GETYOURGUIDE_LINK_HERE",
      cta: "Túrák és transzferek",
    },
  ];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <PartnerCard
        title="Ajánlott eszköz"
        subtitle="Autóbérlésnél nem az a kérdés, hol a legolcsóbb. Hanem hogy a feltételek passzolnak-e."
        partner={partners[0]}
        placement={placement}
      />
      <PartnerCard
        title="Második ellenőrzés"
        subtitle="Ha gyors sanity-check kell a kínálatra és árszintekre, ez működik."
        partner={partners[1]}
        placement={placement}
      />
      <PartnerCard
        title="Alternatíva"
        subtitle="Ha nem akarsz vezetni, néha a szervezett megoldás a nyugalom ára."
        partner={partners[2]}
        placement={placement}
      />
    </div>
  );
}

export function ToursPartnerBlock({ placement = "tours_body" }: { placement?: string }) {
  const partner: Partner = {
    name: "GetYourGuide",
    tag: "Cancellation matters",
    blurb:
      "Lappföldön az időjárás és a fény dönt. A rugalmas lemondás nem extra, hanem kockázatkezelés.",
    href: "YOUR_GETYOURGUIDE_LINK_HERE",
    cta: "Lapland tours megnézése",
  };

  return (
    <div className="mt-10">
      <PartnerCard
        title="Diszkrét ajánlás"
        subtitle="Túráknál az apróbetű fontosabb, mint a fotók."
        partner={partner}
        placement={placement}
      />
    </div>
  );
}
