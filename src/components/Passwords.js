import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";

export default function Passwords() {
  const style = {
    MainContainer: {
      display: "flex",
      flexWrap: "wrap",
      p: 1,
    },
    TextField: {
      backgroundColor: "transparent",
      border: "2px #2d3036  solid",
      borderRadius: 1,
      input: {
        color: "rgb(232, 232, 232)",
      },
      "& fieldset": { border: "none" },
    },
  };
  return (
    <>
      <Box sx={style.MainContainer}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs="auto">
            <TextField
              placeholder="Enter Label"
              fullWidth
              sx={style.TextField}
            />
          </Grid>
          <Grid item xs="auto">
            <TextField placeholder="Username" fullWidth sx={style.TextField} />
          </Grid>
          <Grid item xs="auto">
            <TextField placeholder="Password" fullWidth sx={style.TextField} />
          </Grid>
          <Grid item xs="auto">
            <Button variant="contained" size="large">
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
