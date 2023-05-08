import React from "react";
import { Box, Divider } from "@mui/material";

const style = {
  MainContainer: {
    display: "flex",
    flexWrap: "wrap",
    p: 1,
    m: 1,
  },
  notesContainer: {
    backgroundColor: "#2d3036",
    width: 250,
    height: 250,
    p: 1.5,
    borderRadius: 1,
    overflow: 'hidden',
  },
  content:{
    color:"#BCBCBC",
  }
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
          <h3>Title</h3>
          <p sx={style.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Divider />
          {today}
        </Box>
      </Box>
    </>
  );
}
