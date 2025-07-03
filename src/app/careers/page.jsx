"use client";

import { useState } from "react";
import axios from "axios";
import Layout from "@/Layout/Layout";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import EmailIcon from "@mui/icons-material/Email";

export default function Careers() {
  const [open, setOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [loading, setLoading] = useState(false);

  const positions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "Build intuitive user interfaces and work closely with design and product teams.",
    },
    {
      title: "Backend Engineer",
      location: "On-site, Bangalore",
      description:
        "Develop robust APIs, optimize performance, and collaborate with cross-functional teams.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description:
        "Design engaging user experiences and contribute to the visual identity of our products.",
    },
  ];

  const perks = [
    "Flexible work arrangements",
    "Learning and development opportunities",
    "Collaborative and inclusive team culture",
    "Health and wellness programs",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      resume: formData.get("resume"),
      internshipExp: formData.get("internshipExp"),
      fullTimeExp: formData.get("fullTimeExp"),
      coverLetter: formData.get("coverLetter"),
    };

    const hrText = `
New Job Application Received!

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Position: ${data.position}
Resume Link: ${data.resume}
Internship Experience: ${data.internshipExp}
Full-Time Experience: ${data.fullTimeExp}
Cover Letter: ${data.coverLetter}
    `;

    const userText = `
Hi ${data.name},

Thank you for applying for the ${data.position} role at SKOEGLE.
Our HR team has received your application and will get in touch soon.

Here’s a copy of your submission:
Resume Link: ${data.resume}
Cover Letter: ${data.coverLetter}

Best regards,
Team SKOEGLE
    `;

    try {
      // Send to HR
      await axios.post("/api/sendemail/v1", {
        to: ["divya@hr.skoegle.com", "nethra@hr.skoegle.com","admin@skoegle.com"],
        subject: `New Application for ${data.position}`,
        text: hrText,
      });

      // Send to Candidate
      await axios.post("/api/sendemail/v2", {
        to: data.email,
        subject: `Your Application to SKOEGLE – ${data.position}`,
        text: userText,
      });

      alert("Application submitted successfully!");
      e.target.reset();
      setOpen(false);
    } catch (err) {
      alert("Error sending application. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #4a148c,rgb(10, 17, 138))",
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          <br />
          Careers at SKOEGLE
        </Typography>
        <Typography variant="h6" maxWidth="600px" mx="auto">
          Join us in building innovative solutions that shape the future of
          technology. Let’s make an impact together.
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1000px", mx: "auto" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color="primary"
          mt={4}
        >
          Open Positions
        </Typography>

        <Grid container spacing={3}>
          {positions.map((position, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={4} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    <WorkOutlineIcon
                      sx={{ verticalAlign: "middle", mr: 1 }}
                      color="primary"
                    />
                    {position.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    <LocationOnIcon
                      sx={{ verticalAlign: "middle", mr: 1 }}
                      fontSize="small"
                    />
                    {position.location}
                  </Typography>
                  <Typography variant="body2">
                    {position.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                      setSelectedPosition(position.title);
                      setOpen(true);
                    }}
                  >
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Perks */}
        <Box mt={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why SKOEGLE?
          </Typography>
          <List>
            {perks.map((perk, index) => (
              <ListItem key={index}>
                <StarIcon color="secondary" sx={{ mr: 1 }} />
                <ListItemText primary={perk} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Contact */}
        <Paper elevation={3} sx={{ p: 4, mt: 6, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Ready to Join Us?
          </Typography>
          <Typography variant="body1" mb={2}>
            We’re excited to hear from you! Send your resume and a brief cover
            letter to:
          </Typography>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            component="a"
            href="mailto:divya@hr.skoegle.com"
          >
            divya@hr.skoegle.com
          </Button>
        </Paper>
      </Box>

      {/* Application Form Dialog */}
      <Dialog open={open} onClose={() => !loading && setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Apply for {selectedPosition}</DialogTitle>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField name="name" label="Full Name" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="email" label="Email" type="email" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="phone" label="Phone Number" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="position"
                  label="Position"
                  value={selectedPosition}
                  fullWidth
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name="resume" label="Resume Link" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="internshipExp" label="Internship Exp (months)" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="fullTimeExp" label="Full-Time Exp (months)" required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="coverLetter"
                  label="Cover Letter"
                  multiline
                  rows={4}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Layout>
  );
}
