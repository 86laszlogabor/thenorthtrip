import React from "react";

export default function SectionShell({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-10">
      <div className="rounded-3xl border border-white/10 bg-gray-900/40 p-6 md:p-8">
        {title ? <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2> : null}
        {subtitle ? <p className="mt-2 text-gray-300 leading-relaxed">{subtitle}</p> : null}
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}
