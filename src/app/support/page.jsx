"use client";
import Layout from "../../Layout/Layout";
import { Box, Typography, TextField, Button, Paper, Alert } from "@mui/material";
import { useState } from "react";

export default function Support() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.subject || !form.message) {
      setStatus({ success: false, message: "Please fill in all fields." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setForm({ email: "", subject: "", message: "" });
      } else {
        setStatus({ success: false, message: data.message || "An error occurred." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: "An error occurred. Please try again later." });
    }
  };

  return (
    <Layout>
      <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "800px", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          <br />
          Support Center
        </Typography>

        <Typography variant="body1" mb={4}>
          We're here to help! Fill out the form below and we'll get back to you as soon as possible.
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              label="Your Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>

          {status && (
            <Alert
              severity={status.success ? "success" : "error"}
              sx={{ mt: 3 }}
            >
              {status.message}
            </Alert>
          )}
        </Paper>
      </Box>
    </Layout>
  );
}
