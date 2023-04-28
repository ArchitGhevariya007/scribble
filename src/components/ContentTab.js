import React from "react";
import { Box, Tab, Typography,FormControl,InputLabel,Input,InputAdornment } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";

import { useState } from "react";

// Main function
export default function ContentTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    mainContainer: {
      padding: 3,
    },
    tabs: {
      color: "rgb(232, 232, 232)",
    },
    HeaderContainer: {
      padding:3,
      maxWidth: "calc(100%-200px)",
      display:"inline-",
      color: "rgb(255, 255, 255)",
    },
  };

  return (
    <>
      <Box sx={style.HeaderContainer}>
        <Typography variant="h3">Hello</Typography>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Box>

      <Box sx={style.mainContainer}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Todos" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
