
import React from "react";
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
      url: "https://www.linkedin.com/company/skoegle-technologies-pvt-ltd/",
      label: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/skoegledotin?igshE",
      label: "Instagram",
    },
    {
      icon: FacebookIcon,
      url: "https://www.facebook.com/share/FaqX1J4icD43EUNx/?mibextid",
      label: "Facebook",
    },
    {
      icon: YouTubeIcon,
      url: "https://www.youtube.com/channel/UCdAF2lce5VtTXxdq6ZPHIZw",
      label: "YouTube",
    },
    {
      icon: LanguageIcon,
      url: "https://skoegle.in",
      label: "Website",
    },
  ];

  const ourBrands = ["Vmarg", "Dmarg"];
  
  const mainLinks = [
    "About us",
    "Our Products",
    "Privacy Policy",
    "Terms and Conditions",
    "Contact Us",
  ];
  
  const additionalLinks = [
    "Sign In",
    "Sign up",
    "Blogs",
    "News",
    "Careers",
    "Our Team",
    "Our Innovations"
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
                <Typography variant="body2">
                  9:00 - 6:00  Mon - Sat
                </Typography>
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
            
            <Typography variant="body2" fontWeight="bold" mb={2}>
              Our Brands:
            </Typography>
            {ourBrands.map((brand) => (
              <Typography key={brand} variant="body2" mb={1}>
                {brand}
              </Typography>
            ))}
          </Grid>

          {/* Column 3 - Main Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="body2" fontWeight="bold" mb={2}>
              Company
            </Typography>
            {mainLinks.map((text) => (
              <Typography key={text} variant="body2" mb={1.5}>
                <MuiLink href="#" underline="hover" color="inherit">
                  {text}
                </MuiLink>
              </Typography>
            ))}
          </Grid>

          {/* Column 4 - Additional Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="body2" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            {additionalLinks.map((text) => (
              <Typography key={text} variant="body2" mb={1.5}>
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
          <Box>
            <Typography variant="body2" color="text.secondary">
              Copyright © {currentYear} SKOEGLE IOT INNOVATIONS PVT. LTD. All rights reserved.
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
         
            </Typography>
          </Box>
         
          <Box mt={{ xs: 3, md: 0 }}>
            {socialLinks.map(({ icon: Icon, url, label }, index) => (
              <IconButton
                key={index}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  border: "1px solid #000",
                  borderRadius: "50%",
                  mx: 0.5,
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.08)",
                  }
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