import React, { useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  Box,
  Typography,
  Toolbar,
  AppBar,
  Container,
  IconButton,
  Button,
  Tooltip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "next-themes";
import ThemeUpdater from "./ThemeUpdater";
import Logo from "./Logo";

const pages = ["Home", "About", "Contact"];
const drawerWidth = 240;
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

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
interface HeaderProps {
  window?: () => Window;
}
const Header = (props: HeaderProps) => {
  const { resolvedTheme } = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo />
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <ElevationScroll>
        <AppBar
          color="default"
          sx={{ bgcolor: resolvedTheme === "light" ? "white" : "" }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Box
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Logo />
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box component="nav">
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </Box>
              <Box
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                }}
              >
                <Logo />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  marginLeft: 2,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: "inherit", display: "block" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 600,
                        letterSpacing: ".1rem",
                      }}
                    >
                      {page}
                    </Typography>
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="theme">
                  <ThemeUpdater />
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default Header;
