"use client";

import Layout from "../../Layout/Layout";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Understanding React Server Components",
      date: "2025-05-01",
      excerpt:
        "React Server Components allow you to build modern apps with better performance...",
    },
    {
      id: 2,
      title: "Getting Started with Next.js 14",
      date: "2025-04-20",
      excerpt:
        "Next.js 14 introduces a powerful routing and streaming model...",
    },
  ];

  return (
    <Layout>
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Blog</h1>
        <p>
          Explore insights, tutorials, and updates from our team. Stay ahead with the latest in
          tech and product development.
        </p>

        <div style={{ marginTop: "2rem" }}>
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{post.title}</h2>
              <p style={{ color: "#666", fontSize: "0.9rem" }}>
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p style={{ marginTop: "0.5rem" }}>{post.excerpt}</p>
              <a href={`/blog/${post.id}`} style={{ color: "#0070f3", marginTop: "0.5rem", display: "inline-block" }}>
                Read more →
              </a>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}
