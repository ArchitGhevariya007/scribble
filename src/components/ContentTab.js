import React from "react";
import { Box, Tab, Typography, Grid } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useState } from "react";
import Todos from "./Todos";
import Notes from "./Notes";
import Links from "./Links";

// Main function
export default function ContentTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    mainContainer: {
      marginTop: 6.5,
      marginLeft: "220px",
      padding: 3,
      width: "auto",
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
      borderRadius: 3,
      color: "rgb(232, 232, 232)",
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
    <Box sx={style.mainContainer}>
      {/* Header Container */}
      <Box sx={style.HeaderContainer}>
        <Grid container spacing={2}>
          {/* Date and Time */}
          <Grid item xs={9}>
            <Typography variant="h4">{today}</Typography>
          </Grid>

          {/* Search Box */}
          <Grid item xs={1}>
            <input
              type="text"
              placeholder="Search Task"
              style={style.SearchBox}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={style.TabsContainer}>
        <TabContext value={value}>
          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Todos" value="1" disableRipple sx={style.TabColor} />
              <Tab label="Notes" value="2" disableRipple sx={style.TabColor} />
              <Tab label="Links " value="3" disableRipple sx={style.TabColor} />
            </TabList>
          </Box>

          {/* Tab Content */}
          <TabPanel value="1">
            <Todos />
          </TabPanel>
          <TabPanel value="2">
            <Notes />
          </TabPanel>
          <TabPanel value="3">
            <Links />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
