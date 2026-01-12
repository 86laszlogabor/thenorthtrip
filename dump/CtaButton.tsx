import React from "react";

type Props = {
 href: string;
 children: React.ReactNode;
 variant?: "primary" | "success" | "outline" | "secondary";
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
 const width = full? "w-full": "";

 // secondary = neutral (alias to outline)
 const v = variant === "secondary"? "outline": variant;

 const styles =
 v === "primary"? "bg-orange-500 text-white hover:bg-orange-600": v === "success"? "bg-emerald-600 text-white hover:bg-emerald-700": "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50";

 return (<a
 href={href}
 className={[base, styles, width, className].filter(Boolean).join(" ")}
 >
 {children}
 </a>);
}

