"use client";

import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const GradientText = styled('span')({
  background: 'linear-gradient(to right, #00f0ff, #00bfff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const services = [
  {
    title: 'Robotic Automation',
    image: '/blog1.jpg',
    description: 'Lorem ipsum dolor sit sedar conse adipiscing el sed do eiusmod.',
  },
  {
    title: 'Machine Learning',
    image: '/blog3.jpg',
    description: 'Lorem ipsum dolor sit sedar conse adipiscing el sed do eiusmod.',
  },
  {
    title: 'AI For Conversation',
    image: '/blog2.jpg',
    description: 'Lorem ipsum dolor sit sedar conse adipiscing el sed do eiusmod.',
  },
  {
    title: 'Internet Of Things',
    image: '/image.png',
    description: 'Lorem ipsum dolor sit sedar conse adipiscing el sed do eiusmod.',
  },
];

export default function IotServices() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0,0,0,0.08)', // Changed from #020d17 to gray
        minHeight: '80vh',
        px: 6,
        py: 8,
        color: '#fff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
      }}
    >
      <Box flex={1}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontFamily: 'Orbitron, sans-serif',
          }}
        >
          Explore Best <GradientText>Iot Services</GradientText>
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#bbb',
            mb: 4,
            maxWidth: 100,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: '#00e6ff',
            borderColor: '#rgba(0,0,0,0.08)',
            borderRadius: '25px',
            px: 4,
            py: 1,
            textTransform: 'none',
            fontWeight: 100,
            '&:hover': {
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              color: '#fff',
              borderColor: 'transparent',
            },
          }}
        >
          All Services
        </Button>
      </Box>

      <Box flex={2}>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  backgroundColor: '#rgba(0,0,0,0.08)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box sx={{ position: 'relative', height: 220 }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover', opacity: 0.85 }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      color: '#fff',
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#9eabb8' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}