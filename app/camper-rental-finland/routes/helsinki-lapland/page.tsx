import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export default function CamperRouteHelsinkiLaplandPage() {
  return (
    <div className="bg-white">
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper route: Helsinki → Lapland
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          A long-distance road trip. Often works well in summer. In winter, the route punishes optimism: darkness,
          fatigue, cold, and missed buffers are the standard failure mode.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Good fit when</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>You accept long drives and plan conservative daily distances.</li>
              <li>You’re comfortable with winter driving realities (if winter).</li>
              <li>You verify station returns and one-way constraints early.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">What typically goes wrong</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Underestimating battery drain and heating constraints in deep cold.</li>
              <li>Not planning fuel/stop buffers (especially outside major hubs).</li>
              <li>Assuming “flexible return” (late return fees, station rules).</li>
            </ul>
          </Card>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025.12.31</p>

        <div className="mt-8 text-sm text-brand-text/75">
          <Link href="/camper-rental-finland" className="font-semibold hover:underline">
            Back to Camper Rental Finland →
          </Link>
          <span className="mx-2">•</span>
          <Link href="/getting-around-finland" className="font-semibold hover:underline">
            Compare train/flight tradeoffs →
          </Link>
        </div>
      </Section>
    </div>
  );
}
