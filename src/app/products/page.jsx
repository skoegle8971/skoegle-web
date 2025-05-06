"use client";

import Layout from "../../Layout/Layout";
export default function Products() {
    return (
        <Layout>
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Products</h1>
        <p>
          Welcome to our Products page. Here you'll find a wide selection of high-quality items
          tailored to meet your needs.
        </p>
  
        <ul style={{ marginTop: "1.5rem" }}>
          <li>Product A – Affordable and reliable</li>
          <li>Product B – Premium performance</li>
          <li>Product C – Customer favorite</li>
        </ul>
      </main>
      </Layout>
    );
  }
  