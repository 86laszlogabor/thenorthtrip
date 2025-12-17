// lib/track.ts

export type TrackEventName = "affiliate_click" | "cta_click";

export type TrackProps = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: TrackProps }) => void;
  }
}

function safePathname(): string {
  if (typeof window === "undefined") return "ssr";
  return window.location?.pathname || "unknown";
}

export function track(eventName: TrackEventName, props?: TrackProps) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.plausible !== "function") return;

    const page = safePathname();

    // Backward compat:
    // - ha valaki még "cta" kulcsot küld, hagyjuk meg
    // - de preferáljuk a "label" kulcsot
    const merged: TrackProps = {
      page,
      ...(props ?? {}),
    };

    window.plausible(eventName, { props: merged });
  } catch {
    // swallow
  }
}
