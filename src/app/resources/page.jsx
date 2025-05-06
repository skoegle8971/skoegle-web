"use client";

import Layout from "../../Layout/Layout";

export default function Resources() {
  return (
    <Layout>
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Resources</h1>
        <p>
          Find whitepapers, case studies, and useful documents to help you learn more about our
          technologies and solutions.
        </p>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Downloads</h2>
          <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="/resources/SKOEGLE_Whitepaper.pdf" target="_blank" style={{ color: "#0070f3" }}>
                SKOEGLE Whitepaper (PDF)
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="/resources/Case_Study_Smart_Surveillance.pdf" target="_blank" style={{ color: "#0070f3" }}>
                Case Study: Smart Surveillance (PDF)
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="/resources/Product_Brochure.pdf" target="_blank" style={{ color: "#0070f3" }}>
                Product Brochure (PDF)
              </a>
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Useful Links</h2>
          <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://skoegle.com/blog" target="_blank" style={{ color: "#0070f3" }}>
                Visit our Blog
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://skoegle.com/support" target="_blank" style={{ color: "#0070f3" }}>
                Support Center
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="https://skoegle.com/contact" target="_blank" style={{ color: "#0070f3" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
