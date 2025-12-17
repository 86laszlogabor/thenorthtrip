type PlausibleFn = (eventName: string, opts?: { props?: Record<string, unknown> }) => void;

function getPlausible(): PlausibleFn | undefined {
  if (typeof window === "undefined") return undefined;
  return window.plausible;
}

export function track(
  eventName: "affiliate_click" | "cta_click" | "email_click",
  props?: Record<string, unknown>
) {
  const plausible = getPlausible();
  if (typeof plausible === "function") {
    plausible(eventName, { props });
  }
}
