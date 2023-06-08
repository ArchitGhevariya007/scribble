import React from "react";
import ContentTab from "./ContentTab";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TabContext from "../context/TabContext";
import { Box } from "@mui/material";

export default function MainCotainer() {
  return (
    <>
      <Box style={{}}>
        <TabContext>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
          <ContentTab></ContentTab>
        </TabContext>
      </Box>
    </>
  );
}
