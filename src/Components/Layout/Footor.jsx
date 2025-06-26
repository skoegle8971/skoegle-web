import React from "react";
import NextLink from "next/link";
import {
  Box,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  Container,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: LinkedInIcon,
      url: "https://in.linkedin.com/company/skoegle-technologies-pvt-ltd",
      label: "LinkedIn",
      hoverColor: "#0077B5",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/skoegledotin?igshE",
      label: "Instagram",
      hoverColor: "#E1306C",
    },
    {
      icon: FacebookIcon,
      url: "https://www.facebook.com/share/FaqX1J4icD43EUNx/?mibextid",
      label: "Facebook",
      hoverColor: "#1877F2",
    },
    {
      icon: YouTubeIcon,
      url: "https://www.youtube.com/channel/UCdAF2lce5VtTXxdq6ZPHIZw",
      label: "YouTube",
      hoverColor: "#FF0000",
    },
    {
      icon: LanguageIcon,
      url: "https://skoegle.in",
      label: "Website",
      hoverColor: "#0A66C2",
    },
  ];

  const ourBrands = [
    { name: "Vmarg", url: "https://vmarg.skoegle.com" },
    { name: "Dmarg", url: "https://geocam.skoegle.com" },
  ];

  const mainLinks = [
    { label: "About us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Privacy Policy", href: "/privacypolicy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Contact Us", href: "/contact" },
  ];

  const additionalLinks = [
    { label: "Sign In", href: "/signin" },
    { label: "Sign up", href: "/signup" },
    { label: "Careers", href: "/careers" },
    { label: "Our Team", href: "/gallery" },
    { label: "Our Innovations", href: "https://skoegle.blogspot.com/?m=1", external: true},
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        color: "#000",
        pt: 6,
        pb: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 - Company Info */}
          <Grid item xs={12} md={4}>
            <Box mb={3}>
              <img src="/logo.png" alt="Skoegle Logo" style={{ height: 50 }} />
            </Box>
            <Typography variant="body2" fontWeight="bold" gutterBottom>
              Contact Information
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <Box display="flex" alignItems="flex-start">
                <LocationOnIcon sx={{ mr: 1, fontSize: 20, mt: 0.5 }} />
                <Typography variant="body2">
                  52/2, 2nd Main Rd, Vyalikaval, Lower Palace Orchards, Malleshwaram
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  <MuiLink href="tel:08031211083" color="inherit" underline="hover">
                    080-31211083
                  </MuiLink>
                  {" / "}
                  <MuiLink href="tel:9902495354" color="inherit" underline="hover">
                    9902495354
                  </MuiLink>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <AccessTimeIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">9:00 - 6:00  Mon - Sat</Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Column 2 - Support & Sales + Our Brands */}
          <Grid item xs={12} md={3}>
            <Typography variant="body2" fontWeight="bold" mb={2}>
              Support
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">
                <MuiLink href="tel:+31205050442" color="inherit" underline="hover">
                  +91 99024 95354
                </MuiLink>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={3}>
              <EmailIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">
                <MuiLink href="mailto:info@skoegle.in" color="inherit" underline="hover">
                  info@skoegle.in
                </MuiLink>
              </Typography>
            </Box>

            <Typography variant="body2" fontWeight="bold" mb={2}>
              Sales
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">
                <MuiLink href="tel:+31205050444" color="inherit" underline="hover">
                  +91 95915 05241
                </MuiLink>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={3}>
              <EmailIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">
                <MuiLink href="mailto:gayathri@sales.skoegle.com" color="inherit" underline="hover">
                  gayathri@sales.skoegle.com
                </MuiLink>
              </Typography>
            </Box>

            <Typography variant="h6">Our Brands:</Typography>
            {ourBrands.map((brand) => (
              <MuiLink
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                variant="body2"
                sx={{ display: "block", mb: 1 }}
              >
                {brand.name}
              </MuiLink>
            ))}
          </Grid>

          {/* Column 3 - Main Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="body2" fontWeight="bold" mb={2}>
              Company
            </Typography>
            {mainLinks.map((item) => (
              <Typography key={item.label} variant="body2" mb={1.5}>
                <MuiLink
                  component={NextLink}
                  href={item.href}
                  underline="hover"
                  color="inherit"
                >
                  {item.label}
                </MuiLink>
              </Typography>
            ))}
          </Grid>

          {/* Column 4 - Additional Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="body2" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            {additionalLinks.map((item) => (
              <Typography key={item.label} variant="body2" mb={1.5}>
                <MuiLink
                  component={NextLink}
                  href={item.href}
                  underline="hover"
                  color="inherit"
                >
                  {item.label}
                </MuiLink>
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 2, height: "1px" }} />

        {/* Bottom Row */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" color="text.secondary">
            Copyright © {currentYear} SKOEGLE IOT INNOVATIONS PVT. LTD. All rights reserved.
          </Typography>

          <Box mt={{ xs: 3, md: 0 }}>
            {socialLinks.map(({ icon: Icon, url, label, hoverColor }, index) => (
              <IconButton
                key={index}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  color: "#000",
                  mx: 0.5,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: hoverColor,
                    backgroundColor: "transparent",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
