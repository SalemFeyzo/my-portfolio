import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Fiverr from "@/components/Fiverr";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "fantasy",
          }}
        >
          Hello world!
        </Typography>
        <Link href="/about" color="inherit">
          Go to the about page
        </Link>
        <Fiverr />
      </Box>
    </Container>
  );
};

export default Home;
