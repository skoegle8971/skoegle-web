"use client";

import Layout from "../../Components/Layout/Layout";

export default function Resources() {
  return (
    <Layout>
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Resources</h1>
        <p>
          Explore our whitepapers, case studies, brochures, and documentation to
          learn more about our advanced GPS geo-fencing trackers, ID card trackers,
          and other innovative solutions.
        </p>

        {/* Downloads Section */}
        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Downloads</h2>
          <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/resources/SKOEGLE_GeoFencing_Whitepaper.pdf"
                target="_blank"
                style={{ color: "#0070f3" }}
              >
                GPS Geo-Fencing Trackers Whitepaper (PDF)
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/resources/ID_Card_Trackers_Brochure.pdf"
                target="_blank"
                style={{ color: "#0070f3" }}
              >
                ID Card Trackers Brochure (PDF)
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/resources/Vmarg_Overview.pdf"
                target="_blank"
                style={{ color: "#0070f3" }}
              >
                Vmarg: Next-Gen Solutions Overview (PDF)
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/resources/Dmarg_Features.pdf"
                target="_blank"
                style={{ color: "#0070f3" }}
              >
                Dmarg: Feature Highlights (PDF)
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/resources/Eyedra_UserGuide.pdf"
                target="_blank"
                style={{ color: "#0070f3" }}
              >
                Eyedra User Guide (PDF)
              </a>
            </li>
          </ul>
        </section>

        {/* Useful Links Section */}
        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Useful Links</h2>
          <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="https://skoegle.blogspot.com/?m=1"
                target="_blank"
                style={{ color: "#0070f3" }}
              >
                Visit our Blog
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/support"
                style={{ color: "#0070f3" }}
              >
                Support Center
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/contact"
                style={{ color: "#0070f3" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
