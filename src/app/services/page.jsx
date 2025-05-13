"use client";
import Layout from "../../Layout/Layout";

export default function Services() {
  return (
    <Layout>
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="mb-6 text-gray-600">
        We offer a variety of professional services to meet your needs. 
      </p>
      <ul className="space-y-4">
        <li className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Web Development</h2>
          <p>Custom websites and web applications built to scale.</p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Mobile App Development</h2>
          <p>iOS and Android apps tailored to your business goals.</p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">UI/UX Design</h2>
          <p>Modern, user-friendly design services to enhance usability.</p>
        </li>
      </ul>
    </main>
    </Layout>
  );
}
