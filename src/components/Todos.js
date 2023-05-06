import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Stack,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { v4 as uuid } from "uuid";
//import { RxPencil1 } from "react-icons/rx";
import { MdOutlineDelete } from "react-icons/md";

export default function Todos() {
  //Css
  const style = {
    addBox: {
      borderRadius: 0.3,
      padding: 1,
    },
    addTextField: {
      backgroundColor: "transparent",
      border: "2px #2d3036  solid",
      borderRadius: 1,
      input: {
        color: "rgb(232, 232, 232)",
      },
      "& fieldset": { border: "none" },
    },
    todolist: {
      //backgroundColor: "#2d3036",
      padding: 1,
      mt: 2,
      borderRadius: 2,
      minHeight: "48vh",
      height: "auto",
      marginBottom: "10px",
    },
    todoContainer: {
      backgroundColor: "#2d3036",
      mt: 1,
      mb: 1,
      padding: 0.5,
      borderRadius: 1,
      width: "100%",
      "&:hover": {
        backgroundColor: "#353940",
        cursor: "pointer",
        transition: "transform .3s ease-out",
        transform: "scale(1.01)",
      },
    },
    CheckBox: {
      color: "rgb(232, 232, 232)",
    },
  };

  //getting data from local storage and adding to state
  //if we don't get data then data will be lost after refreshing the page
  const getTodos = () => {
    const LocalTodo = localStorage.getItem("Tasks");
    if (LocalTodo === null) {
      return [];
    } else {
      return JSON.parse(LocalTodo);
    }
  };

  //************* Add todo text *************
  const [TodoText, SetTodoText] = useState("");
  const [AddTodoText, SetAddTodoText] = useState(getTodos());

  //************* Add button handling *************
  const AddTodo = (e) => {
    if (TodoText !== "") {
      SetAddTodoText([
        ...AddTodoText,
        {
          id: uuid(),
          task: TodoText,
          isSelected: false,
        },
      ]);
      SetTodoText("");
      e.preventDefault();
    }
  };

  //************* set data to local storage *************
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(AddTodoText));
  }, [AddTodoText]);

  //************* delete todos function *************
  const DeleteTask = (index) => {
    let newList = [...AddTodoText];
    newList.splice(index, 1);
    SetAddTodoText([...newList]);
  };

  //************* handle Checkbox Change *************

  const handleCheckboxChange = (event, index, id) => {
    //update checkbox status
    SetAddTodoText(
      AddTodoText.map((item) =>
        item.id === id ? { ...item, isSelected: event.target.checked } : item
      )
    );
  };

  return (
    <>
      {/* Add Todo Text Box */}
      <Box sx={style.addBox}>
        <TextField
          placeholder="Enter Task"
          sx={style.addTextField}
          fullWidth
          value={TodoText}
          onChange={(e) => {
            SetTodoText(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <Stack direction="row" spacing={1}>
                <Button variant="contained" disableRipple onClick={AddTodo}>
                  Add
                </Button>
              </Stack>
            ),
          }}
        />
      </Box>

      {/* Task List */}
      <Box sx={style.todolist}>
        {AddTodoText != null
          ? AddTodoText.map((data, key) => (
              <Container maxWidth="lg" key={key} sx={style.todoContainer}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <FormControlLabel
                    label={
                      <span
                        style={{
                          textDecoration: data.isSelected
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {data.task}
                      </span>
                    }
                    control={
                      <Checkbox
                        sx={style.CheckBox}
                        color="primary"
                        onChange={(event) =>
                          handleCheckboxChange(event, key, data.id)
                        }
                        checked={data.isSelected}
                      />
                    }
                  />

                  <Box>
                    {/* <RxPencil1 style={{ marginRight: 10, cursor: "pointer" }} /> */}
                    <MdOutlineDelete
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        DeleteTask(key);
                      }}
                    />
                  </Box>
                </Stack>
              </Container>
            ))
          : ""}
      </Box>
    </>
  );
}
