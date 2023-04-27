import React from "react";
import { Box, Stack, Grid } from "@mui/material";
import { CiGrid41, CiBank } from "react-icons/ci";

export default function Sidebar() {
  const style = {
    SideBarBody: {
      backgroundColor: "#2d3036",
      width: "200px",
      pt: 3.5,
      pl: 3,
      height: "100vh",
      float:"left",
      overflow: "auto"
    },
  };

  //sidebar icons & names
  const iconlist = [
    { icon: CiGrid41, name: "Home" },
    { icon: CiBank, name: "Test" },
  ];

  return (
    <>
      <Box sx={style.SideBarBody}>
        <Stack>
          {iconlist.map((data, index) => (
            <Grid container direction="row" alignItems="center" key={index}>
              <Grid item xs={2.5}>
                <data.icon size="1.5em" />
              </Grid>
              <Grid item xs={9}>
                <p>{data.name}</p>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Box>
    </>
  );
}
