// lib/pillars.ts
import type { BlogPost } from "@/lib/blog";

export const PILLARS = {
  "/car-rental-helsinki": {
    title: "Car rental Helsinki",
    href: "/car-rental-helsinki",
  },
  "/camper-rental-finland": {
    title: "Camper rental Finland",
    href: "/camper-rental-finland",
  },
  "/lapland-tours": {
    title: "Lapland tours",
    href: "/lapland-tours",
  },
} as const satisfies Record<BlogPost["pillar"], { title: string; href: string }>;

export type PillarPath = keyof typeof PILLARS;

export function isPillarPath(v: string | null): v is PillarPath {
  return !!v && (v in PILLARS);
}
