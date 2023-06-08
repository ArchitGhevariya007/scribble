import React, { useContext, useEffect } from "react";
import { Box, Stack, Grid, Button, TextField } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { TabContextCreate } from "../context/TabContext";

export default function Sidebar() {
  //************* Using Context *************
  const Tabs = useContext(TabContextCreate);

  //Style
  const style = {
    SideBarBody: {
      backgroundColor: "#2d3036",
      width: "100%",
      maxWidth: "200px",
      pt: 3.5,
      p: 2,
      minHeight: "100vh",
      height: "100%",
      float: "left",
      position: "fixed",
      overflow: "auto",
      zIndex: 1,
      transition: "transform 0.4s ease-in-out", // Added transition property for smooth animation
      transform: Tabs.sidebarVisible ? "translateX(0)" : "translateX(-100%)", // Added transform property to move the sidebar off-screen
    },
    addButton: {
      mt: 1.5,
      color: "rgb(232, 232, 232)",
      borderColor: "#808080",
      "&:hover": {
        borderColor: "#808080 ",
        backgroundColor: "rgba(232, 232, 232,0.04)",
      },
    },
    textBox: {
      input: {
        color: "rgb(232, 232, 232)",
        p: 0.5,
      },
    },
    textBoxGrid: {
      "& fieldset": { border: "none" },
    },
    iconsGrid: {
      fontSize: 20,
      mt: 1,
      ml: 1,
    },
    DeleteIcon: {
      mt: 0.7,
      cursor: "pointer",
    },
    SidebarItem: {
      borderRadius: 1,
      padding: 0.5,
      alignItems: "center",
      mb: 1.1,
      cursor: "pointer",
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "#353940",
      },
    },
    selectedTab: {
      transition: "background-color 0.8s",
      backgroundColor: "#22262b",
      "&:hover": {
        backgroundColor: "#22262b",
      },
    },
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const isMobileScreen = window.innerWidth <= 767;
      Tabs.setIsMobile(isMobileScreen);
      if (isMobileScreen) {
        Tabs.setSidebarVisible(false);
      } else {
        Tabs.setSidebarVisible(true);
      }
    };

    handleWindowResize(); // Set initial isMobile state on component mount

    window.addEventListener("resize", handleWindowResize); // Update isMobile state on window resize

    return () => {
      window.removeEventListener("resize", handleWindowResize); // Cleanup the event listener on component unmount
    };
  }, []);

  return (
    <>
      <Box sx={style.SideBarBody}>
        {Tabs.Tab.map((tab, index) => (
          <Box
            sx={{
              ...style.SidebarItem,
              ...(tab.Tabid === Tabs.selectedTabId && style.selectedTab),
            }}
            key={index}
            onClick={() => Tabs.handleTabSelection(tab.Tabid)}
          >
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={1.4} sx={style.iconsGrid}>
                <IoIosMenu />
              </Grid>
              <Grid item xs={8} sx={style.textBoxGrid}>
                <TextField
                  size="small"
                  sx={style.textBox}
                  value={tab.TabName}
                  onChange={(e) => Tabs.UpdateTabs(e, index)}
                />
              </Grid>
              <Grid item xs={2} sx={style.DeleteIcon}>
                <MdOutlineDelete onClick={() => Tabs.DeleteTabs(index)} />
              </Grid>
            </Grid>
          </Box>
        ))}

        <Stack>
          <Button
            variant="outlined"
            startIcon={<AiOutlinePlus />}
            sx={style.addButton}
            onClick={Tabs.AddTab}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </>
  );
}
