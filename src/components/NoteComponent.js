import React from "react";
import {
  Box,
  Divider,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { FiEdit3 } from "react-icons/fi";

export default function NoteComponent() {
  const style = {
    notesContainer: {
      backgroundColor: "#2d3036",
      width: 250,
      height: 310,
      p: 1.5,
      borderRadius: 1,
      overflow: "hidden",
      marginRight: 3,
      marginTop: 3,
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

  //Clock
  var today = new Date().toLocaleDateString(undefined, {
    month: "long",
    day: "2-digit",
    // weekday: "long",
  });
  return (
    <>
      <Box component="div" sx={style.notesContainer}>
        <TextField
          size="small"
          placeholder="Add Title"
          fullwidth
          sx={style.TitleInput}
        />

        <Box component="div" sx={style.contentBox}>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            rows={10}
            placeholder="Add Note here..."
            sx={style.ContetntInput}
            InputProps={{ style: { color: "#BCBCBC" } }}
          />
        </Box>

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
    </>
  );
}
