"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-black"
          : "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
      }
    >
      {label}
    </Link>
  );
}

export default function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const isCar = pathname?.startsWith("/car-rental");
  const isCamper = pathname?.startsWith("/camper-rental");
  const isLapland =
    pathname?.startsWith("/lapland-tours") ||
    pathname?.startsWith("/levi") ||
    pathname?.startsWith("/rovaniemi") ||
    pathname?.startsWith("/yllas");
  const isBlog = pathname?.startsWith("/blog");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.back()}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              type="button"
            >
              ← Back
            </button>

            <Link
              href="/"
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              ⌂ Home
            </Link>
          </div>

          {/* Center logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-900"
            aria-label="TheNorthTrip home"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <rect
                x="1"
                y="1"
                width="26"
                height="26"
                rx="8"
                stroke="#0F172A"
                strokeWidth="1.5"
              />
              <path
                d="M7.5 18.8C10.2 13.2 12.5 10.6 14.3 10.6C16.1 10.6 17.5 13 20.5 18.8"
                stroke="#0F172A"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M9 15.2C10.8 12 12.2 10.2 14.1 10.2C16 10.2 17.2 12 19 15.2"
                stroke="#F97316"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="20.2" cy="8.8" r="1.5" fill="#0F172A" />
            </svg>

            <span className="text-sm font-extrabold tracking-tight hidden sm:inline">
              TheNorthTrip
            </span>
          </Link>

          {/* Right nav */}
          <nav className="flex items-center gap-2">
            <NavLink href="/car-rental-helsinki" label="Car rental" active={!!isCar} />
            <NavLink href="/camper-rental-finland" label="Camper rental" active={!!isCamper} />
            <NavLink href="/lapland-tours" label="Lapland tours" active={!!isLapland} />
            <NavLink href="/blog" label="Blog" active={!!isBlog} />

            <Link
              href="/offer-checklist"
              className="ml-1 rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-black hover:bg-orange-600"
            >
              Free checklist
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
