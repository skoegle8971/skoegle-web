"use client";

import { SignUp } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Box, Typography, CircularProgress } from "@mui/material";

export default function Signup() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minHeight: "30vh",
        }}
      >
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <>
            <SignUp
              routing="hash"
              appearance={{
                elements: {
                  footer: { display: "none" },
                },
              }}
            />
            <Typography variant="body2" sx={{ marginTop: "1rem" }}>
              Already have an account?{" "}
              <Link href="/auth/signin" passHref legacyBehavior>
                <a style={{ color: "#1976d2", textDecoration: "underline" }}>Sign in</a>
              </Link>
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}
