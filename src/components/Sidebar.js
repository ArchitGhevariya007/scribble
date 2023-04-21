import React from "react";
import { Box, Stack } from "@mui/material";
export default function Sidebar() {
  const style={
    SideBarBody:{
      backgroundColor: "#2d3036",
      width:"12%",
      color:"white",
      pt:2,
      pl:2,
      height:"100vh"
    }
  }
  return (
  <>
  <Box sx={style.SideBarBody}>
    <Stack>
      <p>Hello</p>
      <p>World</p>
    </Stack>
  </Box>
  </>
  );
}
