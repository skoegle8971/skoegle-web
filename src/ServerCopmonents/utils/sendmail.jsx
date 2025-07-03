'use client';

import { useState } from 'react';
import Head from 'next/head';
import Layout from "../../Components/Layout/Layout";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  Avatar,
  Grid,
  Snackbar,
  Alert,
  Paper,
  InputAdornment
} from '@mui/material';
import { Email, Send, Business, Group, Web } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import sendEmail from "@/SendMail/sendmail";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[10],
  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px) scale(1.01)',
    boxShadow: theme.shadows[10],
  },
}));

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function InvitePage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !isValidEmail(email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    setIsLoading(true);

    const subject = "Invitation to Join Skoegle IoT Innovations Platform";
    const text = `
Dear User,

You have been invited to explore the smart solutions offered by **Skoegle IoT Innovations Pvt. Ltd.** — a leading force in the rapidly evolving Internet of Things (IoT) space.

🔗 **Our Products:** https://skoegle.com/pages/products  
🌐 **Official Websites:** https://skoegle.com  
🛒 **Available On:** Flipkart: https://shorturl.at/QPP8z | IndiaMart: https://shorturl.at/CHFuu  

---

**About Us:**  
Founded in 2019, Skoegle specializes in intelligent IoT devices for logistics, fleet tracking, bike/vehicle rentals, predictive maintenance, smart energy, surveillance, and automation. With 20+ devices and a scalable platform, we empower businesses with real-time data and control.

All products include standard warranties, OTA updates, AI-powered features, and cyber-secure firmware patches.

We’d love to have you as part of our journey.

Best Regards,  
**Team Skoegle**  
support@skoegle.com  
    `;

    try {
      await sendEmail(email, subject, text, 'v1');
      setSnackbarMessage(`Invitation sent successfully to ${email}!`);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setEmail('');
    } catch (error) {
      console.error("Email send error:", error);
      setSnackbarMessage('Failed to send invitation. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Layout>
      <Head>
        <title>Join Us | Skoegle IoT Innovations PVT LTD</title>
        <meta name="description" content="Join our platform and discover amazing opportunities with Skoegle" />
      </Head>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            <br />
            Join Our Community
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Discover what makes our platform special and invite others to experience it too
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80, mb: 2 }}>
                  <Send fontSize="large" />
                </Avatar>
                <Typography variant="h5" component="h2" gutterBottom>
                  Send an Invitation
                </Typography>
                <Typography color="text.secondary" textAlign="center" mb={3}>
                  Invite friends or colleagues to join our platform and discover all the benefits we offer.
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter recipient's email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                  required
                />
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  type="submit"
                  disabled={isLoading}
                  endIcon={<Send />}
                  sx={{ py: 1.5 }}
                  aria-label="Send invitation email"
                >
                  {isLoading ? 'Sending...' : 'Send Invitation'}
                </Button>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box height="100%" display="flex" flexDirection="column">
              <Card sx={{ flex: 1 }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    About Our Company
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography paragraph>
                    Welcome to <strong>Skoegle Innovations</strong>, where innovation meets excellence. We're dedicated to
                    providing cutting-edge solutions that transform industries and improve lives.
                  </Typography>
                  <Typography paragraph>
                    Founded in 2019, we've grown from a small startup to a market
                    leader through our commitment to quality, customer satisfaction, and continuous innovation.
                  </Typography>

                  <Box mt="auto" pt={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <FeatureCard>
                          <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                              <Business color="primary" sx={{ mr: 1 }} />
                              <Typography variant="h6">Our Mission</Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              To empower businesses and individuals through innovative technology solutions.
                            </Typography>
                          </CardContent>
                        </FeatureCard>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FeatureCard>
                          <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                              <Group color="primary" sx={{ mr: 1 }} />
                              <Typography variant="h6">Our Team</Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              A diverse group of experts passionate about making a difference.
                            </Typography>
                          </CardContent>
                        </FeatureCard>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FeatureCard>
                          <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                              <Web color="primary" sx={{ mr: 1 }} />
                              <Typography variant="h6">Our Platform</Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              User-friendly, secure, and designed for optimal performance.
                            </Typography>
                          </CardContent>
                        </FeatureCard>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Layout>
  );
}
