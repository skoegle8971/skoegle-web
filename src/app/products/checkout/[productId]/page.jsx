'use client';

import Layout from "../../../../Layout/Layout";
import { useUser } from '@clerk/nextjs';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  Box,
  Skeleton
} from '@mui/material';

const Cryptr = require('cryptr');
const cryptr = new Cryptr('1234567890abcdef'); // ⚠️ Use env variable in production

export default function Checkout() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { productId } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false); // ✅ added

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/views?productId=${productId}`);
        setProduct(res.data.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    if (productId) fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded && !isSignedIn) {
      const currentPath = window.location.pathname + window.location.search;
      const redirectUrl = encodeURIComponent(currentPath);
      router.replace(`/signin?redirect_url=${redirectUrl}`);
    }
  }, [isLoaded, isSignedIn, router]);

  const handlePincodeChange = async (pin) => {
    setPincode(pin);
    if (pin.length === 6) {
      try {
        const res = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
        const info = res.data?.[0];
        if (info?.Status === 'Success') {
          const postOffice = info.PostOffice?.[0];
          setCity(postOffice?.Name || '');
          setState(postOffice?.State || '');
          setDistrict(postOffice?.District || '');
        } else {
          setCity('');
          setState('');
          setDistrict('');
        }
      } catch (err) {
        console.error("Pincode fetch failed:", err);
      }
    }
  };

  const handleCheckout = () => {
    const finalName = user?.fullName || fullName;
    const finalEmail = user?.primaryEmailAddress?.emailAddress || email;

    if (!finalName || !finalEmail || !phoneNumber.trim() || !deliveryAddress.trim()) {
      return alert("Please complete all required fields including name, email, phone number, and address.");
    }

    const payload = {
      name: finalName,
      email: finalEmail,
      amount: product.amount,
      redirectingurl: `https://skoegle.com/orders`,
      address: deliveryAddress,
      phonenumber: phoneNumber,
      userid: user.id,
      productname: product.name,
    };

    const encrypted = cryptr.encrypt(JSON.stringify(payload));
    const finalURL = `https://payments.skoegle.com/pay?data=${encodeURIComponent(encrypted)}`;
    router.push(finalURL);
  };

  if (!isLoaded || loading) {
    return (
      <Layout>
        <Box sx={{ padding: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Delivery Information</Typography>
                  {[...Array(7)].map((_, index) => (
                    <Skeleton key={index} height={56} sx={{ marginBottom: 2 }} variant="rounded" />
                  ))}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Order Summary</Typography>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Skeleton variant="rectangular" width={100} height={100} sx={{ borderRadius: 2 }} />
                    <Box sx={{ flexGrow: 1 }}>
                      <Skeleton width="80%" height={24} />
                      <Skeleton width="60%" height={20} />
                    </Box>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Skeleton width="40%" height={24} />
                  <Skeleton width="100%" height={40} sx={{ mt: 3 }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <Typography variant="h6" align="center" mt={4}>User not signed in.</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>Checkout</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Delivery Information</Typography>

                <TextField
                  fullWidth
                  label="Full Name"
                  value={user.fullName || fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  margin="normal"
                  disabled={!!user.fullName}
                />

                <TextField
                  fullWidth
                  label="Email"
                  value={user.primaryEmailAddress?.emailAddress || email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  disabled={!!user.primaryEmailAddress}
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Pincode"
                  value={pincode}
                  onChange={(e) => handlePincodeChange(e.target.value)}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="City"
                  value={city}
                  margin="normal"
                  disabled
                />

                <TextField
                  fullWidth
                  label="District"
                  value={district}
                  margin="normal"
                  disabled
                />

                <TextField
                  fullWidth
                  label="State"
                  value={state}
                  margin="normal"
                  disabled
                />

                <TextField
                  fullWidth
                  label="Delivery Address"
                  multiline
                  rows={4}
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  margin="normal"
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Order Summary</Typography>
                {product ? (
                  <>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <img
                        src={product.productImages?.[0]}
                        alt={product.name}
                        width={100}
                        style={{ borderRadius: '10px' }}
                      />
                      <Box>
                        <Typography variant="subtitle1">{product.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{product.subheading}</Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body1"><strong>Amount:</strong> ₹{product.amount}</Typography>

                    {/* ✅ Terms and Conditions Checkbox */}
                    <Box sx={{ mt: 2 }}>
  <label style={{ display: 'flex', alignItems: 'center' }}>
    <input
      type="checkbox"
      checked={agreedToTerms}
      onChange={() => setAgreedToTerms(prev => !prev)}
      style={{ marginRight: '8px' }}
    />
    I agree to the{' '}
    <Link
      component={NextLink}
      href="/sales"
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
      sx={{ ml: 0.5 }}
    >
      Terms and Conditions
    </Link>
  </label>
</Box>

                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ mt: 3 }}
                      onClick={handleCheckout}
                      disabled={!agreedToTerms} // ✅ Button disabled until checkbox is checked
                    >
                      Place Order & Pay
                    </Button>
                  </>
                ) : (
                  <Typography variant="body2">Product not found.</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

