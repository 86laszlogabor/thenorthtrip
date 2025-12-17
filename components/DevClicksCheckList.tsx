"use client";

import { trackPlus } from "@/lib/track-plus";

export default function DevClicksChecklist() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
      <div className="font-semibold">Dev click test</div>
      <button
        className="mt-3 rounded-lg bg-black px-3 py-2 font-semibold text-white"
        onClick={() => trackPlus("cta_click", { placement: "dev", cta: "test_click" })}
      >
        Fire test event
      </button>
    </div>
  );
}
