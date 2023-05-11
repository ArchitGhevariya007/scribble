import React from "react";
import { Box, Divider, Typography, Grid, TextField,IconButton } from "@mui/material";
import { FiEdit3 } from "react-icons/fi";
import NoteModal from "./NoteModal";

export default function NoteComponent(props) {

  //Style
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
  });

  return (
    <>
      <Box component="div" sx={style.notesContainer}>
        <TextField
          fullwidth
          size="small"
          placeholder="Add Title"
          sx={style.TitleInput}
          value={props.title}
          onChange={(event) =>
            props.handleNoteChange(props.index, "Title", event.target.value)
          }
        />

        <Box component="div" sx={style.contentBox}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            multiline
            rows={10}
            placeholder="Add Note here..."
            value={props.description}
            sx={style.ContetntInput}
            InputProps={{ style: { color: "#BCBCBC" } }}
            onChange={(event) =>
              props.handleNoteChange(
                props.index,
                "Description",
                event.target.value
              )
            }
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
              <FiEdit3 style={style.editIcon} onClick={()=>{<NoteModal/>}} />
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
