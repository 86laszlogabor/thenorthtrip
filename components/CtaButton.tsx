type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "success" | "outline";
  full?: boolean;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  full,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition-colors";
  const width = full ? "w-full" : "";

  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : variant === "success"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50";

  return (
    <a href={href} className={[base, styles, width].join(" ")}>
      {children}
    </a>
  );
}
