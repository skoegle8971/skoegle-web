"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";

// Dummy search data
const mockData = [
  { id: 1, title: "Product A", description: "Details about Product A" },
  { id: 2, title: "Service B", description: "Info about Service B" },
  { id: 3, title: "Resource C", description: "Guide for Resource C" },
  { id: 4, title: "Blog Post D", description: "Blog entry on D topic" },
  { id: 5, title: "Tool E", description: "Tool E for developers" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query.toLowerCase();
    const filtered = mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
    setResults(filtered);
    setLoading(false);
  }, [query]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Search Results for: <strong>{query}</strong>
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : results.length > 0 ? (
        <List>
          {results.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={item.title}
                secondary={item.description}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No results found.</Typography>
      )}
    </Box>
  );
}
