import React from "react";

type Button = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export default function CTACluster({
  title,
  subtitle,
  buttons,
}: {
  title: string;
  subtitle?: string;
  buttons: Button[];
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gray-900/40 p-6 md:p-7">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {subtitle ? <p className="mt-2 text-gray-300 leading-relaxed">{subtitle}</p> : null}

      <div className="mt-5 flex flex-wrap gap-3">
        {buttons.map((b) => {
          const isPrimary = (b.variant ?? "primary") === "primary";
          return (
            <a
              key={`${b.href}-${b.label}`}
              href={b.href}
              target={b.external ? "_blank" : undefined}
              rel={b.external ? "nofollow sponsored noopener noreferrer" : undefined}
              className={
                isPrimary
                  ? "inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition"
                  : "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-gray-100 hover:bg-white/10 transition"
              }
            >
              {b.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
