// components/AboutFooterNote.tsx
import Link from "next/link";

export default function AboutFooterNote() {
  return (
    <div className="text-sm text-white/70 space-y-2">
      <p>
        TheNorthTrip is a practical travel planning site for Finland. We focus on clear, real-world costs and common tourist traps.
      </p>
      <p className="text-xs text-white/55">
        Some links may be affiliate links. <Link className="underline underline-offset-4" href="/affiliate-disclosure">Affiliate disclosure</Link>
      </p>
    </div>
  );
}
