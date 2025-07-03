'use client';

import Layout from "../../../../../Components/Layout/Layout";
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
  Skeleton,
  CircularProgress,
} from '@mui/material';

const Cryptr = require('cryptr');
const cryptr = new Cryptr('5sd4f54s5f45sf45sdf5sfs4d5f4s54f5sdf45s45f4s5f45s4f5ds4vsd54s5f'); // ⚠️ Use env variable in production

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhoneNumber = (phone) => /^[6-9]\d{9}$/.test(phone);

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
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const [errors, setErrors] = useState({});

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
      router.replace(`/auth/signin?redirect_url=${redirectUrl}`);
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
    let newErrors = {};

    if (!finalName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!finalEmail.trim()) newErrors.email = "Please enter your email address.";
    else if (!validateEmail(finalEmail.trim())) newErrors.email = "Please enter a valid email address.";
    if (!phoneNumber.trim()) newErrors.phoneNumber = "Please enter your phone number.";
    else if (!validatePhoneNumber(phoneNumber.trim())) newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    if (!deliveryAddress.trim()) newErrors.deliveryAddress = "Please enter your delivery address.";
    if (!pincode.trim() || pincode.length !== 6) newErrors.pincode = "Please enter a valid 6-digit pincode.";
    if (!agreedToTerms) newErrors.terms = "You must agree to the Terms and Conditions before placing the order.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsProcessing(true);

    const payload = {
      name: finalName,
      email: finalEmail,
      amount: product.amount,
      redirectingurl: `http://localhost:3000/pages/orders`,
      address: deliveryAddress,
      phonenumber: phoneNumber,
      userid: user.id,
      productname: product.name,
      productId: productId,
    };

    try {
      const encrypted = cryptr.encrypt(JSON.stringify(payload));
      const finalURL = `http://localhost:5000/pay?data=${encodeURIComponent(encrypted)}`;
      router.push(finalURL);
    } catch (error) {
      console.error("Encryption/Redirection failed:", error);
      setIsProcessing(false);
    }
  };

  if (!isLoaded || loading) {
    return (
      <Layout>
        <Box sx={{ padding: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Card><CardContent>
                <Typography variant="h6" gutterBottom>Delivery Information</Typography>
                {[...Array(7)].map((_, i) => (
                  <Skeleton key={i} height={56} sx={{ mb: 2 }} variant="rounded" />
                ))}
              </CardContent></Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card><CardContent>
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
              </CardContent></Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    );
  }

  if (!user) {
    return <Layout><Typography variant="h6" align="center" mt={4}>User not signed in.</Typography></Layout>;
  }

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>Checkout</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Card><CardContent>
              <Typography variant="h6" gutterBottom>Delivery Information</Typography>

              <TextField fullWidth label="Full Name" value={user.fullName || fullName}
                onChange={(e) => setFullName(e.target.value)} margin="normal" disabled={!!user.fullName}
                error={!!errors.fullName} helperText={errors.fullName} />

              <TextField fullWidth label="Email" value={user.primaryEmailAddress?.emailAddress || email}
                onChange={(e) => setEmail(e.target.value)} margin="normal" disabled={!!user.primaryEmailAddress}
                error={!!errors.email} helperText={errors.email} />

              <TextField fullWidth label="Phone Number" value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} margin="normal"
                error={!!errors.phoneNumber} helperText={errors.phoneNumber} />

              <TextField fullWidth label="Pincode" value={pincode}
                onChange={(e) => handlePincodeChange(e.target.value)} margin="normal"
                error={!!errors.pincode} helperText={errors.pincode} />

              <TextField fullWidth label="City" value={city} margin="normal" disabled />
              <TextField fullWidth label="District" value={district} margin="normal" disabled />
              <TextField fullWidth label="State" value={state} margin="normal" disabled />

              <TextField fullWidth label="Delivery Address" multiline rows={4} value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)} margin="normal"
                error={!!errors.deliveryAddress} helperText={errors.deliveryAddress} />
            </CardContent></Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card><CardContent>
              <Typography variant="h6" gutterBottom>Order Summary</Typography>
              {product ? (
                <>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <img src={product.productImages?.[0]} alt={product.name} width={100}
                      style={{ borderRadius: '10px' }} />
                    <Box>
                      <Typography variant="subtitle1">{product.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{product.subheading}</Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="body1"><strong>Amount:</strong> ₹{product.amount}</Typography>

                  <Box sx={{ mt: 2 }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="checkbox" checked={agreedToTerms}
                        onChange={() => setAgreedToTerms(prev => !prev)} style={{ marginRight: '8px' }} />
                      I agree to the{' '}
                      <Link component={NextLink} href="/sales" target="_blank" rel="noopener noreferrer"
                        underline="hover" sx={{ ml: 0.5 }}>Terms and Conditions</Link>
                    </label>
                    {errors.terms && (
                      <Typography variant="caption" color="error" sx={{ display: 'block', mt: 1 }}>
                        {errors.terms}
                      </Typography>
                    )}
                  </Box>

                  <Button fullWidth variant="contained" color="primary" sx={{ mt: 3 }}
                    onClick={handleCheckout} disabled={!agreedToTerms || isProcessing}>
                    {isProcessing ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Place Order & Pay'
                    )}
                  </Button>
                </>
              ) : (
                <Typography variant="body2">Product not found.</Typography>
              )}
            </CardContent></Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
