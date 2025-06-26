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
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Transforming Industries And Changing Lives With AI',
    image: '/blog1.jpg',
    description:
      'AI is revolutionizing sectors like healthcare, finance, and manufacturing by boosting productivity and personalizing user experiences.',
  },
  {
    title: 'Exploring The Ethics Of AI And Robotics In Society',
    image: '/blog4.jpg',
    description:
      "As AI grows, ethical concerns around privacy, bias, and automation's social impact are gaining critical attention.",
  },
  {
    title: 'How AI Is Changing The Face Of Digital Marketing',
    image: '/image7.jpg',
    description:
      'AI is reshaping digital marketing by enabling real-time personalization and predictive insights. It allows brands to better understand customer behavior, deliver targeted campaigns, and engage more effectively across digital channels.',
  },
];

export default function App() {
  const handleClick = (title) => {
    alert(`Clicked: ${title}`);
  };

  const handleViewAllBlogs = () => {
    window.open('https://skoegle.blogspot.com/?m=1', '_blank'); // ✅ Open in new tab
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', color: '#000', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', py: 6 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Latest Blog &{' '}
              <Box component="span" sx={{ color: '#2DEDF4' }}>
                Articles
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Stay informed with cutting-edge insights, trends, and discussions shaping the future of AI, IoT, and automation.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {blogPosts.map((post, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={index < 2 ? 6 : 12}
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
                  style={{ width: '100%' }}
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
                          {post.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ButtonBase>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* View All Blogs Button */}
          <Box textAlign="center" mt={6}>
            <Button
              variant="outlined"
              onClick={handleViewAllBlogs}
              sx={{
                borderRadius: '999px',
                borderColor: '#00CFFF',
                color: '#00CFFF',
                backgroundColor: 'rgba(0, 207, 255, 0.1)',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                letterSpacing: 1,
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: 'rgba(0, 207, 255, 0.2)',
                  borderColor: '#00CFFF',
                },
              }}
            >
              View All Blogs
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
