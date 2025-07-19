import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function App() {
  const projects = [
    {
      title: 'IoT Technology',
      description:
        'Empower your business with SKOEGLE’s IoT platform that connects devices, automates environments, and delivers actionable insights in real time.',
      image: 'https://yrldiyjabkjrbvuwpahv.supabase.co/storage/v1/object/public/skoegleimages//iot.jpg',
    },
    {
      title: 'Tracking Technology',
      description:
        'Streamline operations with smart GPS and IoT tracking solutions designed to provide end-to-end visibility and control across your entire asset network.',
      image: 'https://yrldiyjabkjrbvuwpahv.supabase.co/storage/v1/object/public/skoegleimages//image1.jpg',
    },
    {
      title: 'Smart Automation',
      description:
        'Upgrade your lifestyle with intelligent automation that controls lights, appliances, and security remotely for enhanced comfort and efficiency.',
      image: 'https://yrldiyjabkjrbvuwpahv.supabase.co/storage/v1/object/public/skoegleimages//image3.jpg',
    },
    {
      title: 'Industrial IoT Solutions',
      description:
        'Drive industrial performance with real-time monitoring, predictive maintenance, and smart analytics using SKOEGLE’s IIoT-driven infrastructure.',
      image: 'https://yrldiyjabkjrbvuwpahv.supabase.co/storage/v1/object/public/skoegleimages//image6.jpg',
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
        minHeight: '100vh',
        py: 8,
        px: 2,
      }}
    >

      {/* Subheading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#000',
          textAlign: 'center',
        }}
      >
        Take A Look At Our{' '}
        <Box component="span" sx={{ color: '#0099cc' }}>
          Completed Projects
        </Box>
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: '#555',
          maxWidth: 600,
          mx: 'auto',
          mb: 6,
          textAlign: 'center',
        }}
      >
        Explore how we leverage modern IoT technologies to solve real-world
        problems with smart solutions.
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} md={5.5} key={idx}>
            <Card
              sx={{
                bgcolor: '#f9f9f9',
                borderRadius: 3,
                overflow: 'hidden',
                color: '#000',
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{ height: 300, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Orbitron, sans-serif',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography sx={{ color: '#555', mt: 1 }}>
                  {project.description}
                </Typography>
                {/* <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 2,
                    color: '#0099cc',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  View Details
                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Button */}
      {/* <Box textAlign="center">
        <Button
          variant="outlined"
          sx={{
            mt: 6,
            borderRadius: 10,
            borderColor: '#0099cc',
            color: '#0099cc',
            px: 4,
            py: 1,
            background: 'linear-gradient(to right, #e0f7ff, #ccf2ff)',
            '&:hover': {
              background: 'linear-gradient(to right, #ccefff, #b3ecff)',
              borderColor: '#0099cc',
            },
          }}
        >
          View All Projects
        </Button>
      </Box> */}
    </Box>
  );
}
