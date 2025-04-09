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
        'Explore how IoT connects smart devices to automate environments and deliver real-time insights.',
      image: '/iot.jpg',
    },
    {
      title: 'Tracking Technology',
      description:
        'Discover how GPS and IoT enable efficient asset and vehicle tracking across industries.',
      image: '/images.jpg',
    },
    {
      title: 'Smart Home Automation',
      description:
        'Control lights, appliances, and security systems remotely using smart IoT solutions.',
      image: '/images.jpg',
    },
    {
      title: 'Industrial IoT Solutions',
      description:
        'Monitor and manage machinery, energy consumption, and predictive maintenance with IIoT.',
      image: '/iot.jpg',
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
      {/* Header */}
      <Typography
        variant="h3"
        sx={{
          color: '#000',
          textAlign: 'center',
          mb: 4,
          fontFamily: 'Orbitron, sans-serif',
        }}
      >
        Iot-Projects
      </Typography>

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
                <Button
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
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Button */}
      <Box textAlign="center">
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
      </Box>
    </Box>
  );
}
