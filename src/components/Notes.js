import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import NoteComponent from "./NoteComponent";
import { CiSquarePlus } from "react-icons/ci";
import { v4 as uuid } from "uuid";
import { TabContextCreate } from "../context/TabContext";

//Style
const style = {
  MainContainer: {
    display: "flex",
    flexWrap: "wrap",
    p: 1,
  },
  AddButtonContainer: {
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
    cursor: "pointer",
  },
  AddButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "30px",
    color: "#2d3036",
    pointer: "cursor",
  },
};

export default function Notes() {
  //Clock
  var today = new Date().toLocaleDateString(undefined, {
    month: "long",
    day: "2-digit",
  });

  //************* get data from local storage *************
  const getNotes = () => {
    const LocalNotes = localStorage.getItem("Notes");
    if (LocalNotes === null) {
      return [];
    } else {
      return JSON.parse(LocalNotes);
    }
  };

  //Notes State
  const [Note, SetNote] = useState(getNotes());

  //************* Using Context *************
  const Tabs = useContext(TabContextCreate);

  const selectedTab = Tabs.Tab.find((tab) => tab.Tabid === Tabs.selectedTabId);

  //Add Note component
  const AddComponent = () => {
    const newNote = {
      NotesId: uuid(),
      TabId: Tabs.selectedTabId,
      Title: "",
      Description: "",
      Date: today,
    };
    SetNote([...Note, newNote]);
  };

  //Note Change function
  const handleNoteChange = (index, field, value) => {
    const updatedNotes = [...Note];
    updatedNotes[index][field] = value;
    SetNote(updatedNotes);
  };

  //************* set data to local storage *************
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(Note));
  }, [Note]);

  //************* delete Notes function *************
  const DeleteNote = (index) => {
    let newList = [...Note];
    newList.splice(index, 1);
    SetNote([...newList]);
  };

  return (
    <>
      <Box sx={style.MainContainer}>
        {Note.map((notes, index) => {
          if (selectedTab && notes.TabId === selectedTab.Tabid) {
            return (
              // Note Component
              <NoteComponent
                key={index}
                index={index}
                id={notes.NotesId}
                title={notes.Title}
                description={notes.Description}
                Date={notes.Date}
                handleNoteChange={handleNoteChange}
                DeleteNote={DeleteNote}
              />
            );
          } else {
            return null;
          }
        })}

        {/* Add new Note */}
        <Box
          component="div"
          sx={style.AddButtonContainer}
          onClick={AddComponent}
        >
          <CiSquarePlus style={style.AddButton} />
        </Box>
      </Box>
    </>
  );
}
