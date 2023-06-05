import React, { useState,useContext } from "react";
import { Box, Stack, Grid, Button, TextField } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { TabContextCreate } from "../context/TabContext";

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  //Style
  const style = {
    SideBarBody: {
      backgroundColor: "#2d3036",
      width: "100%",
      maxWidth: "200px",
      pt: 3.5,
      p: 2,
      minHeight: "100%",
      height: "100%",
      float: "left",
      position: "fixed",
      overflow: "auto",
      zIndex: 1,
      // marginTop:"7.5vh"
      display: sidebarVisible ? "block" : "none",
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
      //backgroundColor: "#22262b",
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

  //************* Using Context *************
  const Tabs = useContext(TabContextCreate);

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


  return (
    <>
    <Box sx={style.toggleButton}>
        <Button variant="outlined" onClick={handleToggleSidebar}>
          Toggle Sidebar
        </Button>
      </Box>
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
