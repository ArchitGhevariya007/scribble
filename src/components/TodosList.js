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

  const style = {
    todoContainer: {
      //backgroundColor: "#22262b",
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
      },
      icons:{
        marginLeft:100,
        color:"#000",
        fontSize:"10px"
        //padding:10
      }
    },
  };

  console.log(Checked);

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
                  label={<span style={style.line}>{data.task}</span>}
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
                  <RxPencil1  style={{marginRight:7,cursor:"pointer"}}/>
                  <MdOutlineDelete style={{cursor:"pointer"}} />
                </Box>
              </Stack>
            </Container>
          ))
        : ""}
    </>
  );
}
