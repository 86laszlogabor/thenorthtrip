// components/WhoWeAreCtas.tsx
import Link from "next/link";

export default function WhoWeAreCtas() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/offer-checklist"
        className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
      >
        Open the checklist
      </Link>

      <Link
        href="/get-help"
        className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Ask before booking
      </Link>

      <Link
        href="/car-rental-helsinki"
        className="rounded-xl px-5 py-3 text-sm font-semibold text-white/80 underline underline-offset-4 transition hover:text-white"
      >
        Read: Car rental traps →
      </Link>
    </div>
  );
}
