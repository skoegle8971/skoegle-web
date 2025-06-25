"use client";

import { SignIn } from "@clerk/nextjs";
import Layout from "../../Layout/Layout";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

function SignInInner() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") || "/";
  const [loading, setLoading] = useState(true);

  // Simulate a delay to show loading spinner until Clerk is ready
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // you can adjust the delay or use a real loading check

    return () => clearTimeout(timeout);
  }, []);

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
        {loading ? (
          <div className="spinner" />
        ) : (
          <>
            <SignIn
              routing="hash"
              redirectUrl={redirectUrl}
              appearance={{
                elements: {
                  footer: { display: "none" },
                },
              }}
            />
            <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
              Don’t have an account?{" "}
              <Link href="/signup" style={{ color: "#0070f3", textDecoration: "underline" }}>
                Sign up
              </Link>
            </p>
          </>
        )}
      </div>

      {/* CSS spinner style */}
      <style jsx>{`
        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #0070f3;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
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
