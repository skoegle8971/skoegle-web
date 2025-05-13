"use client";

import Layout from "../../Layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below or reach us via the contact details.
        </p>

        <form style={{ marginTop: "2rem", maxWidth: "500px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: "2rem" }}>
          <p>
            📧 Email: <a href="mailto:info@skoegle.com">info@skoegle.com</a>
          </p>
          <p>
            📍 Address:  Bangalore, India
          </p>
        </div>
      </main>
    </Layout>
  );
}
