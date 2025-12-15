import React from "react";

export type StickyMobileCTAProps = {
  text: string;
  href: string;
};

export default function StickyMobileCTA({ text, href }: StickyMobileCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-3 shadow-sm">
          <a
            href={href}
            className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition"
          >
            {text}
          </a>
        </div>
      </div>
    </div>
  );
}
