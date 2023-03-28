import { Box, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <div className="navbar">
      <Box sx={{ padding: 2, m: 1 }}>
        <Container maxWidth="xl">
          <Link href="/" underline="none" sx={{ color: "black" }}>
            <Typography variant="h4" sx={{ mb: 1.4, curson: "pointer" }}>
              Restaurants
            </Typography>
          </Link>
          <Typography subtitle1="h2" color="gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et illum
            labore inventore. <br /> Tenetur quos dignissimos nemo cumque odio
            suscipit
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
