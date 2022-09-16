import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const Layout = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>FeyzoTech</title>
      </Head>
      <Header />
      <Container>
        <Box sx={{ my: 2 }}>{props.children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
