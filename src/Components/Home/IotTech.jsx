import { Button, Typography, Box, Grid, Card, CardMedia } from "@mui/material";

export default function App() {
  return (
    <>
      <Box sx={{ bgcolor: "#f5f5f5", color: "#212121", py: 5, px: { xs: 2, md: 8 } }}>

        <Grid container spacing={4} alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
              <CardMedia 
              sx={{ height: 400 }}
                component="img"
                image="https://yrldiyjabkjrbvuwpahv.supabase.co/storage/v1/object/public/skoegleimages//image.png" // Replace with actual path
                alt="Engineers Working"
              />
            </Card>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Orbitron, sans-serif", mb: 2 }}
            >
              Transform Your Business With{" "}
              <Box component="span" sx={{ color: "#0288d1" }}>
                Iot Technology
              </Box>
            </Typography>

            <Typography sx={{ color: "#616161", mb: 3 }}>
           Unlock new levels of efficiency and innovation by integrating smart IoT solutions tailored to your business needs.
From real-time data insights to intelligent automation, we help you stay ahead in a connected world.
<br/>
<br/></Typography>

            {/* <Button
              variant="outlined"
              sx={{
                color: "#0288d1",
                borderColor: "#0288d1",
                "&:hover": {
                  bgcolor: "#0288d1",
                  color: "#fff",
                },
                px: 3,
                py: -1,
                borderRadius: 5,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Learn More
            </Button> */}

            {/* Right-side Mini Image */}
            <Box mt={4}>
              <Card sx={{ maxWidth: 300, borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image="https://yrldiyjabkjrbvuwpahv.supabase.co/storage/v1/object/public/skoegleimages//image2.png" // Replace with actual path
                  alt="iot with Laptop"
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
