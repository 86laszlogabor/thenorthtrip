import React from "react";

export type StickyMobileCTAProps =
  | { label: string; href: string }
  | { text: string; href: string };

function isTextVariant(p: StickyMobileCTAProps): p is { text: string; href: string } {
  return (p as any).text !== undefined;
}

export default function StickyMobileCTA(props: StickyMobileCTAProps) {
  const label = isTextVariant(props) ? props.text : props.label;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
      <a
        href={props.href}
        className="block w-full rounded-2xl bg-blue-600 px-5 py-4 text-center font-semibold text-white shadow-lg hover:bg-blue-500 transition"
      >
        {label}
      </a>
    </div>
  );
}
