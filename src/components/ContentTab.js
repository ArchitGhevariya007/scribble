import React from "react";
import { Box, Tab, Typography, Grid } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useState } from "react";
import Todos from "./Todos";
import Notes from "./Notes";
import Passwords from "./Passwords";

// import Links from "./Links";

// Main function
export default function ContentTab() {
  const [value, setValue] = useState("1");
  const [SearchText, SetSearchText] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    mainContainer: {
      marginTop: 6.5,
      marginLeft: "220px",
      padding: 3,
      // width: "auto",
      maxWidth: "100%",
      overflowX: "hidden",
    },
    TabsContainer: {
      mt: 3,
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
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            {/* Date and Time */}
            <Grid xs>
              <Typography variant="h4">{today}</Typography>
            </Grid>
            {/* Search Box */}
            <Grid>
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
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
