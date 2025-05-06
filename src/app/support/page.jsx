"use client";
import Layout from "../../Layout/Layout";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function Support() {
  return (
    <Layout>
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "800px", mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Support Center
      </Typography>

      <Typography variant="body1" mb={4}>
        We're here to help! Reach out to us or check our frequently asked questions below.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>

        <TextField label="Your Email" fullWidth margin="normal" />
        <TextField label="Subject" fullWidth margin="normal" />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />

        <Button variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Paper>

      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography fontWeight={500}>Q: How can I reset my password?</Typography>
        <Typography mb={2}>
          A: Click on "Forgot password?" at the login screen and follow the instructions.
        </Typography>

        <Typography fontWeight={500}>Q: Where can I find my order history?</Typography>
        <Typography mb={2}>
          A: You can view your orders by logging into your account and going to the "Orders" section.
        </Typography>
      </Paper>
    </Box>
    </Layout>
  );
}
