export type TrackEventName = "affiliate_click" | "cta_click";
export type TrackProps = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: TrackProps }) => void;
  }
}

export function track(eventName: TrackEventName, props?: TrackProps) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.plausible === "function") {
      window.plausible(eventName, { props: props ?? {} });
    }
  } catch {
    // swallow
  }
}
