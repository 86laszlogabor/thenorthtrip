import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for thenorthtrip.",
  path: "/affiliate-disclosure",
  keywords: ["affiliate disclosure", "thenorthtrip affiliate"],
});

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">Affiliate Disclosure</h1>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <p className="text-sm text-white/70">
          Some links may be affiliate links. If you book through them, we may earn a commission at no extra cost to you.
        </p>
        <p className="text-sm text-white/70">
          We still focus on the same boring stuff: deposit holds, card rules, winter add-ons, and inclusions.
        </p>
      </section>
    </main>
  );
}
