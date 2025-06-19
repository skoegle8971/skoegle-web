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
import Layout from "../../Layout/Layout";

export default function ProductsPage() {
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
          minHeight: 360, // Matches expected height of product card
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
    <Layout>
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
            ALL <span style={{ color: '#2196f3' }}>PRODUCTS</span>
          </Typography>
        </Container>
      </Box>

      {/* Description Section */}
     <Container sx={{ py: 6 }}>
  <Typography variant="body1" paragraph>
    Founded in 2018, <strong>Skoegle IoT Innovations</strong> has rapidly grown to become a trusted name in the IoT space. 
    We specialize in the development and manufacturing of connected devices that support industries such as logistics, fleet management, 
    vehicle and bike rentals, smart security, industrial automation, and many more. With a portfolio of over 20 innovative products 
    and multiple software platforms, we aim to provide tailored solutions for a wide range of business needs.
    If you are unable to find a device that fits your specific requirements, please reach out — we may already have the right solution in development.
  </Typography>
  <Typography variant="body1">
  All our tracking and DVR equipment comes with a standard  warranty. 
  Extended warranty and regular software updates — including performance enhancements, security patches, and new features — 
  are available based on your subscription plan and selected platform. 
  For more details and updates, please visit our official websites: <strong>www.skoegle.com</strong> and <strong>www.skoegle.in</strong>.
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
                  onClick={() => router.push(`/products/view/${product.productId}`)}
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
    </Layout>
  );
}
