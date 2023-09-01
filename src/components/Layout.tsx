import Head from "next/head";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactElement;
}

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>FeyzoTech</title>
      </Head>
      <Header />
      <Container>
        <Box component="main" sx={{ my: 2, height: "100vh" }}>
          {props.children}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
