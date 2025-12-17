import Link from "next/link";

export default function LegalMini() {
  return (
    <div className="mt-8 text-xs text-slate-600">
      <Link className="underline" href="/affiliate-disclosure">Affiliate disclosure</Link>
      <span className="mx-2">•</span>
      <Link className="underline" href="/privacy">Privacy</Link>
      <span className="mx-2">•</span>
      <Link className="underline" href="/terms">Terms</Link>
    </div>
  );
}
