import React from "react";
import { Box, Tab, Typography, Tabs } from "@mui/material";
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";

// Main function
export default function ContentTab() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    mainContainer: {
      float:"left",
      padding:3
    },
    tabs:{
      color:"rgb(232, 232, 232)"
    }
  };

  return (
    <Box sx={style.mainContainer}>

      <Box >
        <Typography variant="h2">Hello</Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "#22262b",mt:3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Todos" value="1" sx={style.tabs}/>
          <Tab label="Notes" value="2" sx={style.tabs}/>
          <Tab label="Link" value="3" sx={style.tabs}/>
        </Tabs>
      </Box>
      
        <TabPanel value="1" index={0}>
          Item One
        </TabPanel>
        <TabPanel value="2" index={1}>
          Item Two
        </TabPanel>
        <TabPanel value="3" index={2}>
          Item Three
        </TabPanel>

    </Box>
  );
}
