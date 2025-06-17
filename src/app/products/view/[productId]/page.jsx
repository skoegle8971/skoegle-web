'use client';

import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Layout from "../../../../Layout/Layout";
import axios from 'axios';

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Stack,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';

import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

export default function ProductPage() {
  const { productId } = useParams();
  const hasFetched = useRef(false);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (!productId || hasFetched.current) return;
    hasFetched.current = true;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/views?productId=${productId}`);
        if (!res.data?.data) throw new Error(res.data.message || 'Failed to fetch product');
        setProduct(res.data.data);
      } catch (err) {
        setError(err.message || 'Error loading product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <Box p={4} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  const mediaItems = [
    ...(product.productImages || []),
    ...(product.video ? [product.video] : [])
  ];

  return (
    <Layout>
      <br/>
      <br/>
       <br/>
      <br/>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Media Section */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {mediaItems.slice(0, 6).map((media, idx) => (
                <Grid item xs={6} sm={4} key={idx}>
                  <Card onClick={() => { setIsModalOpen(true); setCurrentMediaIndex(idx); }} sx={{ cursor: 'pointer' }}>
                    {media.includes('.mp4') ? (
                      <CardMedia component="video" src={media} sx={{ height: 140 }} muted />
                    ) : (
                      <CardMedia component="img" image={media} sx={{ height: 140, objectFit: 'contain' }} />
                    )}
                  </Card>
                </Grid>
              ))}
              {mediaItems.length > 6 && (
                <Grid item xs={6} sm={4}>
                  <Card
                    onClick={() => { setIsModalOpen(true); setCurrentMediaIndex(6); }}
                    sx={{
                      height: 140,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Typography variant="subtitle1">+{mediaItems.length - 6} More</Typography>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{product.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>{product.subheading}</Typography>
            <Typography variant="h5" color="primary" sx={{ mt: 1, mb: 2 }}>
              ₹ {product.amount}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Button variant="contained" color="success" startIcon={<PaymentIcon />}>Buy Now</Button>
              <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />}>Add to Cart</Button>
              <Button variant="outlined" color="secondary" startIcon={<ContactSupportIcon />}>Contact Us</Button>
            </Stack>

            {/* Downloads */}
            {product.downloads && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>Downloads & Apps</Typography>
                <Stack spacing={1}>
                  {product.downloads.android && (
                    <Link href={product.downloads.android} target="_blank" underline="hover">
                      <Button startIcon={<AndroidIcon />} variant="outlined" fullWidth>
                        Android App
                      </Button>
                    </Link>
                  )}
                  {product.downloads.ios && (
                    <Link href={product.downloads.ios} target="_blank" underline="hover">
                      <Button startIcon={<AppleIcon />} variant="outlined" fullWidth>
                        iOS App
                      </Button>
                    </Link>
                  )}
                  {product.downloads.pdfManual && (
                    <Link href={product.downloads.pdfManual} target="_blank" underline="hover">
                      <Button startIcon={<PictureAsPdfIcon />} variant="outlined" fullWidth>
                        PDF Manual
                      </Button>
                    </Link>
                  )}
                </Stack>
              </Box>
            )}

            {/* Features */}
            {product.productFeatures?.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>Features</Typography>
                <Grid container spacing={2}>
                  {product.productFeatures.map((f) => (
                    <Grid item xs={12} sm={6} key={f._id}>
                      <Card sx={{ display: 'flex', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          image={f.image}
                          alt={f.title}
                          sx={{ width: 60, height: 60, objectFit: 'contain', ml: 2 }}
                        />
                        <CardContent>
                          <Typography variant="subtitle1">{f.title}</Typography>
                          <Typography variant="body2" color="text.secondary">{f.subheading}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Specifications */}
            {product.specifications?.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>Specifications</Typography>
                {product.specifications.map((spec) => (
                  <Box key={spec._id} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>{spec.category}</Typography>
                    <Paper variant="outlined">
                      <Table>
                        <TableBody>
                          {Object.entries(spec.data).map(([key, value]) => (
                            <TableRow key={key}>
                              <TableCell sx={{ fontWeight: 600 }}>{key}</TableCell>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Paper>
                  </Box>
                ))}
              </Box>
            )}

            <Typography variant="caption" display="block" color="text.secondary" mt={3}>
              Last updated: {new Date(product.updatedAt).toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Modal for More Media */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: 'relative', p: 0, bgcolor: 'black' }}>
          {/* Close Button */}
          <IconButton
            onClick={() => setIsModalOpen(false)}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'white', zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {/* Back Button */}
          {currentMediaIndex > 0 && (
            <IconButton
              onClick={() => setCurrentMediaIndex((i) => i - 1)}
              sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', color: 'white', zIndex: 10 }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}

          {/* Forward Button */}
          {currentMediaIndex < mediaItems.length - 1 && (
            <IconButton
              onClick={() => setCurrentMediaIndex((i) => i + 1)}
              sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', color: 'white', zIndex: 10 }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}

          {/* Media Viewer */}
          <Box sx={{ width: '100%', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {mediaItems[currentMediaIndex].includes('.mp4') ? (
              <video
                src={mediaItems[currentMediaIndex]}
                controls
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            ) : (
              <img
                src={mediaItems[currentMediaIndex]}
                alt={`media-${currentMediaIndex}`}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
