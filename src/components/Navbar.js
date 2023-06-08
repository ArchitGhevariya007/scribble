import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { TabContextCreate } from "../context/TabContext";

export default function Navbar() {
  //************* Using Context *************
  const Tabs = useContext(TabContextCreate);

  //Style for navbar
  const style = {
    Navbar: {
      backgroundColor: "#2d3036",
      padding: "12px",
      pl: 3,
      // pl: isMobile ? 2 : 3,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: "100",
      display: "flex",
      alignItems: "center",
    },
    LogoText: {
      fontSize: "20px",
      fontweight: 700,
      letterSpacing: "2px",
    },
    hamburgerIcon: {
      cursor: "pointer",
      fontSize: 24,
      color: "rgb(232, 232, 232)",
      marginRight: "8px",
      marginTop: "5px",
    },
  };

  const handleToggleSidebar = () => {
    Tabs.setSidebarVisible(!Tabs.sidebarVisible);
  };
  return (
    <>
      <Box sx={style.Navbar}>
        {Tabs.isMobile && (
          <Box>
            <RxHamburgerMenu
              style={style.hamburgerIcon}
              onClick={handleToggleSidebar}
            />
          </Box>
        )}
        <Typography variant="p" sx={style.LogoText}>
          Scribble
        </Typography>
      </Box>
    </>
  );
}
