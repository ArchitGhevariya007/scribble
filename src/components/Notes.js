import React from "react";
import { Box, Divider, Typography, Grid } from "@mui/material";
import { FiEdit3 } from "react-icons/fi";

const style = {
  MainContainer: {
    display: "flex",
    flexWrap: "wrap",
    p: 1,
  },
  notesContainer: {
    backgroundColor: "#2d3036",
    width: 250,
    height: 300,
    p: 1.5,
    borderRadius: 1,
    overflow: "hidden",
  },
  contentBox: {
    height: "230px",
    overflow: "hidden",
  },
  contentText: {
    color: "#BCBCBC",
    whiteSpace: "normal",
  },
  footer: {
    marginTop: "10px",
  },
  editIcon: {
    color: "primary",
    "&:hover": {
      cursor: "pointer",
    },
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
          <Typography variant="h5">Title</Typography>
          <Box component="div" sx={style.contentBox}>
            <p style={style.contentText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Box>
          <Box component="div" sx={style.footer}>
            <Divider />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              style={{marginTop: 7}}
            >
              <Typography variant="p">{today}</Typography>
              <FiEdit3 sx={style.editIcon} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
