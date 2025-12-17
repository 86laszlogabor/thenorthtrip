// components/ui/TonedPage.tsx
import React from "react";
import { UI } from "@/lib/ui";

type Props = {
  children: React.ReactNode;
  bandHeightClassName?: string; // pl. "h-[320px]"
};

export default function TonedPage({
  children,
  bandHeightClassName = "h-[340px]",
}: Props) {
  return (
    <main className={UI.page}>
      <div className={`absolute inset-x-0 top-0 ${bandHeightClassName} ${UI.canvas}`} />
      <div className="relative">{children}</div>
    </main>
  );
}
