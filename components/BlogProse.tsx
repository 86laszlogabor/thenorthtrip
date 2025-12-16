// components/BlogProse.tsx
import type { ReactNode } from "react";

export default function BlogProse({ children }: { children: ReactNode }) {
  return (
    <div
      className={[
        "mt-8",
        "text-white/80 leading-7",
        "max-w-none",

        // paragraphs
        "[&>p]:mt-4",

        // headings
        "[&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:text-white",
        "[&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:tracking-tight [&>h3]:text-white",

        // lists
        "[&>ul]:mt-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2",
        "[&>ol]:mt-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2",
        "[&>li]:marker:text-white/40",

        // strong/em/code
        "[&_strong]:text-white [&_strong]:font-semibold",
        "[&_em]:text-white/90",
        "[&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-white/90",

        // links
        "[&_a]:text-orange-400 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-orange-300",

        // blockquote (ha később használsz)
        "[&>blockquote]:mt-6 [&>blockquote]:border-l [&>blockquote]:border-white/15 [&>blockquote]:pl-4 [&>blockquote]:text-white/70",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
