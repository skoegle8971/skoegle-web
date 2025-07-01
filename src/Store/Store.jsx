"use client"; // If you're using Next.js 13+ App Router

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load from localStorage on initial mount
  useEffect(() => {
    const storedProducts = localStorage.getItem("mb64-products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
      setLoading(false); // optional: assume data is already fetched
    } else {
      setLoading(false); // still need to mark loading as false
    }
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("mb64-products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

// Optional alias for easier usage
export const useProductContext = () => useContext(ProductContext);