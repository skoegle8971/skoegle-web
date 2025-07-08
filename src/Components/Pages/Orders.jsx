"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";

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
  TextField,
  Skeleton,
} from "@mui/material";
import { encrypt, decrypt } from "@/ServerCopmonents/utils/crypter"; // Adjust path if needed

export default function Orders() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDateInput, setShowDateInput] = useState(false);
  const [filterDate, setFilterDate] = useState("");
  const [filtered, setFiltered] = useState(false);

  const getTwoDaysAgo = () => {
    const date = new Date();
    date.setDate(date.getDate() - 2);
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (typeof window !== "undefined" && isLoaded && !isSignedIn) {
      const currentPath = window.location.pathname + window.location.search;
      const redirectUrl = encodeURIComponent(currentPath);
      router.replace(`/auth/signin?redirect_url=${redirectUrl}`);
    }
  }, [isLoaded, isSignedIn, router]);

  const fetchOrders = async (date = "") => {
    if (!user?.emailAddresses?.[0]?.emailAddress) return;
    setLoading(true);
    try {
      const url = `https://payments.skoegle.com/api/order/history?email=${user.emailAddresses[0].emailAddress}${
        date ? `&date=${date}` : ""
      }`;

      const response = await axios.get(url);
      setOrders(JSON.parse(decrypt(response.data.data)) || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      fetchOrders();
    }
  }, [isLoaded, isSignedIn, user]);

  const handleFilterClick = () => {
    setShowDateInput(true);
    setFilterDate(getTwoDaysAgo());
  };

  const handleFilterConfirm = () => {
    if (filterDate) {
      fetchOrders(filterDate);
      setFiltered(true);
    }
  };

  const handleReset = () => {
    setShowDateInput(false);
    setFilterDate("");
    setFiltered(false);
    fetchOrders();
  };

  return (
    <Container maxWidth="md" sx={{ pt: 10 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Your Orders
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box display="flex" alignItems="center" gap={2} mb={3}>
        {!showDateInput ? (
          <Button variant="contained" onClick={handleFilterClick}>
            Filter Orders
          </Button>
        ) : (
          <>
            <TextField
              type="date"
              label="Select Date"
              InputLabelProps={{ shrink: true }}
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            <Button variant="contained" onClick={handleFilterConfirm}>
              Apply Filter
            </Button>
            {filtered && (
              <Button variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            )}
          </>
        )}
      </Box>

      {loading ? (
        <Grid container spacing={3}>
          {Array.from(new Array(3)).map((_, index) => (
            <Grid item xs={12} key={index}>
              <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                  <Skeleton variant="rectangular" height={20} sx={{ my: 1 }} />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="50%" />
                  <Skeleton variant="rectangular" height={36} width={180} sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
                    <Typography
                      variant="body2"
                      color={order.status === "charged" ? "green" : "primary"}
                    >
                      {order.status}
                    </Typography>
                  </Box>

                  <Typography variant="h6">
                    {order.productname || "Product"}
                  </Typography>
                  <Typography variant="body1" mt={0.5}>
                    ₹{order.amount}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Delivery Address:
                    </Typography>
                    <Typography variant="body2">{order.address}</Typography>
                    <Typography variant="body2">
                      Phone: {order.phonenumber}
                    </Typography>
                  </Box>

                  {order.status === "CHARGED" && (
                    <Box mt={2}>
                      <Button
                        variant="outlined"
                        size="small"
                        color="success"
                        onClick={() =>
                          window.open(
                            `https://payments.skoegle.com/downloadReceipt/${order.orderId}`,
                            "_blank"
                          )
                        }
                      >
                        Download Bank Receipt
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
