import React from "react";
import { Box, Divider, Typography, Grid, TextField } from "@mui/material";
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
    TitleInput: {
      input: {
        color: "rgb(232, 232, 232)",
        width: "100%",
      },
      "& fieldset": { border: "none" },
    },
    ContetntInput: {
      "& fieldset": { border: "none" },
    },
  };

  return (
    <>
      <Box component="div" sx={style.notesContainer}>
        {/* Note Title */}
        <TextField
          size="small"
          placeholder="Add Title"
          sx={style.TitleInput}
          value={props.title}
          onChange={(event) =>
            props.handleNoteChange(props.index, "Title", event.target.value)
          }
        />

        {/* Note Content */}
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


        {/* Note footer */}
        <Box component="div" sx={style.footer}>
          <Divider />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: 7 }}
          >
            {/* Date */}
            <Typography variant="p">{props.Date}</Typography>
            <Box component="div">
              {/* Note Modal */}
              <NoteModal
                index={props.index}
                title={props.title}
                description={props.description}
                handleNoteChange={props.handleNoteChange}
                DeleteNote={props.DeleteNote}
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
