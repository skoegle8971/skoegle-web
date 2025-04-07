"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  const socialLinks = [
    {
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/company/skoegle-technologies-pvt-ltd/",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/skoegledotin?igshE",
    },
    {
      icon: FacebookIcon,
      url: "https://www.facebook.com/share/FaqX1J4icD43EUNx/?mibextid",
    },
    {
      icon: YouTubeIcon,
      url: "https://www.youtube.com/channel/UCdAF2lce5VtTXxdq6ZPHIZw ",
    },
    {
      icon: LanguageIcon,
      url: "https://www.yourwebsite.com", // You can replace this with your app store link
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        color: "#000",
        px: { xs: 4, md: 10 },
        py: 6,
        mt: 8,
      }}
    >
      <Grid container spacing={4}>
        {/* Column 1 */}
        <Grid item xs={12} md={4}>
          <Typography variant="body2" fontWeight="bold" mb={2}>
            Our Brands:
          </Typography>
          {["Skoegle Engineering", "Skoegle Invent", "Sogeti", "Frog"].map(
            (brand) => (
              <Typography key={brand} variant="body2" mb={1}>
                {brand}
              </Typography>
            )
          )}
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={6} md={4}>
          {[
            "Insights",
            "Industries",
            "Services",
            "Careers",
            "News",
            "About us",
            "Contact us",
            "Investors",
          ].map((text) => (
            <Typography key={text} variant="body2" mb={1}>
              <MuiLink href="#" underline="hover" color="inherit">
                {text}
              </MuiLink>
            </Typography>
          ))}
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={6} md={4}>
          {[
            "Accessibility",
            "Cookie policy",
            "Cookie settings",
            "Privacy notice",
            "Security vulnerability notification",
            "SpeakUp",
            "Terms of use",
            "Fraud alert",
          ].map((text) => (
            <Typography key={text} variant="body2" mb={1}>
              <MuiLink href="#" underline="hover" color="inherit">
                {text}
              </MuiLink>
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Bottom Row */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="body2" color="text.secondary">
          Copyrights © SKOEGLE IOT INNOVATIONS PVT. LTD
        </Typography>
        <Box mt={{ xs: 2, md: 0 }}>
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <IconButton
              key={index}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: "1px solid #000",
                borderRadius: "50%",
                mx: 0.5,
                color: "#000",
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
