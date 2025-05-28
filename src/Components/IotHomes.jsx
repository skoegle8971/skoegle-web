// src/Components/IoTHomes.jsx
'use client';

import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia,
  Chip,
  IconButton,
  useTheme
} from '@mui/material';
import { 
  SmartToy, 
  Security, 
  EnergySavingsLeaf, 
  SettingsRemote,
  ArrowForward,
  Pause, 
  PlayArrow, 
  VolumeOff, 
  VolumeUp
} from '@mui/icons-material';
import React, { useRef, useState, useEffect } from 'react';

export default function IoTHomes() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const iotSolutions = [
    {
      title: "Smart Home Hub",
      description: "Centralized control for all your IoT devices",
      category: "control",
      icon: <SettingsRemote fontSize="large" />,
      image: "/id-card holder-ap.jpg"
    },
    {
      title: "AI Security System",
      description: "Facial recognition and anomaly detection",
      category: "security",
      icon: <Security fontSize="large" />,
      image: "/hip-hanging-ap.jpg"
    },
    {
      title: "Energy Optimizer",
      description: "Reduce consumption with smart automation",
      category: "energy",
      icon: <EnergySavingsLeaf fontSize="large" />,
      image: "/kids-shoe-ap.jpg"
    },
    {
      title: "Robotic Assistants",
      description: "Daily task automation with IBM Watson integration",
      category: "robotics",
      icon: <SmartToy fontSize="large" />,
      image: "/trekking-tracker-ap.jpg"
    }
  ];

  const stats = [
    { value: "40%", label: "Energy Savings" },
    { value: "24/7", label: "Security Monitoring" },
    { value: "1000+", label: "Device Integrations" },
  ];

  return (
    <Box sx={{ 
      bgcolor: theme.palette.background.default,
      pt: 10,
      pb: 12,
      transition: 'opacity 0.6s ease',
      opacity: isVisible ? 1 : 0
    }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Smart Living with IoT Homes
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
              Powered by SKOEGLE’s next-generation IoT and cloud solutions designed to automate and optimize your smart home.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                size="large" 
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2
                }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  borderWidth: 2
                }}
              >
                Watch Demo
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: 400,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: `0 20px 40px rgba(0, 78, 146, 0.2)`,
              }}
            >
              <video
                ref={videoRef}
                src="/skovid.mp4"
                autoPlay
                muted={isMuted}
                loop
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
              <Box sx={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', gap: 1 }}>
                <IconButton
                  onClick={togglePlayback}
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                  }}
                >
                  {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
                <IconButton
                  onClick={toggleMute}
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                  }}
                >
                  {isMuted ? <VolumeOff /> : <VolumeUp />}
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Stats Bar */}
        <Box sx={{
          bgcolor: theme.palette.primary.dark,
          color: 'white',
          borderRadius: 3,
          py: 4,
          mb: 8,
          boxShadow: theme.shadows[4]
        }}>
          <Grid container spacing={2} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography variant="subtitle2" sx={{ mt: 2, textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
            SKOEGLE brings next-gen IoT innovations powered by secure cloud computing
          </Typography>
        </Box>

        {/* Solutions Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}>
            Explore SKOEGLE’s IoT-Powered Smart Living Solutions
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1,
            mb: 6,
            flexWrap: 'wrap'
          }}>
            {['all', 'control', 'security', 'energy', 'robotics'].map((tab) => (
              <Chip
                key={tab}
                label={tab === 'all' ? 'All Solutions' : tab}
                onClick={() => setActiveTab(tab)}
                sx={{
                  px: 3,
                  py: 1,
                  textTransform: 'capitalize',
                  bgcolor: activeTab === tab ? theme.palette.primary.main : 'transparent',
                  color: activeTab === tab ? 'white' : 'text.primary',
                  border: activeTab === tab ? 'none' : `1px solid ${theme.palette.divider}`
                }}
              />
            ))}
          </Box>

          <Grid container spacing={4}>
            {iotSolutions
              .filter(sol => activeTab === 'all' || sol.category === activeTab)
              .map((solution, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease'
                  }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={solution.image}
                      alt={solution.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        color: theme.palette.primary.main
                      }}>
                        {solution.icon}
                        <Chip 
                          label={solution.category} 
                          size="small" 
                          sx={{ 
                            ml: 2,
                            textTransform: 'capitalize',
                            bgcolor: 'rgba(0, 78, 146, 0.1)'
                          }} 
                        />
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {solution.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {solution.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, textAlign: 'right' }}>
                      <IconButton aria-label="Learn more" color="primary">
                        <ArrowForward />
                      </IconButton>
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Integration Section */}
        <Box sx={{ 
          bgcolor: 'rgba(0, 78, 146, 0.1)',
          borderRadius: 4,
          p: 6,
          mb: 8
        }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
            SKOEGLE-Powered IoT and Cloud Integration
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            The SKOEGLE IoT ecosystem delivers predictive automation, advanced security,
            and scalable energy optimization through its powerful cloud-native infrastructure built for homes and industries.
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{
                bgcolor: 'background.paper',
                borderRadius: 3,
                p: 3,
                boxShadow: theme.shadows[2],
                height: '100%'
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Key Integrations:
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li><Typography>Real-time location tracking</Typography></li>
                  <li><Typography>Powered with geo fencing</Typography></li>
                  <li><Typography>Robust API integration for seamless third-party connectivity</Typography></li>
                  <li><Typography>Edge-to-cloud server architecture for scalable performance</Typography></li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                position: 'relative',
                height: 300,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: theme.shadows[4]
              }}>
                <img 
                  src="/image5.jpg" 
                  alt="AI Integration" 
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Note */}
        <Typography variant="caption" sx={{ textAlign: 'center', display: 'block', mt: 4, color: 'text.secondary' }}>
          © 2025 SKOEGLE — Empowering smart living through IoT and cloud technologies.
        </Typography>
      </Container>
    </Box>
  );
}
