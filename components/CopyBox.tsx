"use client";

import { useState } from "react";

export default function CopyBox({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">Copy-paste template</h2>
        <button
          onClick={onCopy}
          className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          type="button"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="whitespace-pre-wrap rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
        {text}
      </pre>

      <p className="text-xs text-white/60">
        If copy is blocked, welcome to browser security. Select the text manually like it’s 2009.
      </p>
    </div>
  );
}
