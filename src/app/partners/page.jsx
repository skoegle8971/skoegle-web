"use client";

import Layout from "../../Components/Layout/Layout";

export default function Partners() {
  return (
    <Layout>
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Partners</h1>
        <p>
          We collaborate with leading organizations to deliver impactful technology solutions. Our partners
          share our vision for innovation and customer success.
        </p>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Strategic Partners</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>TechNova Solutions</li>
            <li style={{ marginBottom: "0.5rem" }}>InnovateAI Inc.</li>
            <li style={{ marginBottom: "0.5rem" }}>SmartGrid Systems</li>
          </ul>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Channel & Reseller Partners</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>GlobalTech Resellers</li>
            <li style={{ marginBottom: "0.5rem" }}>NextWave Distribution</li>
            <li style={{ marginBottom: "0.5rem" }}>Alpha Resale Group</li>
          </ul>
        </section>

        <p style={{ marginTop: "2rem" }}>
          Interested in becoming a partner? Email us at{" "}
          <strong>partners@skoegle.com</strong>.
        </p>
      </main>
    </Layout>
  );
}
