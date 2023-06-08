import React, { useState } from "react";
import { Backdrop, Box, Modal, Fade, TextField } from "@mui/material";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

export default function NoteModal(props) {
  const style = {
    ModalBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "75%",
      height: "70%",
      bgcolor: "#2d3036",
      boxShadow: 24,
      p: 4,
      borderRadius: 1,
    },
    editIcon: {
      cursor: "pointer",
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
    deleteIcon: {
      marginLeft: 8,
      cursor: "pointer",
    },
  };

  //State for modal open-close
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/*Note footer edit icon */}
      <FiEdit3 style={style.editIcon} onClick={handleOpen} />

      {/*Note footer delete icon */}
      <MdOutlineDelete
        style={style.deleteIcon}
        onClick={() => props.DeleteNote(props.index)}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style.ModalBox}>
            {/* Modal title */}
            <TextField
              size="small"
              placeholder="Add Title"
              sx={style.TitleInput}
              value={props.title}
              onChange={(event) =>
                props.handleNoteChange(props.index, "Title", event.target.value)
              }
            />

            {/* Modal content */}
            <Box component="div" sx={style.contentBox}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                multiline
                rows={19}
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
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
