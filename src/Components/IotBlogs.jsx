'use client';

import React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  ButtonBase,
} from '@mui/material';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Transforming Industries And Changing Lives With AI',
    image: '/blog1.jpg',
  },
  {
    title: 'Exploring The Ethics Of AI And Robotics In Society',
    image: '/blog2.jpg',
  },
  {
    title: 'How AI Is Changing The Face Of Digital Marketing',
    image: '/blog3.jpg',
  },
];

export default function App() {
  const handleClick = (title) => {
    alert(`Clicked: ${title}`);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', color: '#000', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Latest Blog &{' '}
              <Box component="span" sx={{ color: '#2DEDF4' }}>
                Articles
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {blogPosts.map((post, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={index < 2 ? 6 : 12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    width: index < 2 ? '100%' : '50%',
                    maxWidth: 500,
                  }}
                >
                  <ButtonBase
                    onClick={() => handleClick(post.title)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      textAlign: 'left',
                      borderRadius: 2,
                      display: 'block',
                    }}
                  >
                    <Card
                      sx={{
                        bgcolor: '#fff',
                        color: 'text.primary',
                        borderRadius: 2,
                        overflow: 'hidden',
                        height: 360,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image={post.image}
                        alt={post.title}
                        sx={{ filter: 'brightness(85%)' }}
                      />
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </Typography>
                      </CardContent>
                    </Card>
                  </ButtonBase>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
