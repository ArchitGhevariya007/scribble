import React, { useContext } from "react";
import { Box, Tab, Typography, Grid } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useState } from "react";
import Todos from "./Todos";
import Notes from "./Notes";
import Passwords from "./Passwords";
import { TabContextCreate } from "../context/TabContext";

//************* Using Context *************

// Main function
export default function ContentTab() {
  const Tabs = useContext(TabContextCreate);
  const [value, setValue] = useState("1");
  const [SearchText, SetSearchText] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    mainContainer: {
      marginTop: 6.5,
      marginLeft: Tabs.isMobile ? "0" : "220px",
      maxWidth: "100%",
      overflowX: "hidden",
    },
    Contentheader: {
      padding: 3,
    },
    TabsContainer: {
      width: "100%",
    },
    TabsTitle: {
      p: "0 24px",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "0px",
        right: "24px",
        height: "0.8px",
        background:
          "linear-gradient(to right, transparent, transparent 24px, #1e2126 24px, #1e2126)",
      },
    },
    HeaderContainer: {
      color: "rgb(255, 255, 255)",
      alignItems: "center",
    },
    SearchBox: {
      backgroundColor: "transparent",
      padding: 10,
      border: "2px #2d3036  solid",
      borderRadius: 5,
      color: "rgb(232, 232, 232)",
      outline: "none",
    },
    TabColor: {
      color: "rgb(232, 232, 232)",
    },
    dateTime: {
      fontSize: Tabs.isMobile ? "24px" : "32px",
    },
  };

  //Clock
  var today = new Date().toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    weekday: "long",
  });

  return (
    <>
      <Box sx={style.mainContainer}>
        {/* Header Container */}
        <Box sx={style.Contentheader}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            {/* Date and Time */}
            <Grid xs>
              <Typography sx={style.dateTime}>{today}</Typography>
            </Grid>
            {/* Search Box */}
            <Grid style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Search"
                style={style.SearchBox}
                onChange={(e) => {
                  SetSearchText(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={style.TabsContainer}>
          <TabContext value={value}>
            {/* Tabs */}
            <Box sx={style.TabsTitle}>
              <TabList onChange={handleChange}>
                <Tab
                  label="Todos"
                  value="1"
                  disableRipple
                  sx={style.TabColor}
                />
                <Tab
                  label="Notes"
                  value="2"
                  disableRipple
                  sx={style.TabColor}
                />
                <Tab
                  label="Passwords "
                  value="3"
                  disableRipple
                  sx={style.TabColor}
                />
              </TabList>
            </Box>

            {/* Tab Content */}
            <TabPanel value="1">
              <Todos searchText={SearchText} />
            </TabPanel>
            <TabPanel value="2">
              <Notes searchText={SearchText} />
            </TabPanel>
            <TabPanel value="3">
              <Passwords searchText={SearchText} />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  );
}
