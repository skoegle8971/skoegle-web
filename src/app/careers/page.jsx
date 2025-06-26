"use client";

import Layout from "../../Components/Layout/Layout";
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
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import EmailIcon from "@mui/icons-material/Email";

export default function Careers() {
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
        {/* Open Positions */}
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
                  <Typography variant="body2">{position.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    fullWidth
                    component="a"
                    href="mailto:gayathri@sales.skoegle.com?subject=Application for "
                  >
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Perks and Benefits */}
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
    </Layout>
  );
}
