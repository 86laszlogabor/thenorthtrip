import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
};

export default function CtaButton({ href, children, variant, className }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-card px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-95 focus:outline-none focus:ring-2";
  const styles =
    variant === "primary"
      ? "bg-brand-orange text-white focus:ring-brand-orange/50"
      : "bg-brand-green text-white focus:ring-brand-green/40";

  return (
    <Link href={href} className={`${base} ${styles} ${className ?? ""}`.trim()}>
      {children}
    </Link>
  );
}
