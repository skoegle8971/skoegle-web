"use client";

import Layout from "../../Components/Layout/Layout";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Divider,
  Stack,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
import axios from "axios";

export default function Contact() {
  const formRef = useRef(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const userMessage = `
Dear ${name},

Thank you for contacting Skoegle IoT Innovations Pvt. Ltd.  
We’ve received your message and will get back to you shortly.

Here’s a copy of what you sent us:

Name: ${name}  
Email: ${email}  
Phone: ${phone}  
Message:  
${message}

Best regards,  
Team Skoegle  
https://www.skoegle.com  
`;

    const internalMessage = `
Hello,

You received a new Enquiry from the website:

Name: ${name}  
Email: ${email}  
Phone: ${phone}  
Message:  
${message}

Please follow up accordingly.

- Skoegle Web Team
`;

    setLoading(true);

    try {
      // Send confirmation to user
      await axios.post("/api/sendemail/v2", {
        to: email,
        subject: "We’ve received your message | Skoegle IoT Innovations",
        text: userMessage,
      });

      // Send internal copy
      await axios.post("/api/sendemail/v1", {
        to: "gayathri@sales.skoegle.com",
        subject: `New Website Inquiry from ${name}`,
        text: internalMessage,
      });
          await axios.post("/api/sendemail/v1", {
        to: "admin@skoegle.com",
        subject: `New Website Inquiry from ${name}`,
        text: internalMessage,
      });

      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });

      form.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9", overflowX: "hidden" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            margin="10px"
            mb={2}
          >
            Sales & Support
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            fontWeight="bold"
            mb={1}
          >
            When Innovation Meets Technology!
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="text.secondary"
            mb={6}
          >
            Provide your details, and we'll get back to you.
          </Typography>

          <Grid container spacing={4}>
            {/* Left - Contact Info */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={1}
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  backgroundColor: "white",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Divider sx={{ my: 2 }} />

                <Stack spacing={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <EmailIcon color="primary" />
                    <Typography>
                      <a
                        href="mailto:gayathri@sales.skoegle.com"
                        style={{ color: "#1976d2", textDecoration: "none" }}
                      >
                        gayathri@sales.skoegle.com
                      </a>
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <PhoneIcon color="primary" />
                    <Typography>
                      <a
                        href="tel:+919591505241"
                        style={{ color: "#1976d2", textDecoration: "none" }}
                      >
                        +91 95915 05241
                      </a>
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <LocationOnIcon color="primary" sx={{ mt: "2px" }} />
                    <Typography>
                      52/2, 2nd Main Rd, Vyalikaval,<br />
                      Lower Palace Orchards, Malleshwaram,<br />
                      Bangalore, India
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            {/* Right - Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Send us a message
                </Typography>

                <Box
                  component="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    flexGrow: 1,
                  }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    name="email"
                  />
                  <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    name="phone"
                    type="tel"
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    name="message"
                    inputProps={{ maxLength: 2000 }}
                    helperText="Max 2000 characters"
                    sx={{
                      "& .MuiInputBase-root": {
                        minHeight: "120px",
                      },
                    }}
                  />

                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<SendIcon />}
                      size="large"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Snackbar for alert */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Layout>
  );
}
