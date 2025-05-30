export const dynamic = "force-dynamic";

import { Suspense } from "react";
import SearchClient from "./searchclient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchClient />
    </Suspense>
  );
}c
