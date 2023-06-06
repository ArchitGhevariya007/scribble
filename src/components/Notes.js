import React, { useEffect, useContext } from "react";
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
  },
  AddButtonContainer: {
    border: "3px solid #2d3036",
    borderStyle: "dashed",
    width: 250,
    height: 310,
    p: 1.5,
    borderRadius: 1,
    overflow: "hidden",
    // mx: 3,
    // mx:"auto",
    // marginTop: 1,
    position: "relative",
    cursor: "pointer",
    mt:2,
    ml:3
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

export default function Notes(props) {
  //Clock
  var today = new Date().toLocaleDateString(undefined, {
    month: "long",
    day: "2-digit",
  });


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
    Tabs.SetNote([...Tabs.Note, newNote]);
  };

  //Note Change function
  const handleNoteChange = (index, field, value) => {
    const updatedNotes = [...Tabs.Note];
    updatedNotes[index][field] = value;
    Tabs.SetNote(updatedNotes);
  };

  //************* set data to local storage *************
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(Tabs.Note));
  }, [Tabs.Note]);

  //************* delete Notes function *************
  const DeleteNote = (index) => {
    let newList = [...Tabs.Note];
    newList.splice(index, 1);
    Tabs.SetNote([...newList]);
  };

    // Filter the notes based on the search text
    const filteredNotes = Tabs.Note.filter((note) =>
    note.Title.toLowerCase().includes(props.searchText.toLowerCase()) ||
    note.Description.toLowerCase().includes(props.searchText.toLowerCase())
  );

  return (
    <>
      <Box sx={style.MainContainer}>
        {filteredNotes.map((notes, index) => {
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
