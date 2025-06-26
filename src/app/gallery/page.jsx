"use client";

import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../Components/Layout/Layout";
import { 
  Box, 
  Button, 
  Card, 
  CardActionArea, 
  CardContent, 
  Chip, 
  Container, 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  Grid, 
  IconButton, 
  Stack, 
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Close, NavigateBefore, NavigateNext } from "@mui/icons-material";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = {
    meta: {
      title: "Gallery | SKOEGLE's Work and Events",
      description: "Explore our gallery showcasing SKOEGLE's projects, team events, and company culture.",
      keywords: "SKOEGLE gallery, tech company photos, work showcase, company events",
      ogTitle: "Gallery | SKOEGLE's Work and Events",
      ogDescription: "View photos from SKOEGLE's projects, team events, and company culture.",
      canonical: "https://www.skoegle.com/gallery"
    },
    hero: {
      title: "Our Gallery",
      subtitle: "A visual journey through our projects, team, and company culture"
    },
    categories: [
      { id: "all", name: "All" },
      { id: "events", name: "Events" },
      { id: "team", name: "Team" },
      { id: "office", name: "Office" }
    ],
    images: [
      {
        id: 1,
        src: "/images/gallery/project-1.jpg",
        alt: "Dashboard project screenshot",
        category: "projects",
        caption: "Enterprise dashboard solution for financial clients"
      },
      {
        id: 2,
        src: "/images/gallery/team-1.jpg",
        alt: "Team working in office",
        category: "team",
        caption: "Our engineering team collaborating on a project"
      },
      {
        id: 3,
        src: "/images/gallery/event-1.jpg",
        alt: "Annual company retreat",
        category: "events",
        caption: "2023 company retreat in the mountains"
      },
      {
        id: 4,
        src: "/images/gallery/office-1.jpg",
        alt: "Modern office space",
        category: "office",
        caption: "Our headquarters in Bangalore"
      },
      {
        id: 5,
        src: "/images/gallery/project-2.jpg",
        alt: "Mobile app interface",
        category: "projects",
        caption: "E-commerce mobile application design"
      },
      {
        id: 6,
        src: "/images/gallery/team-2.jpg",
        alt: "Team celebration",
        category: "team",
        caption: "Celebrating a successful product launch"
      },
      {
        id: 7,
        src: "/images/gallery/event-2.jpg",
        alt: "Tech conference",
        category: "events",
        caption: "Speaking at the Global Tech Summit 2023"
      },
      {
        id: 8,
        src: "/images/gallery/office-2.jpg",
        alt: "Office lounge area",
        category: "office",
        caption: "Collaboration spaces in our office"
      },
      {
        id: 9,
        src: "/images/gallery/project-3.jpg",
        alt: "Data visualization",
        category: "projects",
        caption: "Advanced data analytics platform"
      },
      {
        id: 10,
        src: "/images/gallery/team-3.jpg",
        alt: "Team building activity",
        category: "team",
        caption: "Outdoor team building exercises"
      },
      {
        id: 11,
        src: "/images/gallery/event-3.jpg",
        alt: "Hackathon event",
        category: "events",
        caption: "Annual internal hackathon winners"
      },
      {
        id: 12,
        src: "/images/gallery/office-3.jpg",
        alt: "Office workspace",
        category: "office",
        caption: "Our developers at work"
      }
    ],
    stats: [
      { number: "100+", label: "Team Members" },
      { number: "5+", label: "Countries" },
      { number: "25+", label: "Events Yearly" }
    ]
  };

  const filteredImages = selectedCategory === "all" 
    ? data.images 
    : data.images.filter(image => image.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % filteredImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <Layout>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords} />
        <meta property="og:title" content={data.meta.ogTitle} />
        <meta property="og:description" content={data.meta.ogDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={data.meta.canonical} />
      </Head>

      <Box component="main" sx={{ py: 0 }}>
        {/* Hero Section */}
        <Box sx={{
          background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)',
          color: 'white',
          py: 12,
          textAlign: 'center'
        }}>
          <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.8rem' },
              lineHeight: 1.2
            }}>
              {data.hero.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ 
              maxWidth: 800,
              mx: 'auto',
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}>
              {data.hero.subtitle}
            </Typography>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
              {data.stats.map((stat, index) => (
                <Grid item key={index} xs={6} sm={3}>
                  <Card sx={{ 
                    textAlign: 'center',
                    boxShadow: 3,
                    borderRadius: 2
                  }}>
                    <CardContent>
                      <Typography variant="h3" component="div" sx={{ 
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1
                      }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Gallery Content */}
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            {/* Category Filters */}
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }} flexWrap="wrap">
              {data.categories.map(category => (
                <Chip
                  key={category.id}
                  label={category.name}
                  clickable
                  color={selectedCategory === category.id ? 'primary' : 'default'}
                  onClick={() => setSelectedCategory(category.id)}
                  sx={{ mb: isMobile ? 1 : 0 }}
                />
              ))}
            </Stack>

            {/* Image Grid */}
            <Grid container spacing={3}>
              {filteredImages.map((image, index) => (
                <Grid item key={image.id} xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <CardActionArea onClick={() => openLightbox(index)}>
                      <Box sx={{ 
                        position: 'relative',
                        pt: '75%', // 4:3 aspect ratio
                        overflow: 'hidden'
                      }}>
                        <Box
                          component="img"
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        <Box sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          bgcolor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          p: 2,
                          transform: 'translateY(100%)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(0)'
                          }
                        }}>
                          <Typography variant="body2">{image.caption}</Typography>
                        </Box>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Lightbox Modal */}
        <Dialog
          open={lightboxOpen}
          onClose={closeLightbox}
          maxWidth="md"
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'visible'
            }
          }}
        >
          <IconButton
            onClick={closeLightbox}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              zIndex: 1
            }}
          >
            <Close fontSize="large" />
          </IconButton>
          
          <IconButton
            onClick={() => navigateImage('prev')}
            sx={{
              position: 'absolute',
              left: -70,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
              },
              width: 50,
              height: 50,
              [theme.breakpoints.down('sm')]: {
                left: -50,
                width: 40,
                height: 40
              }
            }}
          >
            <NavigateBefore fontSize="large" />
          </IconButton>
          
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <Box
              component="img"
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              sx={{
                width: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                display: 'block',
                mx: 'auto'
              }}
            />
          </DialogContent>
          
          <IconButton
            onClick={() => navigateImage('next')}
            sx={{
              position: 'absolute',
              right: -70,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
              },
              width: 50,
              height: 50,
              [theme.breakpoints.down('sm')]: {
                right: -50,
                width: 40,
                height: 40
              }
            }}
          >
            <NavigateNext fontSize="large" />
          </IconButton>
          
          <DialogTitle sx={{ 
            color: 'white',
            textAlign: 'center',
            pt: 2
          }}>
            {filteredImages[currentImageIndex]?.caption}
          </DialogTitle>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default GalleryPage;