"use client";

import { SignUp } from "@clerk/nextjs";
import Layout from "../../Layout/Layout"; // Adjust the path if necessary
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

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
          minHeight: "30vh",
        }}
      >
        {loading ? (
          <div className="spinner" />
        ) : (
          <>
            <SignUp
              routing="hash"
              appearance={{
                elements: {
                  footer: { display: "none" },
                },
              }}
            />
            {/* Add this block for the Sign-In link */}
            <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
              Already have an account?{" "}
              <Link href="/signin" style={{ color: "#0070f3", textDecoration: "underline" }}>
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>

      {/* CSS Spinner */}
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
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Layout>
  );
}
