import React, { useState } from "react";
import {
  Container,
  Checkbox,
  FormControlLabel,
  Stack,
  Box,
} from "@mui/material";
import { RxPencil1 } from "react-icons/rx";
import { MdOutlineDelete } from "react-icons/md";

export default function TodosList(props) {

  const [Checked, setChecked] = useState();

  //Css
  const style = {
    todoContainer: {
      backgroundColor: "#2d3036",
      mt: 1,
      mb: 1,
      padding: 0.5,
      borderRadius: 1,
    },
    CheckBox: {
      color: "rgb(232, 232, 232)",
      borderRadius: 20,
      "&:checked+label": {
        textDecorationLine: "line-through",
      },
      line: {
        textDecoration: Checked ? "line-through" : "none",
      }
    },
  };

  const DeleteTask=()=>{

  }

  return (
    <>
      {props.Textdata != null
        ? props.Textdata.map((data, key) => (
            <Container maxWidth="lg" key={key} sx={style.todoContainer}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <FormControlLabel
                  label={<span sx={style.line}>{data.task}</span>}
                  control={
                    <Checkbox
                      sx={style.CheckBox}
                      color="primary"
                      onChange={() => {
                        setChecked(data.isSelected);
                        setChecked();
                      }}
                      checked={Checked}
                    />
                  }
                />

                <Box>
                  <RxPencil1  style={{marginRight:10,cursor:"pointer"}}/>
                  <MdOutlineDelete style={{cursor:"pointer"}}  onClick={DeleteTask}/>
                </Box>
              </Stack>
            </Container>
          ))
        : ""}
    </>
  );
}
