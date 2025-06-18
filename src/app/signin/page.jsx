"use client";

import { SignIn } from "@clerk/nextjs";
import Layout from "../../Layout/Layout";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SignInInner() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") || "/";

  return (
    <Layout>
      <div
        style={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "50vh",
        }}
      >
        <SignIn routing="hash" redirectUrl={redirectUrl} />
      </div>
    </Layout>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInInner />
    </Suspense>
  );
}
