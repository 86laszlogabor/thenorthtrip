import HeroSplit from "@/components/HeroSplit";
import SectionShell from "@/components/SectionShell";
import CTACluster from "@/components/CTACluster";

export default function HomePage() {
  return (
    <main className="pb-16">
      <HeroSplit
        title="Finland travel offers, without the surprises"
        subtitle="Car rentals, campervans, Lapland tours. The boring details that save you money: deposits, insurance, desk rules."
        primaryCtaText="Open offer checklist"
        primaryCtaHref="/offer-checklist"
        secondaryCtaText="Read the blog"
        secondaryCtaHref="/blog"
        bullets={[
          "Deposit holds explained (credit vs debit)",
          "Insurance: what matters, what’s marketing",
          "Pickups: airport desk reality",
        ]}
      />

      <SectionShell
        title="Start here"
        subtitle="Pick a pillar. Get the checklist. Then read the targeted guides."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <a className="rounded-2xl border border-white/10 bg-gray-900/40 p-5 hover:bg-gray-900/60 transition" href="/car-rental-helsinki">
            <div className="text-white font-semibold">Car rental in Helsinki</div>
            <div className="mt-2 text-sm text-gray-300 leading-relaxed">
              Deposits, credit cards, insurance, HEL pickup rules.
            </div>
            <div className="mt-4 text-sm text-blue-300">Explore →</div>
          </a>

          <a className="rounded-2xl border border-white/10 bg-gray-900/40 p-5 hover:bg-gray-900/60 transition" href="/camper-rental-finland">
            <div className="text-white font-semibold">Camper rental in Finland</div>
            <div className="mt-2 text-sm text-gray-300 leading-relaxed">
              Season pricing, inspection, exclusions that cost money.
            </div>
            <div className="mt-4 text-sm text-blue-300">Explore →</div>
          </a>

          <a className="rounded-2xl border border-white/10 bg-gray-900/40 p-5 hover:bg-gray-900/60 transition" href="/lapland-tours">
            <div className="text-white font-semibold">Lapland tours</div>
            <div className="mt-2 text-sm text-gray-300 leading-relaxed">
              Operator selection, inclusions, realistic expectations.
            </div>
            <div className="mt-4 text-sm text-blue-300">Explore →</div>
          </a>
        </div>
      </SectionShell>

      <section className="mx-auto max-w-6xl px-4 mt-10">
        <CTACluster
          title="Do the checklist before booking"
          subtitle="It’s the fastest way to avoid bad surprises and overpriced add-ons."
          buttons={[
            { label: "Offer checklist", href: "/offer-checklist", variant: "primary" },
            { label: "Affiliate disclosure", href: "/affiliate-disclosure", variant: "secondary" },
          ]}
        />
      </section>
    </main>
  );
}
