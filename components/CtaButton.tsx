// components/CtaButton.tsx
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-tight transition focus:outline-none focus:ring-2 focus:ring-emerald-500/40";

  const styles: Record<Variant, string> = {
    primary:
      "bg-orange-600 text-white hover:opacity-95 shadow-sm shadow-orange-600/20",
    secondary:
      "bg-emerald-600 text-white hover:opacity-95 shadow-sm shadow-emerald-600/20",
    ghost:
      "bg-white text-slate-900 border border-black/10 hover:bg-slate-50",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
