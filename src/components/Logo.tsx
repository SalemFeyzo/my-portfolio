import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Button variant="text" LinkComponent={Link} href="/">
      <Image src="/logo.svg" alt="Feyzo.tech" width={40} height={40} />
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: { xs: "none", md: "block" },
          mx: "5px",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "inherit",
          fontFamily: "monospace",
          textDecoration: "none",
        }}
      >
        Feyzo.Tech
      </Typography>
    </Button>
  );
};

export default Logo;
