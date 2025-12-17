import { track, type TrackEventName, type TrackProps } from "@/lib/track";
import { getStoredUtm } from "@/lib/track-context";

export function trackPlus(eventName: TrackEventName, props?: TrackProps) {
  const utm = getStoredUtm();
  track(eventName, { ...utm, ...(props ?? {}) });
}
