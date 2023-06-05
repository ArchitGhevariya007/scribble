import React from "react";
import { Box, Typography } from "@mui/material";


export default function Navbar() {

  //Style for navbar
  const style = {
    Navbar: {
      backgroundColor: "#2d3036",
      padding:"12px",
      pl:3,
      // pl: isMobile ? 2 : 3,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: "100",
    },
    LogoText: {
      fontSize:"20px",
      // fontSize: isMobile ? "16px" : "20px",
      fontweight: 700,
      letterSpacing: "2px",
    },
  };
  return (
    <>
      <Box sx={style.Navbar}>
        <Typography variant="p" sx={style.LogoText}>
          Scribble
        </Typography>
      </Box>
    </>
  );
}
