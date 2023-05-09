import React, { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
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
    marginRight:3,
    marginTop:3
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

  //Add new Note component
  const [component, SetComponent] = useState([]);
  const AddComponent = () => {
    SetComponent([
      ...component,
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
    ]);
  };

  return (
    <>
      <Box sx={style.MainContainer}>
        {component.map((components, index) => (
          <Box component="div" key={index}>{components}</Box>
        ))} 
        <Button onClick={AddComponent}>Add</Button>
      </Box>
    </>
  );
}
