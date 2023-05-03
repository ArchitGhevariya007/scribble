import React, { useState, useEffect } from "react";
import { Box, TextField, Stack, Button } from "@mui/material";
import { v4 as uuid } from "uuid";
//import TodosList from "./TodosList";

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
      backgroundColor: "#2d3036",
      padding: 1,
      mt: 2,
      borderRadius: 2,
      minHeight: "48vh",
      height: "auto",
      marginBottom: "10px",
    },
  };

  //getting data from local storage and adding to state
  //if we don't get data then data will be lost after refreshing the page
  const getTodos = () => {
    const LocalTodo = localStorage.getItem("Tasks");
    if (LocalTodo === []) {
      return [];
    } else {
      return JSON.parse(LocalTodo);
    }
  };

  //Add todo text
  const [TodoText, SetTodoText] = useState("");
  const [AddTodoText, SetAddTodoText] = useState(getTodos());

  // Add button handling
  const AddTodo = (e) => {
    if (TodoText !== "") {
      SetAddTodoText([
        ...AddTodoText,
        {
          id: uuid(),
          task: TodoText,
        },
      ]);

      SetTodoText("");
      e.preventDefault();
    }
  };

  // setting data to local storage
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(AddTodoText));
  }, [AddTodoText]);

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

      <Box sx={style.todolist}>
        {
        AddTodoText!=null?
        AddTodoText.map((data, key) =>( 
          <p key={key}>{data.task}</p>
        )):""
          
        }
      </Box>
    </>
  );
}
