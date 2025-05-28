"use client";

import { SignUp } from "@clerk/nextjs";
import Layout from "../../Layout/Layout"; // Adjust the path if necessary

export default function SignUpPage() {
  return (
    <Layout>
      <div
        style={{
          marginTop: "8rem", // Adds enough space below the navbar
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "30vh", // Optional for full-page centering
        }}
      >
        {/* Optional heading */}
        {/* <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Join Skoegle Today</h2> */}

        <SignUp routing="hash" />
      </div>
    </Layout>
  );
}
