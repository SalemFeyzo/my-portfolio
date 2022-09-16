import { FC, useEffect, useState } from "react";
import { Button, css, IconButton, Icon } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeUpdater: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div></div>;

  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? (
        <Icon>
          <DarkModeIcon />
        </Icon>
      ) : (
        <Icon>
          <LightModeIcon />
        </Icon>
      )}
    </IconButton>
  );
};

export default ThemeUpdater;
