"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AffiliateDisclosureClient() {
  const sp = useSearchParams();
  const ref = sp.get("ref");

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Affiliate disclosure</h1>

        <p className="mt-4 text-slate-700">
          Some links on this site may be affiliate links. If you click and book, we may earn a commission at no
          extra cost to you. We still prioritize decision-helpful guidance over hype.
        </p>

        {ref ? (
          <p className="mt-4 text-sm text-slate-600">
            Ref: <span className="font-mono">{ref}</span>
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Back to home
          </Link>
          <Link
            href="/offer-checklist"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600 transition"
          >
            Open checklist
          </Link>
        </div>
      </div>
    </main>
  );
}
