// lib/placements.ts

export type Placement =
  | "hero_primary"
  | "hero_secondary"
  | "top_primary"
  | "top_secondary"
  | `grid_card_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`
  | `inline_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`
  | "footer"
  | "unknown";

export function gridPlacement(i: number): Placement {
  const n = Math.max(1, Math.min(10, Math.floor(i + 1)));
  return `grid_card_${n}` as Placement;
}

export function inlinePlacement(i: number): Placement {
  const n = Math.max(1, Math.min(10, Math.floor(i + 1)));
  return `inline_${n}` as Placement;
}
