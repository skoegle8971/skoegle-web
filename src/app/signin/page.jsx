"use client";

import { SignIn } from "@clerk/nextjs";
import Layout from "../../Layout/Layout";

export default function SignInPage() {
  return (
    <Layout>
      <div
        style={{
          marginTop: "8rem", // Increased spacing
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "50vh", // Optional: ensures full-page centering
        }}
      >
        <SignIn routing="hash" />
      </div>
    </Layout>
  );
}
