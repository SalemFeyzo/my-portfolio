import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Container, Typography, Toolbar, AppBar } from "@mui/material";
import { useTheme } from "next-themes";
import ThemeUpdater from "./ThemeUpdater";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const { theme, resolvedTheme, setTheme } = useTheme();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Layout = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>FeyzoTech</title>
      </Head>
      <ElevationScroll {...props}>
        <AppBar color="default">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                Scroll to elevate App bar
              </Typography>
            </Box>
            <ThemeUpdater />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>{props.children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
