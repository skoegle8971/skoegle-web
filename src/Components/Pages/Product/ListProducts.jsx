'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // for Next.js App Router
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Button,
  Skeleton
} from '@mui/material';

export default function Products() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        if (res.data.success) {
          setProducts(res.data.products);
        }
      })
      .catch(err => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 8 }).map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            minHeight: 360,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 2,
          }}
        >
          <Skeleton variant="rectangular" height={160} sx={{ mb: 2 }} />
          <CardContent>
            <Skeleton width="80%" height={30} />
            <Skeleton width="60%" sx={{ mt: 1 }} />
            <Skeleton width="90%" sx={{ mt: 1 }} />
            <Skeleton width="70%" sx={{ mt: 1 }} />
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <>
      {/* Poster Section */}
      <Box
        sx={{
          backgroundImage: 'url("/poster.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'left',
          py: 10,
          px: 4
        }}
      >
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h2" fontWeight="bold">
            <span style={{ color: '#2196f3' }}> ALL PRODUCTS</span>
          </Typography>
        </Container>
      </Box>

      {/* Description Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="body1" paragraph>
          Founded in 2019, <strong>Skoegle IoT Innovations</strong> has emerged as a leading force in the rapidly evolving Internet of Things (IoT) landscape. We specialize in designing and manufacturing intelligent connected devices tailored for industries such as logistics, fleet and asset tracking, vehicle and bike rentals, smart security, predictive maintenance, energy monitoring, and industrial automation.

          With a growing portfolio of 20+ smart devices and scalable software platforms, our mission is to deliver real-time, data-driven solutions that enhance operational efficiency, safety, and decision-making. Whether you're looking for off-the-shelf solutions or need a custom-built system, our expert team can help you find or develop the right IoT product to fit your unique business needs.
        </Typography>
        <Typography variant="body1">
          All our IoT and video surveillance equipment includes a standard warranty, with options for extended protection, priority support, and ongoing software updates — including AI-powered features, OTA enhancements, and cyber-secure firmware patches.

          For latest product details, updates, and support, visit our official websites: <strong>www.skoegle.com</strong> and <strong>www.skoegle.in</strong>.
        </Typography>
      </Container>

      {/* Products Grid */}
      <Container sx={{ pb: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={4}>
          {loading
            ? renderSkeletons()
            : products.map(product => (
              <Grid item xs={12} sm={6} md={3} key={product._id}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={product?.productImages[0]}
                    alt={product.productName}
                    sx={{ objectFit: 'contain', p: 2 }}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold">
                      {product.productName}
                    </Typography>

                    <Button
                      size="small"
                      onClick={() => router.push(`/pages/products/view/${product.productId}`)}
                      sx={{ color: '#2196f3', textTransform: 'none', fontWeight: 'bold' }}
                    >
                      Read more &gt;
                    </Button>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1, minHeight: 40 }}
                    >
                      {product.productSubheading}
                    </Typography>

                    <Box
                      component="ul"
                      sx={{
                        listStyle: 'none',
                        pl: 0,
                        mt: 1,
                        textAlign: 'left',
                      }}
                    >
                      {product.productFeatures.map((feature, index) => (
                        <li key={index}>
                          <Typography variant="body2" component="span">
                            • {feature}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}
