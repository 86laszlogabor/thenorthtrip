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

    window.plausible(eventName, {
      props: { page: safePathname(), ...(props ?? {}) },
    });
  } catch {
    // swallow
  }
}
