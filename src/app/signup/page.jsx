"use client";

import Layout from "../../Layout/Layout";
import { SignedOut, SignedIn, SignIn, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  return (
    <Layout>
      {/* <h1>Skoegle</h1> */}

      {/* Content visible only to signed-out users */}
      <SignedOut>
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Want to access more?</h2>
          <p style={{ marginBottom: "2rem" }}>
            Sign in to unlock all features of Skoegle.
          </p> */}
          <SignIn routing="hash" />
        </div>
      </SignedOut>

      {/* Content visible only to signed-in users (including logout) */}
      <SignedIn>
        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <SignOutButton
            signOutCallback={() => {
              router.push("/");
            }}
          >
            <button
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1.5rem",
                borderRadius: "8px",
                backgroundColor: "#0077cc",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </SignedIn>
    </Layout>
  );
}
