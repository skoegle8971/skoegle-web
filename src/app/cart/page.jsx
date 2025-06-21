"use client";
import { useProducts } from "@/Store/Store";
import Layout from "../../Layout/Layout";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartPage() {
  const { products, setProducts } = useProducts();

  const handleQuantityChange = (productId, action) => {
    setProducts(prev =>
      prev.map(p => {
        if (p._id !== productId) return p;
        const newQty = action === "increase" ? p.quantity + 1 : p.quantity - 1;
        return { ...p, quantity: newQty > 0 ? newQty : 1 }; // prevent 0
      })
    );
  };

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid item xs={12} md={6} lg={4} key={product._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="subtitle1">{product.subheading}</Typography>
                  <Typography variant="body2">Product ID: {product.productId}</Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => handleQuantityChange(product._id, "decrease")}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      {product.quantity || 1}
                    </Typography>
                    <IconButton onClick={() => handleQuantityChange(product._id, "increase")}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
