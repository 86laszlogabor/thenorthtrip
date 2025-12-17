export type UTM = Partial<{
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  ref: string;
}>;

export function pickUtm(params: URLSearchParams): UTM {
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref"] as const;
  const out: UTM = {};
  for (const k of keys) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  return out;
}
