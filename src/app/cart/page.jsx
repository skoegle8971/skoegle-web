'use client';

import { useProducts } from "@/Store/Store";
import Layout from "@/Layout/Layout";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Box,
  Divider,
  CardMedia,
  Paper,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Cryptr from "cryptr";

const cryptr = new Cryptr("1234567890abcdef"); // ⚠️ Replace with process.env in production
const GST_RATE = 0.18;
const MAX_TOTAL = 100000;

export default function CartPage() {
  const { products, setProducts } = useProducts();
  const router = useRouter();
  const { isSignedIn, isLoaded, user } = useUser();

  const getItemTotal = (product) => {
    const price = Number(product?.price || product?.amount || 0);
    const quantity = Number(product?.quantity || 1);
    return price * quantity;
  };

  const subtotal = products.reduce((sum, p) => sum + getItemTotal(p), 0);
  const gstAmount = subtotal * GST_RATE;
  const deliveryCharge = products.length > 0 ? 50 : 0;
  const grandTotal = subtotal + gstAmount + deliveryCharge;

  const handleQuantityChange = (index, action) => {
    setProducts((prev) => {
      return prev.flatMap((p, i) => {
        if (i !== index) return [p];

        const currentQty = p.quantity || 1;
        const price = Number(p?.price || p?.amount || 0);

        if (action === "increase") {
          const newSubtotal = subtotal + price;
          const newGst = newSubtotal * GST_RATE;
          const newTotal = newSubtotal + newGst + deliveryCharge;
          if (newTotal > MAX_TOTAL) return [p]; // Block increase if over limit
          return [{ ...p, quantity: currentQty + 1 }];
        }

        if (action === "decrease") {
          if (currentQty <= 1) {
            return []; // Remove product
          }
          return [{ ...p, quantity: currentQty - 1 }];
        }

        return [p];
      });
    });
  };


  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded && !isSignedIn) {
      const currentPath = window.location.pathname + window.location.search;
      const redirectUrl = encodeURIComponent(currentPath);
      router.replace(`/auth/signin?redirect_url=${redirectUrl}`);
    }
  }, [isLoaded, isSignedIn, router]);


  const handleCheckout = () => {
    // if (!isSignedIn) {
    //   const currentPath = window.location.pathname + window.location.search;
    //   const redirectUrl = encodeURIComponent(currentPath);
    //   router.replace(`/auth/signin?redirect_url=${redirectUrl}`);
    //   return;
    // }

    const userName = user?.fullName || "Guest";
    const userEmail = user?.primaryEmailAddress?.emailAddress || "guest@example.com";

    const orderSummary = products.map((product) => ({
      productId: product.productId,
      name: product.name,
      quantity: product.quantity || 1,
      amount: Number(product.price || product.amount || 0),
      total: getItemTotal(product),
    }));

    const payload = {
      name: userName,
      email: userEmail,
      amount: grandTotal,
      redirectingurl: `https://skoegle.com/orders`,
      address: "NA",
      phonenumber: "NA",
      userid: user?.id || "guest",
      cart: orderSummary,
    };

    const encrypted = cryptr.encrypt(JSON.stringify(payload));
    const finalURL = `https://payments.skoegle.com/pay?data=${encodeURIComponent(encrypted)}`;
    router.push(finalURL);
  };

  return (
    <Layout>
      <Box sx={{ padding: 10 }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>

        <Grid container spacing={2}>
          {products.map((product, index) => {
            const price = Number(product?.price || product?.amount || 0);
            const quantity = product.quantity || 1;
            const itemTotal = price * quantity;

            return (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent sx={{ display: "flex", alignItems: "center" }}>
                    <CardMedia
                      component="img"
                      image={product?.productImages?.[0] || "/placeholder.png"}
                      alt={product?.name}
                      sx={{
                        width: 120,
                        height: 100,
                        objectFit: "cover",
                        borderRadius: 1,
                        mr: 2,
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{product?.name}</Typography>
                      <Typography variant="body2">{product?.subheading}</Typography>
                      <Typography variant="body2">
                        Product ID: {product?.productId}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        Price: ₹{price.toFixed(2)}
                      </Typography>

                      {/* ✅ Quantity Controls */}
                      <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                        {quantity === 1 ? (
                          <>
                            <Typography variant="body1" sx={{ mx: 2 }}>
                              {quantity}
                            </Typography>
                            <IconButton
                              onClick={() => handleQuantityChange(index, "increase")}
                              disabled={grandTotal + price > MAX_TOTAL}
                            >
                              <AddIcon />
                            </IconButton>
                            <Button
                              variant="outlined"
                              color="error"
                              size="small"
                              sx={{ ml: 1 }}
                              onClick={() => handleQuantityChange(index, "decrease")}
                              disabled={grandTotal > MAX_TOTAL}
                            >
                              Delete
                            </Button>
                          </>
                        ) : (
                          <>
                            <IconButton onClick={() => handleQuantityChange(index, "decrease")}>
                              <RemoveIcon />
                            </IconButton>
                            <Typography variant="body1" sx={{ mx: 2 }}>
                              {quantity}
                            </Typography>
                            <IconButton
                              onClick={() => handleQuantityChange(index, "increase")}
                              disabled={grandTotal + price > MAX_TOTAL}
                            >
                              <AddIcon />
                            </IconButton>
                          </>
                        )}
                      </Box>


                      <Typography variant="subtitle2" sx={{ mt: 1 }}>
                        Total: ₹{itemTotal.toFixed(2)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: "auto" }}>
          <Typography variant="h6">Cart Summary</Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography>Subtotal:</Typography>
            <Typography>₹{subtotal.toFixed(2)}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography>GST (18%):</Typography>
            <Typography>₹{gstAmount.toFixed(2)}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography>Delivery Charge:</Typography>
            <Typography>₹{deliveryCharge.toFixed(2)}</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Grand Total:</Typography>
            <Typography variant="h6">₹{grandTotal.toFixed(2)}</Typography>
          </Box>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCheckout}
              disabled={products.length === 0}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
}
