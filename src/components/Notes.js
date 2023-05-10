import React, { useState } from "react";
import { Box } from "@mui/material";
import NoteComponent from "./NoteComponent";
import { CiSquarePlus } from "react-icons/ci";


//Style
const style = {
  MainContainer: {
    display: "flex",
    flexWrap: "wrap",
    p: 1,
  },
  AddButtonContainer:{
      border: "3px solid #2d3036",
      borderStyle: "dashed",
      width: 250,
      height: 310,
      p: 1.5,
      borderRadius: 1,
      overflow: "hidden",
      marginRight: 3,
      marginTop: 3,
      position: "relative",
      cursor:"pointer"
  },
  AddButton:{
    position: "absolute",
    top: "50%",
    left:"50%",
    transform: "translate(-50%, -50%)",
    fontSize: "30px",
    color:"#2d3036",
    pointer:"cursor",
  }
};

export default function Notes() {
  //Add new Note component
  const [Note, SetNote] = useState([]);
  const AddComponent = () => {
    SetNote([...Note, <NoteComponent />]);
  };

  // console.log(Note);

  return (
    <>
      <Box sx={style.MainContainer}>
        {Note.map((components, index) => (
          <Box component="div" key={index}>
            {components}
          </Box>
        ))}
        <Box component="div" sx={style.AddButtonContainer} onClick={AddComponent}>
          <CiSquarePlus  style={style.AddButton}/>
        </Box>
      </Box>
    </>
  );
}
