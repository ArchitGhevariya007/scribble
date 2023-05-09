import React from "react";
import { Box, Divider, Typography, Grid, TextField } from "@mui/material";
import { FiEdit3 } from "react-icons/fi";

//Style
const style = {
  MainContainer: {
    display: "flex",
    flexWrap: "wrap",
    p: 1,
  },
  notesContainer: {
    backgroundColor: "#2d3036",
    width: 250,
    height: 310,
    p: 1.5,
    borderRadius: 1,
    overflow: "hidden",
  },
  contentBox: {
    height: "231px",
    overflow: "hidden",
  },
  footer: {
    marginTop: "10px",
  },
  editIcon: {
    cursor: "pointer",
  },
  TitleInput: {
    input: {
      color: "rgb(232, 232, 232)",
    },
    "& fieldset": { border: "none" },
  },
  ContetntInput: {
    "& fieldset": { border: "none" },
  },
};

export default function Notes() {
  //Clock
  var today = new Date().toLocaleDateString(undefined, {
    month: "long",
    day: "2-digit",
    // weekday: "long",
  });

  return (
    <>
      <Box sx={style.MainContainer}>
        <Box component="div" sx={style.notesContainer}>
          {/* Title */}
          <TextField
            size="small"
            placeholder="Add Title"
            fullwidth
            sx={style.TitleInput}
          />

          {/* note content */}
          <Box component="div" sx={style.contentBox}>
            <TextField
            id="outlined-multiline-static"
            fullWidth
              multiline
              rows={10}
              placeholder="Add Note here..."
              sx={style.ContetntInput}
              InputProps={{style:{color: "#BCBCBC"}}}
            />
          </Box>

          {/* footer */}
          <Box component="div" sx={style.footer}>
            <Divider />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              style={{ marginTop: 7 }}
            >
              <Typography variant="p">{today}</Typography>
              <Box component="div">
                <FiEdit3 style={style.editIcon} />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
