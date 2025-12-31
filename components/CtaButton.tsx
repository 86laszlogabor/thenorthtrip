import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "success" | "secondary" | "outline";
  full?: boolean;
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  full,
  className,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition-colors";
  const width = full ? "w-full" : "";

  // System rules:
  // - primary: orange (1 page = 1 primary intent)
  // - success: green (conversion CTA)
  // - secondary: neutral (non-primary action)
  // - outline: neutral outline
  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : variant === "success"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : variant === "secondary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50";

  return (
    <a href={href} className={[base, styles, width, className].filter(Boolean).join(" ")}>
      {children}
    </a>
  );
}
