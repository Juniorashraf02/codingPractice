"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";
import Grid from "@mui/material/Grid"; // ✅ correct import

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "$25",
    description: "Soft cotton tee with minimalist design.",
    image: "/products/white-tshirt.jpg"
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "$60",
    description: "Lightweight denim jacket for everyday wear.",
    image: "/products/denim-jacket.jpg"
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: "$45",
    description: "Comfortable stretch denim with a modern cut.",
    image: "/products/slim-jeans.jpg"
  },
  {
    id: 4,
    name: "Black Hoodie",
    price: "$40",
    description: "Minimalist hoodie with premium fleece fabric.",
    image: "/products/black-hoodie.jpg"
  }
];

export default function LandingPage() {
  return (
    <>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Clothing LAB
          </Typography>
          <div>
            <Button color="primary">Shop</Button>
            <Button color="primary">About</Button>
            <Button color="primary">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Minimalist Fashion, Maximum Impact
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Discover clean, modern clothing designed for everyday comfort.
        </Typography>
        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </Container>

      {/* Product Grid */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined">View</Button>
                  <Button size="small" variant="contained">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
