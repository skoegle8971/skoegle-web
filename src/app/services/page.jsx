"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
} from "@mui/material";
import Layout from "../../Components/Layout/Layout";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const services = [
  {
    title: "Automotive IoT Solutions",
    description: `Enhance your vehicle ecosystem with our state-of-the-art IoT solutions designed for the automotive industry. Our technology empowers manufacturers and service providers with real-time diagnostics, predictive maintenance, and seamless vehicle-to-infrastructure communication.`,
    icon: "🚗",
    color: "#4e79a7",
  },
  {
    title: "Healthcare IoT Applications",
    description: `Revolutionize patient care with our comprehensive IoT solutions for healthcare. Our systems enable continuous patient monitoring, remote diagnostics, and efficient medical device integration. Enhance patient safety and streamline clinical workflows.`,
    icon: "🏥",
    color: "#e15759",
  },
  {
    title: "Security & Surveillance",
    description: `Protect your assets with Skoegle's IoT-driven security solutions. Our integrated surveillance systems offer advanced threat detection, real-time alerts, and automated incident response. Monitor your premises from anywhere.`,
    icon: "🔒",
    color: "#76b7b2",
  },
  {
    title: "Software Integration & IoT Connectivity",
    description: `Unlock the true potential of your IoT devices with seamless software integration. Skoegle specializes in connecting IoT sensors, devices, and platforms with your existing enterprise systems.`,
    icon: "🔌",
    color: "#f28e2b",
  },
];

// Utility functions for color manipulation
function hexToRgba(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function darkenColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, (num >> 16) - amt);
  const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
  const B = Math.max(0, (num & 0x0000FF) - amt);
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

const GradientCard = styled(Card)(({ theme, color }) => ({
  background: `linear-gradient(135deg, ${color} 0%, ${darkenColor(color, 20)} 100%)`,
  color: "#fff",
  borderRadius: "16px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 16px 32px ${hexToRgba(color, 0.3)}`,
  },
}));

export default function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "#040430",
          color: "#FFFFFF",
          py: 8,
          backgroundImage: "radial-gradient(circle at 75% 25%, rgba(30, 60, 150, 0.8) 0%, #040430 60%)",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          {/* Animated Page Heading */}
          <Fade in timeout={800}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #FFFFFF, #C0C0C0)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 2px 10px rgba(255,255,255,0.2)",
                  pt: 4,
                }}
              >
                Our IoT-Driven Services
              </Typography>
              <Box
                sx={{
                  width: "100px",
                  height: "4px",
                  background: "linear-gradient(90deg, #4e79a7, #e15759, #76b7b2, #f28e2b)",
                  margin: "0 auto",
                  borderRadius: "2px",
                  mb: 3,
                }}
              />
            </Box>
          </Fade>

          {/* Introduction */}
          <Zoom in timeout={1000}>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              align="center"
              sx={{
                maxWidth: "900px",
                mx: "auto",
                mb: 8,
                lineHeight: 1.8,
                color: "#E0E0E0",
                fontWeight: 300,
                fontSize: isMobile ? "1rem" : "1.2rem",
              }}
            >
              At Skoegle, we harness the power of the Internet of Things (IoT) to
              bring intelligence and connectivity to industries that demand
              innovation, efficiency, and reliability. Our services bridge the
              gap between the physical and digital worlds, enabling smarter
              operations and enhanced decision-making.
            </Typography>
          </Zoom>

          {/* Service Cards */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GradientCard color={service.color} elevation={8}>
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box
                        sx={{
                          fontSize: "3rem",
                          mb: 2,
                          textAlign: "center",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                          mb: 3,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.8,
                          textAlign: "center",
                          fontWeight: 300,
                          fontSize: "1.1rem",
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Box sx={{ textAlign: "center", mt: 3 }}>
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#fff",
                            borderColor: "#fff",
                            "&:hover": {
                              backgroundColor: hexToRgba("#fff", 0.1),
                              borderColor: "#fff",
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </GradientCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box
              sx={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(10px)",
                color: "#FFFFFF",
                py: 6,
                px: 4,
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                textAlign: "center",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h4"}
                gutterBottom
                sx={{ fontWeight: "bold", mb: 3 }}
              >
                Ready to Transform Your Industry with IoT?
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                sx={{
                  maxWidth: "700px",
                  mx: "auto",
                  mb: 4,
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Let's discuss how Skoegle can empower your business with
                cutting-edge IoT solutions. Contact us today to start building a
                smarter, more connected future.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(90deg, #4e79a7, #e15759)",
                  color: "#FFFFFF",
                  px: 6,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: "50px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #3a5a80, #c0392b)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Layout>
  );
}