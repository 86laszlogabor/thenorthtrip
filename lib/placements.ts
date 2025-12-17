// lib/placements.ts
// Click-validáció fázisban a Placement legyen szabad string.
// Később, ha akarsz, csinálhatunk strict uniont. Most csak működjön.

export type Placement = string;

export function gridPlacement(i: number): Placement {
  const n = Math.max(1, Math.min(10, Math.floor(i + 1)));
  return `grid_card_${n}`;
}

export function inlinePlacement(i: number): Placement {
  const n = Math.max(1, Math.min(10, Math.floor(i + 1)));
  return `inline_${n}`;
}
