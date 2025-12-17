import { Suspense } from "react";
import AffiliateDisclosureClient from "./ui";

export default function AffiliateDisclosurePage() {
  return (
    <Suspense fallback={null}>
      <AffiliateDisclosureClient />
    </Suspense>
  );
}
