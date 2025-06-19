'use client';

import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // App Router version

const GradientText = styled('span')({
  background: 'linear-gradient(to right, #001f3f, #0074D9)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const services = [
  {
    title: 'Robotic Automation',
    image: '/blog1.jpg',
    description: 'Streamline operations with intelligent robotic systems that boost efficiency, reduce manual errors, and scale seamlessly.',
  },
  {
    title: 'Machine Learning',
    image: '/blog3.jpg',
    description: 'Unlock insights and drive smarter decisions with ML-powered data models that evolve with your business.',
  },
  {
    title: 'AI For Conversation',
    image: '/blog2.jpg',
    description: 'Deliver human-like customer experiences with advanced conversational AI that powers chatbots, voice assistants, and more.',
  },
  {
    title: 'Internet Of Things',
    image: '/image.png',
    description: 'Connect, monitor, and control devices in real time with IoT solutions that enhance automation and predictive capabilities.',
  },
];

export default function IotServices() {
  const router = useRouter(); // for redirection

  const handleRedirect = () => {
    router.push('/services'); // Redirect to the "services" route
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '80vh',
        px: { xs: 3, md: 6 },
        py: 8,
        color: '#000',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 6,
          fontFamily: 'Orbitron, sans-serif',
          textAlign: 'center',
        }}
      >
        Explore Best <GradientText>Iot Services</GradientText>
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                backgroundColor: '#fff',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Box sx={{ position: 'relative', height: 260 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.9 }}
                />
              </Box>
              <CardContent sx={{ px: 3, py: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#000',
                    fontSize: '1.1rem',
                    mb: 1,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Button
          variant="outlined"
          onClick={handleRedirect}
          sx={{
            color: '#00bfff',
            borderColor: '#00bfff',
            backgroundColor: '#e0f7ff',
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: '13px',
            '&:hover': {
              backgroundColor: '#cceeff',
              borderColor: '#00bfff',
            },
          }}
        >
          VIEW ALL SERVICES
        </Button>
      </Box>
    </Box>
  );
}
