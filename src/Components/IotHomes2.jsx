'use client';

import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';

const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2
            }}
          >
            Empowering<br />
            The Future With<br />
            <Box component="span" sx={{ color: 'primary.main' }}>
              AI & Robotics
            </Box>
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            Our AI and robotics company specializes in the development of cutting-edge technology for a wide range of industries.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ px: 4 }}
              onClick={() => console.log('Explore clicked')}
            >
              Explore Now
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<PlayCircleOutline />}
              sx={{ px: 4 }}
              onClick={() => console.log('Watch intro clicked')}
            >
              Watch Intro
            </Button>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            2020 +<br />
            Trusted Companies
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          {/* Replace with your image or illustration */}
          <Box sx={{ 
            bgcolor: 'grey.100', 
            height: 400, 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography color="text.secondary">AI & Robotics Illustration</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;