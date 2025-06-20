"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import Layout from "../../Layout/Layout";
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Divider,
  Button,
  Box,
} from "@mui/material";

export default function OrdersPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not signed in
  useEffect(() => {
    if (typeof window !== "undefined" && isLoaded && !isSignedIn) {
      const currentPath = window.location.pathname + window.location.search;
      const redirectUrl = encodeURIComponent(currentPath);
      router.replace(`/signin?redirect_url=${redirectUrl}`);
    }
  }, [isLoaded, isSignedIn, router]);

  // Fetch orders
  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      const fetchOrders = async () => {
        try {
          const response = await axios.get(
            `https://payments.skoegle.com/api/order/history/?userid=${user.id}`
          );
          setOrders(response.data.data || []);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchOrders();
    }
  }, [isLoaded, isSignedIn, user]);

  return (
    <Layout>
    <Container maxWidth="md" sx={{ pt: 10 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Your Orders
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : orders.length === 0 ? (
        <Typography variant="body1">You have no orders yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {orders.map((order) => (
            <Grid item xs={12} key={order._id}>
              <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Order ID: {order.orderId}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {order.status}
                    </Typography>
                  </Box>

                  <Typography variant="h6">{order.productname || "Product"}</Typography>
                  <Typography variant="body1" mt={0.5}>
                    ₹{order.amount}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Delivery Address:
                    </Typography>
                    <Typography variant="body2">{order.address}</Typography>
                    <Typography variant="body2">Phone: {order.phonenumber}</Typography>
                  </Box>

                  {/* <Box mt={2}>
                    <Button variant="outlined" size="small">
                      View Details
                    </Button>
                  </Box> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
    </Layout>
  );
}
