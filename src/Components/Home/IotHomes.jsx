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
  VolumeUp,
  GpsFixed as GpsFixedIcon,
  Cloud as CloudIcon,
  Map as MapIcon,
  DirectionsCar as DirectionsCarIcon
} from '@mui/icons-material';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';


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
      title: "SKOEGLE ID Card Tracker",
      description: "Stay one step ahead with our advanced ID Card Tracking solution. Whether for schools, offices, or industrial premises, our tracker ensures every movement is monitored and secured.",
      category: "gps",
      icon: <GpsFixedIcon />,
      image: "/id-card holder-ap.jpg",
      link: "/pages/products/view/cmttlxuz"
    },
    {
      title: "SKOEGLE Pet Tracker",
      description: "Keep your furry friends safe with our smart Pet Tracking solution. Whether at home or outdoors, monitor their location in real-time and receive instant alerts for unexpected movement or boundary breaches.",
      category: "cloud",
      icon: <CloudIcon />,
      image: "/products/pettracker/Blue.jpg",
      link: "/pages/products/view/PRDssDS001"
    },
    {
      title: "SKOEGLE Shoe Tracker",
      description: "Step into the future with our smart Shoe Tracker — designed to ensure safety, activity tracking, and peace of mind for people of all ages, with real-time location updates and movement insights.",
      category: "geo-fencing",
      icon: <MapIcon />,
      image: "/kids-shoe-ap.jpg",
      link: "/pages/products/view/9iclen0u"
    },
    {
      title: "SKOEGLE Vehicle Tracker",
      description: "Empower your drive with smart vehicle tracking. Whether for personal use or fleet management, our Vehicle Tracker ensures safety, real-time monitoring, and complete control — all from your fingertips.",
      category: "gps",
      icon: <DirectionsCarIcon />,
      image: "/products/vehicletracker/Black.jpg",
      link: "/pages/products/view/0f5msiw6"
    }
  ];

  const stats = [
    { value: "Upto 40%", label: "Energy Efficiency Boost with SKOEGLE IoT" },
    { value: "24/7", label: "Real-Time GPS & Security Oversight" },
    { value: "1000+", label: "Cloud-Connected IoT Deployments" }
  ];

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        pt: 10,
        pb: 12,
        transition: 'opacity 0.6s ease',
        opacity: isVisible ? 1 : 0
      }}
    >
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
              Smart Living with Skoegle IoT            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
              Transforming Ideas Into Reality,

              In a world driven by technology, Skoegle is your powerhouse of innovation – crafting intelligent, scalable, and game-changing solutions across every vertical.

              We’re not just building products – we’re shaping the future.

              Welcome to the future of technology.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={Link}
                href="/pages/products"
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
                component={Link}
                href="/support"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  borderWidth: 2,
                }}
              >
                Book Demo
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
                boxShadow: `0 20px 40px rgba(0, 78, 146, 0.2)`
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
                  height: '100%'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  display: 'flex',
                  gap: 1
                }}
              >
                <IconButton
                  onClick={togglePlayback}
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }
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
                      backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }
                  }}
                >
                  {isMuted ? <VolumeOff /> : <VolumeUp />}
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Stats Bar */}
        <Box
          sx={{
            bgcolor: theme.palette.primary.dark,
            color: 'white',
            borderRadius: 3,
            py: 4,
            mb: 8,
            boxShadow: theme.shadows[4]
          }}
        >
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
          <Typography
            variant="subtitle2"
            sx={{
              mt: 2,
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            Powering industries with intelligent automation, secure GPS, and scalable IoT infrastructure for a truly connected future.          </Typography>
        </Box>

        {/* Solutions Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}
          >
            Unlock Smart Control with GPS, 
            <Box component="span" sx={{ color: '#0099cc' }}>
            Geofencing & Cloud IoT by SKOEGLE</Box>
          </Typography>

          <Grid container spacing={4}>
            {iotSolutions
              .filter(
                (sol) => activeTab === 'all' || sol.category === activeTab
              )
              .map((solution, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300" // ⬅️ Increased height
                      image={solution.image}
                      alt={solution.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                          color: theme.palette.primary.main
                        }}
                      >
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
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {solution.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, textAlign: 'right' }}>
                      <Link href={solution?.link}>
                        <IconButton aria-label="Learn more" color="primary">
                          <ArrowForward />
                        </IconButton>
                      </Link>

                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Integration Section */}
        <Box
          sx={{
            bgcolor: 'rgba(0, 78, 146, 0.1)',
            borderRadius: 4,
            p: 6,
            mb: 8
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}
          >
            Empowering Industries with <br />
            <Box component="span" sx={{ color: '#0099cc' }}>
            SKOEGLE’s IoT & Cloud Synergy    </Box>      
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            SKOEGLE’s IoT ecosystem delivers predictive automation, real-time GPS, smart geofencing,
            and scalable cloud-native performance — optimized for both home and industrial use.


          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: theme.shadows[2],
                  height: '100%'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  Key Integrations:
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li>
                    <Typography>Live GPS tracking with real-time accuracy

                    </Typography>
                  </li>
                  <li>
                    <Typography>Intelligent geofencing and automated alerts</Typography>
                  </li>
                  <li>
                    <Typography>Effortless cloud API connectivity</Typography>
                  </li>
                  <li>
                    <Typography>Robust edge-to-cloud server infrastructure</Typography>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: theme.shadows[4]
                }}
              >
                <img
                  src="/image5.jpg"
                  alt="SKOEGLE IoT Integration"
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
      </Container>
    </Box>
  );
}
