"use client";

import React, { useState } from "react";
import Layout from "../../Layout/Layout";

const leadershipData = [
  {
    id: 1,
    name: "Swarup Nag",
    position: "Founder & CEO",
    img: "", // blank image
  },
  {
    id: 2,
    name: "Sheetal M",
    position: "CO-Founder, COO",
    img: "", // blank image
  },
];

const teamData = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name: `Team Member ${i + 1}`,
  role: "Role",
  img: "", // blank image
}));

// Sample journey steps
const journeySteps = [
  { year: "2015", description: "Company founded by Swarup Nag and Sheetal M." },
  { year: "2017", description: "Launched our first product with great success." },
  { year: "2019", description: "Expanded team and moved to a larger office." },
  { year: "2021", description: "Reached 100+ clients across industries." },
  { year: "2024", description: "Introduced AI-based solutions and entered new markets." },
];

export default function About() {
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  return (
    <Layout>
      <main
        style={{
          padding: "3rem 2rem",
          maxWidth: "900px",
          margin: "0 auto",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#333",
          lineHeight: 1.6,
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            fontWeight: "700",
            color: "#0d47a1",
          }}
        >
          About Us
        </h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
          At <strong>SKOEGLE</strong>, we are committed to delivering innovative, reliable, and scalable technology solutions that empower businesses to excel in a rapidly evolving digital landscape.
        </p>
        <p style={{ fontSize: "1.125rem", marginBottom: "2rem", color: "#555" }}>
          Our team is driven by a passion for innovation, customer success, and creating impactful tools that make a difference in our clients’ growth and operational efficiency.
        </p>

        {/* Company Journey Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              marginBottom: "1.25rem",
              borderBottom: "2px solid #0d47a1",
              paddingBottom: "0.5rem",
              fontWeight: "600",
            }}
          >
            Our Journey
          </h2>
          <div
            style={{
              position: "relative",
              paddingLeft: "20px",
              borderLeft: "3px solid #0d47a1",
              marginLeft: "10px",
            }}
          >
            {journeySteps.map((step, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  marginBottom: "1.5rem",
                  paddingLeft: "1rem",
                  transition: "transform 0.3s ease",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-13px",
                    top: "5px",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#0d47a1",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 3px #fff",
                  }}
                />
                <h3
                  style={{
                    margin: "0 0 0.25rem",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#0d47a1",
                  }}
                >
                  {step.year}
                </h3>
                <p style={{ margin: 0, color: "#555" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              marginBottom: "1.25rem",
              borderBottom: "2px solid #0d47a1",
              paddingBottom: "0.5rem",
              fontWeight: "600",
            }}
          >
            Leadership
          </h2>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {leadershipData.map(({ id, name, position, img }) => (
              <div
                key={id}
                onMouseEnter={() => setHoveredLeader(id)}
                onMouseLeave={() => setHoveredLeader(null)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  flex: "1 1 300px",
                  maxWidth: "320px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  backgroundColor: "#fafafa",
                  transition: "transform 0.2s ease",
                  cursor: "default",
                  transform: hoveredLeader === id ? "scale(1.05)" : "scale(1)",
                }}
              >
                <figure style={{ margin: 0 }}>
                  <img
                    src={img}
                    alt={`Photo of ${name}, ${position}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      marginBottom: "0.75rem",
                      objectFit: "cover",
                      backgroundColor: "#ddd",
                      height: "200px", // placeholder
                    }}
                  />
                  <figcaption style={{ display: "none" }}>
                    {name} - {position}
                  </figcaption>
                </figure>
                <h3
                  style={{
                    marginBottom: "0.3rem",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#0d47a1",
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#777",
                    fontStyle: "italic",
                    marginTop: 0,
                  }}
                >
                  {position}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team Section */}
        <section>
          <h2
            style={{
              fontSize: "1.75rem",
              marginBottom: "1.25rem",
              borderBottom: "2px solid #0d47a1",
              paddingBottom: "0.5rem",
              fontWeight: "600",
            }}
          >
            Our Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {teamData.map(({ id, name, role, img }) => (
              <div
                key={id}
                onMouseEnter={() => setHoveredTeam(id)}
                onMouseLeave={() => setHoveredTeam(null)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "1rem",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
                  transition: "transform 0.15s ease",
                  cursor: "default",
                  transform: hoveredTeam === id ? "scale(1.05)" : "scale(1)",
                }}
              >
                <figure style={{ margin: 0 }}>
                  <img
                    src={img}
                    alt={`Photo of ${name}, ${role}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      marginBottom: "0.5rem",
                      objectFit: "cover",
                      backgroundColor: "#ddd",
                      height: "150px", // placeholder
                    }}
                  />
                  <figcaption style={{ display: "none" }}>
                    {name} - {role}
                  </figcaption>
                </figure>
                <h3
                  style={{
                    marginBottom: "0.25rem",
                    fontSize: "1.1rem",
                    color: "#0d47a1",
                    fontWeight: "600",
                  }}
                >
                  {name}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#666", marginTop: 0 }}>
                  {role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
