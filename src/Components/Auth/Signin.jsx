"use client";

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { Box, CircularProgress, Typography, Button } from "@mui/material";

function SignInInner() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") || "/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      {loading ? (
        <CircularProgress sx={{ color: "#0070f3" }} />
      ) : (
        <>
          <SignIn
            routing="hash"
            redirectUrl={redirectUrl}
            appearance={{
              elements: {
                footer: { display: "none" },
              },
            }}
          />
          <Typography variant="body2" sx={{ marginTop: "1rem" }}>
            Don’t have an account?{" "}
            <Link href="/auth/signup" passHref legacyBehavior>
              <Button variant="text" sx={{ textTransform: "none", padding: 0, color: "#0070f3" }}>
                Sign up
              </Button>
            </Link>
          </Typography>
        </>
      )}
    </Box>
  );
}

export default function Signin() {
  return (
    <Suspense fallback={<Box sx={{ textAlign: "center", mt: 10 }}><CircularProgress /></Box>}>
      <SignInInner />
    </Suspense>
  );
}
