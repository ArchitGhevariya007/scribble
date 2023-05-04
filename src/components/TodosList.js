import React from "react";
import { Container, Checkbox, FormControlLabel } from "@mui/material";

export default function TodosList(props) {
  const style = {
    todoContainer: {
      // backgroundColor: "#22262b",
      mt: 1,
      mb: 1,
      padding: 0.5,
      borderRadius: 1,
    },
    CheckBox: {
      color:"rgb(232, 232, 232)",
      borderRadius: 20,
      
    },
  };
  return (
    <>
      {props.Textdata != null
        ? props.Textdata.map((data, key) => (
            <Container maxWidth="lg" key={key} sx={style.todoContainer}>
              <FormControlLabel
                label={data.task}
                control={<Checkbox sx={style.CheckBox} color="primary" />}
              />
            </Container>
          ))
        : ""}
    </>
  );
}
