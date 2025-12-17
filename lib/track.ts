export type TrackEvent = "pageview" | "affiliate_click" | "cta_click" | "email_click";

export type TrackProps = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function track(event: TrackEvent, props: TrackProps = {}) {
  if (typeof window === "undefined") return;

  const clean: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) clean[k] = v;
  }

  if (typeof window.plausible === "function") {
    window.plausible(event, { props: clean });
  } else {
    // fallback: local debug only
    // eslint-disable-next-line no-console
    console.debug("[track]", event, clean);
  }
}
