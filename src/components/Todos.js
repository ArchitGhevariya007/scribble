import React, { useState } from "react";
import { Box, TextField, Stack, Button } from "@mui/material";
import { v4 as uuid } from "uuid";
//import TodosList from "./TodosList";

export default function Todos() {
  const style = {
    addBox: {
      //   backgroundColor: "#2d3036",
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

  //   Add todo text
  const [TodoText, SetTodoText] = useState("");
  const [AddTodoText, SetAddTodoText] = useState([
    {
      id: 101,
      task: "Hello",
    },
    {
      id: 102,
      task: "Archit",
    },
  ]);

  const AddTodo = (e) => {
    SetAddTodoText([
      ...AddTodoText,
      {
        id: uuid(),
        task: TodoText,
      },
    ]);

    
    localStorage.setItem("Tasks", JSON.stringify(AddTodoText));
    let tasksList=localStorage.getItem(AddTodoText.task);
    console.log(tasksList);
    SetTodoText("");
    e.preventDefault();
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

      <Box sx={style.todolist}>
        {/* <TodosList task={AddTodoText} /> */}
        {/* {AddTodoText.map((data, key) => (
          <p key={key}> {localStorage.getItem(data.task)}</p>
        ))} */}
        {
         
        }
      </Box>
    </>
  );
}
