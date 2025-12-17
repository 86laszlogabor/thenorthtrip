const KEY = "tntr_utm";

function ssGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  try { return window.sessionStorage.getItem(key); } catch { return null; }
}

function ssSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  try { window.sessionStorage.setItem(key, value); } catch { /* ignore */ }
}

export function getStoredUtm(): Record<string, string> {
  const raw = ssGet(KEY);
  if (!raw) return {};
  try { return JSON.parse(raw) as Record<string, string>; } catch { return {}; }
}

export function storeUtm(utm: Record<string, unknown>) {
  const cur = getStoredUtm();
  const merged = { ...cur, ...utm };
  ssSet(KEY, JSON.stringify(merged));
}
