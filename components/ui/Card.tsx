// components/ui/Card.tsx
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className = "", ...props }: Props) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-slate-50 shadow-sm",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
